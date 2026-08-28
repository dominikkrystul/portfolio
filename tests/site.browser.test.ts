import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, test } from 'vitest'
import { commands, userEvent } from 'vitest/browser'
import { render } from 'vitest-browser-vue'
import AppLayout from '../src/layouts/AppLayout.vue'
import ProjectCard from '../src/components/projects/ProjectCard.vue'
import AboutView from '../src/views/AboutView.vue'
import HomeView from '../src/views/HomeView.vue'
import NotFoundView from '../src/views/NotFoundView.vue'
import ProjectDetailView from '../src/views/ProjectDetailView.vue'
import ProjectsView from '../src/views/ProjectsView.vue'
import SkillsView from '../src/views/SkillsView.vue'
import { aboutContent } from '../src/data/about'
import { projects } from '../src/data/projects'
import { skillCategories } from '../src/data/skills'
import '../src/style.css'

const projectTitles = ['AI Tutor', 'StemWijs', 'Portfolio website']
const browserCommands = commands as typeof commands & {
  setReducedMotion(value: 'reduce' | 'no-preference'): Promise<void>
}

function expectAccessibleImages(container: HTMLElement) {
  const images = Array.from(container.querySelectorAll('img'))

  expect(images.length).toBeGreaterThan(0)
  expect(
    images.every(
      (image) => image.src && image.alt && image.width > 0 && image.height > 0,
    ),
  ).toBe(true)
}

async function createTestRouter(path = '/') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/:pathMatch(.*)*',
        component: { template: '<div />' },
      },
    ],
  })

  await router.push(path)
  await router.isReady()
  return router
}

describe('portfolio frontend', () => {
  test('renders the homepage introduction, primary action, and portrait', async () => {
    const router = await createTestRouter()
    const screen = await render(HomeView, { global: { plugins: [router] } })

    await expect
      .element(
        screen.getByRole('heading', {
          level: 1,
          name: '“Learning constantly. Building thoughtfully.”',
        }),
      )
      .toBeVisible()
    await expect
      .element(screen.getByRole('link', { name: /View AI Tutor case study/i }))
      .toHaveAttribute('href', '/projects/ai-tutor')
    expectAccessibleImages(screen.container)
  })

  test('shows every project with a working case-study link', async () => {
    const router = await createTestRouter('/projects')
    const screen = await render(ProjectsView, { global: { plugins: [router] } })

    const titles = Array.from(
      screen.container.querySelectorAll('.project-card__title-text'),
      (element) => element.textContent?.trim(),
    )
    const links = Array.from(
      screen.container.querySelectorAll<HTMLAnchorElement>(
        '.project-card__action',
      ),
      (element) => element.getAttribute('href'),
    )

    expect(titles).toEqual(projectTitles)
    expect(links).toEqual([
      '/projects/ai-tutor',
      '/projects/stemwijs',
      '/projects/portfolio-website',
    ])
    expectAccessibleImages(screen.container)
  })

  test.each(projects)('renders the $title case study', async (project) => {
    const router = await createTestRouter(`/projects/${project.slug}`)
    const screen = await render(ProjectDetailView, {
      props: { slug: project.slug },
      global: { plugins: [router] },
    })

    await expect
      .element(screen.getByRole('heading', { level: 1, name: project.title }))
      .toBeVisible()
  })

  test('runs animation normally and disables it for reduced motion', async () => {
    const router = await createTestRouter('/projects')
    const screen = await render(ProjectCard, {
      props: { project: projects[0] },
      global: { plugins: [router] },
    })
    const robot = screen.container.querySelector('.ai-tutor-mascot__robot')

    if (!robot) throw new Error('AI Tutor robot was not rendered')
    await browserCommands.setReducedMotion('no-preference')
    expect(getComputedStyle(robot).animationName).toContain('robot-arrive')

    await browserCommands.setReducedMotion('reduce')
    expect(getComputedStyle(robot).animationName).toBe('none')
    await browserCommands.setReducedMotion('no-preference')
  })

  test('renders every skills category and its project evidence', async () => {
    const router = await createTestRouter('/skills')
    const screen = await render(SkillsView, { global: { plugins: [router] } })

    for (const category of skillCategories) {
      await expect
        .element(
          screen.getByRole('heading', { level: 2, name: category.title }),
        )
        .toBeVisible()
    }
    for (const project of projects.slice(0, 2)) {
      await expect
        .element(screen.getByRole('link', { name: project.title }).first())
        .toHaveAttribute('href', `/projects/${project.slug}`)
    }
    expectAccessibleImages(screen.container)
  })

  test('renders the about content, contact actions, and gallery', async () => {
    const router = await createTestRouter('/about')
    const screen = await render(AboutView, { global: { plugins: [router] } })

    await expect
      .element(screen.getByRole('heading', { level: 1, name: 'About' }))
      .toBeVisible()
    await expect
      .element(screen.getByText(aboutContent.intro.internship.value))
      .toBeVisible()
    expect(screen.container.querySelector('a[href="/cv_EN.pdf"]')).toBeNull()
    expectAccessibleImages(screen.container)
  })

  test('renders useful fallbacks for unknown pages and projects', async () => {
    const router = await createTestRouter('/missing')
    const projectScreen = await render(ProjectDetailView, {
      props: { slug: 'missing' },
      global: { plugins: [router] },
    })

    await expect
      .element(
        projectScreen.getByRole('heading', {
          level: 1,
          name: 'Project not found',
        }),
      )
      .toBeVisible()

    const pageScreen = await render(NotFoundView, {
      global: { plugins: [router] },
    })
    await expect
      .element(
        pageScreen.getByRole('heading', {
          level: 1,
          name: 'Page not found',
        }),
      )
      .toBeVisible()
  })

  test('opens and closes the mobile menu with the keyboard', async () => {
    const router = await createTestRouter()
    const screen = await render(AppLayout, {
      slots: { default: '<p>Content</p>' },
      global: { plugins: [router] },
    })
    const menu = screen.getByRole('button')

    await menu.click()
    await expect.element(menu).toHaveAttribute('aria-expanded', 'true')

    await userEvent.keyboard('{Escape}')
    await expect.element(menu).toHaveAttribute('aria-expanded', 'false')
    await expect.element(menu).toHaveFocus()
  })
})
