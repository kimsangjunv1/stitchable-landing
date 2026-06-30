import type { GuideMessages } from "./types"

export const guideEn: GuideMessages = {
  title: "Guide",
  description:
    "Step-by-step instructions to install fivepixels, mount it in your UI, and leave your first feedback.",
  hero: {
    eyebrow: "QUICK START",
    title: "Add QA in 3 minutes",
    description:
      "npm install → mount `<FivePixels />` → add `data-report-id`. Three steps and you can leave feedback on your staging screen.",
    cta: "Get Started",
  },
  navHome: "Home",
  codeCopy: "Copy",
  codeCopied: "Copied",
  onThisPage: "On this page",
  referenceDivider: "Learn more",
  navGroups: [
    { label: "Quick Start", sectionIds: ["install", "quick-start", "mark-elements", "first-feedback"] },
    { label: "Overview", sectionIds: ["getting-started", "ui-modes"] },
    { label: "Configuration", sectionIds: ["full-example", "config", "keyboard-shortcuts"] },
    { label: "Architecture", sectionIds: ["ui-architecture", "styling"] },
    { label: "Storage & Collaboration", sectionIds: ["persistence-choice", "persistence-local", "persistence-team", "persistence-backend", "github", "feedback-workflow", "data-contract", "migration"] },
  ],
  sections: [
    {
      id: "install",
      title: "Install",
      stepLabel: "01 / INSTALL",
      variant: "quick-start",
      blocks: [
        {
          type: "paragraph",
          text: "Install the package in your React 18+ project.",
        },
        { type: "code", snippet: "install", language: "bash" },
        {
          type: "callout",
          variant: "info",
          text: "In Next.js and other SSR apps, render `<FivePixels />` on the client only (`\"use client\"` + dynamic import).",
        },
      ],
    },
    {
      id: "quick-start",
      title: "Mount",
      stepLabel: "02 / MOUNT",
      variant: "quick-start",
      blocks: [
        {
          type: "paragraph",
          text: "Render `<FivePixels />` **once** on the screen that receives feedback. No CSS import required.",
        },
        { type: "code", snippet: "quickStart", language: "tsx" },
        {
          type: "list",
          items: [
            "`project.id` defaults to `\"my-app\"` when omitted. Set `project={{ id }}` for stage/production or multi-app origins.",
            "UI mounts inside Shadow Root with bundled Tailwind — no separate stylesheet import.",
          ],
        },
      ],
    },
    {
      id: "mark-elements",
      title: "Mark elements",
      stepLabel: "03 / MARK",
      variant: "quick-start",
      blocks: [
        {
          type: "paragraph",
          text: "Add `data-report-id` to feedback targets. Markers restore to the same element even when the UI changes.",
        },
        { type: "code", snippet: "markElements", language: "tsx" },
        {
          type: "list",
          items: [
            "`data-report-type` defaults to `item` (buttons, links, etc.).",
            "Use `data-report-type=\"group\"` for section- or card-level targets.",
          ],
        },
      ],
    },
    {
      id: "first-feedback",
      title: "First feedback",
      stepLabel: "04 / TRY IT",
      variant: "quick-start",
      blocks: [
        {
          type: "paragraph",
          text: "You're ready — leave feedback right away. Click **Add feedback** in the panel or use a shortcut.",
        },
        {
          type: "table",
          headers: ["Action", "Mac", "Windows / Linux"],
          rows: [
            ["Leave feedback", "⌘⇧M", "Ctrl+Shift+M"],
            ["View feedbacks", "⌘⇧L", "Ctrl+Shift+L"],
            ["Preview elements", "⌘⇧E", "Ctrl+Shift+E"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "In report mode, click any element to open the feedback composer.\nIn view mode (⌘⇧L), browse markers and the feedback list.",
        },
      ],
    },
    {
      id: "getting-started",
      title: "What is fivepixels?",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "fivepixels lets teams leave feedback on real `DOM` elements, restore `markers` after UI changes, and promote issues to `GitHub` when needed.",
        },
        {
          type: "list",
          items: [
            "`data-report-id` — restores marker position via `querySelector` even when the UI changes.",
            "`Shadow Root` UI — panels, overlays, and markers are isolated from host app CSS.",
            "`localStorage` or server — omit handlers for browser storage, or pass `onList`/`onCreate`/`onUpdate` for API persistence.",
          ],
        },
      ],
    },
    {
      id: "ui-modes",
      title: "UI Modes",
      variant: "reference",
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
          text: "Reply review flow (`denied` / `confirm` / `checkout`) is documented in Feedback Workflow below.",
        },
      ],
    },
    {
      id: "full-example",
      title: "Full Example",
      variant: "reference",
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
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "FivePixels UI renders in an open `Shadow Root` (`#fivepixels-root`), isolated from host app styles.",
        },
        { type: "code", snippet: "shadowDiagram", language: "text" },
        {
          type: "list",
          items: [
            "Target discovery still uses main document querySelector / elementFromPoint.",
            "Host Shadow DOM internals are not feedback targets by default.",
            "appearance light | dark | system maps to data-fivepixels-theme inside Shadow Root.",
          ],
        },
      ],
    },
    {
      id: "styling",
      title: "Styling",
      variant: "reference",
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
      variant: "reference",
      blocks: [
        { type: "code", snippet: "configBasic", language: "tsx" },
        { type: "subheading", text: "Advanced (localStorage only)" },
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
      variant: "reference",
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
      id: "persistence-choice",
      title: "Which storage option?",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "Without handlers, fivepixels uses localStorage. With onList/onCreate/onUpdate, it uses your server. Use the table below to pick a starting point.",
        },
        {
          type: "table",
          headers: ["Situation", "Recommended path", "Section"],
          rows: [
            ["Solo demo or PoC", "localStorage", "Start with localStorage"],
            ["Team reviews on staging", "Server or hosted", "Use with a team"],
            ["Store on your own server", "Self-hosted backend", "Build your backend"],
          ],
        },
      ],
    },
    {
      id: "persistence-local",
      title: "Start with localStorage",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "Without handler props, fivepixels uses browser localStorage. Keys are scoped by project.id and project.env.",
        },
        { type: "code", snippet: "localStorage", language: "tsx" },
        { type: "subheading", text: "Data transfer (localStorage only)" },
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
          type: "callout",
          variant: "info",
          text: "localStorage is per browser and device.\nTeam sharing and staging handoff require server-backed storage.",
        },
      ],
    },
    {
      id: "persistence-team",
      title: "Use with a team",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "When QA, PM, and designers review on the **same staging build**, you need shared storage. localStorage splits data per browser.",
        },
        {
          type: "list",
          items: [
            "Separate data by project and environment (stage/production)",
            "Everyone sees the same feedback list and markers",
            "Share reply and review workflows across the team",
          ],
        },
        { type: "subheading", text: "Options" },
        {
          type: "list",
          items: [
            "**fivepixels hosting** (coming soon) — one API key, no backend to build",
            "**Self-hosted backend** — store on your server via v2 handlers (onList, onListReplies, onCreate, onCreateReply, onUpdate)",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Required handlers must be implemented **together**. v2 adds onListReplies and onCreateReply for lazy-loaded reply threads.",
        },
        {
          type: "link",
          href: "/fivepixels/guide/backend-api",
          label: "Build your own backend guide",
        },
      ],
    },
    {
      id: "persistence-backend",
      title: "Build your backend",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "The frontend talks to your backend through handlers. REST paths can follow your conventions, but **request/response JSON** must match the data contract.",
        },
        {
          type: "table",
          headers: ["Priority", "Handler", "Suggested REST", "Purpose"],
          rows: [
            ["Required", "onList", "GET /comments?pathname={pathname}", "Feedback summaries for current page"],
            ["Required", "onListReplies", "GET /comments/{id}/replies", "Thread — on marker click"],
            ["Required", "onCreate", "POST /comments", "Create feedback"],
            ["Required", "onCreateReply", "POST /comments/{id}/replies", "Create single reply"],
            ["Required", "onUpdate", "PATCH /comments/{id}", "Edit body, status, integrations"],
            ["Optional", "onDelete", "DELETE /comments/{id}", "Delete feedback"],
            ["Optional", "onListAll", "GET /comments?cursor=&limit=100", "All pages, summarized"],
          ],
        },
        { type: "code", snippet: "serverHandlers", language: "tsx" },
        {
          type: "list",
          items: [
            "onList returns reply_count and latest_reply only — no replies[].",
            "onListReplies(commentId) lazy-loads the thread on marker click.",
            "Replies are saved via onCreateReply single POST.",
            "Implement onDelete if the UI delete action is required.",
          ],
        },
        {
          type: "link",
          href: "/fivepixels/guide/backend-api",
          label: "Backend API guide — REST details, DB schema, checklist",
        },
      ],
    },
    {
      id: "github",
      title: "GitHub Issue",
      variant: "reference",
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
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "In view mode, markers (red item · purple group) drive the reply and review flow.",
        },
        {
          type: "ordered",
          items: [
            "Create — select element, message, author, checkbox tags.",
            "Marker badge — +N when reply_count ≥ 1.",
            "Hover — status badge, message, author, tags; latest reply preview at bottom.",
            "Click — onListReplies loads the thread, then opens reply composer (no tags on replies).",
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
      variant: "reference",
      blocks: [
        {
          type: "list",
          items: [
            "ReportField types: textarea, checkbox.",
            "field_values: Record<string, string | boolean>.",
            "Replies are stored chronologically in the replies table; latest is the last item.",
            "Feedback status flow: open → git_issued → resolved → archived.",
            "integrations.github: { issue_number, issue_url, issued_at }.",
          ],
        },
      ],
    },
    {
      id: "migration",
      title: "Migration",
      variant: "reference",
      blocks: [
        {
          type: "list",
          items: [
            "Use project={{ id, env, version }} instead of flat projectId / environment / appVersion.",
            "Use project, ui, visibility objects instead of flat deprecated props.",
            "Replace workspace with project.id.",
            "Use onList/onCreate/onUpdate/onDelete instead of removed storageAdapter.",
            "Use onEvent/onReply for analytics instead of legacy side-effect handlers.",
            "localStorage key: fivepixels:reports:v1:{projectId} or with :{environment} suffix.",
          ],
        },
      ],
    },
  ],
}
