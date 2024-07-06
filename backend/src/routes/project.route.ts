import { Router } from "express";
import { createProjectHandler, getProjectsHandler } from "../controllers/project.controller";

const projectRoutes = Router();

// prefix: /projects
projectRoutes.post("/", createProjectHandler);
projectRoutes.get("/", getProjectsHandler);

export default projectRoutes;
