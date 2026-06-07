"use client"

import { useState } from "react"
import { useMessages } from "@/app/providers/LocaleProvider"
import { TerminalLine } from "./landing-shared"
import { cn } from "@/shared/lib/utils"

export function DarkShowcase() {
  const { showcase, fullstack } = useMessages().landing
  const [activeTab, setActiveTab] = useState(showcase.tabs[0].id)
  const current = showcase.tabs.find((t) => t.id === activeTab) ?? showcase.tabs[0]

  return (
    <section className="bg-[var(--vp-color-primary)] text-white">
      {/* Showcase header */}
      <div className="border-t border-[var(--vp-color-nickel)] px-5 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {showcase.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#98989f]">
            {showcase.subtitle}
          </p>
        </div>
      </div>

      {/* Tab nav */}
      <div className="border-t border-[var(--vp-color-nickel)]">
        <nav className="flex overflow-x-auto border-b border-[var(--vp-color-nickel)]">
          {showcase.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "shrink-0 border-b-2 px-6 py-3 font-mono text-sm transition-colors",
                activeTab === tab.id
                  ? "border-[var(--vp-color-vite)] text-white"
                  : "border-transparent text-[#98989f] hover:text-white",
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-[var(--vp-color-nickel)] p-8 lg:border-b-0 lg:border-r lg:p-12">
            <p className="font-mono text-xs text-[var(--vp-color-vite)]">
              Stitchable {current.label}
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{current.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#98989f]">{current.description}</p>
            <ul className="mt-6 space-y-2">
              {current.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-[#c8c8d0]">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--vp-color-vite)]" />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-[#98989f]">{current.poweredBy}</p>
          </div>

          <div className="vp-code-block flex flex-col justify-center p-8 lg:p-12">
            <div className="space-y-0.5">
              {current.output.map((line, i) => {
                if (!line) return <div key={i} className="h-3" />
                const variant = line.startsWith("✔")
                  ? "success"
                  : line.startsWith("$") || line.startsWith("[")
                    ? "command"
                    : line.startsWith("⚠")
                      ? "muted"
                      : "default"
                return (
                  <TerminalLine key={i} variant={variant}>
                    {line}
                  </TerminalLine>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fullstack */}
      <div className="border-t border-[var(--vp-color-nickel)] px-5 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{fullstack.title}</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#98989f]">{fullstack.description}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-px border border-[var(--vp-color-nickel)] md:grid-cols-3">
          {fullstack.items.map((item) => (
            <div
              key={item.title}
              className="border-[var(--vp-color-nickel)] bg-[var(--vp-color-slate)] p-8 md:border-r md:last:border-r-0"
            >
              <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#98989f]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
