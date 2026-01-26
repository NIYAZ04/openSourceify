import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, TrendingUp, Clock, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { useProjects, type Project } from "@/hooks/useProjects";

type SortOption = "upvotes" | "newest";

const domains = [
  { id: "web", name: "Web" },
  { id: "android", name: "Android" },
  { id: "machine-learning", name: "Machine Learning" },
  { id: "data-science", name: "Data Science" },
  { id: "flutter", name: "Flutter" },
  { id: "saas", name: "SaaS" },
  { id: "ai", name: "AI" },
];

export default function Projects() {
  const [selectedDomain, setSelectedDomain] = useState("web");
  const [sortBy, setSortBy] = useState<SortOption>("upvotes");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects = [], isLoading, error } = useProjects(selectedDomain);

  // Filter and sort projects
  const filteredProjects = projects
    .filter((p) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        p.project_name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.languages.some((lang) => lang.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => {
      if (sortBy === "upvotes") {
        return b.upvotes_count - a.upvotes_count;
      }
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

  return (
    <Layout>
      <div className="section-container py-12">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Discover <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find open-source projects to contribute to. Filter by domain, sort by popularity, or search for specific technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-xl bg-background"
            />
          </div>

          {/* Domain Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDomain === domain.id
                    ? "gradient-primary text-primary-foreground shadow-glow-teal"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {domain.name}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
            <Button
              variant={sortBy === "upvotes" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("upvotes")}
              className="rounded-lg"
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              Most Upvoted
            </Button>
            <Button
              variant={sortBy === "newest" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("newest")}
              className="rounded-lg"
            >
              <Clock className="w-4 h-4 mr-1" />
              Newest
            </Button>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <p className="text-destructive">Failed to load projects. Please try again.</p>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && !error && (
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${selectedDomain}-${sortBy}-${searchQuery}`}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onSelect={setSelectedProject}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="text-center py-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <FolderOpen className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {searchQuery
                    ? `No projects match "${searchQuery}". Try a different search term.`
                    : `No projects in this domain yet. Be the first to push one!`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </Layout>
  );
}
