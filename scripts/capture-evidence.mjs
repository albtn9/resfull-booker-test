import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { mkdir } from 'fs/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const reportPath = join(root, 'cypress/reports/final/report.html')
const outputDir = join(root, 'docs/evidence')
const outputFile = join(outputDir, 'mochawesome-report.png')

await mkdir(outputDir, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await page.goto(`file://${reportPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle' })
await page.screenshot({ path: outputFile, fullPage: true })
await browser.close()

console.log(`Screenshot saved: ${outputFile}`)
