<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getProjectBySlug } from '../data/projects'

const props = defineProps<{
  slug: string
}>()

const project = computed(() => getProjectBySlug(props.slug))
</script>

<template>
  <main
    v-if="project"
    class="page project-detail-page"
    aria-labelledby="project-title"
  >
    <header class="page-heading">
      <p class="section-label">Project detail</p>
      <h1 id="project-title">{{ project.title }}</h1>
      <p>{{ project.summary }}</p>
    </header>
    <div class="project-detail__content">
      <p>{{ project.description }}</p>
      <p class="project-detail__technologies">
        Built with {{ project.technologies.join(', ') }}.
      </p>
      <a
        v-if="project.links?.repository"
        class="text-link"
        :href="project.links.repository"
        target="_blank"
        rel="noreferrer"
      >
        View repository <span aria-hidden="true">↗</span>
      </a>
    </div>
    <RouterLink class="text-link" to="/projects">
      Back to projects <span aria-hidden="true">↗</span>
    </RouterLink>
  </main>
  <main v-else class="page" aria-labelledby="project-not-found-title">
    <header class="page-heading">
      <p class="section-label">Project detail</p>
      <h1 id="project-not-found-title">Project not found</h1>
      <p>The requested project is not in the portfolio data.</p>
    </header>
    <RouterLink class="text-link" to="/projects">
      Back to projects <span aria-hidden="true">↗</span>
    </RouterLink>
  </main>
</template>
