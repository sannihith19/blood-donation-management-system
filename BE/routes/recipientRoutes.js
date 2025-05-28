import express from "express";
import { getAllRecipients } from "../controllers/recipientController.js";

const router = express.Router();

router.get("/recipient_details", getAllRecipients);

export default router;
