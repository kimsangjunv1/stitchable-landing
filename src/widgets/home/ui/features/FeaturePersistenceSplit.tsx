"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { CopyButton, TerminalLine } from "../landing-shared";
import { Text } from "@/shared/ui/Text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";
import { motionTransition } from "@/shared/lib/motion";

function PersistencePanel({
  title,
  description,
  bullets,
  codeLines,
  copyLabel,
  copiedLabel,
  variant,
}: {
  title: string;
  description: string;
  bullets: string[];
  codeLines: string[];
  copyLabel: string;
  copiedLabel: string;
  variant: "local" | "server";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      className={
        variant === "local"
          ? "vp-persistence-panel vp-persistence-local border-b border-[var(--vp-color-stroke)] lg:border-b-0 lg:border-r"
          : "vp-persistence-panel vp-persistence-server"
      }
      style={{ y, opacity }}
    >
      <div className="p-6 sm:p-8 lg:p-10">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--vp-color-brand)]">
          {variant === "local" ? "default" : "api"}
        </span>
        <Text.Reveal
          as="h4"
          align="left"
          className="mt-2 text-lg font-semibold sm:text-xl"
          {...landingRevealColors}
        >
          {title}
        </Text.Reveal>
        <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
          <RichText text={description} />
        </p>
        <ul className="mt-5 space-y-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[var(--vp-color-text-muted)]"
            >
              <Check className="vp-feature-check mt-0.5 size-4 shrink-0" aria-hidden />
              <RichText text={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[var(--vp-color-stroke)]">
        <motion.div
          className="vp-code-block vp-code-block--flush p-4 sm:p-6 lg:p-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={motionTransition.medium}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
              {variant}
            </span>
            <CopyButton
              text={codeLines.join("\n")}
              label={copyLabel}
              copiedLabel={copiedLabel}
            />
          </div>
          <div className="space-y-0.5">
            {codeLines.map((line, i) => {
              if (!line) return <div key={i} className="h-3" />;
              const lineVariant =
                line.startsWith("✔")
                  ? "success"
                  : line.startsWith("//")
                    ? "muted"
                    : line.startsWith("<") || line.startsWith("  on")
                      ? "brand"
                      : "default";
              return (
                <TerminalLine key={i} variant={lineVariant}>
                  {line}
                </TerminalLine>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function FeaturePersistenceSplit() {
  const { persistence, hero } = useMessages().landing;

  return (
    <section
      id="feature-persistence"
      data-report-id="feature-persistence"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <span className="vp-eyebrow">{persistence.eyebrow}</span>
          <Text.Reveal
            as="h3"
            align="left"
            className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl"
            {...landingRevealColors}
          >
            {persistence.title}
          </Text.Reveal>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={persistence.description} />
          </p>
        </ScrollReveal>
      </div>

      <div className="grid lg:grid-cols-2">
        <PersistencePanel
          variant="local"
          title={persistence.local.title}
          description={persistence.local.description}
          bullets={persistence.local.bullets}
          codeLines={persistence.local.codeLines}
          copyLabel={hero.codeCopy}
          copiedLabel={hero.codeCopied}
        />
        <PersistencePanel
          variant="server"
          title={persistence.server.title}
          description={persistence.server.description}
          bullets={persistence.server.bullets}
          codeLines={persistence.server.codeLines}
          copyLabel={hero.codeCopy}
          copiedLabel={hero.codeCopied}
        />
      </div>
    </section>
  );
}
