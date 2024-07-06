
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
};

export const createProject = async (data: CreateProjectParams): Promise<ProjectDocument> => {
  const project = await ProjectModel.create(data);
  return project;
};

export const getAllProjects = async (): Promise<ProjectDocument[]> => {
  const projects = await ProjectModel.find();
  return projects;
};
