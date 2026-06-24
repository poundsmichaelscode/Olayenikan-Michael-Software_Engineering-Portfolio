import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Agency", href: "https://pounds-michaels-brand-website.vercel.app/" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/poundsmichaelscode", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/olayenikan-michael/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/PoundsMichael3", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/iam_poundsmichaels", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <a href="#" className="text-xl font-bold font-heading inline-block mb-3 text-primary">
              &lt;Olayenikan Michael/&gt;
            </a>
            <p className="text-sm text-muted-foreground">
              Olayenikan Michael — Full-Stack Engineer building scalable, production-ready software.
            </p>
          </div>

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

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Olayenikan Michael. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Digital Agency <Heart className="w-4 h-4 text-destructive fill-destructive" /> Pounds Michaels Code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
