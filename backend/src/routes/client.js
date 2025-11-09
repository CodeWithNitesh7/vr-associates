import express from "express";
import { 
  addClient, 
  getAllClients, 
  getClientById, 
  updateClient, 
  deleteClient 
} from "../controller/clientController.js";

const router = express.Router();

// POST -> add a client
router.post("/add-client", addClient);

// GET -> get all clients
router.get("/get-all-clients", getAllClients);

// GET -> get client by ID
router.get("/get-client/:id", getClientById);

// PUT -> update client by ID
router.put("/update-client/:id", updateClient);

// DELETE -> delete client by ID
router.delete("/delete-client/:id", deleteClient);

export default router;
