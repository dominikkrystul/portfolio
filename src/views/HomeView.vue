<template>
  <main class="page home-page">
    <section class="intro" aria-labelledby="home-title">
      <p class="intro-kicker">Software engineer · Netherlands</p>
      <h1 id="home-title">
        Building thoughtful digital products with a clear point of view.
      </h1>
      <p class="intro-summary">
        I’m Dominik Krystul. This portfolio is a working record of how I
        approach product thinking, frontend craft, and maintainable software.
      </p>
      <RouterLink class="text-link" to="/projects"
        >Explore selected work <span aria-hidden="true">→</span></RouterLink
      >
    </section>

    <section class="home-note" aria-labelledby="approach-title">
      <p class="section-label" id="approach-title">How I work</p>
      <p>
        Clear structure first. Useful details second. Every interface should
        make the next decision easier.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
