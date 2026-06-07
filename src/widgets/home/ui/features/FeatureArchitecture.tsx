"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { CopyButton, TerminalLine } from "../landing-shared";
import { FeatureBullets } from "./feature-shared";
import { Text } from "@/shared/ui/Text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";
import { motionTransition } from "@/shared/lib/motion";

export function FeatureArchitecture() {
  const { architecture, hero } = useMessages().landing;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const diagramScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const diagramOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 0.85]);

  const { host, root, shadow, ui } = architecture.diagram;

  return (
    <section
      id="feature-architecture"
      ref={ref}
      data-report-id="feature-architecture"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="grid lg:grid-cols-2">
        <ScrollReveal
          variant="slideLeft"
          className="flex flex-col justify-center border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-14"
        >
          <span className="vp-eyebrow">{architecture.eyebrow}</span>
          <Text.Reveal
            as="h3"
            align="left"
            className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl"
            {...landingRevealColors}
          >
            {architecture.title}
          </Text.Reveal>
          <p className="mt-3 text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={architecture.description} />
          </p>
          <FeatureBullets items={architecture.bullets} />
        </ScrollReveal>

        <div className="vp-feature-glow-panel vp-feature-glow-cyan relative flex min-h-[360px] flex-col justify-center overflow-hidden p-6 sm:p-8 lg:min-h-[480px] lg:p-10">
          <motion.div
            className="vp-feature-glow-orb pointer-events-none absolute inset-0"
            style={{ opacity: diagramOpacity }}
            aria-hidden
          />

          <motion.div
            className="relative z-10 mx-auto w-full max-w-md space-y-2"
            style={{ scale: diagramScale, opacity: diagramOpacity }}
          >
            {[host, root, shadow, ui].map((label, i) => (
              <motion.div
                key={label}
                className="vp-arch-node"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ ...motionTransition.medium, delay: i * 0.08 }}
                style={{ marginLeft: `${i * 1.25}rem` }}
              >
                {i > 0 ? (
                  <span className="vp-arch-connector" aria-hidden />
                ) : null}
                <span className="font-mono text-xs sm:text-sm">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="vp-code-block relative z-10 mx-auto mt-8 w-full max-w-md p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ...motionTransition.medium, delay: 0.2 }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
                Quick Start
              </span>
              <CopyButton
                text={architecture.codeLines.join("\n")}
                label={hero.codeCopy}
                copiedLabel={hero.codeCopied}
              />
            </div>
            <div className="space-y-0.5">
              {architecture.codeLines.map((line, i) => {
                if (!line) return <div key={i} className="h-3" />;
                const variant =
                  line.startsWith("import") || line.startsWith("<")
                    ? "brand"
                    : line.startsWith("export") || line.startsWith("  return")
                      ? "command"
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
      </div>
    </section>
  );
}
