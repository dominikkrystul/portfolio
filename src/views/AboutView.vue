<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { aboutContent } from '../data/about'
import PersonalGallery from '../components/about/PersonalGallery.vue'
</script>

<template>
  <main class="page about-page" aria-labelledby="about-title">
    <header class="page-heading about-heading">
      <div class="about-heading__intro">
        <h1 id="about-title">{{ aboutContent.intro.title }}</h1>
        <p>{{ aboutContent.intro.summary }}</p>
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

    <section class="about-section" aria-labelledby="approach-title">
      <h2 id="approach-title">{{ aboutContent.approach.title }}</h2>
      <div class="about-copy">
        <p
          v-for="paragraph in aboutContent.approach.paragraphs"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>

      <ol class="process-list" aria-label="My usual project process">
        <li v-for="step in aboutContent.approach.process" :key="step">
          {{ step }}
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

    <footer class="about-actions">
      <RouterLink class="text-link" to="/projects"
        >See my projects <span aria-hidden="true">→</span></RouterLink
      >
      <a
        class="secondary-link"
        href="https://github.com/dominikkrystul"
        target="_blank"
        rel="noreferrer"
      >
        Visit my GitHub <span aria-hidden="true">↗</span>
      </a>
    </footer>
  </main>
</template>
