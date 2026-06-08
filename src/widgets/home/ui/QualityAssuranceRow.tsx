"use client";

import { BookOpen, Database, Package, TestTube2 } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/shared/ui/scroll-reveal";

const icons = [TestTube2, Package, BookOpen, Database] as const;

export function QualityAssuranceRow() {
  const t = useMessages().landing.qualityAssurance;

  return (
    <section
      id="quality-assurance"
      data-report-id="quality-assurance"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <span className="vp-eyebrow">{t.eyebrow}</span>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.title}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={t.description} />
          </p>
        </ScrollReveal>
      </div>

      <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item, index) => {
          const Icon = icons[index] ?? TestTube2;
          return (
            <StaggerItem key={item.title}>
              <div className="flex h-full flex-col items-center gap-3 border-b border-[var(--vp-color-stroke)] p-6 text-center sm:border-b-0 sm:border-r sm:p-8 sm:last:border-r-0 lg:p-10">
                <div className="vp-open-source-icon">
                  <Icon
                    className="size-7 text-[var(--vp-color-brand)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                  <RichText text={item.description} />
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerReveal>
    </section>
  );
}
