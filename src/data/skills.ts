import type {
  EngineeringSkillGroup,
  LearningFocus,
  SkillCategory,
} from '../types/skills'
import cssLogo from '../assets/icons/skills/css.svg'
import dockerLogo from '../assets/icons/skills/docker.svg'
import htmlLogo from '../assets/icons/skills/html5.svg'
import javascriptLogo from '../assets/icons/skills/javascript.svg'
import mysqlLogo from '../assets/icons/skills/mysql.svg'
import nodeLogo from '../assets/icons/skills/nodedotjs.svg'
import ollamaLogo from '../assets/icons/skills/ollama.svg'
import pythonLogo from '../assets/icons/skills/python.svg'
import qdrantLogo from '../assets/icons/skills/qdrant.svg'
import typescriptLogo from '../assets/icons/skills/typescript.svg'
import vueLogo from '../assets/icons/skills/vuedotjs.svg'

export const skillCategories: SkillCategory[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description:
      'I spend most of my time here: writing code that I can come back to and still follow.',
    technologies: ['TypeScript', 'JavaScript', 'Java', 'Python', 'HTML', 'CSS'],
    experience: [
      'Object-Oriented Programming',
      'Algorithms & Data Structures',
      'Software Architecture',
      'Clean Code',
    ],
    logos: [
      { name: 'TypeScript', src: typescriptLogo },
      { name: 'JavaScript', src: javascriptLogo },
      { name: 'Python', src: pythonLogo },
    ],
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description:
      'I like seeing a rough idea turn into an interface that makes sense to someone using it.',
    technologies: [
      'Vue.js',
      'Vuetify',
      'Responsive Design',
      'Component-based Architecture',
      'Accessibility basics',
    ],
    experience: [
      'Dashboards',
      'Authentication flows',
      'Forms',
      'Reusable UI components',
    ],
    logos: [
      { name: 'Vue.js', src: vueLogo },
      { name: 'HTML5', src: htmlLogo },
      { name: 'CSS', src: cssLogo },
    ],
  },
  {
    id: 'backend-infrastructure',
    title: 'Backend & Infrastructure',
    description:
      'I enjoy tracing a feature through the whole system, from its data to its deployment.',
    technologies: [
      'Node.js',
      'MySQL',
      'Database Design',
      'Database Normalisation',
      'Docker',
      'Git',
      'GitHub',
      'CI/CD',
    ],
    experience: [
      'REST APIs',
      'Automated Testing',
      'Continuous Integration',
      'Automatic Deployment',
      'Version Control',
      'Containerisation',
    ],
    logos: [
      { name: 'Node.js', src: nodeLogo },
      { name: 'MySQL', src: mysqlLogo },
      { name: 'Docker', src: dockerLogo },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    description:
      'I am testing where language models and retrieval help, and where they do not.',
    technologies: [
      'Python',
      'Ollama',
      'RAG',
      'Qdrant',
      'LLMs',
      'Prompt Engineering',
    ],
    experience: [
      'Retrieval-Augmented Generation systems',
      'Vector databases',
      'AI integration',
      'Experimenting with Large Language Models',
      'AI-assisted software development',
    ],
    logos: [
      { name: 'Ollama', src: ollamaLogo },
      { name: 'Qdrant', src: qdrantLogo },
      { name: 'Python', src: pythonLogo },
    ],
  },
]

export const engineeringSkills: EngineeringSkillGroup[] = [
  {
    title: 'Planning',
    items: ['Agile', 'Scrum', 'Sprint Planning', 'Retrospectives'],
  },
  {
    title: 'Analysis & design',
    items: [
      'Problem Analysis',
      'Business Analysis',
      'Requirements Engineering',
      'UML',
      'Domain Modelling',
    ],
  },
  {
    title: 'Quality & collaboration',
    items: [
      'Documentation',
      'Git Workflow',
      'Code Reviews',
      'Ethical Decision Making',
    ],
  },
]

export const engineeringProcessSummary =
  'I start by understanding the problem, then work towards a small solution I can test. What I learn in testing shapes the next version.'

export const learningFocus: LearningFocus = {
  title: "What's next",
  description:
    'My university work, personal projects, and exchange semester are taking me into a few areas I want to understand better.',
  topics: [
    {
      id: 'ai-agents',
      title: 'AI agents & automation',
      description:
        'I am trying out how agents can take on small, repeatable tasks in a development workflow.',
      icon: 'agents',
    },
    {
      id: 'network-security',
      title: 'Network architecture & security',
      description:
        'I want to understand what happens underneath an application, where systems fail, and how to secure them.',
      icon: 'network',
    },
    {
      id: 'natural-language-processing',
      title: 'Natural language processing',
      description:
        'I am learning how language models represent and retrieve information, then testing those ideas in software.',
      icon: 'language',
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      description:
        'I am working through the basics of decentralised systems and looking at where they solve a problem.',
      icon: 'blockchain',
    },
    {
      id: 'enterprise-systems',
      title: 'Enterprise systems',
      description:
        'I am learning how ERP software maps business processes onto one shared system.',
      icon: 'enterprise',
    },
    {
      id: 'ai-and-society',
      title: 'AI & society',
      description:
        'This is where I think about what software changes, not only how to build it.',
      icon: 'society',
    },
  ],
  exchange: {
    title: 'Exchange semester',
    institution: 'Lucerne University of Applied Sciences and Arts',
    dates: 'September 2026 – February 2027',
    courses: [
      'Network Architecture',
      'Information Security',
      'Blockchain',
      'NLP',
      'ERP Systems',
      'Philosophy, Art & AI',
    ],
  },
}
