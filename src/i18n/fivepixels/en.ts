import type { FivepixelsMessages } from "@/i18n/landing/types";

export const fivepixelsEn: FivepixelsMessages = {
    panelTitles: [
        "Why do so many teams\nstill struggle to adopt QA tools?",
        "Three steps is enough now",
        "No more explaining things in words",
        "Packed with features",
        "Flexible ways to work",
        "Built for individuals",
        "Teams that need QA right now",
        "Low adoption friction, clear team habits",
        "Questions before you adopt",
    ],
    intro: {
        headline: ["A Tool for", "Comfortable QA"],
        announcement: "May 29: We've added 3 new solution pages",
        bodyLine1: "Leave feedback right on the screen you're reviewing.",
        bodyHighlight: "Start light",
        bodyLine2: "pin it where you click, and escalate to an issue only when you need to.",
        demoCta: "View on 2'm",
        guideCta: "5'm guide",
    },
    pain: {
        eyebrow: "WHY TEAMS MISS THINGS",
        titleLine1: "A learning curve",
        titleLine2: "that's too steep",
        bodyLine1: "The QA tool you adopted to help the team",
        bodyLine2: "becomes the bottleneck—and adoption gets abandoned",
        cards: [
            {
                eyebrow: "01 / CONTEXT",
                title: "Feedback drifts away from the screen.",
                description: "The moment it moves to screenshots and chat, it's hard to remember exactly what you were talking about.",
            },
            {
                eyebrow: "02 / REVIEW",
                title: '"Which button?" keeps coming back.',
                description: "Without markers, every review round starts with finding it again and explaining it again.",
            },
            {
                eyebrow: "03 / SETUP",
                title: "Heavy QA rollouts keep getting postponed.",
                description: "When adoption looks like a big project, the review flow you actually need keeps slipping to the next release.",
            },
            {
                eyebrow: "04 / HANDOFF",
                title: "Client feedback stays vague.",
                description: "One comment on the product screen lands faster than a long annotated message thread.",
            },
        ],
    },
    howItWorks: {
        steps: [
            {
                number: "01",
                title: "Open staging",
                description: "Start on the same review screen your team already shares.",
            },
            {
                number: "02",
                title: "Click and leave feedback",
                description: "Instead of a messenger thread, pin comments right where you clicked.",
            },
            {
                number: "03",
                title: "Confirm and resolve",
                description: "Replies, status changes, and re-review stay in one flow.",
            },
        ],
    },
    uiEdit: {
        beforeLabel: "BEFORE",
        beforeTitle: "The chat loop",
        beforeEyebrow: "CHAT LOOP",
        afterLabel: "AFTER",
        afterTitleLine1: "Right on screen",
        afterTitleLine2: "agree on before / after",
        afterEyebrow: "DIRECT MARKER",
        searchPlaceholder: "Search fivepixels",
        channelName: "# project-eagle",
        channelTopic: "Optional topic",
        today: "Today",
        newLabel: "New",
        messages: [
            {
                id: "jessy-1",
                author: "Jessy",
                time: "5:14 PM",
                avatar: { bg: "#e8912d", label: "J" },
                body: "@Mark The Slack design in the UiEditSection.tsx message area is a mess. I sent a screenshot.",
            },
            {
                id: "mark-1",
                author: "Mark",
                time: "5:18 PM",
                avatar: { bg: "#4a90d9", label: "M" },
                body: "I checked the screenshot, but I can't find what needs to be fixed.",
                thread: "2 replies  Last reply today at 5:18 PM",
            },
            {
                id: "jessy-2",
                author: "Jessy",
                time: "5:21 PM",
                avatar: { bg: "#e8912d", label: "J" },
                body: "Build a Slack-style skeleton like the screenshot and just swap the content.",
                isNew: true,
            },
            {
                id: "mark-2",
                author: "Mark",
                time: "5:23 PM",
                avatar: { bg: "#4a90d9", label: "M" },
                body: "Point me to the exact spot and I'll fix it right away.",
            },
        ],
    },
    features: [
        {
            icon: "ads_click",
            title: "One-click feedback",
            description: "Leave it on the element—no more explaining which one",
        },
        {
            icon: "location_searching",
            title: "Pinned location",
            description: "Reopen the page and the same spot is recognized automatically",
        },
        {
            icon: "chat",
            title: "On-screen comments",
            description: "Review and discuss without switching apps",
        },
        {
            icon: "forum",
            title: "Live replies and confirmation",
            description: "Replies, confirmations, and resolutions in one flow",
        },
        {
            icon: "edit",
            title: "Direct UI tweaks",
            description: "Adjust text, spacing, color, alignment, and more on screen",
        },
        {
            icon: "compare",
            title: "Before / After",
            description: "See before and after states at a glance",
        },
        {
            icon: "hourglass_top",
            title: "Faster alignment",
            description: "Move from verbal explanations to visual agreement",
        },
        {
            icon: "assignment_turned_in",
            title: "Clear intent",
            description: "No vague feedback—just actionable changes",
        },
        {
            icon: "input",
            title: "Drop onto staging",
            description: "Attach to your current screen—no separate QA SaaS",
        },
        {
            icon: "lightbulb",
            title: "Minimal learning curve",
            description: "Leave and view modes—anyone can start right away",
        },
        {
            icon: "rocket_launch",
            title: "Half-day setup",
            description: "Mount it on a React app in half a day",
        },
        {
            icon: "person_pin",
            title: "Client handoff guide",
            description: "Clients can join reviews quickly via /guides/client",
        },
        {
            icon: "code",
            title: "Shadow DOM support",
            description: "Independent styling without host CSS interference",
        },
        {
            icon: "sd_storage",
            title: "localStorage demo",
            description: "Try it in the browser with no backend",
        },
        {
            icon: "filter_1",
            title: "Gradual rollout",
            description: "Tag only what you need with data-report-id—no full-app tagging",
        },
        {
            icon: "lock_open",
            title: "devOnly setting",
            description: "Limit exposure before production with `visibility.devOnly`",
        },
    ],
    developerRelief: {
        tabAriaLabel: "Adoption paths",
        guideLink: "Install guide",
        steps: [
            {
                id: "solo",
                tabLabel: "Solo, without a backend",
                eyebrow: "FOR SOLO",
                title: "Install once and you're done",
                description: "Use it personally without an API or server",
                code: `// 1) Install
npm install @fivepixels-js/react react react-dom

// 2) Mount once at the app root
<FivePixels
  project={{ id: "my-app" }}
  visibility={{ devOnly: true }}
/>

// 3) Only on elements you want (optional)
<button data-report-id="hero-cta">
  Get started
</button>`,
                highlights: [
                    {
                        title: "Side-project notes",
                        detail: "Leave comments right on the screen and find the same spot again later.",
                    },
                    {
                        title: "One staging page",
                        detail: "Start light by adding data-report-id to just one high-traffic review page.",
                    },
                    {
                        title: "Hide in production",
                        detail: "Use devOnly on internal and staging environments—keep it off live.",
                    },
                ],
                showGuideLink: true,
            },
            {
                id: "team",
                tabLabel: "Team collaboration without a backend",
                eyebrow: "FOR FE TEAMS",
                title: "Collaborate even without a server",
                description:
                    "Leave feedback on staging without a backend, then pass JSON import/export files between teammates.",
                note: "* This is file-based collaboration, not real-time sync.\nThat's why QA works without a backend.",
                code: `// No handler = localStorage persistence
<FivePixels
  project={{ id: "my-app", env: "stage" }}
/>

// From the settings panel
// · Export data (JSON download)
// · Import data (file / drag and drop)`,
                highlights: [
                    {
                        title: "Frontend-only startups",
                        detail: "Start reviews with designers and PMs on staging—no backend headcount required.",
                    },
                    {
                        title: "Share files with teammates",
                        detail: "A exports → B imports to continue the same feedback list.",
                    },
                    {
                        title: "Client and external review",
                        detail: "Hand off external review results in a single JSON file.",
                    },
                ],
            },
            {
                id: "api",
                tabLabel: "Team collaboration with API integration",
                eyebrow: "FOR PRODUCT TEAMS",
                title: "Connect to your infrastructure",
                description:
                    "As the team grows, connect handlers to your API, GitHub, and notification channels. Serverless is enough to start.",
                code: `<FivePixels
  project={{ id: "my-app", env: "stage" }}
  onList={fetchFeedbacks}
  onCreate={createFeedback}
  onUpdate={updateFeedback}
  onEvent={(event) => notifyTeam(event)}
  github={{
    enabled: true,
    modes: ["on-create", "from-list"],
    onCreate: createGitHubIssue,
  }}
/>`,
                highlights: [
                    {
                        title: "Your own REST API",
                        detail: "Wire up your existing backend with onList / onCreate / onUpdate.",
                    },
                    {
                        title: "GitHub Issues",
                        detail: "Promote feedback to Issues and leave links in the thread.",
                    },
                    {
                        title: "Slack and Notion alerts",
                        detail: "Send create, reply, and resolve events to team channels with onEvent.",
                    },
                ],
            },
        ],
    },
    compare: {
        beforeHeader: "Current flow",
        afterHeader: "fivepixels",
        rows: [
            ["Screenshots + arrows", "Markers pinned on screen"],
            ["Back and forth on Slack or email", "Status and replies in one list"],
            ['"That button over there"', "Comments on the element you clicked"],
            ["Heavy adoption review first", "Light attach on staging"],
            ["Repeated client re-confirmation", "Re-review unresolved items only"],
        ],
    },
    audience: {
        cards: [
            {
                title: "Early startups",
                description: "Founders, PMs, and designers review directly—and feedback scatters across verbal updates.",
            },
            {
                title: "Teams without a system",
                description: "Tools exist but rules don't, so the same issue gets explained again across channels.",
            },
            {
                title: "Freelancers",
                description: 'When clients say "just a small tweak," you want to pin it right on the screen.',
            },
            {
                title: "Teams with no rollout bandwidth",
                description: "Learning a new QA app and onboarding feels bigger than shipping itself.",
            },
        ],
    },
    adoption: {
        whyEyebrow: "WHY IT FEELS LIGHT",
        reasons: [
            {
                label: "No separate QA app",
                detail: "Reviews happen on the staging URL your team already shares.",
            },
            {
                label: "MIT, start small",
                detail: "Closer to attaching what you need than counting seats or seat limits.",
            },
            {
                label: "Try locally first",
                detail: "Validate the localStorage flow before wiring full persistence.",
            },
            {
                label: "Client-ready handoff",
                detail: "A short guide is enough for external reviewers to start leaving feedback.",
            },
        ],
        rolloutEyebrow: "1 WEEK ROLLOUT TASTE",
        rolloutSteps: [
            {
                day: "DAY 0",
                title: "Install and mount once",
                description: "Attach at the app root and use visibility.devOnly so it only shows in review environments.",
            },
            {
                day: "DAY 1",
                title: "Start with one high-traffic page",
                description: "Instead of tagging the whole app, add data-report-id to one screen with repeated feedback.",
            },
            {
                day: "DAY 2+",
                title: "Add handlers and rules",
                description: "Add persistence, triage rules, and existing issue flows only when you need them.",
            },
        ],
        clientNoteEyebrow: "CLIENT NOTE",
        clientNote:
            "Open the staging link, click where a change is needed, and leave feedback right on the screen. No extra tool training required.",
    },
    faq: [
        {
            question: "Does it change code automatically?",
            answer: "No. It helps you leave precise feedback, confirm it, and hand off into the issue flow your team already uses.",
        },
        {
            question: "Can clients use it right away?",
            answer: "Yes. Because feedback stays on the product screen they are already viewing, it feels natural on staging reviews.",
        },
        {
            question: "Do I need a backend from day one?",
            answer: "Not necessarily. Start with the localStorage flow, then connect handlers when you need shared persistence.",
        },
        {
            question: "How much setup is involved?",
            answer: "We aim for a small start: install, mount once, and tag one high-traffic review area.",
        },
    ],
    openSource: {
        title: "Free & Open Source",
        bodyLine1: "fivepixels is free and open source. Rather than learning yet another QA SaaS,",
        bodyLine2: "we add a thin review layer on top of the product screen you already use.",
        cta: "contribute",
        broughtBy: "BROUGHT BY CODI",
        handle: "@kimsangjunv1",
        profileAlt: "Codi profile",
    },
};
