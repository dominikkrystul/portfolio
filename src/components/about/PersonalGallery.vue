<script setup lang="ts">
import { aboutContent } from '../../data/about'

const gallery = aboutContent.personal.gallery
const destination = aboutContent.personal.destination
</script>

<template>
  <div class="personal-gallery">
    <div class="personal-gallery__images" aria-label="Travel photos">
      <div
        v-for="item in gallery"
        :key="item.label"
        class="interest-placeholder"
        :class="`interest-placeholder--${item.size}`"
        :style="item.src ? { backgroundImage: `url(${item.src})` } : undefined"
        role="img"
        :aria-label="`${item.label} travel photo`"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>

    <div class="interest-notes" aria-label="Personal interests">
      <article
        v-for="interest in aboutContent.personal.interests"
        :key="interest.label"
      >
        <h3>{{ interest.label }}</h3>
        <p>{{ interest.description }}</p>
      </article>
    </div>

    <aside class="destination-card" aria-labelledby="destination-title">
      <h3 id="destination-title">{{ destination.title }}</h3>
      <div class="destination-card__route">
        <span>{{ destination.from }}</span>
        <span class="destination-card__arrow" aria-hidden="true">↓</span>
        <span>{{ destination.to }}</span>
      </div>
      <p>{{ destination.detail }}</p>
      <p>{{ destination.dates }}</p>
    </aside>
  </div>
</template>
