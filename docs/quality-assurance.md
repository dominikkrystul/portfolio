# Quality assurance

This document is the repeatable acceptance check for accessibility, responsive
layout, performance, and discoverability. Run it after user-facing changes.

## Automated site audit

```bash
npm run audit:site
```

The command builds the production site, starts a local preview, and audits
Home, Projects, the AI Tutor detail page, Skills, and About with Lighthouse's
390 × 844 mobile profile. It fails when any route misses a budget:

| Check                    |         Budget |
| ------------------------ | -------------: |
| Accessibility            |    at least 95 |
| Performance              |    at least 75 |
| SEO                      |    at least 95 |
| Largest Contentful Paint |  at most 2.5 s |
| Total Blocking Time      | at most 200 ms |
| Cumulative Layout Shift  |    at most 0.1 |

The ignored raw result is written to `.lighthouse/results.json`. Lighthouse is
a regression check, not a substitute for assistive-technology testing.

## Accessibility check

In addition to `npm run audit:site`, manually check each route with only the
keyboard:

1. Press Tab once and confirm **Skip to content** appears and moves focus to
   `main` when activated.
2. Tab through navigation, page actions, cards, and footer links. Confirm the
   focus indicator is visible and the order follows the page.
3. At 390 px, open the menu with Enter or Space, close it with Escape, and
   confirm focus returns to the menu button.
4. Confirm every page has one `main` landmark and one `h1`, images have useful
   alternative text, and content remains usable at 200% zoom.
5. Enable reduced motion and confirm essential content remains available.

Verified on 2026-08-21: all five routes scored 100 for accessibility; the
mobile menu exposed `aria-expanded`, opened its labelled navigation, closed
with Escape, and produced no console warnings or errors.

## Responsive QA matrix

Pass criteria: no horizontal overflow, visible main content, exactly one
`main` and one `h1`, the mobile menu is present at 390 px and replaced by the
desktop navigation from 768 px, and no console warnings or errors occur.

| Route           | 390 × 844 | 768 × 844 | 1280 × 844 |
| --------------- | --------- | --------- | ---------- |
| Home            | Pass      | Pass      | Pass       |
| Projects        | Pass      | Pass      | Pass       |
| AI Tutor detail | Pass      | Pass      | Pass       |
| Skills          | Pass      | Pass      | Pass       |
| About           | Pass      | Pass      | Pass       |

Matrix last executed in the local browser on 2026-08-21.

## Performance baseline

Lighthouse 13.4.1, simulated mobile throttling, measured on 2026-08-21:

| Route           | Performance |    LCP |  TBT |   CLS |
| --------------- | ----------: | -----: | ---: | ----: |
| Home            |         100 | 1.60 s | 0 ms | 0.000 |
| Projects        |          97 | 2.48 s | 0 ms | 0.000 |
| AI Tutor detail |          98 | 2.33 s | 0 ms | 0.000 |
| Skills          |         100 | 1.68 s | 0 ms | 0.000 |
| About           |         100 | 1.27 s | 9 ms | 0.000 |

The home portrait was reduced from 1,129,195 bytes (PNG) to 55,428 bytes
(WebP). Reserving the initial viewport in `main` prevents the lazy-loaded route
from shifting the footer during startup.

## SEO files and metadata

Every route updates its title, description, canonical URL, Open Graph fields,
and X (Twitter) card fields. `public/robots.txt` links to `public/sitemap.xml`.

The configured origin is the planned GitHub Pages URL:
`https://dominikkrystul.github.io/portfolio`. Update `siteUrl` in
`src/utils/seo.ts`, `index.html`, `public/robots.txt`, and
`public/sitemap.xml` together if the production domain changes.
