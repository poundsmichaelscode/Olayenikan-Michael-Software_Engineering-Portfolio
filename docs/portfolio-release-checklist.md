# Portfolio release checklist — production hold

This document applies to branch `feat/portfolio-m1-foundation-design-system` only.

## Release gate
- [ ] Portfolio owner explicitly authorizes **merging** the draft PR into `main`.
- [ ] Portfolio owner separately authorizes **production deployment**.
- [ ] Capture current `main` SHA and Vercel production deployment ID before any release.
- [ ] Confirm the correct production canonical origin and any custom domain.
- [ ] Confirm that protected branch settings and Vercel production branch remain unchanged.
- [ ] Confirm staging/preview URL is not intentionally indexed. Client-side robots meta alone is not a server-level preview noindex guarantee.
- [ ] Check final role titles and dates, especially Enoverlab Feb–Aug 2025 vs reported six months and the meaning of SON IT/SEWIS.
- [ ] Verify referenced GitHub case-study file links and keep client/private code out.
- [ ] Verify no unconfigured contact form, placeholder social links, or fictional article publication dates.
- [ ] Replace the temporary social card strategy with a tested PNG or JPEG before announcing social preview support.

## Automated validation
- [ ] `npm ci`
- [ ] `npm run lint` (review remaining warnings)
- [ ] `npx tsc --project tsconfig.app.json --noEmit`
- [ ] `npm test`
- [ ] `npm run build`
- [ ] Scan generated output and configuration for secrets and hardcoded production-only values.

## Manual browser review — preview only
- [ ] Directly load /about, /projects, all four /projects/:slug, /experience, /education, /blog, /contact and a nonexistent route.
- [ ] Confirm refreshing a deep link returns the SPA HTML and the client renders the correct route, rather than a Vercel 404.
- [ ] Test mobile navigation: toggle, close after navigation, and Escape.
- [ ] Test dark/light toggling, persisted theme, keyboard-only navigation, visible focus and skip link.
- [ ] Test 320px mobile, tablet and desktop viewports in both themes, with no clipping or horizontal scroll.
- [ ] Test reduced-motion mode and 200% zoom.
- [ ] Check color contrast and screen-reader landmarks/labels with accessibility tools.
- [ ] Check canonical and robots state after navigation; ensure unknown pages are noindex.
- [ ] Run Lighthouse on a preview and record real scores; no scores have been claimed in this PR.
- [ ] Confirm sitemap URLs are correct and accessible only after the relevant deployment.
- [ ] Review bundle-size warning and assess whether route-level code splitting should precede launch.
- [ ] Evaluate prerendering/static generation for search-crawler reliability; this Vite SPA currently updates individual route metadata **client-side**.

## Rollback (only if separately authorized to deploy)
1. Record pre-release production commit and deployment URLs.
2. Promote/restore the known-good previous Vercel deployment if a release regression occurs.
3. Restore `main` through a reviewed revert PR rather than rewriting protected history.
4. Revalidate primary routes and contact methods after rollback.

**No merge or production deployment is authorized by this checklist.**
