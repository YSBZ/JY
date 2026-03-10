import { useParams } from 'react-router-dom'

import { articles } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'

export function ArticlePage() {
  const { slug } = useParams()
  const { locale } = useLocale()
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <div className="py-14">
        <p className="text-lg text-stone-300">{locale === 'zh' ? '未找到文章。' : 'Article not found.'}</p>
      </div>
    )
  }

  return (
    <div className="py-14">
      <PageSection className="max-w-[880px]">
        <p className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
          {article.tag}
        </p>
        <h1 className="mt-3 font-['Oxanium'] text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.94] text-stone-100">
          {article.title[locale]}
        </h1>
        <div className="mt-6 max-w-3xl space-y-5">
          {article.body[locale].map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-stone-400">
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>
    </div>
  )
}
