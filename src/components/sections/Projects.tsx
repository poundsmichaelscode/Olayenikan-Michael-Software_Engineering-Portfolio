import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react";
import ProjectCaseStudy, { type ProjectDetail } from "./ProjectCaseStudy";

const projects: ProjectDetail[] = [
  {
    title: "TradeMind",
    description: "A modern trading journal and performance analytics platform that helps traders move from unstructured trade history to measurable, data-driven improvement.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts", "FastAPI", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/Trade-Mind",
    live: "https://github.com/poundsmichaelscode/Trade-Mind",
    featured: true,
    caseStudy: {
      overview: "TradeMind is a modern trading journal and performance analytics platform built to help traders move from unstructured trade history to measurable improvement. It combines secure authentication, trade journaling, performance analytics, smart insights, export workflows, and SaaS-ready architecture — built as a real product-oriented engineering system, not just a UI dashboard clone.",
      challenge: "Most traders rely on scattered spreadsheets and screenshots, with no structured way to journal trades, measure performance over time, or extract actionable insights from their own history.",
      solution: "Built a full-stack SaaS platform with a Next.js + TypeScript frontend (Tailwind, Framer Motion, Recharts) and a FastAPI backend using SQLAlchemy, Pydantic, and JWT auth (passlib + bcrypt + python-jose), backed by PostgreSQL in production and SQLite locally, containerized with Docker Compose and deployed on Vercel and Render.",
      keyFeatures: [
        "Secure JWT authentication (passlib, bcrypt, python-jose)",
        "Structured trade journaling with rich metadata",
        "Performance analytics and Recharts visualizations",
        "Smart insights surfacing patterns and weaknesses",
        "Export workflows for reports and trade history",
        "SaaS-ready architecture with FastAPI + SQLAlchemy + Pydantic",
        "Dockerized dev and deployment via Vercel + Render",
        "Roadmap integrations: Cloudinary, Paystack, Redis, Celery, Resend",
      ],
      outcomes: [
        "Production-grade SaaS architecture end-to-end",
        "Clear performance analytics replacing spreadsheets",
        "Containerized, deployable, and scalable backend",
        "Foundation ready for payments, media, and async workflows",
      ],
      role: "Full-Stack Engineer",
      duration: "Ongoing",
    },
  },
  {
    title: "Collab-Space",
    description: "A real-time collaboration platform enabling teams to work together seamlessly with shared workspaces, live editing, and integrated communication tools.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/Collab-space",
    live: "https://github.com/poundsmichaelscode/Collab-space",
    featured: true,
    caseStudy: {
      overview: "Designed and built a SaaS collaboration platform that provides real-time shared workspaces, live document editing, and team communication features for remote teams.",
      challenge: "Remote teams struggle with fragmented tools — switching between docs, chat, and project boards kills productivity and creates information silos.",
      solution: "Created a unified collaboration hub with Socket.io-powered real-time sync, shared workspaces with role-based permissions, and integrated messaging — all in one interface.",
      keyFeatures: [
        "Real-time collaborative editing",
        "Shared workspaces with permissions",
        "Integrated team messaging",
        "File sharing and document management",
        "Activity feeds and notifications",
        "Role-based access control",
      ],
      outcomes: [
        "Sub-100ms real-time sync latency",
        "Unified workspace replacing 3+ separate tools",
        "Scalable architecture for growing teams",
        "Intuitive onboarding experience",
      ],
      role: "Full-Stack Developer",
      duration: "Ongoing",
    },
  },
  {
    title: "Creators-Marketplace",
    description: "A marketplace platform connecting creators with buyers, featuring product listings, secure payments, and seller dashboards built with Python backend.",
    technologies: ["Python", "Django", "PostgreSQL", "React", "Stripe"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/Creators-Marketplace",
    live: "https://github.com/poundsmichaelscode/Creators-Marketplace",
    featured: true,
    caseStudy: {
      overview: "Built a full-featured marketplace platform where digital creators can list, sell, and manage their products with integrated payments and analytics dashboards.",
      challenge: "Independent creators needed a dedicated platform to sell digital products without the high fees and restrictions of existing marketplaces like Gumroad or Etsy.",
      solution: "Developed a Django-powered marketplace with React frontend, Stripe payment integration, seller analytics, and a review system — optimized for digital product delivery.",
      keyFeatures: [
        "Product listing with categories and search",
        "Secure Stripe payment integration",
        "Seller dashboard with sales analytics",
        "Buyer review and rating system",
        "Digital product delivery automation",
        "Admin panel for marketplace management",
      ],
      outcomes: [
        "End-to-end marketplace transaction flow",
        "Automated digital product delivery",
        "Comprehensive seller analytics",
        "Scalable multi-vendor architecture",
      ],
      role: "Full-Stack Python Developer",
      duration: "Ongoing",
    },
  },
  {
    title: "Alat Defence – Threat Detection Dashboard",
    description: "A cybersecurity threat detection dashboard with real-time monitoring, alert management, and data-rich visualizations for enterprise security teams.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "D3.js"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/Alat_Defence-Threat_detection-Dashbord",
    live: "https://github.com/poundsmichaelscode/Alat_Defence-Threat_detection-Dashbord",
    featured: true,
    caseStudy: {
      overview: "Developed an enterprise-grade cybersecurity dashboard that provides real-time threat detection, alert triage, and security posture visualization for SOC teams.",
      challenge: "Security teams were overwhelmed by alert fatigue from multiple tools, lacking a unified view of threats and no way to prioritize incidents effectively.",
      solution: "Built a centralized TypeScript dashboard with real-time data streaming, interactive D3.js threat visualizations, and an intelligent alert prioritization system.",
      keyFeatures: [
        "Real-time threat monitoring and alerting",
        "Interactive threat map and visualizations",
        "Alert triage with severity scoring",
        "Historical incident timeline and analysis",
        "Integration with SIEM data sources",
        "Customizable dashboard widgets",
      ],
      outcomes: [
        "Unified security monitoring interface",
        "60% faster threat identification",
        "Reduced alert fatigue with smart prioritization",
        "Enterprise-ready data visualization",
      ],
      role: "Frontend & Security Engineer",
      duration: "Ongoing",
    },
  },
  {
    title: "AI Document Assistant",
    description: "An intelligent document Q&A system using AI workflows for semantic search, document parsing, and context-aware responses with a Python backend.",
    technologies: ["Python", "FastAPI", "LangChain", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/AI-Document-Assitance",
    live: "https://github.com/poundsmichaelscode/AI-Document-Assitance",
    featured: true,
    caseStudy: {
      overview: "Built an AI-powered document assistant that lets users upload documents and ask natural language questions, receiving accurate answers grounded in the actual document content.",
      challenge: "Professionals waste hours manually searching through lengthy documents. Standard search fails to understand context, and standalone LLMs hallucinate without source grounding.",
      solution: "Implemented a RAG pipeline with FastAPI backend, LangChain orchestration, and vector embeddings for semantic search — delivering cited, context-aware answers from uploaded documents.",
      keyFeatures: [
        "Multi-format document upload (PDF, DOCX, TXT)",
        "Semantic search with vector embeddings",
        "Source-cited answers with page references",
        "Conversation memory for follow-up questions",
        "FastAPI backend with async processing",
        "Clean chat interface with streaming responses",
      ],
      outcomes: [
        "Accurate answers grounded in document content",
        "80% reduction in document search time",
        "Handles large documents efficiently",
        "Practical AI workflow demonstration",
      ],
      role: "AI & Backend Developer",
      duration: "Ongoing",
    },
  },
  {
    title: "The Marketplace – E-commerce Store",
    description: "A complete e-commerce store with product catalog, cart management, checkout flow, and order tracking for a seamless shopping experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/The-marketplace-Ecommerce-Store",
    live: "https://github.com/poundsmichaelscode/The-marketplace-Ecommerce-Store",
    featured: false,
    caseStudy: {
      overview: "Developed a production-ready MERN stack e-commerce platform with full shopping functionality including product browsing, cart, secure checkout, and order management.",
      challenge: "The client needed a custom e-commerce solution with full control over the shopping experience, without the limitations and costs of hosted platforms like Shopify.",
      solution: "Built a complete MERN stack store with React frontend, Express API, MongoDB for flexible product schemas, and Stripe for secure payment processing.",
      keyFeatures: [
        "Product catalog with search and filters",
        "Shopping cart with persistent state",
        "Secure Stripe checkout integration",
        "Order tracking and history",
        "Admin product management dashboard",
        "Responsive mobile-first design",
      ],
      outcomes: [
        "Complete e-commerce transaction flow",
        "Fast page loads with optimized queries",
        "Secure payment processing",
        "Scalable product catalog architecture",
      ],
      role: "MERN Stack Developer",
      duration: "Ongoing",
    },
  },
  {
    title: "Habita",
    description: "A real estate and property listing platform with advanced search, property details, and user-friendly browsing for buyers and renters.",
    technologies: ["Django", "Python", "PostgreSQL", "Tailwind CSS", "React"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/Habita",
    live: "https://github.com/poundsmichaelscode/Habita",
    featured: false,
    caseStudy: {
      overview: "Built a modern real estate platform connecting property owners with potential buyers and renters, featuring advanced search, detailed listings, and an intuitive browsing experience.",
      challenge: "Existing property platforms in the target market had poor UX, slow search, and lacked modern filtering — making it hard for users to find relevant listings.",
      solution: "Created a performant React application with PostgreSQL-backed search, location-based filtering, and a clean property detail experience optimized for conversion.",
      keyFeatures: [
        "Advanced property search with filters",
        "Detailed property pages with galleries",
        "Location-based browsing",
        "Saved searches and favorites",
        "Responsive design for mobile browsing",
        "Agent contact and inquiry system",
      ],
      outcomes: [
        "Fast property search and filtering",
        "Clean, conversion-focused property pages",
        "Mobile-optimized browsing experience",
        "Scalable listing management",
      ],
      role: "Full-Stack Developer",
      duration: "Ongoing",
    },
  },
  {
    title: "High-Performance API Gateway Service",
    description: "Production-grade API Gateway for microservice architectures with distributed rate limiting, multi-layer caching, service routing, monitoring, and WebSocket support.",
    technologies: ["Node.js", "TypeScript", "Express", "Redis", "PostgreSQL", "Nginx", "Prometheus", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode/API-Gateway",
    live: "https://github.com/poundsmichaelscode/API-Gateway",
    featured: true,
    caseStudy: {
      overview: "Designed and built a senior-level API Gateway Service that sits in front of microservices, handling routing, authentication, rate limiting, caching, observability, and security hardening for production workloads.",
      challenge: "Microservice architectures suffer without a unified entry point — duplicated auth logic, inconsistent rate limiting, no centralized observability, and security gaps at every service boundary. The system needed to scale, stay resilient, and provide deep operational insight.",
      solution: "Engineered a TypeScript + Express gateway with JWT auth, Redis-backed distributed rate limiting, multi-layer caching, dynamic service routing, Prometheus + Grafana monitoring, structured logging, WebSocket proxying, Nginx fronting, Dockerized deployment, and a full CI/CD pipeline.",
      keyFeatures: [
        "Dynamic service routing and load balancing",
        "Distributed rate limiting with Redis",
        "Multi-layer caching (in-memory + Redis)",
        "JWT authentication and authorization",
        "Prometheus metrics + Grafana dashboards",
        "Structured logging and analytics persistence in PostgreSQL",
        "WebSocket proxying support",
        "Nginx reverse proxy + Docker deployment + CI/CD",
      ],
      outcomes: [
        "Unified, secure entry point for all microservices",
        "Production-grade observability and alerting",
        "Resilient request handling with caching and rate limits",
        "Deployment-ready with Docker and CI/CD pipelines",
      ],
      role: "Senior Backend Engineer",
      duration: "Ongoing",
    },
  },
  {
    title: "High-Performance Financial Data Platform",
    description: "Production-grade real-time trading platform rendering 5000+ data points at 60fps using Web Workers, virtualization, and live WebSocket feeds.",
    technologies: ["Next.js 14", "TypeScript", "Zustand", "TradingView", "D3.js", "Web Workers", "WebSockets"],
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
    github: "https://github.com/poundsmichaelscode",
    live: "https://github.com/poundsmichaelscode",
    featured: true,
    caseStudy: {
      overview: "Architected a high-performance financial data platform capable of streaming, computing, and rendering thousands of real-time market ticks at a sustained 60fps without blocking the main thread.",
      challenge: "Standard React rendering collapses under thousands of WebSocket ticks per second — the main thread chokes on calculations, charts drop frames, and tables freeze. The system also had to handle 20–30 simultaneously subscribed symbols with reliable auto-reconnect.",
      solution: "Built a modular system around Next.js 14 App Router with Zustand slices for state, a dedicated WebSocket manager class for connection lifecycle, native Web Workers for off-main-thread aggregation, TanStack Virtual for 5000+ row tables, TradingView Lightweight Charts for candlesticks, and custom D3.js charts — all monitored with Sentry and Web Vitals.",
      keyFeatures: [
        "WebSocket manager with connect/subscribe/unsubscribe and auto-reconnect",
        "20–30 concurrent symbol subscriptions with normalized tick data",
        "Native Web Workers for off-main-thread computation",
        "TanStack Virtual rendering 1000–5000+ rows efficiently",
        "TradingView Lightweight Charts for candlestick visualization",
        "Custom D3.js pie and performance graphs",
        "Zustand slices for clean, scalable state management",
        "Sentry + Web Vitals API performance monitoring",
      ],
      outcomes: [
        "Sustained 60fps rendering under heavy tick load",
        "Zero main-thread blocking via Web Worker offloading",
        "Smooth virtualized tables with 5000+ live rows",
        "Production-grade architecture with full observability",
      ],
      role: "Lead Frontend & Performance Engineer",
      duration: "Ongoing",
    },
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

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
            Real-world applications showcasing full-stack development, DevOps, Django, MERN, FastAPI, and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glow-card group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-card/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    Live
                  </a>
                  {project.caseStudy && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors ml-auto font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      Case Study
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/poundsmichaelscode" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudy
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
