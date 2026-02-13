import { Router } from "express";
import {
  listProjects,
  getProject,
  getUserProjects,
  createProject,
  deleteProject,
} from "../controllers/projects.controller.js";
import { authMiddleware } from "../middleware/auth.js";

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

// DELETE: Delete project (authenticated)
router.delete("/:id", deleteProject);

export default router;
