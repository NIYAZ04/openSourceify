import { Router } from "express";
import { signUp, signIn, signOut, getSession } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth";

const router = Router();

// Sign up
router.post("/signup", signUp);

// Sign in
router.post("/signin", signIn);

// Sign out (optional auth middleware - token might be invalid)
router.post("/signout", signOut);

// Get current session (optional auth middleware)
router.get("/session", getSession);

export default router;
