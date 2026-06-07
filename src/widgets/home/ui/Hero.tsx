import { Button } from "@/shared/ui/button"
import { ProductPreview } from "./ProductPreview"
import { Check, ArrowRight } from "lucide-react"

const BADGES = ["No signup", "Works on localhost", "Shadow Root UI", "GitHub Issue ready"]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#features"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            A DOM-aware feedback layer for QA, staging &amp; internal tools
          </a>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Feedback, directly on your UI.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Stitchable lets teams leave feedback on real DOM elements, restore markers after UI
            changes, and review issues without screenshots.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#quickstart">
                Get started
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <code className="rounded-md border border-border bg-secondary/60 px-4 py-2.5 font-mono text-sm text-muted-foreground">
              npm i stitchable
            </code>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {BADGES.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Check className="size-3.5 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
          />
          <ProductPreview />
        </div>
      </div>
    </section>
  )
}
