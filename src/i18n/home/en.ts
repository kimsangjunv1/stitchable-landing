import type { HomeMessages } from "@/i18n/landing/types";

export const homeEn: HomeMessages = {
    productTabs: ["AI", "GitHub Copilot", "Desktop App", "GitHub Spark", "GitHub Models"],
    hero: {
        eyebrow: "GitHub Copilot App",
        titleLine1: "From issue to",
        titleLine2: "merge, in one app",
        body: "No heavy QA platform required. Leave feedback on the screen being reviewed, align with the team, and turn it into an issue only when needed.",
        demoCta: "Try the demo in 2 minutes",
        guideCta: "5-minute setup guide",
        bullets: [
            "Leave feedback on the exact clicked location instead of another screenshot.",
            "Clients and teammates review the same screen with shared context.",
            "Escalate to issues or PR workflows only when the team needs it.",
        ],
        mockTask: "Add dark mode treatment to icons in empty states",
        overlay: "Designed to sit lightly on top of React and expand only to the surfaces that need review.",
        chips: ["Delegate to agents", "Centralized inbox", "Shape canvases", "Review and merge"],
        dashboardAlt: "dashboard preview",
        feedbackAlt: "feedback preview",
    },
    reviewSection: {
        eyebrow: "RUN REVIEW ACROSS EVERY AREA OF WORK",
        titleLine1: "Run multiple sessions",
        titleLine2: "across every area of work",
        description: "Large demo surfaces and short supporting cells keep the page readable even when more product detail is added.",
        subEyebrow: "Parallel workflows, fully in view",
        heading: "Keep complex review flows simple.",
        body: "Each section is narrowed to one clear message, with structure coming from lines and cells instead of decoration.",
        featureNotes: ["Parallel workflows, fully in view", "Isolated spaces for every session", "Built-in validation loop", "Automated workflows"],
        sessionsLabel: "Sessions",
        sessionItems: ["hero-status-badge", "header-cta", "pricing-card", "open-source-note"],
    },
    agentsSection: {
        eyebrow: "EXTEND AGENTS WITH YOUR OWN TOOLS",
        titleLine1: "Extend agents with",
        titleLine2: "your own tools",
        description: "The layout now leans on squared cells and thin dividers so the information feels tighter and more deliberate.",
        cards: [
            {
                eyebrow: "WHY TEAMS SWITCH",
                title: "You do not have to explain which button again.",
                description: "Pinned markers preserve the exact spot, so the next review starts with context intact.",
            },
            {
                eyebrow: "FOR STAKEHOLDERS",
                title: "Review can start without learning a separate QA app.",
                description: "Share the staging URL and leave feedback directly on the product surface people are already seeing.",
            },
            {
                eyebrow: "FOR DEVELOPERS",
                title: "It reduces review friction without replacing your workflow.",
                description: "The main advantage is starting small and only expanding where review density is high.",
            },
        ],
    },
    developersSection: {
        eyebrow: "For developers",
        titleLine1: "For developers,",
        titleLine2: "start small and stay light",
        description: "With default Mona Sans spacing and a squared grid, the setup cost and technical rationale read clearly at a glance.",
        facts: [
            { title: "Half-day setup", body: "Install the package, mount once at the app root, and start from a single staging page." },
            { title: "Progressive rollout", body: "Tag only the screens that need review first with focused `data-report-id` coverage." },
            { title: "Shadow DOM", body: "The feedback UI stays isolated from host styles, so it drops in without CSS conflicts." },
            { title: "LocalStorage trial", body: "You can experience the full local flow before connecting a shared handler." },
            { title: "devOnly visibility", body: "Keep it out of production and available only in staging or internal environments." },
        ],
        quickStartLabel: "Quick start",
        quickStartTime: "5 min",
        codeSnippet: `npm install @fivepixels-js/react react react-dom

<FivePixels
  project={{ id: "my-app" }}
  visibility={{ devOnly: true }}
/>

<button data-report-id="hero-cta">
  Get started
</button>`,
        rollout: [
            { day: "DAY 0", title: "Install and mount once" },
            { day: "DAY 1", title: "Start with one high-review page" },
            { day: "DAY 2+", title: "Connect handlers and team rules" },
        ],
    },
    compareSection: {
        eyebrow: "PLANS",
        titleLine1: "Even against the current flow,",
        titleLine2: "the explanation gets shorter",
        description: "Instead of abstract product language, the comparison shows what changes in a way people can scan immediately.",
        currentFlow: "Current flow",
        fivepixels: "fivepixels",
        rows: [
            ["Screenshots + arrows", "Pinned markers on the exact UI"],
            ["Slack and email back-and-forth", "State and replies in one review list"],
            ['"That button over there"', "Comments attached to the clicked element"],
            ["Heavy rollout discussions first", "A thin review layer on staging"],
            ["Repeated client reconfirmation", "Filter unresolved items and re-check fast"],
        ],
    },
    feedbackSection: {
        eyebrow: "Share your feedback",
        title: "Help us build",
        body: "Whether you find a bug or have an idea for a feature, we want to hear from you. Let us know and we'll take your ideas into account.",
        demoCta: "Send feedback from the demo",
        guideCta: "View the setup guide",
    },
    resourcesSection: {
        title: "Related resources",
        items: [
            { title: "Explore documentation", body: "Guides, quick starts, and reference for everything in the app.", href: "/fivepixels/guide" },
            { title: "Check out the repo", body: "Explore the README, file an issue, join in the discussion.", href: "/fivepixels" },
            { title: "Keep up-to-date on the latest", body: "Get the latest on new features and fixes as we ship it.", href: "/example/01" },
        ],
    },
};
