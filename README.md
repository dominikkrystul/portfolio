# Portfolio

Personal portfolio website built with Vue 3, TypeScript, and Vite.

## Installation

Use Node.js 22.12.0 or newer. With nvm, run `nvm use` from the repository root.

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Quality checks

```bash
npm run type-check
npm run lint
npm run format:check
npm test
npm run test:e2e
npm run audit:site
npm run test:ci
```

`test` starts Vitest Browser Mode in watch mode. `test:e2e` runs it once for CI.
`audit:site` enforces Lighthouse accessibility, performance, and SEO budgets.
`test:ci` runs the complete local equivalent of the GitHub Actions workflow.
Run `npm run format` to apply the shared Prettier formatting rules.
See `docs/quality-assurance.md` for the audit budgets and manual QA matrix.

Vitest Browser Mode runs the Vue components in Chromium, so interaction, CSS,
and reduced-motion assertions use a real browser instead of a simulated DOM.

## Project structure

- `docs/` — architecture, roadmap, design system, and decisions.
- `src/components/` — reusable UI grouped by responsibility.
- `src/layouts/` — page-level layout shells.
- `src/views/` — route-level pages.
- `src/data/` — portfolio content and static data.
- `src/router/` — route configuration.
- `src/types/` — shared TypeScript types.
- `src/assets/` — images and icons.
- `tests/` — Vitest Browser Mode coverage for public flows and regressions.

See `docs/architecture.md` for the fuller structure.
