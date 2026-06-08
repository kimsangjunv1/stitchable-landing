"use client";

import { Check } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export function BenefitsDualRow() {
  const { shipping, security } = useMessages().landing.benefits;

  return (
    <section
      id="benefits"
      data-report-id="benefits"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="grid lg:grid-cols-2">
        <ScrollReveal className="border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <h3 className="text-lg font-semibold sm:text-xl">{shipping.title}</h3>
          <ul className="mt-5 space-y-2.5">
            {shipping.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--vp-color-text-muted)]"
              >
                <Check className="vp-feature-check mt-0.5 size-4 shrink-0" aria-hidden />
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal
          variant="slideRight"
          className="p-6 sm:p-8 lg:p-10"
        >
          <h3 className="text-lg font-semibold sm:text-xl">{security.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
            <RichText text={security.description} />
          </p>
          <ul className="mt-5 space-y-2.5">
            {security.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--vp-color-text-muted)]"
              >
                <Check className="vp-feature-check mt-0.5 size-4 shrink-0" aria-hidden />
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
