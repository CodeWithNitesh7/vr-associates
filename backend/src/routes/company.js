import express from "express";
import {
  addCompany,
  getAllCompanies,
  deleteCompany,
} from "../controller/companyController.js";
import { verifyAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

router.post("/add-company", verifyAdmin,addCompany);
router.get("/get-all-companies", verifyAdmin,getAllCompanies);
// router.put("/update-company/:id",updateCompany);
router.delete("/delete-company/:id", verifyAdmin,deleteCompany);

export default router;
