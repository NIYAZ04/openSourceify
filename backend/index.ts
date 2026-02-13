import "dotenv/config";
import app from "./src/app.js";

// Diagnostic logging for Vercel
console.log("Backend initializing on Vercel/Node...");

process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("UNHANDLED REJECTION at:", promise, "reason:", reason);
});

export default app;
