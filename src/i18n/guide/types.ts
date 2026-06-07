import type { GuideSnippetKey } from "./snippets"

export type GuideBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; snippet: GuideSnippetKey; language?: string }
  | { type: "callout"; variant: "info"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "subheading"; text: string }
  | { type: "ordered"; items: string[] }

export type GuideSection = {
  id: string
  title: string
  blocks: GuideBlock[]
}

export type GuideNavGroup = {
  label: string
  sectionIds: string[]
}

export type GuideMessages = {
  title: string
  description: string
  navHome: string
  codeCopy: string
  codeCopied: string
  onThisPage: string
  navGroups: GuideNavGroup[]
  sections: GuideSection[]
}
