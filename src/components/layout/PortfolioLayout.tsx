import { type ReactNode } from "react";
import { PortfolioNavigation } from "./PortfolioNavigation";
import { portfolioIdentity } from "@/content/site";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <PortfolioNavigation />
      <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
      <footer className="border-t border-border bg-card/30">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} {portfolioIdentity.name}. Built with React &amp; TypeScript.</span>
          <div className="flex gap-4">
            <a href={portfolioIdentity.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href={portfolioIdentity.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href={`mailto:${portfolioIdentity.email}`} className="hover:text-foreground">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
