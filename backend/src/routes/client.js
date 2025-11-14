import express from "express";
import { 
  addClient, 
  getAllClients,
  getAllClientsAdmin,
  getClientById, 
  updateClient, 
  deleteClient 
} from "../controller/clientController.js";

const router = express.Router();

// POST -> add a client
router.post("/add-client", addClient);


router.get("/get-front-clients", getAllClients); // public
router.get("/admin/get-all-clients", getAllClientsAdmin); // admin only

// GET -> get client by ID
router.get("/get-client/:id", getClientById);

// PUT -> update client by ID
router.put("/update-client/:id", updateClient);

// DELETE -> delete client by ID
router.delete("/delete-client/:id", deleteClient);

export default router;
