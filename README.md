# Jiuyu Machinery

Jiuyu Machinery is a React-based global marketing site for industrial equipment. The current scaffold is built with Vite, React, TypeScript, Radix UI, and Tailwind CSS, and is prepared for deployment on Vercel.

`main` remains the GitHub Pages review build. The deployment-prep branch is intended for standard-domain hosting on Vercel or a similar platform.

## Stack

- React
- TypeScript
- Vite
- Radix UI
- Tailwind CSS
- React Router

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run verify:release
```

## Deployment Direction

- Code hosting: GitHub
- Deployment: Vercel
- DNS: Cloudflare
- Domain: `jiuyumachinery.com`

## Platform Deployment Notes

- This branch uses standard `BrowserRouter` routing for real domains.
- Vite builds from `/` instead of a GitHub Pages subpath.
- `vercel.json` keeps SPA rewrites so direct route visits continue to work.
- Public assets now include `robots.txt`, `sitemap.xml`, and `site.webmanifest` for the production domain.
- `npm run verify:release` checks the built output and required production assets before deployment.

## Vercel Handoff

- Import the `platform-release-prep` branch into Vercel for the first real-domain deployment pass.
- Keep `main` as the GitHub Pages review branch until the production hostname is verified.
- After `jiuyumachinery.com` is attached, revisit `public/sitemap.xml` if route scope expands.
- Detailed handoff steps live in [docs/deployment/2026-03-11-platform-release-prep-runbook.md](/Users/ys/JY/docs/deployment/2026-03-11-platform-release-prep-runbook.md).

## Current Scope

- Brand-forward homepage
- Product listing and product detail pages
- Company story page
- Article listing and article detail pages
- Contact page
- English and Chinese support with room for more languages later
