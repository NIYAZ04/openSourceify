import { Router } from "express";
import { createProjectHandler, getProjectsHandler, getProjectsByUserHandler, deleteProjectHandler } from "../controllers/project.controller";
import authenticate from "../middleware/authenticate";

const projectRoutes = Router();

projectRoutes.post("/", authenticate, createProjectHandler); 
projectRoutes.get("/domain/:domain", getProjectsHandler); 
projectRoutes.get("/user/:userId", getProjectsByUserHandler);
projectRoutes.delete("/:projectId",authenticate, deleteProjectHandler); 
export default projectRoutes;
