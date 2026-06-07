"use client"

import {
  MousePointer2,
  Move,
  Layers,
  HardDrive,
  Server,
  GitPullRequestArrow,
  Keyboard,
  GitBranch,
} from "lucide-react"
import { GithubIcon } from "./GithubIcon"
import { useMessages } from "@/app/providers/LocaleProvider"

const ICONS = [
  MousePointer2,
  Move,
  Layers,
  HardDrive,
  Server,
  GitPullRequestArrow,
  GithubIcon,
  Keyboard,
  GitBranch,
]

export function FeatureGrid() {
  const t = useMessages().landing.features

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">{t.eyebrow}</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">{t.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((f, i) => {
          const Icon = ICONS[i]
          return (
            <div key={f.title} className="bg-card p-6 transition-colors hover:bg-secondary/40">
              <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
