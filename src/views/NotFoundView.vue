<template>
  <div class="page page--compact">
    <p class="section-label">404</p>
    <h1 id="not-found-title">Page not found</h1>
    <p>The page you requested does not exist.</p>
    <RouterLink class="text-link" to="/"
      >Back home <span aria-hidden="true">←</span></RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
