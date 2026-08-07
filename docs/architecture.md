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
