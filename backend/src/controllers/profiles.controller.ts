import { Response } from "express";
import { supabase } from "../config/supabase.js";
import { AuthRequest } from "../middleware/auth.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const targetUserId = (req.query.userId as string) || req.userId;

    if (!targetUserId) {
      return res.status(400).json({ error: "User ID required" });
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", targetUserId)
      .maybeSingle();

    if (error) throw error;

    return res.status(200).set(corsHeaders).json({ data });
  } catch (error) {
    console.error("Profiles edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).set(corsHeaders).json({ error: "Unauthorized" });
    }

    const body = req.body;

    // Only allow updating specific fields
    const updates: Record<string, string | null> = {};
    if (body.full_name !== undefined) updates.full_name = body.full_name;
    if (body.bio !== undefined) updates.bio = body.bio;
    if (body.github_username !== undefined) updates.github_username = body.github_username;

    if (Object.keys(updates).length === 0) {
      return res.status(400).set(corsHeaders).json({ error: "No valid fields to update" });
    }

    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("user_id", req.userId)
      .select()
      .single();

    if (error) {
      console.error("Profile update error:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
        userId: req.userId,
      });
      throw error;
    }

    console.log(`Profile updated for user: ${req.userId}`);

    return res.status(200).set(corsHeaders).json({ data });
  } catch (error) {
    console.error("Profiles edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};
