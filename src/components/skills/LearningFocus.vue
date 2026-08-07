<script setup lang="ts">
import type { LearningFocus } from '../../types/skills'

defineProps<{
  focus: LearningFocus
}>()
</script>

<template>
  <section class="learning-focus" aria-labelledby="learning-focus-title">
    <header class="learning-focus__intro">
      <h2 id="learning-focus-title">{{ focus.title }}</h2>
      <p>{{ focus.description }}</p>
    </header>

    <div class="learning-focus__topics">
      <article
        v-for="topic in focus.topics"
        :key="topic.id"
        class="learning-topic"
      >
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.description }}</p>
      </article>
    </div>

    <aside class="exchange-focus" aria-labelledby="exchange-focus-title">
      <div class="exchange-focus__place">
        <h3 id="exchange-focus-title">{{ focus.exchange.title }}</h3>
        <p>{{ focus.exchange.institution }}</p>
        <p>{{ focus.exchange.dates }}</p>
      </div>
      <div class="exchange-focus__courses">
        <span>What I will study</span>
        <p>{{ focus.exchange.courses.join(' · ') }}</p>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.learning-focus {
  padding-top: 3rem;
}

.learning-focus__intro {
  display: grid;
  grid-template-columns: minmax(220px, 0.7fr) minmax(320px, 1.3fr);
  gap: 4rem;
}

.learning-focus h2 {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
}

.learning-focus__intro p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
}

.learning-focus__topics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.75rem 5rem;
  margin-top: 3.5rem;
}

.learning-topic {
  max-width: 30rem;
}

.learning-topic h3 {
  margin: 0;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.learning-topic p {
  margin: 0.55rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.exchange-focus {
  display: grid;
  grid-template-columns: minmax(220px, 0.7fr) minmax(320px, 1.3fr);
  gap: 4rem;
  margin-top: 4rem;
  padding: 2rem 2.25rem;
  background: color-mix(in srgb, var(--line) 24%, transparent);
}

.exchange-focus h3 {
  margin: 0;
  font-size: 1rem;
}

.exchange-focus p {
  margin: 0.3rem 0 0;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.45;
}

.exchange-focus__courses span {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.exchange-focus__courses p {
  margin-top: 0.5rem;
  color: var(--ink);
}

@media (max-width: 900px) {
  .learning-focus__topics {
    gap: 2.5rem 3rem;
  }
}

@media (max-width: 700px) {
  .learning-focus__intro,
  .exchange-focus {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .learning-focus__topics {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }

  .exchange-focus {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
    padding: 1.5rem;
  }
}
</style>
