<template>
  <main class="app-shell">
    <h1>Project: {{ props.slug }}</h1>
    <p>This project detail page is ready for portfolio content.</p>
    <RouterLink to="/projects">Back to projects</RouterLink>
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
