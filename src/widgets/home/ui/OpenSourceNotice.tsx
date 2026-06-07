"use client";

import { useMessages } from "@/app/providers/LocaleProvider";

export function OpenSourceNotice() {
  const t = useMessages().landing.openSource;

  return (
    <section className="border-b border-[var(--vp-color-stroke)] px-5 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="vp-open-source-badge">MIT</div>
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {t.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
          {t.description}
        </p>
      </div>
    </section>
  );
}
