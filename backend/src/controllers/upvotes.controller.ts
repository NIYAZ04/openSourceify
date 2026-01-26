import { Response } from "express";
import { supabase } from "../config/supabase";
import { AuthRequest } from "../middleware/auth";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export const getUserUpvotes = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(200).set(corsHeaders).json({ data: [] });
    }

    const { data, error } = await supabase
      .from("upvotes")
      .select("project_id")
      .eq("user_id", req.userId);

    if (error) throw error;

    return res.status(200).set(corsHeaders).json({ data: data?.map((u) => u.project_id) || [] });
  } catch (error) {
    console.error("Upvotes edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const toggleUpvote = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).set(corsHeaders).json({ error: "Unauthorized" });
    }

    const body = req.body;
    const projectId = body.projectId;

    if (!projectId) {
      return res.status(400).set(corsHeaders).json({ error: "Project ID required" });
    }

    // Check if upvote exists
    const { data: existing } = await supabase
      .from("upvotes")
      .select("id")
      .eq("project_id", projectId)
      .eq("user_id", req.userId)
      .maybeSingle();

    if (existing) {
      // Remove upvote
      await supabase.from("upvotes").delete().eq("id", existing.id);
      console.log(`Upvote removed: project ${projectId} by user ${req.userId}`);
      return res.status(200).set(corsHeaders).json({ data: { action: "removed" } });
    } else {
      // Add upvote
      await supabase.from("upvotes").insert({ project_id: projectId, user_id: req.userId });
      console.log(`Upvote added: project ${projectId} by user ${req.userId}`);
      return res.status(200).set(corsHeaders).json({ data: { action: "added" } });
    }
  } catch (error) {
    console.error("Upvotes edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};
