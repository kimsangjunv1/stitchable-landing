"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  const t = useMessages().landing.hero;

  return (
    // <section className="border-b border-[var(--vp-color-stroke)] px-5 py-12 sm:px-10 sm:py-16 lg:py-20">
    <section className="border-b border-[var(--vp-color-stroke)]">
      <div className="grid items-center lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6 p-[52px]">
          <div className="space-y-4">
            <h1 className="text-left text-balance text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              <span className="block">{t.titleLine1}</span>
              <span className="block">{t.titleLine2}</span>
            </h1>

            <p className="max-w-lg text-left text-base leading-relaxed text-[var(--vp-color-text-muted)] sm:text-lg">
              {t.description}
            </p>

            <p className="text-sm text-[var(--vp-color-text-dim)]">
              {t.license}
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

        <ProductPreview embedded />
        {/* <div className="w-full min-w-0 h-full">
        </div> */}
      </div>
    </section>
  );
}
