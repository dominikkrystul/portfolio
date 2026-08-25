import { createRouter, createWebHistory } from 'vue-router'
import { updateSeoMetadata } from '../utils/seo'

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
      meta: {
        title: 'Dominik Krystul — Software Engineering portfolio',
        description:
          'Software engineering portfolio of Dominik Krystul, featuring project case studies, technical skills, and contact details.',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Projects — Dominik Krystul',
        description:
          'Selected software engineering projects by Dominik Krystul, including AI Tutor, StemWijs, and this Vue portfolio.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About — Dominik Krystul',
        description:
          'About Dominik Krystul, a Software Engineering student seeking an internship and building practical software projects.',
      },
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
      meta: {
        title: 'Skills — Dominik Krystul',
        description:
          'Technical skills and engineering practices demonstrated by Dominik Krystul across frontend, backend, infrastructure, and AI projects.',
      },
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
      meta: {
        title: 'Page not found — Dominik Krystul',
        description: 'The requested portfolio page could not be found.',
      },
    },
  ],
})

router.afterEach((to) => {
  if (
    typeof to.meta.title === 'string' &&
    typeof to.meta.description === 'string'
  ) {
    updateSeoMetadata({
      title: to.meta.title,
      description: to.meta.description,
      path: to.path,
    })
  }
})

export default router
