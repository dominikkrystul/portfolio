<script setup lang="ts">
import type { EngineeringSkillGroup } from '../../types/skills'

defineProps<{
  skills: EngineeringSkillGroup[]
  process: string
}>()
</script>

<template>
  <section class="engineering-practice" aria-labelledby="engineering-title">
    <div class="engineering-practice__heading">
      <h2 id="engineering-title">Engineering practice</h2>
      <p>
        I use these habits to keep the work clear and help a team stay aligned.
      </p>
    </div>

    <div class="engineering-practice__groups">
      <div v-for="group in skills" :key="group.title">
        <h3>{{ group.title }}</h3>
        <ul :aria-label="group.title">
          <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>

    <div class="engineering-practice__process">
      <span>How I approach a project</span>
      <p>{{ process }}</p>
    </div>
  </section>
</template>

<style scoped>
.engineering-practice {
  display: grid;
  grid-template-columns: minmax(220px, 0.7fr) minmax(320px, 1.3fr);
  gap: 4rem;
  padding: 3rem 0;
}

.engineering-practice__heading {
  max-width: 460px;
}

.engineering-practice h2 {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
}

.engineering-practice__heading p {
  margin: 0.65rem 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.engineering-practice__groups {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

.engineering-practice__groups > div {
  flex: 1;
}

.engineering-practice__groups h3 {
  margin: 0 0 0.55rem;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
}

.engineering-practice__groups ul {
  display: grid;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.engineering-practice__groups li {
  color: var(--ink);
  font-size: 0.9rem;
  line-height: 1.6;
}

.engineering-practice__process {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: minmax(220px, 0.7fr) minmax(320px, 1.3fr);
  gap: 4rem;
  margin: 2.5rem 0 0;
  padding: 1.35rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.engineering-practice__process span {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.engineering-practice__process p {
  max-width: 680px;
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

@media (max-width: 700px) {
  .engineering-practice {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .engineering-practice__process {
    grid-column: auto;
    grid-template-columns: 1fr;
    gap: 0.6rem;
    margin-top: 0;
  }

  .engineering-practice__groups {
    display: grid;
    gap: 1.5rem;
  }
}
</style>
