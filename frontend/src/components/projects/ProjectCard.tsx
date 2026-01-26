import { motion } from "framer-motion";
import { ExternalLink, ArrowUp, DollarSign, GitFork } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AvatarInitials } from "@/components/ui/avatar-initials";
import type { Project } from "@/hooks/useProjects";
import { useAuth } from "@/contexts/AuthContext";
import { useUserUpvotes, useToggleUpvote } from "@/hooks/useProjects";
import { toast } from "sonner";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const { user } = useAuth();
  const { data: userUpvotes = [] } = useUserUpvotes();
  const toggleUpvote = useToggleUpvote();
  
  const hasUpvoted = userUpvotes.includes(project.id);

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.error("Please login to upvote");
      return;
    }
    toggleUpvote.mutate(project.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <div
        className={cn(
          "glass-card rounded-2xl p-6 h-full hover-lift cursor-pointer",
          "border border-border hover:border-primary/30 transition-all duration-300"
        )}
        onClick={() => onSelect?.(project)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <AvatarInitials 
              name={project.maintainer?.full_name || "Unknown"} 
              className="w-10 h-10 text-sm"
            />
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {project.project_name}
              </h3>
              <p className="text-xs text-muted-foreground">
                by {project.maintainer?.full_name || "Unknown"}
              </p>
            </div>
          </div>
          {project.will_pay && (
            <Badge className="bg-emerald-light text-emerald border-emerald/20 gap-1">
              <DollarSign className="w-3 h-3" />
              Paid
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.languages.slice(0, 3).map((lang) => (
            <Badge key={lang} variant="secondary" className="text-xs">
              {lang}
            </Badge>
          ))}
          {project.languages.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.languages.length - 3}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button 
              onClick={handleUpvote}
              disabled={toggleUpvote.isPending}
              className={cn(
                "flex items-center gap-1.5 transition-colors group/upvote",
                hasUpvoted ? "text-primary" : "hover:text-primary"
              )}
            >
              <ArrowUp className={cn(
                "w-4 h-4 transition-transform",
                hasUpvoted && "fill-current",
                "group-hover/upvote:scale-110"
              )} />
              <span className="font-medium">{project.upvotes_count}</span>
            </button>
          </div>
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <GitFork className="w-4 h-4" />
            View
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
