<script setup lang="ts">
import {
  nextTick,
  onMounted,
  onUnmounted,
  shallowRef,
  useTemplateRef,
  watch,
} from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SiteFooter from '../components/layout/SiteFooter.vue'
import { activeTheme, toggleTheme } from '../theme'

const isMenuOpen = shallowRef(false)
const route = useRoute()
const menuToggle = useTemplateRef<HTMLButtonElement>('menuToggle')
const mainContent = useTemplateRef<HTMLElement>('mainContent')

function closeMenu() {
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

async function handleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !isMenuOpen.value) return

  closeMenu()
  await nextTick()
  menuToggle.value?.focus()
}

watch(
  () => route.fullPath,
  async () => {
    closeMenu()
    await nextTick()
    mainContent.value?.focus({ preventScroll: true })
  },
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
          ref="menuToggle"
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
          <RouterLink to="/skills" active-class="is-active">Skills</RouterLink>
          <RouterLink to="/about" active-class="is-active">About</RouterLink>
          <a
            class="site-nav__link"
            href="/Dominik_Krystul_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV <span aria-hidden="true">↗</span>
          </a>
          <button
            class="theme-switch"
            type="button"
            role="switch"
            aria-label="Dark mode"
            :aria-checked="activeTheme === 'dark'"
            @click="toggleTheme"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              />
            </svg>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8 8.5 8.5 0 1 0 20.2 15.5Z"
              />
            </svg>
          </button>
          <RouterLink class="site-nav__contact" to="/#contact">
            Contact <span aria-hidden="true">↗</span>
          </RouterLink>
        </nav>

        <RouterLink class="header-contact" to="/#contact">
          Contact <span aria-hidden="true">↗</span>
        </RouterLink>
      </div>
    </header>

    <main id="main-content" ref="mainContent" class="site-main" tabindex="-1">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
