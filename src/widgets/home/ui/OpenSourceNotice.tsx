"use client";

import { Scale } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";

export function OpenSourceNotice() {
  const t = useMessages().landing.openSource;

  return (
    <section className="border-b border-[var(--vp-color-stroke)] px-5 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <div className="vp-open-source-icon">
          <Scale
            className="size-9 text-[var(--vp-color-brand)]"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--vp-color-brand)]">
          MIT License
        </span>
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {t.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
          <RichText text={t.description} />
        </p>
      </div>
    </section>
  );
}
