"use client";

import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { motionTransition } from "@/shared/lib/motion";

export function CtaBanner() {
  const t = useMessages().landing.cta;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);

  return (
    <section
      ref={ref}
      className="vp-cta-banner relative overflow-hidden border-t border-[var(--vp-color-stroke)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(0,244,203,0.35)_0%,transparent_70%)]"
        style={{ scale: glowScale }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-10 sm:py-24">
        <ScrollReveal variant="fadeUp">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--vp-color-text)] sm:text-4xl">
            <RichText text={t.title} />
          </h2>
        </ScrollReveal>
        <motion.a
          href="#quickstart"
          className="vp-btn-brand inline-flex h-11 items-center gap-2 rounded-lg px-6 text-sm transition-colors"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: false }}
          transition={motionTransition.medium}
        >
          {t.button}
          <ArrowRight className="size-4" />
        </motion.a>
      </div>
    </section>
  );
}
