import type { BackendApiSnippetKey } from "./backend-api/snippets"
import type { GuideSnippetKey } from "./snippets"

export type GuideBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; snippet: GuideSnippetKey; language?: string }
  | { type: "codeRaw"; code: string; language?: string }
  | { type: "codeSnippet"; snippet: BackendApiSnippetKey; language?: string }
  | { type: "callout"; variant: "info"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "subheading"; text: string }
  | { type: "ordered"; items: string[] }
  | { type: "link"; href: string; label: string }

export type GuideSectionVariant = "quick-start" | "reference"

export type GuideSection = {
  id: string
  title: string
  stepLabel?: string
  variant?: GuideSectionVariant
  blocks: GuideBlock[]
}

export type GuideHero = {
  eyebrow: string
  title: string
  description: string
  cta: string
  ctaHref?: string
  installCommand?: string
}

export type GuideNavGroup = {
  label: string
  sectionIds: string[]
}

export type GuideMessages = {
  title: string
  description: string
  hero: GuideHero
  navHome: string
  codeCopy: string
  codeCopied: string
  onThisPage: string
  referenceDivider: string
  navGroups: GuideNavGroup[]
  sections: GuideSection[]
}
