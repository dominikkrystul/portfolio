<script setup lang="ts">
import courseMaterialUpload from '../../assets/images/rag-course-material-upload.webp'
import courseMaterialView from '../../assets/images/rag-course-material-view.webp'
import qdrantLogs from '../../assets/images/rag-qdrant-logs.webp'
import sourcedAnswer from '../../assets/images/rag-chat-sourced-answer.webp'

const evidence = [
  {
    step: '01',
    image: courseMaterialUpload,
    width: 1938,
    height: 1094,
    alt: 'AI Tutor teacher interface for uploading course material',
    caption: 'Teacher uploads a PDF',
    className: 'ai-tutor-evidence__image--upload',
  },
  {
    step: '02',
    image: courseMaterialView,
    width: 2872,
    height: 1472,
    alt: 'AI Tutor interface showing uploaded course material',
    caption: 'Students can open the source material',
    className: 'ai-tutor-evidence__image--material',
  },
  {
    step: '03',
    image: qdrantLogs,
    width: 915,
    height: 120,
    alt: 'Qdrant logs showing course material points being indexed',
    caption: 'Qdrant indexes the chunks',
    className: 'ai-tutor-evidence__image--logs',
    figureClassName: 'ai-tutor-evidence__artifact--logs',
  },
  {
    step: '04',
    image: sourcedAnswer,
    width: 2372,
    height: 1390,
    alt: 'AI Tutor chat response citing the uploaded PDF and page number',
    caption: 'The answer cites the uploaded PDF',
    className: 'ai-tutor-evidence__image--answer',
  },
]
</script>

<template>
  <section class="ai-tutor-evidence" aria-labelledby="ai-tutor-evidence-title">
    <div class="ai-tutor-evidence__heading">
      <p class="section-label">RAG pipeline</p>
      <h2 id="ai-tutor-evidence-title">
        From lesson material to a sourced answer
      </h2>
      <p>
        I built the retrieval path: teacher PDFs are chunked and indexed in
        Qdrant, then the answer cites the material it used.
      </p>
    </div>

    <div class="ai-tutor-evidence__artifacts">
      <figure
        v-for="item in evidence"
        :key="item.caption"
        :class="item.figureClassName"
      >
        <div class="ai-tutor-evidence__image-wrap">
          <img
            :class="item.className"
            :src="item.image"
            :alt="item.alt"
            :width="item.width"
            :height="item.height"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>
          <span class="ai-tutor-evidence__step">{{ item.step }}</span>
          {{ item.caption }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.ai-tutor-evidence {
  margin-top: 5.5rem;
}

.ai-tutor-evidence__heading {
  max-width: 600px;
}

.ai-tutor-evidence h2 {
  margin: 0.45rem 0 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: -0.035em;
}

.ai-tutor-evidence__heading > p:last-child {
  margin: 1rem 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.ai-tutor-evidence__artifacts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.ai-tutor-evidence figure {
  margin: 0;
}

.ai-tutor-evidence__image-wrap {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--paper-deep);
}

.ai-tutor-evidence img {
  display: block;
  width: 100%;
  height: 100%;
}

.ai-tutor-evidence__image--upload,
.ai-tutor-evidence__image--material,
.ai-tutor-evidence__image--answer {
  object-fit: cover;
}

.ai-tutor-evidence__image--logs {
  object-fit: contain;
}

.ai-tutor-evidence figcaption {
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  margin-top: 0.65rem;
  color: var(--ink);
  font-size: 0.9rem;
  line-height: 1.4;
}

.ai-tutor-evidence__step {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0;
}

@media (max-width: 700px) {
  .ai-tutor-evidence__artifacts {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .ai-tutor-evidence__artifact--logs .ai-tutor-evidence__image-wrap {
    aspect-ratio: 5 / 1;
  }
}
</style>
