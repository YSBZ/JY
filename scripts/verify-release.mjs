import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const distIndexPath = resolve(root, 'dist/index.html')
const publicFiles = [
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
  'public/favicon.svg',
  'public/og-image.svg',
]

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

for (const file of publicFiles) {
  assert(existsSync(resolve(root, file)), `Missing required public asset: ${file}`)
}

assert(existsSync(distIndexPath), 'Build output missing: dist/index.html. Run npm run build first.')

const html = readFileSync(distIndexPath, 'utf8')

const requiredSnippets = [
  'rel="canonical"',
  'property="og:url"',
  'property="og:image"',
  'name="twitter:url"',
  'name="twitter:image"',
  'rel="manifest"',
  'application/ld+json',
  '/og-image.svg',
  '/site.webmanifest',
]

for (const snippet of requiredSnippets) {
  assert(html.includes(snippet), `dist/index.html is missing expected snippet: ${snippet}`)
}

const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')
const expectedSitemapEntries = [
  'https://jiuyumachinery.com/products/mud-machine-diesel',
  'https://jiuyumachinery.com/products/clay-roller-manual',
  'https://jiuyumachinery.com/products/mud-squeezing-pug-mill',
  'https://jiuyumachinery.com/articles/how-to-present-heavy-machinery-online',
  'https://jiuyumachinery.com/articles/why-global-machinery-sites-need-owned-assets',
]

for (const entry of expectedSitemapEntries) {
  assert(sitemap.includes(entry), `sitemap.xml is missing expected entry: ${entry}`)
}

const robots = readFileSync(resolve(root, 'public/robots.txt'), 'utf8')
assert(robots.includes('Sitemap: https://jiuyumachinery.com/sitemap.xml'), 'robots.txt is missing sitemap reference')

console.log('Release verification passed.')
