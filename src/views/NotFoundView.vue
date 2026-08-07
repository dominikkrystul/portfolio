<template>
  <main class="app-shell">
    <h1>Page not found</h1>
    <p>The page you requested does not exist.</p>
    <RouterLink to="/">Back home</RouterLink>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
