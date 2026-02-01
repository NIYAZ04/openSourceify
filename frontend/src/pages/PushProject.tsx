import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Link as LinkIcon, FolderCode, Code, Scale, DollarSign, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateProject } from "@/hooks/useProjects";
import { z } from "zod";
import { cn } from "@/lib/utils";

const domains = [
  { value: "web", label: "Web" },
  { value: "android", label: "Android" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "data-science", label: "Data Science" },
  { value: "flutter", label: "Flutter" },
  { value: "saas", label: "SaaS" },
  { value: "ai", label: "AI" },
];

const licenses = [
  "MIT",
  "Apache 2.0",
  "GPL-3.0",
  "BSD-3-Clause",
  "ISC",
  "MPL-2.0",
  "Unlicense",
];

const commonLanguages = [
  "JavaScript", "TypeScript", "Python", "Java", "Kotlin", "Swift",
  "Go", "Rust", "C++", "C#", "Ruby", "PHP", "Dart", "Next.js",
  "React", "Vue.js", "Nuxt.js", "Angular", "Svelte", "Remix",
  "Node.js", "NestJS", "Express", "Tailwind CSS", "Flutter",
  "React Native", "PostgreSQL", "MongoDB", "Redis", "Supabase",
  "Firebase", "Docker", "Kubernetes", "AWS", "GraphQL",
  "TensorFlow", "PyTorch", "Django", "Flask", "Spring Boot", "Laravel",
];

const projectSchema = z.object({
  projectName: z.string().min(3, "Project name must be at least 3 characters").max(100, "Project name too long"),
  githubLink: z.string().url("Please enter a valid URL"),
  domain: z.string().min(1, "Please select a domain"),
  languages: z.array(z.string()).min(1, "Select at least one language/technology"),
  license: z.string().min(1, "Please select a license"),
  description: z.string().min(20, "Description must be at least 20 characters").max(300, "Description cannot exceed 300 characters"),
  backstory: z.string().max(300, "Backstory cannot exceed 300 characters").optional(),
  willPay: z.boolean(),
  amount: z.number().optional(),
});

export default function PushProject() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const createProject = useCreateProject();

  const [formData, setFormData] = useState({
    projectName: "",
    githubLink: "",
    domain: "",
    languages: [] as string[],
    license: "",
    description: "",
    backstory: "",
    willPay: false,
    amount: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const toggleLanguage = (lang: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter((l) => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const data = {
      projectName: formData.projectName,
      githubLink: formData.githubLink,
      domain: formData.domain,
      languages: formData.languages,
      license: formData.license,
      description: formData.description,
      backstory: formData.backstory || undefined,
      willPay: formData.willPay,
      amount: formData.willPay && formData.amount ? parseFloat(formData.amount) : undefined,
    };

    const result = projectSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    await createProject.mutateAsync({
      project_name: data.projectName,
      github_link: data.githubLink,
      domain: data.domain,
      languages: data.languages,
      license: data.license,
      description: data.description,
      backstory: data.backstory,
      will_pay: data.willPay,
      amount: data.amount,
    });

    navigate("/projects");
  };

  return (
    <Layout>
      <div className="section-container py-12">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow-teal">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Push Your Project</h1>
            <p className="text-muted-foreground">
              Share your open-source project with the community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
            {/* Project Name */}
            <div className="space-y-2">
              <Label htmlFor="projectName" className="flex items-center gap-2">
                <FolderCode className="w-4 h-4 text-muted-foreground" />
                Project Name
              </Label>
              <Input
                id="projectName"
                placeholder="My Awesome Project"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              />
              {errors.projectName && (
                <p className="text-sm text-destructive">{errors.projectName}</p>
              )}
            </div>

            {/* GitHub Link */}
            <div className="space-y-2">
              <Label htmlFor="githubLink" className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-muted-foreground" />
                GitHub / Production Link
              </Label>
              <Input
                id="githubLink"
                type="url"
                placeholder="https://github.com/username/repo"
                value={formData.githubLink}
                onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
              />
              {errors.githubLink && (
                <p className="text-sm text-destructive">{errors.githubLink}</p>
              )}
            </div>

            {/* Domain */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Code className="w-4 h-4 text-muted-foreground" />
                Domain
              </Label>
              <Select
                value={formData.domain}
                onValueChange={(value) => setFormData({ ...formData, domain: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a domain" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map((d) => (
                    <SelectItem key={d.value} value={d.value}>
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.domain && (
                <p className="text-sm text-destructive">{errors.domain}</p>
              )}
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Code className="w-4 h-4 text-muted-foreground" />
                Languages & Technologies
              </Label>
              <div className="flex flex-wrap gap-2">
                {commonLanguages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggleLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${formData.languages.includes(lang)
                      ? "gradient-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              {errors.languages && (
                <p className="text-sm text-destructive">{errors.languages}</p>
              )}
            </div>

            {/* License */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-muted-foreground" />
                License
              </Label>
              <Select
                value={formData.license}
                onValueChange={(value) => setFormData({ ...formData, license: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a license" />
                </SelectTrigger>
                <SelectContent>
                  {licenses.map((license) => (
                    <SelectItem key={license} value={license}>
                      {license}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.license && (
                <p className="text-sm text-destructive">{errors.license}</p>
              )}
            </div>

            {/* Will Pay */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="willPay" className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  Will you pay contributors?
                </Label>
                <Switch
                  id="willPay"
                  checked={formData.willPay}
                  onCheckedChange={(checked) => setFormData({ ...formData, willPay: checked })}
                />
              </div>
              {formData.willPay && (
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (USD)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="500"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="description" className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                Description
              </Label>
              <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", formData.description.length >= 300 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary")}>
                {formData.description.length}/300
              </span>
            </div>
            <Textarea
              id="description"
              placeholder="Describe your project, its features, and what contributors can work on..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              maxLength={300}
              className={cn(formData.description.length >= 300 && "border-destructive focus-visible:ring-destructive")}
            />
            {errors.description && (
              <p className="text-sm text-destructive font-medium">{errors.description}</p>
            )}

            {/* Backstory */}
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="backstory" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                Backstory (Optional)
              </Label>
              <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", formData.backstory.length >= 300 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary")}>
                {formData.backstory.length}/300
              </span>
            </div>
            <Textarea
              id="backstory"
              placeholder="Share the story behind your project - why you started it, your vision..."
              value={formData.backstory}
              onChange={(e) => setFormData({ ...formData, backstory: e.target.value })}
              rows={3}
              maxLength={300}
              className={cn(formData.backstory.length >= 300 && "border-destructive focus-visible:ring-destructive")}
            />
            {errors.backstory && (
              <p className="text-sm text-destructive font-medium">{errors.backstory}</p>
            )}

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              disabled={createProject.isPending}
            >
              {createProject.isPending ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Publishing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Publish Project
                </span>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
}
