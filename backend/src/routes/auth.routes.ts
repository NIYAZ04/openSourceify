import { Router } from "express";
import { signUp, signIn, signOut, getSession, forgotPassword, updatePassword } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// Sign up
router.post("/signup", signUp);

// Sign in
router.post("/signin", signIn);

// Sign out (optional auth middleware - token might be invalid)
router.post("/signout", signOut);

// Get current session (optional auth middleware)
router.get("/session", getSession);

// Forgot password - sends reset email
router.post("/forgot-password", forgotPassword);

// Reset password - updates password (requires valid session from email link)
router.post("/reset-password", authMiddleware, updatePassword);

export default router;
