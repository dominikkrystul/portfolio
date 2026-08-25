# Architecture

This portfolio is a Vue 3 application built with TypeScript and Vite.

## Structure

- `src/layouts/` contains page-level shells.
- `src/components/` contains reusable UI grouped by responsibility.
- `src/views/` contains route-level pages.
- `src/router/` contains route definitions.
- `src/data/` contains portfolio content and static data.
- `src/types/` contains shared TypeScript types.
- `src/composables/` contains reusable Composition API logic.
- `src/assets/` contains imported images and icons.
- `tests/` contains browser-level regression tests for the public application.

## Current routes

- `/` composes the homepage, including the short About and study/approach sections.
- `/about` composes the full personal profile and working approach.
- `/projects` lists the portfolio projects.
- `/skills` presents technology groups, engineering practice, and current learning areas.

## Responsibilities and boundaries

- `src/main.ts` is the application entry point and mounts the root app.
- `src/App.vue` composes the application shell; it should not become a general
  data store or a collection of page-specific sections.
- `src/views/` owns route-level page composition. A view may combine layouts,
  components, composables, and data, but reusable UI should move out of it.
- `src/layouts/` owns page-level shells and structural regions such as shared
  navigation or footer placement.
- `src/components/` owns reusable presentation and interaction. Group
  components by feature or responsibility, not by technical implementation.
- `src/data/` owns typed, mostly static portfolio content. It must not import
  Vue components or layouts.
- `src/composables/` owns reusable Composition API state and behavior. A
  composable may depend on types and data, but should not render markup.
- `src/types/` owns shared domain types and should remain independent of UI.
- `src/assets/` owns imported visual assets; files that need stable public URLs
  belong in `public/` instead.
- `src/router/` owns route definitions and navigation configuration only.

## About and Skills boundaries

- `src/data/about.ts` is the source of truth for About copy used by both the homepage and About page.
- `src/data/skills.ts` is the source of truth for skill categories, engineering practice, and learning topics.
- `src/data/projects.ts` is the source of truth for project cards, the featured homepage selection, and project detail pages.
- `src/components/about/` contains reusable About sections; `AboutView.vue` composes the full page.
- `src/components/skills/` contains focused presentation components for category cards, engineering practice, and learning focus.
- `src/components/projects/ProjectCard.vue` renders project summaries from the shared project model and is reused by project listings and the homepage's featured work section.
- `src/components/home/FeaturedProjects.vue` composes the featured project selection and links visitors to the full project overview.
- `SkillsView.vue` composes the Skills page and should not own the skill content itself.
- Technology logos are imported from `src/assets/icons/skills/`; public, stable URLs are reserved for assets that need direct URL access.

## Project data model

Each project in `src/data/projects.ts` uses a stable `slug` as its identifier.

The optional `featured` flag controls whether a project appears in the homepage's
selected work section. The exported `featuredProjects` collection is derived from
the main project list, so adding or removing a featured project only requires a
data change.

Project detail pages read the same data model. Optional `role`, `challenge`,
`approach`, `highlights`, `learnings`, and `links.documentation` fields provide
contextual detail without introducing project-specific templates.
The required fields are `slug`, `title`, `summary`, `description`,
`technologies`, and `status`. The optional fields are `image` and `links`.
`links` may contain `live` and `repository` URLs.

`status` is one of `draft`, `in-progress`, or `complete`. A missing image or
link is valid and the views hide those elements rather than rendering broken
placeholders. Detail routes resolve projects by slug and show a not-found state
when no matching entry exists.

## Dependency direction

Keep dependencies moving from application composition toward reusable pieces:

```text
main/App -> views -> layouts/components -> composables -> data/types
                                      \-> assets
router -------------------------------> views
```

Lower-level modules must not import views or layouts. Components should receive
content through typed props rather than importing page-specific data directly
when the same component may be reused. Avoid introducing a global store until
state is demonstrably shared across routes.

## Testing

`tests/site.browser.test.ts` renders views and shared layout components with
their router dependencies in Vitest Browser Mode. These tests protect public
content, navigation, keyboard behaviour, image metadata, and motion
preferences. Lighthouse in `scripts/audit-site.mjs` separately measures the
production build's accessibility, performance, and SEO budgets.

## Naming conventions

- Vue components use `PascalCase.vue` names (`ProjectCard.vue`).
- Views and layouts use descriptive `PascalCase.vue` names (`HomeView.vue`,
  `DefaultLayout.vue`).
- Composables use `use` plus `camelCase` (`useProjects.ts`).
- Data modules use a descriptive `camelCase` name (`projects.ts`).
- Type-only modules use a descriptive `camelCase` name and export
  `PascalCase` types.
- Keep one primary responsibility per file and use stable domain names rather
  than generic names such as `utils` or `helpers`.

New features should first place route composition in a view, reusable UI in a
feature component folder, repeated content in data, and shared behavior in a
composable. New top-level folders require an architecture decision.
