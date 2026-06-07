"use client";

import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { RichText } from "@/shared/ui/rich-text";
import { CopyButton, TagPill, TerminalLine } from "../landing-shared";
import { cn } from "@/shared/lib/utils";
import { motionTransition } from "@/shared/lib/motion";
import { Text } from "@/shared/ui/Text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";

export function FeatureBullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--vp-color-text-muted)]"
        >
          <Check className="vp-feature-check mt-0.5 size-4" aria-hidden />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CodeVisual({
  lines,
  label,
  copyText,
  copyLabel,
  copiedLabel,
  glowVariant = "teal",
}: {
  lines: string[];
  label?: string;
  copyText?: string;
  copyLabel: string;
  copiedLabel: string;
  glowVariant?: "teal" | "purple" | "cyan" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-full min-h-[280px] items-center justify-center overflow-hidden p-4 sm:min-h-[452px] sm:p-6 lg:p-8",
        glowVariant !== "none" && "vp-feature-glow-panel",
        glowVariant === "teal" && "vp-feature-glow-teal",
        glowVariant === "purple" && "vp-feature-glow-purple",
        glowVariant === "cyan" && "vp-feature-glow-cyan",
      )}
    >
      {glowVariant !== "none" ? (
        <motion.div
          className="vp-feature-glow-orb pointer-events-none absolute inset-0"
          style={{ y: glowY, opacity: glowOpacity }}
          aria-hidden
        />
      ) : null}
      <motion.div
        className="vp-code-block relative z-10 w-full max-w-lg p-4 sm:p-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={motionTransition.medium}
      >
        {label ? (
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
              {label}
            </span>
            {copyText ? (
              <CopyButton
                text={copyText}
                label={copyLabel}
                copiedLabel={copiedLabel}
              />
            ) : null}
          </div>
        ) : null}
        <div className="space-y-0.5">
          {lines.map((line, i) => {
            if (!line) return <div key={i} className="h-3" />;
            const variant = line.startsWith("✔")
              ? "success"
              : line.startsWith("$") || line.startsWith("[")
                ? "command"
                : line.startsWith("⚠")
                  ? "muted"
                  : line.startsWith("import") || line.startsWith("<")
                    ? "brand"
                    : "default";
            return (
              <TerminalLine key={i} variant={variant}>
                {line}
              </TerminalLine>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export function DualCodeVisual({
  npmCmd,
  yarnCmd,
  npmLabel,
  yarnLabel,
  copyLabel,
  copiedLabel,
}: {
  npmCmd: string;
  yarnCmd: string;
  npmLabel: string;
  yarnLabel: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  return (
    <div className="vp-feature-glow-panel vp-feature-glow-teal relative flex h-full min-h-[280px] flex-col justify-center gap-3 overflow-hidden p-4 sm:min-h-[452px] sm:p-6 lg:p-8">
      <motion.div
        className="vp-feature-glow-orb pointer-events-none absolute inset-0"
        aria-hidden
      />
      <motion.div
        className="vp-code-block relative z-10 p-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ ...motionTransition.medium, delay: 0 }}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
            {npmLabel}
          </span>
          <CopyButton text={npmCmd} label={copyLabel} copiedLabel={copiedLabel} />
        </div>
        <code className="font-mono text-sm text-[var(--vp-color-brand)]">
          {npmCmd}
        </code>
      </motion.div>
      <motion.div
        className="vp-code-block relative z-10 p-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ ...motionTransition.medium, delay: 0.1 }}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
            {yarnLabel}
          </span>
          <CopyButton text={yarnCmd} label={copyLabel} copiedLabel={copiedLabel} />
        </div>
        <code className="font-mono text-sm text-[var(--vp-color-brand)]">
          {yarnCmd}
        </code>
      </motion.div>
    </div>
  );
}

export function TagsVisual({ tags }: { tags: string[] }) {
  return (
    <div className="flex h-full min-h-[200px] items-center justify-center p-4 sm:min-h-[452px] sm:p-6 lg:p-8">
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ ...motionTransition.fast, delay: i * 0.05 }}
          >
            <TagPill dark>{tag}</TagPill>
          </motion.span>
        ))}
      </div>
    </div>
  );
}

type FeatureRowProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  bullets?: string[];
  learnMoreHref?: string;
  learnMoreLabel: string;
  reverse?: boolean;
  reportId?: string;
  children: ReactNode;
};

export function FeatureRow({
  id,
  eyebrow,
  title,
  description,
  bullets,
  learnMoreHref,
  learnMoreLabel,
  reverse,
  reportId,
  children,
}: FeatureRowProps) {
  return (
    <section
      id={id}
      data-report-id={reportId}
      data-report-type={reportId ? "group" : undefined}
      className="grid min-h-0 border-b border-[var(--vp-color-stroke)] md:min-h-[452px] md:grid-cols-2"
    >
      <ScrollReveal
        variant={reverse ? "slideRight" : "slideLeft"}
        className={cn(
          "flex flex-col justify-center border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 md:border-b-0 md:p-10 lg:p-14",
          reverse && "md:order-2 md:border-l",
          !reverse && "md:border-r",
        )}
      >
        <span className="vp-eyebrow">{eyebrow}</span>
        <Text.Reveal
          as="h3"
          align="left"
          className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl"
          {...landingRevealColors}
        >
          {title}
        </Text.Reveal>
        <p className="mt-3 text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
          {typeof description === "string" ? (
            <RichText text={description} />
          ) : (
            description
          )}
        </p>
        {bullets ? <FeatureBullets items={bullets} /> : null}
        {learnMoreHref ? (
          <a href={learnMoreHref} className="vp-learn-more mt-6">
            {learnMoreLabel}
            <ArrowRight className="size-3.5" />
          </a>
        ) : null}
      </ScrollReveal>

      <div className={cn("relative min-h-[280px] md:min-h-[452px]", reverse && "md:order-1")}>
        {children}
      </div>
    </section>
  );
}
