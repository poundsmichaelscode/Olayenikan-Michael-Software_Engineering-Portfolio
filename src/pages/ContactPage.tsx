import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageSquareText } from "lucide-react";
import { portfolioIdentity } from "@/content/site";

const channels = [
  { title: "Email", detail: portfolioIdentity.email, href: `mailto:${portfolioIdentity.email}`, icon: Mail },
  { title: "GitHub", detail: "Browse public engineering projects", href: portfolioIdentity.github, icon: Github },
  { title: "LinkedIn", detail: "Connect professionally", href: portfolioIdentity.linkedin, icon: Linkedin }
] as const;

export default function ContactPage() {
  return (
    <div>
      <header className="border-b border-border bg-card/30">
        <div className="section-container">
          <p className="font-mono text-sm text-primary">~/portfolio $ contact --open</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">Let's work together</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Reach out about full-stack and backend engineering opportunities, cloud and DevOps collaborations, or software development projects.
          </p>
        </div>
      </header>
      <section className="section-container grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]" aria-labelledby="channels-heading">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <MessageSquareText className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 id="channels-heading" className="font-heading text-2xl font-bold">Contact channels</h2>
          </div>
          <div className="mt-7 grid min-w-0 grid-cols-1 gap-4">
            {channels.map(({ title, detail, href, icon: Icon }) => (
              <a key={title} href={href} target={href.startsWith("https://") ? "_blank" : undefined}
                rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading font-semibold">{title}</span>
                  <span className="mt-1 block [overflow-wrap:anywhere] text-sm text-muted-foreground">{detail}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Email is the primary contact method. No placeholder form or unconfigured submission endpoint is used on this page.
          </p>
        </div>
        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-xl font-bold">Based in {portfolioIdentity.location}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Open to relevant engineering conversations and remote opportunities. Share the role, project scope or technical problem when reaching out.</p>
          <a href={`mailto:${portfolioIdentity.email}?subject=Engineering%20opportunity`}
             className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
             <Mail className="h-4 w-4" aria-hidden="true" /> Compose an email
          </a>
        </aside>
      </section>
    </div>
  );
}
