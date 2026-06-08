"use client";

import { EyeOff } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export function DevOnlyCallout() {
  const t = useMessages().landing.devOnlyCallout;

  return (
    <section
      id="dev-only"
      data-report-id="dev-only"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <ScrollReveal className="flex flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-12 lg:px-14">
        <div className="flex max-w-xl items-start gap-4">
          <div className="vp-open-source-icon shrink-0">
            <EyeOff
              className="size-7 text-[var(--vp-color-brand)]"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              {t.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
              <RichText text={t.description} />
            </p>
          </div>
        </div>
        <div className="vp-code-block w-full max-w-md shrink-0 p-4">
          <code className="font-mono text-sm text-[var(--vp-color-brand)]">
            {t.codeLine}
          </code>
        </div>
      </ScrollReveal>
    </section>
  );
}
