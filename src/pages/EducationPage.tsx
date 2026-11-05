import { BookOpenCheck, GraduationCap, Terminal } from "lucide-react";
import { completedTraining, formalEducation, ongoingLearning } from "@/content/education";

export default function EducationPage() {
  return (
    <div>
      <header className="border-b border-border bg-card/30">
        <div className="section-container">
          <p className="font-mono text-sm text-primary">~/portfolio $ cat learning-path.md</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">Education &amp; Technical Training</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Formal study, completed training programmes and continuing hands-on engineering practice. Programme completions are distinguished from external professional certifications.</p>
        </div>
      </header>
      <section className="section-container" aria-labelledby="education-heading">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 id="education-heading" className="font-heading text-2xl font-bold sm:text-3xl">Formal education</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {formalEducation.map((item) => (
            <article key={item.qualification} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{item.status}</span>
              <h3 className="mt-5 font-heading text-xl font-bold">{item.qualification}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.institution}</p>
              {item.period && <p className="mt-5 font-mono text-sm text-primary">{item.period}</p>}
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-card/40" aria-labelledby="programmes-heading">
        <div className="section-container">
          <div className="flex items-center gap-3">
            <BookOpenCheck className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 id="programmes-heading" className="font-heading text-2xl font-bold sm:text-3xl">Completed training programmes</h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">These programmes are listed as completed based on personal training history. Credential links and completion dates are not shown unless separately verified.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {completedTraining.map((item, index) => (
              <article key={item.name} className="rounded-xl border border-border bg-background p-5">
                <p className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")} / 09</p>
                <h3 className="mt-3 font-heading text-base font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.provider}</p>
                <p className="mt-4 text-xs font-semibold text-primary">Programme completed</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-container" aria-labelledby="ongoing-heading">
        <div className="flex items-center gap-3">
          <Terminal className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 id="ongoing-heading" className="font-heading text-2xl font-bold sm:text-3xl">Ongoing hands-on learning</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {ongoingLearning.map((item) => (
            <article key={item.name} className="rounded-xl border border-border bg-card p-6">
              <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{item.status}</span>
              <h3 className="mt-4 font-heading text-lg font-bold">{item.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.provider}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
