import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_BASE ?? '/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'github-pages-spa-fallback',
          async closeBundle() {
            const index = await readFile('dist/index.html')
            const routes = [
              'projects',
              'projects/ai-tutor',
              'projects/stemwijs',
              'projects/portfolio-website',
              'skills',
              'about',
            ]

            await writeFile('dist/404.html', index)
            await Promise.all(
              routes.map(async (route) => {
                await mkdir(`dist/${route}`, { recursive: true })
                await writeFile(`dist/${route}/index.html`, index)
              }),
            )
          },
        },
      ],
    },
  },
})
