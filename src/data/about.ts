import cityTravelImage from '../assets/images/IMG_7375.jpeg'
import mountainTravelImage from '../assets/images/IMG_8233.jpeg'

export const aboutContent = {
  intro: {
    title: 'About',
    summary:
      "I'm Dominik Krystul, a Software Engineering student at the Amsterdam University of Applied Sciences. I enjoy understanding a problem properly and then turning it into software that is genuinely useful.",
    snapshot: {
      title: 'Currently',
      items: [
        { label: 'Based in', value: 'Amsterdam' },
        { label: 'Studying', value: 'Software Engineering at HvA' },
        {
          label: 'Next up',
          value: 'An exchange semester in Switzerland',
        },
      ],
    },
  },
  study: {
    title: 'Studying with ambition',
    paragraphs: [
      'I am working towards graduating cum laude. So far, my grades have been 9s, with one 10.',
      'I like projects that force me to learn something new. I am still finding out which parts of software engineering I want to focus on, so I use my studies to try different kinds of work.',
    ],
  },
  approach: {
    title: 'How I work',
    paragraphs: [
      'I usually start by asking what problem we are solving and who will use the result. I look at the context, write down what we know, and make a small prototype when we need to test an idea before building it.',
      'In group projects, I often keep an eye on the planning and the quality of the work. I check where we are, help decide what needs attention next, and keep the sprint goal in view. We use Agile and Scrum, with sprint planning, retrospectives, Git, and GitHub.',
    ],
    process: [
      'Start with the problem and the people involved.',
      'Research before choosing a direction.',
      'Prototype the parts we are still unsure about.',
      'Build, test, and adjust as we go.',
    ],
  },
  personal: {
    title: 'Outside my studies',
    introduction:
      'Outside my studies, I spend my time at the gym, on the football pitch, or around a pool table with friends. I also enjoy travelling and seeing places I have not visited before.',
    paragraphs: [
      'From September 2026, I will spend six months in Lucerne, Switzerland, as part of my exchange semester. I want to experience daily life there and explore the country outside the classroom.',
      'I also plan to give hiking a try while I am there. The Alps seem like a good place to start.',
    ],
    gallery: [
      { label: 'Mountains', size: 'featured', src: mountainTravelImage },
      { label: 'City trips', size: 'supporting', src: cityTravelImage },
    ],
    interests: [
      {
        label: 'Football',
        description: 'Most weeks, I play football with friends.',
      },
      {
        label: 'Gym',
        description: 'Something I do regularly to stay active.',
      },
      {
        label: 'Pool',
        description: 'Evenings at the pool table with friends.',
      },
    ],
    destination: {
      title: 'Next destination',
      from: '🇳🇱 Amsterdam',
      to: '🇨🇭 Lucerne, Switzerland',
      detail: 'Exchange semester',
      dates: 'September 2026 – February 2027',
    },
  },
} as const
