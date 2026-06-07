"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { Text } from "@/shared/ui/Text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";

export function FoundationIntro() {
  const { showcase } = useMessages().landing;

  return (
    <section className="border-b border-[var(--vp-color-stroke)] px-5 py-16 sm:px-10 sm:py-20">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <Text.Reveal
          as="h2"
          align="center"
          className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
          {...landingRevealColors}
        >
          {showcase.title}
        </Text.Reveal>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
          <RichText text={showcase.subtitle} />
        </p>
      </ScrollReveal>
    </section>
  );
}
