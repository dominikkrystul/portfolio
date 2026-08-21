<script setup lang="ts">
import { useId } from 'vue'
import type { ProjectEvidence } from '../../types/projects'

const evidenceHeadingId = useId()

withDefaults(
  defineProps<{
    evidence: ProjectEvidence[]
    heading?: string
    variant?: 'default' | 'content-model'
  }>(),
  {
    heading: 'Evidence from the product',
    variant: 'default',
  },
)
</script>

<template>
  <section
    class="project-evidence"
    :class="{
      'project-evidence--content-model': variant === 'content-model',
    }"
    :aria-labelledby="evidenceHeadingId"
  >
    <h2 :id="evidenceHeadingId">{{ heading }}</h2>
    <ol class="project-evidence__gallery">
      <li
        v-for="item in evidence"
        :key="item.image"
        class="project-evidence__item"
        :class="{
          'project-evidence__item--featured': item.featured,
          'project-evidence__item--supporting': !item.featured,
        }"
      >
        <figure>
          <p v-if="item.label" class="project-evidence__label">
            {{ item.label }}
          </p>
          <div
            class="project-evidence__media"
            :class="{
              'project-evidence__media--has-mobile-image': item.mobileImage,
            }"
            :style="{
              aspectRatio: `${item.width} / ${item.height}`,
              '--mobile-aspect-ratio': item.mobileImage
                ? `${item.mobileWidth} / ${item.mobileHeight}`
                : undefined,
            }"
          >
            <picture>
              <source
                v-if="item.mobileImage"
                media="(max-width: 700px)"
                :srcset="item.mobileImage"
              />
              <img
                :src="item.image"
                :alt="item.alt"
                :width="item.width"
                :height="item.height"
                loading="lazy"
              />
            </picture>
          </div>
          <figcaption>{{ item.caption }}</figcaption>
          <a
            class="project-evidence__open-image"
            :class="{
              'project-evidence__open-image--desktop':
                item.showDesktopOpenImage,
            }"
            :href="item.image"
            target="_blank"
            rel="noreferrer"
            :aria-label="`Open full-size ${item.label?.toLowerCase() ?? 'evidence'} image`"
          >
            Open full-size image <span aria-hidden="true">↗</span>
          </a>
        </figure>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.project-evidence {
  padding: 4rem 0;
}

.project-evidence h2 {
  margin: 0;
  font-size: 1.35rem;
  letter-spacing: -0.03em;
}

.project-evidence__gallery {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3rem;
  margin-top: 1.5rem;
  padding: 0;
  list-style: none;
}

.project-evidence__item {
  align-self: start;
}

.project-evidence__item figure {
  margin: 0;
}

.project-evidence__item--supporting {
  max-width: 915px;
}

.project-evidence__item--featured {
  padding-top: 1.5rem;
}

.project-evidence__media {
  overflow: hidden;
  background: var(--paper-deep);
}

.project-evidence__media picture {
  display: block;
  width: 100%;
  height: 100%;
}

.project-evidence__item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-evidence__label {
  margin: 0 0 0.6rem;
  color: var(--ink);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.project-evidence__item figcaption {
  margin-top: 0.75rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

.project-evidence__open-image {
  display: none;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 700;
}

.project-evidence__open-image--desktop {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 0.25rem;
  padding: 0.5rem 0;
}

.project-evidence__item--featured .project-evidence__label {
  font-size: 1rem;
}

.project-evidence__item--featured figcaption {
  max-width: 720px;
  color: var(--ink);
  font-size: 1rem;
}

.project-evidence--content-model .project-evidence__item {
  max-width: 980px;
}

.project-evidence--content-model {
  padding-bottom: 0.75rem;
}

.project-evidence--content-model .project-evidence__item figcaption {
  max-width: 720px;
}

@media (min-width: 701px) {
  .project-evidence--content-model .project-evidence__gallery {
    grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.65fr);
    align-items: start;
    gap: 2.5rem;
  }

  .project-evidence--content-model .project-evidence__item {
    max-width: none;
  }

  .project-evidence--content-model
    .project-evidence__item
    + .project-evidence__item {
    padding-top: 2rem;
  }

  .project-evidence--content-model
    .project-evidence__item
    + .project-evidence__item
    figcaption {
    max-width: 32ch;
  }
}

@media (max-width: 700px) {
  .project-evidence {
    padding: 3rem 0;
  }

  .project-evidence__gallery {
    gap: 2.5rem;
  }

  .project-evidence__item--featured {
    padding-top: 0.5rem;
  }

  .project-evidence--content-model .project-evidence__media--has-mobile-image {
    aspect-ratio: var(--mobile-aspect-ratio) !important;
  }

  .project-evidence--content-model {
    padding-bottom: 0.75rem;
  }

  .project-evidence__open-image {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-top: 0.25rem;
    padding: 0.5rem 0;
  }
}
</style>
