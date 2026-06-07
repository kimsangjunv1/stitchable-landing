import type { LandingMessages } from "./types"

export const en: LandingMessages = {
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
      eyebrow: "A DOM-aware feedback layer for QA, staging & internal tools",
      title: "Feedback, directly on your UI.",
      description:
        "Stitchable lets teams leave feedback on real DOM elements, restore markers after UI changes, and review issues without screenshots.",
      getStarted: "Get started",
      installCmd: "npm i stitchable",
      badges: ["No signup", "Works on localhost", "Shadow Root UI", "GitHub Issue ready"],
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
    workflow: {
      steps: [
        { label: "Install", desc: "Drop in <Report />" },
        { label: "Click UI", desc: "Pick any element" },
        { label: "Leave feedback", desc: "Markers, not screenshots" },
        { label: "Review", desc: "Reply & triage" },
        { label: "Resolve", desc: "Or promote to GitHub" },
      ],
    },
    features: {
      eyebrow: "Built for real screens",
      title: "Everything you need to replace screenshot QA",
      subtitle:
        "Stitchable attaches feedback directly to the elements it's about — so nothing gets lost in translation.",
      items: [
        {
          title: "DOM Element Feedback",
          desc: "Leave feedback on elements using data-report-id and data-report-type.",
        },
        {
          title: "Position Restoration",
          desc: "Restore markers by finding the same DOM element again, even after the UI changes.",
        },
        {
          title: "Shadow Root UI",
          desc: "Panels, overlays, and markers are isolated from host app styles. No CSS import required.",
        },
        {
          title: "Local First",
          desc: "If no handlers are provided, Stitchable stores feedback in localStorage.",
        },
        {
          title: "Server Persistence",
          desc: "Use onList, onCreate, onUpdate, and onDelete to connect your own API.",
        },
        {
          title: "Feedback Workflow",
          desc: "Replies, review states, denied / checkout / confirm, and resolved status.",
        },
        {
          title: "GitHub Issue Promotion",
          desc: "Promote important feedback to GitHub Issues through github.onCreate.",
        },
        {
          title: "Keyboard Shortcuts",
          desc: "Keyboard-first controls built for fast QA workflows.",
        },
        {
          title: "Environment & Version Context",
          desc: "Separate feedback by project id, environment, route, and app version.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Free to ship. Ready for the cloud.",
      description:
        "The library is fully usable on its own. Upgrade when your team needs shared persistence and collaboration.",
      freeTitle: "Free",
      freeSubtitle: "Open source",
      freePrice: "$0",
      freePriceSuffix: "/ forever",
      freeCta: "Install the library",
      proTitle: "Pro",
      proSubtitle: "For teams",
      proBadge: "Cloud ready",
      proPrice: "Coming soon",
      proCta: "Join the waitlist",
      freeFeatures: [
        "DOM Element Feedback",
        "Shadow Root UI",
        "localStorage persistence",
        "Import / Export",
        "Keyboard Shortcuts",
        "Feedback List",
        "Reply / Review Workflow",
        "GitHub Issue URL / handler ready",
      ],
      proFeatures: [
        "Server persistence",
        "Team workflow",
        "GitHub Issue sync",
        "Realtime collaboration",
        "AI summaries",
        "Analytics",
      ],
    },
    footer: {
      tagline: "A DOM-aware feedback layer for QA, staging & internal tools.",
      docs: "Docs",
      features: "Features",
      github: "GitHub",
    },
  },
}
