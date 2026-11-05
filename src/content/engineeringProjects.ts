import type { FeaturedProjectSlug } from "./site";

export type EngineeringProject = {
  slug: FeaturedProjectSlug;
  title: string;
  category: "Full-Stack" | "Backend" | "Cloud & DevOps";
  subtitle: string;
  summary: string;
  challenge: string;
  approach: string[];
  architecture: string[];
  evidence: { label: string; url: string }[];
  stack: string[];
  limitations: string[];
  status: string;
  repository: string;
};

export const engineeringProjects: EngineeringProject[] = [
  {
    slug: "routewell", title: "RouteWell", category: "Full-Stack",
    subtitle: "Logistics operations, delivery workflows and supporting infrastructure",
    summary: "A full-stack logistics and delivery management application combining a Next.js frontend, Express/TypeScript API, PostgreSQL and Redis.",
    challenge: "Bring dispatch operations, delivery progression, drivers, vehicles and customers into a single structured workflow with defined access rules.",
    approach: [
      "Separated the React/Next.js interface from an Express API with dedicated route modules for authentication, deliveries, drivers, customers, vehicles, dashboard and notifications.",
      "Modeled roles, sessions and operational entities using PostgreSQL and Prisma, including delivery-state representations.",
      "Added middleware for rate limiting, security headers, CSRF protection and request context; exposed liveness and database/Redis readiness endpoints.",
      "Configured GitHub Actions for frontend/backend validation, image builds and Terraform checks."
    ],
    architecture: ["Next.js frontend", "Express / TypeScript API", "PostgreSQL / Prisma", "Redis"],
    evidence: [
      { label: "API router implementation", url: "https://github.com/poundsmichaelscode/RouteWell/blob/main/backend/src/routes/index.ts" },
      { label: "Backend security and health checks", url: "https://github.com/poundsmichaelscode/RouteWell/blob/main/backend/src/app.ts" },
      { label: "CI workflow", url: "https://github.com/poundsmichaelscode/RouteWell/blob/main/.github/workflows/ci.yml" }
    ],
    stack: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Redis", "Docker", "Azure Terraform"],
    limitations: ["Source code and CI configuration were inspected, but the full deployment has not been independently exercised for this portfolio review.", "Azure infrastructure is documented and configured in code; a successful public cloud deployment was not verified."],
    status: "Implemented MVP; Azure deployment unverified",
    repository: "https://github.com/poundsmichaelscode/RouteWell"
  },
  {
    slug: "skillproof-api", title: "SkillProof API", category: "Backend",
    subtitle: "Secure skills, evidence and career opportunity management",
    summary: "A Django REST Framework API with JWT authentication, permission boundaries, PostgreSQL, API documentation, automated tests and container support.",
    challenge: "Organize evidence of technical skills and career opportunities while keeping each account's resources protected.",
    approach: [
      "Structured Django apps for accounts, skills, evidence and opportunities.",
      "Used JWT authentication, request throttling and ownership checks for restricted API access.",
      "Added Django and DRF tests covering authentication, ownership, throttling and resource management.",
      "Defined a PostgreSQL-backed Compose environment and CI steps for migrations, test execution, OpenAPI checks and Docker builds."
    ],
    architecture: ["API client", "Django REST Framework", "JWT / ownership checks", "PostgreSQL"],
    evidence: [
      { label: "Django configuration", url: "https://github.com/poundsmichaelscode/skillproof-api/blob/main/config/settings.py" },
      { label: "CI and automated checks", url: "https://github.com/poundsmichaelscode/skillproof-api/blob/main/.github/workflows/ci.yml" },
      { label: "Testing baseline and limitations", url: "https://github.com/poundsmichaelscode/skillproof-api/blob/main/docs/week-3-test-baseline.md" }
    ],
    stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Docker", "GitHub Actions"],
    limitations: ["Project documentation reports local tests, but the results have not been independently rerun as part of this portfolio audit.", "No publicly accessible production API has been independently verified."],
    status: "Locally developed backend API; public deployment unverified",
    repository: "https://github.com/poundsmichaelscode/skillproof-api"
  },
  {
    slug: "api-gateway", title: "API Gateway Service", category: "Backend",
    subtitle: "Request routing, rate limiting and service observability",
    summary: "A TypeScript/Express API gateway development environment integrating reverse proxying, Redis caching and rate limiting, PostgreSQL analytics and monitoring tools.",
    challenge: "Centralize cross-cutting request handling for multiple downstream services instead of duplicating middleware in each service.",
    approach: [
      "Composed an Express request pipeline with security middleware, request context, authentication, analytics and error handling.",
      "Used a service registry and proxy registration to route to downstream development services.",
      "Included Redis, PostgreSQL, Nginx, Prometheus and Grafana in a multi-service Docker environment.",
      "Added development scripts for linting, unit/integration tests and load-test tooling."
    ],
    architecture: ["Nginx", "Express API gateway", "Redis / PostgreSQL", "Mock downstream services"],
    evidence: [
      { label: "Express middleware and proxy setup", url: "https://github.com/poundsmichaelscode/API-Gateway/blob/main/src/app.ts" },
      { label: "Docker Compose services", url: "https://github.com/poundsmichaelscode/API-Gateway/blob/main/docker-compose.yml" },
      { label: "Project README", url: "https://github.com/poundsmichaelscode/API-Gateway/blob/main/README.md" }
    ],
    stack: ["Node.js", "TypeScript", "Express", "Redis", "PostgreSQL", "Nginx", "Prometheus", "Grafana"],
    limitations: ["The inspected development Compose setup uses fixed demonstration credentials and publishes database/cache ports; it should not be presented as production-hardened.", "Load, security and production deployment results remain unverified."],
    status: "Implemented development environment; production hardening outstanding",
    repository: "https://github.com/poundsmichaelscode/API-Gateway"
  },
  {
    slug: "cloudpress-aws", title: "CloudPress AWS", category: "Cloud & DevOps",
    subtitle: "Linux infrastructure troubleshooting and WordPress deployment on AWS",
    summary: "A documented AWS EC2 deployment lab combining Ubuntu, Apache, PHP and MySQL, with automation and incident-response notes.",
    challenge: "Recover a resource-constrained EC2 lab server after MySQL was terminated by the Linux out-of-memory mechanism.",
    approach: [
      "Used Linux service and memory inspection to identify the reported MySQL/InnoDB OOM failure.",
      "Documented the creation of a 2 GB swap file with restrictive permissions and persistent fstab configuration.",
      "Created Bash health checks for services, system resources, listening ports and local HTTP availability.",
      "Defined starter Terraform resources for EC2, storage and security-group configuration."
    ],
    architecture: ["AWS EC2 / Ubuntu", "Apache / PHP", "WordPress", "MySQL (same instance)"],
    evidence: [
      { label: "Incident report", url: "https://github.com/poundsmichaelscode/cloudpress-aws-infrastructure/blob/main/docs/troubleshooting.md" },
      { label: "Swap configuration script", url: "https://github.com/poundsmichaelscode/cloudpress-aws-infrastructure/blob/main/scripts/configure-swap.sh" },
      { label: "Terraform starter", url: "https://github.com/poundsmichaelscode/cloudpress-aws-infrastructure/blob/main/terraform/main.tf" }
    ],
    stack: ["AWS EC2", "Ubuntu", "Apache", "PHP", "MySQL", "Bash", "Terraform"],
    limitations: ["The README reports a deployed WordPress environment, but current endpoint availability was not independently confirmed.", "HTTPS, monitoring, backups and complete Terraform reproduction are documented as future improvements.", "This is an infrastructure deployment lab using the open-source WordPress application, not a custom WordPress product authored from scratch."],
    status: "Documented AWS deployment lab; production upgrades outstanding",
    repository: "https://github.com/poundsmichaelscode/cloudpress-aws-infrastructure"
  }
];

export function findEngineeringProject(slug: string | undefined) {
  return engineeringProjects.find((project) => project.slug === slug);
}
