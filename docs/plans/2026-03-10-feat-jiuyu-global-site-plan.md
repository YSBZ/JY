---
title: feat: Launch Jiuyu Machinery global marketing site
type: feat
status: active
date: 2026-03-10
origin: docs/req/2026-03-10-jiuyu-machinery-global-site-brainstorm.md
---

# feat: Launch Jiuyu Machinery global marketing site

## Overview

为 `jiuyumachinery.com` 规划并落地一个面向全球访客的机械品牌展示站，首版聚焦品牌展示、重点产品呈现、基础询盘承接和国际化结构搭建。站点以纯前端展示为主，不包含在线交易、复杂后台或账号系统。

本计划以需求文档 [docs/req/2026-03-10-jiuyu-machinery-global-site-brainstorm.md](/Users/ys/JY/docs/req/2026-03-10-jiuyu-machinery-global-site-brainstorm.md) 为基础，继承其中已确认的关键决策，包括品牌官网优先、首页突出公司与重点产品、独立文章栏目、英文+中文首发、预留西班牙语和阿拉伯语、以及海外可访问的部署要求。

## Problem Statement / Motivation

当前没有一个适合对外展示 Jiuyu Machinery 品牌形象和产品实力的国际站点。仅依赖 Alibaba 店铺会限制品牌表达、内容组织和流量承接能力，也无法很好地承接来自 X 的品牌传播流量。

需要一个独立官网来解决以下问题：

- 用更强的品牌叙事展示公司实力，而不是单纯堆叠产品。
- 让全球访客能够稳定访问，并具备良好的加载体验。
- 以官网自己的分类和内容结构展示产品，而不是沿用第三方平台结构。
- 提供适度但清晰的询盘入口，支持海外用户联系。
- 为后续文章内容和多语言扩展预留空间。

## Research Summary

### Local Research

- 仓库当前为空仓起步，仅有需求文档，无现成前端架构、历史代码、组件约定或部署配置。
- 未发现 `docs/solutions/` 或其他机构化历史经验文档，可复用的内部模式为空。
- 因此本计划以“首版从零建立可上线体系”为前提，优先选择成熟、低运维、适合静态站的方案。

### External Research Decision

- 本次 planning 不依赖外部最佳实践检索也可以形成可执行路线。
- 规划阶段先采用低风险、行业通用的静态站方案：`GitHub + Vercel/Cloudflare Pages + Cloudflare DNS + HTTPS + CDN`。
- 到实现阶段再根据技术栈选型，确认具体平台配置细节。

## Scope

### In Scope

- 设计并建设一个国际化机械品牌展示站。
- 首页展示公司形象、品牌信息、重点产品和适度询盘入口。
- 产品详情页用于承接更多产品信息和产品展示。
- 单独的公司介绍页。
- 单独的文章栏目页与文章详情能力。
- 单独的联系入口，支持邮箱、WhatsApp 和联系表单。
- 英文和中文首发，站点结构预留西班牙语、阿拉伯语扩展。
- 海外可访问的部署方案、域名解析、HTTPS 和图片托管策略。

### Out of Scope

- 在线支付、购物车、下单或会员系统。
- 复杂 CMS、管理后台、权限系统。
- 自动从 Alibaba 同步商品。
- 首版就覆盖大量语言版本的完整翻译运营。
- 首版就建设复杂 SEO 内容矩阵或自动化营销系统。

## Success Criteria

- `jiuyumachinery.com` 和 `www.jiuyumachinery.com` 可通过 HTTPS 正常访问。
- 海外用户可以稳定打开首页和产品页面。
- 首页能够清晰传达 Jiuyu Machinery 的品牌定位、公司能力和重点产品。
- 站点包含产品详情、介绍页、文章栏目和联系入口。
- 站点首发具备英文和中文切换能力。
- 图片和媒体资源由站点自身或受控 CDN 托管，不依赖 Alibaba 热链。
- 访客可以通过邮箱、WhatsApp 或联系表单发起联系。

## User Flows

### Primary Flows

1. 访客从 X 或搜索进入首页，快速理解品牌、行业方向和核心产品。
2. 访客从首页进入重点产品详情页，查看更完整的产品介绍与相关产品。
3. 访客通过导航进入公司介绍页，判断企业可信度与能力范围。
4. 访客通过文章栏目查看产品知识、行业科普或使用场景内容。
5. 访客在首页、产品页或联系页通过邮箱、WhatsApp 或表单发起询盘。
6. 访客在英文与中文之间切换，并在未来可扩展到更多语言。

### Flow Gaps To Resolve During Implementation

- 联系表单使用哪种服务承载提交。
- 文章内容是否首版手动维护为 Markdown。
- 产品详情页的信息字段和分类层级如何标准化。

## SpecFlow Notes

从用户流程看，当前需求已经覆盖主要 happy path，但实现阶段必须注意以下补充点：

- 移动端浏览优先级不能低，X 导流访客很可能以手机访问为主。
- 语言切换必须保持页面上下文清晰，避免出现“切换语言后落回首页”的糟糕体验。
- 联系入口在各页面的位置需要统一，避免有的页面能联系、有的页面没有 CTA。
- 图片较多时要控制尺寸与格式，避免首页首屏过重影响海外访问速度。
- 文章栏目首版只需满足展示与浏览，不应扩展成复杂发布系统。

## Recommended Delivery Approach

推荐采用“两阶段上线”：

### Phase 1: MVP Launch

目标是在最短路径内上线一个可对外访问、品牌感明确、结构完整的国际展示站。

包含：

- 建立站点基础架构与设计语言
- 完成首页、产品详情页、介绍页、文章栏目、联系入口
- 完成英文和中文版本
- 完成基础产品分类体系与首批重点产品内容
- 接入 GitHub、部署平台、自定义域、HTTPS
- 完成图片自托管和基础性能优化

### Phase 2: Content Expansion

在 MVP 稳定后，逐步扩展内容覆盖和国际化深度。

包含：

- 增加更多产品详情页
- 增加更多文章内容
- 扩展西班牙语、阿拉伯语
- 优化 SEO 落地页与内容分发

## Implementation Plan

### 1. Foundation and Platform Decisions

- 确定首版前端技术栈，优先静态站友好的方案。
- 确定部署平台，优先 `Vercel` 或 `Cloudflare Pages`。
- 确定 DNS 托管平台，优先 `Cloudflare DNS`。
- 建立 GitHub 仓库作为代码和部署入口。

### 2. Information Architecture and Content Modeling

- 定义站点导航结构：首页、产品、关于、文章、联系。
- 重新梳理官网产品分类，不沿用 Alibaba 原始目录。
- 确定首页重点产品数量和展示顺序。
- 定义产品详情页的标准内容模块。
- 定义文章列表页和文章详情页的基础信息结构。

### 3. Design Direction and Brand System

- 建立机械感、深色、厚重的视觉基调。
- 提炼符合 Jiuyu Machinery 的品牌语气和标题风格。
- 明确页面中的信任元素，如公司介绍、能力说明、应用场景或其他可信信息位。
- 控制 CTA 强度，保证品牌展示优先，询盘作为明确辅助动作。

### 4. Internationalization Strategy

- 先完成英文和中文的结构与内容。
- 预留西班牙语、阿拉伯语所需的路由和内容组织方式。
- 确定默认语言与语言切换方式。
- 明确哪些内容必须双语，哪些内容可延后翻译。

### 5. Asset and Content Preparation

- 从 Alibaba 整理产品图片和基础产品信息。
- 下载并重新托管图片，不直接引用第三方热链。
- 清洗并统一产品命名、描述和分类表达。
- 准备公司介绍、联系信息和首批文章选题。

### 6. Launch and Global Access

- 将代码推送至 GitHub。
- 连接部署平台并生成预览环境。
- 绑定 `jiuyumachinery.com` 和 `www`。
- 配置 DNS 记录、HTTPS 和跳转策略。
- 验证海外可访问性和基础性能。

## Risks and Mitigations

- 素材质量不足：Alibaba 图片和描述可能不适合直接官网使用。
  处理：先筛选首批重点产品，只用质量足够的素材上线。

- 范围扩张：多语言、文章、产品目录容易让首版失控。
  处理：首版限定英文+中文、精选产品、少量文章。

- 海外访问体验不稳定：若图片过大或部署方案不当，首屏会很慢。
  处理：优先使用全球边缘部署和压缩后的自托管图片。

- 联系链路不清晰：CTA 过弱会损失询盘，过强会破坏品牌感。
  处理：统一采用中等强度 CTA，在首页、产品页、联系页保持一致。

## Dependencies

- 用户提供 GitHub 仓库或允许新建仓库。
- 用户能够登录域名服务商或 Cloudflare 管理 DNS。
- 用户能够登录部署平台并完成仓库授权。
- 用户提供最终公开联系方式，如邮箱、WhatsApp。
- 用户确认首批产品和公司介绍内容。

## Acceptance Criteria

- [ ] 计划明确了站点首版范围和非范围。
- [ ] 计划明确了页面结构、国际化策略和内容方向。
- [ ] 计划明确了图片来源重托管要求。
- [ ] 计划明确了海外访问、DNS、HTTPS 和部署平台方向。
- [ ] 计划明确了用户与 AI 的责任边界。
- [ ] 计划可直接作为后续设计与实现的输入。

## Recommended Next Actions

1. 确认实现阶段采用的前端技术栈。
2. 确认部署平台在 `Vercel` 与 `Cloudflare Pages` 中的选择。
3. 建立 GitHub 仓库并开始代码初始化。
4. 整理首批重点产品、公司介绍和联系信息。
5. 进入实际实现阶段，先完成 MVP。

## Sources

- **Origin requirement:** [docs/req/2026-03-10-jiuyu-machinery-global-site-brainstorm.md](/Users/ys/JY/docs/req/2026-03-10-jiuyu-machinery-global-site-brainstorm.md)
