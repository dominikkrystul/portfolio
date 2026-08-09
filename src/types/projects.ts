export type ProjectStatus = 'draft' | 'in-progress' | 'complete'

export interface ProjectLinks {
  live?: string
  repository?: string
  documentation?: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  image?: string
  technologies: string[]
  status: ProjectStatus
  featured?: boolean
  role?: string
  challenge?: string
  approach?: string
  highlights?: string[]
  learnings?: string[]
  links?: ProjectLinks
}
