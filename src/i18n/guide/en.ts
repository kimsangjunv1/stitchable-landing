import type { GuideCollectionMessages, GuidePageMessages, GuideSection } from "./types";

const demoCta = { cta: "Live demo", ctaHref: "/example/01", installCommand: "" };

function makePage(slug: string, eyebrow: string, title: string, description: string, sections: GuideSection[], heroOptions: Partial<GuidePageMessages["hero"]> = {}): GuidePageMessages {
    return {
        slug,
        title,
        description,
        hero: { eyebrow, title, description, ...demoCta, ...heroOptions },
        sections,
    };
}

const quickstart = makePage(
    "quickstart",
    "START TODAY",
    "Leave feedback directly on the screen",
    "Reviewers learn the workflow while developers complete the five-minute setup. Start by creating one feedback item on one staging page.",
    [
        {
            id: "choose-your-path",
            title: "Start with your role",
            stepLabel: "01 / QUICK START",
            variant: "quick-start",
            blocks: [
                {
                    type: "tabs",
                    tabs: [
                        {
                            label: "Reviewer",
                            blocks: [
                                {
                                    type: "ordered",
                                    items: [
                                        "Open the staging URL your team shared.",
                                        "Select Report mode from the panel.",
                                        "Click the element, write the request, and submit.",
                                        "Select View mode from the panel to see markers and the list.",
                                        "When words are not enough, right-click the element and add a UI Edit preview.",
                                    ],
                                },
                                {
                                    type: "callout",
                                    variant: "warning",
                                    text: "UI Edit lasts only for the current tab session. A refresh restores the original UI, and it never edits the codebase automatically.",
                                },
                            ],
                        },
                        {
                            label: "Developer",
                            blocks: [
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: [
                                        'import { FivePixels } from "@fivepixels-js/react";',
                                        "",
                                        "export default function App() {",
                                        "  return (",
                                        "    <>",
                                        "      <FivePixels",
                                        '        project={{ id: "my-app" }}',
                                        "        visibility={{ devOnly: true }}",
                                        "      />",
                                        '      <button data-report-id="hero-cta">Get started</button>',
                                        "    </>",
                                        "  );",
                                        "}",
                                    ].join("\n"),
                                },
                                {
                                    type: "list",
                                    items: [
                                        "Use a React 18+ browser runtime.",
                                        "Mount FivePixels once.",
                                        "Add data-report-id to the highest-value review targets first.",
                                        "The UI renders in Shadow DOM, so no CSS import is required.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "success",
            title: "Success criteria",
            variant: "reference",
            blocks: [
                { type: "list", items: ["Create one feedback item on staging.", "See its marker at the same location in View mode.", "Choose the storage and visibility policy for the team."] },
                { type: "link", href: "/docs/setup", label: "Read the setup documentation" },
            ],
        },
    ],
    { cta: "Setup docs", ctaHref: "/docs/setup", installCommand: "npm install @fivepixels-js/react react react-dom" },
);

const react = makePage(
    "react",
    "FRAMEWORK QUICKSTART",
    "Use fivepixels with React",
    "Install fivepixels, mount it once in your React application, and mark the first interface elements your team wants to review.",
    [
        {
            id: "install",
            title: "Install the package",
            stepLabel: "01 / INSTALL",
            variant: "quick-start",
            blocks: [
                { type: "codeRaw", language: "bash", code: "npm install @fivepixels-js/react react react-dom" },
                { type: "paragraph", text: "Fivepixels supports React 18 and later. Its interface is isolated in Shadow DOM, so the application does not need a separate stylesheet import." },
            ],
        },
        {
            id: "mount",
            title: "Mount FivePixels once",
            variant: "reference",
            blocks: [
                {
                    type: "codeRaw",
                    language: "tsx",
                    code: 'import { FivePixels } from "@fivepixels-js/react";\n\nexport default function App() {\n  return (\n    <>\n      <FivePixels\n        project={{ id: "my-app" }}\n        visibility={{ devOnly: true }}\n      />\n      <main>{/* Your application */}</main>\n    </>\n  );\n}',
                },
                { type: "callout", variant: "info", text: "Mount FivePixels once near the root of the application so it can follow every reviewable screen." },
            ],
        },
        {
            id: "mark",
            title: "Mark the first review targets",
            variant: "reference",
            blocks: [
                { type: "codeRaw", language: "tsx", code: '<section data-report-id="home-hero" data-report-type="group">\n  <button data-report-id="home-hero-cta">Get started</button>\n</section>' },
                { type: "paragraph", text: "Use stable data-report-id values on the highest-value sections, controls, and form fields before expanding the tagging scope." },
            ],
        },
    ],
    { installCommand: "npm install @fivepixels-js/react react react-dom" },
);

const nextjs = makePage(
    "nextjs",
    "FRAMEWORK QUICKSTART",
    "Use fivepixels with Next.js",
    "Add fivepixels to a Next.js App Router project with a small client component and mount it once from the root layout.",
    [
        {
            id: "install",
            title: "Install the package",
            stepLabel: "01 / INSTALL",
            variant: "quick-start",
            blocks: [{ type: "codeRaw", language: "bash", code: "npm install @fivepixels-js/react react react-dom" }],
        },
        {
            id: "client-component",
            title: "Create a client component",
            variant: "reference",
            blocks: [
                {
                    type: "codeRaw",
                    language: "tsx",
                    code: '// src/components/FivepixelsClient.tsx\n"use client";\n\nimport { FivePixels } from "@fivepixels-js/react";\n\nexport function FivepixelsClient() {\n  return (\n    <FivePixels\n      project={{ id: "my-next-app" }}\n      visibility={{ devOnly: true }}\n    />\n  );\n}',
                },
                { type: "callout", variant: "info", text: "Keep the client boundary in this small component. The root layout can remain a Server Component." },
            ],
        },
        {
            id: "layout",
            title: "Mount it from the root layout",
            variant: "reference",
            blocks: [
                {
                    type: "codeRaw",
                    language: "tsx",
                    code: '// src/app/layout.tsx\nimport { FivepixelsClient } from "@/components/FivepixelsClient";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en">\n      <body>\n        <FivepixelsClient />\n        {children}\n      </body>\n    </html>\n  );\n}',
                },
                { type: "paragraph", text: "Add stable data-report-id attributes inside individual pages and components as your team expands the review scope." },
            ],
        },
    ],
    { installCommand: "npm install @fivepixels-js/react react react-dom" },
);

const rollout = makePage("rollout", "ONE WEEK", "A small, one-week rollout", "Build the habit on one high-review page before you expand across the application.", [
    {
        id: "week",
        title: "Day 1 through Day 6+",
        variant: "quick-start",
        stepLabel: "ROLLOUT",
        blocks: [
            {
                type: "table",
                headers: ["When", "Action", "Success"],
                rows: [
                    ["Day 1", "Mount on one staging page", "Confirm devOnly and add 1–3 ids"],
                    ["Day 2", "Invite 2–3 teammates", "Create five feedback items"],
                    ["Day 3", "Agree on team rules", "Write one short rules page"],
                    ["Day 4", "Run one external review", "Send the client note"],
                    ["Day 5", "Review unresolved items", "Use View mode and status filters"],
                    ["Day 6+", "Add shared storage or GitHub when needed", "Everyone sees the same list"],
                ],
            },
            { type: "codeRaw", language: "text", code: "Day 0  Install + <FivePixels /> + devOnly\nDay 1  Add data-report-id on one busy page\nDay 2+ Team rules → Adapter/GitHub when needed" },
        ],
    },
    {
        id: "guardrail",
        title: "Before expanding",
        variant: "reference",
        blocks: [{ type: "list", items: ["project.id / env / version policy", "localStorage or API storage", "Modal and tab attribute strategy", "Production visibility policy"] }],
    },
]);

const rules = makePage("rules", "TEAM RULES", "Agree on a few rules first", "The important part is a shared definition of where feedback lives and when it is resolved.", [
    {
        id: "template",
        title: "Recommended rules",
        variant: "quick-start",
        stepLabel: "COPY & USE",
        blocks: [
            {
                type: "table",
                headers: ["Rule", "Decision"],
                rows: [
                    ["Where", "Leave feedback only on the staging URL."],
                    ["Naming", "Use kebab-case for data-report-id."],
                    ["Scope", "Keep one change request in one case."],
                    ["Resolve", "Mark resolved after rechecking staging."],
                    ["Clients", "Send the URL with the short client note."],
                    ["Hidden UI", "Connect data-fp-view and data-fp-open values."],
                ],
            },
        ],
    },
    {
        id: "ownership",
        title: "Ownership and status",
        variant: "reference",
        blocks: [
            { type: "paragraph", text: "A useful default is: PMs set priority and owner, developers request a recheck after the fix, and the original reviewer resolves the case." },
            { type: "link", href: "/guides/workflow", label: "See the review workflow" },
        ],
    },
]);

const client = makePage("client", "CLIENT HANDOFF", "Send this note to your client", "Collect precise locations on staging without teaching another application.", [
    {
        id: "message",
        title: "Copyable client note",
        variant: "quick-start",
        stepLabel: "SEND THIS",
        blocks: [
            {
                type: "copy",
                label: "Copy client note",
                text: "Subject: Please mark changes directly on staging\n\nHello. Open the staging link below and click the exact place that needs a change.\n\n1. Open the link.\n2. Enter Report mode.\n3. Click the element and write your request.\n4. Submit it and confirm the marker in View mode.\n\nYou do not need to send a separate screenshot or describe ‘the button near the top.’",
            },
        ],
    },
    {
        id: "expectation",
        title: "Set expectations",
        variant: "reference",
        blocks: [
            {
                type: "list",
                items: ["UI Edit previews reset after refresh.", "Feedback text persists according to the project storage mode.", "Confirm login and display-name rules before sharing the link."],
            },
        ],
    },
]);

const workflow = makePage("workflow", "REVIEW FLOW", "One flow from report to resolution", "Keep the location, discussion, and status together through the full review lifecycle.", [
    {
        id: "flow",
        title: "Recommended flow",
        variant: "quick-start",
        stepLabel: "WORKFLOW",
        blocks: [
            {
                type: "codeRaw",
                language: "text",
                code: "Report (open)\n  → UI Edit preview (optional)\n  → Reply / request review\n  → Fix\n  → Recheck\n  → Resolve\n  → GitHub Issue (optional)\n  → Archive (optional)",
            },
        ],
    },
    {
        id: "status",
        title: "Status transitions",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Current", "Next"],
                rows: [
                    ["open", "git_issued · resolved · archived"],
                    ["git_issued", "resolved · archived"],
                    ["resolved", "open · archived"],
                    ["archived", "Follow the restore policy in the product UI"],
                ],
            },
            { type: "paragraph", text: "Split unrelated requests into cases, and connect replies to the matching case so every recheck keeps its context." },
        ],
    },
]);

const roles = makePage("roles", "WHO DOES WHAT", "Show each role what it needs", "Role selection recommends a starting set of tabs. Teams only need to agree on who owns each status transition.", [
    {
        id: "journeys",
        title: "Role journeys",
        variant: "quick-start",
        stepLabel: "ROLES",
        blocks: [
            {
                type: "table",
                headers: ["Role", "Primary action", "Frequent tools"],
                rows: [
                    ["QA / tester", "Mark bugs and recheck", "Report/View, filters, status"],
                    ["Designer", "Show visual intent", "UI Edit, Before/After"],
                    ["PM / planner", "Track owners and priority", "List, Needs Attention"],
                    ["Developer", "Install, tag, integrate", "Adapter, devOnly, onNavigate"],
                    ["Client", "Mark the requested change", "Report mode"],
                ],
            },
        ],
    },
    {
        id: "panel-role",
        title: "Panel role values",
        variant: "reference",
        blocks: [
            { type: "codeRaw", language: "text", code: "general · qa · developer · designer · planner · general-user" },
            { type: "callout", variant: "info", text: "A panel role suggests tabs; it is not an authorization rule. Configure authentication and reviewers separately." },
        ],
    },
]);

const faq = makePage("faq", "FAQ", "Questions teams ask before adopting", "Be clear about what fivepixels does—and what it does not do.", [
    {
        id: "answers",
        title: "Core answers",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Question", "Answer"],
                rows: [
                    ["Does it edit the code?", "No. UI Edit is session-only and resets on refresh."],
                    ["Can clients use it?", "Yes. Share staging with the client guide."],
                    ["Can non-developers use it?", "A developer installs it once; reviewers can run the workflow afterward."],
                    ["Will it break our CSS?", "The UI is isolated in Shadow DOM."],
                    ["Does it work in SPAs?", "Use pathname scope and onNavigate, plus data-fp-* attributes for hidden views."],
                    ["How do we share data?", "localStorage is device-local. Use an API Adapter or manual JSON transfer."],
                    ["Should it run in production?", "Usually it is limited to staging with visibility settings."],
                    ["Does it replace E2E tests?", "No. It is a React library for on-screen review and communication."],
                ],
            },
        ],
    },
]);

const domTagging = makePage("dom-tagging", "DOM TAGGING", "Use stable data-report-id values", "Add stable names to high-value review targets without changing layout or logic.", [
    {
        id: "rules",
        title: "Tagging rules",
        variant: "quick-start",
        stepLabel: "NAMING",
        blocks: [
            {
                type: "list",
                items: [
                    "Use kebab-case letters, numbers, and hyphens.",
                    "Prefer route-section-role.",
                    "Use a stable id or slug instead of a list index.",
                    "Start with headers, footers, nav, major sections, buttons, links, and inputs.",
                    "Do not add wrapper elements only for tagging.",
                    "Add data-report-type only when the team has a policy.",
                ],
            },
            {
                type: "codeRaw",
                language: "tsx",
                code: '<section data-report-id="pricing-hero" data-report-type="group">\n  <button data-report-id="pricing-hero-cta">Get started</button>\n</section>',
            },
        ],
    },
    {
        id: "hidden-ui",
        title: "Hidden modals and tabs",
        variant: "reference",
        blocks: [
            { type: "paragraph", text: "Connect matching data-fp-view and data-fp-open values. Nested views are restored from the outside in." },
            { type: "link", href: "/docs/dom-attributes", label: "Read the DOM attribute reference" },
        ],
    },
]);

const setup = makePage(
    "setup",
    "INSTALL & SETUP",
    "Install fivepixels in a React app",
    "Start locally, apply the recommended staging settings, then add remote persistence only when the team needs it.",
    [
        {
            id: "install",
            title: "Install and mount",
            variant: "quick-start",
            stepLabel: "01 / INSTALL",
            blocks: [
                { type: "codeRaw", language: "bash", code: "npm install @fivepixels-js/react react react-dom" },
                { type: "codeRaw", language: "tsx", code: 'import { FivePixels } from "@fivepixels-js/react";\n\n<FivePixels project={{ id: "my-app" }} />' },
                { type: "callout", variant: "info", text: "Mount FivePixels once. Its UI ships inside Shadow DOM, so no CSS import is required." },
            ],
        },
        {
            id: "staging",
            title: "Recommended staging setup",
            variant: "reference",
            blocks: [
                {
                    type: "codeRaw",
                    language: "tsx",
                    code: '<FivePixels\n  project={{ id: "my-app", env: "stage", version: "1.2.0" }}\n  visibility={{ enabled: true, devOnly: true }}\n  ui={{ appearance: "system", locale: "en" }}\n/>',
                },
                { type: "callout", variant: "warning", text: "devOnly:true hides the UI in production builds. Confirm this is intended if staging uses a production build." },
            ],
        },
        {
            id: "remote",
            title: "Remote persistence Adapter",
            variant: "reference",
            blocks: [
                {
                    type: "codeRaw",
                    language: "tsx",
                    code: [
                        'import { useMemo } from "react";',
                        'import { FivePixels, type FivePixelsAdapter } from "@fivepixels-js/react";',
                        "",
                        "function createAdapter(): FivePixelsAdapter {",
                        '  const base = "/api/v1/fivepixels/projects/my-app";',
                        "  return {",
                        "    markers: {",
                        "      list: ({ pathname }) =>",
                        '        fetch(base + "/feedbacks/markers?pathname=" + encodeURIComponent(pathname)).then((r) => r.json()),',
                        "    },",
                        "    feedback: {",
                        '      create: (payload) => fetch(base + "/feedbacks", {',
                        '        method: "POST", body: JSON.stringify(payload),',
                        "      }).then((r) => r.json()),",
                        '      update: (id, payload) => fetch(base + "/feedbacks/" + id, {',
                        '        method: "PATCH", body: JSON.stringify(payload),',
                        "      }).then((r) => r.json()),",
                        "    },",
                        "  };",
                        "}",
                        "",
                        "const adapter = useMemo(() => createAdapter(), []);",
                        '<FivePixels sync="api" adapter={adapter} project={{ id: "my-app", env: "stage" }} />',
                    ].join("\n"),
                },
                { type: "callout", variant: "warning", text: "Keep the Adapter reference stable with useMemo or module scope. Recreating it inside JSX can repeat list requests." },
            ],
        },
        {
            id: "explore-persistence",
            title: "Now, explore the code in action",
            variant: "reference",
            blocks: [
                { type: "paragraph", text: "Choose your preferred integration method." },
                {
                    type: "actions",
                    links: [
                        { href: "/docs/persistence#local-storage", label: "localStorage", description: "No Backend" },
                        { href: "/docs/persistence#api", label: "API", description: "Real-time Sync" },
                    ],
                },
            ],
        },
    ],
);

const domAttributes = makePage("dom-attributes", "DOM ATTRIBUTES", "Restore markers reliably", "Separate the stable element id from optional grouping and hidden-view reveal attributes.", [
    {
        id: "attributes",
        title: "Attribute reference",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Attribute", "Required", "Purpose"],
                rows: [
                    ["data-report-id", "Recommended", "Stable element id; CSS selector is the fallback."],
                    ["data-report-type", "Optional", "item (default) or group"],
                    ["data-fp-view", "Optional", "Key for a modal or tab that must be revealed"],
                    ["data-fp-open", "Optional", "Trigger that opens a matching view"],
                ],
            },
        ],
    },
    {
        id: "reveal",
        title: "Reveal hidden targets",
        variant: "reference",
        blocks: [
            { type: "paragraph", text: "Use matching data-fp-view and data-fp-open values for hidden UI, and call onNavigate first when the target is on another route." },
            { type: "list", items: ["Do not duplicate ids.", "Use stable ids instead of list indexes.", "Changing group to item can affect old markers.", "The nearest item wins inside nested ids."] },
        ],
    },
]);

const modes = makePage("modes", "MODES", "Understand Report and View mode", "Separate authoring and review so markers are not created accidentally during normal use.", [
    {
        id: "modes",
        title: "Three states",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Mode", "Select in panel", "Purpose"],
                rows: [
                    ["idle", "Default state", "Use the host application"],
                    ["report", "Add feedback", "Select an element, write feedback, use UI Edit"],
                    ["view", "View feedback", "Review markers, replies, and status"],
                ],
            },
        ],
    },
]);

const uiEdit = makePage("ui-edit", "UI EDIT", "Show intent on the live screen", "Adjust text, spacing, colors, and flex/grid alignment, then compare Before and After.", [
    {
        id: "use",
        title: "Workflow",
        variant: "quick-start",
        stepLabel: "TRY",
        blocks: [
            {
                type: "ordered",
                items: [
                    "Select an element in Report mode.",
                    "Right-click and choose Edit.",
                    "Adjust values and apply.",
                    "Compare with Before/After and Undo/Redo.",
                    "Attach the style-change summary to the draft.",
                ],
            },
            {
                type: "table",
                headers: ["Area", "Controls"],
                rows: [
                    ["Text", "textContent, fontSize, lineHeight"],
                    ["Box", "padding, margin"],
                    ["Color", "text, background, border"],
                    ["flex", "alignment, direction, gap"],
                    ["grid", "1–12 columns, gap"],
                ],
            },
        ],
    },
    {
        id: "limits",
        title: "Important limits",
        variant: "reference",
        blocks: [
            {
                type: "callout",
                variant: "warning",
                text: "Changes are inline element.style values for this tab session only. Refreshing restores the page, and the codebase is never edited automatically.",
            },
            {
                type: "list",
                items: [
                    "Text controls are hidden for non-text targets.",
                    "flex/grid controls appear only for matching display values.",
                    "Complex grid templates may be simplified.",
                    "Reset and delete can be recovered within the session.",
                ],
            },
        ],
    },
]);

const localStorageFullSetup = [
    '"use client";',
    "",
    'import { FivePixels } from "@fivepixels-js/react";',
    'import { useRouter } from "next/navigation";',
    "",
    "const reviewers = [",
    '  { id: "pm-mina", name: "Mina Kim", department: "Product", role: "admin", publicKey: "pk_pm_mina" },',
    '  { id: "qa-noah", name: "Noah Park", department: "QA", role: "sub_admin", publicKey: "pk_qa_noah" },',
    '  { id: "design-emma", name: "Emma Lee", department: "Design", role: "member", publicKey: "pk_design_emma" },',
    '  { id: "frontend-joon", name: "Joon Choi", department: "Frontend", role: "member", publicKey: "pk_frontend_joon" },',
    '  { id: "backend-sophia", name: "Sophia Han", department: "Backend", role: "member", publicKey: "pk_backend_sophia" },',
    '  { id: "client-alex", name: "Alex Morgan", department: "Client", role: "member", publicKey: "pk_client_alex" },',
    "] as const;",
    "",
    "export function FivepixelsLocalSetup() {",
    "  const router = useRouter();",
    "",
    "  return (",
    "    <FivePixels",
    '      project={{ id: "acme-web", env: "stage", version: "1.2.0" }}',
    '      sync="local"',
    '      mode="default"',
    "      visibility={{ enabled: true, devOnly: true }}",
    '      ui={{ panelAppearance: "system", locale: "en", showFeedbackList: true }}',
    "      require={{ reviewerKey: true }}",
    "      team={{ reviewers: [...reviewers] }}",
    "      fields={[",
    '        { key: "repro", type: "textarea", label: "Reproduction steps", required: true },',
    '        { key: "blocker", type: "checkbox", label: "Release blocker" },',
    "      ]}",
    "      onNavigate={(pathname) => router.push(pathname)}",
    '      onEvent={(event) => console.info("fivepixels", event)}',
    "    />",
    "  );",
    "}",
].join("\n");

const apiFullSetup = [
    '"use client";',
    "",
    'import { useMemo } from "react";',
    'import { FivePixels, type FivePixelsAdapter } from "@fivepixels-js/react";',
    'import { useRouter } from "next/navigation";',
    "",
    'const apiRoot = "/api/v1/fivepixels";',
    "const projectBase = `${apiRoot}/projects/acme-web`;",
    "",
    "const reviewers = [",
    '  { id: "pm-mina", name: "Mina Kim", department: "Product", role: "admin", publicKey: "pk_pm_mina" },',
    '  { id: "qa-noah", name: "Noah Park", department: "QA", role: "sub_admin", publicKey: "pk_qa_noah" },',
    '  { id: "design-emma", name: "Emma Lee", department: "Design", role: "member", publicKey: "pk_design_emma" },',
    '  { id: "frontend-joon", name: "Joon Choi", department: "Frontend", role: "member", publicKey: "pk_frontend_joon" },',
    '  { id: "backend-sophia", name: "Sophia Han", department: "Backend", role: "member", publicKey: "pk_backend_sophia" },',
    '  { id: "client-alex", name: "Alex Morgan", department: "Client", role: "member", publicKey: "pk_client_alex" },',
    "] as const;",
    "",
    "async function request<T>(url: string, init?: RequestInit): Promise<T> {",
    "  const response = await fetch(url, {",
    "    ...init,",
    '    headers: { "Content-Type": "application/json", ...init?.headers },',
    "  });",
    "  if (!response.ok) throw new Error(`Fivepixels API error: ${response.status}`);",
    "  if (response.status === 204) return undefined as T;",
    "  return response.json() as Promise<T>;",
    "}",
    "",
    "function createFullAdapter(): FivePixelsAdapter {",
    "  return {",
    "    auth: {",
    '      login: (payload) => request(`${apiRoot}/auth/login`, { method: "POST", body: JSON.stringify(payload) }),',
    '      logout: () => request(`${apiRoot}/auth/logout`, { method: "POST" }),',
    '      refresh: () => request(`${apiRoot}/auth/refresh`, { method: "POST" }),',
    "    },",
    "    markers: {",
    "      list: ({ pathname }) =>",
    "        request(`${projectBase}/feedbacks/markers?pathname=${encodeURIComponent(pathname)}`),",
    "    },",
    "    feedback: {",
    '      create: (payload) => request(`${projectBase}/feedbacks`, { method: "POST", body: JSON.stringify(payload) }),',
    "      getForUi: (id) => request(`${projectBase}/feedbacks/${id}/overview`),",
    '      update: (id, payload) => request(`${projectBase}/feedbacks/${id}`, { method: "PATCH", body: JSON.stringify(payload) }),',
    "    },",
    "    cases: {",
    "      list: (feedbackId) => request(`${projectBase}/feedbacks/${feedbackId}/report-cases`),",
    '      create: (feedbackId, payload) => request(`${projectBase}/feedbacks/${feedbackId}/report-cases`, { method: "POST", body: JSON.stringify(payload) }),',
    '      update: (feedbackId, caseId, payload) => request(`${projectBase}/feedbacks/${feedbackId}/report-cases/${caseId}`, { method: "PATCH", body: JSON.stringify(payload) }),',
    "    },",
    "    replies: {",
    "      list: (feedbackId, caseId) => request(`${projectBase}/feedbacks/${feedbackId}/report-cases/${caseId}/replies`),",
    '      create: (feedbackId, caseId, payload) => request(`${projectBase}/feedbacks/${feedbackId}/report-cases/${caseId}/replies`, { method: "POST", body: JSON.stringify(payload) }),',
    '      update: (feedbackId, caseId, replyId, payload) => request(`${projectBase}/feedbacks/${feedbackId}/report-cases/${caseId}/replies/${replyId}`, { method: "PATCH", body: JSON.stringify(payload) }),',
    '      delete: (feedbackId, caseId, replyId) => request(`${projectBase}/feedbacks/${feedbackId}/report-cases/${caseId}/replies/${replyId}`, { method: "DELETE" }),',
    "    },",
    "    members: {",
    "      list: () => request(`${projectBase}/members`),",
    "    },",
    "  };",
    "}",
    "",
    "export function FivepixelsApiSetup() {",
    "  const router = useRouter();",
    "  const adapter = useMemo(() => createFullAdapter(), []);",
    "",
    "  return (",
    "    <FivePixels",
    '      project={{ id: "acme-web", env: "stage", version: "1.2.0" }}',
    '      sync="api"',
    "      adapter={adapter}",
    "      visibility={{ enabled: true, devOnly: true }}",
    '      ui={{ panelAppearance: "system", locale: "en", showFeedbackList: true }}',
    "      require={{ authLogin: true, reviewerKey: true }}",
    "      team={{ reviewers: [...reviewers] }}",
    "      fields={[",
    '        { key: "repro", type: "textarea", label: "Reproduction steps", required: true },',
    '        { key: "blocker", type: "checkbox", label: "Release blocker" },',
    "      ]}",
    "      onNavigate={(pathname) => router.push(pathname)}",
    '      onEvent={(event) => console.info("fivepixels", event)}',
    "      github={{",
    "        enabled: true,",
    '        modes: ["on-create", "from-list"],',
    "        onCreate: async (feedback) => {",
    '          const issue = await request<{ number: number; html_url: string }>("/api/github/issues", {',
    '            method: "POST", body: JSON.stringify(feedback),',
    "          });",
    "          return { issueNumber: issue.number, issueUrl: issue.html_url };",
    "        },",
    "      }}",
    "      networkMonitor={false}",
    "    />",
    "  );",
    "}",
].join("\n");

const persistence = makePage(
    "persistence",
    "PERSISTENCE",
    "Choose storage for the team you have",
    "Start in one browser with localStorage, connect your own API when the team needs shared feedback, or follow the upcoming Artemis72 managed service.",
    [
        {
            id: "storage-modes",
            title: "Choose a storage mode",
            variant: "quick-start",
            stepLabel: "CHOOSE",
            blocks: [
                {
                    type: "table",
                    headers: ["Mode", "Best for", "How it works"],
                    rows: [
                        ["localStorage", "Trials and single-browser review", "Default local mode; no backend or Adapter"],
                        ["API", "Shared team feedback", "Your backend through FivePixelsAdapter"],
                        ["Artemis72", "Managed team service", "Coming soon"],
                    ],
                },
                { type: "paragraph", text: "Start with localStorage on one staging page. Move to API mode when feedback must follow the team across browsers and devices." },
            ],
        },
        {
            id: "local-storage",
            title: "Start with localStorage",
            variant: "quick-start",
            stepLabel: "DEFAULT",
            blocks: [
                { type: "paragraph", text: "The default local mode stores feedback in the current browser. Mount FivePixels once and add a stable project id; no API or Adapter is required." },
                { type: "codeRaw", language: "tsx", code: ["<FivePixels", '  project={{ id: "my-app" }}', "  visibility={{ devOnly: true }}", "/>"].join("\n") },
                {
                    type: "tabs",
                    tabs: [
                        {
                            label: "Full setup",
                            blocks: [
                                {
                                    type: "paragraph",
                                    text: "See how project scope, six reviewers, custom fields, visibility, navigation, and events fit together in a Next.js App Router project.",
                                },
                                { type: "codeRaw", language: "tsx", code: localStorageFullSetup },
                            ],
                        },
                        {
                            label: "Custom setup",
                            blocks: [{ type: "customSetup", mode: "local" }],
                        },
                        {
                            label: "Project scope",
                            blocks: [
                                { type: "paragraph", text: "Declare local mode and separate feedback by environment and application version." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: ["<FivePixels", '  sync="local"', "  project={{", '    id: "my-app",', '    env: "stage",', '    version: "1.2.0",', "  }}", "/>"].join("\n"),
                                },
                            ],
                        },
                        {
                            label: "Review setup",
                            blocks: [
                                { type: "paragraph", text: "Add project-specific fields and a reviewer roster while keeping persistence local." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: [
                                        "<FivePixels",
                                        '  sync="local"',
                                        '  project={{ id: "my-app" }}',
                                        "  fields={[",
                                        '    { key: "repro", type: "textarea", label: "Reproduction steps" },',
                                        '    { key: "blocker", type: "checkbox", label: "Release blocker" },',
                                        "  ]}",
                                        "  team={{",
                                        "    reviewers: [",
                                        '      { id: "qa-lead", name: "QA Lead", publicKey: "pk_..." },',
                                        "    ],",
                                        "  }}",
                                        "/>",
                                    ].join("\n"),
                                },
                            ],
                        },
                        {
                            label: "App state",
                            blocks: [
                                { type: "paragraph", text: "Connect cross-page feedback navigation to the host application's router." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: [
                                        "<FivePixels",
                                        '  sync="local"',
                                        '  project={{ id: "my-app" }}',
                                        "  onNavigate={(pathname) => router.push(pathname)}",
                                        "/>",
                                    ].join("\n"),
                                },
                            ],
                        },
                    ],
                },
                { type: "callout", variant: "info", text: "localStorage is device-local and does not automatically sync with another browser. Use API mode for shared team state." },
                {
                    type: "callout",
                    variant: "warning",
                    text: "visibility.devOnly hides Fivepixels whenever NODE_ENV is production. Confirm this is intended if your staging site uses a production build.",
                },
            ],
        },
        {
            id: "api",
            title: "Connect your API",
            variant: "reference",
            blocks: [
                {
                    type: "paragraph",
                    text: 'API mode keeps Fivepixels in your React application while your backend owns persistence. Implement the three minimum handlers, keep the Adapter reference stable, and pass it with sync="api".',
                },
                {
                    type: "tabs",
                    tabs: [
                        {
                            label: "Minimum setup",
                            blocks: [
                                { type: "paragraph", text: "Use the three required persistence handlers when the team only needs shared marker creation and updates." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: [
                                        'import { useMemo } from "react";',
                                        'import { FivePixels, type FivePixelsAdapter } from "@fivepixels-js/react";',
                                        "",
                                        "function createAdapter(): FivePixelsAdapter {",
                                        '  const base = "/api/v1/fivepixels/projects/my-app";',
                                        '  const write = (method: "POST" | "PATCH", body: unknown) => ({',
                                        "    method,",
                                        '    headers: { "Content-Type": "application/json" },',
                                        "    body: JSON.stringify(body),",
                                        "  });",
                                        "",
                                        "  return {",
                                        "    markers: {",
                                        "      list: ({ pathname }) =>",
                                        "        fetch(`${base}/feedbacks/markers?pathname=${encodeURIComponent(pathname)}`)",
                                        "          .then((response) => response.json()),",
                                        "    },",
                                        "    feedback: {",
                                        "      create: (payload) =>",
                                        '        fetch(`${base}/feedbacks`, write("POST", payload))',
                                        "          .then((response) => response.json()),",
                                        "      update: (id, payload) =>",
                                        '        fetch(`${base}/feedbacks/${id}`, write("PATCH", payload))',
                                        "          .then((response) => response.json()),",
                                        "    },",
                                        "  };",
                                        "}",
                                        "",
                                        "export function App() {",
                                        "  const adapter = useMemo(() => createAdapter(), []);",
                                        "",
                                        "  return (",
                                        "    <FivePixels",
                                        '      project={{ id: "my-app", env: "stage" }}',
                                        '      sync="api"',
                                        "      adapter={adapter}",
                                        "    />",
                                        "  );",
                                        "}",
                                    ].join("\n"),
                                },
                            ],
                        },
                        {
                            label: "Full setup",
                            blocks: [
                                {
                                    type: "paragraph",
                                    text: "See the final shape with company login, the full review Adapter, six reviewers, custom fields, navigation, GitHub, events, and network privacy controls.",
                                },
                                { type: "codeRaw", language: "tsx", code: apiFullSetup },
                            ],
                        },
                        {
                            label: "Custom setup",
                            blocks: [{ type: "customSetup", mode: "api" }],
                        },
                    ],
                },
                { type: "callout", variant: "warning", text: "Keep the Adapter reference stable with useMemo or module scope. Recreating it inside JSX can repeat list requests." },
            ],
        },
        {
            id: "api-recipes",
            title: "API integration recipes",
            variant: "reference",
            blocks: [
                { type: "subheading", text: "Choose an identity policy" },
                {
                    type: "tabs",
                    tabs: [
                        {
                            label: "Company login",
                            blocks: [
                                { type: "paragraph", text: "Remote sync requires authentication by default. Extend the persistence Adapter above with auth.login." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: [
                                        "const adapterWithLogin: FivePixelsAdapter = {",
                                        "  ...createAdapter(),",
                                        "  auth: {",
                                        "    login: async (credentials) => {",
                                        '      const response = await fetch("/api/v1/fivepixels/auth/login", {',
                                        '        method: "POST",',
                                        '        headers: { "Content-Type": "application/json" },',
                                        "        body: JSON.stringify(credentials),",
                                        "      });",
                                        '      if (!response.ok) throw new Error("Login failed");',
                                        "      return response.json();",
                                        "    },",
                                        "  },",
                                        "};",
                                        "",
                                        '<FivePixels sync="api" adapter={adapterWithLogin} />',
                                    ].join("\n"),
                                },
                            ],
                        },
                        {
                            label: "No login",
                            blocks: [
                                { type: "paragraph", text: "For a shared staging environment without company login, explicitly disable both identity gates." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: ["<FivePixels", '  sync="api"', "  require={{ authLogin: false, reviewerKey: false }}", "  adapter={adapter}", "/>"].join("\n"),
                                },
                            ],
                        },
                        {
                            label: "Reviewer key",
                            blocks: [
                                { type: "paragraph", text: "Require a reviewer key when the team needs stable reviewer identity without company login." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: [
                                        "<FivePixels",
                                        '  sync="api"',
                                        "  require={{ authLogin: false, reviewerKey: true }}",
                                        "  team={{",
                                        "    reviewers: [",
                                        '      { id: "qa-lead", name: "QA Lead", publicKey: "pk_..." },',
                                        "    ],",
                                        "  }}",
                                        "  adapter={adapter}",
                                        "/>",
                                    ].join("\n"),
                                },
                            ],
                        },
                    ],
                },
                { type: "subheading", text: "Connect the review workflow" },
                {
                    type: "tabs",
                    tabs: [
                        {
                            label: "Events & GitHub",
                            blocks: [
                                { type: "paragraph", text: "Observe persistence events and optionally promote implementation work to a GitHub Issue." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: [
                                        "<FivePixels",
                                        '  sync="api"',
                                        "  adapter={adapter}",
                                        '  onEvent={(event) => console.info("fivepixels", event)}',
                                        "  github={{",
                                        "    enabled: true,",
                                        '    modes: ["from-list"],',
                                        "    onCreate: async (feedback) => {",
                                        '      const response = await fetch("/api/github/issues", {',
                                        '        method: "POST",',
                                        "        body: JSON.stringify(feedback),",
                                        "      });",
                                        "      const issue = await response.json();",
                                        "      return { issueNumber: issue.number, issueUrl: issue.html_url };",
                                        "    },",
                                        "  }}",
                                        "/>",
                                    ].join("\n"),
                                },
                            ],
                        },
                        {
                            label: "SPA navigation",
                            blocks: [
                                { type: "paragraph", text: "Connect View-mode navigation to your SPA router so feedback can restore its original route." },
                                {
                                    type: "codeRaw",
                                    language: "tsx",
                                    code: ["const router = useRouter();", "", "<FivePixels", '  sync="api"', "  adapter={adapter}", "  onNavigate={(pathname) => router.push(pathname)}", "/>"].join(
                                        "\n",
                                    ),
                                },
                            ],
                        },
                        {
                            label: "Network privacy",
                            blocks: [
                                { type: "paragraph", text: "Disable host fetch/XHR capture when the API flow tab should not inspect application traffic." },
                                { type: "codeRaw", language: "tsx", code: ["<FivePixels", '  sync="api"', "  adapter={adapter}", "  networkMonitor={false}", "/>"].join("\n") },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "migration",
            title: "Move from localStorage to API",
            variant: "reference",
            blocks: [
                {
                    type: "paragraph",
                    text: "Keep the same project id when the team graduates from a local trial to shared API persistence. Add environment and version values deliberately so everyone agrees on the data scope.",
                },
                {
                    type: "codeRaw",
                    language: "tsx",
                    code: [
                        "// Before: feedback stays in this browser.",
                        '<FivePixels project={{ id: "my-app" }} sync="local" />',
                        "",
                        "// After: new feedback uses your shared API.",
                        "<FivePixels",
                        '  project={{ id: "my-app", env: "stage", version: "1.3.0" }}',
                        '  sync="api"',
                        "  adapter={adapter}",
                        "/>",
                    ].join("\n"),
                },
                {
                    type: "callout",
                    variant: "warning",
                    text: "Changing modes does not upload existing localStorage feedback automatically. Transfer it with JSON Export/Import or recreate the required feedback in the shared API.",
                },
            ],
        },
        {
            id: "artemis72",
            title: "Artemis72 and Adapter boundaries",
            variant: "reference",
            blocks: [
                { type: "callout", variant: "info", text: "Artemis72 is a managed SaaS planned for Fivepixels. It is currently in preparation, so setup and integration code are not available yet." },
                { type: "subheading", text: "Minimum API Adapter contract" },
                {
                    type: "ordered",
                    items: ["markers.list({ pathname }) returns ReportFeedback[].", "feedback.create(payload) returns ReportFeedback with a server id.", "Implement feedback.update or cases.update."],
                },
                {
                    type: "table",
                    headers: ["Adapter domain", "Requirement"],
                    rows: [
                        ["markers.list", "Required for markers on the current pathname"],
                        ["feedback.create", "Required to persist new feedback"],
                        ["feedback.update or cases.update", "At least one update path is required"],
                        ["auth · replies · members · session", "Optional extensions based on your workflow"],
                    ],
                },
                {
                    type: "callout",
                    variant: "info",
                    text: "For a shared API without login, set require={{ authLogin: false, reviewerKey: false }}. Authentication handlers are not used in this mode.",
                },
                {
                    type: "paragraph",
                    text: "REST URL design, database schema, authentication server implementation, and response authorization belong to your infrastructure. Fivepixels stops at the frontend Adapter interface.",
                },
            ],
        },
    ],
);

const authTeam = makePage("auth-and-team", "AUTH & TEAM", "Configure identity and reviewers", "Choose who may create and reply when remote sync is enabled.", [
    {
        id: "concepts",
        title: "Core concepts",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Concept", "Meaning"],
                rows: [
                    ["require.authLogin", "Require login for remote sync; default true"],
                    ["require.reviewerKey", "Match reviewer public and private keys"],
                    ["team.reviewers", "Reviewer roster and public keys"],
                    ["team.user", "Legacy; do not use in new examples"],
                    ["Private key", "ECDSA P-256 generated and rotated in settings"],
                    ["adapter.auth", "login, signup, logout, refresh, artemisLogin"],
                ],
            },
        ],
    },
]);

const github = makePage("github", "GITHUB", "Promote feedback to an Issue", "Send only implementation work that needs repository tracking.", [
    {
        id: "setup",
        title: "Configuration",
        variant: "reference",
        blocks: [
            { type: "codeRaw", language: "tsx", code: 'github={{\n  enabled: true,\n  modes: ["on-create", "from-list"],\n  onCreate: async (feedback) => ({ issueNumber, issueUrl }),\n}}' },
            {
                type: "table",
                headers: ["Mode", "Behavior"],
                rows: [
                    ["on-create", "Offer Issue creation after submit"],
                    ["from-list", "Send from the feedback list"],
                ],
            },
            { type: "paragraph", text: "After creation, status becomes git_issued and a system reply stores the link. onEvent emits feedback:github-issue-created." },
        ],
    },
]);

const panelTabs = makePage("panel-and-tabs", "PANEL & TABS", "Configure the panel for each role", "Separate stable and experimental tabs, and fetch all-page data only when needed.", [
    {
        id: "tabs",
        title: "Available tabs",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Status", "Tabs"],
                rows: [
                    ["Stable", "route-details, feedback-list, memo-list, diagnostics, api-flow"],
                    ["Experimental", "overview, my-tasks, page-brief, needs-attention, project-health, today-digest"],
                ],
            },
            { type: "callout", variant: "info", text: "overview, my-tasks, needs-attention, project-health, and today-digest require listAll and fetch when the tab activates." },
        ],
    },
    {
        id: "layout",
        title: "Panel UI",
        variant: "reference",
        blocks: [{ type: "list", items: ["Left/right docking and resize", "Role and tab onboarding", "presentation mode", "Notifications and minimized dock", "networkMonitor-backed API flow tab"] }],
    },
]);

const mentions = makePage("mentions-and-thread", "THREADS & MENTIONS", "Connect elements and people", "Use cases and nested replies to keep independent requests separate inside one feedback item.", [
    {
        id: "model",
        title: "Conversation model",
        variant: "reference",
        blocks: [
            {
                type: "list",
                items: [
                    "Case text, assignee, and open/resolved status",
                    "suggested, additional_question, found_error, recheck_requested, resolved reply states",
                    "Nested replies through parent_reply_id",
                    "Element and user mentions",
                    "user, manager, system author types",
                    "GitHub Issue system entries",
                ],
            },
            { type: "callout", variant: "info", text: "Label experimental UI such as Ask AI separately from stable features." },
        ],
    },
]);

const importExport = makePage("import-export", "IMPORT & EXPORT", "Move local data as JSON", "Import and export suit local-mode backup and manual transfer.", [
    {
        id: "features",
        title: "Supported operations",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Operation", "Purpose"],
                rows: [
                    ["Export", "Download the current project scope"],
                    ["Import", "Choose or drag a JSON file"],
                    ["Command", "Paste JSON to replace or merge"],
                ],
            },
            { type: "list", items: ["Confirm project mismatches.", "Confirm replacement on id collisions.", "Validate with validateFeedbackImport.", "Use an API Adapter for live team sharing."] },
        ],
    },
]);

const customUi = makePage("custom-ui", "CUSTOM UI", "Compose with providers and hooks", "Use public subpaths when the default panel does not fit the host product.", [
    {
        id: "imports",
        title: "Public subpaths",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["import", "Purpose"],
                rows: [
                    ["@fivepixels-js/react", "FivePixels, types, utilities"],
                    ["@fivepixels-js/react/report", "Provider, hooks, custom composition"],
                    ["@fivepixels-js/react/demo", "Demo runtime"],
                ],
            },
        ],
    },
    {
        id: "hooks",
        title: "Hook partitions",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Hook", "Purpose"],
                rows: [
                    ["useReport()", "Full backward-compatible API"],
                    ["useReportPreferences()", "appearance, locale, role, messages"],
                    ["useReportSession()", "mode, draft, markers, composers"],
                    ["useReportData()", "lists, filters, CRUD, stats, replies"],
                ],
            },
        ],
    },
]);

const api = makePage("api", "API REFERENCE", "FivePixels Props at a glance", "Find frequently used Props and Adapter domains in one place.", [
    {
        id: "props",
        title: "Props",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Prop", "Purpose"],
                rows: [
                    ["project", "id, env, version data scope"],
                    ["ui", "appearance, locale, messages, and list UI"],
                    ["visibility", "enabled, devOnly, routeKey"],
                    ["team", "reviewers and legacy user"],
                    ["mode", "default or presentation"],
                    ["sync", "local, api, artemis"],
                    ["require", "authLogin, reviewerKey"],
                    ["adapter", "Remote handler bundle"],
                    ["fields", "textarea and checkbox fields"],
                    ["onNavigate", "Navigate from View mode"],
                    ["onEvent / onReply", "Event and reply side effects"],
                    ["github", "Issue creation"],
                    ["networkMonitor", "API flow capture; default true"],
                ],
            },
            { type: "callout", variant: "warning", text: "requireAuth is deprecated. Use require.authLogin." },
        ],
    },
    {
        id: "adapter",
        title: "Adapter domains",
        variant: "reference",
        blocks: [
            { type: "codeRaw", language: "text", code: "auth · session · markers · feedback · cases · replies · members" },
            { type: "paragraph", text: "Use the package types FivePixelsProps, FivePixelsAdapter, and ReportFeedback/ReportCase/ReportReply as the source of truth." },
        ],
    },
]);

const edgeCases = makePage("edge-cases", "EDGE CASES", "Common adoption pitfalls", "Most missing or misplaced markers come from identifiers, hidden UI, routing, or unstable Adapter references.", [
    {
        id: "cases",
        title: "Edge cases",
        variant: "reference",
        blocks: [
            {
                type: "table",
                headers: ["Topic", "Response"],
                rows: [
                    ["Missing id", "Add data-report-id to the selectable root"],
                    ["Duplicate id", "Use a stable unique id per item"],
                    ["group ↔ item change", "Check existing marker restoration"],
                    ["Modal or tab", "Use matching data-fp-view and data-fp-open values"],
                    ["SPA routing", "Use onNavigate and pathname scope"],
                    ["Production-built staging", "Confirm devOnly behavior"],
                    ["Inline Adapter", "Keep it stable with useMemo or module scope"],
                    ["Version change", "Agree on data-scope behavior"],
                ],
            },
        ],
    },
    {
        id: "checklist",
        title: "Before rollout",
        variant: "reference",
        blocks: [{ type: "list", items: ["Storage mode", "project.id / env / version", "Initial tagging scope", "Modal and tab attribute strategy", "Cross-page onNavigate", "Production visibility"] }],
    },
]);

const selfHosting = makePage(
    "self-hosting",
    "SELF-HOSTING",
    "Self-host Fivepixels",
    "Choose the part of the Fivepixels self-hosting guide you want to explore. Detailed deployment instructions can be added as the self-hosted services are finalized.",
    [
        {
            id: "auth",
            title: "Auth",
            variant: "reference",
            blocks: [{ type: "paragraph", text: "This section is ready for the authentication and reviewer identity setup required by a self-hosted Fivepixels environment." }],
        },
        {
            id: "realtime",
            title: "Realtime",
            variant: "reference",
            blocks: [{ type: "paragraph", text: "This section is ready for realtime feedback, reply, and status synchronization instructions." }],
        },
        { id: "storage", title: "Storage", variant: "reference", blocks: [{ type: "paragraph", text: "This section is ready for persistent feedback data and uploaded asset storage instructions." }] },
        { id: "analytics", title: "Analytics", variant: "reference", blocks: [{ type: "paragraph", text: "This section is ready for self-hosted usage and review workflow analytics instructions." }] },
    ],
    { installCommand: "" },
);

export const guidesEn: GuideCollectionMessages = {
    title: "Adoption guides",
    description: "Start and establish fivepixels with your team",
    basePath: "/guides",
    navHome: "Home",
    codeCopy: "Copy",
    codeCopied: "Copied",
    onThisPage: "Adoption guides",
    navGroups: [
        {
            label: "Start",
            items: [
                { slug: "quickstart", label: "Quick start" },
                { slug: "rollout", label: "One-week rollout" },
                { slug: "rules", label: "Team rules" },
            ],
        },
        {
            label: "Framework quickstarts",
            items: [
                { slug: "react", label: "React" },
                { slug: "nextjs", label: "Next.js" },
            ],
        },
        {
            label: "Review",
            items: [
                { slug: "client", label: "Client guide" },
                { slug: "workflow", label: "Review workflow" },
                { slug: "roles", label: "Roles" },
            ],
        },
        {
            label: "Reference",
            items: [
                { slug: "faq", label: "FAQ" },
                { slug: "dom-tagging", label: "DOM tagging" },
            ],
        },
        { label: "Self-host", items: [{ slug: "self-hosting", label: "Overview" }] },
    ],
    pages: { quickstart, react, nextjs, rollout, rules, client, workflow, roles, faq, "dom-tagging": domTagging, "self-hosting": selfHosting },
};

export const docsEn: GuideCollectionMessages = {
    title: "Developer docs",
    description: "Install, configure, integrate, and handle edge cases",
    basePath: "/docs",
    navHome: "Home",
    codeCopy: "Copy",
    codeCopied: "Copied",
    onThisPage: "Developer docs",
    navGroups: [
        {
            label: "Start",
            items: [
                { slug: "setup", label: "Install and setup" },
                { slug: "dom-attributes", label: "DOM attributes" },
                { slug: "modes", label: "Modes" },
            ],
        },
        {
            label: "Features",
            items: [
                { slug: "ui-edit", label: "UI Edit" },
                { slug: "persistence", label: "Persistence" },
                { slug: "auth-and-team", label: "Auth and team" },
                { slug: "github", label: "GitHub" },
            ],
        },
        {
            label: "Panel",
            items: [
                { slug: "panel-and-tabs", label: "Panel and tabs" },
                { slug: "mentions-and-thread", label: "Threads and mentions" },
                { slug: "import-export", label: "Import / Export" },
            ],
        },
        {
            label: "Reference",
            items: [
                { slug: "custom-ui", label: "Custom UI" },
                { slug: "api", label: "Props API" },
                { slug: "edge-cases", label: "Edge cases" },
            ],
        },
    ],
    pages: {
        setup,
        "dom-attributes": domAttributes,
        modes,
        "ui-edit": uiEdit,
        persistence,
        "auth-and-team": authTeam,
        github,
        "panel-and-tabs": panelTabs,
        "mentions-and-thread": mentions,
        "import-export": importExport,
        "custom-ui": customUi,
        api,
        "edge-cases": edgeCases,
    },
};
