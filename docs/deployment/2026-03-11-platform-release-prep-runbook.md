# Jiuyu Machinery Platform Release Runbook

## Scope

This runbook covers the first real-domain deployment flow for `platform-release-prep`.

## Source of Truth

- Review branch: `main`
- Release-prep branch: `platform-release-prep`
- Production domain: `jiuyumachinery.com`
- Preferred deployment platform: Vercel
- Preferred DNS provider: Cloudflare

## Vercel Setup

1. Import `YSBZ/JY` into Vercel.
2. Select branch `platform-release-prep` for the first deployment.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Framework preset: `Vite`

## Domain Attachment

Attach both:

- `jiuyumachinery.com`
- `www.jiuyumachinery.com`

Vercel will provide the exact target records if they differ, but the intended DNS shape is:

## Cloudflare DNS Records

- Type: `A`
  Name: `@`
  Value: `76.76.21.21`
  Proxy: `Proxied`

- Type: `CNAME`
  Name: `www`
  Value: `cname.vercel-dns.com`
  Proxy: `Proxied`

## Required Verification

After the first production deployment, verify:

- `https://jiuyumachinery.com/` opens successfully
- `https://www.jiuyumachinery.com/` resolves correctly
- Direct route visits work:
  - `/products`
  - `/products/mud-machine-diesel`
  - `/articles`
  - `/contact`
- `https://jiuyumachinery.com/robots.txt` returns the robots file
- `https://jiuyumachinery.com/sitemap.xml` returns the sitemap
- Page title, description, canonical, and share metadata update per route
- Contact form still generates a valid email draft

## Post-Cutover Follow-up

- Replace placeholder contact details with real business contacts
- Revisit sitemap entries when more product and article pages are added
- Add Search Console / analytics only after the primary domain is stable
