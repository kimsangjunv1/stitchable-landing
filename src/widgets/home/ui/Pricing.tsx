"use client"

import { Button } from "@/shared/ui/button"
import { Check } from "lucide-react"
import { useMessages } from "@/app/providers/LocaleProvider"

export function Pricing() {
  const t = useMessages().landing.pricing

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">{t.eyebrow}</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">{t.description}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="flex flex-col rounded-xl border border-border bg-card p-7">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-foreground">{t.freeTitle}</h3>
            <span className="text-sm text-muted-foreground">{t.freeSubtitle}</span>
          </div>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            {t.freePrice}
            <span className="ml-1 text-sm font-normal text-muted-foreground">{t.freePriceSuffix}</span>
          </p>
          <ul className="mt-6 flex-1 space-y-2.5">
            {t.freeFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="mt-7 w-full" asChild>
            <a href="#quickstart">{t.freeCta}</a>
          </Button>
        </div>

        <div className="relative flex flex-col rounded-xl border border-primary/40 bg-card p-7">
          <span className="absolute -top-2.5 left-7 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary-foreground">
            {t.proBadge}
          </span>
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-foreground">{t.proTitle}</h3>
            <span className="text-sm text-muted-foreground">{t.proSubtitle}</span>
          </div>
          <p className="mt-2 text-3xl font-semibold text-foreground">{t.proPrice}</p>
          <ul className="mt-6 flex-1 space-y-2.5">
            {t.proFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
          <Button className="mt-7 w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#">{t.proCta}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
