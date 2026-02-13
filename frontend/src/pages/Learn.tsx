import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, FileCode, Binary, GitBranch, ChevronRight, Server } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { learnLanguagesWithCpp, type LearnTopic } from "@/data/mockData";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  GitBranch,
  FileCode,
  Code,
  Binary,
  Server, // For Kubernetes
};


export default function Learn() {
  const allLanguages = learnLanguagesWithCpp();
  const [selectedLanguage, setSelectedLanguage] = useState(allLanguages[0]);
  const [selectedTopic, setSelectedTopic] = useState<LearnTopic>(allLanguages[0].topics[0]);

  return (
    <Layout>
      <div className="section-container py-12">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-primary" />
            Courses & <span className="gradient-text">Grow</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Master the fundamentals before contributing. From Git workflows to programming languages,
            we've got you covered.
          </p>
        </motion.div>

        {/* Language Selector */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {allLanguages.map((lang) => {
            const Icon = iconMap[lang.icon] || Code;
            return (
              <button
                key={lang.id}
                onClick={() => {
                  setSelectedLanguage(lang);
                  setSelectedTopic(lang.topics[0]);
                }}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all",
                  selectedLanguage.id === lang.id
                    ? "gradient-primary text-primary-foreground shadow-glow-teal"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <Icon className="w-5 h-5" />
                {lang.name}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Topics */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-4 sticky top-24 h-fit max-h-[calc(100vh-120px)]">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4 px-2">
                Topics
              </h3>
              <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
                {selectedLanguage.topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic)}
                    className={cn(
                      "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors",
                      selectedTopic.id === topic.id
                        ? "bg-teal-light text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-transform",
                      selectedTopic.id === topic.id && "rotate-90"
                    )} />
                    <span className="truncate">{topic.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="lg:col-span-3"
            key={selectedTopic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">{selectedTopic.title}</h2>

              {selectedTopic.image && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-md border border-border/50">
                  <img
                    src={selectedTopic.image}
                    alt={selectedTopic.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="text-muted-foreground text-lg leading-relaxed mb-8 whitespace-pre-wrap">
                {selectedTopic.content}
              </div>

              {selectedTopic.code && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Example</h3>
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 flex items-center px-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="ml-4 text-xs text-muted-foreground font-mono">
                        {selectedLanguage.name.toLowerCase()}.{selectedLanguage.id === "git"
                          ? "sh"
                          : selectedLanguage.id === "html"
                            ? "html"
                            : selectedLanguage.id === "cpp"
                              ? "cpp"
                              : selectedLanguage.id === "kubernetes"
                                ? "yaml"
                                : "js"}
                      </span>
                    </div>
                    <pre className="bg-slate-950 text-slate-50 p-6 pt-14 overflow-x-auto scrollbar-thin">
                      <code className="text-sm font-mono leading-relaxed">
                        {selectedTopic.code}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
