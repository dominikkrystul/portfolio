<script setup lang="ts">
import { shallowRef } from 'vue'
import { RouterLink } from 'vue-router'
import AiTutorMascot from './AiTutorMascot.vue'
import type { Project } from '../../types/projects'

const props = defineProps<{
  project: Project
  image?: string
  imageAlt?: string
}>()

const imageSource = props.image ?? props.project.image
const imageAlt = props.imageAlt ?? props.project.imageAlt ?? ''
const imageFailed = shallowRef(false)
</script>

<template>
  <article class="project-card" :class="`project-card--${project.slug}`">
    <header class="project-card__intro">
      <h2
        class="project-card__title"
        :class="{
          'project-card__title--with-robot': project.slug === 'ai-tutor',
        }"
      >
        <AiTutorMascot
          v-if="project.slug === 'ai-tutor'"
          class="project-card__mascot"
        />
        <span class="project-card__title-text">{{ project.title }}</span>
      </h2>
      <p class="project-card__metadata">
        <span v-if="project.projectContext">{{ project.projectContext }}</span>
        <span v-if="project.projectContext && project.role" aria-hidden="true"
          >·</span
        >
        <span v-if="project.role">{{ project.role }}</span>
      </p>
    </header>

    <div class="project-card__aside">
      <template v-if="imageSource">
        <RouterLink
          class="project-card__image-wrap"
          :class="`project-card__image-wrap--${project.imageAspect ?? 'landscape'}`"
          :to="`/projects/${project.slug}`"
          :aria-label="`Read the ${project.title} case study`"
        >
          <picture v-if="!imageFailed">
            <source
              v-if="project.mobileImage"
              media="(max-width: 700px)"
              :srcset="project.mobileImage"
            />
            <img
              class="project-card__image"
              :src="imageSource"
              :alt="imageAlt"
              :width="project.imageWidth"
              :height="project.imageHeight"
              :loading="project.featured ? 'eager' : 'lazy'"
              decoding="async"
              @error="imageFailed = true"
            />
          </picture>
          <p
            v-else
            class="project-card__image-fallback"
            role="img"
            :aria-label="imageAlt"
          >
            Project screenshot unavailable.
          </p>
        </RouterLink>
        <p v-if="project.imageCaption" class="project-card__image-caption">
          <strong v-if="project.imageCaptionLead">
            <span class="project-card__image-caption--desktop">
              {{ project.imageCaptionLead }}
            </span>
            <span class="project-card__image-caption--mobile">
              {{ project.mobileImageCaptionLead ?? project.imageCaptionLead }}
            </span>
          </strong>
          <span class="project-card__image-caption--desktop">
            {{ project.imageCaption }}
          </span>
          <span class="project-card__image-caption--mobile">
            {{ project.mobileImageCaption ?? project.imageCaption }}
          </span>
        </p>
      </template>
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

    <div class="project-card__content">
      <p class="project-card__summary">{{ project.summary }}</p>
      <p
        v-if="project.overviewContribution ?? project.contributions?.[0]"
        class="project-card__contribution"
      >
        <span class="project-card__contribution-label">My contribution</span>
        {{ project.overviewContribution ?? project.contributions?.[0] }}
        <span v-if="project.proofPoint" class="project-card__proof-point">
          <strong>Evidence:</strong> {{ project.proofPoint }}
        </span>
      </p>
      <p class="project-card__technologies">
        {{ project.technologies.join(' · ') }}
      </p>
      <RouterLink
        class="project-card__action text-link"
        :to="`/projects/${project.slug}`"
      >
        Read case study <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  grid-template-areas:
    'intro aside'
    'content aside';
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

.project-card__intro {
  grid-area: intro;
}

.project-card__content {
  grid-area: content;
  margin-top: -1.5rem;
}

.project-card__title {
  margin: 0;
  position: relative;
  isolation: isolate;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  letter-spacing: -0.03em;
}

.project-card__title--with-robot {
  min-height: 0;
}

.project-card__title-text {
  position: relative;
  z-index: 2;
}

.project-card__mascot {
  position: absolute;
  top: 50%;
  left: clamp(6rem, 10vw, 8rem);
  z-index: 1;
  width: clamp(5.4rem, 8.5vw, 6.5rem);
  height: clamp(4rem, 6vw, 4.75rem);
  pointer-events: none;
  transform: translateY(-50%) rotate(11deg);
  overflow: clip;
}

.project-card__summary {
  max-width: 520px;
  margin: 0.65rem 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.project-card__metadata {
  margin: 0.5rem 0 0;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.5;
}

.project-card__metadata span + span {
  margin-left: 0.4rem;
}

.project-card__contribution {
  max-width: 520px;
  margin: 1rem 0 0;
  color: var(--ink);
  font-size: 0.95rem;
  line-height: 1.55;
}

.project-card__contribution-label {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0;
}

.project-card__proof-point {
  display: block;
  margin-top: 0.75rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.project-card__proof-point strong {
  color: var(--ink);
}

.project-card__technologies {
  margin: 1.25rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.project-card__action {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 2rem;
}

.project-card__aside {
  grid-area: aside;
  min-width: 0;
  align-self: center;
}

.project-card__image-wrap {
  display: block;
  width: min(100%, 34rem);
  margin-left: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--paper-deep);
}

.project-card__image-wrap--portrait {
  width: min(100%, 25rem);
  aspect-ratio: 4 / 5;
}

.project-card__image-wrap picture {
  display: block;
  width: 100%;
  height: 100%;
}

.project-card__image-wrap:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.project-card__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__image-fallback {
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0;
  place-items: center;
  padding: 1.5rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: center;
}

.project-card__image-caption {
  max-width: 34rem;
  margin: 0.85rem 0 0 auto;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.5;
}

.project-card__image-caption strong {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--ink);
  font-weight: 600;
}

.project-card__image-caption--mobile {
  display: none;
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

@media (hover: hover) and (pointer: fine) {
  .project-card__external-link:hover {
    color: var(--accent);
  }
}

@media (max-width: 700px) {
  .project-card {
    grid-template-columns: 1fr;
    grid-template-areas:
      'intro'
      'aside'
      'content';
    gap: 2rem;
  }

  .project-card__content {
    margin-top: 0;
  }

  .project-card__aside {
    align-self: auto;
  }

  .project-card__image-wrap {
    width: 100%;
  }

  .project-card__image-wrap--portrait {
    aspect-ratio: 16 / 10;
  }

  .project-card__image-caption {
    margin-left: 0;
  }

  .project-card__image-caption--desktop {
    display: none;
  }

  .project-card__image-caption--mobile {
    display: inline;
  }

  .project-card__action {
    margin-top: 1.25rem;
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
