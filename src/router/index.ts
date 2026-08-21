import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      return {
        el: to.hash,
        top: 24,
        behavior: reducedMotion ? 'auto' : 'smooth',
      }
    }

    return { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Dominik Krystul — Software Engineering portfolio' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { title: 'Projects — Dominik Krystul' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About — Dominik Krystul' },
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
      meta: { title: 'Skills — Dominik Krystul' },
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'Page not found — Dominik Krystul' },
    },
  ],
})

router.afterEach((to) => {
  if (typeof to.meta.title === 'string') document.title = to.meta.title
})

export default router
