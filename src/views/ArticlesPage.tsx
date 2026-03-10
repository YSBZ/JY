import { Link } from 'react-router-dom'

import { articles } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function ArticlesPage() {
  const { locale } = useLocale()

  return (
    <div className="py-14">
      <PageSection>
        <SectionTitle
          eyebrow="Articles"
          title={locale === 'zh' ? '知识与应用文章' : 'Knowledge and application articles'}
          body={
            locale === 'zh'
              ? '文章栏目独立存在，聚焦产品知识、行业科普与应用场景。'
              : 'The article tab is a standalone stream for product know-how, industry education, and use-case stories.'
          }
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{article.tag}</span>
              <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{article.title[locale]}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{article.excerpt[locale]}</p>
              <Link
                className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-amber-300"
                to={`/articles/${article.slug}`}
              >
                {locale === 'zh' ? '查看详情' : 'Open article'}
              </Link>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  )
}
