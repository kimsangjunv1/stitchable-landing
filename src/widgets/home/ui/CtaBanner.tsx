"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";

export function CtaBanner() {
  const t = useMessages().landing.cta;

  return (
    <section className="vp-cta-banner relative overflow-hidden border-t border-[var(--vp-color-stroke)]">
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-10 sm:py-24">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--vp-color-text)] sm:text-4xl">
          {t.title}
        </h2>
        <a
          href="#quickstart"
          className="vp-btn-brand inline-flex h-11 items-center gap-2 rounded-lg px-6 text-sm transition-colors"
        >
          {t.button}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
