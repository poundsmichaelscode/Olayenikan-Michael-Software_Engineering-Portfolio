import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, GitBranch } from "lucide-react";
import { findEngineeringProject } from "@/content/engineeringProjects";
import NotFound from "./NotFound";

export default function EngineeringCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = findEngineeringProject(slug);
  if (!project) return <NotFound />;

  return (
    <article>
      <div className="border-b border-border bg-card/30">
        <header className="section-container">
          <Link className="inline-flex items-center gap-2 text-sm text-primary hover:underline" to="/projects"><ArrowLeft className="h-4 w-4" aria-hidden="true"/> All projects</Link>
          <p className="mt-10 font-mono text-sm text-primary">~/portfolio/projects/{project.slug}</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold">{project.subtitle}</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">{tech}</span>)}</div>
          <p className="mt-7 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-foreground"><GitBranch className="h-4 w-4 text-primary" aria-hidden="true"/>{project.status}</p>
          <div className="mt-7"><a className="inline-flex items-center gap-2 font-semibold text-primary hover:underline" href={project.repository} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true"/> View repository <ArrowUpRight className="h-4 w-4" aria-hidden="true"/></a></div>
        </header>
      </div>
      <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-12">
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="font-heading text-2xl font-bold">Engineering challenge</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>
          </section>
          <section aria-labelledby="architecture-heading">
            <h2 id="architecture-heading" className="font-heading text-2xl font-bold">Architecture overview</h2>
            <p className="mt-3 text-sm text-muted-foreground">Simplified illustration of the documented system layers—not a running production topology.</p>
            <ol className="mt-6 grid gap-3" aria-label="Architecture components">
              {project.architecture.map((layer, index) => (
                <li key={layer} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{layer}</span>
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="implementation-heading">
            <h2 id="implementation-heading" className="font-heading text-2xl font-bold">Implementation decisions</h2>
            <ul className="mt-5 space-y-4">{project.approach.map((item) => <li key={item} className="border-l-2 border-primary/50 pl-4 leading-relaxed text-muted-foreground">{item}</li>)}</ul>
          </section>
          <section aria-labelledby="limitations-heading">
            <h2 id="limitations-heading" className="font-heading text-2xl font-bold">Verification and limitations</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-muted-foreground">{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
        <aside aria-label="Source evidence" className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-24">
          <p className="font-mono text-sm text-primary">/evidence</p>
          <h2 className="mt-2 font-heading text-xl font-bold">Explore the source</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Open the actual code and technical documentation behind this case study.</p>
          <ul className="mt-5 space-y-4">
            {project.evidence.map((item) => <li key={item.url}><a className="inline-flex items-start gap-2 text-sm font-medium text-primary hover:underline" href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"/></a></li>)}
          </ul>
        </aside>
      </div>
    </article>
  );
}
