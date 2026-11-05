import { ArrowUpRight, Cloud, Code2, Network, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const featuredEngineeringWork = [
  { slug: "routewell", title: "RouteWell", category: "Full-Stack Engineering", summary: "Logistics management platform combining a Next.js interface with an Express API, PostgreSQL and Redis.", stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis"], note: "Implemented MVP · Cloud architecture documented", icon: Code2 },
  { slug: "skillproof-api", title: "SkillProof API", category: "Backend Engineering", summary: "Django REST API for managing skills, supporting evidence and opportunities, with JWT authentication and ownership controls.", stack: ["Python", "Django REST", "PostgreSQL", "Docker"], note: "Locally validated · No public API deployment", icon: ShieldCheck },
  { slug: "api-gateway", title: "API Gateway Service", category: "Backend Architecture", summary: "API gateway development environment featuring proxy routing, Redis rate limiting and observability tooling.", stack: ["Node.js", "Redis", "Nginx", "Grafana"], note: "Implemented development environment · Hardening pending", icon: Network },
  { slug: "cloudpress-aws", title: "CloudPress AWS", category: "Cloud & DevOps", summary: "AWS EC2 WordPress deployment lab featuring Linux administration, documented MySQL OOM recovery and Bash automation.", stack: ["AWS EC2", "Linux", "MySQL", "Terraform"], note: "Documented deployment lab · Production upgrades pending", icon: Cloud },
] as const;

export function FeaturedEngineeringWork() {
  return (
    <section className="section-container" aria-labelledby="featured-heading">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-sm text-primary">~/portfolio $ ls selected-work</p>
          <h2 id="featured-heading" className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Selected engineering work</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">A closer look at application development, backend systems and cloud infrastructure, grounded in actual repositories and technical documentation.</p>
        </div>
        <Link to="/projects" className="inline-flex shrink-0 items-center gap-2 self-start rounded-md px-2 py-2 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">All projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {featuredEngineeringWork.map(({ slug, title, category, summary, stack, note, icon: Icon }, index) => (
          <article key={slug} className="group flex min-h-[295px] flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/45 sm:p-7">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></div>
              <span className="font-mono text-xs text-muted-foreground">0{index + 1} / 04</span>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">{category}</p>
            <h3 className="mt-2 font-heading text-2xl font-bold">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">{stack.map((tech) => <span key={tech} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">{tech}</span>)}</div>
            <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">{note}</p>
            <Link to={`/projects/${slug}`} aria-label={`Explore ${title} case study`} className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Explore case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
