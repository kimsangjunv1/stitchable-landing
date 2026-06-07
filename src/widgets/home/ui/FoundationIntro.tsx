"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export function FoundationIntro() {
  const { showcase } = useMessages().landing;

  return (
    <section className="border-b border-[var(--vp-color-stroke)] px-5 py-16 sm:px-10 sm:py-20">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          {showcase.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
          <RichText text={showcase.subtitle} />
        </p>
      </ScrollReveal>
    </section>
  );
}
