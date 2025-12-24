import express from "express";
import { generateTravelPlan } from "../controllers/plannerController.js";

const router = express.Router();

router.post("/plan", generateTravelPlan);

export default router;
