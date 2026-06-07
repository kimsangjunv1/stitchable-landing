"use client";

import { StitchableLogo } from "./StitchableLogo";
import { GithubIcon } from "./GithubIcon";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useMessages } from "@/app/providers/LocaleProvider";

export function SiteHeader() {
  const t = useMessages().landing.header;

  const NAV = [
    { label: t.navFeatures, href: "#features" },
    { label: t.navHowItWorks, href: "#how-it-works" },
    { label: t.navDocs, href: "/guide" },
  ];

  return (
    <header className="border-b border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg)]/90 backdrop-blur-md">
      <div className="flex h-[72px] items-center justify-between gap-4 px-5 sm:px-10">
        <a href="#" className="flex items-center gap-2">
          <StitchableLogo className="size-6 text-[var(--vp-color-brand)]" />
          <span className="text-sm font-semibold tracking-tight text-[var(--vp-color-text)]">
            Stitchable
          </span>
          <span className="hidden rounded-full border border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg-soft)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--vp-color-text-muted)] sm:inline">
            {t.beta}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--vp-color-text-muted)] transition-colors hover:text-[var(--vp-color-brand)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <a
            href="#"
            aria-label={t.github}
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-[var(--vp-color-text-muted)] transition-colors hover:text-[var(--vp-color-brand)] sm:inline-flex"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="#quickstart"
            className="vp-btn-brand inline-flex h-9 items-center rounded-lg px-4 text-sm transition-colors"
          >
            {t.getStarted}
          </a>
        </div>
      </div>
    </header>
  );
}
