<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="site-footer">
    <div class="site-footer__contact">
      <div>
        <h2>Let’s work on something useful.</h2>
        <p>
          For a project, internship, or collaboration, the quickest way to reach
          me is by email.
        </p>
      </div>

      <nav class="site-footer__links" aria-label="Contact links">
        <a class="site-footer__link" href="mailto:dominikkrystul@gmail.com">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 6.5 12 13l9-6.5M4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11A1.5 1.5 0 0 1 4.5 5Z"
            />
          </svg>
          <span>dominikkrystul@gmail.com</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          class="site-footer__link"
          href="https://www.linkedin.com/in/dominik-krystul-605075276"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6.5 8.5v9M6.5 5.5v.1M10.5 17.5v-5.2a3.3 3.3 0 0 1 6.5 0v5.2M10.5 12.7V8.5"
            />
            <path
              d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
            />
          </svg>
          <span>LinkedIn</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          class="site-footer__link"
          href="https://github.com/dominikkrystul"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9 19c-4 .9-4-2-5.5-2.5M14.5 21v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.4-3.7 1.4a12.8 12.8 0 0 0-6.7 0C5.2.2 4.1.6 4.1.6A4.8 4.8 0 0 0 4 4.2a5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.7 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V21"
            />
          </svg>
          <span>GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          class="site-footer__link"
          href="/cv_EN.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6" />
          </svg>
          <span>View CV</span>
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </div>

    <div class="site-footer__meta">
      <p>© {{ year }} Dominik Krystul</p>
      <p>Designed and built with Vue.</p>
    </div>
  </footer>
</template>
