import { Router } from "express";
import {
  listProjects,
  getProject,
  getUserProjects,
  createProject,
} from "../controllers/projects.controller";
import { authMiddleware } from "../middleware/auth";

const router = Router();

// All routes use auth middleware to extract userId
router.use(authMiddleware);

// GET: List projects (public)
router.get("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "list") {
    return listProjects(req as any, res);
  }
  if (action === "get") {
    return getProject(req as any, res);
  }
  if (action === "user-projects") {
    return getUserProjects(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

// POST: Create project (authenticated)
router.post("/", (req, res) => {
  const action = req.query.action as string;
  if (action === "create") {
    return createProject(req as any, res);
  }
  return res.status(400).json({ error: "Invalid action" });
});

export default router;
