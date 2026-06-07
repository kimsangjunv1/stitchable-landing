"use client"

import { GithubIcon } from "./GithubIcon"
import { useMessages } from "@/app/providers/LocaleProvider"

export function SiteFooter() {
  const t = useMessages().landing.footer

  return (
    <footer className="bg-[var(--vp-color-primary)] text-white">
      <div className="px-5 py-12 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#98989f]">
              {t.companyTitle}
            </p>
            <ul className="mt-4 space-y-2">
              {t.companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white transition-colors hover:text-[var(--vp-color-vite)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#98989f]">
              {t.socialTitle}
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[var(--vp-color-vite)]"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--vp-color-nickel)] pt-6">
          <p className="text-xs text-[#98989f]">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
