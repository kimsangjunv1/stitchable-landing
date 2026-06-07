"use client"

import { useState } from "react"

type Example = {
  id: string
  label: string
  code: string
}

const EXAMPLES: Example[] = [
  {
    id: "quickstart",
    label: "Quick start",
    code: `import { Report } from "stitchable";

export default function App() {
  return (
    <>
      <Report />

      <main>
        <section data-report-id="hero" data-report-type="group">
          <button data-report-id="hero-cta">Get Started</button>
        </section>
      </main>
    </>
  );
}`,
  },
  {
    id: "config",
    label: "Config",
    code: `<Report
  project={{
    id: "my-app",
    env: "stage",
    version: "1.2.3",
  }}
  ui={{
    appearance: "system",
    locale: "en",
    visibleShortcutKeys: true,
  }}
  visibility={{
    devOnly: true,
  }}
/>`,
  },
  {
    id: "server",
    label: "Server persistence",
    code: `<Report
  project={{ id: "my-app", env: "stage" }}
  onList={({ pathname }) =>
    fetch(\`/api/feedbacks?pathname=\${pathname}\`).then((res) => res.json())
  }
  onCreate={(payload) =>
    fetch("/api/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json())
  }
  onUpdate={(id, payload) =>
    fetch(\`/api/feedbacks/\${id}\`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json())
  }
/>`,
  },
  {
    id: "github",
    label: "GitHub Issue",
    code: `<Report
  project={{ id: "my-app", env: "stage" }}
  github={{
    enabled: true,
    modes: ["on-create", "from-list"],
    onCreate: createGitHubIssue,
  }}
/>`,
  },
]

export function CodeExamples() {
  const [active, setActive] = useState(EXAMPLES[0].id)
  const current = EXAMPLES.find((e) => e.id === active) ?? EXAMPLES[0]

  return (
    <section id="quickstart" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Drop-in API</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          One component. Local by default.
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Start with localStorage, then wire your own API with handlers — and promote to GitHub when
          it matters.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex flex-wrap items-center gap-1 border-b border-border/70 bg-secondary/40 px-2 py-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setActive(ex.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                active === ex.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 border-b border-border/50 px-4 py-2">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">app.tsx</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-foreground/90">
          <code>{current.code}</code>
        </pre>
      </div>
    </section>
  )
}
