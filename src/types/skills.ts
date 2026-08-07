export interface SkillCategory {
  id: string
  title: string
  description: string
  technologies: string[]
  experience: string[]
  logos: SkillLogo[]
}

export interface SkillLogo {
  name: string
  src: string
}

export interface LearningFocus {
  title: string
  description: string
  topics: LearningTopic[]
  exchange: ExchangeFocus
}

export interface LearningTopic {
  id: string
  title: string
  description: string
  icon:
    'agents' | 'network' | 'language' | 'blockchain' | 'enterprise' | 'society'
}

export interface ExchangeFocus {
  title: string
  institution: string
  dates: string
  courses: string[]
}

export interface EngineeringSkillGroup {
  title: string
  items: string[]
}
