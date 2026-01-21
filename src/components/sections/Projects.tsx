import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "DeFi Lending Protocol",
    description: "A decentralized lending platform enabling users to lend and borrow crypto assets with dynamic interest rates based on supply and demand.",
    technologies: ["Solidity", "React", "Ethers.js", "Hardhat", "The Graph"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Real Estate Listing Platform",
    description: "Full-featured real estate marketplace with property listings, advanced filters (location, price, type), and comprehensive admin dashboard for property management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "EduHub – School Management",
    description: "Comprehensive school management platform featuring student & teacher dashboards, course management, attendance tracking, and secure authentication system.",
    technologies: ["Django", "React", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Full-Stack E-commerce",
    description: "Complete e-commerce solution with product catalog, shopping cart, checkout flow, Stripe payment integration, and admin product management dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "DevOps Automation Suite",
    description: "Comprehensive CI/CD pipeline automation tool with infrastructure-as-code templates for multi-cloud deployments.",
    technologies: ["Python", "Docker", "Kubernetes", "Terraform", "AWS"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Security Audit Dashboard",
    description: "Real-time security monitoring dashboard for smart contracts with automated vulnerability detection and reporting.",
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "Slither"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "NFT Marketplace",
    description: "Full-featured NFT marketplace with lazy minting, auction system, and royalty distribution.",
    technologies: ["Cairo", "Starknet", "React", "IPFS"],
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "API Gateway Service",
    description: "High-performance API gateway with rate limiting, caching, and authentication middleware.",
    technologies: ["Node.js", "Redis", "Docker", "Nginx"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Blockchain Explorer",
    description: "Custom blockchain explorer for tracking transactions, smart contracts, and network statistics.",
    technologies: ["Rust", "React", "GraphQL", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A selection of projects showcasing my expertise in full-stack development, blockchain, and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
