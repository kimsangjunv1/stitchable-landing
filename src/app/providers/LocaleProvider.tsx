"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { getMessages, isLocale, type LandingMessages, type Locale } from "@/i18n"

type LocaleContextValue = {
  locale: Locale
  messages: LandingMessages
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const STORAGE_KEY = "stitchable-landing-locale"

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && isLocale(stored)) {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(
    () => ({
      locale,
      messages: getMessages(locale),
      setLocale,
    }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return ctx
}

export function useMessages() {
  return useLocale().messages
}
