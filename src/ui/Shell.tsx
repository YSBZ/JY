import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { localeLabels, localeOptions, nav, shellCopy } from '../content/site'
import { useLocale } from '../state/locale'
import type { Locale } from '../content/site'

function LanguageToggle({
  locale,
  onChange,
  label,
}: {
  locale: Locale
  onChange: (locale: Locale) => void
  label: string
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label={label}
          className="inline-flex items-center gap-3 border border-white/10 bg-black/30 px-4 py-3 text-left transition hover:border-amber-300/35"
          type="button"
        >
          <span className="grid">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">{label}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-100">{localeLabels[locale]}</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300">{locale.toUpperCase()}</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="z-50 min-w-36 border border-white/10 bg-zinc-950/95 p-1 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          sideOffset={8}
        >
          {localeOptions.map((value) => (
            <DropdownMenu.Item
              key={value}
              className={`cursor-pointer px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] outline-none transition ${
                value === locale
                  ? 'bg-amber-300/15 text-stone-100'
                  : 'text-stone-400 hover:bg-white/5 hover:text-stone-100'
              }`}
              onSelect={() => onChange(value)}
            >
              <div className="flex min-w-40 items-center justify-between gap-4">
                <span>{localeLabels[value]}</span>
                <span className="text-[10px] tracking-[0.22em] text-stone-500">{value.toUpperCase()}</span>
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
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
        <Link className="flex flex-col gap-0.5 transition hover:text-amber-300" to="/">
          <strong className="text-base font-semibold tracking-[0.08em] text-stone-100">Jiuyu Machinery</strong>
          <small className="text-sm text-stone-400">{copy.subtitle}</small>
        </Link>

        <NavigationMenu.Root className="overflow-x-auto overflow-y-hidden">
          <NavigationMenu.List className="flex min-w-max flex-nowrap justify-start gap-2 lg:min-w-0 lg:justify-center">
            {items.map((item) => (
              <NavMenuLink key={item.href} href={item.href}>
                {item.label}
              </NavMenuLink>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <LanguageToggle label={copy.languageLabel} locale={locale} onChange={setLocale} />
          <Link
            className="inline-flex items-center justify-center border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition hover:border-amber-300/35 hover:text-amber-300"
            to="/contact"
          >
            {items[items.length - 1]?.label ?? 'Contact'}
          </Link>
        </div>
      </header>

      <main className="relative">{children}</main>

      <footer className="relative mt-6 mb-10 grid gap-6 border border-white/10 bg-black/75 px-6 py-6 backdrop-blur-xl lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="grid gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{copy.footerKicker}</p>
            <h2 className="mt-2 font-['Oxanium'] text-3xl text-stone-100">Jiuyu Machinery</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {copy.footerSignals.map((item, index) => (
              <div key={item} className="border border-white/10 bg-zinc-950/70 px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{`0${index + 1}`}</div>
                <p className="mt-2 text-sm leading-6 text-stone-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:justify-items-end">
          <div className="grid gap-1 text-sm text-stone-400 lg:justify-items-end">
            <a
              className="transition hover:text-amber-300"
              href="https://jiuyumachinery.com"
              rel="noreferrer"
              target="_blank"
            >
              jiuyumachinery.com
            </a>
            <span>{copy.footerReach}</span>
          </div>
          <div className="grid gap-3 border border-white/10 bg-zinc-950/70 px-5 py-4 text-sm text-stone-400 lg:min-w-[320px]">
            <div className="flex items-center justify-between gap-4">
              <span>{copy.footerMode}</span>
              <span className="text-stone-100">{copy.footerModeValue}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>{copy.footerCatalog}</span>
              <span className="text-stone-100">{copy.footerCatalogValue}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>{copy.footerPrimaryCta}</span>
              <span className="text-stone-100">{items[items.length - 1]?.label ?? 'Contact'}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
