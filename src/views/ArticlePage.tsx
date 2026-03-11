import { Link, useParams } from 'react-router-dom'

import { articleDesignCopy, articles, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'

export function ArticlePage() {
  const { slug } = useParams()
  const { locale } = useLocale()
  const ui = uiCopy[locale]
  const design = articleDesignCopy[locale]
  const article = articles.find((item) => item.slug === slug)
  const relatedArticles = articles.filter((item) => item.slug !== slug).slice(0, 2)

  if (!article) {
    return (
      <div className="py-14">
        <p className="text-lg text-stone-300">{ui.articleMissing}</p>
      </div>
    )
  }

  return (
    <div className="py-14">
      <Link
        className="mb-5 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-400 transition hover:text-amber-300"
        to="/articles"
      >
        {ui.backToArticles}
      </Link>

      <PageSection className="max-w-[980px] overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_48%),linear-gradient(180deg,rgba(241,190,50,0.07),transparent_38%)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <p className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              {article.tag[locale]}
            </p>
            <h1 className="mt-3 font-['Oxanium'] text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.94] text-stone-100">
              {article.title[locale]}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-stone-400">{article.excerpt[locale]}</p>
            <div className="mt-8 max-w-3xl space-y-5">
              {article.body[locale].map((paragraph, index) => (
                <p key={paragraph} className="text-lg leading-8 text-stone-400">
                  <span className="mr-3 inline-block min-w-8 font-['Oxanium'] text-amber-300/80">{`0${index + 1}`}</span>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">{design.readingIntent}</p>
            <div className="mt-4 grid gap-3 text-base leading-7 text-stone-300">
              {design.readingPoints.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <Link
              className="mt-6 inline-flex items-center justify-center border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition hover:border-amber-300/35 hover:text-amber-300"
              to="/articles"
            >
              {ui.articlesTitle}
            </Link>
          </aside>
        </div>
      </PageSection>

      <section className="mt-8 max-w-[980px]">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-['Oxanium'] text-3xl text-stone-100">{ui.continueReading}</h2>
          <Link className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300" to="/articles">
            {ui.backToArticles}
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {relatedArticles.map((item) => (
            <Link
              key={item.slug}
              className="border border-white/10 bg-zinc-950/85 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/35"
              to={`/articles/${item.slug}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{item.tag[locale]}</span>
              <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{item.title[locale]}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{item.excerpt[locale]}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
