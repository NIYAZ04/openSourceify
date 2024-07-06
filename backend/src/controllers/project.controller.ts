// src/controllers/project.controller.ts

import { Request, Response } from "express";
import { createProject, getAllProjects } from "../services/project.service";
import catchErrors from "../utils/catchErrors";
import { CREATED, OK } from "../constants/http";
import { projectSchema } from "../schemas/project.schemas";

export const createProjectHandler = catchErrors(async (req: Request, res: Response) => {
  const request = projectSchema.parse(req.body);

  const project = await createProject(request);

  return res.status(CREATED).json(project);
});

export const getProjectsHandler = catchErrors(async (req: Request, res: Response) => {
  const projects = await getAllProjects();

  return res.status(OK).json(projects);
});
