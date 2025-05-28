import express from "express";
import {
  getAllDonors,
  addDonor,
  editDonor,
  deleteDonor
} from "../controllers/donorController.js";

const router = express.Router();

router.get("/donor_details", getAllDonors);
router.post("/add_donor_details", addDonor);
router.post("/edit_donor_details", editDonor);
router.delete("/delete_donor", deleteDonor);

export default router;
