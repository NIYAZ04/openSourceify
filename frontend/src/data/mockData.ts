// Mock data for OpenSourceify

import { getCppLanguageContent } from "@/pages/cppContent";
import { getGitLanguageContent } from "@/pages/gitContent";
import { getHtmlLanguageContent } from "@/pages/htmlContent";
import { getJavaScriptLanguageContent } from "@/pages/javaScriptContent";
import { getKubernetesLanguageContent } from "@/pages/kubernetesContent";

export interface Project {
  _id: string;
  projectName: string;
  githubLink: string;
  willPay: boolean;
  amount?: number;
  license: string;
  domain: string;
  languages: string[];
  description: string;
  backstory?: string;
  upvotes: number;
  createdBy: string;
  createdAt: Date;
  maintainer: {
    name: string;
    avatar: string;
  };
  contributors: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
}

export interface LearnTopic {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export interface LearnLanguage {
  id: string;
  name: string;
  icon: string;
  topics: LearnTopic[];
}

export const domains = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web" },
  { id: "android", name: "Android" },
  { id: "ml", name: "Machine Learning" },
  { id: "data-science", name: "Data Science" },
  { id: "flutter", name: "Flutter" },
  { id: "saas", name: "SaaS" },
] as const;

export const mockProjects: Project[] = [
  {
    _id: "1",
    projectName: "ReactFlow Dashboard",
    githubLink: "https://github.com/example/reactflow-dashboard",
    willPay: true,
    amount: 500,
    license: "MIT",
    domain: "web",
    languages: ["TypeScript", "React", "Tailwind CSS"],
    description: "A modern dashboard builder with drag-and-drop workflow automation. Create beautiful analytics dashboards with real-time data visualization.",
    backstory: "Started as a weekend project to simplify our internal analytics. Now used by 50+ companies.",
    upvotes: 342,
    createdBy: "user1",
    createdAt: new Date("2024-01-15"),
    maintainer: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?img=1" },
    contributors: 12,
  },
  {
    _id: "2",
    projectName: "ML Image Classifier",
    githubLink: "https://github.com/example/ml-classifier",
    willPay: false,
    license: "Apache 2.0",
    domain: "ml",
    languages: ["Python", "TensorFlow", "FastAPI"],
    description: "Production-ready image classification API with pre-trained models. Supports custom training and easy deployment.",
    backstory: "Built to democratize ML for small teams without dedicated data scientists.",
    upvotes: 289,
    createdBy: "user2",
    createdAt: new Date("2024-02-20"),
    maintainer: { name: "Alex Rivera", avatar: "https://i.pravatar.cc/150?img=2" },
    contributors: 8,
  },
  {
    _id: "3",
    projectName: "Flutter E-Commerce Kit",
    githubLink: "https://github.com/example/flutter-ecommerce",
    willPay: true,
    amount: 300,
    license: "MIT",
    domain: "flutter",
    languages: ["Dart", "Flutter"],
    description: "Complete e-commerce starter kit with cart, payments, and admin panel. Built with clean architecture patterns.",
    upvotes: 456,
    createdBy: "user3",
    createdAt: new Date("2024-03-10"),
    maintainer: { name: "Priya Sharma", avatar: "https://i.pravatar.cc/150?img=3" },
    contributors: 15,
  },
  {
    _id: "4",
    projectName: "Android Compose UI Kit",
    githubLink: "https://github.com/example/compose-ui-kit",
    willPay: false,
    license: "MIT",
    domain: "android",
    languages: ["Kotlin", "Jetpack Compose"],
    description: "Beautiful, customizable UI components for Jetpack Compose. Material 3 design system included.",
    upvotes: 178,
    createdBy: "user4",
    createdAt: new Date("2024-04-05"),
    maintainer: { name: "Marcus Johnson", avatar: "https://i.pravatar.cc/150?img=4" },
    contributors: 6,
  },
  {
    _id: "5",
    projectName: "DataViz Pro",
    githubLink: "https://github.com/example/dataviz-pro",
    willPay: true,
    amount: 200,
    license: "GPL-3.0",
    domain: "data-science",
    languages: ["Python", "Pandas", "Plotly"],
    description: "Interactive data visualization library with 50+ chart types. Export to PNG, SVG, or embed in web apps.",
    upvotes: 234,
    createdBy: "user5",
    createdAt: new Date("2024-05-01"),
    maintainer: { name: "Emma Wilson", avatar: "https://i.pravatar.cc/150?img=5" },
    contributors: 9,
  },
  {
    _id: "6",
    projectName: "SaaSify Boilerplate",
    githubLink: "https://github.com/example/saasify",
    willPay: false,
    license: "MIT",
    domain: "saas",
    languages: ["TypeScript", "Next.js", "Prisma", "Stripe"],
    description: "Launch your SaaS in days, not months. Auth, billing, teams, and analytics built-in.",
    backstory: "After building 5 SaaS products, we extracted the common patterns into this boilerplate.",
    upvotes: 567,
    createdBy: "user6",
    createdAt: new Date("2024-05-15"),
    maintainer: { name: "David Kim", avatar: "https://i.pravatar.cc/150?img=6" },
    contributors: 23,
  },
  {
    _id: "7",
    projectName: "Neural Style Transfer",
    githubLink: "https://github.com/example/neural-style",
    willPay: false,
    license: "MIT",
    domain: "ml",
    languages: ["Python", "PyTorch"],
    description: "Transform photos into artistic masterpieces using neural networks. Fast inference on CPU and GPU.",
    upvotes: 145,
    createdBy: "user7",
    createdAt: new Date("2024-06-01"),
    maintainer: { name: "Lisa Zhang", avatar: "https://i.pravatar.cc/150?img=7" },
    contributors: 4,
  },
  {
    _id: "8",
    projectName: "WebSocket Chat Engine",
    githubLink: "https://github.com/example/ws-chat",
    willPay: true,
    amount: 150,
    license: "MIT",
    domain: "web",
    languages: ["TypeScript", "Node.js", "Socket.io"],
    description: "Scalable real-time chat infrastructure. Supports rooms, direct messages, and presence indicators.",
    upvotes: 198,
    createdBy: "user8",
    createdAt: new Date("2024-06-20"),
    maintainer: { name: "James Park", avatar: "https://i.pravatar.cc/150?img=8" },
    contributors: 7,
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jennifer Martinez",
    role: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=10",
    comment: "OpenSourceify helped me find my first open source project to contribute to. The community here is incredibly welcoming!",
  },
  {
    id: "2",
    name: "Ryan Thompson",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?img=11",
    comment: "I've pushed 3 projects here and received amazing contributions. The quality of developers on this platform is outstanding.",
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "ML Engineer",
    avatar: "https://i.pravatar.cc/150?img=12",
    comment: "The Learn section helped me understand Git workflows before making my first PR. Now I'm a maintainer of 2 projects!",
  },
  {
    id: "4",
    name: "Michael Chen",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=13",
    comment: "Finally, a platform that makes open source accessible. The project discovery features are game-changing.",
  },
  {
    id: "5",
    name: "Sofia Rodriguez",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=14",
    comment: "OpenSourceify connects maintainers with contributors seamlessly. My project grew from 2 to 15 contributors in a month.",
  },
  {
    id: "6",
    name: "Daniel Kim",
    role: "Mobile Developer",
    avatar: "https://i.pravatar.cc/150?img=15",
    comment: "The upvote system helps surface quality projects. Found some amazing Flutter libraries I use daily now.",
  },
];

export const learnLanguages: LearnLanguage[] = [];


export const learnLanguagesWithCpp = (): LearnLanguage[] => [
  getGitLanguageContent(),
  getHtmlLanguageContent(),
  getJavaScriptLanguageContent(),
  getCppLanguageContent(),
  getKubernetesLanguageContent(),
];

export const stats = {
  projects: mockProjects.length,
  contributors: 1247,
  upvotes: mockProjects.reduce((sum, p) => sum + p.upvotes, 0),
  countries: 42,
};
