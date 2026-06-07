"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/shared/ui/scroll-reveal";
import { cn } from "@/shared/lib/utils";

const stepGlow = [
  "vp-workflow-glow-1",
  "vp-workflow-glow-2",
  "vp-workflow-glow-3",
  "vp-workflow-glow-4",
] as const;

function WorkflowStepVisual({ index }: { index: number }) {
  return (
    <div className="relative flex min-h-[120px] items-center justify-center overflow-hidden rounded-lg border border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg-soft)] p-6">
      <div className="vp-workflow-step-glow pointer-events-none absolute inset-0" aria-hidden />
      <motion.span
        className="relative z-10 font-mono text-4xl font-semibold tabular-nums text-[var(--vp-color-brand)] opacity-20 sm:text-6xl"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>
    </div>
  );
}

export function FeatureWorkflowStack() {
  const { workflow } = useMessages().landing;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      ref={ref}
      data-report-id="how-it-works"
      data-report-type="group"
      className="relative overflow-hidden border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <span className="vp-eyebrow">{workflow.eyebrow}</span>
          <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {workflow.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={workflow.description} />
          </p>
        </ScrollReveal>

        <div className="relative mt-8 hidden h-px bg-[var(--vp-color-stroke)] sm:block">
          <motion.div
            className="absolute inset-y-0 left-0 h-px bg-[var(--vp-color-brand)]"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      <StaggerReveal className="divide-y divide-[var(--vp-color-stroke)]">
        {workflow.steps.map((step, index) => (
          <StaggerItem key={step.id}>
            <article
              className={cn(
                "vp-workflow-step grid gap-6 p-6 sm:grid-cols-[1fr_1.2fr] sm:p-8 lg:p-10",
                stepGlow[index],
              )}
            >
              <div className="flex flex-col justify-center">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--vp-color-brand)]">
                  {step.label}
                </span>
                <h4 className="mt-2 text-lg font-semibold sm:text-xl">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                  {step.description}
                </p>
                {step.status ? (
                  <span className="vp-workflow-status mt-4 w-fit">{step.status}</span>
                ) : null}
              </div>
              <WorkflowStepVisual index={index} />
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
