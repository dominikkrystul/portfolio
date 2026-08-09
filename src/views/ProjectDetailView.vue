<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ProjectCaseStudy from '../components/projects/ProjectCaseStudy.vue'
import { getProjectBySlug } from '../data/projects'

const props = defineProps<{
  slug: string
}>()

const project = computed(() => getProjectBySlug(props.slug))
</script>

<template>
  <main
    v-if="project"
    class="project-detail-page"
    aria-labelledby="project-title"
  >
    <ProjectCaseStudy :project="project" />
  </main>
  <main
    v-else
    class="page page--compact"
    aria-labelledby="project-not-found-title"
  >
    <header class="page-heading">
      <h1 id="project-not-found-title">Project not found</h1>
      <p>The requested project is not in the portfolio data.</p>
    </header>
    <RouterLink class="text-link" to="/projects">
      Back to projects <span aria-hidden="true">←</span>
    </RouterLink>
  </main>
</template>
