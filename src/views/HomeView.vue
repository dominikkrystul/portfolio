<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FeaturedProjects from '../components/home/FeaturedProjects.vue'
import HomePortraitPlaceholder from '../components/home/HomePortraitPlaceholder.vue'
import { featuredProjects } from '../data/projects'
import portraitIllustration from '../assets/images/home-portrait-filled.png'
</script>

<template>
  <div class="page home-page">
    <section class="intro" aria-labelledby="home-title">
      <div class="intro__content">
        <h1 id="home-title">“Learning constantly. Building thoughtfully.”</h1>
        <p class="intro-summary">
          I’m Dominik Krystul, a Software Engineering student looking for an
          internship. I build with Java, Spring Boot, Vue, and TypeScript.
        </p>
        <div class="intro-actions">
          <RouterLink
            class="text-link intro-primary-action"
            to="/projects/ai-tutor"
          >
            View AI Tutor case study <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink class="secondary-link" to="/#approach">
            See my approach <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
      <HomePortraitPlaceholder
        :src="portraitIllustration"
        alt="Pixel-art portrait of Dominik Krystul holding a laptop"
      />
    </section>

    <FeaturedProjects :projects="featuredProjects" />

    <section id="approach" class="home-note" aria-labelledby="approach-title">
      <p class="section-label" id="approach-title">How I work</p>
      <p>
        I start with reliable data: lesson material and metadata in AI Tutor,
        election data in StemWijs. Then I connect it to something a person can
        use.
      </p>
    </section>
  </div>
</template>
