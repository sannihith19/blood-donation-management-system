import express from "express";
import {
  getAllBloodBanks,
  addBloodBank
} from "../controllers/bloodBankController.js";

const router = express.Router();

router.get("/blood_bank_details", getAllBloodBanks);
router.post("/blood_bank_details", addBloodBank);

export default router;
