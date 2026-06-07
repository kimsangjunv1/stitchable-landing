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

const FEATURES = [
  {
    icon: MousePointer2,
    title: "DOM Element Feedback",
    desc: "Leave feedback on elements using data-report-id and data-report-type.",
  },
  {
    icon: Move,
    title: "Position Restoration",
    desc: "Restore markers by finding the same DOM element again, even after the UI changes.",
  },
  {
    icon: Layers,
    title: "Shadow Root UI",
    desc: "Panels, overlays, and markers are isolated from host app styles. No CSS import required.",
  },
  {
    icon: HardDrive,
    title: "Local First",
    desc: "If no handlers are provided, Stitchable stores feedback in localStorage.",
  },
  {
    icon: Server,
    title: "Server Persistence",
    desc: "Use onList, onCreate, onUpdate, and onDelete to connect your own API.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Feedback Workflow",
    desc: "Replies, review states, denied / checkout / confirm, and resolved status.",
  },
  {
    icon: GithubIcon,
    title: "GitHub Issue Promotion",
    desc: "Promote important feedback to GitHub Issues through github.onCreate.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    desc: "Keyboard-first controls built for fast QA workflows.",
  },
  {
    icon: GitBranch,
    title: "Environment & Version Context",
    desc: "Separate feedback by project id, environment, route, and app version.",
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Built for real screens</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Everything you need to replace screenshot QA
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Stitchable attaches feedback directly to the elements it&apos;s about — so nothing gets
          lost in translation.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="bg-card p-6 transition-colors hover:bg-secondary/40">
            <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary">
              <f.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
