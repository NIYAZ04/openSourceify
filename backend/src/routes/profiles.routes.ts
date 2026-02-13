import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profiles.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// All routes use auth middleware to extract userId
router.use(authMiddleware);

// GET: Get profile by user_id (public for viewing, own profile)
router.get("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "get") {
    return getProfile(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

// PUT: Update profile (authenticated, own profile only)
router.put("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "update") {
    return updateProfile(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

export default router;
