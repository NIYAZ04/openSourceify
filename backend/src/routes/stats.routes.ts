import { Router } from "express";
import { getStats } from "../controllers/stats.controller.js";

const router = Router();

// GET: Get platform stats (public)
router.get("/", getStats);

export default router;
