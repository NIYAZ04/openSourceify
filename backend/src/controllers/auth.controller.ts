import { Response } from "express";
import { supabase } from "../config/supabase";
import { AuthRequest } from "../middleware/auth";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export const signUp = async (req: AuthRequest, res: Response) => {
  try {
    const { email, password, fullName } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).set(corsHeaders).json({ error: "Email, password, and full name are required" });
    }

    // Use service role to create user
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email for development
      user_metadata: {
        full_name: fullName,
      },
    });

    if (error) {
      console.error("Signup error:", error);
      return res.status(400).set(corsHeaders).json({ error: error.message });
    }

    // Create profile
    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          user_id: data.user.id,
          full_name: fullName,
          email: email,
        });

      if (profileError) {
        console.error("Profile creation error:", profileError);
        // Don't fail signup if profile creation fails, but log it
      }
    }

    // Sign in the user to get session
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError || !signInData.session) {
      return res.status(400).set(corsHeaders).json({ 
        error: signInError?.message || "Account created but failed to sign in" 
      });
    }

    return res.status(200).set(corsHeaders).json({
      user: {
        id: signInData.user.id,
        email: signInData.user.email,
        user_metadata: signInData.user.user_metadata,
      },
      session: {
        access_token: signInData.session.access_token,
        refresh_token: signInData.session.refresh_token,
        expires_at: signInData.session.expires_at,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const signIn = async (req: AuthRequest, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).set(corsHeaders).json({ error: "Email and password are required" });
    }

    // Use service role to sign in
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Signin error:", error);
      return res.status(400).set(corsHeaders).json({ error: error.message });
    }

    if (!data.session || !data.user) {
      return res.status(400).set(corsHeaders).json({ error: "Failed to create session" });
    }

    return res.status(200).set(corsHeaders).json({
      user: {
        id: data.user.id,
        email: data.user.email,
        user_metadata: data.user.user_metadata,
      },
      session: {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at,
      },
    });
  } catch (error) {
    console.error("Signin error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const signOut = async (req: AuthRequest, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      // Sign out using the token
      await supabase.auth.signOut();
    }

    return res.status(200).set(corsHeaders).json({ message: "Signed out successfully" });
  } catch (error) {
    console.error("Signout error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).set(corsHeaders).json({ error: message });
  }
};

export const getSession = async (req: AuthRequest, res: Response) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(200).set(corsHeaders).json({ user: null, session: null });
    }

    const token = authHeader.replace("Bearer ", "");
    
    // Verify token and get user using service role
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(200).set(corsHeaders).json({ user: null, session: null });
    }

    // Return user and session with token
    return res.status(200).set(corsHeaders).json({
      user: {
        id: user.id,
        email: user.email,
        user_metadata: user.user_metadata,
      },
      session: {
        access_token: token,
        expires_at: user.created_at ? new Date(user.created_at).getTime() + 3600000 : undefined,
      },
    });
  } catch (error) {
    console.error("Get session error:", error);
    return res.status(200).set(corsHeaders).json({ user: null, session: null });
  }
};
