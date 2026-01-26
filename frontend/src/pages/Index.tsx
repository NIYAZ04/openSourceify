import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Users, BookOpen, Search, Sparkles, TrendingUp, GitFork, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/home/TestimonialCard";
import ProjectCard from "@/components/projects/ProjectCard";
import { useStats, useProjects } from "@/hooks/useProjects";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: Search,
    title: "Discover Projects",
    description: "Browse curated open-source projects across multiple domains. Find the perfect project to contribute to.",
  },
  {
    icon: Users,
    title: "Contribute & Collaborate",
    description: "Connect with maintainers and other contributors. Build your portfolio while making an impact.",
  },
  {
    icon: BookOpen,
    title: "Learn & Grow",
    description: "Access tutorials and guides to level up your skills. From Git basics to advanced workflows.",
  },
];

// Static testimonials (no user images needed)
const testimonials = [
  {
    id: "1",
    name: "Jennifer Martinez",
    role: "Full Stack Developer",
    comment: "OpenSourceify helped me find my first open source project to contribute to. The community here is incredibly welcoming!",
  },
  {
    id: "2",
    name: "Ryan Thompson",
    role: "DevOps Engineer",
    comment: "I've pushed 3 projects here and received amazing contributions. The quality of developers on this platform is outstanding.",
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "ML Engineer",
    comment: "The Learn section helped me understand Git workflows before making my first PR. Now I'm a maintainer of 2 projects!",
  },
  {
    id: "4",
    name: "Michael Chen",
    role: "Frontend Developer",
    comment: "Finally, a platform that makes open source accessible. The project discovery features are game-changing.",
  },
  {
    id: "5",
    name: "Sofia Rodriguez",
    role: "Backend Developer",
    comment: "OpenSourceify connects maintainers with contributors seamlessly. My project grew from 2 to 15 contributors in a month.",
  },
  {
    id: "6",
    name: "Daniel Kim",
    role: "Mobile Developer",
    comment: "The upvote system helps surface quality projects. Found some amazing Flutter libraries I use daily now.",
  },
];

export default function Index() {
  const { data: stats } = useStats();
  const { data: allProjects = [] } = useProjects();

  const statItems = [
    { label: "Projects", value: stats?.projects || 0, icon: GitFork, suffix: "+" },
    { label: "Contributors", value: stats?.contributors || 0, icon: Users, suffix: "+" },
    { label: "Total Upvotes", value: stats?.upvotes || 0, icon: TrendingUp, suffix: "" },
    { label: "Countries", value: stats?.countries || 42, icon: Globe, suffix: "+" },
  ];

  const trendingProjects = [...allProjects]
    .sort((a, b) => b.upvotes_count - a.upvotes_count)
    .slice(0, 3);
  
  const recentProjects = [...allProjects]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="section-container py-24 md:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Open Source, Together
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="gradient-text">OpenSourceify</span>
              <br />
              <span className="text-foreground">Build Together, Grow Together</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              The community-driven platform where developers discover, publish, and collaborate on open-source projects. 
              Find your next contribution or share your creation with the world.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/projects">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Projects
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/push">
                  Push Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {statItems.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why OpenSourceify Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why OpenSourceify?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make open-source collaboration accessible to everyone, from first-time contributors to seasoned maintainers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card rounded-2xl p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow-teal">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Projects Section */}
      {trendingProjects.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-background to-teal-light/30">
          <div className="section-container">
            <motion.div
              className="flex flex-col md:flex-row md:items-center justify-between mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Trending Projects
                </h2>
                <p className="text-muted-foreground">Most upvoted projects by the community</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link to="/projects">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {trendingProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recently Added Section */}
      {recentProjects.length > 0 && (
        <section className="py-24">
          <div className="section-container">
            <motion.div
              className="flex flex-col md:flex-row md:items-center justify-between mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  Recently Added
                </h2>
                <p className="text-muted-foreground">Fresh projects waiting for contributors</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link to="/projects">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/30 overflow-hidden">
        <div className="section-container mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Believe in Working Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from developers who've found their community on OpenSourceify
            </p>
          </motion.div>
        </div>

        {/* Auto-scrolling testimonials */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            className="gradient-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Make Your Mark?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Join thousands of developers building the future of open source. Start contributing today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glass" size="lg" asChild>
                  <Link to="/signup">
                    Create Account
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/projects">Browse Projects</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
