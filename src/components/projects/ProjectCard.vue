<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AiTutorMascot from './AiTutorMascot.vue'
import type { Project } from '../../types/projects'

const props = defineProps<{
  project: Project
}>()

const statusLabel = props.project.status.replace('-', ' ')
</script>

<template>
  <article class="project-card">
    <div class="project-card__content">
      <p class="project-card__status">{{ statusLabel }}</p>
      <h2
        class="project-card__title"
        :class="{
          'project-card__title--with-robot': project.slug === 'ai-tutor',
        }"
      >
        <RouterLink :to="`/projects/${project.slug}`">
          <AiTutorMascot
            v-if="project.slug === 'ai-tutor'"
            class="project-card__mascot"
          />
          <span class="project-card__title-text">{{ project.title }}</span>
        </RouterLink>
      </h2>
      <p class="project-card__summary">{{ project.summary }}</p>
      <p class="project-card__technologies">
        {{ project.technologies.join(' · ') }}
      </p>
      <RouterLink
        class="project-card__action text-link"
        :to="`/projects/${project.slug}`"
      >
        Read project <span aria-hidden="true">↗</span>
      </RouterLink>
    </div>

    <div class="project-card__aside">
      <RouterLink
        v-if="project.image"
        class="project-card__image-wrap"
        :to="`/projects/${project.slug}`"
      >
        <img
          class="project-card__image"
          :src="project.image"
          :alt="`${project.title} preview`"
          loading="lazy"
          decoding="async"
        />
      </RouterLink>
      <div v-else class="project-card__links">
        <a
          v-if="project.links?.repository"
          class="project-card__external-link"
          :href="project.links.repository"
          target="_blank"
          rel="noreferrer"
        >
          Repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;
}

.project-card__status {
  margin: 0 0 0.8rem;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: capitalize;
}

.project-card__title {
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  letter-spacing: -0.03em;
}

.project-card__title--with-robot {
  min-height: clamp(4.5rem, 7vw, 5.75rem);
}

.project-card__title a {
  position: relative;
  display: inline-block;
  isolation: isolate;
  color: var(--ink);
}

.project-card__title a:hover {
  color: var(--accent);
}

.project-card__title-text {
  position: relative;
  z-index: 2;
}

.project-card__mascot {
  position: absolute;
  bottom: 0.1rem;
  left: clamp(3.7rem, 7vw, 5rem);
  z-index: 1;
  width: clamp(5.4rem, 8.5vw, 6.5rem);
  height: clamp(4rem, 6vw, 4.75rem);
  pointer-events: none;
  overflow: clip;
}

.project-card__summary {
  max-width: 520px;
  margin: 0.65rem 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.project-card__technologies {
  margin: 1.5rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.project-card__action {
  display: inline-block;
  margin-top: 2rem;
}

.project-card__aside {
  min-width: 0;
}

.project-card__image-wrap {
  display: block;
  width: min(100%, 34rem);
  margin-left: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--paper-deep);
}

.project-card__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms ease-out;
}

@media (hover: hover) {
  .project-card__image-wrap:hover .project-card__image,
  .project-card__image-wrap:focus-visible .project-card__image {
    transform: scale(1.025);
  }
}

.project-card__links {
  display: grid;
  justify-items: start;
  gap: 0.75rem;
}

.project-card__external-link {
  color: var(--muted);
  font-size: 0.82rem;
}

.project-card__external-link:hover {
  color: var(--accent);
}

@media (max-width: 700px) {
  .project-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card__aside {
    align-self: auto;
  }

  .project-card__image-wrap {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card__mascot {
    opacity: 0.72;
  }

  .project-card__image {
    transform: none;
  }
}
</style>
