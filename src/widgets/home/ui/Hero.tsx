"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  const t = useMessages().landing.hero;

  return (
    // <section className="border-b border-[var(--vp-color-stroke)] px-5 py-12 sm:px-10 sm:py-16 lg:py-20">
    <section className="vp-hero-surface min-h-[80svh] border-b border-[var(--vp-color-stroke)]">
      <div className="relative z-10 grid h-full min-h-[80svh] w-full grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-6 p-[52px]">
          <div className="space-y-4">
            <h1 className="text-left text-balance text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              <span className="block">{t.titleLine1}</span>
              <span className="block">{t.titleLine2}</span>
            </h1>

            <p className="max-w-lg text-left text-base leading-relaxed text-[var(--vp-color-text-muted)] sm:text-lg">
              <RichText text={t.description} />
            </p>

            <p className="text-sm text-[var(--vp-color-text-dim)]">
              <RichText text={t.license} />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
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

        <div className="flex h-full min-h-[320px] w-full flex-col lg:min-h-0">
          <ProductPreview embedded />
        </div>
      </div>
    </section>
  );
}
