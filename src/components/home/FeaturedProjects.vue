<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '../projects/ProjectCard.vue'
import type { Project } from '../../types/projects'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="featured-projects" aria-labelledby="featured-projects-title">
    <div class="featured-projects__header">
      <div>
        <p class="section-label">Selected work</p>
        <h2 id="featured-projects-title">Projects I am working on</h2>
      </div>
      <RouterLink class="text-link" to="/projects">
        View all projects <span aria-hidden="true">↗</span>
      </RouterLink>
    </div>

    <div v-if="projects.length" class="featured-projects__list">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
    <p v-else class="featured-projects__empty">
      I am currently preparing the next projects to share here.
    </p>
  </section>
</template>

<style scoped>
.featured-projects {
  margin-top: 5.5rem;
}

.featured-projects__header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.featured-projects h2 {
  margin: 0.45rem 0 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: -0.035em;
}

.featured-projects__list {
  margin-top: 3rem;
}

.featured-projects__empty {
  margin: 1.5rem 0 0;
  color: var(--muted);
}

@media (max-width: 600px) {
  .featured-projects__header {
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
