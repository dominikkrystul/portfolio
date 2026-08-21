import type { Project } from '../types/projects'
import aiTutorsPoster from '../assets/images/projects/AiTutorPoster.webp'
import aiTutorPipeline from '../assets/images/projects/ci-cd-ai-tutor.png'
import stemWijsPipeline from '../assets/images/projects/ci-cd-stemwijs.png'
import stemWijsPipelineCommits from '../assets/images/projects/ci-cd-stemwijs-commits.png'
import portfolioHomepage from '../assets/images/projects/portfolio-homepage.png'
import portfolioCaseStudyRendering from '../assets/images/projects/portfolio-case-study-rendering.png'
import portfolioRecordMobileProof from '../assets/images/projects/portfolio-record-mobile-proof.png'
import portfolioTypedProjectData from '../assets/images/projects/portfolio-typed-project-data.png'
import ragChatSourcedAnswer from '../assets/images/rag-chat-sourced-answer.webp'
import ragCourseMaterialUpload from '../assets/images/rag-course-material-upload.webp'
import ragQdrantLogs from '../assets/images/rag-qdrant-logs.webp'
import stemWijsElectionCache from '../assets/images/projects/ElectionCache_StemWijs.png'
import stemWijsDutchResultParser from '../assets/images/projects/DutchResultParser_StemWijs.png'
import stemWijsHomepage from '../assets/images/projects/StemWijs_homepage.jpg'

export const projects: Project[] = [
  {
    slug: 'ai-tutor',
    title: 'AI Tutor',
    summary:
      'A learning assistant that lets adult IT learners keep practising between lessons, even when their teacher is unavailable.',
    description:
      'AI Tutor is a prototype for Make IT Work, a retraining programme for adults moving into IT. Students can work through database and SQL assignments outside class.',
    image: aiTutorsPoster,
    imageAlt:
      'AI Tutor project poster with a preview of the student homepage, project logo, and purple graphic artwork.',
    imageWidth: 720,
    imageHeight: 936,
    imageAspect: 'portrait',
    mobileImage: ragChatSourcedAnswer,
    imageCaption:
      'The poster includes a preview of the AI Tutor homepage and the project’s visual direction.',
    mobileImageCaption:
      'The chat interface shows an answer with a PDF filename and page reference.',
    imageCaptionLead: 'AI Tutor project poster.',
    mobileImageCaptionLead: 'Sourced answer from course material.',
    featuredImage: aiTutorsPoster,
    featuredImageAlt:
      'AI Tutor project poster with a preview of the student homepage, project logo, and purple graphic artwork.',
    technologies: [
      'Vue',
      'TypeScript',
      'Node.js',
      'RAG pipeline',
      'Qdrant',
      'Ollama',
    ],
    status: 'complete',
    featured: true,
    projectContext: 'Team project · Software Engineering at HvA',
    role: 'RAG pipeline and teacher workflow',
    caseStudyThesis:
      'I built a RAG pipeline that turns teacher-uploaded PDFs into LLM answers with sources.',
    overviewContribution:
      'Teacher-uploaded PDFs are chunked and indexed in Qdrant. The backend retrieves those chunks for the LLM and uses MySQL metadata to show the source title with each answer.',
    proofPoint:
      'The retrieval pipeline chunks teacher material in Qdrant and uses MySQL metadata to return source titles with answers.',
    challenge:
      'Students often have questions while working independently. A general chatbot can give away the answer or respond to questions outside the course. The assistant needed to stay within the lesson material and help students continue.',
    approach:
      'Lesson material is chunked and indexed in Qdrant so the backend can retrieve relevant context for the LLM. MySQL stores each document’s title and origin, which are shown with the answer.',
    contributions: [
      'Built the backend retrieval path from a student question to Qdrant and back into the LLM response.',
      'Chose and implemented the embedding model, chunking, and indexing strategy for teacher lesson material.',
      'Used MySQL as the source of truth for metadata, including the title and origin of retrieved material.',
      'Built the teacher flow for adding lesson material to the application.',
      'Connected retrieved lesson chunks to the LLM response so students can see which material the answer used.',
    ],
    caseStudyContributions: [
      'Built the backend path that sends a student question to Qdrant and passes retrieved chunks to the LLM.',
      'Chose and implemented the embedding model, chunking, and indexing strategy for teacher lesson material.',
      'Built the teacher flow for adding lesson material and connected MySQL metadata to the sourced response.',
    ],
    productEvidence: [
      {
        image: ragCourseMaterialUpload,
        alt: 'AI Tutor teacher interface for uploading a PDF and assigning it to the Database - Ontwerpen lesson.',
        width: 1938,
        height: 1094,
        label: 'Course material',
        caption: 'A teacher adds a PDF and connects it to a lesson.',
      },
      {
        image: ragQdrantLogs,
        alt: 'Qdrant log entries showing a course material collection being updated with points after lesson material is processed.',
        width: 915,
        height: 120,
        label: 'Retrieval',
        caption: 'The backend chunks the material and indexes it in Qdrant.',
      },
      {
        image: ragChatSourcedAnswer,
        alt: 'AI Tutor chat response that names the uploaded Claude Certification Program Exam Guide PDF and page numbers used for its answer.',
        width: 2372,
        height: 1390,
        label: 'Sourced answer',
        caption: 'The answer names the PDF and pages it used as context.',
        featured: true,
      },
    ],
    productEvidenceTitle: 'From course material to a sourced answer',
    highlights: [
      'Database and SQL assignments created by teachers.',
      'A tutor chat that gives hints rather than direct answers.',
      'Lessons, progress tracking, user accounts, and chat sessions.',
      'A local Docker Compose setup with MySQL, Redis, Qdrant, and Ollama.',
    ],
    includedSummary:
      'Teachers can create SQL assignments and upload lesson material. Students use that material in the tutor chat and a safe SQL sandbox. Docker Compose runs MySQL, Redis, Qdrant, and Ollama locally.',
    learnings: [
      'I learned how a RAG pipeline turns lesson PDFs into useful context for a language model.',
      'I worked with embeddings, vector search in Qdrant, and local models through Ollama.',
      'I learned that the behaviour of an AI tutor depends on more than the model. The available sources and the instructions around them matter just as much.',
    ],
    learningReflection:
      'I learned how RAG connects an LLM to course material: choosing an embedding model, chunking PDFs, storing vectors in Qdrant, and retrieving the right context for an answer. I also learned how MySQL metadata can show students where an answer came from.',
    deliverySummary:
      'The team moved work from feature branches to dev for review, then to main.',
    deliveryEvidence: [
      {
        image: aiTutorPipeline,
        alt: 'GitLab pipeline for AI Tutor showing a passed merge from dev to main, followed by secret detection and production deployment jobs.',
        width: 1116,
        height: 800,
        caption:
          'A passed main pipeline runs secret detection and production deployment after the dev merge.',
      },
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
      'StemWijs was built by five Software Engineering students around official election data and tools for exploring how Dutch elections work.',
    image: stemWijsHomepage,
    imageAlt:
      'StemWijs homepage with 2023 Dutch election results shown as a bar chart and a prompt to explore live election data.',
    imageWidth: 1280,
    imageHeight: 720,
    imageCaption:
      'The homepage shows the 2023 election seat counts in a bar chart.',
    imageCaptionLead: '2023 election results.',
    technologies: ['Vue', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
    status: 'complete',
    projectContext: 'Team project · Software Engineering at HvA',
    role: 'Election data, homepage and account verification',
    caseStudyThesis:
      'Final-result XML is stored and cached before the homepage chart reads it.',
    overviewContribution:
      'Responsible for the final-results parser, homepage, and account-verification flow.',
    challenge:
      'We needed a reliable way to turn final election data into local results people could explore, without a database call every time the homepage chart is shown.',
    approach:
      'I split the parser into small transformers for each XML category, including municipalities and provinces.',
    contributions: [
      'Built the XML parser that processes final election data, including municipality and province results.',
      'Added the final election results to the application.',
      'Built the homepage and the email-verification flow for new accounts.',
      'Implemented registration emails with a verification code before an account is activated.',
      'Configured the CI/CD workflow by adding the tst-to-main production deployment flow and consolidating frontend and backend test stages.',
    ],
    proofPoint:
      'Parsed final election data is stored and cached so the homepage chart does not query the database on every request.',
    caseStudyContributions: [
      'Built the XML parser for final election results, then stored and cached the data for the homepage chart.',
      'Built the homepage and email-verification flow, including registration emails with a code before an account is activated.',
      'Set up the CI/CD workflow from feature branches through tst to tested production deployment on main.',
    ],
    productEvidence: [
      {
        image: stemWijsDutchResultParser,
        alt: 'GitLab file view of DutchResultTransformer.java, authored by Dominik Krystul, showing a Java transformer for Dutch election results.',
        width: 2284,
        height: 1212,
        label: 'XML parser',
        caption:
          'My DutchResultTransformer turns final Dutch election-result XML into the data used by the application.',
        showDesktopOpenImage: true,
      },
    ],
    productEvidenceTitle: 'Final-result XML parser',
    supportingEvidence: [
      {
        image: stemWijsElectionCache,
        alt: 'GitLab commit authored by Dominik Krystul titled Add cache management for election results and clear cache endpoint.',
        width: 2330,
        height: 1284,
        label: 'Cached results',
        caption:
          'This commit adds cache management for election results, so the homepage chart does not need to query the database on every request.',
      },
    ],
    supportingEvidenceTitle: 'Cache implementation',
    evidencePlacement: 'after-contribution',
    highlights: [
      'Election results by municipality and province.',
      'Interactive maps, charts, party comparison, and historical data.',
      'A filter quiz that changes the election data shown to the user.',
      'Accounts, a discussion forum, and moderation tools.',
    ],
    includedSummary:
      'local results, party comparisons, historical data, a quiz, accounts, and moderated discussion.',
    learnings: [
      'This was my first large project using Java and Spring Boot for a backend.',
      'I learned how a Vue frontend, REST API, database, and Docker setup fit together in one application.',
      'Working in a five-person team taught me how important shared documentation and clear agreements are during a sprint.',
    ],
    learningReflection:
      'StemWijs was my first large Java and Spring Boot project. I learned how the Vue frontend, REST API, database, and Docker setup work together, and how much a five-person team depends on shared documentation and clear sprint agreements.',
    deliverySummary:
      'I configured the delivery workflow around feature branches, tst, and main.',
    deliveryEvidence: [
      {
        image: stemWijsPipelineCommits,
        alt: 'GitLab commit history showing Dominik Krystul authored CI/CD commits that add the tst branch to production deployment and consolidate test jobs.',
        width: 2310,
        height: 680,
        caption:
          'My commits add the tst-to-main deployment flow and consolidate CI/CD test stages.',
      },
      {
        image: stemWijsPipeline,
        alt: 'GitLab pipeline for StemWijs showing a passed tst-to-main merge with backend tests and production deployment jobs.',
        width: 1058,
        height: 656,
        caption:
          'The resulting main pipeline passes backend tests before deployment to production.',
      },
    ],
    links: {
      repository: 'https://github.com/dominikkrystul/stemwijs',
    },
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio website',
    summary:
      'A personal portfolio that shows what I built and how I contributed to each project.',
    description:
      'It gives recruiters the context, my role, and the evidence behind each project in one place.',
    image: portfolioHomepage,
    imageAlt:
      'Portfolio homepage introducing Dominik Krystul as a Software Engineering student seeking an internship, alongside a personal portrait illustration.',
    imageWidth: 904,
    imageHeight: 1082,
    imageCaption:
      'The homepage introduces me as a Software Engineering student seeking an internship and points to selected work.',
    imageCaptionLead: 'Portfolio homepage.',
    technologies: ['Vue', 'TypeScript', 'Vite'],
    status: 'in-progress',
    statusNote: 'I update it as my projects evolve.',
    projectContext: 'Personal project',
    role: 'Designer and developer',
    overviewContribution: 'Designed and built this Vue portfolio.',
    caseStudyThesis:
      'Each project lives in one typed record, so its overview and case study stay in sync.',
    proofPoint:
      'The same typed project record supplies the homepage, project overview, and case-study content.',
    challenge:
      'A recruiter can arrive through the homepage, Projects, or a case study. Those routes should show the same project details.',
    approach:
      'The project record holds the shared fields. ProjectCaseStudy reads that record and renders the evidence attached to that project.',
    productEvidenceTitle: 'The project record behind this page',
    evidencePlacement: 'after-contribution',
    productEvidence: [
      {
        image: portfolioTypedProjectData,
        alt: 'Visual Studio Code showing typed project records in projects.ts; the mobile crop focuses on the portfolio-website record.',
        width: 1328,
        height: 941,
        mobileImage: portfolioRecordMobileProof,
        mobileWidth: 690,
        mobileHeight: 290,
        label: 'Project data',
        caption:
          'AI Tutor is one example of the typed project records used throughout the portfolio.',
        showDesktopOpenImage: true,
      },
      {
        image: portfolioCaseStudyRendering,
        alt: 'Code crop from ProjectCaseStudy.vue showing a typed Project prop and template bindings for a project title, summary, thesis, role, and contribution.',
        width: 970,
        height: 630,
        label: 'Case-study rendering',
        caption:
          'ProjectCaseStudy receives one project record and renders its title, summary, and project-specific evidence.',
        showDesktopOpenImage: true,
      },
    ],
    learningReflection:
      'Small updates are safer when a title, image, or link has one place to change. It also made the boundary between shared components and project-specific evidence clearer.',
    links: {
      repository: 'https://github.com/dominikkrystul/portfolio',
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const featuredProjects = projects.filter((project) => project.featured)
