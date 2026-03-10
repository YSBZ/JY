---
status: ready
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

## Notes

- This todo exists because the user explicitly asked to defer the remaining work and focus on code plus local product images first.
