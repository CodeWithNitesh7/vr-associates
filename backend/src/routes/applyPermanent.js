// routes/jobApplicationRoutes.js
import express from "express";
import {
  applyForJob,
  getAllApplications,
  deleteApplication,
  upload,
} from "../controller/Services/applyPermanentController.js";

const router = express.Router();

router.post("/apply", upload.single("resume"), applyForJob);
router.get("/all", getAllApplications);
router.delete("/:id", deleteApplication);

export default router;
