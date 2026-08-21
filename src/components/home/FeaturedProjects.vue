<script setup lang="ts">
import ProjectCard from '../projects/ProjectCard.vue'
import AiTutorEvidenceStrip from './AiTutorEvidenceStrip.vue'
import type { Project } from '../../types/projects'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="featured-projects" aria-label="Flagship project">
    <div class="featured-projects__list">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
        :image="project.featuredImage"
        :image-alt="project.featuredImageAlt"
      />
    </div>
    <AiTutorEvidenceStrip />
    <RouterLink class="featured-projects__all text-link" to="/projects">
      View all projects <span aria-hidden="true">→</span>
    </RouterLink>
  </section>
</template>

<style scoped>
.featured-projects {
  margin-top: 4.5rem;
}

.featured-projects__list {
  margin-top: 0;
}

.featured-projects__all {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 2.5rem;
}
</style>
