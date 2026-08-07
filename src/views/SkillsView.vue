<script setup lang="ts">
import EngineeringPractice from '../components/skills/EngineeringPractice.vue'
import LearningFocus from '../components/skills/LearningFocus.vue'
import SkillCategoryCard from '../components/skills/SkillCategoryCard.vue'
import {
  engineeringProcessSummary,
  engineeringSkills,
  learningFocus,
  skillCategories,
} from '../data/skills'
</script>

<template>
  <main class="page skills-page" aria-labelledby="skills-title">
    <header class="page-heading skills-heading">
      <div class="skills-heading__intro">
        <h1 id="skills-title">Skills</h1>
        <p>The tools I use and the way I approach software projects.</p>
      </div>

      <nav class="skills-heading__contents" aria-label="On this page">
        <span>On this page</span>
        <a
          v-for="category in skillCategories"
          :key="category.id"
          :href="`#${category.id}`"
        >
          {{ category.title }}
        </a>
        <a href="#engineering-title">Engineering practice</a>
        <a href="#learning-focus-title">What's next</a>
      </nav>
    </header>

    <section class="skills-categories" aria-label="Skill categories">
      <SkillCategoryCard
        v-for="category in skillCategories"
        :key="category.id"
        :category="category"
      />
    </section>

    <EngineeringPractice
      :skills="engineeringSkills"
      :process="engineeringProcessSummary"
    />

    <LearningFocus :focus="learningFocus" />
  </main>
</template>
