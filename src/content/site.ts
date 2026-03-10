export type Locale = 'en' | 'zh'

export type Product = {
  slug: string
  category: string
  image: string
  imageAlt: string
  imageLabel: string
  specs: string[]
  accent: string
  title: Record<Locale, string>
  summary: Record<Locale, string>
  detail: Record<Locale, string>
}

export type Article = {
  slug: string
  tag: string
  title: Record<Locale, string>
  excerpt: Record<Locale, string>
  body: Record<Locale, string[]>
}

export const nav = {
  en: [
    { label: 'Products', href: '/products' },
    { label: 'Story', href: '/story' },
    { label: 'Articles', href: '/articles' },
    { label: 'Contact', href: '/contact' },
  ],
  zh: [
    { label: '产品', href: '/products' },
    { label: '品牌介绍', href: '/story' },
    { label: '文章', href: '/articles' },
    { label: '联系', href: '/contact' },
  ],
} satisfies Record<Locale, Array<{ label: string; href: string }>>

export const homeCopy = {
  en: {
    eyebrow: 'Global industrial machinery showcase',
    title: 'Built for rough terrain, heavy schedules, and buyers who do not need hype.',
    intro:
      'Jiuyu Machinery presents heavy-duty equipment with a darker, more disciplined brand language. The site is designed to help global visitors understand who we are, what we build, and how to start a serious conversation.',
    primaryCta: 'Explore flagship products',
    secondaryCta: 'Start an inquiry',
    trustTitle: 'What this first release needs to prove',
    trustItems: [
      'Jiuyu Machinery looks credible as an industrial brand, not a generic catalog.',
      'Global visitors can browse smoothly, especially from X and mobile devices.',
      'Product content is organized around brand clarity rather than marketplace sprawl.',
    ],
    productTitle: 'Flagship machinery',
    articleTitle: 'Latest field notes',
    articleLink: 'Read article',
    storyTitle: 'Industrial confidence with a cleaner global voice',
    storyBody:
      'The visual system leans into dark surfaces, structural framing, and sharp safety-yellow accents. It should feel closer to equipment branding than consumer web design.',
  },
  zh: {
    eyebrow: '面向全球的机械品牌展示站',
    title: '为重载工况、复杂场景和真正买家而设计，而不是为了堆砌噱头。',
    intro:
      'Jiuyu Machinery 以更克制、更工业化的品牌语言展示重型机械设备。这个站点的目标，是让全球访客快速理解我们是谁、做什么，以及如何高效建立联系。',
    primaryCta: '查看重点产品',
    secondaryCta: '发起询盘',
    trustTitle: '首版必须证明的事情',
    trustItems: [
      'Jiuyu Machinery 要呈现为可信的工业品牌，而不是普通产品列表站。',
      '来自 X 和海外移动端的访客需要稳定、顺畅地浏览。',
      '产品内容要按品牌逻辑重新组织，而不是照搬第三方平台结构。',
    ],
    productTitle: '重点机械产品',
    articleTitle: '最新文章',
    articleLink: '阅读文章',
    storyTitle: '更重工业、更国际化的品牌表达',
    storyBody:
      '整体视觉将深色材质、结构化框线与高识别度的工业黄结合，接近设备品牌的力量感，而不是消费类网站的轻飘感。',
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    intro: string
    primaryCta: string
    secondaryCta: string
    trustTitle: string
    trustItems: string[]
    productTitle: string
    articleTitle: string
    articleLink: string
    storyTitle: string
    storyBody: string
  }
>

export const companyCopy = {
  en: {
    title: 'Jiuyu Machinery story',
    intro:
      'This site introduces Jiuyu Machinery as a focused industrial brand. The first job is not volume. It is clarity: stronger positioning, clearer categories, and a better global-facing narrative than a marketplace profile can offer.',
    pillars: [
      ['Brand', 'A darker industrial identity inspired by serious equipment brands.'],
      ['Products', 'Flagship machines on the homepage, broader coverage deeper in the catalog.'],
      ['Knowledge', 'An article tab dedicated to product know-how and real use scenarios.'],
    ],
  },
  zh: {
    title: 'Jiuyu Machinery 品牌介绍',
    intro:
      '这个站点将 Jiuyu Machinery 作为一个更清晰的工业品牌来呈现。首要目标不是堆量，而是建立更强的定位、更清楚的分类，以及比平台店铺更完整的国际化叙事。',
    pillars: [
      ['品牌', '以重工业设备品牌为参考，建立更深色、更硬朗的品牌识别。'],
      ['产品', '首页主打重点设备，更多产品在目录和详情页承接。'],
      ['内容', '通过独立文章栏目持续输出产品知识与应用场景。'],
    ],
  },
} satisfies Record<
  Locale,
  {
    title: string
    intro: string
    pillars: Array<[string, string]>
  }
>

export const contactCopy = {
  en: {
    title: 'Open an inquiry',
    intro:
      'The contact flow should stay direct. Email, WhatsApp, and a lightweight form are enough for the first release.',
    channels: [
      ['Email', 'sales@jiuyumachinery.com'],
      ['WhatsApp', '+86 188 0000 0000'],
      ['Response', 'Structured replies within one business day'],
    ],
  },
  zh: {
    title: '发起询盘',
    intro:
      '首版联系链路保持直接高效即可。邮箱、WhatsApp 和轻量表单已经足够承接第一批海外访客。',
    channels: [
      ['邮箱', 'sales@jiuyumachinery.com'],
      ['WhatsApp', '+86 188 0000 0000'],
      ['响应', '一个工作日内进行结构化回复'],
    ],
  },
} satisfies Record<
  Locale,
  {
    title: string
    intro: string
    channels: Array<[string, string]>
  }
>

export const products: Product[] = [
  {
    slug: 'mud-machine-diesel',
    category: 'Clay Processing',
    image: '/images/products/mud-machine-diesel.jpg',
    imageAlt: 'Diesel mud machine from Jiuyu Machinery',
    imageLabel: 'Diesel mud machine',
    specs: ['Tractor engine drive', 'Adjustable extrusion speed', 'CE-ready equipment'],
    accent: 'amber',
    title: {
      en: 'Diesel Mud Machine',
      zh: '柴油泥料机',
    },
    summary: {
      en: 'A heavy-duty clay processing machine built for steady extrusion and workshop-grade reliability.',
      zh: '面向陶泥与泥料处理场景，强调稳定挤出和连续作业能力。',
    },
    detail: {
      en: 'This machine is a strong flagship candidate because it immediately communicates industrial function, mechanical structure, and Jiuyu’s manufacturing capability.',
      zh: '这款设备很适合作为首页重点产品，它能直接体现 Jiuyu 的机械结构感、设备用途和制造能力。',
    },
  },
  {
    slug: 'clay-roller-manual',
    category: 'Forming',
    image: '/images/products/clay-roller-manual.jpg',
    imageAlt: 'Manual clay roller machine from Jiuyu Machinery',
    imageLabel: 'Manual clay roller',
    specs: ['No electricity required', 'Manual pressure control', 'Compact workshop footprint'],
    accent: 'steel',
    title: {
      en: 'Manual Clay Roller Machine',
      zh: '手动压泥机',
    },
    summary: {
      en: 'A compact forming machine for smaller workshops that still need disciplined mechanical output.',
      zh: '适合小型工坊与工作室的成型设备，强调紧凑结构与稳定输出。',
    },
    detail: {
      en: 'This model helps the site show range: Jiuyu is not only about larger processing units, but also practical equipment for smaller production environments.',
      zh: '这款设备可以帮助官网展示产品覆盖面，说明 Jiuyu 不只是做大型设备，也能服务更灵活的生产场景。',
    },
  },
  {
    slug: 'mud-squeezing-pug-mill',
    category: 'Mixing & Extrusion',
    image: '/images/products/mud-squeezing-pug-mill.jpg',
    imageAlt: 'Mud squeezing and mixing machine from Jiuyu Machinery',
    imageLabel: 'Pug mill system',
    specs: ['Mud mixing line', 'Customized outlet options', 'Continuous squeezing workflow'],
    accent: 'graphite',
    title: {
      en: 'Mud Squeezing Pug Mill',
      zh: '挤泥搅拌机',
    },
    summary: {
      en: 'A combined mixing and extrusion machine suited to more complete clay preparation lines.',
      zh: '兼顾搅拌与挤出能力，适合更完整的泥料准备和连续作业流程。',
    },
    detail: {
      en: 'This product gives the catalog a stronger systems story. It suggests Jiuyu can present coordinated processing capability instead of isolated equipment only.',
      zh: '这类设备能让目录更像一个完整机械方案，而不是只展示零散单机，更适合建立品牌专业度。',
    },
  },
]

export const articles: Article[] = [
  {
    slug: 'how-to-present-heavy-machinery-online',
    tag: 'Brand systems',
    title: {
      en: 'How heavy machinery should be presented online',
      zh: '重型机械应该如何在线上呈现',
    },
    excerpt: {
      en: 'Why industrial buyers respond better to clarity, structure, and credible product framing than to aggressive sales language.',
      zh: '为什么工业设备买家更看重清晰结构、可信表达和应用场景，而不是激进的销售式文案。',
    },
    body: {
      en: [
        'A serious machinery website should reduce noise. Buyers want to identify product type, operating context, and supplier confidence quickly.',
        'That means product pages must balance atmosphere with substance. Design can feel strong, but information still has to be easy to scan.',
      ],
      zh: [
        '机械类网站首先应该降低噪音。买家希望快速识别产品类型、使用场景和供应商可信度。',
        '因此产品页面既要有工业气质，也必须信息清晰、便于快速扫描和判断。',
      ],
    },
  },
  {
    slug: 'why-global-machinery-sites-need-owned-assets',
    tag: 'Content operations',
    title: {
      en: 'Why global machinery sites need owned media assets',
      zh: '为什么国际机械站需要自有图片资产',
    },
    excerpt: {
      en: 'If product images only live on marketplace links, site speed, reliability, and brand control all become fragile.',
      zh: '如果产品图片长期依赖第三方平台链接，站点速度、稳定性和品牌控制力都会很脆弱。',
    },
    body: {
      en: [
        'Owned media assets make branding more consistent and deployment more reliable. They also reduce the risk of broken links during campaign traffic.',
        'For a Jiuyu launch, image ownership is part of the product experience, not a technical afterthought.',
      ],
      zh: [
        '自有图片资产会让品牌表达更一致，也能显著提升部署稳定性，减少活动流量期间的失效风险。',
        '对 Jiuyu 的国际站来说，图片归属和托管方式本身就是产品体验的一部分，而不是实现细节。',
      ],
    },
  },
]
