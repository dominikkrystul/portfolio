<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { aboutContent } from '../../data/about'
</script>

<template>
  <section class="about-preview" aria-labelledby="about-preview-title">
    <div>
      <h2 id="about-preview-title">{{ aboutContent.intro.title }}</h2>
    </div>
    <div class="about-preview__body">
      <p>{{ aboutContent.intro.summary }}</p>
      <RouterLink class="text-link" to="/about">
        Read more about me <span aria-hidden="true">↗</span>
      </RouterLink>
    </div>
  </section>
</template>
