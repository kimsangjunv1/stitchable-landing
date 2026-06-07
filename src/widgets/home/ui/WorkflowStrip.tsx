import { Download, MousePointerClick, MessageSquarePlus, ListChecks, CheckCircle2 } from "lucide-react"

const STEPS = [
  { icon: Download, label: "Install", desc: "Drop in <Report />" },
  { icon: MousePointerClick, label: "Click UI", desc: "Pick any element" },
  { icon: MessageSquarePlus, label: "Leave feedback", desc: "Markers, not screenshots" },
  { icon: ListChecks, label: "Review", desc: "Reply & triage" },
  { icon: CheckCircle2, label: "Resolve", desc: "Or promote to GitHub" },
]

export function WorkflowStrip() {
  return (
    <section id="how-it-works" className="border-y border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
                <s.icon className="size-4.5" />
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <span className="font-mono text-[10px] text-muted-foreground">{i + 1}</span>
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
