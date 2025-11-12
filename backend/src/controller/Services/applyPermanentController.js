// controller/Services/jobApplicationController.js
import JobApplication from "../../models/Services/permanentApply.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// ------------------ Multer ------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/resumes";
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

// ------------------ Apply Logic ------------------
export const applyForJob = async (req, res) => {
  try {
    const { jobTitle, fullName, email, phoneNumber } = req.body;
    const resume = req.file ? req.file.path : null;

    if (!fullName || !email || !resume)
      return res
        .status(400)
        .json({ message: "Full name, email, and resume are required." });

    const newApplication = new JobApplication({
      jobTitle: jobTitle || "N/A",
      fullName,
      email,
      phoneNumber,
      resume,
    });

    await newApplication.save();
    res
      .status(201)
      .json({ message: "Application submitted successfully!", application: newApplication });
  } catch (error) {
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

// ❌ Delete application
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const app = await JobApplication.findById(id);
    if (!app) return res.status(404).json({ message: "Not found" });

    if (app.resume && fs.existsSync(app.resume)) fs.unlinkSync(app.resume);

    await JobApplication.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
