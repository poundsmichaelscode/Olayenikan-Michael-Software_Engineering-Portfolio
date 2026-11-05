import { ArrowUpRight, BookOpen, FileCode2 } from "lucide-react";
import { Link } from "react-router-dom";

const notes = [
  {
    title: "Building a documented API gateway",
    summary: "How proxy routing, rate limiting, Redis and observability fit together in the API Gateway Service development environment.",
    topic: "Backend architecture",
    project: "/projects/api-gateway"
  },
  {
    title: "Designing ownership boundaries for a Django API",
    summary: "A practical view of JWT authentication, institution-aware permissions and automated API tests in SkillProof.",
    topic: "Django REST Framework",
    project: "/projects/skillproof-api"
  },
  {
    title: "Troubleshooting an out-of-memory MySQL incident",
    summary: "A documented WordPress EC2 lab incident involving MySQL memory pressure, swap configuration and service health checks.",
    topic: "Cloud and Linux",
    project: "/projects/cloudpress-aws"
  },
] as const;

export default function BlogPage() {
  return (
    <div>
      <header className="border-b border-border bg-card/30">
        <div className="section-container">
          <p className="font-mono text-sm text-primary">~/portfolio $ ls engineering-notes/</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">Engineering Notes</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Topics and technical learning drawn from actual portfolio projects. These are reading guides to existing case studies, not previously published standalone blog posts.
          </p>
        </div>
      </header>
      <section className="section-container" aria-labelledby="notes-heading">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 id="notes-heading" className="font-heading text-2xl font-bold sm:text-3xl">Explore the engineering work</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((item) => (
            <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <FileCode2 className="h-6 w-6 text-primary" aria-hidden="true"/>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">{item.topic}</p>
              <h3 className="mt-3 font-heading text-xl font-bold">{item.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <Link to={item.project} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Read related case study <ArrowUpRight className="h-4 w-4" aria-hidden="true"/>
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">Long-form technical articles and publication dates will be added only when complete articles are ready for review.</p>
      </section>
    </div>
  );
}
