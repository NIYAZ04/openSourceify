import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { profilesApi, authApi, type AuthUser, type AuthSession, type Profile } from "@/lib/api";
import { checkBackendHealth } from "@/lib/backend";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AuthContextType {
  user: AuthUser | null;
  session: AuthSession | null;
  profile: Profile | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  forgotPassword: (email: string) => Promise<{ error: Error | null }>;
  resetPassword: (password: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [backendAvailable, setBackendAvailable] = useState<boolean | null>(null);

  const fetchProfile = async (userId: string) => {
    try {
      const data = await profilesApi.get(userId);
      setProfile(data || null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setProfile(null);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  };

  // Load session from localStorage and verify with backend
  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);

      // Check if this is a recovery link (password reset)
      const hash = window.location.hash;
      const isRecovery = hash && (hash.includes("type=recovery") || hash.includes("access_token="));

      if (isRecovery) {
        console.log("Recovery link detected, waiting for Supabase to process...");
        // For recovery links, we wait for onAuthStateChange to fire and handle it.
        // We set a safety timeout (5 seconds) to prevent infinite loading.
        const safetyTimeout = setTimeout(() => {
          setLoading((prevLoading) => {
            if (prevLoading) {
              console.warn("Auth initialization timed out after 5s");
              return false;
            }
            return prevLoading;
          });
        }, 5000);
        return () => clearTimeout(safetyTimeout);
      }

      // First check backend availability
      const isBackendAvailable = await checkBackendHealth();
      setBackendAvailable(isBackendAvailable);

      if (!isBackendAvailable) {
        console.error("Backend is not available. Authentication disabled.");
        toast.error("Backend server is not available. Please ensure the backend is running.");
        // Clear any cached auth data when backend is unavailable
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
        setUser(null);
        setSession(null);
        setProfile(null);
        setLoading(false);
        return;
      }

      // Try to get session from backend
      try {
        const { user: sessionUser, session: sessionData } = await authApi.getSession();

        if (sessionUser && sessionData) {
          setUser(sessionUser);
          setSession(sessionData);
          // Store in localStorage
          localStorage.setItem("auth_token", sessionData.access_token);
          localStorage.setItem("auth_user", JSON.stringify(sessionUser));

          // Fetch profile
          await fetchProfile(sessionUser.id);
        } else {
          // No valid session
          localStorage.removeItem("auth_token");
          localStorage.removeItem("auth_user");
          setUser(null);
          setSession(null);
          setProfile(null);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
        setUser(null);
        setSession(null);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth state changes (crucial for recovery links)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state change event:", event);

      if (session) {
        const authUser: AuthUser = {
          id: session.user.id,
          email: session.user.email || "",
          user_metadata: session.user.user_metadata,
        };
        const authSession: AuthSession = {
          access_token: session.access_token,
          refresh_token: session.refresh_token || "",
          expires_at: session.expires_at || 0,
        };

        setUser(authUser);
        setSession(authSession);
        localStorage.setItem("auth_token", session.access_token);
        localStorage.setItem("auth_user", JSON.stringify(authUser));

        if (event === "SIGNED_IN" || event === "USER_UPDATED" || (event as string) === "PASSWORD_RECOVERY") {
          await fetchProfile(session.user.id);
        }

        // Ensure loading is set to false once we have a session (especially from recovery)
        setLoading(false);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setSession(null);
        setProfile(null);
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
        setLoading(false);
      } else {
        // Fallback for other events
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    // Check backend availability first
    const isBackendAvailable = await checkBackendHealth();
    setBackendAvailable(isBackendAvailable);

    if (!isBackendAvailable) {
      const error = new Error("Backend server is not available. Please ensure the backend is running.");
      toast.error(error.message);
      return { error };
    }

    try {
      const { user: newUser, session: newSession } = await authApi.signUp(email, password, fullName);

      // Store in localStorage
      localStorage.setItem("auth_token", newSession.access_token);
      localStorage.setItem("auth_user", JSON.stringify(newUser));

      setUser(newUser);
      setSession(newSession);

      // Fetch profile
      await fetchProfile(newUser.id);

      return { error: null };
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Failed to sign up");
      return { error: err };
    }
  };

  const signIn = async (email: string, password: string) => {
    // Check backend availability first
    const isBackendAvailable = await checkBackendHealth();
    setBackendAvailable(isBackendAvailable);

    if (!isBackendAvailable) {
      const error = new Error("Backend server is not available. Please ensure the backend is running.");
      toast.error(error.message);
      return { error };
    }

    try {
      const { user: sessionUser, session: sessionData } = await authApi.signIn(email, password);

      // Store in localStorage
      localStorage.setItem("auth_token", sessionData.access_token);
      localStorage.setItem("auth_user", JSON.stringify(sessionUser));

      setUser(sessionUser);
      setSession(sessionData);

      // Fetch profile
      await fetchProfile(sessionUser.id);

      return { error: null };
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Failed to sign in");
      return { error: err };
    }
  };

  const signOut = async () => {
    try {
      await authApi.signOut();
    } catch (error) {
      console.error("Signout error:", error);
    } finally {
      // Clear state regardless of API call success
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
      setUser(null);
      setSession(null);
      setProfile(null);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await authApi.forgotPassword(email);
      return { error: null };
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Failed to send reset link");
      return { error: err };
    }
  };

  const resetPassword = async (password: string) => {
    try {
      await authApi.resetPassword(password);
      return { error: null };
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Failed to reset password");
      return { error: err };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        signUp,
        signIn,
        signOut,
        refreshProfile,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined){
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
