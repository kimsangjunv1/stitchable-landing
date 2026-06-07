import { StitchableLogo } from "./StitchableLogo"
import { GithubIcon } from "./GithubIcon"
import {
  Plus,
  MessageSquare,
  Layers,
  FileText,
  Check,
  ChevronDown,
  CornerDownRight,
  Search,
  Bell,
} from "lucide-react"

export function ProductPreview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span className="truncate font-mono text-[11px] text-muted-foreground">
            app.acme.dev/dashboard
          </span>
        </div>
      </div>

      <div className="relative">
        <HostApp />

        <div className="pointer-events-none absolute inset-0">
          <PlacedMarker />
          <MarkerHoverCard />
          <PageDetailsPanel />
          <FeedbackListPanel />
        </div>

        <Toolbar />
      </div>
    </div>
  )
}

function HostApp() {
  return (
    <div className="select-none px-5 py-5 sm:px-7 sm:py-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="size-6 rounded-md bg-foreground/90" />
          <span className="text-sm font-semibold text-foreground">Acme Analytics</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Search className="size-4" />
          <Bell className="size-4" />
          <div className="size-6 rounded-full bg-muted-foreground/25" />
        </div>
      </div>

      <section
        data-report-id="hero"
        className="relative mb-5 rounded-lg border border-dashed border-primary/60 bg-primary/[0.04] p-5"
      >
        <span className="absolute -top-2 left-3 rounded bg-primary px-1.5 py-0.5 font-mono text-[9px] font-medium text-primary-foreground">
          data-report-id=&quot;hero&quot;
        </span>
        <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Monthly revenue
        </p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-foreground">$48,250</p>
            <p className="text-xs text-emerald-400">+12.4% vs last month</p>
          </div>
          <button
            data-report-id="hero-cta"
            className="rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background"
          >
            Export report
          </button>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Active users", value: "8,492" },
          { label: "Sessions", value: "21,118" },
          { label: "Bounce rate", value: "32.1%" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border bg-background/40 p-3"
          >
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
            <p className="mt-1 text-base font-semibold text-foreground">{s.value}</p>
            <div className="mt-3 flex h-6 items-end gap-1">
              {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-muted-foreground/25"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Toolbar() {
  return (
    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-border bg-popover/95 px-1.5 py-1.5 shadow-xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-1.5 rounded-full px-2 py-1">
          <StitchableLogo className="size-4 text-primary" />
          <span className="text-xs font-semibold text-popover-foreground">Stitchable</span>
          <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-primary">
            stage
          </span>
        </div>

        <div className="mx-0.5 h-5 w-px bg-border" />

        <div className="flex items-center gap-3 px-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <MessageSquare className="size-3.5" /> 12 found
          </span>
          <span className="flex items-center gap-1">
            <Layers className="size-3.5" /> 4 groups
          </span>
          <span className="flex items-center gap-1">
            <Check className="size-3.5" /> 7 items
          </span>
        </div>

        <div className="mx-0.5 h-5 w-px bg-border" />

        <button className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
          <Plus className="size-3.5" /> Add feedback
        </button>
      </div>
    </div>
  )
}

function PageDetailsPanel() {
  return (
    <div className="absolute left-4 top-4 hidden w-52 rounded-lg border border-border bg-popover/95 p-3 shadow-xl shadow-black/40 backdrop-blur lg:block">
      <div className="mb-2 flex items-center gap-1.5 text-popover-foreground">
        <FileText className="size-3.5 text-primary" />
        <span className="text-xs font-semibold">Page details</span>
      </div>
      <dl className="space-y-1.5 text-[11px]">
        {[
          ["Project", "acme-app"],
          ["Env", "stage"],
          ["Route", "/dashboard"],
          ["Version", "1.2.3"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="font-mono text-popover-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const FEEDBACK = [
  { id: "hero-cta", text: "Export button overlaps on mobile", state: "review", author: "MK" },
  { id: "hero", text: "Use the new revenue copy here", state: "resolved", author: "JD" },
  { id: "nav", text: "Bell icon needs a badge count", state: "open", author: "AR" },
]

const STATE_STYLES: Record<string, string> = {
  open: "bg-primary/15 text-primary",
  review: "bg-sky-500/15 text-sky-400",
  resolved: "bg-emerald-500/15 text-emerald-400",
}

function FeedbackListPanel() {
  return (
    <div className="absolute right-4 top-4 hidden w-64 rounded-lg border border-border bg-popover/95 shadow-xl shadow-black/40 backdrop-blur sm:block">
      <div className="flex items-center justify-between border-b border-border/70 px-3 py-2.5">
        <div className="flex items-center gap-1.5 text-popover-foreground">
          <MessageSquare className="size-3.5 text-primary" />
          <span className="text-xs font-semibold">Feedback</span>
        </div>
        <button className="flex items-center gap-1 rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
          All <ChevronDown className="size-3" />
        </button>
      </div>

      <ul className="divide-y divide-border/60">
        {FEEDBACK.map((f) => (
          <li key={f.id} className="px-3 py-2.5">
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="truncate font-mono text-[10px] text-muted-foreground">#{f.id}</span>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide ${STATE_STYLES[f.state]}`}
              >
                {f.state}
              </span>
            </div>
            <p className="text-[11px] leading-snug text-popover-foreground">{f.text}</p>
            <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="flex size-4 items-center justify-center rounded-full bg-muted text-[8px] font-medium text-foreground">
                {f.author}
              </span>
              <span>replied 2h ago</span>
            </div>
          </li>
        ))}
      </ul>

      <button className="flex w-full items-center justify-center gap-1.5 border-t border-border/70 py-2 text-[10px] font-medium text-muted-foreground">
        <GithubIcon className="size-3" /> Promote to GitHub Issue
      </button>
    </div>
  )
}

function PlacedMarker() {
  return (
    <div className="absolute left-[42%] top-[44%] z-10 sm:left-[40%]">
      <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
      <span className="relative flex size-6 items-center justify-center rounded-full rounded-bl-none bg-primary text-[10px] font-bold text-primary-foreground shadow-lg">
        3
      </span>
    </div>
  )
}

function MarkerHoverCard() {
  return (
    <div className="absolute left-[44%] top-[52%] z-20 w-56 rounded-lg border border-border bg-popover/98 p-3 shadow-2xl shadow-black/50 backdrop-blur sm:left-[42%]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="flex size-5 items-center justify-center rounded-full bg-muted text-[9px] font-medium text-foreground">
            MK
          </span>
          <span className="text-[11px] font-medium text-popover-foreground">Maya K.</span>
        </div>
        <span className="rounded bg-sky-500/15 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-sky-400">
          review
        </span>
      </div>
      <p className="text-[11px] leading-snug text-popover-foreground">
        Export button overlaps the value on mobile — can we wrap it below?
      </p>
      <div className="mt-2 flex items-start gap-1.5 rounded-md bg-secondary/60 p-2">
        <CornerDownRight className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
        <p className="text-[10px] leading-snug text-muted-foreground">
          Good catch — pushing a fix to stage now.
        </p>
      </div>
    </div>
  )
}
