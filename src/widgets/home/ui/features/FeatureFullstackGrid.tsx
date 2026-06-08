"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { TagPill } from "../landing-shared";
import { Text } from "@/shared/ui/Text";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/shared/ui/scroll-reveal";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";

export function FeatureFullstackGrid() {
  const { fullstack } = useMessages().landing;

  return (
    <section
      id="fullstack"
      data-report-id="fullstack"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Text.Reveal
            as="h2"
            align="center"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            {...landingRevealColors}
          >
            {fullstack.title}
          </Text.Reveal>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={fullstack.description} />
          </p>
        </ScrollReveal>
      </div>

      <StaggerReveal className="grid md:grid-cols-3">
        {fullstack.items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="vp-fullstack-card flex h-full flex-col border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0">
              <Text.Reveal
                as="h4"
                align="left"
                className="text-sm font-semibold text-[var(--vp-color-text)]"
                {...landingRevealColors}
              >
                {item.title}
              </Text.Reveal>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                <RichText text={item.description} />
              </p>
              {item.tags ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <TagPill key={tag} dark>
                      {tag}
                    </TagPill>
                  ))}
                </div>
              ) : null}
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
