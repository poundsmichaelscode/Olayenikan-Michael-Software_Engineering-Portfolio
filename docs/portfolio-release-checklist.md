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


## Live preview HTTP audit — opt in, no deployment
- [ ] Obtain the **exact branch-preview** `*.vercel.app` URL from the Vercel deployment details (the GitHub Vercel status link goes to a dashboard and is not itself the preview URL).
- [ ] Run the preview audit manually against that URL, using either `PREVIEW_URL=https://<branch-preview>.vercel.app node scripts/audit-vercel-preview.mjs` or the `workflow_dispatch` `preview_url` input in the **development-branch** version of the Portfolio validation workflow.
- [ ] The script intentionally rejects the canonical production hostname, asserts raw prerendered HTML for all 11 routes, and checks route titles, descriptions, canonical URLs, and non-production `noindex, nofollow`.
- [ ] Keep Vercel deployment protection enabled. A protected preview may return 401/403 to a non-authenticated HTTP auditor; record this as a verification blocker, not permission to make the deployment public.
- [ ] Test mobile/desktop screenshots, theme controls, network requests and any initial DOM remount in an authorized browser session; the HTTP audit does not replace that visual verification.
- [ ] Do not treat a GitHub “Vercel success” status as proof that the preview responds correctly to public HTTP requests, that every rewrite is served correctly, or that content was visually reviewed.

### Located branch preview (Vercel bot, PR #1)
The Vercel bot identified this preview address: `https://olayenikan-michael-sof-git-30e3f7-olayenikan-michael-s-projects.vercel.app` (deployment comment updated 5 November 2026). It may be protected or superseded by a newer deployment. The URL has **not** passed the live HTTP audit from ChatGPT because direct access was unavailable. Do not assume public reachability from a Vercel success status. Verify through Vercel's authenticated deployment view, or provide this URL to the opt-in Actions audit.

Visual evidence is generated by `tests/browser/visual-review.spec.cjs` and uploaded as the `portfolio-visual-review` artifact. Captured desktop/mobile and dark/light screens are still not equivalent to manual acceptance; inspect the screenshots before any merge.
