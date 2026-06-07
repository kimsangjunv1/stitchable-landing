"use client"

import { StitchableLogo } from "./StitchableLogo"
import { GithubIcon } from "./GithubIcon"
import { useMessages } from "@/app/providers/LocaleProvider"

export function SiteFooter() {
  const t = useMessages().landing.footer

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <StitchableLogo className="size-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">Stitchable</span>
          <span className="text-xs text-muted-foreground">{t.tagline}</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#docs" className="transition-colors hover:text-foreground">
            {t.docs}
          </a>
          <a href="#features" className="transition-colors hover:text-foreground">
            {t.features}
          </a>
          <a
            href="#docs"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            {t.github}
          </a>
        </div>
      </div>
    </footer>
  )
}
