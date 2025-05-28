import express from "express";
import { getAllBloodRequests } from "../controllers/bloodRequestController.js";

const router = express.Router();

router.get("/blood_request_details", getAllBloodRequests);

export default router;
