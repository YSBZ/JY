---
status: in_progress
priority: p2
issue_id: "001"
tags: [deployment, dns, content, localization]
dependencies: []
---

# Post-launch setup and content expansion

Track the work that should happen after the current code-and-image pass is visible on GitHub.

## Problem Statement

The current priority is to get a working branded site with local product images into GitHub for review. Domain binding, global deployment verification, content expansion, and richer localization still need to be completed afterward.

## Findings

- The site scaffold is already live in the repository and builds locally.
- GitHub push is working.
- Deployment, DNS, image curation depth, and production contact details are not finalized yet.
- The user explicitly asked to defer these items into a todo list.

## Proposed Solutions

### Option 1: Handle one area at a time

**Approach:** Finish deployment first, then content, then localization.

**Pros:**
- Lowest coordination overhead
- Easier to verify each milestone

**Cons:**
- Slower overall progress
- Some content decisions may delay deployment polish

**Effort:** 1-2 sessions

**Risk:** Low

---

### Option 2: Batch deployment and content preparation together

**Approach:** Set up Vercel and DNS while also cleaning product/media content in parallel.

**Pros:**
- Faster path to a stronger public launch
- Better use of review cycles

**Cons:**
- More moving parts at once
- Higher chance of scope drift

**Effort:** 2-3 sessions

**Risk:** Medium

## Recommended Action

Use Option 1. Complete deployment and domain binding first, then improve media quality, product taxonomy, and additional language coverage in controlled follow-up passes.

## Technical Details

**Deferred work areas:**
- Vercel project creation and custom domain binding
- Cloudflare DNS records for `jiuyumachinery.com` and `www`
- Replace placeholder contact details with real business contacts
- Expand local product image library beyond the first batch
- Add Spanish and Arabic content structure after English/Chinese review

## Acceptance Criteria

- [ ] Vercel project is connected to the GitHub repo
- [ ] Domain and HTTPS are configured
- [ ] Real business contact details replace placeholders
- [ ] More product images and product pages are added
- [ ] Spanish and Arabic expansion plan is scheduled

## Work Log

### 2026-03-10 - Initial todo capture

**By:** Codex

**Actions:**
- Captured deferred deployment and content work in `todos/001-ready-p2-post-launch-setup-and-content.md`
- Scoped this todo to items the user explicitly asked to postpone

**Learnings:**
- The immediate priority is a GitHub-visible branded prototype with locally stored product images
- Deployment and DNS should remain separate follow-up work to avoid blocking visual progress

### 2026-03-10 - Content expansion branch started

**By:** Codex

**Actions:**
- Created local development branch `content-expansion-v1` from the deployed `main`
- Started the catalog refinement pass by regrouping products into site-owned product families
- Added product family filtering to the catalog so the site starts reflecting Jiuyu's own information architecture

**Learnings:**
- The next highest-leverage todo work is content structure, because it improves review quality without depending on Vercel, DNS, or account access
- Reframing the catalog around product families is a better foundation than copying marketplace navigation directly

### 2026-03-10 - Contact flow refinement pass

**By:** Codex

**Actions:**
- Upgraded the contact page from a generic placeholder form to a structured inquiry surface
- Added product selection, inquiry-type selection, and clickable email/WhatsApp links
- Clarified in the UI that this remains a front-end preview until final deployment wiring is completed

**Learnings:**
- The current prototype benefits more from believable conversion structure than from adding more raw placeholder copy
- Even before backend wiring exists, a more realistic inquiry flow makes review and stakeholder feedback much easier

### 2026-03-11 - Localization and site-shell refinement

**By:** Codex

**Actions:**
- Removed remaining hardcoded English page-design copy from the main user-facing pages
- Added localized design copy sources for homepage, story, articles, and product detail pages
- Upgraded the site shell footer so the overall frame feels closer to a reviewable product rather than a prototype

**Learnings:**
- Once the page compositions are in place, the next biggest quality gap is usually hidden in leftover hardcoded copy
- Shell-level polish matters because it is visible on every page and sets the perceived completeness of the whole site

### 2026-03-10 - Core page design refinement

**By:** Codex

**Actions:**
- Refined Story and Articles into fuller editorial-style layouts instead of simple content blocks
- Upgraded Home and Product Detail to carry stronger industrial hierarchy and clearer information framing
- Continued shipping all page-design work directly on `main` so GitHub Pages stays reviewable in real time

**Learnings:**
- The biggest quality gains now come from page composition and information hierarchy, not from adding more routes
- Real-time publishing on `main` is the right workflow for this review stage because it keeps visual feedback immediate

## Notes

- This todo exists because the user explicitly asked to defer the remaining work and focus on code plus local product images first.
