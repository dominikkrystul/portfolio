<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '../components/projects/ProjectCard.vue'
import { projects } from '../data/projects'

const cvUrl = `${import.meta.env.BASE_URL}cv_EN.pdf`
</script>

<template>
  <div class="page projects-page">
    <header class="page-heading">
      <p class="section-label">Selected work</p>
      <h1 id="projects-title">Projects</h1>
      <p>
        Three projects that show my work across product interfaces and data and
        AI systems.
      </p>
    </header>

    <section class="project-list" aria-label="Portfolio projects">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </section>

    <section
      class="projects-practice"
      aria-labelledby="engineering-practice-title"
    >
      <h2 id="engineering-practice-title">Engineering practice</h2>
      <p>
        In the team projects, work moved from feature branches to dev or tst
        before review and a merge to main. Their case studies show the delivery
        evidence; StemWijs also documents my CI/CD configuration commits.
      </p>
      <div class="projects-practice__links">
        <RouterLink class="projects-practice__primary text-link" to="/skills">
          See skills <span aria-hidden="true">→</span>
        </RouterLink>
        <a class="projects-practice__secondary" :href="cvUrl">
          View CV <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-page .page-heading {
  padding-bottom: 0;
  border-bottom: 0;
}

.projects-page .project-list {
  display: grid;
  gap: clamp(3.5rem, 7vw, 5.5rem);
  margin-top: clamp(3rem, 6vw, 4.5rem);
}

.projects-practice {
  max-width: 600px;
  margin: clamp(3rem, 6vw, 4.5rem) 0 0;
}

.projects-practice h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2.5vw, 1.75rem);
  letter-spacing: -0.03em;
}

.projects-practice p {
  margin: 0.75rem 0 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.55;
}

.projects-practice__links {
  display: grid;
  justify-items: start;
  gap: 0.25rem;
  margin-top: 1.25rem;
}

.projects-practice__primary,
.projects-practice__secondary {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
}

.projects-practice__primary {
  margin-top: 0.25rem;
}

.projects-practice__secondary {
  color: var(--muted);
  font-size: 0.88rem;
}

.projects-practice__secondary:hover {
  color: var(--accent);
}
</style>
