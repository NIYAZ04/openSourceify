import { Request, Response, NextFunction } from "express";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH",
};

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).set(corsHeaders).end();
  }

  // Set CORS headers for all responses
  res.set(corsHeaders);
  next();
};
