<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const year = new Date().getFullYear()
const isMenuOpen = shallowRef(false)
const route = useRoute()

function closeMenu() {
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

watch(
  () => route.fullPath,
  () => closeMenu(),
)

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <header class="site-header">
      <div class="site-header__inner">
        <RouterLink class="wordmark" to="/" aria-label="Dominik Krystul home">
          <span>DK</span>
          <span class="wordmark__name">Dominik Krystul</span>
        </RouterLink>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="primary-navigation"
          @click="toggleMenu"
        >
          <span>{{ isMenuOpen ? 'Close' : 'Menu' }}</span>
          <span class="menu-toggle__icon" aria-hidden="true">{{
            isMenuOpen ? '×' : '＋'
          }}</span>
        </button>

        <nav
          id="primary-navigation"
          class="site-nav"
          :class="{ 'is-open': isMenuOpen }"
          aria-label="Primary navigation"
        >
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

        <RouterLink class="header-contact" to="/projects">
          View work <span aria-hidden="true">↗</span>
        </RouterLink>
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
