import type { LandingMessages } from "./types"
import { guideEn } from "./guide/en"

export const en: LandingMessages = {
  guide: guideEn,
  localeOption: {
    en: "English",
    ko: "한국어",
  },
  panel: {
    stopFeedback: "Stop feedback",
    addFeedback: "Add feedback",
    statsFound: "Found",
    statsGroup: "Group",
    statsItem: "Item",
    tabPageDetails: "Page details",
    tabFeedbackList: "Feedback list",
  },
  author: {
    placeholder: "Author",
    creatorLabel: "Creator",
  },
  composer: {
    placeholder: "Leave your feedback",
    sendAriaLabel: "Send",
  },
  thread: {
    resolved: "Resolved",
    select: "Select",
  },
  status: {
    feedback: {
      currently_wait: "Currently waiting",
      suggested: "Suggested",
      resolved: "Resolved",
    },
  },
  statusText: {
    selectedItem: "Selected item",
  },
  resolution: {
    issueResolvedMessage: "Issue has been resolved.",
  },
  landing: {
    header: {
      beta: "beta",
      navFeatures: "Features",
      navHowItWorks: "How it works",
      navDocs: "Docs",
      navPricing: "Pricing",
      github: "GitHub",
      getStarted: "Get Started",
    },
    hero: {
      titleLine1: "Feedback, directly",
      titleLine2: "on your UI.",
      description:
        "Leave feedback on real DOM elements, restore markers after UI changes, and review issues without screenshots.",
      license: "Free and open source under the MIT license.",
      getStarted: "Get started",
      readDocs: "Read the docs",
      copyPrompt: "Copy Prompt",
      codeCopy: "Copy",
      codeCopied: "Copied",
      copyPromptText:
        "Integrate Stitchable into my React/Next.js app. Install with npm i stitchable and add the <Report /> component.",
    },
    terminal: {
      lines: [
        "$ npm i stitchable",
        "✔ Dependencies installed in 1.2s",
        "",
        "$ npx stitchable init",
        "? Select framework › Next.js",
        "? Project directory › ./my-app",
        "✔ Stitchable configured",
        "",
        "→ Next: import { Report } from 'stitchable'",
      ],
    },
    gettingStarted: {
      eyebrow: "Getting started",
      title: "Install Stitchable",
      description:
        "Install once, open a new terminal session, then run `npm i stitchable`.",
      ciNote: "For CI, use",
      ciLink: "GitHub Actions",
      npmLabel: "npm / pnpm / bun",
      npmCmd: "npm i stitchable",
      yarnLabel: "yarn",
      yarnCmd: "yarn add stitchable",
    },
    capabilities: {
      items: [
        {
          title: "Feedback on real DOM elements",
          description:
            "Attach feedback using data-report-id and data-report-type on any element.",
          tags: ["DOM", "markers", "select"],
        },
        {
          title: "Simplifies everyday QA",
          description: "One configuration and a consistent feedback flow across your stack.",
          tags: ["<Report />", "localStorage", "API", "GitHub"],
        },
        {
          title: "Powering your favorite frameworks",
          description: "Supports every framework built on React.",
          tags: ["Next.js", "Vite", "Remix", "+ more"],
        },
      ],
    },
    trust: {
      title: "A trusted workflow to standardize on",
      description:
        "An open-source feedback layer that replaces screenshot QA — collaborate directly on real screens.",
      stats: [
        { value: "0", label: "Signups required" },
        { value: "100%", label: "Shadow Root isolation" },
        { value: "∞", label: "localhost support" },
      ],
      performance: {
        title: "Stay fast during QA",
        description:
          "Leave feedback with **DOM markers** instead of screenshots, **restore positions** after UI changes, and **promote to GitHub Issues** instantly.",
      },
    },
    benefits: {
      shipping: {
        title: "Focus on shipping, not tooling",
        items: [
          "Stop wasting time on screenshot & annotation tools",
          "Improve cross-team context sharing",
          "Standardize feedback for humans and AI workflows",
        ],
      },
      security: {
        title: "Isolated from your host app",
        description:
          "Panels, overlays, and markers are fully isolated from host styles via Shadow Root.",
        items: [
          "No CSS import required — Shadow DOM isolation",
          "localStorage first, optional server API",
          "Separate feedback by environment, version & route",
        ],
      },
    },
    showcase: {
      title: "Everything you need in one tool",
      subtitle:
        "Stitchable unifies your entire QA workflow — from collecting feedback to review and resolution — in a single layer.",
      tabs: [
        {
          id: "install",
          label: "install",
          title: "Integrate in 5 minutes",
          description: "Add a feedback layer to your React app with a single npm install.",
          bullets: [
            "Shadow Root UI — no CSS import required",
            "Works on localhost, staging & production",
            "Identify elements with data-report-id",
            "Built-in keyboard shortcuts",
          ],
          poweredBy: "Powered by React Shadow DOM",
          output: [
            "$ npm i stitchable",
            "added 1 package in 0.8s",
            "",
            "import { Report } from 'stitchable'",
            "",
            "<Report projectId=\"my-app\" />",
            "✔ Feedback layer ready",
          ],
        },
        {
          id: "feedback",
          label: "feedback",
          title: "Feedback directly on DOM elements",
          description: "Click once to select an element and leave a marker.",
          bullets: [
            "Element-level feedback without screenshots",
            "Reply, review & resolve workflow",
            "denied / checkout / confirm states",
            "Auto-record environment & version context",
          ],
          poweredBy: "Powered by DOM Anchoring",
          output: [
            "[feedback] Export button overlaps value",
            "  element: button[data-report-id='export-btn']",
            "  env: stage · route: /dashboard",
            "  status: currently_wait",
            "",
            "✔ Marker placed on DOM element",
          ],
        },
        {
          id: "restore",
          label: "restore",
          title: "Restore markers after UI changes",
          description: "Find the same DOM element again and restore marker positions.",
          bullets: [
            "Track elements via data-report-id",
            "Keep markers after UI refactors",
            "Separate by route & environment",
            "Import / export support",
          ],
          poweredBy: "Powered by Position Restoration",
          output: [
            "$ stitchable restore --env stage",
            "Scanning 42 feedback items...",
            "✔ Restored 38 markers",
            "⚠ 4 items need re-anchoring",
          ],
        },
        {
          id: "github",
          label: "github",
          title: "Promote to GitHub Issues",
          description: "Escalate important feedback to GitHub Issues instantly.",
          bullets: [
            "Connect via github.onCreate handler",
            "Automatic feedback → Issue mapping",
            "Team triage workflow",
            "Status sync ready",
          ],
          poweredBy: "Powered by GitHub API",
          output: [
            "$ stitchable promote --id fb-128",
            "Creating GitHub Issue...",
            "✔ Issue #42 created",
            "  https://github.com/org/repo/issues/42",
          ],
        },
        {
          id: "export",
          label: "export",
          title: "Export reports",
          description: "Export feedback lists as JSON for sharing.",
          bullets: [
            "JSON export / import",
            "Filter by environment & version",
            "Team-shareable reports",
            "AI summaries ready",
          ],
          poweredBy: "Powered by JSON Export",
          output: [
            "$ stitchable export --env stage",
            "Exporting 12 feedback items...",
            "✔ Saved to feedback-report.json",
            "  12 items · 3 resolved · 2 pending",
          ],
        },
      ],
    },
    fullstack: {
      title: "Fullstack? No problem.",
      description:
        "Stitchable can be the foundation of any React-based web app — from SPAs to fullstack meta frameworks.",
      items: [
        {
          title: "Meta Frameworks",
          description: "Next.js App Router, Pages Router, Remix, and more",
        },
        {
          title: "Platform Agnostic",
          description: "First-class support on Vercel, Netlify, Cloudflare & self-hosted",
        },
        {
          title: "Any Environment",
          description: "Separate feedback by localhost, staging, and production",
        },
      ],
    },
    cta: {
      title: "Take your team's QA productivity to the next level with Stitchable",
      button: "Get started",
    },
    footer: {
      companyTitle: "COMPANY",
      companyLinks: [
        { label: "Docs", href: "/guide" },
        { label: "Features", href: "#features" },
        { label: "GitHub", href: "#" },
      ],
      socialTitle: "SOCIAL",
      copyright: "© 2026 Stitchable contributors.",
    },
    preview: {
      title: "Feedback workflow",
      subtitle: "Add feedback → pick element → reply → resolve",
      exportReport: "Export report",
      progress: [
        "Panel idle",
        "Add feedback",
        "Select element",
        "Send feedback",
        "Marker preview",
        "Write reply",
        "Resolve issue",
      ],
      feedbackMessage: "Export button overlaps the value on mobile",
      replyMessage: "Including a flex-wrap fix in tomorrow's stage deploy",
      designer: "Maya K.",
      developer: "Dev Team",
      envLabel: "stage",
    },
  },
}
