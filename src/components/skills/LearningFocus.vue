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
  </section>
</template>

<style scoped>
.learning-focus {
  padding-top: 2.5rem;
}

.learning-focus__intro {
  max-width: 48rem;
}

.learning-focus h2 {
  margin: 0;
  font-size: 1.25rem;
  letter-spacing: -0.03em;
}

.learning-focus__intro p {
  max-width: 43rem;
  margin: 0.7rem 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.learning-focus__topics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem 3rem;
  margin-top: 2.25rem;
}

.learning-topic {
  max-width: 30rem;
}

.learning-topic h3 {
  margin: 0;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
}

.learning-topic p {
  margin: 0.55rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

@media (max-width: 900px) {
  .learning-focus__topics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.25rem 3rem;
  }
}

@media (max-width: 700px) {
  .learning-focus__topics {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
}
</style>
