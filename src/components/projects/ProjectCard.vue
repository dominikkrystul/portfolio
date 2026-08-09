<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '../../types/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__content">
      <p class="project-card__status">{{ project.status }}</p>
      <h2>
        <RouterLink :to="`/projects/${project.slug}`">
          {{ project.title }}
        </RouterLink>
      </h2>
      <p class="project-card__summary">{{ project.summary }}</p>
      <p class="project-card__technologies">
        {{ project.technologies.join(' · ') }}
      </p>
    </div>

    <div class="project-card__aside">
      <div v-if="project.image" class="project-card__image-wrap">
        <img
          class="project-card__image"
          :src="project.image"
          :alt="`${project.title} preview`"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div v-else class="project-card__links">
        <RouterLink class="text-link" :to="`/projects/${project.slug}`">
          View project <span aria-hidden="true">↗</span>
        </RouterLink>
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
  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.6fr);
  gap: 3rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--line);
}

.project-card:first-child {
  border-top: 1px solid var(--line);
}

.project-card__status {
  margin: 0 0 0.65rem;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-card h2 {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
}

.project-card h2 a {
  color: var(--ink);
}

.project-card h2 a:hover {
  color: var(--accent);
}

.project-card__summary {
  max-width: 520px;
  margin: 0.65rem 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.project-card__technologies {
  margin: 1.25rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.project-card__aside {
  align-self: end;
}

.project-card__image-wrap {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--paper-deep);
}

.project-card__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    gap: 1.5rem;
  }

  .project-card__aside {
    align-self: auto;
  }
}
</style>
