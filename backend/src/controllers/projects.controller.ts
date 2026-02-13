import { Response } from "express";
import { supabase } from "../config/supabase.js";
import { AuthRequest } from "../middleware/auth.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export const listProjects = async (req: AuthRequest, res: Response) => {
  try {
    const domain = req.query.domain as string | undefined;

    // Validate domain if provided
    if (domain && domain !== "all") {
      const validDomains = ['web', 'android', 'machine-learning', 'data-science', 'flutter', 'saas', 'ai'];
      if (!validDomains.includes(domain)) {
        return res.status(400).set(corsHeaders).json({
          error: `Invalid domain. Must be one of: ${validDomains.join(', ')}, or 'all'`
        });
      }
    }

    let query = supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (domain && domain !== "all") {
      query = query.eq("domain", domain);
    }

    const { data: projects, error } = await query;
    if (error) throw error;

    // Fetch maintainer profiles
    const userIds = [...new Set(projects?.map((p) => p.created_by) || [])];
    const { data: profiles } = userIds.length > 0
      ? await supabase.from("profiles").select("user_id, full_name, avatar_url").in("user_id", userIds)
      : { data: [] };

    const profileMap = new Map(profiles?.map((p) => [p.user_id, p]) || []);

    const result = (projects || []).map((p) => ({
      ...p,
      maintainer: profileMap.get(p.created_by) || { full_name: "Unknown", avatar_url: null },
    }));

    return res.status(200).set(corsHeaders).json({ data: result });
  } catch (error) {
    console.error("Projects edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const getProject = async (req: AuthRequest, res: Response) => {
  try {
    const id = req.query.id as string;
    if (!id) {
      return res.status(400).set(corsHeaders).json({ error: "Project ID required" });
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    if (!data) {
      return res.status(200).set(corsHeaders).json({ data: null });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, avatar_url")
      .eq("user_id", data.created_by)
      .maybeSingle();

    return res.status(200).set(corsHeaders).json({
      data: {
        ...data,
        maintainer: profile || { full_name: "Unknown", avatar_url: null },
      },
    });
  } catch (error) {
    console.error("Projects edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const getUserProjects = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).set(corsHeaders).json({ error: "Unauthorized" });
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("created_by", req.userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return res.status(200).set(corsHeaders).json({ data: data || [] });
  } catch (error) {
    console.error("Projects edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const createProject = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).set(corsHeaders).json({ error: "Unauthorized" });
    }

    const body = req.body;

    // Validate required fields
    if (!body.project_name || !body.github_link || !body.domain || !body.description || !body.license) {
      return res.status(400).set(corsHeaders).json({ error: "Missing required fields" });
    }

    // Validate domain enum value
    const validDomains = ['web', 'android', 'machine-learning', 'data-science', 'flutter', 'saas', 'ai'];
    if (!validDomains.includes(body.domain)) {
      return res.status(400).set(corsHeaders).json({
        error: `Invalid domain. Must be one of: ${validDomains.join(', ')}`
      });
    }

    // Use service role client which bypasses RLS
    // The service role key should bypass RLS automatically
    const { data, error } = await supabase
      .from("projects")
      .insert({
        project_name: body.project_name,
        github_link: body.github_link,
        domain: body.domain,
        languages: body.languages || [],
        license: body.license,
        will_pay: body.will_pay || false,
        amount: body.will_pay ? body.amount : null,
        description: body.description,
        backstory: body.backstory || null,
        created_by: req.userId,
      })
      .select()
      .single();

    if (error) {
      // Log the full error for debugging
      console.error("Supabase error details:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      });

      // Provide user-friendly error message for enum errors
      if (error.code === '22P02' && error.message.includes('enum')) {
        return res.status(400).set(corsHeaders).json({
          error: `Invalid domain value. Please ensure the database enum includes all valid domains. Run the migration to add 'ai' if needed.`
        });
      }

      throw error;
    }

    console.log(`Project created: ${data.id} by user: ${req.userId}`);

    return res.status(200).set(corsHeaders).json({ data });
  } catch (error) {
    console.error("Projects edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const deleteProject = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).set(corsHeaders).json({ error: "Unauthorized" });
    }

    const { id } = req.params;
    if (!id) {
      return res.status(400).set(corsHeaders).json({ error: "Project ID is required" });
    }

    // Verify ownership
    const { data: project, error: fetchError } = await supabase
      .from("projects")
      .select("created_by")
      .eq("id", id)
      .single();

    if (fetchError || !project) {
      return res.status(404).set(corsHeaders).json({ error: "Project not found" });
    }

    if (project.created_by !== req.userId) {
      return res.status(403).set(corsHeaders).json({ error: "You don't have permission to delete this project" });
    }

    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    console.log(`Project deleted: ${id} by user: ${req.userId}`);

    return res.status(204).set(corsHeaders).send();
  } catch (error) {
    console.error("Projects edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};
