import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="section-container flex min-h-[55vh] flex-col items-start justify-center" aria-labelledby="not-found-heading">
      <p className="font-mono text-sm text-primary">~/portfolio $ cd {pathname}</p>
      <h1 id="not-found-heading" className="mt-5 font-heading text-5xl font-bold">404 — Page not found</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">That route doesn't exist. Explore the homepage or browse the engineering projects instead.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Return home</Link>
        <Link to="/projects" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold hover:bg-muted">Explore projects</Link>
      </div>
    </section>
  );
}
