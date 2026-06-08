"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { TagPill } from "../landing-shared";
import { Text } from "@/shared/ui/Text";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/shared/ui/scroll-reveal";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";
import { cn } from "@/shared/lib/utils";

const modeAccent = {
  idle: "vp-bento-accent-idle",
  report: "vp-bento-accent-report",
  view: "vp-bento-accent-view",
} as const;

export function FeatureBentoGrid() {
  const { bento } = useMessages().landing;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgShift = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="feature-bento"
      ref={ref}
      data-report-id="feature-bento"
      data-report-type="group"
      className="relative overflow-hidden border-b border-[var(--vp-color-stroke)]"
    >
      <motion.div
        className="vp-bento-bg-glow pointer-events-none absolute inset-0"
        style={{ y: bgShift }}
        aria-hidden
      />

      <div className="relative border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <span className="vp-eyebrow">{bento.eyebrow}</span>
          <Text.Reveal
            as="h3"
            align="left"
            className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl"
            {...landingRevealColors}
          >
            {bento.title}
          </Text.Reveal>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={bento.description} />
          </p>
        </ScrollReveal>
      </div>

      <StaggerReveal className="grid md:grid-cols-12 md:grid-rows-[auto_auto]">
        {/* Modes — large bento cell */}
        <StaggerItem className="border-b border-[var(--vp-color-stroke)] md:col-span-7 md:border-b-0 md:border-r">
          <div className="grid gap-px sm:grid-cols-3">
            {bento.modes.map((mode, i) => (
              <motion.div
                key={mode.id}
                className={cn(
                  "vp-bento-cell flex flex-col gap-3 p-5 sm:p-6",
                  modeAccent[mode.id as keyof typeof modeAccent],
                  i < bento.modes.length - 1 && "border-b border-[var(--vp-color-stroke)] sm:border-b-0 sm:border-r",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--vp-color-brand)]">
                    {mode.label}
                  </span>
                  <span className="border border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg-code)] px-2 py-0.5 font-mono text-[10px] text-[var(--vp-color-text-dim)]">
                    {mode.shortcut}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                  <RichText text={mode.description} />
                </p>
              </motion.div>
            ))}
          </div>
        </StaggerItem>

        {/* Shortcuts — tall cell */}
        <StaggerItem className="border-b border-[var(--vp-color-stroke)] md:col-span-5 md:row-span-2 md:border-b-0">
          <div className="vp-bento-cell h-full p-5 sm:p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--vp-color-text-dim)]">
              keyboard
            </span>
            <ul className="mt-4 divide-y divide-[var(--vp-color-stroke)] border-y border-[var(--vp-color-stroke)]">
              {bento.shortcuts.map((shortcut) => (
                <li
                  key={shortcut.action}
                  className="flex items-center justify-between gap-3 px-0 py-2.5"
                >
                  <span className="text-sm text-[var(--vp-color-text-muted)]">
                    {shortcut.action}
                  </span>
                  <span className="hidden font-mono text-xs text-[var(--vp-color-brand)] sm:inline">
                    {shortcut.mac}
                  </span>
                  <span className="font-mono text-xs text-[var(--vp-color-brand)] sm:hidden">
                    {shortcut.win}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>

        {/* Config cards — bottom row under modes */}
        <StaggerItem className="border-b border-[var(--vp-color-stroke)] md:col-span-7 md:row-start-2 md:border-b-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {bento.config.map((item, i) => (
              <motion.div
                key={item.title}
                className={cn(
                  "vp-bento-cell flex h-full flex-col gap-3 p-5 sm:p-6",
                  i < bento.config.length - 1 && "border-b border-[var(--vp-color-stroke)] sm:border-b-0 sm:border-r",
                )}
              >
                <Text.Reveal
                  as="h4"
                  align="left"
                  className="text-sm font-semibold"
                  {...landingRevealColors}
                >
                  {item.title}
                </Text.Reveal>
                <p className="text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                  <RichText text={item.description} />
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <TagPill key={tag} dark>
                      {tag}
                    </TagPill>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}
