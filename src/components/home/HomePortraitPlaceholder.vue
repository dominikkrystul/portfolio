<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <figure class="portrait">
    <div class="portrait__frame">
      <img
        :src="src"
        :alt="alt"
        class="portrait__image"
        width="971"
        height="1619"
        decoding="async"
      />
    </div>
  </figure>
</template>

<style scoped>
.portrait {
  width: min(100%, 19rem);
  margin: 0 0 0 auto;
}

.portrait__frame {
  aspect-ratio: 4 / 5;
  display: grid;
  overflow: hidden;
  background: var(--paper-deep);
  border: 1px solid var(--line);
  clip-path: polygon(
    0 0,
    100% 0,
    100% 84%,
    94% 84%,
    94% 90%,
    88% 90%,
    88% 96%,
    82% 96%,
    82% 100%,
    0 100%
  );
}

.portrait__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 700px) {
  .portrait {
    width: min(12rem, 58vw);
    margin: 0;
  }
}
</style>
