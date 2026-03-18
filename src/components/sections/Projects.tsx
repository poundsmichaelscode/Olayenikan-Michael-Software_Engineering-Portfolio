import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react";
import ProjectCaseStudy, { type ProjectDetail } from "./ProjectCaseStudy";

const projects: ProjectDetail[] = [
  {
    title: "DeFi Lending Protocol",
    description: "A decentralized lending platform enabling users to lend and borrow crypto assets with dynamic interest rates based on supply and demand.",
    technologies: ["Solidity", "React", "Ethers.js", "Hardhat", "The Graph"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    caseStudy: {
      overview: "Built a fully decentralized lending and borrowing protocol on Ethereum that enables users to supply crypto assets to earn interest or borrow against their collateral with algorithmically determined interest rates.",
      challenge: "Traditional DeFi lending protocols suffer from capital inefficiency, high gas costs, and complex liquidation mechanisms that are difficult for average users to understand and interact with safely.",
      solution: "Designed an optimized smart contract architecture with gas-efficient operations, implemented a user-friendly React frontend with real-time rate updates via The Graph indexing, and created a robust liquidation bot system to maintain protocol health.",
      keyFeatures: [
        "Dynamic interest rate model based on utilization ratio",
        "Flash loan functionality for arbitrage",
        "Multi-collateral support with configurable LTV ratios",
        "Real-time protocol analytics dashboard",
        "Governance token integration for protocol upgrades",
        "Automated liquidation engine with MEV protection",
      ],
      outcomes: [
        "$2M+ TVL within first month of mainnet launch",
        "Gas costs reduced by 40% vs comparable protocols",
        "Zero bad debt incidents since launch",
        "99.9% uptime on liquidation infrastructure",
      ],
      role: "Lead Smart Contract & Frontend Developer",
      duration: "4 months",
    },
  },
  {
    title: "AI-Powered Document Assistant",
    description: "Intelligent document Q&A system using RAG (Retrieval-Augmented Generation) with vector embeddings for semantic search and context-aware responses.",
    technologies: ["Python", "LangChain", "Pinecone", "OpenAI", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    caseStudy: {
      overview: "Developed an enterprise-grade AI assistant that enables users to upload documents and ask natural language questions, receiving accurate answers with source citations using Retrieval-Augmented Generation (RAG).",
      challenge: "Organizations struggle with information retrieval across thousands of documents. Standard keyword search fails to capture semantic meaning, and LLMs alone hallucinate answers without grounding in actual document content.",
      solution: "Implemented a RAG pipeline using LangChain for orchestration, Pinecone for vector storage, and OpenAI embeddings for semantic search. Built a FastAPI backend with streaming responses and a clean React chat interface.",
      keyFeatures: [
        "Multi-format document ingestion (PDF, DOCX, TXT, CSV)",
        "Semantic chunking with overlap for context preservation",
        "Source citation with page/section references",
        "Conversation memory for follow-up questions",
        "Admin dashboard for document management",
        "Role-based access control per document collection",
      ],
      outcomes: [
        "95% answer accuracy on internal benchmarks",
        "Reduced document search time by 80%",
        "Processes 500+ page documents in under 30 seconds",
        "Adopted by 3 enterprise clients within pilot phase",
      ],
      role: "Full-Stack AI Engineer",
      duration: "3 months",
    },
  },
  {
    title: "Real Estate Listing Platform",
    description: "Full-featured real estate marketplace with property listings, advanced filters (location, price, type), and comprehensive admin dashboard for property management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    caseStudy: {
      overview: "Built a modern real estate marketplace connecting property owners with buyers and renters, featuring advanced search, interactive maps, virtual tours, and a powerful admin dashboard for listing management.",
      challenge: "Existing real estate platforms in the target market lacked modern UX, had poor search functionality, and offered no tools for agents to manage listings efficiently at scale.",
      solution: "Created a performant Next.js application with server-side rendering for SEO, PostgreSQL with Prisma for type-safe data access, and a comprehensive admin panel with analytics and bulk operations.",
      keyFeatures: [
        "Advanced multi-filter property search with map view",
        "Virtual tour integration with 360° media",
        "Agent dashboard with lead management CRM",
        "Automated email notifications for saved searches",
        "SEO-optimized property pages with structured data",
        "Mobile-responsive design with PWA support",
      ],
      outcomes: [
        "10,000+ property listings managed",
        "3x faster page load vs competitor platforms",
        "45% increase in user engagement after launch",
        "Featured in local tech publication",
      ],
      role: "Lead Full-Stack Developer",
      duration: "5 months",
    },
  },
  {
    title: "N8N Workflow Automation Hub",
    description: "Enterprise automation platform integrating N8N with AI models for intelligent workflow orchestration, data processing, and multi-system integration.",
    technologies: ["N8N", "Node.js", "PostgreSQL", "OpenAI API", "Docker"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    caseStudy: {
      overview: "Designed and deployed an enterprise automation hub using N8N as the workflow engine, integrated with AI models for intelligent data processing, automated reporting, and cross-platform system orchestration.",
      challenge: "Enterprises rely on manual, error-prone processes to move data between systems (CRM, ERP, email, databases). These bottlenecks waste hundreds of engineering hours monthly and introduce data inconsistencies.",
      solution: "Built a centralized N8N-based automation platform with custom nodes for AI-powered data enrichment, error handling with retry logic, and a monitoring dashboard for workflow health tracking.",
      keyFeatures: [
        "50+ pre-built workflow templates for common tasks",
        "AI-powered email classification and routing",
        "Automated report generation with GPT-4 summaries",
        "Multi-system sync (Salesforce, HubSpot, Slack, Jira)",
        "Real-time workflow monitoring and alerting",
        "Custom N8N nodes for proprietary API integrations",
      ],
      outcomes: [
        "200+ hours/month saved on manual data entry",
        "99.7% workflow execution success rate",
        "Integrated 12 enterprise systems seamlessly",
        "ROI achieved within 2 months of deployment",
      ],
      role: "Automation & AI Engineer",
      duration: "3 months",
    },
  },
  {
    title: "EduHub – School Management",
    description: "Comprehensive school management platform featuring student & teacher dashboards, course management, attendance tracking, and secure authentication system.",
    technologies: ["Django", "React", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    caseStudy: {
      overview: "Developed a comprehensive school management system that digitizes academic operations including enrollment, grading, attendance, and communication between students, teachers, and administrators.",
      challenge: "Schools in the region relied on paper-based systems and fragmented tools for managing student records, attendance, and grades, leading to data loss, inefficiency, and poor parent communication.",
      solution: "Built a full-stack platform with Django REST backend, React frontend, and Redis for real-time features. Implemented role-based dashboards for students, teachers, and admins with secure JWT authentication.",
      keyFeatures: [
        "Role-based dashboards (Student, Teacher, Admin)",
        "Automated attendance tracking with QR codes",
        "Grade management with GPA calculation",
        "Parent notification system via email and SMS",
        "Course scheduling with conflict detection",
        "Report card generation and export",
      ],
      outcomes: [
        "Deployed across 5 schools serving 3,000+ students",
        "Reduced administrative workload by 60%",
        "98% parent satisfaction rate on communication",
        "Zero data loss incidents since deployment",
      ],
      role: "Full-Stack Developer",
      duration: "4 months",
    },
  },
  {
    title: "AI Content Generator Suite",
    description: "Multi-modal AI content creation platform with text generation, image creation, and automated content scheduling using GPT-4 and DALL-E integration.",
    technologies: ["Next.js", "OpenAI", "Anthropic", "Prisma", "Vercel AI SDK"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    caseStudy: {
      overview: "Created a multi-modal AI content platform that enables marketers and creators to generate blog posts, social media content, images, and marketing copy using GPT-4, Claude, and DALL-E with automated scheduling.",
      challenge: "Content teams spend 15+ hours weekly creating and scheduling content across platforms. Existing AI tools are siloed—separate tools for text, images, and scheduling create fragmented workflows.",
      solution: "Built a unified content creation suite with Vercel AI SDK for streaming responses, multi-model support (OpenAI + Anthropic), integrated DALL-E image generation, and a content calendar with direct social media publishing.",
      keyFeatures: [
        "Multi-model AI text generation (GPT-4, Claude)",
        "AI image generation with DALL-E 3 integration",
        "Content calendar with drag-and-drop scheduling",
        "Brand voice training and tone customization",
        "SEO optimization suggestions for blog content",
        "Direct publishing to social media platforms",
      ],
      outcomes: [
        "70% reduction in content creation time",
        "500+ pieces of content generated in beta",
        "4.8/5 user satisfaction rating",
        "Integrated with 6 social media platforms",
      ],
      role: "Lead AI Full-Stack Developer",
      duration: "4 months",
    },
  },
  {
    title: "Full-Stack E-commerce",
    description: "Complete e-commerce solution with product catalog, shopping cart, checkout flow, Stripe payment integration, and admin product management dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    caseStudy: {
      overview: "Developed a production-ready e-commerce platform with a complete shopping experience including product browsing, cart management, secure Stripe checkout, order tracking, and an admin dashboard for inventory management.",
      challenge: "The client needed a custom e-commerce solution that could handle high traffic, integrate with their existing inventory system, and provide a seamless checkout experience with minimal cart abandonment.",
      solution: "Built a Next.js storefront with SSR for SEO, Redux for client-side state management, Stripe for secure payments, and a Node.js API with MongoDB for flexible product data modeling and order management.",
      keyFeatures: [
        "Product catalog with faceted search and filters",
        "Real-time inventory sync with warehouse system",
        "Stripe payment integration with 3D Secure",
        "Order tracking with email notifications",
        "Admin dashboard with sales analytics",
        "Wishlist and product comparison features",
      ],
      outcomes: [
        "30% reduction in cart abandonment rate",
        "Handles 10,000+ concurrent users",
        "$500K+ in transactions processed",
        "Sub-2 second page load times globally",
      ],
      role: "Full-Stack Developer",
      duration: "3 months",
    },
  },
  {
    title: "DevOps Automation Suite",
    description: "Comprehensive CI/CD pipeline automation tool with infrastructure-as-code templates for multi-cloud deployments.",
    technologies: ["Python", "Docker", "Kubernetes", "Terraform", "AWS"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    caseStudy: {
      overview: "Built a comprehensive DevOps automation suite that streamlines CI/CD pipelines, infrastructure provisioning, and multi-cloud deployments using Infrastructure-as-Code principles.",
      challenge: "Development teams were spending excessive time on manual deployments, inconsistent environments across staging and production, and lack of standardized infrastructure provisioning across AWS, GCP, and Azure.",
      solution: "Created a Python-based CLI tool with Terraform modules for multi-cloud IaC, Kubernetes Helm charts for application deployment, and GitHub Actions/GitLab CI templates for automated testing and deployment pipelines.",
      keyFeatures: [
        "Multi-cloud Terraform modules (AWS, GCP, Azure)",
        "Kubernetes cluster provisioning and management",
        "Automated CI/CD pipeline generation",
        "Environment parity checks and drift detection",
        "Secrets management with HashiCorp Vault integration",
        "Deployment rollback and canary release support",
      ],
      outcomes: [
        "Deployment time reduced from 2 hours to 15 minutes",
        "Zero-downtime deployments achieved",
        "Infrastructure costs reduced by 35%",
        "Adopted by 8 development teams internally",
      ],
      role: "DevOps Engineer",
      duration: "3 months",
    },
  },
  {
    title: "Security Audit Dashboard",
    description: "Real-time security monitoring dashboard for smart contracts with automated vulnerability detection and reporting.",
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "Slither"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    caseStudy: {
      overview: "Developed a real-time security monitoring platform for smart contracts that automatically detects vulnerabilities, generates audit reports, and tracks remediation progress across multiple blockchain networks.",
      challenge: "Smart contract auditing was largely manual, time-consuming, and expensive. Teams lacked continuous monitoring tools to detect new vulnerabilities introduced by contract upgrades or dependency changes.",
      solution: "Built an automated pipeline integrating Slither static analysis with custom detection rules, a React dashboard for real-time monitoring, and PostgreSQL for historical vulnerability tracking and trend analysis.",
      keyFeatures: [
        "Automated Slither and Mythril vulnerability scanning",
        "Real-time alerting for critical vulnerabilities",
        "Historical audit trail with trend analytics",
        "Custom rule engine for project-specific checks",
        "PDF audit report generation",
        "Integration with GitHub for PR-level scanning",
      ],
      outcomes: [
        "Detected 40+ critical vulnerabilities pre-deployment",
        "Audit turnaround time reduced by 70%",
        "Monitoring 200+ smart contracts across 3 chains",
        "Used by 5 Web3 security teams",
      ],
      role: "Security & Full-Stack Engineer",
      duration: "2 months",
    },
  },
  {
    title: "NFT Marketplace",
    description: "Full-featured NFT marketplace with lazy minting, auction system, and royalty distribution.",
    technologies: ["Cairo", "Starknet", "React", "IPFS"],
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    caseStudy: {
      overview: "Built a full-featured NFT marketplace on Starknet using Cairo, featuring gasless lazy minting, English and Dutch auction mechanisms, and an automated royalty distribution system via IPFS-based metadata.",
      challenge: "Existing NFT marketplaces on Ethereum suffered from high gas fees for minting and trading. Artists needed a cost-effective platform with built-in royalty enforcement and flexible auction formats.",
      solution: "Leveraged Starknet's L2 scaling for near-zero gas fees, implemented lazy minting so creators pay nothing until sale, and built Cairo smart contracts with enforced on-chain royalty splits.",
      keyFeatures: [
        "Gasless lazy minting for creators",
        "English and Dutch auction mechanisms",
        "On-chain royalty enforcement and splits",
        "IPFS metadata storage with pinning service",
        "Collection management and analytics",
        "Social features: likes, follows, and activity feeds",
      ],
      outcomes: [
        "5,000+ NFTs minted in first month",
        "Gas costs 95% lower than Ethereum alternatives",
        "$100K+ in creator royalties distributed",
        "Featured in Starknet ecosystem showcase",
      ],
      role: "Blockchain & Frontend Developer",
      duration: "4 months",
    },
  },
  {
    title: "API Gateway Service",
    description: "High-performance API gateway with rate limiting, caching, and authentication middleware.",
    technologies: ["Node.js", "Redis", "Docker", "Nginx"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    caseStudy: {
      overview: "Designed and built a high-performance API gateway service that provides centralized rate limiting, response caching, authentication, and request routing for a microservices architecture.",
      challenge: "The growing microservices ecosystem lacked a unified entry point, causing duplicated auth logic, inconsistent rate limiting, and no centralized monitoring of API usage across services.",
      solution: "Built a Node.js-based API gateway with Redis for distributed rate limiting and caching, Nginx as a reverse proxy, and JWT-based authentication middleware with role-based access control.",
      keyFeatures: [
        "Distributed rate limiting with sliding window algorithm",
        "Multi-layer response caching (Redis + in-memory)",
        "JWT authentication with RBAC middleware",
        "Request/response transformation and validation",
        "Real-time API usage analytics and monitoring",
        "Circuit breaker pattern for fault tolerance",
      ],
      outcomes: [
        "API response times improved by 60% with caching",
        "Handles 50,000+ requests per second",
        "Eliminated duplicate auth code across 15 services",
        "99.99% uptime over 12 months",
      ],
      role: "Backend Engineer",
      duration: "2 months",
    },
  },
  {
    title: "Blockchain Explorer",
    description: "Custom blockchain explorer for tracking transactions, smart contracts, and network statistics.",
    technologies: ["Rust", "React", "GraphQL", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    caseStudy: {
      overview: "Built a custom blockchain explorer for an EVM-compatible chain that provides real-time transaction tracking, smart contract verification, token analytics, and comprehensive network statistics.",
      challenge: "The custom L2 chain lacked a dedicated block explorer, making it impossible for developers and users to verify transactions, debug smart contracts, or monitor network health.",
      solution: "Developed a Rust-based indexer for high-throughput block processing, a GraphQL API for flexible data querying, a React frontend with real-time WebSocket updates, and PostgreSQL for indexed blockchain data.",
      keyFeatures: [
        "Real-time block and transaction indexing",
        "Smart contract source code verification",
        "Token transfer tracking and holder analytics",
        "Network statistics dashboard (TPS, gas, validators)",
        "GraphQL API for developer integrations",
        "Address portfolio view with transaction history",
      ],
      outcomes: [
        "Indexes 1,000+ blocks per second",
        "Serves 100K+ daily API requests",
        "Adopted as the official explorer for the chain",
        "Used by 2,000+ developers and traders daily",
      ],
      role: "Blockchain & Systems Engineer",
      duration: "3 months",
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
            A selection of projects showcasing my expertise in full-stack development, blockchain, and AI.
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
