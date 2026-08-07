<template>
  <main class="page" aria-labelledby="projects-title">
    <header class="page-heading">
      <p class="section-label">Selected work</p>
      <h1 id="projects-title">Projects</h1>
      <p>
        Case studies and experiments will live here as the portfolio takes
        shape.
      </p>
    </header>
    <RouterLink class="text-link" to="/"
      >Back home <span aria-hidden="true">↗</span></RouterLink
    >
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
