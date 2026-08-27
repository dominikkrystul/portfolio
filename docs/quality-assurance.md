# Quality assurance

This document is the repeatable acceptance check for accessibility, responsive
layout, performance, and discoverability. Run it after user-facing changes.

## Automated checks

### Browser tests

Vitest Browser Mode with Playwright is the functional-test foundation. It runs
Vue components in Chromium, which makes navigation, keyboard interaction,
computed CSS, and `prefers-reduced-motion` testable in the same environment
visitors use. It is a better fit than a simulated DOM for this visual,
interaction-led portfolio, while keeping the Vite configuration and test API
in one toolchain.

The suite verifies the homepage, project overview, every case study, Skills,
About, not-found states, important links and images, the mobile menu, and
normal and reduced-motion animation behaviour.

```bash
npm test
npm run test:e2e
```

`npm test` watches during development; `npm run test:e2e` runs once for CI.

### Performance, accessibility, and SEO

Lighthouse remains a separate production-preview audit because browser tests
assert behaviour, not measurable performance or accessibility scores.

```bash
npm run audit:site
```

The command builds the production site, starts a local preview, and audits
Home, Projects, every project detail page, Skills, and About with Lighthouse's
390 × 844 mobile profile. It fails when any route misses a budget:

| Check                    |         Budget |
| ------------------------ | -------------: |
| Accessibility            |    at least 95 |
| Performance              |    at least 75 |
| SEO                      |    at least 95 |
| Largest Contentful Paint |  at most 2.7 s |
| Total Blocking Time      | at most 200 ms |
| Cumulative Layout Shift  |    at most 0.1 |

The ignored raw result is written to `.lighthouse/results.json`. Lighthouse is
a regression check, not a substitute for assistive-technology testing.
The 2.7 s LCP budget allows for normal variance in Lighthouse's single,
simulated CI measurement while retaining a good mobile threshold.

Run all automated checks locally before review:

```bash
npm run test:ci
```

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

Verified on 2026-08-25: all seven routes scored 100 for accessibility; the
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

| Route            | Performance |    LCP |  TBT |   CLS |
| ---------------- | ----------: | -----: | ---: | ----: |
| Home             |         100 | 1.60 s | 0 ms | 0.000 |
| Projects         |          97 | 2.48 s | 0 ms | 0.000 |
| AI Tutor detail  |          98 | 2.33 s | 0 ms | 0.000 |
| StemWijs detail  |         100 | 1.68 s | 0 ms | 0.000 |
| Portfolio detail |          99 | 1.82 s | 0 ms | 0.000 |
| Skills           |         100 | 1.68 s | 0 ms | 0.000 |
| About            |         100 | 1.27 s | 9 ms | 0.000 |

The home portrait was reduced from 1,129,195 bytes (PNG) to 55,428 bytes
(WebP). Reserving the initial viewport in `main` prevents the lazy-loaded route
from shifting the footer during startup.

## SEO files and metadata

Every route updates its title, description, canonical URL, Open Graph fields,
and X (Twitter) card fields. `public/robots.txt` links to `public/sitemap.xml`.

The configured origin is the production URL: `https://dominikkrystul.com`.
Update `siteUrl` in
`src/utils/seo.ts`, `index.html`, `public/robots.txt`, and
`public/sitemap.xml` together if the production domain changes.
