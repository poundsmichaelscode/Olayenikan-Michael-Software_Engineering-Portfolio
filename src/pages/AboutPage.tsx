import { ArrowUpRight, Code2, Database, Cloud, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioIdentity } from "@/content/site";

const expertise = [
  { title: "Product and frontend", details: "React, Next.js, TypeScript, reusable components and connected client-side workflows.", icon: Code2 },
  { title: "Backend and data", details: "Node.js, Express, Django REST Framework, API authentication, PostgreSQL, Redis and testing.", icon: Database },
  { title: "Infrastructure and delivery", details: "Linux, Docker, GitHub Actions, CI/CD, AWS and Azure infrastructure practice.", icon: Cloud }
] as const;

export default function AboutPage() {
  return (
    <div>
      <header className="border-b border-border bg-card/30">
        <div className="section-container">
          <p className="font-mono text-sm text-primary">~/portfolio $ cat about.md</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">About {portfolioIdentity.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{portfolioIdentity.introduction}</p>
        </div>
      </header>
      <section className="section-container" aria-labelledby="journey-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <h2 id="journey-heading" className="font-heading text-2xl font-bold">My engineering journey</h2>
            <div className="mt-5 space-y-5 leading-relaxed text-muted-foreground">
              <p>My technical journey began with networking and data security, giving me a foundation in systems, troubleshooting and the infrastructure behind applications. From there, I moved into web development, full-stack engineering and backend development.</p>
              <p>Today I work across TypeScript and Python-based applications, APIs and databases, while developing cloud and DevOps capabilities through hands-on projects. I care about how software behaves beyond the interface: authentication, data integrity, reliable builds, maintainability and deployment practices.</p>
              <p>My portfolio documents the work I have implemented, what I learned, and where each project's limitations remain. My goal is to keep growing as a backend and cloud-focused software engineer and contribute to dependable engineering teams.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link to="/experience" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">Experience <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">Engineering work <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-sm text-primary">/profile</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div><dt className="text-muted-foreground">Based in</dt><dd className="mt-1 font-medium">{portfolioIdentity.location}</dd></div>
              <div><dt className="text-muted-foreground">Professional focus</dt><dd className="mt-1 font-medium">{portfolioIdentity.specializations.join(" · ")}</dd></div>
              <div><dt className="text-muted-foreground">Current work</dt><dd className="mt-1 font-medium">Full-stack and backend freelance engineering</dd></div>
            </dl>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline" to="/education"><GraduationCap className="h-4 w-4" aria-hidden="true" /> Education and training</Link>
          </aside>
        </div>
      </section>
      <section className="border-t border-border bg-card/40" aria-labelledby="expertise-heading">
        <div className="section-container">
          <h2 id="expertise-heading" className="font-heading text-2xl font-bold sm:text-3xl">Where I contribute</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {expertise.map(({ title, details, icon: Icon }) => (
              <article key={title} className="rounded-xl border border-border bg-background p-6">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
