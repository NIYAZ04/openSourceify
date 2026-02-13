import { Router } from "express";
import { listComments, createComment, deleteComment } from "../controllers/comments.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// All routes use auth middleware to extract userId
router.use(authMiddleware);

// GET: List comments for a project (public)
router.get("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "list") {
    return listComments(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

// POST: Create/Delete comment (authenticated)
router.post("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "create") {
    return createComment(req as any, res);
  } else if (action === "delete") {
    return deleteComment(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

export default router;
