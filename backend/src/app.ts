import express from "express";
import { corsMiddleware } from "./middleware/cors";
import authRoutes from "./routes/auth.routes";
import profilesRoutes from "./routes/profiles.routes";
import projectsRoutes from "./routes/projects.routes";
import commentsRoutes from "./routes/comments.routes";
import upvotesRoutes from "./routes/upvotes.routes";
import statsRoutes from "./routes/stats.routes";

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
