export type ProjectStatus = 'in-progress' | 'complete'

export interface ProjectLinks {
  repository?: string
  documentation?: string
}

export interface ProjectEvidence {
  image: string
  alt: string
  width: number
  height: number
  mobileImage?: string
  mobileWidth?: number
  mobileHeight?: number
  label?: string
  caption: string
  featured?: boolean
  showDesktopOpenImage?: boolean
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  imageAspect?: 'landscape' | 'portrait'
  mobileImage?: string
  imageCaption?: string
  mobileImageCaption?: string
  imageCaptionLead?: string
  mobileImageCaptionLead?: string
  featuredImage?: string
  featuredImageAlt?: string
  technologies: string[]
  status: ProjectStatus
  statusNote?: string
  featured?: boolean
  projectContext?: string
  role?: string
  caseStudyThesis?: string
  overviewContribution?: string
  challenge?: string
  approach?: string
  contributions?: string[]
  caseStudyContributions?: string[]
  proofPoint?: string
  highlights?: string[]
  includedSummary?: string
  learnings?: string[]
  learningReflection?: string
  productEvidence?: ProjectEvidence[]
  productEvidenceTitle?: string
  supportingEvidence?: ProjectEvidence[]
  supportingEvidenceTitle?: string
  evidencePlacement?: 'after-contribution'
  deliverySummary?: string
  deliveryEvidence?: ProjectEvidence[]
  links?: ProjectLinks
}
