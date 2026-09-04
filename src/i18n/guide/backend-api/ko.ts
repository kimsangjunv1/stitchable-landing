import type { GuideMessages } from "../types"

export const backendApiGuideKo: GuideMessages = {
  title: "Backend API",
  description:
    "self-host 참고 구현(v2)입니다. fivepixels 호스팅을 쓰면 백엔드를 직접 만들 필요가 없습니다.",
  hero: {
    eyebrow: "SELF-HOST REFERENCE · V2",
    title: "백엔드 API 가이드",
    description:
      "fivepixels를 **직접 서버에 연결**할 때 필요한 REST API를 정리했습니다. v2는 피드백(comments)과 답변(replies)을 나누고, 목록은 가볍게, 스레드는 클릭할 때만 불러옵니다.",
    cta: "한눈에 보기",
    ctaHref: "#ba-overview",
    installCommand: "",
  },
  navHome: "가이드",
  codeCopy: "복사",
  codeCopied: "복사되었습니다",
  onThisPage: "이 페이지에서",
  referenceDivider: "상세",
  navGroups: [
    { label: "개요", sectionIds: ["ba-intro", "ba-overview", "ba-project-scope"] },
    { label: "데이터 모델", sectionIds: ["ba-data-model"] },
    { label: "API", sectionIds: ["ba-endpoints", "ba-team-api", "ba-errors-auth"] },
    { label: "연동·운영", sectionIds: ["ba-integration", "ba-db-checklist"] },
  ],
  sections: [
    {
      id: "ba-intro",
      title: "시작하기",
      variant: "reference",
      blocks: [
        {
          type: "callout",
          variant: "info",
          text: "이 문서는 **self-host 참고 구현(v2)** 입니다.\n라이브러리가 원하는 것은 REST가 아니라 handler가 **돌려주는 JSON 형태**입니다.\n경로(`/comments` 등)는 팀에 맞게 바꿔도 되고, **JSON 형태만 맞추면** 연동됩니다.\nfivepixels 호스팅(준비 중)을 쓰면 아래 API를 직접 만들지 않아도 됩니다.",
        },
        {
          type: "link",
          href: "/guide#persistence-choice",
          label: "저장 · 협업 가이드로 돌아가기",
        },
      ],
    },
    {
      id: "ba-overview",
      title: "한눈에 보기",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "프론트는 `<FivePixels />`에 handler를 연결하고, 각 handler가 아래 API를 호출합니다.",
        },
        { type: "subheading", text: "용어 정리" },
        {
          type: "table",
          headers: ["REST 이름", "라이브러리 타입", "한 줄 설명"],
          rows: [
            ["Comment", "ReportFeedback", "피드백 한 건"],
            ["Case", "ReportCase", "피드백 안의 이슈/항목 (본문 역할)"],
            ["Reply", "ReportReply", "스레드 답변"],
            ["Member", "ReportAuthor", "리뷰어·담당자 선택지"],
          ],
        },
        { type: "subheading", text: "handler ↔ API" },
        {
          type: "table",
          headers: ["우선순위", "프론트 handler", "권장 REST", "용도", "바로가기"],
          rows: [
            [
              "필수",
              "onList",
              "GET /comments?pathname=...",
              "현재 페이지 피드백 **요약** 목록",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-list", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "필수",
              "onCreate",
              "POST /comments",
              "피드백 생성",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-create", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "필수",
              "onUpdate",
              "PATCH /comments/{id}",
              "케이스·상태·연동 정보 수정",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-update", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "v2 권장",
              "onListReplies",
              "GET /comments/{id}/replies",
              "스레드 — 마커 클릭 시",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-list-replies", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "v2 권장",
              "onCreateReply",
              "POST /comments/{id}/replies",
              "답변 한 건 추가",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-create-reply", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "선택",
              "onDelete",
              "DELETE /comments/{id}",
              "피드백 삭제",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-delete", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "선택",
              "onListAll",
              "GET /comments?cursor=&limit=100",
              "전체 페이지 요약 목록",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-on-list-all", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
            [
              "선택",
              "team.reviewers",
              "GET /members",
              "리뷰어 드롭다운 목록",
              {
                type: "anchors",
                links: [
                  { href: "#ba-endpoint-members", label: "상세" },
                  { href: "#ba-db-checklist", label: "DB" },
                ],
              },
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "`onList`·`onCreate`·`onUpdate`는 **함께** 넘기거나 **모두 생략**해야 합니다. 생략하면 localStorage를 씁니다.\nv2 handler(`onListReplies`·`onCreateReply`)가 없으면 v1 방식(PATCH로 replies 배열 통째로)으로 fallback합니다.",
        },
        { type: "subheading", text: "v2가 이렇게 동작합니다" },
        {
          type: "list",
          items: [
            "**실시간 연결 없음** — 사용자가 뭔가 할 때, 페이지가 바뀔 때만 API 호출",
            "**필터는 프론트가 처리** — 검색·상태 필터용 API는 필요 없음",
            "**본문은 cases[]** — 최상위 `message` 필드는 쓰지 않음",
            "**목록은 가볍게** — `replies[]` 대신 `reply_count` + `latest_reply`만",
            "**스레드는 클릭 시** — 마커/목록 클릭 → `onListReplies` 호출",
            "**답변은 한 건씩** — `POST /replies` (v1처럼 PATCH로 배열 통째로 X)",
            "**변경 후 재조회** — create/update/delete 성공 시 목록 또는 스레드 다시 불러옴",
          ],
        },
        { type: "subheading", text: "v1과 v2 차이" },
        {
          type: "table",
          headers: ["", "v1 (레거시)", "v2 (권장)"],
          rows: [
            ["목록", "replies[]까지 전부 포함", "요약만 (reply_count, latest_reply)"],
            ["스레드", "목록에 이미 있음", "클릭 시 GET /replies"],
            ["답변 추가", "PATCH + replies 배열 통째로", "POST /replies 한 건"],
            ["DB", "1테이블 + replies JSONB", "comments + replies 2테이블"],
          ],
        },
      ],
    },
    {
      id: "ba-project-scope",
      title: "프로젝트 스코프",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "프론트는 `<FivePixels project={{ id, env, version }} />`로 **어느 앱·어느 환경**인지 구분합니다. 백엔드는 `projectId`와 `environment`로 데이터를 나눠 저장하면 됩니다.",
        },
        {
          type: "table",
          headers: ["프론트 prop", "저장 필드", "설명"],
          rows: [
            ["project.id", "(API에서 관리)", "앱/프로젝트 ID. 기본값 my-app"],
            ["project.env", "environment", "stage, production 등"],
            ["project.version", "app_version", "배포 버전"],
          ],
        },
        { type: "codeSnippet", snippet: "projectScope", language: "http" },
        {
          type: "paragraph",
          text: "피드백 생성 시 `environment`, `app_version`이 body에 올 수 있습니다. 받은 값 그대로 저장하면 됩니다.",
        },
      ],
    },
    {
      id: "ba-data-model",
      title: "데이터 모델",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "피드백 본문은 **Case 배열(`cases[]`)** 입니다. 하나의 피드백에 이슈가 여러 개면 Case도 여러 개입니다. 답변(Reply)은 별도 리소스입니다.",
        },
        { type: "subheading", text: "Case — 피드백 본문 한 조각" },
        { type: "codeSnippet", snippet: "case", language: "json" },
        {
          type: "list",
          items: [
            "`text` — 실제 피드백 내용 (공백만이면 안 됨)",
            "`status` — `open` 또는 `resolved`",
            "`assignee_name` — 담당자 이름 (없으면 null)",
            "모든 Case가 resolved면 프론트가 피드백 status도 resolved로 맞춤",
          ],
        },
        { type: "subheading", text: "Comment — 피드백 전체" },
        { type: "codeSnippet", snippet: "comment", language: "json" },
        {
          type: "paragraph",
          text: "`field_values`는 `<FivePixels fields={[...]} />`로 만든 **커스텀 필드** 값입니다. `cases[].text`와는 별개입니다.",
        },
        { type: "subheading", text: "CommentSummary — 목록 API 응답" },
        {
          type: "paragraph",
          text: "onList / onListAll이 돌려주는 형태입니다. **`replies[]`는 넣지 않습니다.** 대신 `reply_count`와 `latest_reply`만 포함합니다.",
        },
        { type: "codeSnippet", snippet: "commentSummary", language: "json" },
        {
          type: "paragraph",
          text: "답변이 0개면 `reply_count: 0`, `latest_reply: null` 입니다.",
        },
        { type: "subheading", text: "Comment 주요 필드" },
        {
          type: "table",
          headers: ["필드", "필수", "설명"],
          rows: [
            ["pathname", "✅", "피드백이 남겨진 페이지 경로 (예: /pricing)"],
            ["report_id", "✅", "DOM의 data-report-id"],
            ["report_type", "✅", "group 또는 item"],
            ["cases", "✅", "Case 배열 (1개 이상)"],
            ["status", "✅", "open | git_issued | resolved | archived"],
            ["field_values", "✅", "커스텀 필드 값"],
            ["position", "✅", "마커 위치 (아래 참고)"],
            ["reply_count", "목록만", "답변 개수"],
            ["latest_reply", "목록만", "가장 최근 답변 요약 (case_ids 포함)"],
            ["target_selector", "", "report_id 없을 때 CSS selector"],
            ["integrations", "", "GitHub Issue 연동 정보"],
          ],
        },
        { type: "subheading", text: "position — 마커 위치" },
        {
          type: "paragraph",
          text: "키 이름은 **camelCase** (`scrollY`, `reportId` 등)입니다. JSON 컬럼 하나에 통째로 저장해도 됩니다.",
        },
        { type: "codeSnippet", snippet: "position", language: "json" },
        { type: "subheading", text: "anchor 예시 (모달 안 등)" },
        { type: "codeSnippet", snippet: "anchor", language: "json" },
        { type: "subheading", text: "Reply — 답변" },
        { type: "codeSnippet", snippet: "reply", language: "json" },
        {
          type: "table",
          headers: ["status", "의미"],
          rows: [
            ["suggested", "제안/답변"],
            ["additional_question", "추가 질문"],
            ["found_error", "오류 발견"],
            ["recheck_requested", "재확인 요청"],
            ["resolved", "해결 확인"],
          ],
        },
        {
          type: "table",
          headers: ["author_type", "의미"],
          rows: [
            ["user", "피드백 작성자"],
            ["manager", "리뷰어/PM"],
            ["system", "시스템 메시지 (GitHub Issue 생성 등)"],
          ],
        },
      ],
    },
    {
      id: "ba-endpoints",
      title: "API 엔드포인트",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "경로는 예시입니다. 팀 컨벤션에 맞게 바꿔도 되지만, **요청/응답 JSON 형태는 그대로** 유지하세요.",
        },
        { type: "subheading", text: "GET — 현재 페이지 목록 (onList)", id: "ba-endpoint-on-list" },
        {
          type: "paragraph",
          text: "**DB:** `comments` SELECT + `replies` 집계 (`reply_count`, `latest_reply`)",
        },
        {
          type: "paragraph",
          text: "페이지 들어올 때, pathname 바뀔 때, create/update/delete 후에 호출됩니다.",
        },
        { type: "codeSnippet", snippet: "getList", language: "http" },
        { type: "codeSnippet", snippet: "getListResponse", language: "json" },
        {
          type: "list",
          items: [
            "pathname이 **정확히 일치**하는 것만 반환",
            "created_at 내림차순 정렬 권장",
            "`reply_count`·`latest_reply` 집계 포함, **replies[] 없음**",
          ],
        },
        { type: "subheading", text: "목록 집계 SQL 예시 (PostgreSQL)" },
        { type: "codeSnippet", snippet: "listAggregationSql", language: "sql" },
        { type: "subheading", text: "GET — 전체 목록 (onListAll, 선택)", id: "ba-endpoint-on-list-all" },
        {
          type: "paragraph",
          text: "**DB:** `comments` + `replies` 집계 (onList와 동일), pathname 필터 없음 + cursor 페이지네이션",
        },
        { type: "codeSnippet", snippet: "getListAll", language: "http" },
        { type: "codeSnippet", snippet: "getListAllResponse", language: "json" },
        {
          type: "paragraph",
          text: "마지막 페이지면 `nextCursor`를 생략하거나 null로 주면 됩니다. 프론트에 onListAll을 안 연결하면 이 API는 필요 없습니다.",
        },
        { type: "subheading", text: "GET — 스레드 (onListReplies)", id: "ba-endpoint-on-list-replies" },
        {
          type: "paragraph",
          text: "**DB:** `replies` WHERE `comment_id` = :id, ORDER BY `created_at` ASC",
        },
        {
          type: "paragraph",
          text: "마커나 목록에서 스레드를 열 때 호출됩니다. comment가 없으면 404.",
        },
        { type: "codeSnippet", snippet: "getReplies", language: "http" },
        { type: "codeSnippet", snippet: "getRepliesResponse", language: "json" },
        {
          type: "list",
          items: [
            "해당 comment의 replies만, created_at 오름차순",
            "각 Reply에 **case_ids** 포함",
          ],
        },
        { type: "subheading", text: "POST — 피드백 생성 (onCreate)", id: "ba-endpoint-on-create" },
        {
          type: "paragraph",
          text: "**DB:** `comments` INSERT (`cases` JSONB 포함, `id`·`created_at` 서버 생성)",
        },
        { type: "codeSnippet", snippet: "postCreate", language: "http" },
        { type: "codeSnippet", snippet: "createBody", language: "json" },
        { type: "codeSnippet", snippet: "createResponse", language: "json" },
        {
          type: "list",
          items: [
            "comment `id`는 서버가 생성, `cases[].id`는 클라이언트가 보냄",
            "cases는 1개 이상, 각 text는 공백만 불가",
            "응답 201: `reply_count: 0`, `latest_reply: null`",
          ],
        },
        { type: "subheading", text: "POST — 답변 생성 (onCreateReply)", id: "ba-endpoint-on-create-reply" },
        {
          type: "paragraph",
          text: "**DB:** `replies` INSERT (`case_ids` JSONB 포함)",
        },
        { type: "codeSnippet", snippet: "postCreateReply", language: "http" },
        { type: "codeSnippet", snippet: "createReplyBody", language: "json" },
        {
          type: "list",
          items: [
            "replies 테이블에 INSERT",
            "`case_ids`는 해당 comment의 cases[].id 중 하나 이상",
            "GitHub Issue 알림 등은 `author_type: system`으로 같은 API 사용",
          ],
        },
        { type: "subheading", text: "PATCH — 피드백 수정 (onUpdate)", id: "ba-endpoint-on-update" },
        {
          type: "paragraph",
          text: "**DB:** `comments` UPDATE (`cases`, `status`, `field_values`, `integrations` 등 partial merge)",
        },
        {
          type: "paragraph",
          text: "변경할 필드만 보내면 됩니다(partial update). **v2에서는 replies 필드를 받지 않습니다.**",
        },
        { type: "codeSnippet", snippet: "patchUpdate", language: "http" },
        { type: "codeSnippet", snippet: "patchBody", language: "json" },
        { type: "subheading", text: "커스텀 필드 수정 예시" },
        { type: "codeSnippet", snippet: "patchFieldValues", language: "json" },
        { type: "subheading", text: "GitHub Issue 연동 예시" },
        { type: "codeSnippet", snippet: "patchGithub", language: "json" },
        {
          type: "table",
          headers: ["PATCH 허용 필드", "설명"],
          rows: [
            ["cases", "케이스 배열 전체 교체"],
            ["status", "피드백 상태"],
            ["field_values", "커스텀 필드"],
            ["integrations", "GitHub 등 연동 정보"],
            ["report_id / report_type", "대상 요소 변경 (드묾)"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "`position`은 생성 후 PATCH로 보내지 않습니다. 위치 변경 UI가 없습니다.\nv1 fallback: onCreateReply가 없으면 프론트가 replies 배열을 PATCH로 보낼 수 있습니다. v2 API는 무시하거나 400을 반환해도 됩니다.",
        },
        { type: "subheading", text: "DELETE — 피드백 삭제 (onDelete, 선택)", id: "ba-endpoint-on-delete" },
        {
          type: "paragraph",
          text: "**DB:** `comments` DELETE (replies는 CASCADE 권장)",
        },
        { type: "codeSnippet", snippet: "deleteEndpoint", language: "http" },
        {
          type: "paragraph",
          text: "응답 204 No Content. replies는 FK ON DELETE CASCADE 권장.",
        },
      ],
    },
    {
      id: "ba-team-api",
      title: "팀 / 리뷰어 API (선택)",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "피드백 CRUD와 **별개**입니다. fivepixels는 `team.reviewers`를 **prop으로만** 받습니다. API가 없으면 프론트 코드에 하드코딩하거나, 드롭다운 대신 자유 입력으로 fallback합니다.",
        },
        { type: "subheading", text: "역할 구분" },
        {
          type: "table",
          headers: ["데이터", "어디서", "저장"],
          rows: [
            ["team.reviewers", "GET /members → prop", "저장 안 함 (선택지)"],
            ["team.user", "로그인 세션", "저장 안 함 (현재 사용자)"],
            ["cases[].assignee_name", "답변·검수 결과", "comments.cases JSON에 저장"],
          ],
        },
        {
          type: "paragraph",
          text: "`reviewers`는 드롭다운 **후보**, `assignee_name`은 실제 **배정 결과**입니다. FK로 연결할 필요 없이 문자열로 저장하면 됩니다.",
        },
        { type: "subheading", text: "Member 형태" },
        { type: "codeSnippet", snippet: "member", language: "json" },
        {
          type: "list",
          items: [
            "`publicKey` — 서명 검증(`requireReviewerKey`)을 쓸 때만 필요",
            "reviewers가 빈 배열이면 자유 텍스트 입력으로 fallback",
          ],
        },
        { type: "subheading", text: "GET — 리뷰어 목록", id: "ba-endpoint-members" },
        {
          type: "paragraph",
          text: "**DB:** `project_members` (또는 팀 DB) SELECT — 피드백 테이블과 FK 연결 불필요",
        },
        { type: "codeSnippet", snippet: "getMembers", language: "http" },
        { type: "codeSnippet", snippet: "getMembersResponse", language: "json" },
        { type: "subheading", text: "프론트 연동 예시" },
        { type: "codeSnippet", snippet: "teamIntegration", language: "tsx" },
      ],
    },
    {
      id: "ba-errors-auth",
      title: "에러 · 인증",
      variant: "reference",
      blocks: [
        { type: "subheading", text: "에러 응답" },
        {
          type: "paragraph",
          text: "HTTP 에러 시 라이브러리가 일반적인 실패 메시지를 보여줍니다. body 형식은 팀 표준을 따르면 됩니다.",
        },
        {
          type: "table",
          headers: ["코드", "상황"],
          rows: [
            ["400", "JSON 오류·필수 필드 누락"],
            ["404", "comment/reply id 없음"],
            ["409", "(선택) 동시 수정 충돌"],
            ["500", "서버 오류"],
          ],
        },
        { type: "subheading", text: "인증·서명 (선택)" },
        {
          type: "paragraph",
          text: "`requireReviewerKey`를 쓰면 create/update/reply body에 `auth`가 붙을 수 있습니다.",
        },
        { type: "codeSnippet", snippet: "authPayload", language: "json" },
        {
          type: "table",
          headers: ["action", "시점"],
          rows: [
            ["feedback:create", "피드백 생성"],
            ["feedback:update", "피드백 수정"],
            ["reply:create", "답변 생성"],
          ],
        },
        {
          type: "paragraph",
          text: "팀 키 기능을 안 쓰면 auth 검증은 생략해도 됩니다.",
        },
      ],
    },
    {
      id: "ba-integration",
      title: "프론트 연동 · 호출 흐름",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "백엔드가 준비되면 아래처럼 handler와 team prop을 연결합니다.",
        },
        { type: "codeSnippet", snippet: "frontendIntegration", language: "tsx" },
        { type: "subheading", text: "호출 흐름 요약" },
        { type: "codeSnippet", snippet: "callFlow", language: "text" },
      ],
    },
    {
      id: "ba-db-checklist",
      title: "DB · 체크리스트",
      variant: "reference",
      blocks: [
        { type: "subheading", text: "권장 스키마 (2테이블)" },
        { type: "codeSnippet", snippet: "dbSchema", language: "sql" },
        {
          type: "paragraph",
          text: "인덱스 권장: `(project_id, environment, pathname, created_at DESC)`, `(comment_id, created_at ASC)`",
        },
        { type: "subheading", text: "백엔드가 하지 않아도 되는 것" },
        {
          type: "list",
          items: [
            "키워드·상태 필터 API",
            "replies 배열 embed / PATCH 덮어쓰기 (v2 기준)",
            "실시간 push / WebSocket",
            "position 개별 업데이트",
            "최상위 message 필드 (레거시, cases[] 사용)",
          ],
        },
        { type: "subheading", text: "구현 전 체크리스트" },
        {
          type: "list",
          items: [
            "GET /comments — pathname 필터, CommentSummary[] (replies[] 없음, cases[] 포함)",
            "GET /comments/{id}/replies — Reply[], case_ids 포함, created_at ASC",
            "POST /comments — cases[] 1개 이상, id/created_at 서버 생성",
            "POST /comments/{id}/replies — reply 단건 INSERT, case_ids 저장",
            "PATCH /comments/{id} — partial merge, replies 필드 미수신",
            "position camelCase (scrollY, reportId), 나머지 snake_case",
            "(선택) DELETE, listAll + cursor, projectId/environment 격리",
            "(선택, 권장) GET /members → team.reviewers",
          ],
        },
      ],
    },
  ],
}
