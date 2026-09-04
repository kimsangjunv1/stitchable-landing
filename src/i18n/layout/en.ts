import type { LayoutMessages } from "@/i18n/landing/types";

export const layoutEn: LayoutMessages = {
    banner: "This library is currently in development.",
    header: {
        installGuide: "Install guide",
        homeAriaLabel: "agit library home",
        navAriaLabel: "Primary navigation",
    },
    footer: {
        home: {
            brand: "fivepixels",
            description:
                "A React review layer that collects feedback on staging screens and helps teams follow the same context through to resolution.",
            product: "Product",
            explore: "Explore",
            builtBy: "Built by",
            links: {
                forDevelopers: "For developers",
                compare: "Compare",
                resources: "Resources",
                overview: "Overview",
                guide: "Guide",
                demo: "Demo",
            },
            builtByCopy:
                "Designed and developed for lighter QA collaboration, with Mona Sans and a focused `#F6572E` brand system.",
            copyright: "© 2026 fivepixels. Minimal review surface for staging teams.",
            tagline: "Feedback, directly on your UI",
        },
        site: {
            codi: "CODI",
            handle: "@kimsangjunv1",
            developedBy: "Developed and Designed by",
            author: "kimsangjun",
            currentLibrary: "current available library",
            libraries: "agit.\nfivepixels.",
            githubAria: "GitHub",
            linkedInAria: "LinkedIn",
            logoAlt: "fivepixels",
        },
    },
    megaMenus: [
        {
            id: "main",
            label: "MAIN",
            href: "/",
            groups: [
                {
                    eyebrow: "EXPLORE",
                    title: "Product overview",
                    links: [
                        { label: "Introduction", description: "Review pain fivepixels solves", href: "/#intro", icon: "home" },
                        { label: "Pain points", description: "Screenshots, messengers, adoption friction", href: "/#pain", icon: "sentiment_dissatisfied" },
                        { label: "3-step flow", description: "Staging → click → resolve", href: "/#how-it-works", icon: "checklist" },
                    ],
                },
                {
                    eyebrow: "FEATURES",
                    title: "Core features",
                    links: [
                        { label: "UI Edit", description: "Agree on before / after on screen", href: "/#ui-edit", icon: "edit" },
                        { label: "Feature list", description: "Feedback, mockups, adoption", href: "/#setup", icon: "grid_view" },
                        { label: "Developer relief", description: "Half-day setup · code snippets", href: "/#developers", icon: "code" },
                    ],
                },
                {
                    eyebrow: "COMPARE",
                    title: "Compare · adoption",
                    links: [
                        { label: "Current flow vs", description: "Compared to screenshots and Slack", href: "/#compare", icon: "compare_arrows" },
                        { label: "Target teams", description: "Startups, freelancers, small teams", href: "/#audience", icon: "groups" },
                        { label: "Adoption guide", description: "From Day 0 to scale", href: "/#adoption", icon: "rocket_launch" },
                    ],
                },
                {
                    eyebrow: "MORE",
                    title: "More",
                    links: [
                        { label: "FAQ", description: "Common questions before adoption", href: "/#faq", icon: "help" },
                        { label: "Open Source", description: "MIT · free and open source", href: "/#open-source", icon: "code_blocks" },
                    ],
                    viewAll: { label: "View full page", description: "fivepixels landing", href: "/", icon: "arrow_forward" },
                },
            ],
        },
        {
            id: "guide",
            label: "GUIDE",
            href: "/guide",
            groups: [
                {
                    eyebrow: "QUICK START",
                    title: "Quick start",
                    links: [
                        { label: "Install", description: "npm install", href: "/guide#install", icon: "download" },
                        { label: "Mount", description: "Mount <FivePixels />", href: "/guide#quick-start", icon: "widgets" },
                        { label: "Mark elements", description: "Add data-report-id", href: "/guide#mark-elements", icon: "ads_click" },
                        { label: "First feedback", description: "Leave your first feedback", href: "/guide#first-feedback", icon: "chat" },
                    ],
                },
                {
                    eyebrow: "OVERVIEW",
                    title: "Overview",
                    links: [
                        { label: "Getting started", description: "Understand the full flow", href: "/guide#getting-started", icon: "flag" },
                        { label: "UI modes", description: "Leave / view modes", href: "/guide#ui-modes", icon: "toggle_on" },
                        { label: "Full example", description: "Complete example code", href: "/guide#full-example", icon: "integration_instructions" },
                    ],
                },
                {
                    eyebrow: "CONFIG",
                    title: "Configuration",
                    links: [
                        { label: "Configuration", description: "project · visibility · handler", href: "/guide#config", icon: "tune" },
                        { label: "Keyboard shortcuts", description: "Shortcut keys", href: "/guide#keyboard-shortcuts", icon: "keyboard" },
                        { label: "Persistence", description: "localStorage · team storage", href: "/guide#persistence-choice", icon: "sd_storage" },
                    ],
                },
                {
                    eyebrow: "DEEP DIVE",
                    title: "Architecture · collaboration",
                    links: [
                        { label: "UI architecture", description: "Shadow DOM structure", href: "/guide#ui-architecture", icon: "account_tree" },
                        { label: "GitHub integration", description: "Escalate to Issues", href: "/guide#github", icon: "merge" },
                        { label: "Backend API", description: "Server persistence", href: "/guide/backend-api", icon: "dns" },
                    ],
                    viewAll: { label: "View full guide", description: "Documentation home", href: "/guide", icon: "arrow_forward" },
                },
            ],
        },
        {
            id: "examples",
            label: "EXAMPLES",
            href: "/example/01",
            groups: [
                {
                    eyebrow: "DASHBOARD",
                    title: "Live demo",
                    links: [
                        { label: "Overview", description: "Dashboard · kanban · activity", href: "/example/01", icon: "dashboard" },
                        { label: "Issues", description: "Issue list · modals", href: "/example/01/issues", icon: "bug_report" },
                        { label: "Reviews", description: "Review feedback flow", href: "/example/01/reviews", icon: "rate_review" },
                    ],
                },
                {
                    eyebrow: "LABS",
                    title: "Lab pages",
                    links: [
                        { label: "Releases", description: "Release notes UI", href: "/example/01/releases", icon: "rocket_launch" },
                        { label: "Modal Lab", description: "Modal edge cases", href: "/example/01/modals", icon: "layers" },
                        { label: "Settings", description: "Settings · webhooks", href: "/example/01/settings", icon: "settings" },
                    ],
                    viewAll: { label: "Open demo", description: "App with fivepixels", href: "/example/01", icon: "arrow_forward" },
                },
            ],
        },
    ],
};
