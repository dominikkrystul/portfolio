<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import ProjectCaseStudy from '../components/projects/ProjectCaseStudy.vue'
import { getProjectBySlug } from '../data/projects'
import { updateSeoMetadata } from '../utils/seo'

const props = defineProps<{
  slug: string
}>()

const project = computed(() => getProjectBySlug(props.slug))

watchEffect(() => {
  const currentProject = project.value

  updateSeoMetadata({
    title: currentProject
      ? `${currentProject.title} — Dominik Krystul`
      : 'Project not found — Dominik Krystul',
    description:
      currentProject?.summary ??
      'The requested project is not in the portfolio data.',
    path: `/projects/${props.slug}`,
  })
})
</script>

<template>
  <div v-if="project" class="project-detail-page">
    <ProjectCaseStudy :project="project" />
  </div>
  <div v-else class="page page--compact">
    <header class="page-heading">
      <h1 id="project-not-found-title">Project not found</h1>
      <p>The requested project is not in the portfolio data.</p>
    </header>
    <RouterLink class="text-link" to="/projects">
      Back to projects <span aria-hidden="true">←</span>
    </RouterLink>
  </div>
</template>
