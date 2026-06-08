"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { CopyButton, TerminalLine } from "./landing-shared";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export function TechTrustGrid() {
  const { techTrust, hero } = useMessages().landing;

  return (
    <section
      id="tech-trust"
      data-report-id="tech-trust"
      data-report-type="group"
      className="border-b border-[var(--vp-color-stroke)]"
    >
      <div className="border-b border-[var(--vp-color-stroke)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <ScrollReveal>
          <span className="vp-eyebrow">{techTrust.eyebrow}</span>
          <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {techTrust.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vp-color-text-muted)] sm:text-base">
            <RichText text={techTrust.description} />
          </p>
        </ScrollReveal>
      </div>

      <div className="grid lg:grid-cols-2">
        {techTrust.panels.map((panel, index) => (
          <div
            key={panel.title}
            className={
              index === 0
                ? "border-b border-[var(--vp-color-stroke)] lg:border-b-0 lg:border-r"
                : ""
            }
          >
            <div className="p-6 sm:p-8 lg:p-10">
              <h4 className="text-lg font-semibold sm:text-xl">{panel.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                <RichText text={panel.description} />
              </p>
            </div>
            <div className="border-t border-[var(--vp-color-stroke)]">
              <div className="vp-code-block vp-code-block--flush p-4 sm:p-6 lg:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
                    {panel.title}
                  </span>
                  <CopyButton
                    text={panel.codeLines.join("\n")}
                    label={hero.codeCopy}
                    copiedLabel={hero.codeCopied}
                  />
                </div>
                <div className="space-y-0.5">
                  {panel.codeLines.map((line, i) => {
                    if (!line) return <div key={i} className="h-3" />;
                    const variant =
                      line.startsWith("✔")
                        ? "success"
                        : line.startsWith("//")
                          ? "muted"
                          : line.startsWith("import") || line.startsWith("type")
                            ? "brand"
                            : "default";
                    return (
                      <TerminalLine key={i} variant={variant}>
                        {line}
                      </TerminalLine>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid border-t border-[var(--vp-color-stroke)] sm:grid-cols-3">
        {techTrust.stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-[var(--vp-color-stroke)] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:p-8 sm:last:border-r-0 lg:p-10"
          >
            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-[var(--vp-color-text-dim)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
