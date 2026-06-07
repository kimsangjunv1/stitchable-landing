import type { GuideMessages } from "./types"

export const guideEn: GuideMessages = {
  title: "Getting Started",
  description:
    "Stitchable is a DOM-aware feedback layer for staging, QA, and internal tools. Leave feedback on real elements, restore markers after UI changes, and review issues without screenshots.",
  navHome: "Home",
  codeCopy: "Copy",
  codeCopied: "Copied",
  onThisPage: "On this page",
  navGroups: [
    { label: "Introduction", sectionIds: ["getting-started", "ui-modes"] },
    { label: "Setup", sectionIds: ["install", "quick-start", "full-example"] },
    { label: "Architecture", sectionIds: ["ui-architecture", "styling"] },
    { label: "Configuration", sectionIds: ["config", "keyboard-shortcuts"] },
    { label: "Data & Workflow", sectionIds: ["persistence", "github", "feedback-workflow", "data-contract", "migration"] },
  ],
  sections: [
    {
      id: "getting-started",
      title: "Getting Started",
      blocks: [
        {
          type: "paragraph",
          text: "Stitchable lets teams leave feedback on real DOM elements, restore markers after UI changes, and promote issues to GitHub when needed.",
        },
        {
          type: "list",
          items: [
            "data-report-id — restores marker position via querySelector even when the UI changes.",
            "Shadow Root UI — panels, overlays, and markers are isolated from host app CSS. No separate CSS import.",
            "localStorage or server — omit handlers for browser storage, or pass onList/onCreate/onUpdate for API persistence.",
          ],
        },
      ],
    },
    {
      id: "ui-modes",
      title: "UI Modes",
      blocks: [
        {
          type: "table",
          headers: ["Mode", "Entry", "Purpose"],
          rows: [
            ["idle", "Default", "Choose Report, View, or element preview from the panel"],
            ["report", "Add feedback · ⌘⇧M", "Click elements on screen to leave feedback"],
            ["view", "View feedbacks · ⌘⇧L", "Browse markers, reply, review, promote to GitHub Issue"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Reply review flow (denied / confirm / checkout) is documented in Feedback Workflow below.",
        },
      ],
    },
    {
      id: "install",
      title: "Install",
      blocks: [
        { type: "code", snippet: "install", language: "bash" },
        {
          type: "callout",
          variant: "info",
          text: "In Next.js and other SSR apps, render <Report /> on the client only (\"use client\" + dynamic import).",
        },
      ],
    },
    {
      id: "quick-start",
      title: "Quick Start",
      blocks: [
        { type: "code", snippet: "quickStart", language: "tsx" },
        {
          type: "list",
          items: [
            "project.id defaults to \"my-app\" when omitted. Set project={{ id }} for stage/production or multi-app origins.",
            "Render <Report /> once on the screen that receives feedback.",
            "Targets need data-report-id. data-report-type defaults to item; use group for section-level targets.",
            "No CSS import required — UI mounts inside Shadow Root with bundled Tailwind.",
          ],
        },
      ],
    },
    {
      id: "full-example",
      title: "Full Example",
      blocks: [
        {
          type: "paragraph",
          text: "Connect project, ui, visibility, team, fields, persistence handlers, side effects, and GitHub in one place. Omit onList/onCreate/onUpdate/onDelete for localStorage-only mode.",
        },
        {
          type: "callout",
          variant: "info",
          text: "visibility.devOnly hides the UI in production builds — ideal for staging-only QA tools.",
        },
      ],
    },
    {
      id: "ui-architecture",
      title: "UI Architecture",
      blocks: [
        {
          type: "paragraph",
          text: "Report UI renders in an open Shadow Root (#stitchable-root), isolated from host app styles.",
        },
        { type: "code", snippet: "shadowDiagram", language: "text" },
        {
          type: "list",
          items: [
            "Target discovery still uses main document querySelector / elementFromPoint.",
            "Host Shadow DOM internals are not feedback targets by default.",
            "appearance light | dark | system maps to data-stitchable-theme inside Shadow Root.",
          ],
        },
      ],
    },
    {
      id: "styling",
      title: "Styling",
      blocks: [
        {
          type: "paragraph",
          text: "Default UI uses Tailwind utility classes. Package consumers do not import CSS files.",
        },
        {
          type: "table",
          headers: ["Purpose", "Path"],
          rows: [
            ["Feedback composer & thread", "src/components/panel/feedback/*.tsx"],
            ["Component layout & colors", "className in src/components/**/*.tsx"],
            ["Tailwind theme", "src/styles/tailwind.css"],
            ["Shadow Root CSS bundle", "src/styles/reportStylesheet.ts (build output)"],
          ],
        },
      ],
    },
    {
      id: "config",
      title: "Config",
      blocks: [
        { type: "code", snippet: "configBasic", language: "tsx" },
        {
          type: "subheading",
          text: "Advanced (localStorage only)",
        },
        { type: "code", snippet: "configAdvanced", language: "tsx" },
        {
          type: "table",
          headers: ["Prop", "Description"],
          rows: [
            ["project", "{ id?, env?, version? } — id defaults to my-app"],
            ["ui", "{ appearance?, showFeedbackList?, visibleShortcutKeys?, locale?, messages? }"],
            ["visibility", "{ enabled?, devOnly?, routeKey? }"],
            ["team", "{ user?, reviewers? } — default author and reviewer list"],
            ["fields", "Feedback form fields (textarea, checkbox tags)"],
            ["onList / onCreate / onUpdate / onDelete", "Server persistence handlers"],
            ["onEvent / onReply", "Post-save side effects (analytics, Slack)"],
            ["github", "GitHub Issue promotion — enabled, modes, onCreate"],
          ],
        },
      ],
    },
    {
      id: "keyboard-shortcuts",
      title: "Keyboard Shortcuts",
      blocks: [
        {
          type: "table",
          headers: ["Action", "Mac", "Windows / Linux"],
          rows: [
            ["Leave feedback / stop selection", "⌘⇧M", "Ctrl+Shift+M"],
            ["Preview selectable elements", "⌘⇧E", "Ctrl+Shift+E"],
            ["View feedbacks / close list", "⌘⇧L", "Ctrl+Shift+L"],
            ["Focus search (list open)", "⌘⇧S", "Ctrl+Shift+S"],
            ["Move list items", "↑ / ↓", "↑ / ↓"],
            ["Cancel draft / close / exit mode", "Esc", "Esc"],
            ["Save draft / save edit", "⌘↩", "Ctrl+Enter"],
          ],
        },
        { type: "code", snippet: "shortcuts", language: "tsx" },
      ],
    },
    {
      id: "persistence",
      title: "Persistence",
      blocks: [
        {
          type: "paragraph",
          text: "Without handler props, Stitchable uses browser localStorage. Keys are scoped by project.id and project.env.",
        },
        { type: "code", snippet: "localStorage", language: "tsx" },
        {
          type: "subheading",
          text: "Data transfer (localStorage only)",
        },
        {
          type: "table",
          headers: ["Feature", "Description"],
          rows: [
            ["Import", "Bulk import via JSON file or drag-and-drop"],
            ["Export", "Export current scope as JSON"],
            ["Command", "Paste JSON to replace or merge with conflict confirmation"],
          ],
        },
        {
          type: "subheading",
          text: "Server persistence",
        },
        {
          type: "list",
          items: [
            "Pass onList, onCreate, and onUpdate together for server-backed storage.",
            "Implement onDelete if the UI delete action is required.",
            "Replies are saved via onUpdate({ replies, status? }).",
            "Marker +N badge and hover preview derive from replies[] in onList responses.",
          ],
        },
      ],
    },
    {
      id: "github",
      title: "GitHub Issue",
      blocks: [
        {
          type: "paragraph",
          text: "Promote feedback to GitHub Issues when ready. Call the GitHub API from your app server via github.onCreate.",
        },
        {
          type: "table",
          headers: ["Field", "Description"],
          rows: [
            ["enabled", "Hide Git Issue buttons when false"],
            ["modes", "\"on-create\" (composer) and/or \"from-list\" (list item)"],
            ["onCreate", "Server callback returning { issueNumber, issueUrl }"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "After promotion, feedback status becomes git_issued and a system reply with the issue link is appended.",
        },
      ],
    },
    {
      id: "feedback-workflow",
      title: "Feedback Workflow (view mode)",
      blocks: [
        {
          type: "paragraph",
          text: "In view mode, markers (red item · purple group) drive the reply and review flow.",
        },
        {
          type: "ordered",
          items: [
            "Create — select element, message, author, checkbox tags.",
            "Marker badge — +N when replies.length ≥ 1.",
            "Hover — status badge, message, author, tags; latest reply preview at bottom.",
            "Click — open thread and reply composer (no tags on replies).",
            "First reply — suggested timeline entry with denied / confirm / select.",
            "denied — opens composer; sends found_error reply.",
            "checkout — on latest found_error; sends suggested reply.",
            "confirm — adds resolved reply; feedback status becomes resolved.",
          ],
        },
        {
          type: "table",
          headers: ["Reply status", "UI label", "Meaning"],
          rows: [
            ["suggested", "SUGGESTED", "Proposed fix or answer"],
            ["found_error", "FOUND ERROR", "Review rejection — needs rework"],
            ["resolved", "RESOLVED", "Review complete — issue closed"],
          ],
        },
      ],
    },
    {
      id: "data-contract",
      title: "Data Contract",
      blocks: [
        {
          type: "list",
          items: [
            "ReportField types: textarea, checkbox.",
            "field_values: Record<string, string | boolean>.",
            "replies append chronologically; latest reply is the last array item.",
            "Feedback status flow: open → git_issued → resolved → archived.",
            "integrations.github: { issue_number, issue_url, issued_at }.",
          ],
        },
      ],
    },
    {
      id: "migration",
      title: "Migration",
      blocks: [
        {
          type: "list",
          items: [
            "Use project={{ id, env, version }} instead of flat projectId / environment / appVersion.",
            "Use project, ui, visibility objects instead of flat deprecated props.",
            "Replace workspace with project.id.",
            "Use onList/onCreate/onUpdate/onDelete instead of removed storageAdapter.",
            "Use onEvent/onReply for analytics instead of legacy side-effect handlers.",
            "localStorage key: stitchable:reports:v1:{projectId} or with :{environment} suffix.",
          ],
        },
      ],
    },
  ],
}
