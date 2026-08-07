<template>
  <main class="page home-page">
    <section class="intro" aria-labelledby="home-title">
      <p class="intro-kicker">Software Engineering student</p>
      <h1 id="home-title">I like understanding how software works.</h1>
      <p class="intro-summary">
        I’m Dominik Krystul. I’m studying Software Engineering and use this
        portfolio to keep track of the projects I build and the decisions I make
        along the way.
      </p>
      <div class="intro-actions">
        <RouterLink class="text-link" to="/projects">
          View projects <span aria-hidden="true">→</span>
        </RouterLink>
        <a class="secondary-link" href="#approach">How I work</a>
      </div>
    </section>

    <section id="approach" class="home-note" aria-labelledby="approach-title">
      <p class="section-label" id="approach-title">Study &amp; approach</p>
      <p>
        I start by making sure I understand the problem. Then I choose a
        structure I can explain, test, and improve as I learn more.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
