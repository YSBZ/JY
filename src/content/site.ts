export type Locale = 'en' | 'zh' | 'ar' | 'ru'

const assetBase = import.meta.env.BASE_URL

function assetPath(path: string) {
  return `${assetBase}${path.replace(/^\//, '')}`
}

export const localeOptions = ['en', 'zh', 'ar', 'ru'] as const

export const shellCopy = {
  en: {
    subtitle: 'Global machinery site',
    footerKicker: 'Industrial site release',
    footerReach: 'Built for global reach',
    footerSignals: ['EN / ZH / AR / RU', 'Catalog-first structure', 'Inquiry-ready shell'],
    footerChannel: 'Channel',
    footerChannelValue: 'GitHub Pages',
    footerDomainStatus: 'Domain status',
    footerDomainStatusValue: 'Pending custom domain',
    footerPrimaryCta: 'Primary CTA',
  },
  zh: {
    subtitle: '国际机械品牌站',
    footerKicker: '工业展示站',
    footerReach: '海外访问优先',
    footerSignals: ['英文 / 中文 / 阿语 / 俄语', '目录优先结构', '可承接询盘的外壳'],
    footerChannel: '渠道',
    footerChannelValue: 'GitHub Pages',
    footerDomainStatus: '域名状态',
    footerDomainStatusValue: '等待自定义域名接入',
    footerPrimaryCta: '主要入口',
  },
  ar: {
    subtitle: 'موقع عالمي للآلات',
    footerKicker: 'موقع صناعي عالمي',
    footerReach: 'مصمم للوصول العالمي',
    footerSignals: ['EN / ZH / AR / RU', 'هيكل يركز على الكتالوج', 'واجهة جاهزة للاستفسار'],
    footerChannel: 'القناة',
    footerChannelValue: 'GitHub Pages',
    footerDomainStatus: 'حالة النطاق',
    footerDomainStatusValue: 'بانتظار ربط النطاق المخصص',
    footerPrimaryCta: 'الدعوة الرئيسية',
  },
  ru: {
    subtitle: 'Глобальный сайт машиностроения',
    footerKicker: 'Промышленный сайт',
    footerReach: 'Сайт для глобальной аудитории',
    footerSignals: ['EN / ZH / AR / RU', 'Каталог как основа', 'Оболочка для запросов'],
    footerChannel: 'Канал',
    footerChannelValue: 'GitHub Pages',
    footerDomainStatus: 'Статус домена',
    footerDomainStatusValue: 'Ожидает подключения собственного домена',
    footerPrimaryCta: 'Главный CTA',
  },
} satisfies Record<
  Locale,
  {
    subtitle: string
    footerKicker: string
    footerReach: string
    footerSignals: string[]
    footerChannel: string
    footerChannelValue: string
    footerDomainStatus: string
    footerDomainStatusValue: string
    footerPrimaryCta: string
  }
>

export const uiCopy = {
  en: {
    trackedOutput: 'Tracked output',
    launchCount: 'Current flagship machines presented in this release',
    storyLink: 'Read the brand story',
    articleOpen: 'Open article',
    articleMissing: 'Article not found.',
    productMissing: 'Product not found.',
    inquireProduct: 'Ask about this machine',
    productCatalogEyebrow: 'Product catalog',
    productCatalogTitle: 'Product catalog',
    productCatalogBody:
      'The website catalog should be organized around brand clarity rather than inherited marketplace structure.',
    companyEyebrow: 'Company',
    articlesEyebrow: 'Articles',
    articlesTitle: 'Knowledge and application articles',
    articlesBody:
      'The article tab is a standalone stream for product know-how, industry education, and use-case stories.',
    inquiryEyebrow: 'Inquiry',
    formName: 'Name',
    formNamePlaceholder: 'Your name',
    formEmail: 'Email',
    formCompany: 'Company',
    formCompanyPlaceholder: 'Your company',
    formProduct: 'Product of interest',
    formInquiryType: 'Inquiry type',
    formDetails: 'Inquiry details',
    formDetailsPlaceholder: 'Tell us the product, operating scenario, volume, and destination market',
    formEmailPlaceholder: 'name@company.com',
    formSubmit: 'Send inquiry',
    formResponseNote: 'Inquiry routing will be finalized during deployment and domain setup.',
    productPositioning: 'Positioning',
    productConfig: 'Configuration cues',
    productFamilyLabel: 'Product families',
    productAllFamilies: 'All',
    inquiryTypeGeneral: 'General inquiry',
    inquiryTypeQuote: 'Request quote',
    inquiryTypeDistributor: 'Distributor / partner',
    inquiryTypeAfterSales: 'After-sales support',
  },
  zh: {
    trackedOutput: '重点数量',
    launchCount: '当前版本展示的重点设备数量',
    storyLink: '查看品牌介绍',
    articleOpen: '查看详情',
    articleMissing: '未找到文章。',
    productMissing: '未找到产品。',
    inquireProduct: '咨询这款设备',
    productCatalogEyebrow: '产品目录',
    productCatalogTitle: '产品目录',
    productCatalogBody: '官网产品分类将按品牌逻辑重新组织，而不是照搬平台店铺结构。',
    companyEyebrow: '品牌介绍',
    articlesEyebrow: '文章',
    articlesTitle: '知识与应用文章',
    articlesBody: '文章栏目独立存在，聚焦产品知识、行业科普与应用场景。',
    inquiryEyebrow: '询盘',
    formName: '姓名',
    formNamePlaceholder: '请输入姓名',
    formEmail: '邮箱',
    formCompany: '公司',
    formCompanyPlaceholder: '请输入公司名称',
    formProduct: '关注产品',
    formInquiryType: '询盘类型',
    formDetails: '需求内容',
    formDetailsPlaceholder: '请填写产品、工况、数量或地区需求',
    formEmailPlaceholder: 'name@company.com',
    formSubmit: '提交需求',
    formResponseNote: '询盘流转会在部署和域名接入阶段完成。',
    productPositioning: '核心说明',
    productConfig: '配置方向',
    productFamilyLabel: '产品系列',
    productAllFamilies: '全部',
    inquiryTypeGeneral: '常规咨询',
    inquiryTypeQuote: '获取报价',
    inquiryTypeDistributor: '渠道/合作',
    inquiryTypeAfterSales: '售后支持',
  },
  ar: {
    trackedOutput: 'حجم الإطلاق',
    launchCount: 'عدد الآلات الرئيسية المعروضة في هذا الإصدار',
    storyLink: 'اقرأ قصة العلامة',
    articleOpen: 'فتح المقال',
    articleMissing: 'المقال غير موجود.',
    productMissing: 'المنتج غير موجود.',
    inquireProduct: 'استفسر عن هذه الآلة',
    productCatalogEyebrow: 'المنتجات',
    productCatalogTitle: 'كتالوج المنتجات',
    productCatalogBody: 'يجب أن ينظم كتالوج الموقع وفق منطق العلامة التجارية وليس وفق هيكل المنصة الأصلية.',
    companyEyebrow: 'الشركة',
    articlesEyebrow: 'المقالات',
    articlesTitle: 'مقالات المعرفة والتطبيقات',
    articlesBody: 'قسم المقالات مستقل ويركز على معرفة المنتجات والتعليم الصناعي وسيناريوهات الاستخدام.',
    inquiryEyebrow: 'الاستفسار',
    formName: 'الاسم',
    formNamePlaceholder: 'اسمك',
    formEmail: 'البريد الإلكتروني',
    formCompany: 'الشركة',
    formCompanyPlaceholder: 'اسم شركتك',
    formProduct: 'المنتج المطلوب',
    formInquiryType: 'نوع الاستفسار',
    formDetails: 'تفاصيل الاستفسار',
    formDetailsPlaceholder: 'اذكر المنتج، وسيناريو التشغيل، والكمية، والسوق المستهدف',
    formEmailPlaceholder: 'name@company.com',
    formSubmit: 'إرسال الاستفسار',
    formResponseNote: 'سيتم استكمال مسار الاستفسار أثناء إعداد النشر والنطاق.',
    productPositioning: 'التموضع',
    productConfig: 'ملامح التكوين',
    productFamilyLabel: 'عائلات المنتجات',
    productAllFamilies: 'الكل',
    inquiryTypeGeneral: 'استفسار عام',
    inquiryTypeQuote: 'طلب عرض سعر',
    inquiryTypeDistributor: 'موزع / شريك',
    inquiryTypeAfterSales: 'دعم ما بعد البيع',
  },
  ru: {
    trackedOutput: 'Объем запуска',
    launchCount: 'Количество флагманских машин в текущем релизе',
    storyLink: 'О бренде',
    articleOpen: 'Открыть статью',
    articleMissing: 'Статья не найдена.',
    productMissing: 'Товар не найден.',
    inquireProduct: 'Запросить информацию об этой машине',
    productCatalogEyebrow: 'Продукция',
    productCatalogTitle: 'Каталог продукции',
    productCatalogBody:
      'Каталог сайта должен быть выстроен по логике бренда, а не повторять структуру маркетплейса.',
    companyEyebrow: 'Компания',
    articlesEyebrow: 'Статьи',
    articlesTitle: 'Статьи о знаниях и применении',
    articlesBody:
      'Раздел статей существует отдельно и посвящен знаниям о продукции, отраслевым материалам и сценариям применения.',
    inquiryEyebrow: 'Запрос',
    formName: 'Имя',
    formNamePlaceholder: 'Ваше имя',
    formEmail: 'Email',
    formCompany: 'Компания',
    formCompanyPlaceholder: 'Название компании',
    formProduct: 'Интересующий продукт',
    formInquiryType: 'Тип запроса',
    formDetails: 'Детали запроса',
    formDetailsPlaceholder: 'Укажите продукт, сценарий работы, объем и целевой рынок',
    formEmailPlaceholder: 'name@company.com',
    formSubmit: 'Отправить запрос',
    formResponseNote: 'Маршрутизация запроса будет завершена на этапе деплоя и подключения домена.',
    productPositioning: 'Позиционирование',
    productConfig: 'Конфигурация',
    productFamilyLabel: 'Семейства продукции',
    productAllFamilies: 'Все',
    inquiryTypeGeneral: 'Общий запрос',
    inquiryTypeQuote: 'Запрос цены',
    inquiryTypeDistributor: 'Дистрибьютор / партнер',
    inquiryTypeAfterSales: 'Послепродажная поддержка',
  },
} satisfies Record<
  Locale,
  {
    trackedOutput: string
    launchCount: string
    storyLink: string
    articleOpen: string
    articleMissing: string
    productMissing: string
    inquireProduct: string
    productCatalogEyebrow: string
    productCatalogTitle: string
    productCatalogBody: string
    companyEyebrow: string
    articlesEyebrow: string
    articlesTitle: string
    articlesBody: string
    inquiryEyebrow: string
    formName: string
    formNamePlaceholder: string
    formEmail: string
    formCompany: string
    formCompanyPlaceholder: string
    formProduct: string
    formInquiryType: string
    formDetails: string
    formDetailsPlaceholder: string
    formEmailPlaceholder: string
    formSubmit: string
    formResponseNote: string
    productPositioning: string
    productConfig: string
    productFamilyLabel: string
    productAllFamilies: string
    inquiryTypeGeneral: string
    inquiryTypeQuote: string
    inquiryTypeDistributor: string
    inquiryTypeAfterSales: string
  }
>

export const homeDesignCopy = {
  en: {
    signals: ['Heavy-duty visual language', 'Global-ready reading structure', 'Direct inquiry path'],
    identityFrame: 'Identity frame',
    identityItems: ['Dark material base', 'Strict mechanical geometry', 'Focused CAT-inspired yellow accents'],
  },
  zh: {
    signals: ['重工业视觉语言', '面向国际阅读的结构', '直接可用的询盘路径'],
    identityFrame: '品牌骨架',
    identityItems: ['深色工业基底', '严格的机械几何感', '聚焦式工程黄点缀'],
  },
  ar: {
    signals: ['لغة بصرية ثقيلة', 'هيكل قراءة جاهز للعالم', 'مسار استفسار مباشر'],
    identityFrame: 'إطار الهوية',
    identityItems: ['قاعدة داكنة بطابع صناعي', 'هندسة ميكانيكية صارمة', 'لمسات صفراء مستوحاة من CAT'],
  },
  ru: {
    signals: ['Тяжелый визуальный язык', 'Структура чтения для глобальной аудитории', 'Прямой путь к запросу'],
    identityFrame: 'Каркас идентичности',
    identityItems: ['Темная индустриальная база', 'Строгая механическая геометрия', 'Акцентный желтый в духе CAT'],
  },
} satisfies Record<Locale, { signals: string[]; identityFrame: string; identityItems: string[] }>

export const storyDesignCopy = {
  en: {
    signalLabel: 'Signal',
    brandPosture: 'Brand posture',
    brandPostureValue: 'Industrial / direct',
    catalogLogic: 'Catalog logic',
    catalogLogicValue: 'Family-first',
    globalReading: 'Global reading',
    globalReadingValue: 'EN + multi-language',
    positioning: 'Positioning',
    positioningTitle: 'A sharper global shell around practical machinery.',
    positioningBody:
      'Jiuyu does not need a generic export-site tone. The stronger move is a disciplined industrial voice that makes products easier to trust, easier to compare, and easier to inquire about from abroad.',
    siteShouldDo: 'What the site should do',
    siteGoals: [
      'Show serious equipment without catalog clutter',
      'Turn social traffic into product understanding',
      'Support inquiries without overcomplicating the path',
      'Leave room for more products and more languages',
    ],
    nextPath: 'Next path',
    nextTitle: 'From brand story to product depth.',
    exploreProducts: 'Explore products',
  },
  zh: {
    signalLabel: '信号',
    brandPosture: '品牌姿态',
    brandPostureValue: '工业 / 直接',
    catalogLogic: '目录逻辑',
    catalogLogicValue: '产品家族优先',
    globalReading: '全球阅读',
    globalReadingValue: '英文 + 多语言',
    positioning: '定位',
    positioningTitle: '为务实机械能力包上一层更锋利的全球化外壳。',
    positioningBody:
      'Jiuyu 不需要普通外贸站的口气。更强的方向是建立克制、直接的工业表达，让产品更容易被信任、比较和询盘。',
    siteShouldDo: '网站应该完成什么',
    siteGoals: ['展示严肃设备而非杂乱目录', '把社交流量转成产品理解', '承接询盘但不过度复杂', '为更多产品和语言预留空间'],
    nextPath: '下一步',
    nextTitle: '从品牌叙事进入更深的产品表达。',
    exploreProducts: '查看产品',
  },
  ar: {
    signalLabel: 'إشارة',
    brandPosture: 'وضع العلامة',
    brandPostureValue: 'صناعي / مباشر',
    catalogLogic: 'منطق الكتالوج',
    catalogLogicValue: 'الأسرة أولًا',
    globalReading: 'القراءة العالمية',
    globalReadingValue: 'الإنجليزية + تعدد اللغات',
    positioning: 'التموضع',
    positioningTitle: 'غلاف عالمي أكثر حدة حول آلات عملية.',
    positioningBody:
      'لا تحتاج Jiuyu إلى نبرة مواقع التصدير العامة. الاتجاه الأقوى هو صوت صناعي منضبط يجعل المنتجات أسهل في الثقة والمقارنة والاستفسار.',
    siteShouldDo: 'ما الذي يجب أن يفعله الموقع',
    siteGoals: [
      'عرض معدات جدية دون فوضى الكتالوج',
      'تحويل زيارات التواصل إلى فهم للمنتج',
      'دعم الاستفسارات دون تعقيد المسار',
      'ترك مساحة لمزيد من المنتجات واللغات',
    ],
    nextPath: 'المسار التالي',
    nextTitle: 'من قصة العلامة إلى عمق المنتج.',
    exploreProducts: 'استكشاف المنتجات',
  },
  ru: {
    signalLabel: 'Сигнал',
    brandPosture: 'Позиция бренда',
    brandPostureValue: 'Индустриально / прямо',
    catalogLogic: 'Логика каталога',
    catalogLogicValue: 'Сначала семейство',
    globalReading: 'Глобальное чтение',
    globalReadingValue: 'EN + мультиязычность',
    positioning: 'Позиционирование',
    positioningTitle: 'Более четкая глобальная оболочка вокруг практичной техники.',
    positioningBody:
      'Jiuyu не нужен тон типового экспортного сайта. Сильнее работает собранный индустриальный голос, который делает продукты понятнее, убедительнее и ближе к запросу.',
    siteShouldDo: 'Что должен делать сайт',
    siteGoals: [
      'Показывать серьезную технику без шума каталога',
      'Превращать соцтрафик в понимание продукта',
      'Поддерживать запросы без лишней сложности',
      'Оставлять место для новых продуктов и языков',
    ],
    nextPath: 'Следующий шаг',
    nextTitle: 'От истории бренда к глубине продукта.',
    exploreProducts: 'Смотреть продукты',
  },
} satisfies Record<
  Locale,
  {
    signalLabel: string
    brandPosture: string
    brandPostureValue: string
    catalogLogic: string
    catalogLogicValue: string
    globalReading: string
    globalReadingValue: string
    positioning: string
    positioningTitle: string
    positioningBody: string
    siteShouldDo: string
    siteGoals: string[]
    nextPath: string
    nextTitle: string
    exploreProducts: string
  }
>

export const articleDesignCopy = {
  en: {
    blocksSuffix: 'blocks',
    editorialRole: 'Editorial role',
    editorialTitle: 'The article tab builds trust before the first quote request.',
    editorialBody:
      'This section is not a blog for activity signals. It is a knowledge surface for product framing, application context, and international buyer confidence.',
    editorialPoints: [
      'Explain where a machine fits',
      'Reduce ambiguity for first-time buyers',
      'Give X traffic something worth reading',
    ],
    readingIntent: 'Reading intent',
    readingPoints: [
      'Built to support product understanding, not content volume.',
      'Short, direct articles match the industrial tone of the site.',
      'Future long-form knowledge pieces can expand from this structure.',
    ],
  },
  zh: {
    blocksSuffix: '段',
    editorialRole: '栏目角色',
    editorialTitle: '文章栏目在第一次报价请求之前建立信任。',
    editorialBody: '这里不是为了显得活跃而写博客，而是为产品理解、应用场景和国际买家信心服务的知识界面。',
    editorialPoints: ['解释设备适合什么场景', '减少首次买家的理解偏差', '让 X 导流过来的访客有内容可读'],
    readingIntent: '阅读意图',
    readingPoints: ['服务产品理解，而不是追求内容量', '短而直接的文章更符合工业站气质', '后续可在此基础上扩展长文知识内容'],
  },
  ar: {
    blocksSuffix: 'مقاطع',
    editorialRole: 'الدور التحريري',
    editorialTitle: 'قسم المقالات يبني الثقة قبل أول طلب عرض سعر.',
    editorialBody: 'هذا القسم ليس مدونة لإظهار النشاط، بل مساحة معرفة لشرح المنتج وسياق الاستخدام وتعزيز ثقة المشتري الدولي.',
    editorialPoints: ['شرح أين تناسب كل آلة', 'تقليل الغموض للمشتري لأول مرة', 'منح زوار X شيئًا يستحق القراءة'],
    readingIntent: 'نية القراءة',
    readingPoints: ['مصمم لدعم فهم المنتج لا لتكديس المحتوى', 'المقالات القصيرة والمباشرة تلائم النبرة الصناعية', 'يمكن توسيع هذا الهيكل لاحقًا إلى مقالات أطول'],
  },
  ru: {
    blocksSuffix: 'блоков',
    editorialRole: 'Редакционная роль',
    editorialTitle: 'Раздел статей создает доверие еще до первого запроса цены.',
    editorialBody: 'Это не блог ради признаков активности, а слой знаний для понимания продукта, сценариев применения и уверенности международного покупателя.',
    editorialPoints: ['Объяснять, где машина уместна', 'Снижать неоднозначность для первого покупателя', 'Давать трафику из X что-то стоящее для чтения'],
    readingIntent: 'Задача чтения',
    readingPoints: ['Раздел поддерживает понимание продукта, а не объем контента', 'Короткие прямые статьи соответствуют индустриальному тону сайта', 'Позже эту структуру можно расширить в длинные материалы'],
  },
} satisfies Record<
  Locale,
  {
    blocksSuffix: string
    editorialRole: string
    editorialTitle: string
    editorialBody: string
    editorialPoints: string[]
    readingIntent: string
    readingPoints: string[]
  }
>

export const productDesignCopy = {
  en: {
    useCaseFraming: 'Use case framing',
    useCaseTitle: 'Built to read as equipment, not as a listing.',
    useCaseBody:
      'The product page should help buyers understand the machine category, the practical configuration cues, and the overall seriousness of Jiuyu as a supplier. Strong visual hierarchy matters as much as raw specs.',
    inquiryFit: 'Inquiry fit',
    inquiryPoints: [
      'Best used when the buyer already knows the machine family.',
      'Supports first-pass evaluation before email or WhatsApp contact.',
      'Leaves room for richer technical sheets in a later release.',
    ],
  },
  zh: {
    useCaseFraming: '使用场景表达',
    useCaseTitle: '让页面读起来像设备介绍，而不是一条商品 listing。',
    useCaseBody:
      '产品页应帮助买家理解设备类别、关键配置方向，以及 Jiuyu 作为供应方的专业度。清晰的信息层级和原始参数同样重要。',
    inquiryFit: '询盘适配',
    inquiryPoints: ['适合已经知道设备家族的大致买家', '在邮件或 WhatsApp 前支持首轮判断', '为后续更完整的技术资料页预留空间'],
  },
  ar: {
    useCaseFraming: 'صياغة الاستخدام',
    useCaseTitle: 'يجب أن تُقرأ الصفحة كصفحة معدات لا كقائمة بيع.',
    useCaseBody:
      'يجب أن تساعد صفحة المنتج المشتري على فهم فئة الآلة وإشارات التكوين العملية وجدية Jiuyu كمورد. التسلسل البصري القوي مهم بقدر أهمية المواصفات.',
    inquiryFit: 'ملاءمة الاستفسار',
    inquiryPoints: [
      'أفضل عندما يعرف المشتري عائلة الآلة مسبقًا',
      'تدعم التقييم الأولي قبل البريد أو WhatsApp',
      'تترك مساحة لملفات تقنية أعمق في الإصدارات اللاحقة',
    ],
  },
  ru: {
    useCaseFraming: 'Подача применения',
    useCaseTitle: 'Страница должна читаться как страница оборудования, а не как listing.',
    useCaseBody:
      'Страница продукта должна помогать понять категорию машины, практические конфигурационные ориентиры и серьезность Jiuyu как поставщика. Сильная иерархия так же важна, как и сами спецификации.',
    inquiryFit: 'Соответствие запросу',
    inquiryPoints: [
      'Лучше всего работает, когда покупатель уже знает семейство машины',
      'Поддерживает первую оценку до email или WhatsApp',
      'Оставляет место для более подробных техлистов в следующем релизе',
    ],
  },
} satisfies Record<
  Locale,
  {
    useCaseFraming: string
    useCaseTitle: string
    useCaseBody: string
    inquiryFit: string
    inquiryPoints: string[]
  }
>

export type ProductFamily = 'clay-preparation' | 'forming-equipment' | 'mixing-systems'

export const productFamilyCopy = {
  'clay-preparation': {
    en: 'Clay Preparation',
    zh: '泥料准备',
    ar: 'تحضير الطين',
    ru: 'Подготовка глины',
  },
  'forming-equipment': {
    en: 'Forming Equipment',
    zh: '成型设备',
    ar: 'معدات التشكيل',
    ru: 'Формовочное оборудование',
  },
  'mixing-systems': {
    en: 'Mixing Systems',
    zh: '搅拌系统',
    ar: 'أنظمة الخلط',
    ru: 'Системы смешивания',
  },
} satisfies Record<ProductFamily, Record<Locale, string>>

export type Product = {
  slug: string
  family: ProductFamily
  category: Record<Locale, string>
  image: string
  imageAlt: Record<Locale, string>
  imageLabel: Record<Locale, string>
  specs: Record<Locale, string[]>
  accent: string
  title: Record<Locale, string>
  summary: Record<Locale, string>
  detail: Record<Locale, string>
}

export type Article = {
  slug: string
  tag: Record<Locale, string>
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
  ar: [
    { label: 'المنتجات', href: '/products' },
    { label: 'القصة', href: '/story' },
    { label: 'المقالات', href: '/articles' },
    { label: 'اتصل', href: '/contact' },
  ],
  ru: [
    { label: 'Продукция', href: '/products' },
    { label: 'О бренде', href: '/story' },
    { label: 'Статьи', href: '/articles' },
    { label: 'Контакты', href: '/contact' },
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
  ar: {
    eyebrow: 'عرض عالمي للآلات الصناعية',
    title: 'مصمم للبيئات الشاقة والوتيرة الثقيلة وللمشترين الذين لا يريدون ضجيجًا تسويقيًا.',
    intro:
      'تقدم Jiuyu Machinery معدات ثقيلة بلغة علامة أكثر انضباطًا وعمقًا. صُمم هذا الموقع لمساعدة الزوار العالميين على فهم من نحن، وما الذي نبنيه، وكيف يمكن بدء تواصل جاد بسرعة.',
    primaryCta: 'استكشف المنتجات الرئيسية',
    secondaryCta: 'ابدأ استفسارًا',
    trustTitle: 'ما الذي يجب أن تثبته هذه النسخة الأولى',
    trustItems: [
      'يجب أن تبدو Jiuyu Machinery علامة صناعية موثوقة لا كتالوجًا عامًا بلا شخصية.',
      'يجب أن يتصفح الزوار العالميون الموقع بسلاسة، خصوصًا من X والأجهزة المحمولة.',
      'يجب تنظيم المحتوى وفق وضوح العلامة التجارية لا وفق فوضى المنصات التجارية.',
    ],
    productTitle: 'الآلات الرئيسية',
    articleTitle: 'أحدث الملاحظات الميدانية',
    articleLink: 'اقرأ المقال',
    storyTitle: 'ثقة صناعية بصوت عالمي أكثر وضوحًا',
    storyBody:
      'يعتمد النظام البصري على أسطح داكنة، وإطارات بنيوية، ولمسات صفراء حادة مستوحاة من هوية المعدات الثقيلة أكثر من تصميمات الويب الاستهلاكية.',
  },
  ru: {
    eyebrow: 'Глобальная витрина промышленного оборудования',
    title: 'Создано для тяжелых условий, плотных графиков и покупателей, которым не нужен лишний шум.',
    intro:
      'Jiuyu Machinery показывает тяжелое оборудование через более собранный и индустриальный язык бренда. Сайт помогает международным посетителям быстро понять, кто мы, что производим и как начать предметный диалог.',
    primaryCta: 'Посмотреть флагманские продукты',
    secondaryCta: 'Отправить запрос',
    trustTitle: 'Что должна доказать первая версия',
    trustItems: [
      'Jiuyu Machinery должна восприниматься как убедительный промышленный бренд, а не как безликий каталог.',
      'Международные посетители должны просматривать сайт плавно, особенно из X и с мобильных устройств.',
      'Продуктовый контент должен быть организован вокруг логики бренда, а не вокруг рыночного хаоса.',
    ],
    productTitle: 'Флагманская техника',
    articleTitle: 'Последние заметки',
    articleLink: 'Читать статью',
    storyTitle: 'Индустриальная уверенность с более чистым глобальным голосом',
    storyBody:
      'Визуальная система строится на темных поверхностях, структурных линиях и резких желтых акцентах, ближе к брендингу тяжелой техники, чем к потребительскому веб-дизайну.',
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
  ar: {
    title: 'قصة Jiuyu Machinery',
    intro:
      'يعرّف هذا الموقع Jiuyu Machinery كعلامة صناعية أكثر تركيزًا. الهدف الأول ليس الحجم، بل الوضوح: تموضع أقوى، وفئات أوضح، وسرد دولي أفضل من صفحة منصة تجارية.',
    pillars: [
      ['العلامة', 'هوية صناعية داكنة مستوحاة من علامات المعدات الجادة.'],
      ['المنتجات', 'آلات رئيسية على الصفحة الأولى وتغطية أوسع داخل الكتالوج.'],
      ['المعرفة', 'تبويب مقالات مخصص لمعرفة المنتجات وسيناريوهات الاستخدام الفعلية.'],
    ],
  },
  ru: {
    title: 'История Jiuyu Machinery',
    intro:
      'Этот сайт представляет Jiuyu Machinery как более сфокусированный промышленный бренд. Первая задача здесь не объем, а ясность: более сильное позиционирование, более понятные категории и глобальный рассказ, которого не даст профиль маркетплейса.',
    pillars: [
      ['Бренд', 'Более темная индустриальная идентичность, вдохновленная серьезными брендами техники.'],
      ['Продукты', 'Флагманские машины на главной, более широкое покрытие глубже в каталоге.'],
      ['Знания', 'Отдельная вкладка статей о продукции и реальных сценариях применения.'],
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
  ar: {
    title: 'افتح استفسارًا',
    intro:
      'يجب أن يبقى مسار التواصل مباشرًا. البريد الإلكتروني وWhatsApp والنموذج الخفيف تكفي للنسخة الأولى.',
    channels: [
      ['البريد', 'sales@jiuyumachinery.com'],
      ['واتساب', '+86 188 0000 0000'],
      ['الاستجابة', 'رد منظم خلال يوم عمل واحد'],
    ],
  },
  ru: {
    title: 'Открыть запрос',
    intro:
      'Контактный путь должен оставаться прямым. Email, WhatsApp и легкая форма достаточно хороши для первой версии.',
    channels: [
      ['Email', 'sales@jiuyumachinery.com'],
      ['WhatsApp', '+86 188 0000 0000'],
      ['Ответ', 'Структурированный ответ в течение одного рабочего дня'],
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
    family: 'clay-preparation',
    category: {
      en: 'Clay Processing',
      zh: '泥料处理',
      ar: 'معالجة الطين',
      ru: 'Обработка глины',
    },
    image: assetPath('/images/products/mud-machine-diesel.jpg'),
    imageAlt: {
      en: 'Diesel mud machine from Jiuyu Machinery',
      zh: 'Jiuyu Machinery 柴油泥料机',
      ar: 'آلة طين ديزل من Jiuyu Machinery',
      ru: 'Дизельная машина для глины от Jiuyu Machinery',
    },
    imageLabel: {
      en: 'Diesel mud machine',
      zh: '柴油泥料机',
      ar: 'آلة طين ديزل',
      ru: 'Дизельная машина для глины',
    },
    specs: {
      en: ['Tractor engine drive', 'Adjustable extrusion speed', 'CE-ready equipment'],
      zh: ['拖拉机柴油驱动', '挤出速度可调', '适合 CE 出口方案'],
      ar: ['دفع بمحرك جرار', 'سرعة بثق قابلة للتعديل', 'معدات جاهزة للتصدير وفق CE'],
      ru: ['Привод от тракторного двигателя', 'Регулируемая скорость экструзии', 'Оборудование подготовлено под CE'],
    },
    accent: 'amber',
    title: {
      en: 'Diesel Mud Machine',
      zh: '柴油泥料机',
      ar: 'آلة طين ديزل',
      ru: 'Дизельная машина для глины',
    },
    summary: {
      en: 'A heavy-duty clay processing machine built for steady extrusion and workshop-grade reliability.',
      zh: '面向陶泥与泥料处理场景，强调稳定挤出和连续作业能力。',
      ar: 'آلة قوية لمعالجة الطين صممت للبثق المستقر والاعتمادية المناسبة لورش العمل.',
      ru: 'Тяжелая машина для обработки глины, рассчитанная на стабильную экструзию и надежную работу в мастерской.',
    },
    detail: {
      en: 'This machine is a strong flagship candidate because it immediately communicates industrial function, mechanical structure, and Jiuyu’s manufacturing capability.',
      zh: '这款设备很适合作为首页重点产品，它能直接体现 Jiuyu 的机械结构感、设备用途和制造能力。',
      ar: 'هذه الآلة مناسبة جدًا كمنتج رئيسي على الصفحة الأولى لأنها تنقل مباشرة الوظيفة الصناعية والبنية الميكانيكية وقدرة Jiuyu التصنيعية.',
      ru: 'Эта машина хорошо подходит для главной страницы как флагман: она сразу показывает промышленную функцию, механику и производственные возможности Jiuyu.',
    },
  },
  {
    slug: 'clay-roller-manual',
    family: 'forming-equipment',
    category: {
      en: 'Forming',
      zh: '成型设备',
      ar: 'التشكيل',
      ru: 'Формование',
    },
    image: assetPath('/images/products/clay-roller-manual.jpg'),
    imageAlt: {
      en: 'Manual clay roller machine from Jiuyu Machinery',
      zh: 'Jiuyu Machinery 手动压泥机',
      ar: 'آلة درفلة طين يدوية من Jiuyu Machinery',
      ru: 'Ручная машина для раскатки глины от Jiuyu Machinery',
    },
    imageLabel: {
      en: 'Manual clay roller',
      zh: '手动压泥机',
      ar: 'درفلة طين يدوية',
      ru: 'Ручной ролик для глины',
    },
    specs: {
      en: ['No electricity required', 'Manual pressure control', 'Compact workshop footprint'],
      zh: ['无需用电', '手动压力控制', '适合紧凑工坊空间'],
      ar: ['لا تحتاج إلى كهرباء', 'تحكم يدوي في الضغط', 'تشغل مساحة صغيرة في الورشة'],
      ru: ['Не требует электричества', 'Ручной контроль давления', 'Компактный формат для мастерской'],
    },
    accent: 'steel',
    title: {
      en: 'Manual Clay Roller Machine',
      zh: '手动压泥机',
      ar: 'آلة درفلة طين يدوية',
      ru: 'Ручная машина для раскатки глины',
    },
    summary: {
      en: 'A compact forming machine for smaller workshops that still need disciplined mechanical output.',
      zh: '适合小型工坊与工作室的成型设备，强调紧凑结构与稳定输出。',
      ar: 'آلة تشكيل مدمجة للورش الصغيرة التي ما زالت تحتاج إلى خرج ميكانيكي منضبط.',
      ru: 'Компактная формовочная машина для небольших мастерских, которым все равно нужен стабильный механический результат.',
    },
    detail: {
      en: 'This model helps the site show range: Jiuyu is not only about larger processing units, but also practical equipment for smaller production environments.',
      zh: '这款设备可以帮助官网展示产品覆盖面，说明 Jiuyu 不只是做大型设备，也能服务更灵活的生产场景。',
      ar: 'يساعد هذا الطراز الموقع على إظهار اتساع التغطية: Jiuyu لا تقدم فقط الوحدات الكبيرة، بل أيضًا المعدات العملية لبيئات الإنتاج الصغيرة.',
      ru: 'Эта модель помогает показать диапазон бренда: Jiuyu делает не только крупные установки, но и практичное оборудование для более гибких производственных сред.',
    },
  },
  {
    slug: 'mud-squeezing-pug-mill',
    family: 'mixing-systems',
    category: {
      en: 'Mixing & Extrusion',
      zh: '搅拌与挤出',
      ar: 'الخلط والبثق',
      ru: 'Смешивание и экструзия',
    },
    image: assetPath('/images/products/mud-squeezing-pug-mill.jpg'),
    imageAlt: {
      en: 'Mud squeezing and mixing machine from Jiuyu Machinery',
      zh: 'Jiuyu Machinery 挤泥搅拌机',
      ar: 'آلة خلط وعصر الطين من Jiuyu Machinery',
      ru: 'Машина для смешивания и выдавливания глины от Jiuyu Machinery',
    },
    imageLabel: {
      en: 'Pug mill system',
      zh: '挤泥搅拌系统',
      ar: 'نظام خلط وبثق',
      ru: 'Система pug mill',
    },
    specs: {
      en: ['Mud mixing line', 'Customized outlet options', 'Continuous squeezing workflow'],
      zh: ['泥料搅拌工序', '支持定制出泥口', '连续挤出作业流程'],
      ar: ['خط خلط للطين', 'خيارات مخرج قابلة للتخصيص', 'تدفق بثق مستمر'],
      ru: ['Линия смешивания глины', 'Настраиваемые варианты выхода', 'Непрерывный цикл выдавливания'],
    },
    accent: 'graphite',
    title: {
      en: 'Mud Squeezing Pug Mill',
      zh: '挤泥搅拌机',
      ar: 'آلة عصر وخلط الطين',
      ru: 'Pug mill для выдавливания глины',
    },
    summary: {
      en: 'A combined mixing and extrusion machine suited to more complete clay preparation lines.',
      zh: '兼顾搅拌与挤出能力，适合更完整的泥料准备和连续作业流程。',
      ar: 'آلة تجمع بين الخلط والبثق وتناسب خطوط إعداد الطين الأكثر تكاملًا.',
      ru: 'Комбинированная машина для смешивания и экструзии, подходящая для более полных линий подготовки глины.',
    },
    detail: {
      en: 'This product gives the catalog a stronger systems story. It suggests Jiuyu can present coordinated processing capability instead of isolated equipment only.',
      zh: '这类设备能让目录更像一个完整机械方案，而不是只展示零散单机，更适合建立品牌专业度。',
      ar: 'يمنح هذا المنتج الكتالوج قصة أقوى على مستوى النظام، ويشير إلى أن Jiuyu قادرة على تقديم قدرات معالجة متكاملة لا معدات منفصلة فقط.',
      ru: 'Этот продукт делает каталог более системным и показывает, что Jiuyu может предлагать согласованные производственные решения, а не только отдельные машины.',
    },
  },
]

export const articles: Article[] = [
  {
    slug: 'how-to-present-heavy-machinery-online',
    tag: {
      en: 'Brand systems',
      zh: '品牌体系',
      ar: 'أنظمة العلامة',
      ru: 'Бренд-система',
    },
    title: {
      en: 'How heavy machinery should be presented online',
      zh: '重型机械应该如何在线上呈现',
      ar: 'كيف يجب تقديم الآلات الثقيلة على الإنترنت',
      ru: 'Как тяжелую технику следует представлять онлайн',
    },
    excerpt: {
      en: 'Why industrial buyers respond better to clarity, structure, and credible product framing than to aggressive sales language.',
      zh: '为什么工业设备买家更看重清晰结构、可信表达和应用场景，而不是激进的销售式文案。',
      ar: 'لماذا يستجيب المشترون الصناعيون بشكل أفضل للوضوح والبنية والتقديم الموثوق للمنتج بدلًا من لغة البيع العدوانية.',
      ru: 'Почему промышленным покупателям лучше заходят ясность, структура и убедительная подача продукта, чем агрессивные продажи.',
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
      ar: [
        'يجب أن يقلل موقع الآلات الجاد من الضجيج. يريد المشترون تحديد نوع المنتج وسياق التشغيل وثقة المورد بسرعة.',
        'هذا يعني أن صفحات المنتجات يجب أن توازن بين الجو البصري والمعلومة الجوهرية. يمكن أن يبدو التصميم قويًا، لكن يجب أن يبقى المحتوى سهل المسح.',
      ],
      ru: [
        'Серьезный сайт о технике должен убирать шум. Покупатели хотят быстро понять тип продукта, контекст работы и надежность поставщика.',
        'Это значит, что страницы продуктов должны сочетать атмосферу и содержание. Дизайн может быть сильным, но информация все равно должна легко считываться.',
      ],
    },
  },
  {
    slug: 'why-global-machinery-sites-need-owned-assets',
    tag: {
      en: 'Content operations',
      zh: '内容运营',
      ar: 'تشغيل المحتوى',
      ru: 'Контент-операции',
    },
    title: {
      en: 'Why global machinery sites need owned media assets',
      zh: '为什么国际机械站需要自有图片资产',
      ar: 'لماذا تحتاج مواقع الآلات العالمية إلى أصول وسائط مملوكة',
      ru: 'Почему глобальным сайтам техники нужны собственные медиаресурсы',
    },
    excerpt: {
      en: 'If product images only live on marketplace links, site speed, reliability, and brand control all become fragile.',
      zh: '如果产品图片长期依赖第三方平台链接，站点速度、稳定性和品牌控制力都会很脆弱。',
      ar: 'إذا كانت صور المنتجات موجودة فقط في روابط المنصات التجارية، تصبح السرعة والاعتمادية والتحكم في العلامة التجارية هشة.',
      ru: 'Если изображения продуктов живут только на ссылках маркетплейса, скорость сайта, надежность и контроль бренда становятся хрупкими.',
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
      ar: [
        'امتلاك الأصول المرئية يجعل العلامة أكثر اتساقًا ويجعل النشر أكثر موثوقية، كما يقلل مخاطر الروابط المعطلة أثناء الحملات.',
        'بالنسبة لإطلاق Jiuyu، امتلاك الصور جزء من تجربة المنتج نفسها، وليس تفصيلًا تقنيًا ثانويًا.',
      ],
      ru: [
        'Собственные медиаресурсы делают бренд более последовательным и публикацию более надежной. Они также уменьшают риск битых ссылок во время кампаний.',
        'Для запуска Jiuyu владение изображениями является частью продуктового опыта, а не технической мелочью.',
      ],
    },
  },
]
