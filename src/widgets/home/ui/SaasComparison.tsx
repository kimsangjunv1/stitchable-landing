"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/shared/ui/scroll-reveal";
import { cn } from "@/shared/lib/utils";

function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--vp-color-stroke)]">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-semibold text-[var(--vp-color-text)] first:pl-0 last:pr-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--vp-color-stroke)] last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-3 align-top first:pl-0 last:pr-0",
                    j === 0
                      ? "font-medium text-[var(--vp-color-text)]"
                      : "text-[var(--vp-color-text-muted)]",
                    j === 2 && "text-[var(--vp-color-brand)]",
                  )}
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SaasComparison() {
  const t = useMessages().landing.saasComparison;
  const [openTool, setOpenTool] = useState<string | null>(null);

  return (
    <section
      id="saas-comparison"
      data-report-id="saas-comparison"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <span className="vp-eyebrow">{t.eyebrow}</span>
          <h3 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={t.description} />
          </p>
        </ScrollReveal>
      </div>

      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
        <ComparisonTable
          headers={t.positioning.headers}
          rows={t.positioning.rows}
        />
      </div>

      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <h4 className="text-lg font-semibold sm:text-xl">{t.advantages.title}</h4>
      </div>

      <StaggerReveal className="grid border-b border-[var(--vp-color-stroke)] sm:grid-cols-2 lg:grid-cols-3">
        {t.advantages.items.map((item, index) => (
          <StaggerItem key={item.title}>
            <div
              className={cn(
                "h-full border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 lg:p-10",
                index % 2 === 0 && "sm:border-r",
                index % 3 !== 2 && "lg:border-r",
              )}
            >
              <span className="font-mono text-xs text-[var(--vp-color-brand)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h5 className="mt-2 text-sm font-semibold">{item.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                <RichText text={item.description} />
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
        <h4 className="mb-6 text-lg font-semibold sm:text-xl">
          {t.honestLimits.title}
        </h4>
        <ComparisonTable
          headers={t.honestLimits.headers}
          rows={t.honestLimits.rows}
        />
      </div>

      <div className="border-b border-[var(--vp-color-stroke)]">
        {t.tools.map((tool) => {
            const isOpen = openTool === tool.name;
            return (
              <div key={tool.name} className="border-b border-[var(--vp-color-stroke)] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenTool(isOpen ? null : tool.name)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left sm:px-10 lg:px-14"
                >
                  <span className="font-medium">{tool.name}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-[var(--vp-color-text-dim)] transition-transform",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <div className="space-y-3 border-t border-[var(--vp-color-stroke)] px-6 py-4 sm:px-10 lg:px-14">
                    <p className="text-sm text-[var(--vp-color-text-muted)]">
                      <RichText text={tool.competitorStrength} />
                    </p>
                    <ul className="space-y-2">
                      {tool.stitchableWins.map((win) => (
                        <li
                          key={win}
                          className="text-sm text-[var(--vp-color-text-muted)] before:mr-2 before:text-[var(--vp-color-brand)] before:content-['→']"
                        >
                          <RichText text={win} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="border-b border-[var(--vp-color-stroke)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <h4 className="text-base font-semibold">{t.selectionGuide.saasTitle}</h4>
          <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
            <RichText text={t.selectionGuide.saasDescription} />
          </p>
          <p className="mt-3 font-mono text-xs text-[var(--vp-color-text-dim)]">
            {t.selectionGuide.saasTools}
          </p>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <h4 className="text-base font-semibold">
            {t.selectionGuide.stitchableTitle}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
            <RichText text={t.selectionGuide.stitchableDescription} />
          </p>
          <a
            href="#quickstart"
            className="vp-btn-brand mt-5 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-colors"
          >
            {t.selectionGuide.cta}
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
