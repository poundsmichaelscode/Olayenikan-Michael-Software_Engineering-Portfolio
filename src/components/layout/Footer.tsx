import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and description */}
          <div>
            <a href="#" className="text-xl font-bold font-heading inline-block mb-3">
              <span className="gradient-text">&lt;Dev/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Full-Stack Engineer & Blockchain Developer building secure, scalable solutions.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Olayenikan Michael Developer Portfolio. All rights reserved Poundsmichaels Digitals.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React,NextJS & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
