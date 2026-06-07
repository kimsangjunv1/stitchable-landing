"use client"

import { ArrowRight } from "lucide-react"
import { useMessages } from "@/app/providers/LocaleProvider"

export function CtaBanner() {
  const t = useMessages().landing.cta

  return (
    <section className="vp-cta-banner relative overflow-hidden border-t border-[var(--vp-color-nickel)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 bg-[var(--vp-color-shine)] opacity-20 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-10 sm:py-24">
        <h2 className="text-balance text-3xl font-medium tracking-tight text-white drop-shadow-sm sm:text-4xl">
          {t.title}
        </h2>
        <a
          href="#quickstart"
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-6 text-sm font-medium text-[var(--vp-color-primary)] transition-colors hover:bg-[var(--vp-color-beige)]"
        >
          {t.button}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
