"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/shared/ui/button"
import { ProductPreview } from "./ProductPreview"
import { Check, ArrowRight, Copy } from "lucide-react"
import { useMessages } from "@/app/providers/LocaleProvider"
import { cn } from "@/shared/lib/utils"

export function Hero() {
  const messages = useMessages()
  const t = messages.landing.hero
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
    }
  }, [])

  const handleCopyInstallCmd = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(t.installCmd)
      setCopied(true)
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
      resetTimerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [t.installCmd])

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#features"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            {t.eyebrow}
          </a>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {t.title}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#quickstart">
                {t.getStarted}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <div className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary py-1.5 pl-4 pr-1">
              <code className="font-mono text-sm text-muted-foreground">{t.installCmd}</code>
              <button
                type="button"
                onClick={handleCopyInstallCmd}
                aria-label={copied ? t.codeCopied : t.codeCopy}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors",
                  copied
                    ? "text-[#1a7f37]"
                    : "text-muted-foreground hover:bg-background/80 hover:text-foreground",
                )}
              >
                {copied ? (
                  <>
                    <Check className="size-3.5" aria-hidden />
                    {t.codeCopied}
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" aria-hidden />
                    {t.codeCopy}
                  </>
                )}
              </button>
            </div>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {t.badges.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Check className="size-3.5 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2rem] bg-primary/5 blur-3xl"
          />
          <ProductPreview />
        </div>
      </div>
    </section>
  )
}
