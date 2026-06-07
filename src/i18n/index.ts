import type { LandingMessages, Locale } from "./types"
import { en } from "./en"
import { ko } from "./ko"

const MESSAGES: Record<Locale, LandingMessages> = { en, ko }

export type { GuideMessages, GuideBlock, GuideSection } from "./guide/types"
export type { LandingMessages, Locale }

export function getMessages(locale: Locale): LandingMessages {
  return MESSAGES[locale]
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ko"
}
