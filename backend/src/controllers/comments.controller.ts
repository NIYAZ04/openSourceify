import { Response } from "express";
import { supabase } from "../config/supabase.js";
import { AuthRequest } from "../middleware/auth.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export const listComments = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = req.query.projectId as string;
    if (!projectId) {
      return res.status(400).set(corsHeaders).json({ error: "Project ID required" });
    }

    // First get project to identify maintainer
    const { data: project } = await supabase
      .from("projects")
      .select("created_by")
      .eq("id", projectId)
      .maybeSingle();

    const { data: comments, error } = await supabase
      .from("comments")
      .select("*")
      .eq("project_id", projectId)
      .order("created_at", { ascending: true });

    if (error) throw error;

    // Fetch user profiles
    const userIds = [...new Set(comments?.map((c) => c.user_id) || [])];
    const { data: profiles } = userIds.length > 0
      ? await supabase.from("profiles").select("user_id, full_name, avatar_url").in("user_id", userIds)
      : { data: [] };

    const profileMap = new Map(profiles?.map((p) => [p.user_id, p]) || []);

    const result = (comments || []).map((c) => ({
      ...c,
      user: profileMap.get(c.user_id) || { full_name: "Unknown", avatar_url: null },
      is_maintainer: c.user_id === project?.created_by,
    }));

    return res.status(200).set(corsHeaders).json({ data: result });
  } catch (error) {
    console.error("Comments edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const createComment = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).set(corsHeaders).json({ error: "Unauthorized" });
    }

    const body = req.body;

    if (!body.projectId || !body.content?.trim()) {
      return res.status(400).set(corsHeaders).json({ error: "Project ID and content required" });
    }

    const { data, error } = await supabase
      .from("comments")
      .insert({
        project_id: body.projectId,
        user_id: req.userId,
        content: body.content.trim(),
        parent_id: body.parentId || null,
      })
      .select()
      .single();

    if (error) throw error;

    console.log(`Comment created: ${data.id} on project: ${body.projectId} by user: ${req.userId}`);

    return res.status(200).set(corsHeaders).json({ data });
  } catch (error) {
    console.error("Comments edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const deleteComment = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).set(corsHeaders).json({ error: "Unauthorized" });
    }

    const { id } = req.body;

    if (!id) {
      return res.status(400).set(corsHeaders).json({ error: "Comment ID required" });
    }

    // Check if user owns the comment
    const { data: comment, error: fetchError } = await supabase
      .from("comments")
      .select("user_id")
      .eq("id", id)
      .maybeSingle();

    if (fetchError) throw fetchError;
    if (!comment) {
      return res.status(404).set(corsHeaders).json({ error: "Comment not found" });
    }

    if (comment.user_id !== req.userId) {
      return res.status(403).set(corsHeaders).json({ error: "Unauthorized to delete this comment" });
    }

    const { error: deleteError } = await supabase
      .from("comments")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    console.log(`Comment deleted: ${id} by user: ${req.userId}`);

    return res.status(200).set(corsHeaders).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Comments edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};
