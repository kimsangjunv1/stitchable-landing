"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { cn } from "@/shared/lib/utils";

export function AdoptionPath() {
  const t = useMessages().landing.adoptionPath;

  return (
    <section
      id="adoption-path"
      data-report-id="adoption-path"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <span className="vp-eyebrow">{t.eyebrow}</span>
          <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={t.description} />
          </p>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, index) => (
          <div
            key={step.label}
            className={cn(
              "flex flex-col gap-3 border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 lg:p-10",
              index % 2 === 0 && "sm:border-r",
              index % 4 !== 3 && "lg:border-r",
              index < t.steps.length - 2 && "sm:border-b lg:border-b-0",
              index < t.steps.length - 4 && "lg:border-b",
            )}
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex size-8 shrink-0 items-center justify-center border border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg)] font-mono text-xs font-semibold text-[var(--vp-color-brand)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < t.steps.length - 1 ? (
                <ArrowRight
                  className="size-4 text-[var(--vp-color-text-dim)] sm:hidden"
                  aria-hidden
                />
              ) : null}
            </div>
            <h4 className="text-sm font-semibold">{step.label}</h4>
            <p className="text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
              <RichText text={step.description} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
