import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Calendar, Github, LogOut, Folder, ArrowUp, Edit2, Save, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AvatarInitials } from "@/components/ui/avatar-initials";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import {
  useUserProjects,
  useUserUpvotes,
  useUpdateProfile,
  useDeleteProject,
  type Project
} from "@/hooks/useProjects";
import { profilesApi } from "@/lib/api";
import { checkBackendHealth } from "@/lib/backend";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Profile() {
  const { user, profile, loading, signOut, refreshProfile } = useAuth();
  const { data: userProjects, isLoading: projectsLoading } = useUserProjects();
  const { data: userUpvotes, isLoading: upvotesLoading } = useUserUpvotes();
  const updateProfile = useUpdateProfile();
  const deleteProject = useDeleteProject();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editForm, setEditForm] = useState({
    full_name: "",
    bio: "",
    github_username: "",
  });
  // Check if backend is available
  const [backendAvailable, setBackendAvailable] = useState<boolean | null>(null);
  useEffect(() => {
    checkBackendHealth().then(setBackendAvailable);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="section-container py-16 flex justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleStartEdit = () => {
    if (!profile) {
      toast.error("Profile not available. Backend server may be offline.");
      return;
    }
    setEditForm({
      full_name: profile.full_name || "",
      bio: profile.bio || "",
      github_username: profile.github_username || "",
    });
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      await profilesApi.update({
        full_name: editForm.full_name,
        bio: editForm.bio,
        github_username: editForm.github_username,
      });
      toast.success("Profile updated!");
      await refreshProfile();
      setIsEditing(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(dateStr));
  };

  return (
    <Layout>
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Backend Unavailable Warning */}
          {backendAvailable === false && (
            <div className="glass-card rounded-xl p-4 mb-4 bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                ⚠️ Backend server is not available. Profile data cannot be loaded. Please ensure the backend is running.
              </p>
            </div>
          )}

          {/* Profile Header */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <AvatarInitials
                name={profile?.full_name || user.email?.split("@")[0] || "User"}
                className="w-24 h-24 text-3xl"
              />

              {/* Info */}
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center px-1">
                        <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                        <span className="text-[10px] font-bold text-muted-foreground">{editForm.full_name.length}/19</span>
                      </div>
                      <Input
                        placeholder="Full Name"
                        value={editForm.full_name}
                        onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
                        maxLength={19}
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center px-1">
                        <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Bio</Label>
                        <span className={cn("text-[10px] font-bold", editForm.bio.length >= 100 ? "text-destructive" : "text-muted-foreground")}>
                          {editForm.bio.length}/100
                        </span>
                      </div>
                      <Textarea
                        placeholder="Tell us about yourself..."
                        value={editForm.bio}
                        onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                        rows={3}
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-1">GitHub Username</Label>
                      <Input
                        placeholder="username"
                        value={editForm.github_username}
                        onChange={(e) => setEditForm({ ...editForm, github_username: e.target.value })}
                        maxLength={39}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSaveProfile} size="sm" disabled={isSaving}>
                        <Save className="w-4 h-4 mr-2" />
                        {isSaving ? "Saving..." : "Save"}
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)} size="sm" disabled={isSaving}>
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl font-bold truncate max-w-[200px] md:max-w-[400px]">
                        {profile?.full_name || user.email?.split("@")[0] || "User"}
                      </h1>
                      {profile && (
                        <Button variant="ghost" size="sm" onClick={handleStartEdit}>
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    {profile?.bio && (
                      <p className="text-muted-foreground mb-4">{profile.bio}</p>
                    )}
                    {!profile && backendAvailable === false && (
                      <p className="text-muted-foreground mb-4 text-sm">
                        Profile information is not available. Please start the backend server.
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-4 h-4" />
                        {profile?.email || user.email}
                      </span>
                      {profile?.github_username && (
                        <a
                          href={`https://github.com/${profile.github_username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          {profile.github_username}
                        </a>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        Joined {profile?.created_at ? formatDate(profile.created_at) : "recently"}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Actions */}
              <Button variant="outline" onClick={() => signOut()} className="text-destructive hover:text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <Folder className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{userProjects?.length || 0}</div>
              <div className="text-sm text-muted-foreground">Projects Published</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <ArrowUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{userUpvotes?.length || 0}</div>
              <div className="text-sm text-muted-foreground">Projects Upvoted</div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="projects">
            <TabsList className="w-full">
              <TabsTrigger value="projects" className="flex-1">My Projects</TabsTrigger>
              <TabsTrigger value="upvotes" className="flex-1">Upvoted</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="mt-6">
              {projectsLoading ? (
                <div className="text-center py-12">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                </div>
              ) : (
                <div className="space-y-3">
                  {userProjects && userProjects.length > 0 ? (
                    userProjects.map((project: Project) => (
                      <ProjectRow
                        key={project.id}
                        project={project}
                        onDelete={(id) => {
                          if (confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
                            deleteProject.mutate(id);
                          }
                        }}
                      />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Folder className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No projects yet</h3>
                      <p className="text-muted-foreground mb-4">Push your first project to get started!</p>
                      <Button asChild>
                        <Link to="/push">Push Project</Link>
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="upvotes" className="mt-6">
              {userUpvotes && userUpvotes.length > 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <ArrowUp className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p>You've upvoted {userUpvotes?.length || 0} projects</p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <ArrowUp className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No upvotes yet</h3>
                  <p className="text-muted-foreground">Explore projects and upvote your favorites!</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </Layout>
  );
}

interface ProjectRowProps {
  project: Project;
  onDelete?: (id: string) => void;
}
function ProjectRow({ project, onDelete }: ProjectRowProps) {
  const formatDate = (dateStr: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateStr));
  };

  return (
    <div className="glass-card rounded-xl p-4 flex items-center justify-between">
      <div className="flex-1">
        <h3 className="font-semibold">{project.project_name}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
          <span>{formatDate(project.created_at)}</span>
          <span className="flex items-center gap-1">
            <ArrowUp className="w-3 h-3" />
            {project.upvotes_count}
          </span>
          <Badge variant="secondary" className="text-xs">{project.domain}</Badge>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={project.github_link} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.(project.id);
          }}
          className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
          title="Delete project"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
