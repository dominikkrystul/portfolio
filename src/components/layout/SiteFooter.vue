<script setup lang="ts">
// TODO: Re-enable the CV link after updating the PDF's contact details.
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
          <span>dominikkrystul@gmail.com</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          class="site-footer__link"
          href="https://www.linkedin.com/in/dominik-krystul-605075276"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          class="site-footer__link"
          href="https://github.com/dominikkrystul"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>
        <!-- TODO: Re-enable CV after updating the PDF's contact details. -->
      </nav>
    </div>

    <div class="site-footer__meta">
      <p>© {{ year }} Dominik Krystul</p>
      <p>Designed and built with Vue.</p>
    </div>
  </footer>
</template>
