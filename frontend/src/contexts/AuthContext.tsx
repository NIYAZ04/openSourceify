import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { profilesApi, authApi, type AuthUser, type AuthSession, type Profile } from "@/lib/api";
import { checkBackendHealth } from "@/lib/backend";
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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [backendAvailable, setBackendAvailable] = useState<boolean | null>(null);

  const fetchProfile = async (userId: string) => {
    // Check backend availability first
    const isBackendAvailable = await checkBackendHealth();
    setBackendAvailable(isBackendAvailable);

    if (!isBackendAvailable) {
      console.error("Backend is not available. Cannot fetch profile.");
      setProfile(null);
      return;
    }

    try {
      const data = await profilesApi.get(userId);
      if (data) {
        setProfile(data);
      } else {
        setProfile(null);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setProfile(null);
      // If backend is unavailable, clear profile to prevent showing stale data
      const isBackendAvailable = await checkBackendHealth();
      if (!isBackendAvailable) {
        setProfile(null);
      }
    }
  };

  const refreshProfile = async () => {
    if (user) {
      const isBackendAvailable = await checkBackendHealth();
      setBackendAvailable(isBackendAvailable);
      if (isBackendAvailable) {
        await fetchProfile(user.id);
      } else {
        setProfile(null);
        toast.error("Backend server is not available. Cannot refresh profile.");
      }
    }
  };

  // Load session from localStorage and verify with backend
  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
