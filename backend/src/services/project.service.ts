
import appAssert from "../utils/appAssert";
import { BAD_REQUEST, NOT_FOUND } from "../constants/http";
import ProjectModel, { ProjectDocument } from "../models/projects.model";
import mongoose from "mongoose";


type CreateProjectParams = {
  name: string;
  link: string;
  willPay: boolean;
  license: string;
  domain: string;
  languages: string;
  description: string;
  maintainers: string[];
  userId: string; 
};

export const createProject = async (data: CreateProjectParams): Promise<ProjectDocument> => {
  const project = await ProjectModel.create(data);
  return project;
};

export const getProjectsByDomain = async (domain: string): Promise<ProjectDocument[]> => {
  const projects = await ProjectModel.find({ domain });
  return projects;
};

export const getProjectsByUser = async (userId: string): Promise<ProjectDocument[]> => {
  const projects = await ProjectModel.find({ userId });
  return projects;
};

export const deleteProject = async (userId: mongoose.Types.ObjectId, projectId: mongoose.Types.ObjectId): Promise<void> => {
  const project = await ProjectModel.findOneAndDelete({ _id: projectId, userId });
  if (!project) {
    throw new Error("Project not found");
  }
  appAssert(project, NOT_FOUND, "Project not found");
};