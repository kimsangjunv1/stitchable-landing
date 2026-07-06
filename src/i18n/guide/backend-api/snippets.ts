export const BACKEND_API_SNIPPETS = {
  projectScope: "GET /api/projects/{projectId}/comments?pathname=/pricing&environment=stage",
  case: `{
  "id": "case-001",
  "text": "가격 카드가 모바일에서 잘림",
  "status": "open",
  "assignee_name": null,
  "created_at": "2026-06-07T09:00:00.000Z",
  "updated_at": "2026-06-07T09:00:00.000Z"
}`,
  comment: `{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "pathname": "/pricing",
  "report_id": "price-card",
  "report_type": "item",
  "target_selector": "[data-report-id=\\"price-card\\"]",
  "cases": [
    {
      "id": "case-001",
      "text": "가격 카드가 모바일에서 잘림",
      "status": "open",
      "assignee_name": null,
      "created_at": "2026-06-07T09:00:00.000Z",
      "updated_at": "2026-06-07T09:00:00.000Z"
    }
  ],
  "status": "open",
  "field_values": { "isBug": true },
  "position": {
    "target": { "x": 0.25, "y": 0.75 },
    "viewport": { "x": 0.42, "y": 0.18, "width": 1440, "height": 900 },
    "scrollY": 120,
    "anchor": null
  },
  "created_at": "2026-06-07T09:00:00.000Z",
  "environment": "stage",
  "app_version": "1.2.0",
  "author_id": "user-1",
  "author_name": "김아영",
  "integrations": {
    "github": {
      "issue_number": 42,
      "issue_url": "https://github.com/org/repo/issues/42",
      "issued_at": "2026-06-07T10:00:00.000Z"
    }
  }
}`,
  commentSummary: `{
  "id": "cmt-001",
  "pathname": "/pricing",
  "report_id": "price-card",
  "report_type": "item",
  "cases": [
    {
      "id": "case-001",
      "text": "가격 카드가 모바일에서 잘림",
      "status": "open",
      "assignee_name": null,
      "created_at": "2026-06-07T09:00:00.000Z",
      "updated_at": "2026-06-07T09:00:00.000Z"
    }
  ],
  "status": "open",
  "field_values": { "isBug": true },
  "position": { "...": "..." },
  "created_at": "2026-06-07T09:00:00.000Z",
  "reply_count": 3,
  "latest_reply": {
    "id": "rpl-003",
    "message": "iOS Safari에서 재현됨",
    "created_at": "2026-06-07T11:30:00.000Z",
    "status": "found_error",
    "case_ids": ["case-001"],
    "author_type": "manager",
    "author_name": "PM"
  }
}`,
  position: `{
  "target": { "x": 0.25, "y": 0.75 },
  "viewport": { "x": 0.42, "y": 0.18, "width": 1440, "height": 900 },
  "scrollY": 120,
  "anchor": null
}`,
  anchor: `{
  "reportId": "modal-demo",
  "reportType": "group",
  "x": 0.5,
  "y": 0.5
}`,
  reply: `{
  "id": "rpl-001",
  "comment_id": "cmt-001",
  "message": "재현 확인했습니다",
  "created_at": "2026-06-07T10:00:00.000Z",
  "status": "suggested",
  "case_ids": ["case-001"],
  "parent_reply_id": null,
  "author_type": "manager",
  "author_name": "리뷰어"
}`,
  member: `{
  "id": "1",
  "name": "Alex, QA Assistant",
  "publicKey": "-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----"
}`,
  getList: "GET /api/projects/{projectId}/comments?pathname=/pricing&environment=stage",
  getListResponse: `[
  {
    "id": "cmt-001",
    "pathname": "/pricing",
    "report_id": "price-card",
    "cases": [{ "...": "..." }],
    "reply_count": 3,
    "latest_reply": { "...": "..." },
    "...": "..."
  }
]`,
  listAggregationSql: `SELECT
  c.*,
  COUNT(r.id) AS reply_count,
  (
    SELECT row_to_json(lr)
    FROM (
      SELECT id, message, created_at, status, case_ids, author_type, author_name
      FROM replies
      WHERE comment_id = c.id
      ORDER BY created_at DESC
      LIMIT 1
    ) lr
  ) AS latest_reply
FROM comments c
LEFT JOIN replies r ON r.comment_id = c.id
WHERE c.project_id = $1 AND c.environment = $2 AND c.pathname = $3
GROUP BY c.id
ORDER BY c.created_at DESC;`,
  getListAll: "GET /api/projects/{projectId}/comments?cursor=abc&limit=100&environment=stage",
  getListAllResponse: `{
  "items": [
    { "...CommentSummary" }
  ],
  "nextCursor": "def"
}`,
  getMembers: "GET /api/projects/{projectId}/members?environment=stage",
  getMembersResponse: `[
  { "id": "1", "name": "Alex, QA Assistant" },
  { "id": "2", "name": "Sophia, QA" }
]`,
  getReplies: "GET /api/projects/{projectId}/comments/cmt-001/replies",
  getRepliesResponse: `[
  {
    "id": "rpl-001",
    "comment_id": "cmt-001",
    "message": "재현 확인했습니다",
    "created_at": "2026-06-07T10:00:00.000Z",
    "status": "suggested",
    "case_ids": ["case-001"],
    "parent_reply_id": null,
    "author_type": "manager",
    "author_name": "리뷰어"
  }
]`,
  postCreate: `POST /api/projects/{projectId}/comments
Content-Type: application/json`,
  createBody: `{
  "pathname": "/pricing",
  "report_id": "price-card",
  "report_type": "item",
  "target_selector": "[data-report-id=\\"price-card\\"]",
  "cases": [
    {
      "id": "case-001",
      "text": "가격 카드가 모바일에서 잘림",
      "status": "open",
      "assignee_name": null,
      "created_at": "2026-06-07T09:00:00.000Z",
      "updated_at": "2026-06-07T09:00:00.000Z"
    }
  ],
  "status": "open",
  "field_values": { "isBug": true },
  "position": {
    "target": { "x": 0.5, "y": 0.5 },
    "viewport": { "x": 0.42, "y": 0.18, "width": 1440, "height": 900 },
    "scrollY": 120,
    "anchor": null
  },
  "environment": "stage",
  "app_version": "1.2.0",
  "author_id": "user-1",
  "author_name": "김아영"
}`,
  createResponse: `{
  "id": "cmt-001",
  "pathname": "/pricing",
  "cases": [{ "...": "..." }],
  "status": "open",
  "reply_count": 0,
  "latest_reply": null,
  "...": "..."
}`,
  postCreateReply: `POST /api/projects/{projectId}/comments/cmt-001/replies
Content-Type: application/json`,
  createReplyBody: `{
  "message": "iOS Safari에서 재현됨",
  "status": "found_error",
  "case_ids": ["case-001"],
  "parent_reply_id": null,
  "author_type": "manager",
  "author_name": "PM"
}`,
  patchUpdate: `PATCH /api/projects/{projectId}/comments/cmt-001
Content-Type: application/json`,
  patchBody: `{
  "cases": [
    {
      "id": "case-001",
      "text": "수정된 케이스 내용",
      "status": "resolved",
      "assignee_name": "PM",
      "created_at": "2026-06-07T09:00:00.000Z",
      "updated_at": "2026-06-07T12:00:00.000Z"
    }
  ],
  "status": "resolved"
}`,
  patchFieldValues: `{
  "field_values": { "isBug": true, "isImportant": false }
}`,
  patchGithub: `{
  "status": "git_issued",
  "integrations": {
    "github": {
      "issue_number": 42,
      "issue_url": "https://github.com/org/repo/issues/42",
      "issued_at": "2026-06-07T10:00:00.000Z"
    }
  }
}`,
  deleteEndpoint: "DELETE /api/projects/{projectId}/comments/cmt-001",
  authPayload: `{
  "auth": {
    "author_id": "reviewer-1",
    "algorithm": "ECDSA-P256-SHA256",
    "action": "feedback:create",
    "signed_at": "2026-06-07T09:00:00.000Z",
    "signature": "base64url..."
  }
}`,
  teamIntegration: `function AppWithFivePixels() {
  const [reviewers, setReviewers] = useState<ReportAuthor[]>([]);

  useEffect(() => {
    fetch("/api/projects/my-app/members?environment=stage")
      .then((r) => r.json())
      .then(setReviewers);
  }, []);

  return (
    <FivePixels
      project={{ id: "my-app", env: "stage" }}
      team={{
        user: { id: "demo-user", name: "Alex" },
        reviewers,
      }}
      onList={...}
      onCreate={...}
      onUpdate={...}
    />
  );
}`,
  frontendIntegration: `<FivePixels
  project={{ id: "my-app", env: "stage", version: "1.2.0" }}
  team={{
    user: { id: "demo-user", name: "Alex" },
    reviewers, // GET /members 결과
  }}
  onList={({ pathname }) =>
    fetch(
      \`/api/projects/my-app/comments?pathname=\${encodeURIComponent(pathname)}&environment=stage\`,
    ).then((r) => r.json())
  }
  onListAll={({ cursor, limit }) => {
    const params = new URLSearchParams({ limit: String(limit), environment: "stage" });
    if (cursor) params.set("cursor", cursor);
    return fetch(\`/api/projects/my-app/comments?\${params}\`).then((r) => r.json());
  }}
  onListReplies={(commentId) =>
    fetch(\`/api/projects/my-app/comments/\${commentId}/replies\`).then((r) => r.json())
  }
  onCreate={(payload) =>
    fetch("/api/projects/my-app/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((r) => r.json())
  }
  onCreateReply={(commentId, payload) =>
    fetch(\`/api/projects/my-app/comments/\${commentId}/replies\`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((r) => r.json())
  }
  onUpdate={(id, payload) =>
    fetch(\`/api/projects/my-app/comments/\${id}\`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((r) => r.json())
  }
  onDelete={(id) =>
    fetch(\`/api/projects/my-app/comments/\${id}\`, { method: "DELETE" }).then(() => undefined)
  }
/>`,
  callFlow: `[앱 시작]
  → GET /members → team.reviewers 주입

[페이지 진입]
  → GET /comments?pathname=...
  → 요약 목록 (cases + reply_count, replies[] 없음)

[마커 +N / hover]
  → onList 응답의 reply_count, latest_reply 사용

[스레드 열기]
  → GET /comments/{id}/replies
  → Reply[] (case_ids 포함)

[피드백 작성]
  → POST /comments (cases[] 포함)
  → GET /comments?pathname=... (재조회)

[답변 작성]
  → POST /comments/{id}/replies (case_ids 포함)
  → GET /comments/{id}/replies 또는 목록 재조회

[케이스 / 상태 수정]
  → PATCH /comments/{id}
  → GET /comments?pathname=... (재조회)

[삭제]
  → DELETE /comments/{id}
  → GET /comments?pathname=... (재조회)

[전체 목록 탭]
  → GET /comments?cursor=&limit=100`,
  dbSchema: `comments
  id              UUID PK
  project_id      VARCHAR
  environment     VARCHAR
  pathname        VARCHAR
  report_id       VARCHAR
  report_type     VARCHAR
  target_selector VARCHAR NULL
  cases           JSONB          -- Case[] 배열
  status          VARCHAR
  field_values    JSONB
  position        JSONB
  app_version     VARCHAR
  author_id       VARCHAR
  author_name     VARCHAR
  integrations    JSONB
  created_at      TIMESTAMPTZ
  updated_at      TIMESTAMPTZ

replies
  id              UUID PK
  comment_id      UUID FK → comments(id) ON DELETE CASCADE
  message         TEXT
  status          VARCHAR
  case_ids        JSONB          -- string[] (케이스 ID 목록)
  parent_reply_id UUID NULL
  author_type     VARCHAR
  author_name     VARCHAR
  created_at      TIMESTAMPTZ`,
} as const

export type BackendApiSnippetKey = keyof typeof BACKEND_API_SNIPPETS
