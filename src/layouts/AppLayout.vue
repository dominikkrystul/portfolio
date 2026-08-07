<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <header class="site-header">
      <div class="site-header__inner">
        <RouterLink class="wordmark" to="/" aria-label="Dominik Krystul home">
          <span>DK</span>
          <span class="wordmark__name">Dominik Krystul</span>
        </RouterLink>

        <nav class="site-nav" aria-label="Primary navigation">
          <RouterLink
            to="/"
            active-class="is-active"
            exact-active-class="is-active"
            >Home</RouterLink
          >
          <RouterLink to="/projects" active-class="is-active"
            >Projects</RouterLink
          >
        </nav>

        <RouterLink class="header-contact" to="/projects"
          >View work <span aria-hidden="true">↗</span></RouterLink
        >
      </div>
    </header>

    <main id="main-content" class="site-main">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="site-footer__inner">
        <p>© {{ year }} Dominik Krystul</p>
        <p>Designed and built with Vue.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>
