import { Link } from 'react-router-dom'

import { products, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function ProductsPage() {
  const { locale } = useLocale()
  const ui = uiCopy[locale]

  return (
    <div className="py-14">
      <PageSection>
        <SectionTitle
          eyebrow={ui.productCatalogEyebrow}
          title={ui.productCatalogTitle}
          body={ui.productCatalogBody}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/35"
              to={`/products/${product.slug}`}
            >
              <img
                alt={product.imageAlt[locale]}
                className="mb-4 h-52 w-full border border-white/10 object-cover"
                src={product.image}
              />
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{product.category[locale]}</div>
              <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{product.title[locale]}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{product.summary[locale]}</p>
              <ul className="mt-5 list-disc pl-5 text-base leading-7 text-stone-400">
                {product.specs[locale].map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </PageSection>
    </div>
  )
}
