"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  const t = useMessages().landing.hero;

  return (
    // <section className="border-b border-[var(--vp-color-stroke)] px-5 py-12 sm:px-10 sm:py-16 lg:py-20">
    <section className="vp-hero-surface border-b border-[var(--vp-color-stroke)]">
      <div className="relative z-10 mx-auto flex w-full max-w-[var(--vp-layout-max-width)] flex-col items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:gap-14 lg:py-20">
        <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <div className="space-y-4">
            <h1 className="text-balance text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              <span className="block">{t.titleLine1}</span>
              <span className="block">{t.titleLine2}</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--vp-color-text-muted)] sm:text-lg">
              <RichText text={t.description} />
            </p>

            <p className="text-sm text-[var(--vp-color-text-dim)]">
              <RichText text={t.license} />
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#quickstart"
              className="vp-btn-brand inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm transition-colors"
            >
              {t.getStarted}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="/guide"
              className="vp-btn-alt inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors"
            >
              {t.readDocs}
            </a>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <ProductPreview embedded />
        </div>
      </div>
    </section>
  );
}
