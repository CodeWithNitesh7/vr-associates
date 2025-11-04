import express from "express";
import {
  addClient,
  getAllClient,
  deleteClient,
} from "../controller/clientController.js";

import { verifyAdmin } from "../middleware/isAdmin.js";


const router = express.Router();


router.post("/add-client", verifyAdmin,addClient);


router.get("/get-all-clients", verifyAdmin,getAllClient);

router.delete("/delete-client/:id", verifyAdmin,deleteClient);

export default router;
