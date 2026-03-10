import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

import type { Locale } from '../content/site'

type LocaleContextValue = {
  locale: Locale
  setLocale: (nextLocale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)
const storageKey = 'jiuyu-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const stored = window.localStorage.getItem(storageKey)
  if (stored === 'en' || stored === 'zh' || stored === 'ar' || stored === 'ru') {
    return stored
  }

  const browserLocale = navigator.language.toLowerCase()
  if (browserLocale.startsWith('zh')) return 'zh'
  if (browserLocale.startsWith('ar')) return 'ar'
  if (browserLocale.startsWith('ru')) return 'ru'
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale)
    document.documentElement.lang =
      locale === 'zh' ? 'zh-CN' : locale === 'ar' ? 'ar' : locale === 'ru' ? 'ru' : 'en'
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
