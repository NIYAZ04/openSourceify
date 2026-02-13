import "dotenv/config";
import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import authRoutes from "./routes/auth.routes.js";
import profilesRoutes from "./routes/profiles.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import commentsRoutes from "./routes/comments.routes.js";
import upvotesRoutes from "./routes/upvotes.routes.js";
import statsRoutes from "./routes/stats.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(corsMiddleware);

// Routes
app.use("/auth", authRoutes);
app.use("/profiles", profilesRoutes);
app.use("/projects", projectsRoutes);
app.use("/comments", commentsRoutes);
app.use("/upvotes", upvotesRoutes);
app.use("/stats", statsRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
