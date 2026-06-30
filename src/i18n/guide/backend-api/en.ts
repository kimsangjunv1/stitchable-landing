import type { GuideMessages } from "../types"

export const backendApiGuideEn: GuideMessages = {
  title: "Backend API",
  description:
    "Self-host reference (v2). With fivepixels hosting you do not need to build this backend yourself.",
  hero: {
    eyebrow: "SELF-HOST REFERENCE · V2",
    title: "Backend API guide",
    description:
      "REST API, data model, and DB schema for integrating `@fivepixels-js/react` with your backend. v2 splits **comments + replies** into two resources — list returns summaries only; threads load on click.",
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
    { label: "API", sectionIds: ["ba-endpoints", "ba-errors-auth"] },
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
          text: "This document is a **self-host reference (v2)**.\nThe library requires **handler return shapes**, not a specific REST stack.\nv2 needs library support for `onListReplies` and `onCreateReply`.\nWith fivepixels hosting (coming soon), you do not need to implement this API yourself.",
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
          text: "The frontend wires handlers on `<FivePixels />`. Each handler calls your API below. **Required handlers must be implemented together**; `onDelete` and `onListAll` are optional.",
        },
        {
          type: "table",
          headers: ["Priority", "Handler", "Suggested REST", "Purpose"],
          rows: [
            ["Required", "onList", "GET /comments?pathname={pathname}", "Feedback **summaries** for current page"],
            ["Required", "onListReplies", "GET /comments/{id}/replies", "Thread — on marker click"],
            ["Required", "onCreate", "POST /comments", "Create feedback"],
            ["Required", "onCreateReply", "POST /comments/{id}/replies", "Create single reply"],
            ["Required", "onUpdate", "PATCH /comments/{id}", "Edit body, status, integrations"],
            ["Optional", "onDelete", "DELETE /comments/{id}", "Delete feedback"],
            ["Optional", "onListAll", "GET /comments?cursor=&limit=100", "All pages, summarized"],
          ],
        },
        { type: "subheading", text: "v2 behavior" },
        {
          type: "list",
          items: [
            "**No polling or WebSocket** — API calls only on user action or navigation",
            "**List filtering is client-side** — no keyword/status filter API needed",
            "**No replies[] in list** — only `reply_count` + `latest_reply` summary",
            "**Marker +N and hover** — derived from onList summary fields",
            "**Open thread** — onListReplies(commentId) on marker click",
            "**Add reply** — onCreateReply single POST (no replies array PATCH)",
          ],
        },
        { type: "subheading", text: "v1 vs v2" },
        {
          type: "table",
          headers: ["", "v1 (legacy)", "v2 (recommended)"],
          rows: [
            ["List", "ReportFeedback[] + full replies[]", "CommentSummary[] + reply_count, latest_reply"],
            ["Thread", "Embedded in list", "GET /comments/{id}/replies"],
            ["Add reply", "PATCH + replace replies array", "POST /comments/{id}/replies"],
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
          text: "The frontend scopes data with `<FivePixels project={{ id, env, version }} />`.",
        },
        {
          type: "table",
          headers: ["Frontend prop", "Storage field", "Description"],
          rows: [
            ["project.id", "(manage in API)", "App/project id. Default my-app"],
            ["project.env", "environment", "Environment (stage, production, etc.)"],
            ["project.version", "app_version", "Deployed version"],
          ],
        },
        {
          type: "paragraph",
          text: "Isolate data via `projectId` and `environment` in the path or query string.",
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
          text: "Resources are split into **Comment** (feedback) and **Reply**. List APIs return `CommentSummary`; thread APIs return `Reply[]`.",
        },
        { type: "subheading", text: "Comment" },
        { type: "codeSnippet", snippet: "comment", language: "json" },
        { type: "subheading", text: "CommentSummary (list response)" },
        {
          type: "paragraph",
          text: "Returned by onList / onListAll. **Does not include replies[].**",
        },
        { type: "codeSnippet", snippet: "commentSummary", language: "json" },
        { type: "subheading", text: "Comment fields" },
        {
          type: "table",
          headers: ["Field", "Type", "Required", "Description"],
          rows: [
            ["id", "string", "on response", "Server-generated unique id"],
            ["pathname", "string", "✅", "SPA path where feedback was left"],
            ["report_id", "string", "✅", "DOM data-report-id value"],
            ["report_type", "group | item", "✅", "DOM data-report-type. Default item"],
            ["message", "string", "✅", "Feedback body"],
            ["status", "string", "✅", "open | git_issued | resolved | archived"],
            ["field_values", "object", "✅", "Custom field values (string | boolean)"],
            ["position", "object", "✅", "Click position and viewport info"],
            ["created_at", "string", "on response", "ISO 8601 datetime"],
            ["reply_count", "number", "on list", "Number of replies"],
            ["latest_reply", "object | null", "on list", "Latest reply summary"],
            ["integrations", "object", "", "GitHub Issue metadata"],
          ],
        },
        { type: "subheading", text: "position object" },
        {
          type: "paragraph",
          text: "Used to restore marker placement. **JSON keys are camelCase.** You may store this as a single JSON column.",
        },
        { type: "codeSnippet", snippet: "position", language: "json" },
        {
          type: "table",
          headers: ["Field", "Type", "Description"],
          rows: [
            ["target", "{ x, y } | null", "Click ratio inside the DOM element (0–1)"],
            ["viewport", "{ x, y, width, height }", "Viewport-relative click ratio and size"],
            ["scrollY", "number", "window.scrollY at creation time"],
            ["anchor", "object | null", "Position relative to modal/overlay anchor"],
          ],
        },
        { type: "subheading", text: "anchor example" },
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
      ],
    },
    {
      id: "ba-endpoints",
      title: "API endpoints",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "Paths below are examples. Adapt to your conventions, but keep **request/response JSON shapes**.",
        },
        { type: "subheading", text: "GET — current page list (onList)" },
        {
          type: "paragraph",
          text: "Called on page load, pathname change, and after create/update/delete.",
        },
        { type: "codeSnippet", snippet: "getList", language: "http" },
        { type: "codeSnippet", snippet: "getListResponse", language: "json" },
        {
          type: "list",
          items: [
            "Return items with exact pathname match",
            "Sort by created_at descending (recommended)",
            "Include reply_count and latest_reply — **no replies[]**",
          ],
        },
        { type: "subheading", text: "GET — all pages (onListAll, optional)" },
        { type: "codeSnippet", snippet: "getListAll", language: "http" },
        { type: "codeSnippet", snippet: "getListAllResponse", language: "json" },
        {
          type: "paragraph",
          text: "Omit or null `nextCursor` on the last page. Not needed if onListAll is not wired on the frontend.",
        },
        { type: "subheading", text: "GET — thread (onListReplies)" },
        {
          type: "paragraph",
          text: "Called when opening a marker or list item thread.",
        },
        { type: "codeSnippet", snippet: "getReplies", language: "http" },
        { type: "codeSnippet", snippet: "getRepliesResponse", language: "json" },
        {
          type: "list",
          items: [
            "WHERE comment_id = :id ORDER BY created_at ASC",
            "Lazy-load replies for that comment only",
          ],
        },
        { type: "subheading", text: "POST — create (onCreate)" },
        { type: "codeSnippet", snippet: "postCreate", language: "http" },
        { type: "codeSnippet", snippet: "createBody", language: "json" },
        {
          type: "list",
          items: [
            "Response 201: CommentSummary with reply_count: 0, latest_reply: null",
            "Generate id on the server",
          ],
        },
        { type: "subheading", text: "POST — create reply (onCreateReply)" },
        { type: "codeSnippet", snippet: "postCreateReply", language: "http" },
        { type: "codeSnippet", snippet: "createReplyBody", language: "json" },
        {
          type: "list",
          items: [
            "INSERT into replies table",
            "System messages use author_type: system on the same API",
            "Refresh via onListReplies or onList after success",
          ],
        },
        { type: "subheading", text: "PATCH — update (onUpdate)" },
        { type: "codeSnippet", snippet: "patchUpdate", language: "http" },
        { type: "codeSnippet", snippet: "patchBody", language: "json" },
        {
          type: "paragraph",
          text: "**Does not accept a replies field.** GitHub Issue example:",
        },
        { type: "codeSnippet", snippet: "patchGithub", language: "json" },
        {
          type: "list",
          items: [
            "Use POST /comments/{id}/replies for system replies",
            "position is not sent via PATCH after create",
            "Response 200: merged CommentSummary",
          ],
        },
        { type: "subheading", text: "DELETE (onDelete, optional)" },
        { type: "codeSnippet", snippet: "deleteEndpoint", language: "http" },
        {
          type: "paragraph",
          text: "Response 204 No Content. Prefer ON DELETE CASCADE for replies.",
        },
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
          headers: ["Status", "Situation"],
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
          text: "With `team={{ reviewers: [{ publicKey }], requireReviewerKey }}`, create/update payloads may include `auth`.",
        },
        { type: "codeSnippet", snippet: "authPayload", language: "json" },
        {
          type: "table",
          headers: ["action", "When"],
          rows: [
            ["feedback:create", "Feedback creation"],
            ["feedback:update", "Feedback edit or status change"],
            ["reply:create", "Reply creation (v2)"],
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
          text: "When your backend is ready, wire the frontend like this:",
        },
        { type: "codeSnippet", snippet: "frontendIntegration", language: "tsx" },
        { type: "subheading", text: "Call flow" },
        { type: "codeSnippet", snippet: "callFlow", language: "text" },
      ],
    },
    {
      id: "ba-db-checklist",
      title: "DB schema · checklist",
      variant: "reference",
      blocks: [
        { type: "subheading", text: "Recommended two-table schema" },
        { type: "codeSnippet", snippet: "dbSchema", language: "sql" },
        {
          type: "paragraph",
          text: "Suggested indexes: `(project_id, environment, pathname, created_at DESC)`, `(comment_id, created_at ASC)`",
        },
        { type: "subheading", text: "You do not need to build" },
        {
          type: "list",
          items: [
            "Keyword/status/type filter APIs",
            "Embedded replies array / PATCH overwrite (v1 style)",
            "Realtime push / WebSocket",
            "Individual position field updates",
          ],
        },
        { type: "subheading", text: "Pre-launch checklist" },
        {
          type: "list",
          items: [
            "GET /comments — pathname filter, returns CommentSummary[] (no replies[])",
            "GET /comments/{id}/replies — returns Reply[], created_at ASC",
            "POST /comments — server generates id/created_at, reply_count: 0",
            "POST /comments/{id}/replies — single reply INSERT",
            "PATCH /comments/{id} — partial merge, no replies field",
            "Keep position keys camelCase (scrollY, reportId, etc.)",
            "Keep other fields snake_case (report_id, created_at, comment_id, etc.)",
            "(optional) DELETE /comments/{id}, replies CASCADE",
            "(optional) GET /comments listAll with cursor pagination",
            "(optional) projectId / environment scope isolation",
          ],
        },
      ],
    },
  ],
}
