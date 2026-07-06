import type { GuideMessages } from "../types"

export const backendApiGuideEn: GuideMessages = {
  title: "Backend API",
  description:
    "Self-host reference (v2). With fivepixels hosting you do not need to build this backend yourself.",
  hero: {
    eyebrow: "SELF-HOST REFERENCE · V2",
    title: "Backend API guide",
    description:
      "REST API reference for **self-hosting** fivepixels. v2 splits feedback (comments) and replies into separate resources — lists stay light, threads load on click.",
    cta: "Overview",
    ctaHref: "#ba-overview",
    installCommand: "",
  },
  navHome: "Guide",
  codeCopy: "Copy",
  codeCopied: "Copied",
  onThisPage: "On this page",
  referenceDivider: "Details",
  navGroups: [
    { label: "Overview", sectionIds: ["ba-intro", "ba-overview", "ba-project-scope"] },
    { label: "Data model", sectionIds: ["ba-data-model"] },
    { label: "API", sectionIds: ["ba-endpoints", "ba-team-api", "ba-errors-auth"] },
    { label: "Integration", sectionIds: ["ba-integration", "ba-db-checklist"] },
  ],
  sections: [
    {
      id: "ba-intro",
      title: "Getting started",
      variant: "reference",
      blocks: [
        {
          type: "callout",
          variant: "info",
          text: "This is a **self-host reference (v2)**.\nThe library cares about **handler return shapes**, not a specific REST stack.\nYou can rename paths (`/comments`, etc.) — just keep the **JSON shapes**.\nWith fivepixels hosting (coming soon), you do not need to build this API.",
        },
        {
          type: "link",
          href: "/fivepixels/guide#persistence-choice",
          label: "Back to Storage & Collaboration guide",
        },
      ],
    },
    {
      id: "ba-overview",
      title: "At a glance",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "Wire handlers on `<FivePixels />`. Each handler calls your API below.",
        },
        { type: "subheading", text: "Terminology" },
        {
          type: "table",
          headers: ["REST name", "Library type", "In plain terms"],
          rows: [
            ["Comment", "ReportFeedback", "One feedback item"],
            ["Case", "ReportCase", "An issue/item inside feedback (the body)"],
            ["Reply", "ReportReply", "A thread reply"],
            ["Member", "ReportAuthor", "Reviewer/assignee dropdown options"],
          ],
        },
        { type: "subheading", text: "Handler ↔ API" },
        {
          type: "table",
          headers: ["Priority", "Handler", "Suggested REST", "Purpose", "Go to"],
          rows: [
            [
              "Required",
              "onList",
              "GET /comments?pathname=...",
              "Feedback **summaries** for current page",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-list", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "Required",
              "onCreate",
              "POST /comments",
              "Create feedback",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-create", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "Required",
              "onUpdate",
              "PATCH /comments/{id}",
              "Edit cases, status, integrations",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-update", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "v2 recommended",
              "onListReplies",
              "GET /comments/{id}/replies",
              "Thread — on marker click",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-list-replies", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "v2 recommended",
              "onCreateReply",
              "POST /comments/{id}/replies",
              "Add one reply",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-create-reply", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "Optional",
              "onDelete",
              "DELETE /comments/{id}",
              "Delete feedback",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-delete", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "Optional",
              "onListAll",
              "GET /comments?cursor=&limit=100",
              "All pages, summarized",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-list-all", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "Optional",
              "team.reviewers",
              "GET /members",
              "Reviewer dropdown list",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-members", label: "Details" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Pass `onList`·`onCreate`·`onUpdate` **together**, or **omit all three** (localStorage is used).\nWithout v2 handlers (`onListReplies`·`onCreateReply`), the library falls back to v1 (PATCH entire replies array).",
        },
        { type: "subheading", text: "How v2 works" },
        {
          type: "list",
          items: [
            "**No realtime connection** — API calls only on user action or navigation",
            "**Filtering is client-side** — no search/status filter API needed",
            "**Body is cases[]** — no top-level `message` field",
            "**Lists stay light** — `reply_count` + `latest_reply` instead of `replies[]`",
            "**Threads on click** — marker/list click → `onListReplies`",
            "**One reply at a time** — `POST /replies` (not PATCH whole array)",
            "**Refresh after changes** — re-fetch list or thread after create/update/delete",
          ],
        },
        { type: "subheading", text: "v1 vs v2" },
        {
          type: "table",
          headers: ["", "v1 (legacy)", "v2 (recommended)"],
          rows: [
            ["List", "Full replies[] included", "Summary only (reply_count, latest_reply)"],
            ["Thread", "Already in list", "GET /replies on click"],
            ["Add reply", "PATCH + replace replies array", "POST /replies one item"],
            ["DB", "Single table + replies JSONB", "comments + replies tables"],
          ],
        },
      ],
    },
    {
      id: "ba-project-scope",
      title: "Project scope",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "`<FivePixels project={{ id, env, version }} />` tells the library **which app and environment**. Store data scoped by `projectId` and `environment`.",
        },
        {
          type: "table",
          headers: ["Frontend prop", "Storage field", "Description"],
          rows: [
            ["project.id", "(managed in API)", "App/project ID. Default my-app"],
            ["project.env", "environment", "stage, production, etc."],
            ["project.version", "app_version", "Deployed version"],
          ],
        },
        { type: "codeSnippet", snippet: "projectScope", language: "http" },
        {
          type: "paragraph",
          text: "Create payloads may include `environment` and `app_version`. Store them as sent.",
        },
      ],
    },
    {
      id: "ba-data-model",
      title: "Data model",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "Feedback body lives in **Case array (`cases[]`)**. Multiple issues in one feedback = multiple Cases. Replies are a separate resource.",
        },
        { type: "subheading", text: "Case — one piece of feedback body" },
        { type: "codeSnippet", snippet: "case", language: "json" },
        {
          type: "list",
          items: [
            "`text` — the actual feedback (not whitespace-only)",
            "`status` — `open` or `resolved`",
            "`assignee_name` — assignee name (null if none)",
            "When all Cases are resolved, the frontend syncs feedback status to resolved",
          ],
        },
        { type: "subheading", text: "Comment — full feedback" },
        { type: "codeSnippet", snippet: "comment", language: "json" },
        {
          type: "paragraph",
          text: "`field_values` holds **custom field** values from `<FivePixels fields={[...]} />`. Separate from `cases[].text`.",
        },
        { type: "subheading", text: "CommentSummary — list API response" },
        {
          type: "paragraph",
          text: "Returned by onList / onListAll. **No `replies[]`.** Only `reply_count` and `latest_reply`.",
        },
        { type: "codeSnippet", snippet: "commentSummary", language: "json" },
        {
          type: "paragraph",
          text: "Zero replies → `reply_count: 0`, `latest_reply: null`.",
        },
        { type: "subheading", text: "Comment key fields" },
        {
          type: "table",
          headers: ["Field", "Required", "Description"],
          rows: [
            ["pathname", "✅", "Page path (e.g. /pricing)"],
            ["report_id", "✅", "DOM data-report-id"],
            ["report_type", "✅", "group or item"],
            ["cases", "✅", "Case array (1 or more)"],
            ["status", "✅", "open | git_issued | resolved | archived"],
            ["field_values", "✅", "Custom field values"],
            ["position", "✅", "Marker position (see below)"],
            ["reply_count", "list only", "Number of replies"],
            ["latest_reply", "list only", "Latest reply summary (includes case_ids)"],
            ["target_selector", "", "CSS selector when no report_id"],
            ["integrations", "", "GitHub Issue metadata"],
          ],
        },
        { type: "subheading", text: "position — marker placement" },
        {
          type: "paragraph",
          text: "Keys are **camelCase** (`scrollY`, `reportId`, etc.). One JSON column is fine.",
        },
        { type: "codeSnippet", snippet: "position", language: "json" },
        { type: "subheading", text: "anchor example (inside modal, etc.)" },
        { type: "codeSnippet", snippet: "anchor", language: "json" },
        { type: "subheading", text: "Reply" },
        { type: "codeSnippet", snippet: "reply", language: "json" },
        {
          type: "table",
          headers: ["status", "Meaning"],
          rows: [
            ["suggested", "Suggestion or answer"],
            ["additional_question", "Follow-up question"],
            ["found_error", "Error found"],
            ["recheck_requested", "Recheck requested"],
            ["resolved", "Resolved"],
          ],
        },
        {
          type: "table",
          headers: ["author_type", "Meaning"],
          rows: [
            ["user", "Feedback author"],
            ["manager", "Reviewer/PM"],
            ["system", "System message (GitHub Issue, etc.)"],
          ],
        },
      ],
    },
    {
      id: "ba-endpoints",
      title: "API endpoints",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "Paths are examples. Adapt to your conventions, but keep **request/response JSON shapes**.",
        },
        { type: "subheading", text: "GET — current page list (onList)", id: "ba-endpoint-on-list" },
        {
          type: "paragraph",
          text: "**DB:** `comments` SELECT + `replies` aggregation (`reply_count`, `latest_reply`)",
        },
        {
          type: "paragraph",
          text: "Called on page load, pathname change, and after create/update/delete.",
        },
        { type: "codeSnippet", snippet: "getList", language: "http" },
        { type: "codeSnippet", snippet: "getListResponse", language: "json" },
        {
          type: "list",
          items: [
            "Return items with **exact** pathname match",
            "Sort by created_at descending (recommended)",
            "Include reply_count and latest_reply — **no replies[]**",
          ],
        },
        { type: "subheading", text: "List aggregation SQL (PostgreSQL)" },
        { type: "codeSnippet", snippet: "listAggregationSql", language: "sql" },
        { type: "subheading", text: "GET — all pages (onListAll, optional)", id: "ba-endpoint-on-list-all" },
        {
          type: "paragraph",
          text: "**DB:** `comments` + `replies` aggregation (same as onList), no pathname filter + cursor pagination",
        },
        { type: "codeSnippet", snippet: "getListAll", language: "http" },
        { type: "codeSnippet", snippet: "getListAllResponse", language: "json" },
        {
          type: "paragraph",
          text: "Omit or null `nextCursor` on the last page. Skip this API if onListAll is not wired.",
        },
        { type: "subheading", text: "GET — thread (onListReplies)", id: "ba-endpoint-on-list-replies" },
        {
          type: "paragraph",
          text: "**DB:** `replies` WHERE `comment_id` = :id, ORDER BY `created_at` ASC",
        },
        {
          type: "paragraph",
          text: "Called when opening a marker or list thread. Return 404 if comment not found.",
        },
        { type: "codeSnippet", snippet: "getReplies", language: "http" },
        { type: "codeSnippet", snippet: "getRepliesResponse", language: "json" },
        {
          type: "list",
          items: [
            "That comment's replies only, created_at ascending",
            "Each Reply includes **case_ids**",
          ],
        },
        { type: "subheading", text: "POST — create feedback (onCreate)", id: "ba-endpoint-on-create" },
        {
          type: "paragraph",
          text: "**DB:** `comments` INSERT (includes `cases` JSONB; server generates `id`, `created_at`)",
        },
        { type: "codeSnippet", snippet: "postCreate", language: "http" },
        { type: "codeSnippet", snippet: "createBody", language: "json" },
        { type: "codeSnippet", snippet: "createResponse", language: "json" },
        {
          type: "list",
          items: [
            "Server generates comment `id`; client sends `cases[].id`",
            "At least one case; each text must not be whitespace-only",
            "Response 201: reply_count: 0, latest_reply: null",
          ],
        },
        { type: "subheading", text: "POST — create reply (onCreateReply)", id: "ba-endpoint-on-create-reply" },
        {
          type: "paragraph",
          text: "**DB:** `replies` INSERT (includes `case_ids` JSONB)",
        },
        { type: "codeSnippet", snippet: "postCreateReply", language: "http" },
        { type: "codeSnippet", snippet: "createReplyBody", language: "json" },
        {
          type: "list",
          items: [
            "INSERT into replies table",
            "case_ids must reference that comment's cases[].id",
            "GitHub Issue notifications use author_type: system on the same API",
          ],
        },
        { type: "subheading", text: "PATCH — update feedback (onUpdate)", id: "ba-endpoint-on-update" },
        {
          type: "paragraph",
          text: "**DB:** `comments` UPDATE (partial merge: `cases`, `status`, `field_values`, `integrations`, etc.)",
        },
        {
          type: "paragraph",
          text: "Send only changed fields (partial update). **v2 does not accept a replies field.**",
        },
        { type: "codeSnippet", snippet: "patchUpdate", language: "http" },
        { type: "codeSnippet", snippet: "patchBody", language: "json" },
        { type: "subheading", text: "Custom field update example" },
        { type: "codeSnippet", snippet: "patchFieldValues", language: "json" },
        { type: "subheading", text: "GitHub Issue example" },
        { type: "codeSnippet", snippet: "patchGithub", language: "json" },
        {
          type: "table",
          headers: ["Allowed PATCH fields", "Description"],
          rows: [
            ["cases", "Replace entire case array"],
            ["status", "Feedback status"],
            ["field_values", "Custom fields"],
            ["integrations", "GitHub etc."],
            ["report_id / report_type", "Change target element (rare)"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Do not PATCH `position` after create — there is no move-marker UI.\nv1 fallback: without onCreateReply, the frontend may PATCH a replies array. v2 APIs can ignore it or return 400.",
        },
        { type: "subheading", text: "DELETE (onDelete, optional)", id: "ba-endpoint-on-delete" },
        {
          type: "paragraph",
          text: "**DB:** `comments` DELETE (prefer CASCADE for replies)",
        },
        { type: "codeSnippet", snippet: "deleteEndpoint", language: "http" },
        {
          type: "paragraph",
          text: "Response 204 No Content. Prefer ON DELETE CASCADE for replies.",
        },
      ],
    },
    {
      id: "ba-team-api",
      title: "Team / reviewers API (optional)",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "Separate from feedback CRUD. fivepixels only accepts `team.reviewers` as a **prop**. Without an API, hardcode in frontend or fall back to free-text input.",
        },
        { type: "subheading", text: "Role split" },
        {
          type: "table",
          headers: ["Data", "Source", "Stored?"],
          rows: [
            ["team.reviewers", "GET /members → prop", "No (dropdown options)"],
            ["team.user", "Login session", "No (current user)"],
            ["cases[].assignee_name", "Review actions", "Yes, in comments.cases JSON"],
          ],
        },
        {
          type: "paragraph",
          text: "`reviewers` = dropdown **options**. `assignee_name` = actual **assignment**. No FK needed — store as a string snapshot.",
        },
        { type: "subheading", text: "Member shape" },
        { type: "codeSnippet", snippet: "member", language: "json" },
        {
          type: "list",
          items: [
            "publicKey — only needed with requireReviewerKey",
            "Empty reviewers array → free-text input fallback",
          ],
        },
        { type: "subheading", text: "GET — reviewer list", id: "ba-endpoint-members" },
        {
          type: "paragraph",
          text: "**DB:** `project_members` (or team DB) SELECT — no FK to feedback tables needed",
        },
        { type: "codeSnippet", snippet: "getMembers", language: "http" },
        { type: "codeSnippet", snippet: "getMembersResponse", language: "json" },
        { type: "subheading", text: "Frontend wiring example" },
        { type: "codeSnippet", snippet: "teamIntegration", language: "tsx" },
      ],
    },
    {
      id: "ba-errors-auth",
      title: "Errors · auth",
      variant: "reference",
      blocks: [
        { type: "subheading", text: "Error responses" },
        {
          type: "paragraph",
          text: "The library shows a generic failure message on HTTP errors. Response body format is up to your API standard.",
        },
        {
          type: "table",
          headers: ["Code", "Situation"],
          rows: [
            ["400", "Invalid JSON or missing required fields"],
            ["404", "Unknown comment or reply id"],
            ["409", "(optional) Concurrent edit conflict"],
            ["500", "Server error"],
          ],
        },
        { type: "subheading", text: "Auth signature (optional)" },
        {
          type: "paragraph",
          text: "With requireReviewerKey, create/update/reply bodies may include auth.",
        },
        { type: "codeSnippet", snippet: "authPayload", language: "json" },
        {
          type: "table",
          headers: ["action", "When"],
          rows: [
            ["feedback:create", "Feedback creation"],
            ["feedback:update", "Feedback edit"],
            ["reply:create", "Reply creation"],
          ],
        },
        {
          type: "paragraph",
          text: "Skip auth verification if you do not use team keys.",
        },
      ],
    },
    {
      id: "ba-integration",
      title: "Frontend wiring · call flow",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "When your backend is ready, wire handlers and team prop like this:",
        },
        { type: "codeSnippet", snippet: "frontendIntegration", language: "tsx" },
        { type: "subheading", text: "Call flow" },
        { type: "codeSnippet", snippet: "callFlow", language: "text" },
      ],
    },
    {
      id: "ba-db-checklist",
      title: "DB · checklist",
      variant: "reference",
      blocks: [
        { type: "subheading", text: "Recommended two-table schema" },
        { type: "codeSnippet", snippet: "dbSchema", language: "sql" },
        {
          type: "paragraph",
          text: "Suggested indexes: (project_id, environment, pathname, created_at DESC), (comment_id, created_at ASC)",
        },
        { type: "subheading", text: "You do not need to build" },
        {
          type: "list",
          items: [
            "Keyword/status filter APIs",
            "Embedded replies array / PATCH overwrite (v2)",
            "Realtime push / WebSocket",
            "Individual position updates",
            "Top-level message field (legacy — use cases[])",
          ],
        },
        { type: "subheading", text: "Pre-launch checklist" },
        {
          type: "list",
          items: [
            "GET /comments — pathname filter, CommentSummary[] (no replies[], includes cases[])",
            "GET /comments/{id}/replies — Reply[] with case_ids, created_at ASC",
            "POST /comments — at least one case, server generates id/created_at",
            "POST /comments/{id}/replies — single reply INSERT with case_ids",
            "PATCH /comments/{id} — partial merge, no replies field",
            "position camelCase (scrollY, reportId), other fields snake_case",
            "(optional) DELETE, listAll + cursor, projectId/environment scope",
            "(optional, recommended) GET /members → team.reviewers",
          ],
        },
      ],
    },
  ],
}
