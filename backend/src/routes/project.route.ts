import { Router } from "express";
import { createProjectHandler, getProjectsHandler, getProjectsByUserHandler } from "../controllers/project.controller";
import authenticate from "../middleware/authenticate";

const projectRoutes = Router();

// prefix: /projects
projectRoutes.post("/", authenticate, createProjectHandler); 
projectRoutes.get("/domain/:domain", getProjectsHandler); 
projectRoutes.get("/user/:userId", getProjectsByUserHandler);

export default projectRoutes;
