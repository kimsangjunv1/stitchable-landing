"use client";

import { ChevronDown } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { Text } from "@/shared/ui/Text";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";
import { LandingRollingStat } from "./LandingRollingStat";
import { StitchableLogo } from "./StitchableLogo";

function BundleGrowthChart({
  axisStart,
  axisEnd,
}: {
  axisStart: string;
  axisEnd: string;
}) {
  const gradientId = "vp-library-chart-gradient";

  return (
    <div className="relative flex min-h-[220px] flex-1 flex-col sm:min-h-[280px]">
      <div className="relative min-h-0 flex-1">
        <svg
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--vp-color-brand)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--vp-color-brand)" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M 0 185 C 60 182, 120 175, 180 155 C 240 120, 300 70, 400 25 L 400 200 L 0 200 Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M 0 185 C 60 182, 120 175, 180 155 C 240 120, 300 70, 400 25"
            fill="none"
            stroke="var(--vp-color-brand)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-[var(--vp-color-text-dim)]">
        <span>{axisStart}</span>
        <span>{axisEnd}</span>
      </div>
    </div>
  );
}

export function LibraryGoodPoints() {
  const t = useMessages().landing.libraryGoodPoints;

  return (
    <section
      id="library-good-points"
      data-report-id="library-good-points"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <Text.Reveal
            as="h2"
            align="left"
            className="max-w-4xl text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
            {...landingRevealColors}
          >
            {t.title}
          </Text.Reveal>
        </ScrollReveal>
      </div>

      <div className="grid border-b border-[var(--vp-color-stroke)] lg:grid-cols-2">
        <div className="flex min-h-[280px] flex-col justify-between border-b border-[var(--vp-color-stroke)] p-6 sm:min-h-[320px] sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <p className="text-sm text-[var(--vp-color-text-dim)]">{t.mainStat.label}</p>
          <LandingRollingStat
            value={t.mainStat.value}
            textSize={38}
            containerClassName="mt-auto"
            className="font-semibold tracking-tight"
          />
        </div>

        <div className="flex min-h-[280px] flex-col p-6 sm:min-h-[320px] sm:p-8 lg:p-10">
          <div className="mb-4 inline-flex w-fit items-center gap-2 border border-[var(--vp-color-stroke)] px-3 py-1.5 text-sm">
            <StitchableLogo className="size-4 text-[var(--vp-color-brand)]" />
            <span className="font-medium">{t.chart.label}</span>
            <ChevronDown className="size-4 text-[var(--vp-color-text-dim)]" aria-hidden />
          </div>
          <BundleGrowthChart
            axisStart={t.chart.axisStart}
            axisEnd={t.chart.axisEnd}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3">
        {t.stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-[var(--vp-color-stroke)] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:p-8 sm:last:border-r-0 lg:p-10"
          >
            <LandingRollingStat
              value={stat.value}
              textSize={24}
              className="font-semibold tracking-tight"
            />
            <p className="mt-2 text-sm text-[var(--vp-color-text-dim)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
