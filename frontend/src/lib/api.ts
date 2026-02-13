import { getApiBaseUrl } from "./backend";

// API Base URL - must be set via environment variable
const API_BASE_URL = getApiBaseUrl();

// Helper to get auth token from localStorage (not Supabase)
function getAuthToken(): string | null {
  return localStorage.getItem("auth_token");
}

// Type definitions
export interface Project {
  id: string;
  project_name: string;
  github_link: string;
  domain: string;
  languages: string[];
  license: string;
  will_pay: boolean;
  amount: number | null;
  description: string;
  backstory: string | null;
  upvotes_count: number;
  created_by: string;
  created_at: string;
  updated_at: string;
  maintainer?: {
    full_name: string;
    avatar_url: string | null;
  };
}

export interface Comment {
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user?: {
    full_name: string;
    avatar_url: string | null;
  };
  is_maintainer?: boolean;
  parent_id?: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  avatar_url: string | null;
  bio: string | null;
  github_username: string | null;
  created_at: string;
  updated_at: string;
}

export interface Stats {
  projects: number;
  contributors: number;
  upvotes: number;
  countries: number;
}

// Projects API
export const projectsApi = {
  async list(domain?: string): Promise<Project[]> {
    const url = new URL(`${API_BASE_URL}/projects`);
    url.searchParams.set("action", "list");
    if (domain && domain !== "all") {
      url.searchParams.set("domain", domain);
    }

    const token = getAuthToken();

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch projects");
    return json.data;
  },

  async get(id: string): Promise<Project | null> {
    const url = new URL(`${API_BASE_URL}/projects`);
    url.searchParams.set("action", "get");
    url.searchParams.set("id", id);

    const token = getAuthToken();

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch project");
    return json.data;
  },

  async getUserProjects(): Promise<Project[]> {
    const url = new URL(`${API_BASE_URL}/projects`);
    url.searchParams.set("action", "user-projects");

    const token = getAuthToken();

    if (!token) throw new Error("Not authenticated");

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch user projects");
    return json.data;
  },

  async create(projectData: {
    project_name: string;
    github_link: string;
    domain: string;
    languages: string[];
    license: string;
    will_pay: boolean;
    amount?: number;
    description: string;
    backstory?: string;
  }): Promise<Project> {
    const url = new URL(`${API_BASE_URL}/projects`);
    url.searchParams.set("action", "create");

    const token = getAuthToken();

    if (!token) throw new Error("Not authenticated");

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to create project");
    return json.data;
  },

  async delete(projectId: string): Promise<void> {
    const token = getAuthToken();
    if (!token) throw new Error("Not authenticated");

    const url = new URL(`${API_BASE_URL}/projects/${projectId}`);

    const res = await fetch(url.toString(), {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || "Failed to delete project");
    }
  },
};

// Comments API
export const commentsApi = {
  async list(projectId: string): Promise<Comment[]> {
    const url = new URL(`${API_BASE_URL}/comments`);
    url.searchParams.set("action", "list");
    url.searchParams.set("projectId", projectId);

    const token = getAuthToken();

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch comments");
    return json.data;
  },

  async create(projectId: string, content: string, parentId?: string): Promise<Comment> {
    const url = new URL(`${API_BASE_URL}/comments`);
    url.searchParams.set("action", "create");

    const token = getAuthToken();

    if (!token) throw new Error("Not authenticated");

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ projectId, content, parentId }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to create comment");
    return json.data;
  },

  async delete(id: string): Promise<{ message: string }> {
    const url = new URL(`${API_BASE_URL}/comments`);
    url.searchParams.set("action", "delete");

    const token = getAuthToken();

    if (!token) throw new Error("Not authenticated");

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to delete comment");
    return json;
  },
};

// Upvotes API
export const upvotesApi = {
  async getUserUpvotes(): Promise<string[]> {
    const url = new URL(`${API_BASE_URL}/upvotes`);
    url.searchParams.set("action", "user-upvotes");

    const token = getAuthToken();

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch upvotes");
    return json.data;
  },

  async toggle(projectId: string): Promise<{ action: "added" | "removed" }> {
    const url = new URL(`${API_BASE_URL}/upvotes`);
    url.searchParams.set("action", "toggle");

    const token = getAuthToken();

    if (!token) throw new Error("Not authenticated");

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ projectId }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to toggle upvote");
    return json.data;
  },
};

// Profiles API
export const profilesApi = {
  async get(userId?: string): Promise<Profile | null> {
    const url = new URL(`${API_BASE_URL}/profiles`);
    url.searchParams.set("action", "get");
    if (userId) {
      url.searchParams.set("userId", userId);
    }

    const token = getAuthToken();

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch profile");
    return json.data;
  },

  async update(data: { full_name?: string; bio?: string; github_username?: string }): Promise<Profile> {
    const url = new URL(`${API_BASE_URL}/profiles`);
    url.searchParams.set("action", "update");

    const token = getAuthToken();

    if (!token) throw new Error("Not authenticated");

    const res = await fetch(url.toString(), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to update profile");
    return json.data;
  },
};

// Stats API
export const statsApi = {
  async get(): Promise<Stats> {
    const url = new URL(`${API_BASE_URL}/stats`);

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch stats");
    return json.data;
  },
};

// Auth API - All authentication goes through backend
export interface AuthUser {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
  };
}

export interface AuthSession {
  access_token: string;
  refresh_token?: string;
  expires_at?: number;
}

export const authApi = {
  async signUp(email: string, password: string, fullName: string): Promise<{ user: AuthUser; session: AuthSession }> {
    const url = new URL(`${API_BASE_URL}/auth/signup`);

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, fullName }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to sign up");
    return json;
  },

  async forgotPassword(email: string): Promise<{ message: string }> {
    const url = new URL(`${API_BASE_URL}/auth/forgot-password`);

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to send reset link");
    return json;
  },

  async resetPassword(password: string): Promise<{ message: string }> {
    const token = localStorage.getItem("auth_token");
    if (!token) throw new Error("Not authenticated");

    const url = new URL(`${API_BASE_URL}/auth/reset-password`);

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ password }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to reset password");
    return json;
  },

  async signIn(email: string, password: string): Promise<{ user: AuthUser; session: AuthSession }> {
    const url = new URL(`${API_BASE_URL}/auth/signin`);

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to sign in");
    return json;
  },

  async signOut(): Promise<void> {
    const token = localStorage.getItem("auth_token");
    if (!token) return;

    const url = new URL(`${API_BASE_URL}/auth/signout`);

    try {
      await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Signout error:", error);
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
    }
  },

  async getSession(): Promise<{ user: AuthUser | null; session: AuthSession | null }> {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      return { user: null, session: null };
    }

    const url = new URL(`${API_BASE_URL}/auth/session`);

    try {
      const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const json = await res.json();
      if (!res.ok) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
        return { user: null, session: null };
      }
      return json;
    } catch (error) {
      console.error("Get session error:", error);
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
      return { user: null, session: null };
    }
  },
};
