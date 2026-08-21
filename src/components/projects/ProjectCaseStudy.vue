<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Project } from '../../types/projects'
import ProjectEvidenceGallery from './ProjectEvidenceGallery.vue'

const props = defineProps<{
  project: Project
}>()

const caseStudyContributions = computed(
  () => props.project.caseStudyContributions ?? [],
)

const statusLabel = computed(() => {
  if (props.project.slug === 'portfolio-website') {
    return 'Active personal project'
  }

  return {
    'in-progress': 'In progress',
    complete: 'Completed',
  }[props.project.status]
})

const projectContextLabel = computed(() =>
  props.project.slug === 'stemwijs'
    ? 'The team product also included:'
    : 'Project scope:',
)
</script>

<template>
  <article class="case-study">
    <RouterLink class="case-study__back text-link" to="/projects">
      Back to projects <span aria-hidden="true">←</span>
    </RouterLink>

    <div
      class="case-study__opening"
      :class="{
        'case-study__opening--portfolio': project.slug === 'portfolio-website',
      }"
    >
      <header class="case-study__header">
        <div class="case-study__header-copy">
          <h1 id="project-title" class="case-study__title">
            {{ project.title }}
          </h1>
          <p class="case-study__summary">{{ project.summary }}</p>
          <p v-if="project.caseStudyThesis" class="case-study__thesis">
            {{ project.caseStudyThesis }}
          </p>
        </div>
      </header>

      <figure
        v-if="project.image"
        class="case-study__visual"
        :class="{
          'case-study__visual--portfolio': project.slug === 'portfolio-website',
        }"
      >
        <div class="case-study__visual-media">
          <img
            :src="project.image"
            :alt="project.imageAlt ?? ''"
            :width="project.imageWidth"
            :height="project.imageHeight"
            loading="eager"
            decoding="async"
          />
        </div>
        <figcaption v-if="project.imageCaption && project.slug !== 'ai-tutor'">
          <strong v-if="project.imageCaptionLead">
            {{ project.imageCaptionLead }}
          </strong>
          <span v-if="project.imageCaptionLead"> </span>
          {{ project.imageCaption }}
        </figcaption>
        <a
          v-if="
            project.slug !== 'ai-tutor' && project.slug !== 'portfolio-website'
          "
          class="case-study__visual-open"
          :href="project.image"
          target="_blank"
          rel="noreferrer"
          :aria-label="`Open full-size ${project.title} project image`"
        >
          Open full-size image <span aria-hidden="true">↗</span>
        </a>
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
              <dd>
                {{ statusLabel }}
                <span v-if="project.statusNote" class="case-study__status-note">
                  {{ project.statusNote }}
                </span>
              </dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{{ project.technologies.join(' · ') }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>

    <section v-if="project.highlights?.length" class="case-study__context">
      <p>
        <strong>{{ projectContextLabel }}</strong>
        {{ project.includedSummary ?? project.highlights.join(' · ') }}
      </p>
    </section>

    <section
      v-if="caseStudyContributions.length"
      class="case-study__contributions"
    >
      <h2>My contribution</h2>
      <ul>
        <li v-for="contribution in caseStudyContributions" :key="contribution">
          {{ contribution }}
        </li>
      </ul>
    </section>

    <ProjectEvidenceGallery
      v-if="
        project.productEvidence?.length &&
        project.evidencePlacement === 'after-contribution'
      "
      :evidence="project.productEvidence"
      :heading="project.productEvidenceTitle"
      :variant="
        project.slug === 'portfolio-website' ? 'content-model' : 'default'
      "
    />

    <section
      v-if="project.challenge || project.approach"
      class="case-study__story"
      :class="{
        'case-study__story--portfolio': project.slug === 'portfolio-website',
      }"
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
        <h2>
          {{
            project.slug === 'portfolio-website'
              ? 'How I approached it'
              : 'How we approached it'
          }}
        </h2>
        <p>{{ project.approach }}</p>
      </div>
    </section>

    <ProjectEvidenceGallery
      v-if="
        project.productEvidence?.length &&
        project.evidencePlacement !== 'after-contribution'
      "
      :evidence="project.productEvidence"
      :heading="project.productEvidenceTitle"
      :variant="
        project.slug === 'portfolio-website' ? 'content-model' : 'default'
      "
    />

    <ProjectEvidenceGallery
      v-if="project.supportingEvidence?.length"
      :evidence="project.supportingEvidence"
      :heading="project.supportingEvidenceTitle"
    />

    <section
      v-if="!caseStudyContributions.length && project.contributions?.length"
      class="case-study__contributions"
    >
      <h2>My contribution</h2>
      <ul>
        <li v-for="contribution in project.contributions" :key="contribution">
          {{ contribution }}
        </li>
      </ul>
    </section>

    <section
      v-if="project.deliveryEvidence?.length"
      id="delivery"
      class="case-study__delivery"
      aria-labelledby="delivery-title"
    >
      <h2 id="delivery-title">Delivery workflow</h2>
      <p v-if="project.deliverySummary" class="case-study__delivery-summary">
        {{ project.deliverySummary }}
      </p>
      <div class="case-study__delivery-evidence">
        <figure
          v-for="evidence in project.deliveryEvidence"
          :key="evidence.image"
        >
          <div
            class="case-study__delivery-media"
            :style="{ aspectRatio: `${evidence.width} / ${evidence.height}` }"
          >
            <img
              :src="evidence.image"
              :alt="evidence.alt"
              :width="evidence.width"
              :height="evidence.height"
              loading="lazy"
            />
          </div>
          <figcaption>{{ evidence.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section
      v-if="project.learningReflection || project.learnings?.length"
      class="case-study__learnings"
      :class="{
        'case-study__learnings--portfolio':
          project.slug === 'portfolio-website',
      }"
    >
      <h2>What I learned</h2>
      <p v-if="project.learningReflection">
        {{ project.learningReflection }}
      </p>
      <ul v-else>
        <li v-for="learning in project.learnings" :key="learning">
          {{ learning }}
        </li>
      </ul>
    </section>

    <nav class="case-study__links" aria-label="Project links">
      <a
        v-if="project.links?.repository"
        class="text-link"
        :class="{
          'case-study__repository--primary':
            project.slug === 'portfolio-website',
          'case-study__repository--supporting':
            project.slug !== 'portfolio-website',
        }"
        :href="project.links.repository"
        target="_blank"
        rel="noreferrer"
      >
        View repository <span aria-hidden="true">↗</span>
      </a>
      <RouterLink
        v-if="project.slug === 'portfolio-website'"
        class="text-link case-study__skills--supporting"
        to="/skills"
      >
        See skills <span aria-hidden="true">→</span>
      </RouterLink>
      <a
        v-if="project.links?.documentation"
        class="case-study__documentation"
        :href="project.links.documentation"
        target="_blank"
        rel="noreferrer"
      >
        Read documentation <span aria-hidden="true">↗</span>
      </a>
      <RouterLink class="case-study__back-bottom" to="/projects">
        Back to projects <span aria-hidden="true">←</span>
      </RouterLink>
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

.case-study__opening {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 0.52fr);
  grid-template-areas:
    'header visual'
    'overview overview';
  column-gap: 4rem;
  align-items: start;
}

.case-study__header {
  grid-area: header;
}

.case-study__header-copy {
  min-width: 0;
}

.case-study__opening--portfolio {
  grid-template-areas:
    'header visual'
    'overview visual';
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

.case-study__thesis {
  max-width: 720px;
  margin: 1rem 0 0;
  color: var(--ink);
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.5;
}

.case-study__visual {
  grid-area: visual;
  width: 100%;
  max-width: 360px;
  margin: 3rem 0 0 auto;
  background: var(--paper-deep);
}

.case-study__visual-media img {
  display: block;
  width: 100%;
  height: auto;
}

.case-study__visual--portfolio .case-study__visual-media {
  aspect-ratio: 5 / 4;
  overflow: hidden;
}

.case-study__visual--portfolio .case-study__visual-media img {
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.case-study__visual figcaption {
  margin-top: 0.75rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

.case-study__visual figcaption strong {
  color: var(--ink);
}

.case-study__visual-open {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.5rem 0;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 700;
}

.case-study__overview {
  grid-area: overview;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.7fr);
  gap: 5rem;
  padding: 5rem 0 4rem;
}

.case-study__description h2,
.case-study__story h2,
.case-study__contributions h2,
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

.case-study__details {
  align-self: start;
  padding-left: 2rem;
  border-left: 1px solid var(--line);
}

.case-study__details div + div {
  margin-top: 1.4rem;
}

.case-study__details dt {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0;
}

.case-study__details dd {
  margin-top: 0.35rem;
  line-height: 1.5;
}

.case-study__status-note {
  display: block;
  margin-top: 0.25rem;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 400;
}

.case-study__context {
  max-width: 650px;
  padding: 1.25rem 0 2rem;
}

.case-study__contributions {
  padding: 4.5rem 0;
}

.case-study__story {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5rem;
  padding: 4.5rem 0;
}

.case-study__story--portfolio {
  padding: 1.5rem 0 1.25rem;
}

.case-study__story-part p {
  max-width: 540px;
  margin: 1rem 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.case-study__highlights ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem 3rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.case-study__context p,
.case-study__learnings p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.case-study__contributions ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem 3rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.case-study__contributions li {
  color: var(--muted);
  line-height: 1.55;
}

.case-study__learnings {
  max-width: 650px;
  padding: 1.5rem 0 0;
}

.case-study__learnings--portfolio {
  padding-top: 0.5rem;
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

.case-study__delivery {
  padding: 2.5rem 0 3rem;
}

.case-study__delivery h2 {
  margin: 0;
  font-size: 1.35rem;
  letter-spacing: -0.03em;
}

.case-study__delivery-summary {
  max-width: 620px;
  margin: 1rem 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.case-study__delivery-evidence {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.case-study__delivery-evidence figure {
  margin: 0;
}

.case-study__delivery-media {
  overflow: hidden;
  background: var(--paper-deep);
}

.case-study__delivery-evidence img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.case-study__delivery-evidence figcaption {
  margin-top: 0.75rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

.case-study__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 2.25rem;
}

.case-study__back-bottom {
  width: 100%;
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.case-study__back,
.case-study__links a {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0.125rem 0;
}

.case-study__documentation {
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 700;
}

.case-study__repository--primary {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 700;
}

.case-study__repository--supporting {
  color: var(--muted);
  font-size: 0.9rem;
}

.case-study__skills--supporting {
  color: var(--muted);
  font-size: 0.9rem;
}

@media (hover: hover) and (pointer: fine) {
  .case-study__repository--supporting:hover,
  .case-study__skills--supporting:hover,
  .case-study__documentation:hover {
    color: var(--accent);
  }
}

@media (pointer: coarse) {
  .case-study__back,
  .case-study__links a {
    min-height: 44px;
    padding: 0.5rem 0;
  }
}

@media (max-width: 700px) {
  .case-study {
    padding: 3rem 0 5rem;
  }

  .case-study__header {
    margin-top: 2.5rem;
  }

  .case-study__opening {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'visual'
      'overview';
  }

  .case-study__opening--portfolio {
    grid-template-areas:
      'header'
      'overview'
      'visual';
  }

  .case-study__summary {
    font-size: 1.1rem;
  }

  .case-study__thesis {
    font-size: 1rem;
  }

  .case-study__visual {
    max-width: 380px;
    margin: 0;
  }

  .case-study__back,
  .case-study__links a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.5rem 0;
  }

  .case-study__overview {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 0;
  }

  .case-study__details {
    padding-top: 2rem;
    padding-left: 0;
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .case-study__context {
    padding: 1rem 0 1.5rem;
  }

  .case-study__contributions {
    padding: 3.5rem 0;
  }

  .case-study__story {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3.5rem 0;
  }

  .case-study__story--portfolio {
    padding: 1.5rem 0 1.25rem;
  }

  .case-study__contributions ul,
  .case-study__learnings ul {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .case-study__learnings {
    padding: 1.5rem 0 0;
  }

  .case-study__learnings--portfolio {
    padding-top: 0.5rem;
  }

  .case-study__delivery {
    padding: 2rem 0 2.5rem;
  }

  .case-study__delivery-evidence {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
