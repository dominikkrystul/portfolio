<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
      <article
        v-for="project in projects"
        :key="project.slug"
        class="project-entry"
      >
        <div>
          <p class="project-entry__status">{{ project.status }}</p>
          <h2>{{ project.title }}</h2>
          <p>{{ project.summary }}</p>
        </div>
        <div class="project-entry__meta">
          <p>{{ project.technologies.join(' · ') }}</p>
          <RouterLink class="text-link" :to="`/projects/${project.slug}`">
            View project <span aria-hidden="true">↗</span>
          </RouterLink>
        </div>
      </article>
    </section>
  </main>
</template>
