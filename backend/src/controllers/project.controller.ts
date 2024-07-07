// src/controllers/project.controller.ts

import { Request, Response } from "express";
import { createProject, getAllProjects,getProjectsByUser } from "../services/project.service";
import catchErrors from "../utils/catchErrors";
import { CREATED, OK } from "../constants/http";
import { projectSchema } from "../schemas/project.schemas";


export const createProjectHandler = catchErrors(async (req: Request, res: Response) => {
  const userId = req.userId; // userId set by authenticate middleware
  const request = projectSchema.parse({ ...req.body, userId });

  const project = await createProject(request);

  return res.status(CREATED).json(project);
});


export const getProjectsHandler = catchErrors(async (req: Request, res: Response) => {
  const projects = await getAllProjects();

  return res.status(OK).json(projects);
});

export const getProjectsByUserHandler = catchErrors(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const projects = await getProjectsByUser(userId);
  return res.status(OK).json(projects);
});