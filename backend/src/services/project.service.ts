
import appAssert from "../utils/appAssert";
import { BAD_REQUEST } from "../constants/http";
import ProjectModel, { ProjectDocument } from "../models/projects.model";

type CreateProjectParams = {
  name: string;
  link: string;
  willPay: boolean;
  license: string;
  domain: string;
  languages: string;
  description: string;
  maintainers: string[];
  userId: string; // Add userId
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
