// src/controllers/project.controller.ts

import { Request, Response } from "express";
import { createProject, deleteProject, getProjectsByDomain,getProjectsByUser } from "../services/project.service";
import catchErrors from "../utils/catchErrors";
import { CREATED, FORBIDDEN, NO_CONTENT, NOT_FOUND, OK } from "../constants/http";
import { projectSchema } from "../schemas/project.schemas";
import ProjectModel from "../models/projects.model";
import mongoose from "mongoose";

export const createProjectHandler = catchErrors(async (req: Request, res: Response) => {
  const userId = req.userId ;  // userId set by authenticate middleware
  const request = projectSchema.parse({ ...req.body, userId });

  const project = await createProject(request);

  return res.status(CREATED).json(project);
});


export const getProjectsHandler = catchErrors(async (req: Request, res: Response) => {
  const domain = req.params.domain; // Get domain from URL params
  const projects = await getProjectsByDomain(domain);
  return res.status(OK).json(projects);
});

export const getProjectsByUserHandler = catchErrors(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const projects = await getProjectsByUser(userId);
  return res.status(OK).json(projects);
});

export const deleteProjectHandler = catchErrors(async (req: Request, res: Response) => {
  const userId = req.userId;
  const projectId = req.params.projectId;

  const projectIdObj = new mongoose.Types.ObjectId(projectId);

  const project = await ProjectModel.findById(projectIdObj);
  if (!project) {
    return res.status(NOT_FOUND).json({ message: "Project not found" });
  }
  if (project.userId.toString() !== userId.toString()) {
    return res.status(FORBIDDEN).json({ message: "You are not authorized to delete this project" });
  }

  // Delete the project
  await deleteProject(userId, projectIdObj);
  console.log("Project Deleted");
  return res.sendStatus(NO_CONTENT); 
});