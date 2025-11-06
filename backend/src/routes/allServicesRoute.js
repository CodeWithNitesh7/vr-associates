import express from "express";

// 🧩 Import all 4 service controllers
import {
  createContractStaff,
  getAllContractStaff,
  getContractStaffById,
  updateContractStaff,
  deleteContractStaff
} from "../controllers/Services/contractController.js";

import {
  createPermanentStaff,
  getAllPermanentStaff,
  getPermanentStaffById,
  updatePermanentStaff,
  deletePermanentStaff
} from "../controllers/Services/permanentController.js";

import {
  addDigiMarket,
  getAllDigiMarket,
  getDigiMarketById,
  updateDigiMarket,
  deleteDigiMarket
} from "../controllers/Services/digiController.js";

import {
  addInfraIoT,
  getAllInfraIoT,
  getInfraIoTById,
  updateInfraIoT,
  deleteInfraIoT
} from "../controllers/Services/infraController.js";

const router = express.Router();

//
// 🧱 CONTRACT STAFFING ROUTES
//
router.post("/add-contract-staff", createContractStaff);
router.get("/get-contract-staff", getAllContractStaff);
router.get("/getId-contract-staff/:id", getContractStaffById);
router.put("/update-contract-staff/:id", updateContractStaff);
router.delete("/delete-contract-staff/:id", deleteContractStaff);

//
// 🧱 PERMANENT STAFFING ROUTES
//
router.post("/add-permanent-staff", createPermanentStaff);
router.get("/get-permanent-staff", getAllPermanentStaff);
router.get("/getId-permanent-staff/:id", getPermanentStaffById);
router.put("/update-permanent-staff/:id", updatePermanentStaff);
router.delete("/delete-permanent-staff/:id", deletePermanentStaff);

//
// 🧱 DIGITAL MARKETING ROUTES
//
router.post("/add-digital-marketing", addDigiMarket);
router.get("/get-digital-marketing", getAllDigiMarket);
router.get("/getId-digital-marketing/:id", getDigiMarketById);
router.put("/update-digital-marketing/:id", updateDigiMarket);
router.delete("/delete-digital-marketing/:id", deleteDigiMarket);

//
// 🧱 INFRA & IOT ROUTES
//
router.post("/add-infra-iot", addInfraIoT);
router.get("/get-infra-iot", getAllInfraIoT);
router.get("/getId-infra-iot/:id", getInfraIoTById);
router.put("/update-infra-iot/:id", updateInfraIoT);
router.delete("/delete-infra-iot/:id", deleteInfraIoT);

export default router;
