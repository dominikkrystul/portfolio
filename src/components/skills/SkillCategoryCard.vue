<script setup lang="ts">
import type { SkillCategory } from '../../types/skills'

defineProps<{
  category: SkillCategory
}>()

function logoClass(name: string) {
  return `skill-logo--${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

function additionalTechnologies(category: SkillCategory) {
  const logoNames = new Set(category.logos.map((logo) => logo.name))

  return category.technologies.filter(
    (technology) => !logoNames.has(technology),
  )
}
</script>

<template>
  <article
    :id="category.id"
    class="skill-category"
    :aria-labelledby="`skill-${category.id}`"
  >
    <div class="skill-category__copy">
      <h2 :id="`skill-${category.id}`">{{ category.title }}</h2>
      <p class="skill-category__description">{{ category.description }}</p>
      <p class="skill-category__experience">
        Projects have included {{ category.experience.join(', ') }}.
      </p>
    </div>

    <div class="skill-category__tools">
      <div class="skill-category__logos" aria-label="Selected technologies">
        <figure v-for="logo in category.logos" :key="logo.name">
          <span
            class="skill-category__logo-frame"
            :class="logoClass(logo.name)"
          >
            <img :src="logo.src" :alt="logo.name" width="56" height="56" />
          </span>
          <figcaption>{{ logo.name }}</figcaption>
        </figure>
      </div>

      <div
        v-if="additionalTechnologies(category).length"
        class="skill-category__technology-notes"
      >
        <span>Also used</span>
        <p>{{ additionalTechnologies(category).join(' · ') }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.skill-category {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(360px, 1.25fr);
  gap: 4rem;
  align-items: center;
  padding: 2.75rem 0;
}

.skill-category:nth-child(even) .skill-category__copy {
  order: 2;
}

.skill-category h2 {
  margin: 0;
  font-size: clamp(1.7rem, 3vw, 2.25rem);
  letter-spacing: -0.045em;
}

.skill-category__description {
  max-width: 420px;
  margin: 1rem 0 0;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

.skill-category__experience {
  max-width: 440px;
  margin: 1.25rem 0 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

.skill-category__logos {
  display: flex;
  gap: 1.75rem;
  padding-bottom: 1.5rem;
}

.skill-category__logos figure {
  display: grid;
  min-width: 4rem;
  justify-items: center;
  gap: 0.7rem;
  margin: 0;
}

.skill-category__logo-frame {
  display: grid;
  width: 4rem;
  height: 4rem;
  place-items: center;
  overflow: hidden;
}

.skill-category__logo-frame {
  color: var(--ink);
}

.skill-category__logo-frame img {
  display: block;
  width: 3.5rem !important;
  max-width: 3.5rem !important;
  height: 3.5rem !important;
  max-height: 3.5rem !important;
  object-fit: contain;
}

.skill-logo--typescript img {
  filter: invert(41%) sepia(86%) saturate(1000%) hue-rotate(178deg)
    brightness(86%);
}

.skill-logo--javascript img {
  filter: sepia(1) saturate(7) hue-rotate(355deg) brightness(0.88);
}

.skill-logo--python img {
  filter: invert(42%) sepia(36%) saturate(1200%) hue-rotate(167deg)
    brightness(90%);
}

.skill-logo--vue-js img {
  filter: invert(61%) sepia(34%) saturate(700%) hue-rotate(101deg)
    brightness(91%);
}

.skill-logo--html5 img {
  filter: invert(37%) sepia(79%) saturate(1800%) hue-rotate(348deg)
    brightness(95%);
}

.skill-logo--css img {
  filter: invert(35%) sepia(55%) saturate(1100%) hue-rotate(164deg)
    brightness(94%);
}

.skill-logo--node-js img {
  filter: invert(53%) sepia(34%) saturate(800%) hue-rotate(65deg)
    brightness(89%);
}

.skill-logo--mysql img {
  filter: invert(42%) sepia(24%) saturate(1000%) hue-rotate(163deg)
    brightness(91%);
}

.skill-logo--docker img {
  filter: invert(49%) sepia(93%) saturate(1400%) hue-rotate(176deg)
    brightness(96%);
}

.skill-logo--ollama img {
  filter: invert(42%) sepia(8%) saturate(650%) hue-rotate(319deg)
    brightness(86%);
}

.skill-logo--qdrant img {
  filter: invert(34%) sepia(55%) saturate(1500%) hue-rotate(342deg)
    brightness(96%);
}

.skill-category__logos figcaption {
  color: var(--muted);
  font-size: 0.76rem;
}

.skill-category__technology-notes {
  margin-top: 1.25rem;
}

.skill-category__technology-notes span {
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.skill-category__technology-notes p {
  margin: 0.5rem 0 0;
  color: var(--ink);
  font-size: 0.9rem;
  line-height: 1.35;
}

@media (max-width: 700px) {
  .skill-category {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 0;
  }

  .skill-category:nth-child(even) .skill-category__copy {
    order: initial;
  }
}
</style>
