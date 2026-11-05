import { ArrowUpRight, BriefcaseBusiness, Code2, ShieldCheck, Cloud } from "lucide-react";
import { activeEngagements, historicalEngagements, professionalFocus } from "@/content/career";

const focusIcons = [Code2, ShieldCheck, Cloud] as const;

export default function ExperiencePage() {
  return (
    <div>
      <header className="border-b border-border bg-card/30">
        <div className="section-container">
          <p className="font-mono text-sm text-primary">~/portfolio $ cat experience.md</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">Experience &amp; Engineering Focus</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">From networking and security support to frontend, full-stack, backend and infrastructure engineering. Current freelance engagements are shown separately from earlier self-reported roles.</p>
        </div>
      </header>
      <section className="section-container" aria-labelledby="engagements-heading">
        <div className="flex items-center gap-3">
          <BriefcaseBusiness className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 id="engagements-heading" className="font-heading text-2xl font-bold sm:text-3xl">Current engineering engagements</h2>
        </div>
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {activeEngagements.map((work) => (
            <article key={work.organization} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Ongoing freelance</span>
                <span className="font-mono text-xs text-muted-foreground">{work.period}</span>
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold">{work.organization}</h3>
              <p className="mt-2 font-semibold text-primary">{work.position}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{work.overview}</p>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                {work.contributions.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {work.stack.map((tool) => <span key={tool} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">{tool}</span>)}
              </div>
              {work.evidence.length > 0 && <div className="mt-6 border-t border-border pt-5">
                {work.evidence.map((link) => <a key={link.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>)}
              </div>}
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">Private repositories and client materials are not published here. The earlier roles below are based on self-reported career history; their date ranges and selected titles remain subject to confirmation.</p>
      </section>
      <section className="border-t border-border" aria-labelledby="history-heading">
        <div className="section-container">
          <p className="font-mono text-sm text-primary">~/portfolio $ cat career-history.md</p>
          <h2 id="history-heading" className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Earlier professional experience</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            These seven roles come from my career history. Dates and some role details are self-reported and still being confirmed, so the entries below explicitly show their verification status.
          </p>
          <ol className="relative mt-10 space-y-6 border-l border-border pl-6 sm:pl-8">
            {historicalEngagements.map((work) => (
              <li key={work.organization} className="relative">
                <span className="absolute -left-[30px] top-8 h-3 w-3 rounded-full border-2 border-primary bg-background sm:-left-[38px]" aria-hidden="true" />
                <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-xs text-muted-foreground">{work.period}</p>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">Earlier experience</span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold sm:text-2xl">{work.organization}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{work.position}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{work.overview}</p>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {work.contributions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.stack.map((tool) => <span key={tool} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">{tool}</span>)}
                  </div>
                  <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="font-semibold">Verification note:</span> {work.verification}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-t border-border bg-card/40" aria-labelledby="focus-heading">
        <div className="section-container">
          <p className="font-mono text-sm text-primary">~/portfolio $ cat engineering-focus.md</p>
          <h2 id="focus-heading" className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Areas of practice</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {professionalFocus.map((focus, index) => {
              const Icon = focusIcons[index];
              return <article key={focus.heading} className="rounded-xl border border-border bg-background p-6">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-bold">{focus.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{focus.detail}</p>
              </article>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
