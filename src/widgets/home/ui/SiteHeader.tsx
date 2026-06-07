"use client"

import { StitchableLogo } from "./StitchableLogo"
import { GithubIcon } from "./GithubIcon"
import { LocaleSwitcher } from "./LocaleSwitcher"
import { useMessages } from "@/app/providers/LocaleProvider"

export function SiteHeader() {
  const t = useMessages().landing.header

  const NAV = [
    { label: t.navFeatures, href: "#features" },
    { label: t.navHowItWorks, href: "#how-it-works" },
    { label: t.navDocs, href: "/guide" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--vp-color-stroke)] bg-[var(--vp-color-white)]/90 backdrop-blur-md">
      <div className="flex h-[82px] items-center justify-between gap-4 px-5 sm:px-10">
        <a href="#" className="flex items-center gap-2">
          <StitchableLogo className="size-6 text-[var(--vp-color-brand)]" />
          <span className="text-sm font-semibold tracking-tight text-[var(--vp-color-primary)]">
            Stitchable
          </span>
          <span className="hidden rounded-full border border-[var(--vp-color-stroke)] bg-[var(--vp-color-beige)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--vp-color-grey)] sm:inline">
            {t.beta}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--vp-color-grey)] transition-colors hover:text-[var(--vp-color-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <a
            href="#"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-[var(--vp-color-grey)] transition-colors hover:text-[var(--vp-color-primary)] sm:inline-flex"
          >
            <GithubIcon className="size-4" />
            {t.github}
          </a>
          <a
            href="#quickstart"
            className="vp-btn-brand inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium transition-colors"
          >
            {t.getStarted}
          </a>
        </div>
      </div>
    </header>
  )
}
