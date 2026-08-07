<template>
  <main class="app-shell">
    <h1>Portfolio</h1>
    <p>Welcome to my portfolio!</p>
    <RouterLink to="/projects">View projects</RouterLink>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
