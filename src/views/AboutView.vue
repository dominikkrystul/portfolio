<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { aboutContent } from '../data/about'
import PersonalGallery from '../components/about/PersonalGallery.vue'
</script>

<template>
  <div class="page about-page">
    <header class="page-heading about-heading">
      <div class="about-heading__intro">
        <h1 id="about-title">{{ aboutContent.intro.title }}</h1>
        <p>{{ aboutContent.intro.summary }}</p>

        <section class="about-internship" aria-labelledby="internship-title">
          <p id="internship-title" class="about-internship__label">
            {{ aboutContent.intro.internship.label }}
          </p>
          <p class="about-internship__value">
            {{ aboutContent.intro.internship.value }}
          </p>
          <div class="about-internship__actions">
            <a
              class="text-link"
              href="/cv_EN.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View my CV <span aria-hidden="true">↗</span>
            </a>
            <RouterLink class="secondary-link" to="/#contact">
              Get in touch <span aria-hidden="true">↗</span>
            </RouterLink>
            <RouterLink class="secondary-link" to="/projects">
              See selected work <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </section>
      </div>

      <aside class="about-snapshot" aria-labelledby="snapshot-title">
        <h2 id="snapshot-title">{{ aboutContent.intro.snapshot.title }}</h2>
        <dl>
          <div
            v-for="item in aboutContent.intro.snapshot.items"
            :key="item.label"
          >
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </aside>
    </header>

    <section class="about-section" aria-labelledby="study-title">
      <h2 id="study-title">{{ aboutContent.study.title }}</h2>
      <div class="about-copy">
        <p v-for="paragraph in aboutContent.study.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section
      id="approach"
      class="about-section"
      aria-labelledby="approach-title"
    >
      <h2 id="approach-title">{{ aboutContent.approach.title }}</h2>

      <ol class="process-list" aria-label="How I work in projects">
        <li v-for="step in aboutContent.approach.process" :key="step.title">
          <strong>{{ step.title }}.</strong> {{ step.description }}
          <RouterLink class="process-list__link" :to="step.link.to">
            {{ step.link.label }} <span aria-hidden="true">→</span>
          </RouterLink>
        </li>
      </ol>
    </section>

    <section class="about-section" aria-labelledby="personal-title">
      <div class="about-personal__text">
        <h2 id="personal-title">{{ aboutContent.personal.title }}</h2>
        <div class="about-copy">
          <p>{{ aboutContent.personal.introduction }}</p>
          <p
            v-for="paragraph in aboutContent.personal.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
      <PersonalGallery />
    </section>
  </div>
</template>
