import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUp, Calendar, Scale, DollarSign, MessageSquare, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AvatarInitials } from "@/components/ui/avatar-initials";
import type { Project, Comment } from "@/hooks/useProjects";
import { useProjectComments, useCreateComment, useUserUpvotes, useToggleUpvote } from "@/hooks/useProjects";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuth();
  const { data: comments = [], isLoading: commentsLoading } = useProjectComments(project?.id || null);
  const createComment = useCreateComment();
  const { data: userUpvotes = [] } = useUserUpvotes();
  const toggleUpvote = useToggleUpvote();
  
  const hasUpvoted = project ? userUpvotes.includes(project.id) : false;

  if (!project) return null;

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  const formatCommentDate = (date: string) => {
    const now = new Date();
    const commentDate = new Date(date);
    const diffMs = now.getTime() - commentDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return formatDate(date);
  };

  const handleUpvote = () => {
    if (!user) {
      toast.error("Please login to upvote");
      return;
    }
    toggleUpvote.mutate(project.id);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    if (!user) {
      toast.error("Please login to comment");
      return;
    }

    try {
      await createComment.mutateAsync({
        projectId: project.id,
        content: newComment.trim(),
      });
      setNewComment("");
      toast.success("Comment added!");
    } catch {
      toast.error("Failed to add comment");
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl md:w-full bg-background rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-start justify-between">
              <div className="flex items-center gap-4">
                <AvatarInitials 
                  name={project.maintainer?.full_name || "Unknown"} 
                  className="w-12 h-12 text-lg"
                />
                <div>
                  <h2 className="text-xl font-bold">{project.project_name}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{project.maintainer?.full_name || "Unknown"}</span>
                    <Badge variant="secondary" className="text-xs">Maintainer</Badge>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
              {/* Stats Row */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleUpvote}
                  disabled={toggleUpvote.isPending}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                    hasUpvoted 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-teal-light text-primary hover:bg-primary/20"
                  )}
                >
                  <ArrowUp className={cn("w-4 h-4", hasUpvoted && "fill-current")} />
                  <span className="font-semibold">{project.upvotes_count}</span>
                  <span className="text-sm">upvotes</span>
                </button>
                {project.will_pay && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-light text-emerald">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold">${project.amount}</span>
                    <span className="text-sm">bounty</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              {/* Backstory */}
              {project.backstory && (
                <div>
                  <h3 className="font-semibold mb-2">Backstory</h3>
                  <p className="text-muted-foreground">{project.backstory}</p>
                </div>
              )}

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-muted-foreground" />
                    License
                  </h3>
                  <Badge variant="secondary">{project.license}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    Created
                  </h3>
                  <p className="text-sm text-muted-foreground">{formatDate(project.created_at)}</p>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang) => (
                    <Badge key={lang} variant="outline">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  Comments ({comments.length})
                </h3>
                
                {commentsLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : comments.length === 0 ? (
                  <p className="text-muted-foreground text-sm py-4">No comments yet. Be the first to comment!</p>
                ) : (
                  <div className="space-y-4">
                    {comments.map((comment: Comment) => (
                      <div 
                        key={comment.id} 
                        className={cn(
                          "p-4 rounded-xl",
                          comment.is_maintainer 
                            ? "bg-teal-light border border-primary/20" 
                            : "bg-secondary"
                        )}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <AvatarInitials 
                            name={comment.user?.full_name || "Unknown"} 
                            className="w-8 h-8 text-xs"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">
                                {comment.user?.full_name || "Unknown"}
                              </span>
                              {comment.is_maintainer && (
                                <Badge className="text-xs bg-primary text-primary-foreground">
                                  Maintainer
                                </Badge>
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {formatCommentDate(comment.created_at)}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Comment */}
                <form onSubmit={handleSubmitComment} className="mt-4 flex gap-2">
                  <Input
                    placeholder={user ? "Add a comment..." : "Login to comment"}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1"
                    disabled={!user || createComment.isPending}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={!user || !newComment.trim() || createComment.isPending}
                  >
                    {createComment.isPending ? (
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border flex items-center justify-between gap-4">
              <Button variant="outline" className="flex-1" onClick={onClose}>
                Close
              </Button>
              <Button variant="hero" className="flex-1" asChild>
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
