import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Search } from "lucide-react";
import { engineeringProjects } from "@/content/engineeringProjects";

const filters = ["All", "Full-Stack", "Backend", "Cloud & DevOps"] as const;

export default function ProjectsDirectory() {
  const [category, setCategory] = useState<(typeof filters)[number]>("All");
  const [search, setSearch] = useState("");
  const visible = engineeringProjects.filter((project) =>
    (category === "All" || project.category === category) &&
    [project.title, project.subtitle, project.summary, ...project.stack].join(" ").toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="section-container">
      <p className="font-mono text-sm text-primary">~/portfolio $ ls projects/</p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">Engineering Projects</h1>
      <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
        Selected work spanning software applications, backend APIs, reliability engineering and infrastructure.
        Each project links to source-supported technical decisions and documented limitations.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" aria-label="Filter by engineering discipline">
          {filters.map((filter) => (
            <button key={filter} type="button" aria-pressed={category === filter} onClick={() => setCategory(filter)}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${category === filter ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}>
              {filter}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 focus-within:ring-2 focus-within:ring-ring">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects and tools" className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground sm:w-56" />
        </label>
      </div>
      <p className="mt-5 text-sm text-muted-foreground" role="status">{visible.length} {visible.length === 1 ? "project" : "projects"} shown</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <article key={project.slug} className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</p>
            <h2 className="mt-3 font-heading text-2xl font-bold">{project.title}</h2>
            <p className="mt-2 text-sm font-medium text-foreground">{project.subtitle}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.stack.slice(0,5).map((tech) => <span key={tech} className="rounded border border-border bg-background px-2 py-1 text-xs text-muted-foreground">{tech}</span>)}</div>
            <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">{project.status}</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline" to={`/projects/${project.slug}`}>Read case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              <a className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground" href={project.repository} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true" /> GitHub</a>
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && <p className="mt-8 rounded-lg border border-border p-8 text-center text-muted-foreground">No matching projects. Try another search or category.</p>}
    </div>
  );
}
