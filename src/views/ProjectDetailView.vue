<template>
  <main class="page" aria-labelledby="project-title">
    <header class="page-heading">
      <p class="section-label">Project detail</p>
      <h1 id="project-title">{{ props.slug }}</h1>
      <p>This project detail page is ready for portfolio content.</p>
    </header>
    <RouterLink class="text-link" to="/projects"
      >Back to projects <span aria-hidden="true">↗</span></RouterLink
    >
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
</script>
