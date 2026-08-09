<script setup lang="ts">
import ProjectCard from '../components/projects/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <main class="page projects-page" aria-labelledby="projects-title">
    <header class="page-heading">
      <p class="section-label">Selected work</p>
      <h1 id="projects-title">Projects</h1>
      <p>A selection of software projects, with the decisions behind them.</p>
    </header>

    <section class="project-list" aria-label="Portfolio projects">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </section>
  </main>
</template>
