import express from "express";

// 🧩 Import all 4 service controllers
import {
  createContractStaff,
  getAllContractStaff,
  getContractStaffById,
  updateContractStaff,
  deleteContractStaff
} from "../controller/Services/contractStaff.js";

import {
  createPermanentStaff,
  getAllPermanentStaff,
  getPermanentStaffById,
  updatePermanentStaff,
  deletePermanentStaff
} from "../controller/Services/permanentStaff.js";

import {
  createDigitalMarket,
  getAllDigitalMarkets,
  getDigitalMarketById,
  updateDigitalMarket,
  deleteDigitalMarket
} from "../controller/Services/digiMark.js";

import {
  createInfraIoT,
  getAllInfraIoT,
  getInfraIoTById,
  updateInfraIoT,
  deleteInfraIoT
} from "../controller/Services/infra&IoT.js";

import {
  createWebAppDev,
  getAllWebAppDev,
  getWebAppDevById,
  updateWebAppDev,
  deleteWebAppDev,
} from "../controller/Services/web&App.js";

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
router.post("/add-digital-marketing",createDigitalMarket);
router.get("/get-digital-marketing", getAllDigitalMarkets);
router.get("/getId-digital-marketing/:id", getDigitalMarketById);
router.put("/update-digital-marketing/:id", updateDigitalMarket);
router.delete("/delete-digital-marketing/:id", deleteDigitalMarket);

//
// 🧱 INFRA & IOT ROUTES
//
router.post("/add-infra-iot",createInfraIoT);
router.get("/get-infra-iot", getAllInfraIoT);
router.get("/getId-infra-iot/:id", getInfraIoTById);
router.put("/update-infra-iot/:id", updateInfraIoT);
router.delete("/delete-infra-iot/:id", deleteInfraIoT);


// web & app routes


router.post("/add-web-app-dev", createWebAppDev);
router.get("/get-web-app-dev", getAllWebAppDev);
router.get("/getId-web-app-dev/:id", getWebAppDevById);
router.put("/update-web-app-dev/:id", updateWebAppDev);
router.delete("/delete-web-app-dev/:id", deleteWebAppDev);

export default router;
