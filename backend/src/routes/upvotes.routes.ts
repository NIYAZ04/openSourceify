import { Router } from "express";
import { getUserUpvotes, toggleUpvote } from "../controllers/upvotes.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// All routes use auth middleware to extract userId
router.use(authMiddleware);

// GET: Get user's upvotes (authenticated)
router.get("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "user-upvotes") {
    return getUserUpvotes(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

// POST: Toggle upvote (authenticated)
router.post("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "toggle") {
    return toggleUpvote(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

export default router;
