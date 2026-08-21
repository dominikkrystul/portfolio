<script setup lang="ts">
import EngineeringPractice from '../components/skills/EngineeringPractice.vue'
import LearningFocus from '../components/skills/LearningFocus.vue'
import SkillCategoryCard from '../components/skills/SkillCategoryCard.vue'
import {
  engineeringProcessSummary,
  learningFocus,
  skillCategories,
  supportingSkills,
} from '../data/skills'
</script>

<template>
  <div class="page skills-page">
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
        <a class="skills-heading__supporting-link" href="#engineering-title">
          Engineering practice
        </a>
        <a class="skills-heading__supporting-link" href="#learning-focus-title">
          Exchange learning
        </a>
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
      :skills="supportingSkills"
      :process="engineeringProcessSummary"
    />

    <LearningFocus :focus="learningFocus" />

    <a class="skills-back-to-top secondary-link" href="#skills-title">
      Back to top <span aria-hidden="true">↑</span>
    </a>
  </div>
</template>

<style scoped>
.skills-back-to-top {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 3rem;
}
</style>
