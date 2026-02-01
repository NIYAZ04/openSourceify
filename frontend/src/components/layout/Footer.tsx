import { Link } from "react-router-dom";
import { GitBranch, Linkedin, Calendar, Github } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mir-niyazul-haque/" },
  { name: "Calendly", icon: Calendar, href: "https://calendly.com" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="section-container py-16">
        {/* Quote Section */}
        <div className="text-center mb-12">
          <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic max-w-3xl mx-auto">
            "We <span className="text-primary">commit</span> to innovation, <span className="text-primary">push</span> boundaries, and <span className="text-primary">pull</span> together."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Open<span className="gradient-text">Sourceify</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The community-driven platform where developers discover, publish, and collaborate on open-source projects.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OpenSourceify. All rights reserved.</p>
          <p>Built with ❤️ for the open-source community</p>
        </div>
      </div>
    </footer>
  );
}
