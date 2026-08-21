import type { LearningFocus, SkillCategory } from '../types/skills'
import cssLogo from '../assets/icons/skills/css.svg'
import dockerLogo from '../assets/icons/skills/docker.svg'
import htmlLogo from '../assets/icons/skills/html5.svg'
import javaLogo from '../assets/icons/skills/java.svg'
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
    emphasis: 'foundation',
    description:
      'I spend most of my time here: writing code that I can come back to and still follow.',
    evidence: {
      projects: [
        { label: 'AI Tutor', to: '/projects/ai-tutor' },
        { label: 'StemWijs', to: '/projects/stemwijs' },
      ],
      detail:
        'Built application flows in TypeScript and Java around real course and election data.',
    },
    logos: [
      { name: 'TypeScript', src: typescriptLogo },
      { name: 'JavaScript', src: javascriptLogo },
      { name: 'Java', src: javaLogo },
      { name: 'Python', src: pythonLogo },
    ],
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    emphasis: 'foundation',
    description:
      'I like seeing a rough idea turn into an interface that makes sense to someone using it.',
    evidence: {
      projects: [{ label: 'StemWijs', to: '/projects/stemwijs' }],
      detail:
        'Built the homepage and the email-verification flow for new accounts.',
    },
    logos: [
      { name: 'Vue.js', src: vueLogo },
      { name: 'HTML5', src: htmlLogo },
      { name: 'CSS', src: cssLogo },
    ],
    technologies: [
      'Vue.js',
      'Vuetify',
      'Responsive Design',
      'Component-based Architecture',
      'Accessibility basics',
      'HTML5',
      'CSS',
    ],
  },
  {
    id: 'backend-infrastructure',
    title: 'Backend & Infrastructure',
    emphasis: 'evidence',
    description:
      'I enjoy tracing a feature through the whole system, from its data to its deployment.',
    evidence: {
      projects: [{ label: 'StemWijs', to: '/projects/stemwijs' }],
      detail:
        'Set up the CI/CD path from feature branches through tst to tested deployment on main.',
    },
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
    logos: [
      { name: 'Node.js', src: nodeLogo },
      { name: 'MySQL', src: mysqlLogo },
      { name: 'Docker', src: dockerLogo },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    emphasis: 'evidence',
    description:
      'I build retrieval paths that keep LLM answers grounded in course material.',
    evidence: {
      projects: [{ label: 'AI Tutor', to: '/projects/ai-tutor' }],
      detail:
        'Built the RAG pipeline: PDF chunking, Qdrant retrieval, and LLM answers with source titles.',
    },
    technologies: [
      'Python',
      'Ollama',
      'RAG',
      'Qdrant',
      'LLMs',
      'Prompt Engineering',
    ],
    logos: [
      { name: 'Ollama', src: ollamaLogo },
      { name: 'Qdrant', src: qdrantLogo },
      { name: 'Python', src: pythonLogo },
    ],
  },
]

export const supportingSkills = ['Planning', 'Code reviews', 'Documentation']

export const engineeringProcessSummary =
  'CI checks run before work reaches main; a successful pipeline deploys the project.'

export const learningFocus: LearningFocus = {
  title: 'Learning during my exchange',
  description:
    "From September 2026 to February 2027, I'll be on exchange at Lucerne University of Applied Sciences and Arts, exploring these three areas.",
  topics: [
    {
      id: 'ai-in-practice',
      title: 'AI in practice',
      description:
        'AI agents and automation, natural language processing, and the wider impact of AI.',
      icon: 'agents',
    },
    {
      id: 'systems-security',
      title: 'Systems & security',
      description:
        'Network architecture, information security, and the basics of decentralised systems.',
      icon: 'network',
    },
    {
      id: 'enterprise-systems',
      title: 'Enterprise systems',
      description:
        'How ERP software connects business processes with one shared system.',
      icon: 'enterprise',
    },
  ],
}
