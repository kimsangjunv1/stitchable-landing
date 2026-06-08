"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { TagPill } from "./landing-shared";
import { StaggerItem, StaggerReveal } from "@/shared/ui/scroll-reveal";

export function CapabilitiesStrip() {
  const { capabilities } = useMessages().landing;

  return (
    <section
      id="capabilities"
      data-report-id="capabilities"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <StaggerReveal className="grid md:grid-cols-3">
        {capabilities.items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="vp-fullstack-card flex h-full flex-col border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0">
              <h4 className="text-sm font-semibold text-[var(--vp-color-text)]">
                {item.title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                <RichText text={item.description} />
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <TagPill key={tag} dark>
                    {tag}
                  </TagPill>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
