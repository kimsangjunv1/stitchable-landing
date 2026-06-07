"use client"

import { useLocale } from "@/app/providers/LocaleProvider"
import type { Locale } from "@/i18n"

export function LocaleSwitcher() {
  const { locale, setLocale, messages } = useLocale()

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-secondary/80 p-0.5 text-xs"
      role="group"
      aria-label="Language"
    >
      {(["en", "ko"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
            locale === code
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {messages.localeOption[code]}
        </button>
      ))}
    </div>
  )
}
