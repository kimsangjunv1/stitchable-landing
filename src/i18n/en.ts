import type { LandingMessages } from "./types";
import { guideEn } from "./guide/en";

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
            description: "Leave feedback on real `DOM` elements, restore `markers` after UI changes, and review issues without `screenshots`.",
            license: "Free and open source under the `MIT license`.",
            getStarted: "Get started",
            readDocs: "Read the docs",
            copyPrompt: "Copy Prompt",
            codeCopy: "Copy",
            codeCopied: "Copied",
            copyPromptText: "Integrate fivepixels into my React/Next.js app. Install with npm i @fivepixels-js/react and add the <FivePixels /> component.",
        },
        terminal: {
            lines: [
                "$ npm i @fivepixels-js/react",
                "✔ Dependencies installed in 1.2s",
                "",
                "→ Next: import { FivePixels } from '@fivepixels-js/react'",
                "",
                '<FivePixels project={{ id: "my-app" }} />',
                "✔ Feedback layer ready",
            ],
        },
        gettingStarted: {
            eyebrow: "Getting started",
            title: "Install fivepixels",
            description: "Install once, open a new terminal session, then run `npm i @fivepixels-js/react`.",
            ciNote: "For CI, use",
            ciLink: "GitHub Actions",
            npmLabel: "npm / pnpm / bun",
            npmCmd: "npm i @fivepixels-js/react",
            yarnLabel: "yarn",
            yarnCmd: "yarn add @fivepixels-js/react",
        },
        capabilities: {
            items: [
                {
                    title: "Feedback on real DOM elements",
                    description: "Attach feedback using `data-report-id` and `data-report-type` on any element.",
                    tags: ["DOM", "markers", "select"],
                },
                {
                    title: "Simplifies everyday QA",
                    description: "One configuration and a consistent feedback flow with `localStorage` or server `API`.",
                    tags: ["<FivePixels />", "localStorage", "API", "GitHub"],
                },
                {
                    title: "Powering your favorite frameworks",
                    description: "Supports every framework built on `React`.",
                    tags: ["Next.js", "Vite", "Remix", "+ more"],
                },
            ],
        },
        trust: {
            title: "A trusted workflow to standardize on",
            description: "An open-source feedback layer that replaces screenshot QA — collaborate directly on real screens.",
            stats: [
                { value: "0", label: "Signups required" },
                { value: "100%", label: "Shadow Root isolation" },
                { value: "∞", label: "localhost support" },
            ],
            performance: {
                title: "Stay fast during QA",
                description: "Leave feedback with `DOM markers` instead of screenshots, `restore positions` after UI changes, and `promote to GitHub Issues` instantly.",
            },
        },
        libraryGoodPoints: {
            title: "A lightweight open-source QA layer for staging teams",
            mainStat: {
                label: "Total bundle (gzip)",
                value: "~55KB",
            },
            chart: {
                label: "fivepixels Bundle",
                axisStart: "v0.1",
                axisEnd: "Today",
            },
            stats: [
                { value: "~10KB+", label: "Stylesheet (gzip)" },
                { value: "~45KB+", label: "JS only (gzip)" },
                { value: "0", label: "Runtime dependencies" },
            ],
        },
        adoptionPath: {
            eyebrow: "Progressive adoption",
            title: "Start local, grow into team, server & integrations",
            description: "Begin without handlers, then add fields, team, API, GitHub, and Slack as you need them.",
            steps: [
                {
                    label: "localStorage",
                    description: "Start instantly with a single `<FivePixels />`.",
                },
                {
                    label: "Team & fields",
                    description: "Add custom fields, team.user, and reviewers.",
                },
                {
                    label: "Server API",
                    description: "Persist to your DB via onList/onCreate/onUpdate.",
                },
                {
                    label: "GitHub & Slack",
                    description: "Wire github.onCreate, onEvent, and onReply.",
                },
            ],
        },
        devOnlyCallout: {
            title: "Hide the UI in production builds",
            description: "`visibility.devOnly` keeps fivepixels as a staging-only internal QA tool — no production render at the app code level.",
            codeLine: "<FivePixels visibility={{ devOnly: true }} />",
        },
        techTrust: {
            eyebrow: "Developer Experience",
            title: "Clear types, subpath exports & bundle budget",
            description: "Even with the zero-deps + full QA UI tradeoff, contracts and bundle size stay predictable.",
            panels: [
                {
                    title: "subpath export",
                    description: "`@fivepixels-js/react/report` exports only FivePixels and types. Import motion from `@fivepixels-js/react` only when needed.",
                    codeLines: [
                        "import { FivePixels } from '@fivepixels-js/react/report'",
                        "import type { ReportFeedback } from '@fivepixels-js/react/report'",
                        "",
                        "// motion only when needed",
                        "import { motion } from '@fivepixels-js/react'",
                    ],
                },
                {
                    title: "TypeScript contracts",
                    description: "ReportFeedback, CreateReportFeedbackPayload, ReportEvent, and more are fully typed.",
                    codeLines: ["import type {", "  ReportFeedback,", "  CreateReportFeedbackPayload,", "  ReportEvent,", "} from '@fivepixels-js/react/report'"],
                },
            ],
            stats: [
                { value: "Own motion", label: "No Framer Motion dep" },
                { value: "size:bundle", label: "CI bundle budget" },
                { value: "peer only", label: "react / react-dom" },
            ],
        },
        qualityAssurance: {
            eyebrow: "Quality & trust",
            title: "Tests, CI, docs & data contracts",
            description: "Vitest, typecheck, build, bundle size, and example build run in CI. Docs and schemas are documented.",
            items: [
                {
                    title: "Vitest & CI",
                    description: "Automated typecheck, build, and bundle size checks.",
                },
                {
                    title: "Bundle budget",
                    description: "Track minify+gzip size with `npm run size:bundle`.",
                },
                {
                    title: "Docs",
                    description: "README, getting-started, data model, and example app guides.",
                },
                {
                    title: "Data contract",
                    description: "replies, status, field_values, GitHub integrations schema.",
                },
            ],
        },
        saasComparison: {
            eyebrow: "Positioning",
            title: "A different layer than SaaS QA widgets",
            description: "Marker.io-style tools are all-in-one SaaS. fivepixels is an open-source QA layer embedded in your React app.",
            positioning: {
                headers: ["", "SaaS QA", "fivepixels"],
                rows: [
                    ["Form", "SaaS + external widget", "npm library (in-app)"],
                    ["Cost", "$39–$99+/mo (seat limits)", "MIT, no subscription"],
                    ["Data", "SaaS dashboard & cloud", "localStorage or your server/DB"],
                    ["Feedback", "Screenshot + annotation", "DOM click + markers"],
                    ["Target", "Agency & client UAT", "Internal QA, staging & dev teams"],
                ],
            },
            advantages: {
                title: "10 ways fivepixels beats SaaS QA tools",
                items: [
                    {
                        title: "No cost or vendor lock-in",
                        description: "MIT + zero runtime deps. No seat, project, or time limits.",
                    },
                    {
                        title: "You own the data",
                        description: "localStorage by default; server mode saves only to your API/DB.",
                    },
                    {
                        title: "Element-level feedback",
                        description: "Anchor to DOM via `data-report-id`. Track the same element after layout changes.",
                    },
                    {
                        title: "Embedded in your app",
                        description: "Not an external widget — `<FivePixels />` + Shadow Root panel.",
                    },
                    {
                        title: "Hidden in production",
                        description: "`visibility.devOnly` hides UI in production builds.",
                    },
                    {
                        title: "Built-in review workflow",
                        description: "suggested → denied / confirm / checkout timeline in view mode.",
                    },
                    {
                        title: "Flexible integrations",
                        description: "Wire persistence, github.onCreate, onEvent/onReply your way.",
                    },
                    {
                        title: "Lightweight deps",
                        description: "No Framer, Radix, or MUI — react/react-dom peers only.",
                    },
                    {
                        title: "i18n & customization",
                        description: "`ui.locale: ko | en` and `ui.messages` for copy overrides.",
                    },
                    {
                        title: "Open source extensibility",
                        description: "Fork and change form fields, review policy, and panel UI.",
                    },
                ],
            },
            honestLimits: {
                title: "When SaaS is honestly better",
                headers: ["SaaS advantage", "fivepixels today"],
                rows: [
                    ["Non-dev clients report without accounts", "Requires data-report-id markup + React"],
                    ["Auto screenshot & annotation", "DOM markers only (no screenshots)"],
                    ["Console/network logs, session replay", "Not included"],
                    ["Native Jira/Linear/Asana 2-way sync", "Implement via handlers/GitHub callbacks"],
                    ["WordPress / no-code sites", "React only"],
                    ["Browser extension for any site", "Requires `<FivePixels />` in your app"],
                ],
            },
            selectionGuide: {
                saasTitle: "Client UAT & screenshot QA",
                saasDescription: "When non-dev reporters and visual capture matter, SaaS fits better.",
                saasTools: "Marker.io · BugHerd · Usersnap · Jam.dev",
                fivepixelsTitle: "In-house staging, DOM QA & data ownership",
                fivepixelsDescription: "When your dev team wants DOM-level QA/review with no subscription and your own infra, choose fivepixels.",
                cta: "Get started",
            },
            tools: [
                {
                    name: "vs Marker.io",
                    competitorStrength: "Marker.io strengths: screenshots, console/network logs, session replay, Jira/Linear.",
                    fivepixelsWins: ["Staging QA without monthly subscription", "Keep feedback in your own DB", "Track components/buttons by DOM id"],
                },
                {
                    name: "vs BugHerd",
                    competitorStrength: "BugHerd strengths: agency/client pins, kanban, non-technical reporting.",
                    fivepixelsWins: ["Internal dev team QA (not client dashboard)", "denied/confirm review instead of kanban", "GitHub Issue promotion + your API"],
                },
                {
                    name: "vs Usersnap",
                    competitorStrength: "Usersnap strengths: NPS, micro-surveys, screen recording, end-user feedback.",
                    fivepixelsWins: ["Staging bug fixes & UAT (not product surveys)", "Element-level issue tracking"],
                },
                {
                    name: "vs Jam.dev",
                    competitorStrength: "Jam strengths: one-click bug reports, auto console/network/session context.",
                    fivepixelsWins: ["Track recurring UI element issues", "Fully self-hosted without Jam cloud", "Integrate QA panel inside your React app"],
                },
            ],
        },
        benefits: {
            shipping: {
                title: "Focus on shipping, not tooling",
                items: ["Stop wasting time on screenshot & annotation tools", "Improve cross-team context sharing", "Standardize feedback for humans and AI workflows"],
            },
            security: {
                title: "Isolated from your host app",
                description: "Panels, overlays, and markers are fully isolated from host styles via `Shadow Root`.",
                items: ["No CSS import required — `Shadow DOM` isolation", "`localStorage` first, optional server `API`", "Separate feedback by `environment`, `version` & `route`"],
            },
        },
        showcase: {
            title: "Everything you need in one tool",
            subtitle: "fivepixels unifies your entire QA workflow — from collecting feedback to review and resolution — in a single layer.",
            tabs: [
                {
                    id: "install",
                    label: "install",
                    title: "Integrate in 5 minutes",
                    description: "Add a feedback layer to your `React` app with a single `npm install`.",
                    bullets: [
                        "`Shadow Root` UI — no CSS import required",
                        "Works on `localhost`, `staging` & `production`",
                        "Identify elements with `data-report-id`",
                        "Built-in `keyboard shortcuts`",
                    ],
                    poweredBy: "Powered by React Shadow DOM",
                    output: ["$ npm i @fivepixels-js/react", "added 1 package in 0.8s", "", "import { FivePixels } from '@fivepixels-js/react'", "", '<FivePixels project={{ id: "my-app" }} />', "✔ Feedback layer ready"],
                },
                {
                    id: "feedback",
                    label: "feedback",
                    title: "Feedback directly on DOM elements",
                    description: "Click once to select an element and leave a `marker`.",
                    bullets: [
                        "Element-level feedback without `screenshots`",
                        "`Reply`, `review` & `resolve` workflow",
                        "`denied` / `checkout` / `confirm` states",
                        "Auto-record `environment` & `version` context",
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
                    description: "Find the same `DOM` element again and restore `marker` positions.",
                    bullets: [
                        "Track elements via `data-report-id`",
                        "Coordinate fallback when the element is removed",
                        "Keep markers after `UI refactors`",
                        "Separate by `route`, `environment` & `version`",
                        "`JSON` export / import support",
                    ],
                    poweredBy: "Powered by Position Restoration",
                    output: ["[view] Restoring markers on /dashboard", "Scanning 42 feedback items...", "✔ Restored 38 markers", "⚠ 4 items need re-anchoring"],
                },
                {
                    id: "github",
                    label: "github",
                    title: "Promote to GitHub Issues",
                    description: "Escalate important feedback to `GitHub Issues` instantly.",
                    bullets: ["Connect via `github.onCreate` handler", "Promote from composer or feedback list", "Automatic feedback → `Issue` mapping", "Team `triage` workflow"],
                    poweredBy: "Powered by GitHub API",
                    output: ["[github] Promoting feedback fb-128", "Creating GitHub Issue...", "✔ Issue #42 created", "  https://github.com/org/repo/issues/42"],
                },
                {
                    id: "export",
                    label: "export",
                    title: "Export reports",
                    description: "Export feedback lists as JSON for sharing.",
                    bullets: ["JSON export / import", "Filter by environment & version", "Team-shareable reports", "AI summaries ready"],
                    poweredBy: "Powered by JSON Export",
                    output: ["[export] Exporting stage feedback", "Exporting 12 feedback items...", "✔ Saved to feedback-report.json", "  12 items · 3 resolved · 2 pending"],
                },
            ],
        },
        bento: {
            eyebrow: "UI Modes",
            title: "idle · report · view — switch in one panel",
            description: "Pick a mode from the right panel or jump in with shortcuts. Custom fields, team, and environment settings live in the same layer.",
            modes: [
                {
                    id: "idle",
                    label: "idle",
                    shortcut: "default",
                    description: "Choose Report / View / element preview",
                },
                {
                    id: "report",
                    label: "report",
                    shortcut: "⌘⇧M",
                    description: "Click elements on screen to leave feedback",
                },
                {
                    id: "view",
                    label: "view",
                    shortcut: "⌘⇧L",
                    description: "Browse markers, reply, review, promote to Git Issue",
                },
            ],
            shortcuts: [
                { action: "Leave feedback", mac: "⌘⇧M", win: "Ctrl+Shift+M" },
                { action: "Preview elements", mac: "⌘⇧E", win: "Ctrl+Shift+E" },
                { action: "View feedback", mac: "⌘⇧L", win: "Ctrl+Shift+L" },
                { action: "Focus search", mac: "⌘⇧S", win: "Ctrl+Shift+S" },
                { action: "Save / send", mac: "⌘↩", win: "Ctrl+Enter" },
            ],
            config: [
                {
                    title: "Custom fields",
                    description: "textarea & checkbox rendered as tag pills",
                    tags: ["fields", "tags"],
                },
                {
                    title: "Team & reviewers",
                    description: "Configure reply & review flow via team.user & reviewers",
                    tags: ["team", "reviewers"],
                },
                {
                    title: "Environment scope",
                    description: "Separate scopes with devOnly, routeKey, project.env & version",
                    tags: ["devOnly", "routeKey", "env", "version"],
                },
                {
                    title: "UI i18n",
                    description: "ui.locale ko/en, browser auto-detect, ui.messages for copy overrides",
                    tags: ["locale", "messages", "i18n"],
                },
            ],
        },
        architecture: {
            eyebrow: "UI Architecture",
            title: "Shadow Root — fully isolated from host CSS",
            description: "FivePixels UI mounts inside the `#fivepixels-root` Shadow Root. Tailwind styles ship in the bundle — no separate CSS import required.",
            bullets: ["No style interference from host CSS reset or global styles", "Supports appearance light / dark / system", "Target discovery uses main document querySelector"],
            diagram: {
                host: "document.body",
                root: "#fivepixels-root",
                shadow: "#shadow-root (open)",
                ui: "FivePixels UI — panel · overlay · markers",
            },
            codeLines: [
                "import { FivePixels } from '@fivepixels-js/react'",
                "",
                "export default function App() {",
                "  return (",
                "    <>",
                "      <FivePixels project={{ id: 'my-app' }} />",
                "      <main>",
                "        <button data-report-id='cta'>Get started</button>",
                "      </main>",
                "    </>",
                "  )",
                "}",
            ],
        },
        workflow: {
            eyebrow: "Feedback Workflow",
            title: "Write → Reply → Review → GitHub Issue",
            description: "Markers in view mode drive reply & review (denied / confirm / checkout), then promote to GitHub Issues when needed.",
            steps: [
                {
                    id: "write",
                    label: "01 · report",
                    title: "Select an element & write feedback",
                    description: "Register with message, author, and checkbox tags.",
                    status: "open",
                },
                {
                    id: "reply",
                    label: "02 · reply",
                    title: "Replies & marker badges",
                    description: "+N badge on markers; hover shows latest reply preview.",
                    status: "suggested",
                },
                {
                    id: "review",
                    label: "03 · review",
                    title: "denied / confirm / checkout",
                    description: "Review reject, re-check, and resolve transitions timeline status.",
                    status: "found_error",
                },
                {
                    id: "github",
                    label: "04 · promote",
                    title: "Promote to GitHub Issue",
                    description: "github.onCreate creates an Issue; status becomes git_issued.",
                    status: "git_issued",
                },
            ],
        },
        persistence: {
            eyebrow: "Persistence",
            title: "localStorage by default, server API optional",
            description: "Omit handlers for browser storage. Pass onList/onCreate/onUpdate for API sync. Import/Export only in localStorage mode.",
            local: {
                title: "localStorage (default)",
                description: "Start instantly. Import/Export/Command in panel settings menu.",
                bullets: ["Key: fivepixels:reports:v1:{projectId}", "Scoped by project.id & env", "JSON Import / Export / Replace"],
                codeLines: ["<FivePixels project={{ id: 'my-app' }} />", "", "// omit handlers → localStorage", "✔ Zero-config persistence"],
            },
            server: {
                title: "Server API",
                description: "Pass onList, onCreate & onUpdate together for server-primary storage.",
                bullets: ["onDelete enables UI delete", "onEvent / onReply for analytics & Slack", "github.onCreate is separate from persistence"],
                codeLines: ["<FivePixels", "  onList={({ pathname }) => fetch(...)}", "  onCreate={(payload) => fetch(...)}", "  onUpdate={(id, payload) => fetch(...)}", "/>"],
            },
        },
        fullstack: {
            title: "Fullstack? No problem.",
            description: "fivepixels can be the foundation of any React-based web app — from SPAs to fullstack meta frameworks.",
            items: [
                {
                    title: "Meta Frameworks",
                    description: "Next.js App Router, Pages Router, Remix, and more",
                    tags: ["Next.js", "Remix", "Vite"],
                },
                {
                    title: "Platform Agnostic",
                    description: "First-class support on Vercel, Netlify, Cloudflare & self-hosted",
                    tags: ["Vercel", "Netlify", "Cloudflare"],
                },
                {
                    title: "Any Environment",
                    description: "Separate feedback by localhost, staging, and production",
                    tags: ["local", "stage", "production"],
                },
            ],
        },
        cta: {
            title: "Take your team's QA productivity to the next level with fivepixels",
            button: "Get started",
        },
        openSource: {
            title: "Free & open source",
            description: "Free and open source under the `MIT license`.",
        },
        footer: {
            companyTitle: "COMPANY",
            companyLinks: [
                { label: "Docs", href: "/fivepixels/guide" },
                { label: "Features", href: "#features" },
                { label: "GitHub", href: "https://github.com/kimsangjunv1/fivepixels" },
            ],
            socialTitle: "SOCIAL",
            copyright: "© 2026 fivepixels contributors.",
        },
        preview: {
            title: "Feedback workflow",
            subtitle: "Add feedback → pick element → reply → resolve",
            progress: ["Panel idle", "Add feedback", "Select element", "Send feedback", "Marker preview", "Write reply", "Resolve issue"],
            hints: [
                "Click the Add feedback button",
                "Click any element to leave feedback",
                "Type a message and send",
                "Hover over the marker",
                "Click the marker to open the thread",
                "Write a reply and send",
                "Click Resolve to close the issue",
            ],
            retryLabel: "Try again",
            feedbackMessage: "On mobile the active sessions stat sits too close to the chart",
            replyMessage: "Will tighten mobile spacing in tomorrow's stage deploy",
            designer: "Maya K.",
            developer: "Dev Team",
            envLabel: "stage",
            mockPage: {
                title: "Track sprint delivery from a single operations view",
                mainStat: {
                    label: "Active sessions",
                    value: "1,284",
                },
                chart: {
                    label: "Session trend",
                    axisStart: "Mon",
                    axisEnd: "Sun",
                },
                stats: [
                    { value: "142ms", label: "p95 latency" },
                    { value: "0.08%", label: "Error rate" },
                    { value: "99.97%", label: "Uptime (7d)" },
                ],
                section: {
                    eyebrow: "Operations",
                    title: "Pipeline health and queue depth in one place",
                    description: "Spot delays between staging validation and production promotion without switching tools.",
                },
                panels: [
                    {
                        title: "API gateway latency",
                        description: "Alerts fire when regional p95 exceeds 200ms. Only us-east-1 is near the threshold today.",
                    },
                    {
                        title: "Background queue depth",
                        description: "Email and webhook workers auto-scale when the queue exceeds 500 pending jobs.",
                    },
                ],
                table: {
                    title: "Recent deployments",
                    headers: ["Service", "Version", "Status", "Deployed"],
                    rows: [
                        {
                            cells: ["auth-api", "v2.14.1", "Success", "09:12"],
                        },
                        {
                            cells: ["billing-worker", "v1.8.0", "Success", "08:47"],
                        },
                        {
                            cells: ["notification-svc", "v3.2.4", "Blocked", "08:05"],
                            selectable: true,
                        },
                        {
                            cells: ["search-indexer", "v0.9.3", "Success", "07:22"],
                        },
                        {
                            cells: ["analytics-ui", "v4.1.0", "Rolling", "06:58"],
                        },
                        {
                            cells: ["cdn-proxy", "v1.2.2", "Success", "06:11"],
                        },
                    ],
                },
                release: {
                    eyebrow: "Release notes",
                    title: "Changes shipped this sprint",
                    items: [
                        {
                            version: "v3.2.4",
                            note: "Added notification template cache invalidation",
                        },
                        {
                            version: "v2.14.1",
                            note: "Adjusted OAuth token refresh retry backoff",
                        },
                        {
                            version: "v4.1.0",
                            note: "Synced dashboard filter state to the URL",
                        },
                        {
                            version: "v1.8.0",
                            note: "Hardened billing webhook signature verification",
                        },
                    ],
                },
            },
        },
    },
};
