import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface ProjectDocument extends mongoose.Document {
  name: string;
  link: string;
  willPay: boolean;
  license: string;
  domain: string;
  languages: string;
  description: string;
  maintainers: string[];
  // getting user ID for displaying users to their projects
  userId:mongoose.Schema.Types.ObjectId | UserDocument;
  createdAt: Date;
  updatedAt: Date; 
}

const projectSchema = new mongoose.Schema<ProjectDocument>(
  {
    name: { type: String, required: true, maxlength: 255 },
    link: { type: String, required: true, maxlength: 255 },
    willPay: { type: Boolean, required: true },
    license: { type: String, required: true, maxlength: 255 },
    domain: { type: String, required: true, enum: ["Web", "Android","Machine Learning","Data Science","Flutter"] },
    languages: { type: String, required: true, maxlength: 100 },
    description: { type: String, required: true, maxlength: 500 },
    maintainers: [{ type: String, required: true }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model<ProjectDocument>("Project", projectSchema);
export default ProjectModel;