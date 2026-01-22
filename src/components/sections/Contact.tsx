import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageCircle, MapPin, Github, Linkedin, Twitter, Instagram, Youtube, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree endpoint

type FormStatus = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
        // Reset to idle after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      // Reset to idle after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter/X" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <section id="contact" className="relative bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">Get In Touch</span>
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="section-subheading mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@developer.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  hello@developer.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  Remote / Worldwide
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Chat</h3>
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/1234567890?text=Hello! I'm interested in working with you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Message on WhatsApp
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:text-primary"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glow-card p-6 space-y-6">
              {/* Success message */}
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {/* Error message */}
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={formStatus === "submitting"}
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={formStatus === "submitting"}
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  disabled={formStatus === "submitting"}
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full" 
                disabled={formStatus === "submitting" || formStatus === "success"}
              >
                {formStatus === "submitting" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your message will be sent via Formspree. I'll respond within 24-48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
