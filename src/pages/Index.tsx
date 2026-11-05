import { ArrowRight, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { EngineeringHero } from "@/components/home/EngineeringHero";
import { FeaturedEngineeringWork } from "@/components/home/FeaturedEngineeringWork";
import { portfolioIdentity } from "@/content/site";

const practices = [
  { title: "Build across the stack", description: "Translate product needs into usable interfaces, application APIs and durable data models." },
  { title: "Engineer for reliability", description: "Apply testing, authentication, observability and maintainability throughout backend development." },
  { title: "Own the delivery path", description: "Work with Docker, CI/CD, Linux and cloud infrastructure to support dependable deployment workflows." },
] as const;

export default function Index() {
  return (
    <>
      <EngineeringHero />
      <FeaturedEngineeringWork />
      <section className="border-y border-border bg-card/40" aria-labelledby="approach-heading">
        <div className="section-container">
          <p className="mb-3 font-mono text-sm text-primary">~/portfolio $ cat approach.md</p>
          <h2 id="approach-heading" className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Engineering beyond the interface</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">I work across frontend applications, backend services and infrastructure. My focus is on connecting those layers thoughtfully—from API and data design to deployment and operational learning.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {practices.map((practice, index) => (
              <article key={practice.title} className="rounded-xl border border-border bg-background p-6">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-lg font-bold">{practice.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{practice.description}</p>
              </article>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">More about my work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="section-container" aria-labelledby="contact-heading">
        <div className="rounded-2xl border border-primary/20 bg-card px-6 py-10 sm:px-10 sm:py-14">
          <p className="font-mono text-sm text-primary">~/portfolio $ connect</p>
          <h2 id="contact-heading" className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">Let's build something meaningful.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">Available for remote engineering opportunities, freelance projects, technical collaborations and consulting conversations.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`mailto:${portfolioIdentity.email}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:opacity-90"><Mail className="h-4 w-4" aria-hidden="true" /> Send an email</a>
            <a href={portfolioIdentity.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-muted"><Github className="h-4 w-4" aria-hidden="true" /> GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}
