import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { localeOptions, nav, shellCopy } from '../content/site'
import { useLocale } from '../state/locale'
import type { Locale } from '../content/site'

function LanguageToggle({ locale, onChange }: { locale: Locale; onChange: (locale: Locale) => void }) {
  return (
    <ToggleGroup.Root
      aria-label="Language switcher"
      className="inline-flex border border-white/10 bg-black/30 p-1"
      onValueChange={(value) => {
        if (value === 'en' || value === 'zh' || value === 'ar' || value === 'ru') {
          onChange(value)
        }
      }}
      type="single"
      value={locale}
    >
      {localeOptions.map((value) => (
        <ToggleGroup.Item
          key={value}
          className="cursor-pointer px-3 py-2 text-xs font-semibold tracking-[0.24em] text-stone-400 uppercase transition data-[state=on]:bg-amber-300/15 data-[state=on]:text-stone-100"
          value={value}
        >
          {value.toUpperCase()}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  )
}

function NavMenuLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <NavLink
          className={({ isActive }) =>
            [
              'inline-flex items-center border border-transparent px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-stone-400 transition',
              isActive ? 'border-white/10 bg-white/5 text-stone-100' : 'hover:border-white/10 hover:bg-white/5 hover:text-stone-100',
            ].join(' ')
          }
          to={href}
        >
          {children}
        </NavLink>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

export function Shell({ children }: { children: ReactNode }) {
  const { locale, setLocale } = useLocale()
  const items = nav[locale]
  const copy = shellCopy[locale]

  return (
    <div className="mx-auto min-h-screen max-w-[1380px] px-3 py-4 sm:px-5">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(241,190,50,0.12),transparent_24%),radial-gradient(circle_at_78%_0%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(180deg,#111418,#090a0c_60%)]" />
      <header className="sticky top-4 z-20 grid items-center gap-5 border border-white/10 bg-black/70 px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:grid-cols-[auto_1fr_auto] lg:px-6">
        <Link className="inline-flex items-center gap-3" to="/">
          <span className="grid h-[52px] w-[52px] place-items-center border border-amber-300/30 bg-linear-to-br from-amber-300/12 to-white/[0.03] font-['Oxanium'] text-lg tracking-[0.18em] text-amber-300">
            JM
          </span>
          <span className="flex flex-col gap-0.5">
            <strong className="text-base font-semibold tracking-[0.08em] text-stone-100">Jiuyu Machinery</strong>
            <small className="text-sm text-stone-400">{copy.subtitle}</small>
          </span>
        </Link>

        <NavigationMenu.Root className="overflow-x-auto">
          <NavigationMenu.List className="flex flex-wrap justify-start gap-2 lg:justify-center">
            {items.map((item) => (
              <NavMenuLink key={item.href} href={item.href}>
                {item.label}
              </NavMenuLink>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <LanguageToggle locale={locale} onChange={setLocale} />
        </div>
      </header>

      <main className="relative">{children}</main>

      <footer className="relative mt-6 mb-10 flex flex-col justify-between gap-6 border border-white/10 bg-black/75 px-6 py-6 backdrop-blur-xl lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{copy.footerKicker}</p>
          <h2 className="mt-2 font-['Oxanium'] text-3xl text-stone-100">Jiuyu Machinery</h2>
        </div>
        <div className="grid gap-1 text-sm text-stone-400 lg:justify-items-end">
          <span>jiuyumachinery.com</span>
          <span>{copy.footerReach}</span>
        </div>
      </footer>
    </div>
  )
}
