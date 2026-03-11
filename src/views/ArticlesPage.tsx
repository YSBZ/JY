import { Link } from 'react-router-dom'

import { articleDesignCopy, articles, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function ArticlesPage() {
  const { locale } = useLocale()
  const ui = uiCopy[locale]
  const design = articleDesignCopy[locale]

  return (
    <div className="py-14">
      <PageSection className="overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%),linear-gradient(180deg,rgba(241,190,50,0.07),transparent_40%)]">
        <SectionTitle
          eyebrow={ui.articlesEyebrow}
          title={ui.articlesTitle}
          body={ui.articlesBody}
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_320px]">
          <div className="grid gap-5">
            {articles.map((article, index) => (
              <article
                key={article.slug}
                className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl transition hover:border-amber-300/25"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{article.tag[locale]}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">0{index + 1}</span>
                </div>
                <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{article.title[locale]}</h3>
                <p className="mt-3 max-w-3xl text-lg leading-7 text-stone-400">{article.excerpt[locale]}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span className="text-sm text-stone-500">{article.body[locale].length} {design.blocksSuffix}</span>
                  <Link
                    className="inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-amber-300"
                    to={`/articles/${article.slug}`}
                  >
                    {ui.articleOpen}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <aside className="border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">{design.editorialRole}</p>
            <h3 className="mt-3 font-['Oxanium'] text-3xl leading-[0.95] text-stone-100">
              {design.editorialTitle}
            </h3>
            <p className="mt-4 text-lg leading-7 text-stone-400">{design.editorialBody}</p>
            <div className="mt-6 grid gap-3">
              {design.editorialPoints.map((item) => (
                <div key={item} className="border border-white/10 bg-zinc-950/80 px-4 py-3 text-base text-stone-300">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </PageSection>
    </div>
  )
}
