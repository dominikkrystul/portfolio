import type { Project } from '../types/projects'

export const projects: Project[] = [
  {
    slug: 'ai-tutor',
    title: 'AI Tutor',
    summary:
      'A guided learning assistant for adults retraining for a career in IT.',
    description:
      'AI Tutor is a prototype for Make IT Work, a retraining programme for adults moving into IT. It gives students a place to work through database and SQL assignments outside class, even when a teacher is not available.',
    image:
      'https://raw.githubusercontent.com/dominikkrystul/ai-tutor/main/docs/images/homepage.jpg',
    technologies: ['Vue', 'TypeScript', 'Node.js', 'Qdrant', 'Ollama'],
    status: 'complete',
    featured: true,
    role: 'Team member',
    challenge:
      'Students often have questions while working independently. A general chatbot can give away the answer or respond to questions outside the course. We needed an assistant that supported the learning process without replacing it.',
    approach:
      'Teachers can add assignments to the platform, while students work through them and ask the tutor for help. The tutor gives hints and follow-up questions instead of a final answer. Its source material is limited to Make IT Work lesson PDFs. A RAG pipeline retrieves relevant course material from Qdrant before the language model responds, which keeps the conversation focused on the subject matter.',
    highlights: [
      'Database and SQL assignments created by teachers.',
      'A tutor chat that gives hints rather than direct answers.',
      'Lessons, progress tracking, user accounts, and chat sessions.',
      'A local Docker Compose setup with MySQL, Redis, Qdrant, and Ollama.',
    ],
    learnings: [
      'I learned how a RAG pipeline turns lesson PDFs into useful context for a language model.',
      'I worked with embeddings, vector search in Qdrant, and local models through Ollama.',
      'I learned that the behaviour of an AI tutor depends on more than the model. The available sources and the instructions around them matter just as much.',
    ],
    links: {
      repository: 'https://github.com/dominikkrystul/ai-tutor',
      documentation:
        'https://studio-rai-group-project-2t1g-b53f79.dev.hihva.nl/',
    },
  },
  {
    slug: 'stemwijs',
    title: 'StemWijs',
    summary:
      'A platform that helps young people explore Dutch elections and why voting matters.',
    description:
      'StemWijs was built by five Software Engineering students to make Dutch election information easier to find and understand for young people. The platform connects the importance of voting with practical tools for exploring the results and the political system behind them.',
    image:
      'https://raw.githubusercontent.com/dominikkrystul/stemwijs/main/docs/images/homepage.jpg',
    technologies: ['Vue', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
    status: 'complete',
    role: 'Team member',
    challenge:
      'Election information can feel distant or difficult to navigate, especially for people who are voting for the first time. We wanted to give users a clearer way to explore what happens in Dutch elections and why their vote matters.',
    approach:
      'The platform brings election data, explanations, comparison tools, and a quiz together in one place. Users can select municipalities on a map of the Netherlands to see how parties performed locally. They can also compare parties and past elections, read about the Dutch democratic system, and join moderated discussions.',
    highlights: [
      'Election results by municipality and province.',
      'Interactive maps, charts, party comparison, and historical data.',
      'A filter quiz that changes the election data shown to the user.',
      'Accounts, a discussion forum, and moderation tools.',
    ],
    learnings: [
      'This was my first large project using Java and Spring Boot for a backend.',
      'I learned how a Vue frontend, REST API, database, and Docker setup fit together in one application.',
      'Working in a five-person team taught me how important shared documentation and clear agreements are during a sprint.',
    ],
    links: {
      repository: 'https://github.com/dominikkrystul/stemwijs',
    },
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio website',
    summary: 'A personal portfolio for documenting software engineering work.',
    description:
      'A Vue and TypeScript portfolio for presenting projects, decisions, and the way I approach software engineering.',
    technologies: ['Vue', 'TypeScript', 'Vite'],
    status: 'in-progress',
    featured: false,
    role: 'Designer and developer',
    challenge:
      'I wanted a portfolio that showed more than a list of technologies. Recruiters should be able to see the context behind the work and how I approach software projects.',
    approach:
      'The site uses a typed project data model for overview cards, featured work, and detail pages. That keeps the content in one place while allowing each project to grow into a fuller case study.',
    highlights: [
      'Designed a portfolio around project context rather than technology lists.',
      'Built reusable Vue components and a typed project data model.',
      'Documented technical decisions alongside the work.',
    ],
    learnings: [
      'I improved my Vue and TypeScript workflow by keeping components focused and data contracts explicit.',
      'I learned how small content and layout choices can make a portfolio easier to read.',
    ],
    links: {
      repository: 'https://github.com/dominikkrystul/portfolio',
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const featuredProjects = projects.filter((project) => project.featured)
