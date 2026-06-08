"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export function TrustWorkflowSplit() {
  const t = useMessages().landing.trust;

  return (
    <section
      id="trust-workflow"
      data-report-id="trust-workflow"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="grid lg:grid-cols-2">
        <ScrollReveal className="border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={t.description} />
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[var(--vp-color-text-dim)] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="slideRight"
          className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
        >
          <h4 className="text-lg font-semibold sm:text-xl">
            {t.performance.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={t.performance.description} />
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
