"use client"

import { Check } from "lucide-react"
import { useMessages } from "@/app/providers/LocaleProvider"
import { CopyButton, TagPill } from "./landing-shared"
import { cn } from "@/shared/lib/utils"

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[var(--vp-color-primary)]">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export function BentoSections() {
  const messages = useMessages().landing
  const { gettingStarted, capabilities, trust, benefits } = messages

  return (
    <div className="border-t border-[var(--vp-color-stroke)]">
      {/* Getting started — 2 col */}
      <section
        id="quickstart"
        className="grid border-b border-[var(--vp-color-stroke)] md:grid-cols-2"
      >
        <div className="border-b border-[var(--vp-color-stroke)] p-8 md:border-b-0 md:border-r md:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--vp-color-grey)]">
            {gettingStarted.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-[var(--vp-color-primary)] sm:text-3xl">
            {gettingStarted.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--vp-color-grey)]">
            {gettingStarted.description.split("`").map((part, i) =>
              i % 2 === 1 ? (
                <code
                  key={i}
                  className="rounded bg-[var(--vp-color-beige)] px-1.5 py-0.5 font-mono text-xs text-[var(--vp-color-primary)]"
                >
                  {part}
                </code>
              ) : (
                part
              ),
            )}
          </p>
          <p className="mt-2 text-sm text-[var(--vp-color-grey)]">
            {gettingStarted.ciNote}{" "}
            <a href="#" className="text-[var(--vp-color-brand)] hover:underline">
              {gettingStarted.ciLink}
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3 p-8 md:p-10">
          <div className="vp-code-block rounded-lg p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#98989f]">
                {gettingStarted.npmLabel}
              </span>
              <CopyButton
                text={gettingStarted.npmCmd}
                label={messages.hero.codeCopy}
                copiedLabel={messages.hero.codeCopied}
              />
            </div>
            <code className="text-sm">{gettingStarted.npmCmd}</code>
          </div>
          <div className="vp-code-block rounded-lg p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#98989f]">
                {gettingStarted.yarnLabel}
              </span>
              <CopyButton
                text={gettingStarted.yarnCmd}
                label={messages.hero.codeCopy}
                copiedLabel={messages.hero.codeCopied}
              />
            </div>
            <code className="text-sm">{gettingStarted.yarnCmd}</code>
          </div>
        </div>
      </section>

      {/* Capabilities — 3 col */}
      <section id="features" className="grid border-b border-[var(--vp-color-stroke)] md:grid-cols-3">
        {capabilities.items.map((item, i) => (
          <div
            key={item.title}
            className={cn(
              "border-b border-[var(--vp-color-stroke)] p-8 md:border-b-0 md:p-10",
              i < capabilities.items.length - 1 && "md:border-r",
            )}
          >
            <h3 className="text-base font-semibold text-[var(--vp-color-primary)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-grey)]">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Trust — 2 col */}
      <section id="how-it-works" className="grid border-b border-[var(--vp-color-stroke)] md:grid-cols-2">
        <div className="border-b border-[var(--vp-color-stroke)] p-8 md:border-b-0 md:border-r md:p-10">
          <h3 className="text-base font-semibold text-[var(--vp-color-primary)]">{trust.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-grey)]">
            {trust.description}
          </p>
          <div className="mt-6 space-y-4">
            {trust.stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-[var(--vp-color-primary)]">
                  {stat.value}
                </span>
                <span className="text-sm text-[var(--vp-color-grey)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="text-base font-semibold text-[var(--vp-color-primary)]">
            {trust.performance.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-grey)]">
            {renderBoldText(trust.performance.description)}
          </p>
          <div className="mt-8 flex justify-end">
            <div className="relative">
              <div className="rounded-lg border border-[var(--vp-color-stroke)] bg-[var(--vp-color-beige)] px-4 py-3 font-mono text-xs text-[var(--vp-color-primary)]">
                DOM
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-lg border border-[var(--vp-color-stroke)] bg-white px-3 py-2 font-mono text-[10px] text-[var(--vp-color-grey)]">
                Shadow Root
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — 2 col */}
      <section className="grid md:grid-cols-2">
        <div className="border-b border-[var(--vp-color-stroke)] p-8 md:border-b-0 md:border-r md:p-10">
          <h3 className="text-base font-semibold text-[var(--vp-color-primary)]">
            {benefits.shipping.title}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {benefits.shipping.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--vp-color-grey)]"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--vp-color-brand)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="text-base font-semibold text-[var(--vp-color-primary)]">
            {benefits.security.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--vp-color-grey)]">
            {benefits.security.description}
          </p>
          <ul className="mt-5 space-y-2">
            {benefits.security.items.map((item, i) => (
              <li
                key={item}
                className={cn(
                  "flex items-center gap-3 rounded-lg border border-[var(--vp-color-stroke)] px-4 py-3 text-sm text-[var(--vp-color-primary)]",
                  i === 1 && "vp-check-glow border-[var(--vp-color-shine)]",
                )}
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--vp-color-primary)]">
                  <Check className="size-3 text-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
