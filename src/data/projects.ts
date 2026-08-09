import type { Project } from '../types/projects'

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio website',
    summary: 'A personal portfolio for documenting software engineering work.',
    description:
      'A Vue and TypeScript portfolio for presenting projects, decisions, and the way I approach software engineering.',
    technologies: ['Vue', 'TypeScript', 'Vite'],
    status: 'in-progress',
    links: {
      repository: 'https://github.com/dominikkrystul/portfolio',
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
