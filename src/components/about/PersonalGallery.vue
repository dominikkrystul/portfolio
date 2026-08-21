<script setup lang="ts">
import { aboutContent } from '../../data/about'

const gallery = aboutContent.personal.gallery
</script>

<template>
  <div class="personal-gallery">
    <div class="personal-gallery__images" aria-label="Travel photos">
      <figure
        v-for="item in gallery"
        :key="item.label"
        class="personal-gallery__image"
        :class="`personal-gallery__image--${item.size}`"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          :width="item.width"
          :height="item.height"
          loading="lazy"
          decoding="async"
        />
        <figcaption>{{ item.label }}</figcaption>
      </figure>
    </div>

    <p class="interest-note">
      {{ aboutContent.personal.interestNote }}
    </p>
  </div>
</template>
