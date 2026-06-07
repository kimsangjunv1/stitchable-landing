"use client"

import { Download, MousePointerClick, MessageSquarePlus, ListChecks, CheckCircle2 } from "lucide-react"
import { useMessages } from "@/app/providers/LocaleProvider"

const ICONS = [Download, MousePointerClick, MessageSquarePlus, ListChecks, CheckCircle2]

export function WorkflowStrip() {
  const steps = useMessages().landing.workflow.steps

  return (
    <section id="how-it-works" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <div key={s.label} className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  <Icon className="size-4.5" />
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <span className="font-mono text-[10px] text-muted-foreground">{i + 1}</span>
                    {s.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
