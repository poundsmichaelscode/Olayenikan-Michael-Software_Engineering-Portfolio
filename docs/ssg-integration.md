# Static prerendering integration (development branch)

## Implementation
The production build script now runs:
1. `vite build` for optimized browser assets.
2. `node scripts/prerender.mjs` using Vite's SSR transform and `react-dom/server`.
3. The generator renders 11 known routes into `dist/<route>/index.html`.
4. `vercel.json` contains explicit rewrites from each public route to its static HTML file, followed by an SPA fallback for unknown routes.

The generator **does not depend on Playwright or Chromium in Vercel**. Browser-based snapshots under `prerender-proof/` remain a separate CI proof, not a deployment input.

## Search indexing and previews
- Builds without `VERCEL_ENV=production` write `noindex, nofollow` into all generated HTML. This keeps local and development preview HTML out of search indexes by default.
- Builds with `VERCEL_ENV=production` write `index, follow` for known public routes. A production deployment still requires explicit authorization. Do not treat this config as permission to deploy.
- `RouteMetadata` continues to update canonical, descriptions and robots tags on client navigation.
- Confirm the canonical domain and verify `X-Robots-Tag` or deployment protection for publicly accessible Vercel previews; a meta tag is not a security boundary.
- Revisit the hardcoded canonical domain if a custom production domain is introduced.

## Validation
- `node scripts/verify-ssg-build.cjs` reads `dist` without running JavaScript. It checks the main heading, title, description, canonical URL, Open Graph URL, robots policy and per-route Vercel rewrites.
- Playwright `tests/browser/static-seo.spec.cjs` loads generated static HTML with JavaScript disabled.
- Existing Playwright browser and accessibility tests must still pass with JavaScript enabled; keep theme, filtering, navigation and mobile checks.
- Lighthouse CI remains a lab-based performance baseline; scores are not release thresholds.

## Important limitation — hydration
This version intentionally retains `createRoot` in `src/main.tsx`. React mounts the interactive app over the prerendered markup once scripts load rather than hydrating it in place. That is sufficient for HTML crawler visibility and works with the existing lazy route setup, but can cause an initial DOM remount and potentially visual flicker. Measure it on an actual Vercel preview before launch. A proper `hydrateRoot` transition must first ensure that the server and client component trees (including Suspense boundaries and theme providers) produce matching markup, and must be covered by hydration-error tests.

## Release gate
Do not merge or deploy without separately confirmed owner authorization. Before doing so:
1. Review Vercel preview directly and inspect its raw HTML responses for all known routes.
2. Verify static rewrites, assets, preview noindex, route metadata, navigation, theme toggle and 404 fallback.
3. Review Lighthouse scores over multiple samples and verify no layout flash after JavaScript mounts.
4. Perform manual accessibility and screen-reader testing.
5. Verify user career facts, public links and canonical domain.

## Hydration experiment — deliberately not shipped (5 November 2026)
A direct `hydrateRoot` experiment combined a common provider/route tree with eager page imports. TypeScript, unit tests and SSG output passed; the new Chromium regression check detected React recoverable hydration errors (minified errors 418 and 423) on both desktop and mobile. The server markup and browser tree do not yet match reliably. The experiment was reverted, retaining the already validated `createRoot` path, route-level code splitting and generated HTML.

Do not switch to `hydrateRoot` by replacing one line. First isolate differences in the shared provider subtree (especially theme script injection, Radix portals and router markup), use non-minified React diagnostics, and assert zero recoverable errors for all 11 routes in both themes before considering hydration complete. Compare measured initial JS bundle and real browser UX to ensure a larger eager bundle does not undo previous performance improvements.

The current release status remains **prerendered HTML for crawlers plus interactive React mounting after script load**, not full React hydration.
