import { ArrowRight, Github, Linkedin, Mail, Terminal, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioIdentity } from "@/content/site";

const strengths = ["React & TypeScript", "Node.js & Express", "Python & Django REST", "Docker & CI/CD", "AWS & Azure"];

export function EngineeringHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_65%_8%,hsl(var(--primary)/0.10),transparent_55%)]" />
      <div className="section-container relative mx-auto grid min-h-[75vh] items-center gap-12 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold tracking-wide text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> Open to engineering opportunities
          </span>
          <p className="mt-9 font-mono text-sm text-primary">~/portfolio $ whoami</p>
          <h1 id="hero-heading" className="mt-4 font-heading text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl xl:text-7xl">{portfolioIdentity.name}</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-foreground sm:text-2xl">{portfolioIdentity.title}</p>
          <p className="mt-3 text-base font-medium text-primary">{portfolioIdentity.specializations.join(" · ")}</p>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{portfolioIdentity.introduction}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Explore projects <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <a href={`mailto:${portfolioIdentity.email}`} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"><Mail className="h-4 w-4" aria-hidden="true" /> Let's talk</a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" />{portfolioIdentity.location}</span>
            <a className="inline-flex items-center gap-2 hover:text-primary" href={portfolioIdentity.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true" /> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href={portfolioIdentity.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>
        <aside className="rounded-2xl border border-border bg-card/90 p-5 shadow-xl shadow-primary/5" aria-label="Technical focus">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" /><span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">engineering-focus.ts</span>
          </div>
          <div className="space-y-5 py-6 font-mono text-xs sm:text-sm">
            <p className="text-primary"><Terminal className="mr-2 inline h-4 w-4" aria-hidden="true" />$ cat focus.txt</p>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="text-primary">01.</span> Product interfaces &amp; user experience</p>
              <p><span className="text-primary">02.</span> Secure APIs &amp; data modeling</p>
              <p><span className="text-primary">03.</span> Containers, CI/CD &amp; infrastructure</p>
            </div>
            <p className="text-primary">$ stack --selected</p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((item) => <span key={item} className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-foreground">{item}</span>)}
            </div>
          </div>
          <div className="border-t border-border pt-4 font-mono text-xs text-muted-foreground">Built beyond the interface<span className="ml-1 text-primary" aria-hidden="true">_</span></div>
        </aside>
      </div>
    </section>
  );
}
