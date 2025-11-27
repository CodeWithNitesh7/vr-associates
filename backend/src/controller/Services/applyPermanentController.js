// controller/Services/jobApplicationController.js
import JobApplication from "../../models/Services/permanentApply.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// ------------------ Multer: Local Storage ------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "src/uploads"; // store inside backend/src/uploads
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `resume_${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [".pdf", ".doc", ".docx"];
  const ext = path.extname(file.originalname).toLowerCase();

  allowed.includes(ext)
    ? cb(null, true)
    : cb(new Error("Only PDF, DOC, DOCX files allowed"), false);
};

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});

// ------------------ Apply Logic (Local Upload) ------------------
export const applyForJob = async (req, res) => {
  try {
    const { jobTitle, fullName, email, phoneNumber } = req.body;

    if (!fullName || !email || !req.file) {
      return res.status(400).json({
        message: "Full name, email, and resume are required.",
      });
    }

    // Save DB entry
    const newApplication = new JobApplication({
      jobTitle: jobTitle || "N/A",
      fullName,
      email,
      phoneNumber,
      resume: `/uploads/${req.file.filename}`, // Local file URL
      localPath: req.file.path,                // For later deletion
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

// ------------------ Get All Applications ------------------
export const getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ------------------ Delete Application ------------------
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const app = await JobApplication.findById(id);
    if (!app) return res.status(404).json({ message: "Not found" });

    // Delete local file
    if (app.localPath && fs.existsSync(app.localPath)) {
      fs.unlinkSync(app.localPath);
    }

    await JobApplication.findByIdAndDelete(id);

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
