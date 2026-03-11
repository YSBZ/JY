import { Link } from 'react-router-dom'

import { articles, formatLocaleNumber, homeCopy, homeDesignCopy, productFamilyCopy, products, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function HomePage() {
  const { locale } = useLocale()
  const copy = homeCopy[locale]
  const ui = uiCopy[locale]
  const design = homeDesignCopy[locale]

  return (
    <div className="relative py-14">
      <PageSection className="site-hero grid gap-8 overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_50%),linear-gradient(180deg,rgba(241,190,50,0.06),transparent_40%)] lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:p-14">
        <div className="relative">
          <p className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 max-w-5xl font-['Oxanium'] text-[clamp(3rem,7vw,5.8rem)] leading-[0.92] text-balance text-stone-100">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-400">{copy.intro}</p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              className="inline-flex items-center justify-center border border-amber-200/80 bg-linear-to-br from-amber-200 to-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:-translate-y-0.5"
              to="/products"
            >
              {copy.primaryCta}
            </Link>
            <Link
              className="inline-flex items-center justify-center border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition hover:border-amber-300/35 hover:text-amber-300"
              to="/contact"
            >
              {copy.secondaryCta}
            </Link>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {design.signals.map((label, index) => (
              <div key={index} className="border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{formatLocaleNumber(locale, index + 1, 2)}</div>
                <p className="mt-2 text-base leading-6 text-stone-300">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden border border-white/10 bg-[linear-gradient(160deg,rgba(241,190,50,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_55%),#111519]">
          <img
            alt={products[0].imageAlt[locale]}
            className="h-full w-full object-cover opacity-80"
            src={products[0].image}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,19,0.18),rgba(15,17,19,0.72))]" />
          <div className="site-hero-metric absolute right-5 bottom-5 z-10 w-[min(280px,calc(100%-40px))] border border-amber-300/35 bg-black/80 p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">{ui.trackedOutput}</span>
            <strong className="mt-3 block font-['Oxanium'] text-6xl leading-none text-amber-300">
              {formatLocaleNumber(locale, products.length, 2)}
            </strong>
            <p className="mt-3 text-base leading-6 text-stone-400">{ui.launchCount}</p>
          </div>
          <div className="site-hero-label absolute top-5 left-5 z-10 border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              {productFamilyCopy[products[0].family][locale]}
            </div>
            <div className="mt-2 font-['Oxanium'] text-2xl text-stone-100">{products[0].title[locale]}</div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle eyebrow="001" title={copy.trustTitle} />
        <div className="grid gap-5 lg:grid-cols-3">
          {copy.trustItems.map((item) => (
            <article key={item} className="border border-white/10 bg-white/[0.03] p-5">
              <span className="mb-4 inline-flex h-0.5 w-6 bg-amber-300" />
              <p className="text-lg leading-7 text-stone-400">{item}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <section className="mt-14">
        <SectionTitle eyebrow="002" title={copy.productTitle} body={copy.storyBody} />
        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              className={[
                'group relative flex h-full flex-col overflow-hidden border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/35',
                product.accent === 'amber'
                  ? 'bg-[linear-gradient(180deg,rgba(241,190,50,0.14),transparent_50%),rgba(16,19,22,0.9)]'
                  : product.accent === 'steel'
                    ? 'bg-[linear-gradient(180deg,rgba(135,150,164,0.12),transparent_50%),rgba(16,19,22,0.9)]'
                    : 'bg-[linear-gradient(180deg,rgba(81,87,96,0.18),transparent_50%),rgba(16,19,22,0.9)]',
              ].join(' ')}
              to={`/products/${product.slug}`}
            >
              <img
                alt={product.imageAlt[locale]}
                className="mb-4 h-52 w-full border border-white/10 object-cover"
                src={product.image}
              />
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="text-amber-300">{productFamilyCopy[product.family][locale]}</span>
                <span className="text-stone-500">/</span>
                <span className="text-stone-400">{product.category[locale]}</span>
              </div>
              <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{product.title[locale]}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{product.summary[locale]}</p>
              <ul className="mt-5 list-disc pl-5 text-base leading-7 text-stone-400">
                {product.specs[locale].map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                  {ui.productOpen}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PageSection>
        <SectionTitle eyebrow="003" title={copy.storyTitle} />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_300px]">
          <div className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
            <p className="max-w-3xl text-lg leading-8 text-stone-400">{copy.storyBody}</p>
          </div>
          <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_38%),rgba(16,19,22,0.9)] p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{design.identityFrame}</p>
            <div className="mt-4 grid gap-3 text-base leading-7 text-stone-300">
              {design.identityItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <Link className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-amber-300" to="/story">
              {ui.storyLink}
            </Link>
          </div>
        </div>
      </PageSection>

      <section className="mt-14">
        <SectionTitle eyebrow="004" title={copy.articleTitle} />
        <div className="grid gap-5 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="flex h-full flex-col border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{article.tag[locale]}</span>
              <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{article.title[locale]}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{article.excerpt[locale]}</p>
              <Link
                className="mt-auto pt-6 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-amber-300"
                to={`/articles/${article.slug}`}
              >
                {copy.articleLink}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
