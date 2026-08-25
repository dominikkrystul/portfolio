import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'
import { chromium } from 'playwright'

const host = '127.0.0.1'
const port = 4173
const origin = `http://${host}:${port}`
const routes = [
  '/',
  '/projects',
  '/projects/ai-tutor',
  '/projects/stemwijs',
  '/projects/portfolio-website',
  '/skills',
  '/about',
]
const minimumScores = { accessibility: 0.95, performance: 0.75, seo: 0.95 }
const maximumMetrics = {
  largestContentfulPaintMs: 2700,
  totalBlockingTimeMs: 200,
  cumulativeLayoutShift: 0.1,
}
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const preview = spawn(
  npmCommand,
  ['run', 'preview', '--', '--host', host, '--port', String(port)],
  { stdio: 'ignore' },
)

async function waitForPreview() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(origin)
      if (response.ok) return
    } catch {
      // Preview is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 200))
  }

  throw new Error(`Preview did not start at ${origin}`)
}

function score(result, category) {
  return result?.lhr.categories[category]?.score ?? 0
}

function metric(result, audit) {
  return result?.lhr.audits[audit]?.numericValue ?? 0
}

let chrome

try {
  await waitForPreview()
  chrome = await chromeLauncher.launch({
    chromePath: process.env.CHROME_PATH || chromium.executablePath(),
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
  })

  const results = []

  for (const route of routes) {
    const result = await lighthouse(`${origin}${route}`, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      formFactor: 'mobile',
      screenEmulation: {
        mobile: true,
        width: 390,
        height: 844,
        deviceScaleFactor: 1,
        disabled: false,
      },
      throttlingMethod: 'simulate',
      onlyCategories: Object.keys(minimumScores),
    })

    if (!result) throw new Error(`Lighthouse returned no result for ${route}`)

    results.push({
      route,
      accessibility: score(result, 'accessibility'),
      performance: score(result, 'performance'),
      seo: score(result, 'seo'),
      firstContentfulPaintMs: metric(result, 'first-contentful-paint'),
      largestContentfulPaintMs: metric(result, 'largest-contentful-paint'),
      totalBlockingTimeMs: metric(result, 'total-blocking-time'),
      cumulativeLayoutShift: metric(result, 'cumulative-layout-shift'),
      layoutShifts: result.lhr.audits['layout-shifts']?.details?.items ?? [],
    })
  }

  await mkdir('.lighthouse', { recursive: true })
  await writeFile(
    '.lighthouse/results.json',
    `${JSON.stringify({ measuredAt: new Date().toISOString(), results }, null, 2)}\n`,
  )

  console.table(
    results.map((result) => ({
      route: result.route,
      accessibility: Math.round(result.accessibility * 100),
      performance: Math.round(result.performance * 100),
      seo: Math.round(result.seo * 100),
      lcpMs: Math.round(result.largestContentfulPaintMs),
      tbtMs: Math.round(result.totalBlockingTimeMs),
      cls: result.cumulativeLayoutShift.toFixed(3),
    })),
  )

  const failures = results.flatMap((result) => [
    ...Object.entries(minimumScores)
      .filter(([category, minimum]) => result[category] < minimum)
      .map(
        ([category, minimum]) =>
          `${result.route} ${category}: ${Math.round(result[category] * 100)} < ${minimum * 100}`,
      ),
    ...Object.entries(maximumMetrics)
      .filter(([metricName, maximum]) => result[metricName] > maximum)
      .map(
        ([metricName, maximum]) =>
          `${result.route} ${metricName}: ${result[metricName].toFixed(3)} > ${maximum}`,
      ),
  ])

  if (failures.length) {
    throw new Error(`Lighthouse budgets failed:\n${failures.join('\n')}`)
  }
} finally {
  await chrome?.kill()
  preview.kill('SIGTERM')
}
