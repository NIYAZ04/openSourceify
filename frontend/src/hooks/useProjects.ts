import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import {
  projectsApi,
  commentsApi,
  upvotesApi,
  statsApi,
  profilesApi,
  type Project,
  type Comment
} from "@/lib/api";

// Re-export types for backward compatibility
export type { Project, Comment };

export function useProjects(domain?: string) {
  return useQuery({
    queryKey: ["projects", domain],
    queryFn: () => projectsApi.list(domain),
  });
}

export function useProject(id: string | null) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => (id ? projectsApi.get(id) : null),
    enabled: !!id,
  });
}

export function useProjectComments(projectId: string | null) {
  return useQuery({
    queryKey: ["comments", projectId],
    queryFn: () => (projectId ? commentsApi.list(projectId) : []),
    enabled: !!projectId,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (projectData: {
      project_name: string;
      github_link: string;
      domain: string;
      languages: string[];
      license: string;
      will_pay: boolean;
      amount?: number;
      description: string;
      backstory?: string;
    }) => {
      if (!user) throw new Error("You must be logged in");
      return projectsApi.create(projectData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project published successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create project");
    },
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ projectId, content, parentId }: { projectId: string; content: string; parentId?: string }) => {
      if (!user) throw new Error("You must be logged in");
      return commentsApi.create(projectId, content, parentId);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.projectId] });
    },
  });
}

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ commentId }: { commentId: string; projectId: string }) => {
      if (!user) throw new Error("You must be logged in");
      return commentsApi.delete(commentId);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.projectId] });
      toast.success("Comment deleted");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete comment");
    },
  });
}

export function useUserUpvotes() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["user-upvotes", user?.id],
    queryFn: () => upvotesApi.getUserUpvotes(),
    enabled: !!user,
  });
}

export function useToggleUpvote() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (projectId: string) => {
      if (!user) throw new Error("You must be logged in to upvote");
      return upvotesApi.toggle(projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["user-upvotes"] });
    },
  });
}

export function useUserProjects() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["user-projects", user?.id],
    queryFn: () => projectsApi.getUserProjects(),
    enabled: !!user,
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (projectId: string) => {
      if (!user) throw new Error("You must be logged in");
      return projectsApi.delete(projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete project");
    },
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const { refreshProfile } = useAuth();

  return useMutation({
    mutationFn: (data: { full_name?: string; bio?: string; github_username?: string }) =>
      profilesApi.update(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      refreshProfile();
      toast.success("Profile updated successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update profile");
    },
  });
}

export function useStats() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => statsApi.get(),
  });
}
