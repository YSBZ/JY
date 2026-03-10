import { Link } from 'react-router-dom'

import { articles, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function ArticlesPage() {
  const { locale } = useLocale()
  const ui = uiCopy[locale]

  return (
    <div className="py-14">
      <PageSection>
        <SectionTitle
          eyebrow={ui.articlesEyebrow}
          title={ui.articlesTitle}
          body={ui.articlesBody}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{article.tag[locale]}</span>
              <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{article.title[locale]}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{article.excerpt[locale]}</p>
              <Link
                className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-amber-300"
                to={`/articles/${article.slug}`}
              >
                {ui.articleOpen}
              </Link>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  )
}
