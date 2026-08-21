export interface SkillCategory {
  id: string
  title: string
  description: string
  emphasis: 'foundation' | 'evidence'
  evidence: SkillEvidence
  technologies?: string[]
  logos?: SkillLogo[]
}

export interface SkillEvidence {
  projects: SkillEvidenceProject[]
  detail: string
}

export interface SkillEvidenceProject {
  label: string
  to: string
}

export interface SkillLogo {
  name: string
  src: string
}

export interface LearningFocus {
  title: string
  description: string
  topics: LearningTopic[]
}

export interface LearningTopic {
  id: string
  title: string
  description: string
  icon: 'agents' | 'network' | 'enterprise'
}
