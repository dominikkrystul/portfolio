<script setup lang="ts">
import ProjectCard from '../components/projects/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <main class="page projects-page" aria-labelledby="projects-title">
    <header class="page-heading">
      <p class="section-label">Selected work</p>
      <h1 id="projects-title">Projects</h1>
      <p>A selection of software projects, with the decisions behind them.</p>
    </header>

    <section
      v-if="projects.length"
      class="project-list"
      aria-label="Portfolio projects"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </section>

    <p v-else class="projects-empty">
      I am preparing the first projects to share here.
    </p>
  </main>
</template>

<style scoped>
.projects-page .page-heading {
  padding-bottom: 0;
  border-bottom: 0;
}

.projects-page .project-list {
  display: grid;
  gap: clamp(4.5rem, 10vw, 8rem);
  margin-top: clamp(4rem, 9vw, 7rem);
}

.projects-empty {
  margin: 3rem 0 0;
  color: var(--muted);
}
</style>
