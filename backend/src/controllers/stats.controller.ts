import { Request, Response } from "express";
import { supabase } from "../config/supabase";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export const getStats = async (req: Request, res: Response) => {
  try {
    const { count: projectCount } = await supabase
      .from("projects")
      .select("*", { count: "exact", head: true });

    const { data: projects } = await supabase
      .from("projects")
      .select("upvotes_count");

    const { count: profileCount } = await supabase
      .from("profiles")
      .select("*", { count: "exact", head: true });

    const totalUpvotes = projects?.reduce((sum, p) => sum + (p.upvotes_count || 0), 0) || 0;

    const stats = {
      projects: projectCount || 0,
      contributors: profileCount || 0,
      upvotes: totalUpvotes,
      countries: 42, // Static for now
    };

    console.log("Stats fetched:", stats);

    return res.status(200).set(corsHeaders).json({ data: stats });
  } catch (error) {
    console.error("Stats edge function error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};
