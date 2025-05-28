import express from "express";
import {
  getAllEvents,
  addEvent
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/blood_donate_event", getAllEvents);
router.post("/event_details", addEvent);

export default router;
