import express from "express";
import { submitContact, getAllContacts, deleteContact } from "../controller/contactController.js";

const router = express.Router();

router.post("/submit-message", submitContact);
router.get("/getContactDetails", getAllContacts);
router.delete("/delete/:id", deleteContact);

export default router;
