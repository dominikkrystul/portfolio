<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AiTutorRobot from './AiTutorRobot.vue'
import type { Project } from '../../types/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="case-study">
    <RouterLink class="case-study__back text-link" to="/projects">
      Back to projects <span aria-hidden="true">←</span>
    </RouterLink>

    <header class="case-study__header">
      <h1 id="project-title" class="case-study__title">{{ project.title }}</h1>
      <p class="case-study__summary">{{ project.summary }}</p>
    </header>

    <figure v-if="project.image" class="case-study__visual">
      <img
        :src="project.image"
        :alt="`${project.title} interface preview`"
        decoding="async"
      />
    </figure>

    <div class="case-study__overview">
      <section
        class="case-study__description"
        aria-labelledby="project-overview"
      >
        <h2 id="project-overview">Overview</h2>
        <p>{{ project.description }}</p>
      </section>

      <aside class="case-study__details" aria-label="Project details">
        <dl>
          <div v-if="project.role">
            <dt>Role</dt>
            <dd>{{ project.role }}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{{ project.status }}</dd>
          </div>
          <div>
            <dt>Built with</dt>
            <dd>{{ project.technologies.join(' · ') }}</dd>
          </div>
        </dl>
      </aside>
    </div>

    <section
      v-if="project.challenge || project.approach"
      class="case-study__story"
    >
      <div v-if="project.challenge" class="case-study__story-part">
        <h2>The problem</h2>
        <p>{{ project.challenge }}</p>
      </div>
      <div
        v-if="project.approach"
        class="case-study__story-part"
        :class="{
          'case-study__story-part--ai-tutor': project.slug === 'ai-tutor',
        }"
      >
        <h2>How we approached it</h2>
        <p>{{ project.approach }}</p>
        <AiTutorRobot
          v-if="project.slug === 'ai-tutor'"
          class="case-study__robot"
        />
      </div>
    </section>

    <section v-if="project.highlights?.length" class="case-study__highlights">
      <h2>Project includes</h2>
      <ul>
        <li v-for="highlight in project.highlights" :key="highlight">
          {{ highlight }}
        </li>
      </ul>
    </section>

    <section v-if="project.learnings?.length" class="case-study__learnings">
      <h2>What I learned</h2>
      <ul>
        <li v-for="learning in project.learnings" :key="learning">
          {{ learning }}
        </li>
      </ul>
    </section>

    <nav class="case-study__links" aria-label="Project links">
      <a
        v-if="project.links?.repository"
        class="text-link"
        :href="project.links.repository"
        target="_blank"
        rel="noreferrer"
      >
        View repository <span aria-hidden="true">↗</span>
      </a>
      <a
        v-if="project.links?.documentation"
        class="case-study__documentation"
        :href="project.links.documentation"
        target="_blank"
        rel="noreferrer"
      >
        Read documentation <span aria-hidden="true">↗</span>
      </a>
    </nav>
  </article>
</template>

<style scoped>
.case-study {
  padding: 5rem 0 7rem;
}

.case-study__back {
  display: inline-block;
}

.case-study__back span {
  margin-right: 0.25rem;
  margin-left: 0;
}

.case-study__header {
  margin-top: 3rem;
}

.case-study__title {
  max-width: 900px;
}

.case-study__summary {
  max-width: 640px;
  margin: 2rem 0 0;
  color: var(--muted);
  font-size: 1.3rem;
  line-height: 1.45;
}

.case-study__visual {
  margin: 4rem 0 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--paper-deep);
}

.case-study__visual img {
  display: block;
  width: 100%;
  max-height: 620px;
  object-fit: cover;
  object-position: top;
}

.case-study__overview {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.7fr);
  gap: 5rem;
  padding: 4rem 0;
  border-bottom: 1px solid var(--line);
}

.case-study__description h2,
.case-study__story h2,
.case-study__highlights h2,
.case-study__learnings h2 {
  margin: 0;
  font-size: 1.35rem;
  letter-spacing: -0.03em;
}

.case-study__description p {
  max-width: 650px;
  margin: 1rem 0 0;
  font-size: 1.15rem;
  line-height: 1.6;
}

.case-study__details dl,
.case-study__details dd {
  margin: 0;
}

.case-study__details div + div {
  margin-top: 1.4rem;
}

.case-study__details dt {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.case-study__details dd {
  margin-top: 0.35rem;
  line-height: 1.5;
}

.case-study__highlights {
  padding: 3.5rem 0;
  border-bottom: 1px solid var(--line);
}

.case-study__story {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5rem;
  padding: 3.5rem 0;
  border-bottom: 1px solid var(--line);
}

.case-study__story-part p {
  max-width: 540px;
  margin: 1rem 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.case-study__story-part--ai-tutor {
  position: relative;
  padding-right: 7.5rem;
}

.case-study__robot {
  position: absolute;
  right: 0;
  bottom: 0;
}

.case-study__highlights ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem 3rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.case-study__highlights li {
  color: var(--muted);
  line-height: 1.55;
}

.case-study__learnings {
  padding: 3.5rem 0;
  border-bottom: 1px solid var(--line);
}

.case-study__learnings ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem 3rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.case-study__learnings li {
  color: var(--muted);
  line-height: 1.55;
}

.case-study__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 2.25rem;
}

.case-study__documentation {
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 700;
}

.case-study__documentation:hover {
  color: var(--accent);
}

@media (max-width: 700px) {
  .case-study {
    padding: 3rem 0 5rem;
  }

  .case-study__header {
    margin-top: 2.5rem;
  }

  .case-study__summary {
    font-size: 1.1rem;
  }

  .case-study__visual {
    margin-top: 2.5rem;
  }

  .case-study__overview {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 0;
  }

  .case-study__highlights {
    padding: 3rem 0;
  }

  .case-study__story {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 0;
  }

  .case-study__story-part--ai-tutor {
    padding-right: 0;
  }

  .case-study__robot {
    position: static;
    margin: 1.5rem 0 0 auto;
  }

  .case-study__highlights ul,
  .case-study__learnings ul {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .case-study__learnings {
    padding: 3rem 0;
  }
}
</style>
