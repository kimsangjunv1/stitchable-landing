"use client";

import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { CopyButton, TagPill, TerminalLine } from "./landing-shared";
import { cn } from "@/shared/lib/utils";

function FeatureBullets({ items }: { items: string[] }) {
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

function CodeVisual({
  lines,
  label,
  copyText,
  copyLabel,
  copiedLabel,
}: {
  lines: string[];
  label?: string;
  copyText?: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="vp-code-block w-full max-w-lg p-4 sm:p-5">
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
      </div>
    </div>
  );
}

function DualCodeVisual({
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
    <div className="flex h-full flex-col justify-center gap-3 p-4 sm:p-6 lg:p-8">
      <div className="vp-code-block p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
            {npmLabel}
          </span>
          <CopyButton
            text={npmCmd}
            label={copyLabel}
            copiedLabel={copiedLabel}
          />
        </div>
        <code className="font-mono text-sm text-[var(--vp-color-brand)]">
          {npmCmd}
        </code>
      </div>
      <div className="vp-code-block p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
            {yarnLabel}
          </span>
          <CopyButton
            text={yarnCmd}
            label={copyLabel}
            copiedLabel={copiedLabel}
          />
        </div>
        <code className="font-mono text-sm text-[var(--vp-color-brand)]">
          {yarnCmd}
        </code>
      </div>
    </div>
  );
}

function BenchmarkVisual({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  const maxWidth = 100;
  const widths = [maxWidth, 38, 22];

  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-lg space-y-5">
        {stats.map((stat, i) => (
          <div key={stat.label}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--vp-color-text-muted)]">
                {stat.label}
              </span>
              <span
                className={cn(
                  "font-mono text-sm font-semibold tabular-nums",
                  i === 0
                    ? "text-[var(--vp-color-brand)]"
                    : "text-[var(--vp-color-text-dim)]",
                )}
              >
                {stat.value}
              </span>
            </div>
            <div
              className={cn(
                i === 0 ? "vp-benchmark-bar" : "vp-benchmark-bar-muted",
              )}
              style={{ width: `${widths[i] ?? 30}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TagsVisual({ tags }: { tags: string[] }) {
  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <TagPill key={tag} dark>
            {tag}
          </TagPill>
        ))}
      </div>
    </div>
  );
}

function DomDiagramVisual() {
  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative">
        <div className="rounded-lg border border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg-soft)] px-6 py-4 font-mono text-sm text-[var(--vp-color-text)]">
          DOM
        </div>
        <div className="absolute -bottom-3 -right-4 rounded-lg border border-[var(--vp-color-brand)] bg-[var(--vp-color-bg-code)] px-4 py-2 font-mono text-[10px] text-[var(--vp-color-brand)]">
          Shadow Root
        </div>
      </div>
    </div>
  );
}

function SecurityListVisual({ items }: { items: string[] }) {
  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <ul className="w-full max-w-md space-y-2">
        {items.map((item, i) => (
          <li
            key={item}
            className={cn(
              "flex items-center gap-3 rounded-lg border border-[var(--vp-color-stroke)] px-4 py-3 text-sm text-[var(--vp-color-text)]",
              i === 1 && "vp-check-glow",
            )}
          >
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--vp-color-brand)]">
              <Check className="size-3 text-[#0a0a0a]" />
            </span>
            {item}
          </li>
        ))}
      </ul>
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
  children: ReactNode;
};

function FeatureRow({
  id,
  eyebrow,
  title,
  description,
  bullets,
  learnMoreHref,
  learnMoreLabel,
  reverse,
  children,
}: FeatureRowProps) {
  return (
    <section
      id={id}
      className="grid min-h-[452px] border-b border-[var(--vp-color-stroke)] md:grid-cols-2"
    >
      <div
        className={cn(
          "flex flex-col justify-center border-b border-[var(--vp-color-stroke)] p-8 md:border-b-0 md:p-10 lg:p-14",
          reverse && "md:order-2 md:border-l",
          !reverse && "md:border-r",
        )}
      >
        <span className="vp-eyebrow">{eyebrow}</span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h3>
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
      </div>

      <div
        className={cn(
          "min-h-[452px] bg-[var(--vp-color-bg-soft)]",
          reverse && "md:order-1",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function FeatureSections() {
  const messages = useMessages().landing;
  const {
    gettingStarted,
    showcase,
    trust,
    benefits,
    capabilities,
    fullstack,
    hero,
  } = messages;

  const learnMore = hero.readDocs;

  return (
    <div id="features">
      <FeatureRow
        id="quickstart"
        eyebrow={gettingStarted.eyebrow}
        title={gettingStarted.title}
        description={gettingStarted.description}
        learnMoreHref="/guide"
        learnMoreLabel={learnMore}
      >
        <DualCodeVisual
          npmCmd={gettingStarted.npmCmd}
          yarnCmd={gettingStarted.yarnCmd}
          npmLabel={gettingStarted.npmLabel}
          yarnLabel={gettingStarted.yarnLabel}
          copyLabel={hero.codeCopy}
          copiedLabel={hero.codeCopied}
        />
      </FeatureRow>

      {showcase.tabs
        .filter((tab) => tab.id !== "install")
        .map((tab, index) => (
        <FeatureRow
          key={tab.id}
          id={`feature-${tab.id}`}
          eyebrow={tab.label}
          title={tab.title}
          description={tab.description}
          bullets={tab.bullets}
          learnMoreHref="/guide"
          learnMoreLabel={learnMore}
          reverse={index % 2 === 1}
        >
          <CodeVisual
            lines={tab.output}
            copyText={tab.output.join("\n")}
            copyLabel={hero.codeCopy}
            copiedLabel={hero.codeCopied}
          />
        </FeatureRow>
      ))}

      <FeatureRow
        id="how-it-works"
        eyebrow="workflow"
        title={trust.title}
        description={trust.description}
        bullets={benefits.shipping.items}
        learnMoreHref="#features"
        learnMoreLabel={learnMore}
        reverse
      >
        <BenchmarkVisual stats={trust.stats} />
      </FeatureRow>

      <FeatureRow
        id="performance"
        eyebrow="performance"
        title={trust.performance.title}
        description={trust.performance.description}
        learnMoreHref="/guide"
        learnMoreLabel={learnMore}
      >
        <DomDiagramVisual />
      </FeatureRow>

      {capabilities.items.map((item, index) => {
        const capabilityIds = ["feature-dom", "feature-report", "feature-nextjs"];
        return (
        <FeatureRow
          key={item.title}
          id={capabilityIds[index]}
          eyebrow={item.tags[0]?.toLowerCase() ?? "feature"}
          title={item.title}
          description={item.description}
          learnMoreHref="/guide"
          learnMoreLabel={learnMore}
          reverse={index % 2 === 1}
        >
          <TagsVisual tags={item.tags} />
        </FeatureRow>
        );
      })}

      <FeatureRow
        id="security"
        eyebrow="isolation"
        title={benefits.security.title}
        description={benefits.security.description}
        learnMoreHref="/guide"
        learnMoreLabel={learnMore}
        reverse
      >
        <SecurityListVisual items={benefits.security.items} />
      </FeatureRow>

      <section
        id="fullstack"
        className="border-b border-[var(--vp-color-stroke)] px-5 py-16 sm:px-10 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {fullstack.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--vp-color-text-muted)]">
            <RichText text={fullstack.description} />
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-px border border-[var(--vp-color-stroke)] md:grid-cols-3">
          {fullstack.items.map((item) => (
            <div
              key={item.title}
              className="border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg-soft)] p-8 md:border-r md:last:border-r-0"
            >
              <h4 className="text-sm font-semibold text-[var(--vp-color-text)]">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
                <RichText text={item.description} />
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
