export type ProjectStatus = 'draft' | 'in-progress' | 'complete'

export interface ProjectLinks {
  live?: string
  repository?: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  image?: string
  technologies: string[]
  status: ProjectStatus
  links?: ProjectLinks
}
