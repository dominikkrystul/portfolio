import { defineBrowserCommand, playwright } from '@vitest/browser-playwright'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  test: {
    browser: {
      commands: {
        setReducedMotion: defineBrowserCommand(
          async ({ page }, value: 'reduce' | 'no-preference') => {
            await page.emulateMedia({ reducedMotion: value })
          },
        ),
      },
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      viewport: { width: 390, height: 844 },
    },
  },
})
