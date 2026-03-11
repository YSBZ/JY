import { useState } from 'react'
import { Link } from 'react-router-dom'

import { productFamilyCopy, products, type ProductFamily, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function ProductsPage() {
  const { locale } = useLocale()
  const ui = uiCopy[locale]
  const [activeFamily, setActiveFamily] = useState<'all' | ProductFamily>('all')
  const filteredProducts =
    activeFamily === 'all' ? products : products.filter((product) => product.family === activeFamily)

  return (
    <div className="py-14">
      <PageSection className="overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%),linear-gradient(180deg,rgba(241,190,50,0.08),transparent_42%)]">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
            <SectionTitle
              eyebrow={ui.productCatalogEyebrow}
              title={ui.productCatalogTitle}
              body={ui.productCatalogBody}
            />

            <div className="grid gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{ui.productFamilyLabel}</span>
              <button
                className={[
                  'family-filter flex items-center justify-between border px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] transition',
                  activeFamily === 'all'
                    ? 'border-amber-300/40 bg-amber-300/12 text-stone-100'
                    : 'border-white/10 bg-black/35 text-stone-400 hover:border-white/20 hover:text-stone-100',
                ].join(' ')}
                onClick={() => setActiveFamily('all')}
                type="button"
              >
                <span>{ui.productAllFamilies}</span>
                <span>{products.length}</span>
              </button>
              {(Object.keys(productFamilyCopy) as ProductFamily[]).map((family) => {
                const familyCount = products.filter((product) => product.family === family).length
                return (
                  <button
                    key={family}
                    className={[
                      'family-filter flex items-center justify-between border px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] transition',
                      activeFamily === family
                        ? 'border-amber-300/40 bg-amber-300/12 text-stone-100'
                        : 'border-white/10 bg-black/35 text-stone-400 hover:border-white/20 hover:text-stone-100',
                    ].join(' ')}
                    onClick={() => setActiveFamily(family)}
                    type="button"
                  >
                    <span>{productFamilyCopy[family][locale]}</span>
                    <span>{familyCount}</span>
                  </button>
                )
              })}
            </div>
          </aside>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <Link
                key={product.slug}
                className="flex h-full flex-col border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/35"
                to={`/products/${product.slug}`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{`0${index + 1}`}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                    {productFamilyCopy[product.family][locale]}
                  </span>
                </div>
                <img
                  alt={product.imageAlt[locale]}
                  className="mb-4 h-52 w-full border border-white/10 object-cover"
                  src={product.image}
                />
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
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
        </div>
      </PageSection>
    </div>
  )
}
