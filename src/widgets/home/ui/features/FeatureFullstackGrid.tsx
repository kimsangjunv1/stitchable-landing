"use client";

import { motion } from "motion/react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { TagPill } from "../landing-shared";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/shared/ui/scroll-reveal";
import { motionTransition } from "@/shared/lib/motion";

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
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {fullstack.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={fullstack.description} />
          </p>
        </ScrollReveal>
      </div>

      <StaggerReveal className="grid md:grid-cols-3">
        {fullstack.items.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              className="vp-fullstack-card flex h-full flex-col border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0"
              whileHover={{ y: -3 }}
              transition={motionTransition.fast}
            >
              <h4 className="text-sm font-semibold text-[var(--vp-color-text)]">
                {item.title}
              </h4>
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
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
