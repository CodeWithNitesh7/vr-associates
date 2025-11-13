// controller/Services/jobApplicationController.js
import JobApplication from "../../models/Services/permanentApply.js";
import multer from "multer";
import path from "path";
import cloudinary from "../../configs/cloudinary.js";
import fs from "fs";

// ------------------ Multer ------------------
// We'll still use Multer to *receive* the file temporarily before uploading to Cloudinary.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/temp";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `resume_${Date.now()}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [".pdf", ".doc", ".docx"];
  const ext = path.extname(file.originalname).toLowerCase();
  allowed.includes(ext)
    ? cb(null, true)
    : cb(new Error("Only PDF, DOC, and DOCX files allowed"), false);
};

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});

// ------------------ Apply Logic (Cloudinary) ------------------
export const applyForJob = async (req, res) => {
  try {
    const { jobTitle, fullName, email, phoneNumber } = req.body;

    if (!fullName || !email || !req.file)
      return res
        .status(400)
        .json({ message: "Full name, email, and resume are required." });

    // 🔥 Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "job_applications", // Optional folder on Cloudinary
      resource_type: "raw", // Important: PDFs/DOCs aren't images
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    // Save the Cloudinary URL and public_id
    const newApplication = new JobApplication({
      jobTitle: jobTitle || "N/A",
      fullName,
      email,
      phoneNumber,
      resume: result.secure_url, // Cloudinary URL
      cloudinaryId: result.public_id, // Add this field below in model
    });

    await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully!",
      application: newApplication,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// 🔍 Fetch all applications
export const getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🗑️ Delete application (from DB + Cloudinary)
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const app = await JobApplication.findById(id);
    if (!app) return res.status(404).json({ message: "Not found" });

    // Delete from Cloudinary if exists
    if (app.cloudinaryId) {
      await cloudinary.uploader.destroy(app.cloudinaryId, { resource_type: "raw" });
    }

    await JobApplication.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
