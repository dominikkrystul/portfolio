import cityTravelImage from '../assets/images/IMG_7375.webp'
import mountainTravelImage from '../assets/images/IMG_8233.webp'

export const aboutContent = {
  intro: {
    title: 'About',
    summary:
      "I'm Dominik Krystul, a Software Engineering student at the Amsterdam University of Applied Sciences. I enjoy understanding a problem properly and then turning it into software that is genuinely useful.",
    snapshot: {
      title: 'Currently',
      items: [
        { label: 'Based in', value: 'Amsterdam' },
        {
          label: 'Studying',
          value:
            'Software Engineering at Amsterdam University of Applied Sciences',
        },
        {
          label: 'Next up',
          value: 'An exchange semester in Switzerland',
        },
      ],
    },
    internship: {
      label: 'Looking for',
      value: 'A software engineering internship',
    },
  },
  study: {
    title: 'Learning through projects',
    paragraphs: [
      'I use my studies to build a strong foundation in software engineering.',
      'I am drawn to projects that make me learn something new. My studies are where I try different parts of software engineering and find the work I want to keep getting better at.',
    ],
  },
  approach: {
    title: 'How I work',
    process: [
      {
        title: 'Ground answers in course material',
        description:
          'For AI Tutor, I built a RAG pipeline that retrieves relevant PDF passages for each answer, so the LLM uses teacher-uploaded lesson material as context.',
        link: { label: 'View AI Tutor case study', to: '/projects/ai-tutor' },
      },
      {
        title: 'Turn source data into a chart',
        description:
          'For StemWijs, I parsed the final-election XML and connected the cached results to the homepage chart.',
        link: { label: 'View StemWijs case study', to: '/projects/stemwijs' },
      },
      {
        title: 'Ship changes through checks',
        description:
          'I used feature branches and CI checks before deployment on both team projects.',
        link: { label: 'View selected work', to: '/projects' },
      },
    ],
  },
  personal: {
    title: 'Curiosity beyond the classroom',
    introduction:
      'Outside my studies, I make time for friends, travel, and seeing new places.',
    paragraphs: [
      'My exchange is also a chance to get to know daily life somewhere new and explore beyond the classroom.',
      'I also plan to try hiking while I am there. The Alps seem like a good place to start.',
    ],
    gallery: [
      {
        label: 'Mountain hikes',
        alt: 'Dominik on a mountain hike',
        size: 'featured',
        src: mountainTravelImage,
        width: 1000,
        height: 1334,
      },
      {
        label: 'Exploring cities',
        alt: 'Dominik during a night-time city trip',
        size: 'supporting',
        src: cityTravelImage,
        width: 800,
        height: 905,
      },
    ],
    interestNote:
      'Most weeks, I make time for football, the gym, or a game of pool.',
  },
} as const
