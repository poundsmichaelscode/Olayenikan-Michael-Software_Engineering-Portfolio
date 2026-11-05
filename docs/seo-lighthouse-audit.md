# Lighthouse and SEO crawlability audit
Date: 5 November 2026
Scope: development branch only; local Vite production preview at http://127.0.0.1:4173.
Status: NOT a production launch approval.

## Observed Lighthouse measurements
These are one-run mobile-simulation lab samples on GitHub-hosted runners, not field data or production measurements.

| Page | Baseline performance | After route fallback improvement | Latest performance | Latest accessibility | Latest best practices | Latest SEO | Latest CLS |
|---|---:|---:|---:|---:|---:|---:|---:|
| Home | 100 | 100 | 81 | 100 | 100 | 66 | approximately 0 |
| Projects | 82 | 92 | 99 | 100 | 100 | 66 | approximately 0 |
| Contact | 93 | 97 | 99 | 100 | 100 | 66 | approximately 0 |

The homepage's latest performance outlier includes ~790 ms Total Blocking Time versus ~20 ms on the previous run. **Do not interpret the 81 result as a reproducible regression without 3–5 repeats on stable infrastructure.** LCP and FCP improved in the last run.

Project and Contact page layout shifts were improved:
- Projects: 0.294 initially, then 0.127 after route loading fallback fix, then approximately 0 after using a system body font.
- Contact: 0.124 initially, then 0.006 after loading fallback fix, then approximately 0.
- Lighthouse previously identified late loading of the Inter body font as a source of remaining Projects layout shift.

## SEO interpretation
- The local preview scores SEO 66 primarily because the app's runtime robots meta sets `noindex,nofollow` outside the production hostname. **This is intentional for a preview, not evidence that production is blocked or indexable.**
- The project uses Vite + React Router as a client-rendered SPA. HTML served without JavaScript is primarily the app shell, not full route-specific case-study HTML.
- Route-specific titles, descriptions and canonicals are currently applied in the browser by `RouteMetadata`; they are not guaranteed to appear in the server response to a no-JavaScript crawler.
- A sitemap and canonical link do not replace statically rendered or server-rendered route content.
- Preview non-indexing currently relies on client-side robots behavior; this is not a server-level safeguard. Enable deployment protection or environment-specific server headers before distributing publicly crawlable preview URLs.

## Recommended before launch
1. Assess prerendering / static generation for main pages and all four case studies. Vercel recommends framework-native prerendering for reliability and performance. Options include a carefully tested Vite-compatible SSG implementation or migration to a framework with built-in prerendering. **Neither has been implemented as part of this audit.**
2. After implementing SSG/SSR, verify each route with JavaScript disabled, inspect HTML response body, canonical and Open Graph metadata.
3. Confirm the canonical hostname with the owner, including whether a custom domain will replace the current Vercel domain.
4. Run Lighthouse repeatedly (prefer 3–5 runs) in mobile and desktop profiles and capture median scores. Review any Total Blocking Time outliers.
5. Perform manual keyboard, screen-reader, zoom and color-contrast checks; axe automated success does not establish complete WCAG conformance.
6. Review visual Vercel preview and protected preview indexing before any merge or production deployment.
7. Verify project repository evidence URLs and final employment dates / roles before production publication.

## CI evidence and artifact downloads
- Original reports: https://github.com/poundsmichaelscode/Olayenikan-Michael-Software_Engineering-Portfolio/actions/runs/42012818399
- After fallback improvement: https://github.com/poundsmichaelscode/Olayenikan-Michael-Software_Engineering-Portfolio/actions/runs/42013656535
- After font optimization: https://github.com/poundsmichaelscode/Olayenikan-Michael-Software_Engineering-Portfolio/actions/runs/42014383030

## External references
- Vercel prerendering guidance: https://vercel.com/kb/guide/how-can-i-prerender-my-application-on-vercel
- Vercel Vite SPA documentation: https://vercel.com/docs/frameworks/frontend/vite
- Lighthouse CI: https://github.com/GoogleChrome/lighthouse-ci

No merge to main or production deployment is authorized by this report.
