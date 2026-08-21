<script setup lang="ts">
defineProps<{
  skills: string[]
  process: string
}>()
</script>

<template>
  <section class="engineering-practice" aria-labelledby="engineering-title">
    <div class="engineering-practice__heading">
      <h2 id="engineering-title">Engineering practice</h2>
      <p>
        On
        <RouterLink
          class="engineering-practice__case-link"
          to="/projects/ai-tutor"
        >
          AI Tutor
        </RouterLink>
        and
        <RouterLink
          class="engineering-practice__case-link"
          to="/projects/stemwijs"
        >
          StemWijs </RouterLink
        >, I set up the Git workflow and CI/CD path used to move completed work
        safely towards deployment.
      </p>
    </div>

    <div class="engineering-practice__workflow" aria-label="Delivery workflow">
      <ol aria-label="Feature delivery path">
        <li>
          <strong>Feature branch</strong>
          <span>Build a focused change.</span>
        </li>
        <li>
          <strong>dev / tst</strong>
          <span>Integrate the work and run checks.</span>
        </li>
        <li>
          <strong>main</strong>
          <span>Merge passed work and deploy.</span>
        </li>
      </ol>
      <p>{{ process }}</p>
    </div>

    <div class="engineering-practice__groups">
      <div>
        <h3>Supporting practice</h3>
        <p aria-label="Supporting practice">
          <span v-for="skill in skills" :key="skill">{{ skill }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.engineering-practice {
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

.engineering-practice__case-link {
  display: inline-flex;
  min-height: 24px;
  align-items: center;
  color: var(--ink);
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentcolor 45%, transparent);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
  transition:
    color 160ms ease,
    text-decoration-color 160ms ease,
    transform 120ms ease-out;
}

.engineering-practice__case-link:focus-visible {
  color: var(--accent);
}

.engineering-practice__case-link:active {
  transform: scale(0.98);
  transform-origin: left center;
}

@media (hover: hover) and (pointer: fine) {
  .engineering-practice__case-link:hover {
    color: var(--accent);
    text-decoration-color: currentcolor;
  }
}

.engineering-practice__groups {
  margin-top: 1.5rem;
}

.engineering-practice__groups > div {
  display: flex;
  gap: 0.65rem;
  align-items: baseline;
}

.engineering-practice__groups h3 {
  margin: 0 0 0.55rem;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
}

.engineering-practice__groups p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.engineering-practice__groups p span {
  display: inline;
}

.engineering-practice__groups p span:not(:last-child)::after {
  content: ' · ';
}

.engineering-practice__workflow {
  margin-top: 2rem;
  padding: 0.25rem 0;
}

.engineering-practice__workflow ol {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.engineering-practice__workflow li {
  position: relative;
  display: grid;
  gap: 0.25rem;
}

.engineering-practice__workflow li + li {
  padding-left: 2rem;
}

.engineering-practice__workflow li:not(:last-child)::after {
  position: absolute;
  top: 0.1rem;
  right: -0.85rem;
  color: var(--accent);
  content: '→';
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1;
}

.engineering-practice__workflow strong {
  font-size: 0.98rem;
}

.engineering-practice__workflow li span,
.engineering-practice__workflow p {
  max-width: 680px;
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.engineering-practice__workflow p {
  margin-top: 1.25rem;
}

@media (max-width: 700px) {
  .engineering-practice__case-link {
    min-height: 44px;
  }

  .engineering-practice__workflow ol {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .engineering-practice__workflow li + li {
    padding: 1rem 0 0;
  }

  .engineering-practice__workflow li:not(:last-child)::after {
    top: auto;
    right: auto;
    bottom: -0.8rem;
    left: 0;
    content: '↓';
  }
}

@media (pointer: coarse) {
  .engineering-practice__case-link {
    min-height: 44px;
  }
}
</style>
