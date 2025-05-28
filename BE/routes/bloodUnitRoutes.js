import express from "express";
import { getAllBloodUnits } from "../controllers/bloodUnitController.js";

const router = express.Router();

router.get("/blood_unit_record", getAllBloodUnits);

export default router;
