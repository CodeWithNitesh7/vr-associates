// serviceroute.js
import express from "express";
import { addService, getAllServices, deleteService, updateService } from '../controller/serviceController.js';
import { verifyAdmin } from '../middleware/isAdmin.js';

const router = express.Router();

router.post("/add-service", verifyAdmin, addService);
router.get("/get-all-services", getAllServices);
router.delete("/delete-service/:name", verifyAdmin, deleteService);
router.put("/update-service/:id", verifyAdmin, updateService);

export default router;
