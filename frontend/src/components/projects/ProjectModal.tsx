import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUp, Calendar, Scale, DollarSign, MessageSquare, Send, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AvatarInitials } from "@/components/ui/avatar-initials";
import type { Project, Comment } from "@/hooks/useProjects";
import { useProjectComments, useCreateComment, useDeleteComment, useUserUpvotes, useToggleUpvote } from "@/hooks/useProjects";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<Comment | null>(null);
  const { user } = useAuth();
  const { data: comments = [], isLoading: commentsLoading } = useProjectComments(project?.id || null);
  const createComment = useCreateComment();
  const deleteComment = useDeleteComment();
  const { data: userUpvotes = [] } = useUserUpvotes();
  const toggleUpvote = useToggleUpvote();

  const hasUpvoted = project ? userUpvotes.includes(project.id) : false;

  const mainComments = comments.filter(c => !c.parent_id);
  const repliesMap = comments.filter(c => c.parent_id).reduce((acc, reply) => {
    const parentId = reply.parent_id!;
    if (!acc[parentId]) acc[parentId] = [];
    acc[parentId].push(reply);
    return acc;
  }, {} as Record<string, Comment[]>);

  const formatDate = (date: string) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date));
    } catch {
      return "Recently";
    }
  };

  const formatCommentDate = (date: string) => {
    try {
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
    } catch {
      return "Recently";
    }
  };

  const handleUpvote = () => {
    if (!user) {
      toast.error("Please login to upvote");
      return;
    }
    if (project) toggleUpvote.mutate(project.id);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !project) return;
    if (!user) {
      toast.error("Please login to comment");
      return;
    }

    try {
      await createComment.mutateAsync({
        projectId: project.id,
        content: newComment.trim(),
        parentId: replyTo?.id,
      });
      setNewComment("");
      setReplyTo(null);
      toast.success(replyTo ? "Reply added!" : "Comment added!");
    } catch {
      toast.error("Failed to add comment");
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!window.confirm("Are you sure you want to delete this comment?") || !project) return;

    try {
      await deleteComment.mutateAsync({
        commentId,
        projectId: project.id,
      });
    } catch {
      // Error handled by hook
    }
  };

  const handleReply = (comment: Comment) => {
    if (!user) {
      toast.error("Please login to reply");
      return;
    }
    setReplyTo(comment);
    if (!newComment.includes(`@${comment.user?.full_name}`)) {
      setNewComment(`@${comment.user?.full_name} ${newComment}`);
    }
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <div
      className={cn(
        "p-4 rounded-xl transition-all",
        isReply ? "bg-muted/30 ml-8 border-l-2 border-primary/20" :
          comment.is_maintainer
            ? "bg-teal-light border border-primary/20 shadow-sm"
            : "bg-secondary"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <AvatarInitials
            name={comment.user?.full_name || "Unknown"}
            className={cn("text-xs font-bold", isReply ? "w-6 h-6" : "w-8 h-8")}
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">
                {comment.user?.full_name || "Unknown"}
              </span>
              {comment.is_maintainer && (
                <Badge className="text-[10px] px-1.5 py-0 h-4 bg-primary text-primary-foreground font-bold">
                  Maintainer
                </Badge>
              )}
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">
              {formatCommentDate(comment.created_at)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          {!isReply && (
            <button
              onClick={() => handleReply(comment)}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              title="Reply"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          )}
          {user?.id === comment.user_id && (
            <button
              onClick={() => handleDeleteComment(comment.id)}
              disabled={deleteComment.isPending}
              className="text-muted-foreground hover:text-destructive transition-colors p-1"
              title="Delete"
            >
              {deleteComment.isPending ? (
                <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <Trash2 className="w-3.5 h-3.5" />
              )}
            </button>
          )}
        </div>
      </div>
      <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">
        {comment.content}
      </p>
    </div>
  );

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md"
          />

          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative inset-4 md:inset-auto md:max-w-2xl md:w-full max-h-[90vh] bg-background rounded-3xl shadow-2xl z-[70] flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-start justify-between bg-gradient-to-r from-background to-accent/5">
              <div className="flex items-center gap-4">
                <AvatarInitials
                  name={project.maintainer?.full_name || "Unknown"}
                  className="w-14 h-14 text-xl shadow-inner bg-primary/10 text-primary"
                />
                <div>
                  <h2 className="text-2xl font-black tracking-tight">{project.project_name}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground/70">{project.maintainer?.full_name || "Unknown"}</span>
                    <Badge className="text-[10px] px-2 py-0.5" variant="default">Maintainer</Badge>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-destructive/10 hover:text-destructive transition-all duration-300 group"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin">
              {/* Stats Row */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleUpvote}
                  disabled={toggleUpvote.isPending}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-2xl transition-all duration-300 font-bold shadow-sm",
                    hasUpvoted
                      ? "bg-primary text-primary-foreground scale-105"
                      : "bg-teal-light text-primary hover:bg-primary/20 hover:scale-105"
                  )}
                >
                  <ArrowUp className={cn("w-5 h-5", hasUpvoted && "fill-current")} />
                  <span>{project.upvotes_count}</span>
                  <span className="text-xs uppercase tracking-wider opacity-70">upvotes</span>
                </button>
                {project.will_pay && (
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-light text-emerald font-bold shadow-sm">
                    <DollarSign className="w-5 h-5" />
                    <span>${project.amount}</span>
                    <span className="text-xs uppercase tracking-wider opacity-70">bounty</span>
                  </div>
                )}
              </div>

              <section>
                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-3">Description</h3>
                <p className="text-lg leading-relaxed text-foreground/90 font-medium break-all whitespace-pre-wrap">{project.description}</p>
              </section>

              {/* Backstory */}
              {project.backstory && (
                <section>
                  <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-3">Backstory</h3>
                  <p className="leading-relaxed text-muted-foreground italic font-medium break-all whitespace-pre-wrap">"{project.backstory}"</p>
                </section>
              )}

              {/* Meta & Tech Grid */}
              <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">License</h4>
                      <p className="font-bold">{project.license}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Created</h4>
                      <p className="font-bold">{formatDate(project.created_at)}</p>
                    </div>
                  </div>
                </div>

                <section>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.languages.filter(l => !!l).map((lang) => (
                      <Badge key={lang} variant="outline" className="font-bold bg-background/50 border-primary/20 hover:border-primary transition-colors">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </section>
              </div>

              {/* Comments Section */}
              <section className="pt-8 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-black">Community Chat</h3>
                  </div>
                  <Badge variant="secondary" className="font-black px-3 py-1">
                    {comments.length} Messages
                  </Badge>
                </div>

                <div className="space-y-6">
                  {commentsLoading ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs font-bold text-muted-foreground animate-pulse">Loading discussion...</p>
                    </div>
                  ) : comments.length === 0 ? (
                    <div className="text-center py-12 bg-secondary/30 rounded-3xl border-2 border-dashed border-border">
                      <p className="text-muted-foreground font-bold">No comments yet. Be the first to start the conversation!</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {mainComments.map((comment: Comment) => (
                        <div key={comment.id || `temp-${comment.created_at}`} className="space-y-3 group/thread">
                          {renderComment(comment)}
                          {repliesMap[comment.id]?.map(reply => (
                            <div key={reply.id || `temp-reply-${reply.created_at}`} className="relative">
                              <div className="absolute left-4 -top-3 bottom-1/2 w-0.5 bg-border rounded-full" />
                              {renderComment(reply, true)}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Add Comment Input */}
                <div className="mt-8 relative">
                  <AnimatePresence>
                    {replyTo && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-10 left-0 right-0 flex items-center justify-between bg-primary/10 px-4 py-2 rounded-t-2xl border-x border-t border-primary/20 backdrop-blur-sm"
                      >
                        <p className="text-xs font-bold text-primary flex items-center gap-2">
                          <MessageSquare className="w-3 h-3" />
                          Replying to @{replyTo.user?.full_name}
                        </p>
                        <button
                          onClick={() => {
                            setReplyTo(null);
                            if (newComment.startsWith(`@${replyTo.user?.full_name}`)) {
                              setNewComment(newComment.replace(`@${replyTo.user?.full_name} `, ""));
                            }
                          }}
                          className="p-1 hover:bg-primary/20 rounded-full transition-colors"
                        >
                          <X className="w-3 h-3 text-primary" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <form onSubmit={handleSubmitComment} className="flex gap-3">
                    <div className="relative flex-1">
                      <Input
                        placeholder={user ? (replyTo ? "Type your reply..." : "Add to the discussion...") : "Login to join the chat"}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className={cn(
                          "h-14 pl-12 pr-4 rounded-2xl bg-secondary border-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary font-medium transition-all group-hover:bg-secondary/80",
                          replyTo && "rounded-t-none"
                        )}
                        disabled={!user || createComment.isPending}
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-transform hover:scale-110">
                        <AvatarInitials name={user?.user_metadata?.full_name || "Guest"} className="w-6 h-6 text-[8px] font-black" />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      size="icon"
                      className="h-14 w-14 rounded-2xl bg-primary hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                      disabled={!user || !newComment.trim() || createComment.isPending}
                    >
                      {createComment.isPending ? (
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-6 h-6 text-white" />
                      )}
                    </Button>
                  </form>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-border bg-gradient-to-b from-background to-accent/5 flex items-center gap-4">
              <Button variant="outline" className="flex-1 h-14 rounded-2xl font-bold border-2 hover:bg-secondary transition-all" onClick={onClose}>
                Back to Explore
              </Button>
              <Button variant="hero" className="flex-[1.5] h-14 rounded-2xl shadow-lg shadow-primary/20 group overflow-hidden relative" asChild>
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    Review Codebase
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
