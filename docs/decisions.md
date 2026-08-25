# Architecture decisions

This file records the decisions that shape the portfolio.

## Initial structure

- **Date:** 2026-08-06
- **Decision:** Organize the portfolio by views, layouts, reusable components, data, and shared types.
- **Context:** Keep the project straightforward to navigate as it grows.
- **Consequences:** New features fit an existing responsibility before a new top-level folder is introduced.

## Centralise page content

- **Date:** 2026-08-07
- **Decision:** Keep About and Skills content in typed modules under `src/data/`.
- **Context:** The same About content is used in the homepage preview and the full About page. Skills content is shown through several components on the Skills page.
- **Consequences:** Copy changes are made in one place. Views and components stay focused on composition and presentation.

## Treat skills as practical experience

- **Date:** 2026-08-07
- **Decision:** Present technologies alongside engineering practice and current areas of study, without ratings or proficiency percentages.
- **Context:** Dominik is a Software Engineering student and the portfolio should communicate how he works, not claim senior-level expertise.
- **Consequences:** The Skills page uses project experience, working habits, and learning direction as context for each technology group.

## Keep the visual language editorial

- **Date:** 2026-08-07
- **Decision:** Use lightly green paper tones, restrained borders, generous whitespace, and simple typography instead of dashboard-style cards or decorative effects.
- **Context:** The portfolio should feel personal and readable to recruiters.
- **Consequences:** Sections rely on hierarchy and spacing for structure. Decorative animation and repeated badges are avoided when they do not add meaning.

## Keep the project mascot native

- **Date:** 2026-08-21
- **Decision:** Render the AI Tutor mascot as inline SVG and animate it with CSS.
- **Context:** The mascot adds project-specific personality but does not need a 3D rendering stack.
- **Consequences:** The greeting remains lightweight, uses the existing palette, and respects reduced-motion preferences without runtime dependencies.

## Test Vue in a real browser

- **Date:** 2026-08-25
- **Decision:** Use Vitest Browser Mode with the Playwright provider for frontend regression tests, and retain Lighthouse for performance, accessibility, and SEO budgets.
- **Context:** The portfolio's important behaviour includes routed content, keyboard menu interaction, image rendering, CSS animation, and reduced-motion preferences. A simulated DOM would not reliably cover the browser-specific parts.
- **Consequences:** Tests share the Vite/Vue toolchain and run in Chromium in local development and CI. Playwright's Chromium runtime is installed before CI tests. Lighthouse remains separate because its scores are production-audit measurements, not functional assertions.
