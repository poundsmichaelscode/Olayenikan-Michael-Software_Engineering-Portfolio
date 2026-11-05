import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { portfolioIdentity, portfolioNavigation } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
  }`;

export function PortfolioNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setMobileOpen(false); }, [pathname]);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <nav className="container mx-auto flex min-h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="shrink-0 font-heading text-base font-bold tracking-tight text-foreground focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={`${portfolioIdentity.name}, home`}>
          <span className="text-primary" aria-hidden="true">&lt;</span>OM<span className="text-primary" aria-hidden="true"> /&gt;</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {portfolioNavigation.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === "/"} className={linkClass}>{item.label}</NavLink>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href={`mailto:${portfolioIdentity.email}`} className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex">Get in touch</a>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="portfolio-mobile-navigation" onKeyDown={(event) => { if (event.key === "Escape") setMobileOpen(false); }} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}>
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div id="portfolio-mobile-navigation" className="border-t border-border bg-background px-4 py-3 lg:hidden" role="navigation" aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === "Escape") setMobileOpen(false); }}>
          <div className="container mx-auto grid gap-1">
            {portfolioNavigation.map((item) => (
              <NavLink key={item.href} to={item.href} end={item.href === "/"} className={linkClass} onClick={() => setMobileOpen(false)}>{item.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
