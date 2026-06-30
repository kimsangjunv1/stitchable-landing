import type { GuideMessages } from "../types"

export const backendApiGuideKo: GuideMessages = {
  title: "Backend API",
  description:
    "self-host 참고 구현(v2)입니다. fivepixels 호스팅을 쓰면 백엔드를 직접 만들 필요가 없습니다.",
  hero: {
    eyebrow: "SELF-HOST REFERENCE · V2",
    title: "백엔드 API 가이드",
    description:
      "`@fivepixels-js/react`와 연동하기 위해 백엔드에서 구현할 REST API·데이터 모델·DB 스키마를 정리했습니다. v2는 **comments + replies 2리소스**로 분리하고, 목록은 요약만, 스레드는 클릭 시 lazy load합니다.",
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
    { label: "API", sectionIds: ["ba-endpoints", "ba-errors-auth"] },
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
          text: "이 문서는 **self-host 참고 구현(v2)** 입니다.\n라이브러리가 요구하는 것은 REST가 아니라 handler **반환 형태**입니다.\nv2는 `onListReplies`·`onCreateReply` handler 확장이 함께 필요합니다.\nfivepixels 호스팅(준비 중)을 쓰면 아래 API를 직접 구현하지 않아도 됩니다.",
        },
        {
          type: "link",
          href: "/fivepixels/guide#persistence-choice",
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
          text: "프론트는 `<FivePixels />`에 handler를 연결하고, 각 handler가 아래 API를 호출합니다. 필수 handler는 **함께** 구현해야 하며, `onDelete`·`onListAll`은 선택입니다.",
        },
        {
          type: "table",
          headers: ["우선순위", "프론트 handler", "권장 REST", "용도"],
          rows: [
            ["필수", "onList", "GET /comments?pathname={pathname}", "현재 페이지 피드백 **요약** 목록"],
            ["필수", "onListReplies", "GET /comments/{id}/replies", "스레드 — 마커 클릭 시"],
            ["필수", "onCreate", "POST /comments", "피드백 생성"],
            ["필수", "onCreateReply", "POST /comments/{id}/replies", "답변 단건 생성"],
            ["필수", "onUpdate", "PATCH /comments/{id}", "본문·상태·연동 정보 수정"],
            ["선택", "onDelete", "DELETE /comments/{id}", "피드백 삭제"],
            ["선택", "onListAll", "GET /comments?cursor=&limit=100", "전체 페이지 요약 목록"],
          ],
        },
        { type: "subheading", text: "v2 동작 특성" },
        {
          type: "list",
          items: [
            "**폴링·WebSocket 없음** — 사용자 액션·페이지 이동 시에만 API 호출",
            "**목록 필터링은 프론트에서 처리** — 키워드·상태 필터 API 불필요",
            "**목록에 replies[] 없음** — `reply_count` + `latest_reply` 요약만 포함",
            "**마커 +N·hover** — onList 응답의 요약 필드에서 파생",
            "**스레드 열기** — 마커 클릭 시 onListReplies(commentId) 호출",
            "**답변 추가** — onCreateReply 단건 POST (replies 배열 PATCH 없음)",
          ],
        },
        { type: "subheading", text: "v1 대비 차이" },
        {
          type: "table",
          headers: ["", "v1 (레거시)", "v2 (권장)"],
          rows: [
            ["목록", "ReportFeedback[] + replies[] 전체", "CommentSummary[] + reply_count, latest_reply"],
            ["스레드", "목록에 포함", "GET /comments/{id}/replies"],
            ["답변 추가", "PATCH + replies 배열 통째로", "POST /comments/{id}/replies"],
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
          text: "프론트는 `<FivePixels project={{ id, env, version }} />`로 프로젝트를 구분합니다.",
        },
        {
          type: "table",
          headers: ["프론트 prop", "저장 필드명", "설명"],
          rows: [
            ["project.id", "(API에서 별도 관리 권장)", "앱/프로젝트 식별자. 기본값 my-app"],
            ["project.env", "environment", "환경 (stage, production 등)"],
            ["project.version", "app_version", "배포 버전"],
          ],
        },
        {
          type: "paragraph",
          text: "API 경로 또는 쿼리로 `projectId`, `environment`를 받아 데이터를 격리하는 것을 권장합니다.",
        },
        { type: "codeSnippet", snippet: "projectScope", language: "http" },
        {
          type: "paragraph",
          text: "create 시 payload에 `environment`, `app_version`이 포함될 수 있습니다. 이 값을 그대로 저장하면 됩니다.",
        },
      ],
    },
    {
      id: "ba-data-model",
      title: "공통 데이터 모델",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "리소스는 **Comment**(피드백)와 **Reply**(답변)로 분리합니다. 목록 API는 `CommentSummary`를, 스레드 API는 `Reply[]`를 반환합니다.",
        },
        { type: "subheading", text: "Comment (피드백 본체)" },
        { type: "codeSnippet", snippet: "comment", language: "json" },
        { type: "subheading", text: "CommentSummary (목록 응답)" },
        {
          type: "paragraph",
          text: "onList / onListAll이 반환하는 형태입니다. **replies[]는 포함하지 않습니다.**",
        },
        { type: "codeSnippet", snippet: "commentSummary", language: "json" },
        { type: "subheading", text: "Comment 필드 설명" },
        {
          type: "table",
          headers: ["필드", "타입", "필수", "설명"],
          rows: [
            ["id", "string", "응답 시", "서버가 생성하는 UUID 등 고유 ID"],
            ["pathname", "string", "✅", "피드백이 남겨진 SPA 경로"],
            ["report_id", "string", "✅", "DOM data-report-id 값"],
            ["report_type", "group | item", "✅", "DOM data-report-type. 기본값 item"],
            ["message", "string", "✅", "피드백 본문"],
            ["status", "string", "✅", "open | git_issued | resolved | archived"],
            ["field_values", "object", "✅", "커스텀 필드 값 (string | boolean)"],
            ["position", "object", "✅", "클릭 위치·뷰포트 정보"],
            ["created_at", "string", "응답 시", "ISO 8601 날짜"],
            ["reply_count", "number", "목록 시", "답변 개수"],
            ["latest_reply", "object | null", "목록 시", "최신 답변 요약"],
            ["integrations", "object", "", "GitHub Issue 연동 정보"],
          ],
        },
        { type: "subheading", text: "position 객체" },
        {
          type: "paragraph",
          text: "마커 위치 복원에 사용됩니다. **JSON 키는 camelCase**입니다. 백엔드는 JSON 컬럼 하나로 저장해도 됩니다.",
        },
        { type: "codeSnippet", snippet: "position", language: "json" },
        {
          type: "table",
          headers: ["필드", "타입", "설명"],
          rows: [
            ["target", "{ x, y } | null", "클릭한 DOM 요소 내부 비율 (0~1)"],
            ["viewport", "{ x, y, width, height }", "뷰포트 기준 클릭 비율·창 크기"],
            ["scrollY", "number", "생성 시점 window.scrollY"],
            ["anchor", "object | null", "모달/오버레이 등 상위 앵커 기준 위치"],
          ],
        },
        { type: "subheading", text: "anchor 예시" },
        { type: "codeSnippet", snippet: "anchor", language: "json" },
        { type: "subheading", text: "Reply (답변)" },
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
      ],
    },
    {
      id: "ba-endpoints",
      title: "API 엔드포인트",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "아래 경로는 예시입니다. 팀 컨벤션에 맞게 바꿔도 되지만, **요청/응답 JSON 형태는 유지**해야 합니다.",
        },
        { type: "subheading", text: "GET — 현재 페이지 목록 (onList)" },
        {
          type: "paragraph",
          text: "호출 시점: 페이지 진입·pathname 변경·create/update/delete 후 재조회",
        },
        { type: "codeSnippet", snippet: "getList", language: "http" },
        { type: "codeSnippet", snippet: "getListResponse", language: "json" },
        {
          type: "list",
          items: [
            "pathname이 정확히 일치하는 항목만 반환",
            "created_at 내림차순 정렬 권장",
            "reply_count·latest_reply 집계 포함, **replies[] 없음**",
          ],
        },
        { type: "subheading", text: "GET — 전체 목록 (onListAll, 선택)" },
        { type: "codeSnippet", snippet: "getListAll", language: "http" },
        { type: "codeSnippet", snippet: "getListAllResponse", language: "json" },
        {
          type: "paragraph",
          text: "마지막 페이지면 nextCursor를 생략하거나 null로 반환합니다. onListAll을 프론트에 연결하지 않으면 불필요합니다.",
        },
        { type: "subheading", text: "GET — 스레드 (onListReplies)" },
        {
          type: "paragraph",
          text: "호출 시점: 마커 클릭, 목록에서 스레드 열기",
        },
        { type: "codeSnippet", snippet: "getReplies", language: "http" },
        { type: "codeSnippet", snippet: "getRepliesResponse", language: "json" },
        {
          type: "list",
          items: [
            "WHERE comment_id = :id ORDER BY created_at ASC",
            "해당 comment의 replies만 로드 (lazy load)",
          ],
        },
        { type: "subheading", text: "POST — 피드백 생성 (onCreate)" },
        { type: "codeSnippet", snippet: "postCreate", language: "http" },
        { type: "codeSnippet", snippet: "createBody", language: "json" },
        {
          type: "list",
          items: [
            "응답 201: reply_count: 0, latest_reply: null 포함 CommentSummary",
            "id는 서버에서 생성",
          ],
        },
        { type: "subheading", text: "POST — 답변 생성 (onCreateReply)" },
        { type: "codeSnippet", snippet: "postCreateReply", language: "http" },
        { type: "codeSnippet", snippet: "createReplyBody", language: "json" },
        {
          type: "list",
          items: [
            "replies 테이블에 INSERT",
            "시스템 메시지는 author_type: system으로 동일 API 사용",
            "성공 후 onListReplies 재호출 또는 onList 재조회",
          ],
        },
        { type: "subheading", text: "PATCH — 피드백 수정 (onUpdate)" },
        { type: "codeSnippet", snippet: "patchUpdate", language: "http" },
        { type: "codeSnippet", snippet: "patchBody", language: "json" },
        {
          type: "paragraph",
          text: "**replies 필드는 받지 않습니다.** GitHub Issue 연동 예시:",
        },
        { type: "codeSnippet", snippet: "patchGithub", language: "json" },
        {
          type: "list",
          items: [
            "시스템 reply가 필요하면 POST /comments/{id}/replies 사용",
            "position은 create 이후 PATCH로 보내지 않음",
            "응답 200: merge된 CommentSummary",
          ],
        },
        { type: "subheading", text: "DELETE — 피드백 삭제 (onDelete, 선택)" },
        { type: "codeSnippet", snippet: "deleteEndpoint", language: "http" },
        {
          type: "paragraph",
          text: "응답 204 No Content. replies는 FK ON DELETE CASCADE 권장.",
        },
      ],
    },
    {
      id: "ba-errors-auth",
      title: "에러 응답 · 인증",
      variant: "reference",
      blocks: [
        { type: "subheading", text: "에러 응답" },
        {
          type: "paragraph",
          text: "라이브러리는 HTTP 에러 시 일반적인 실패 메시지를 표시합니다. 응답 body 형식은 팀 표준을 따르면 됩니다.",
        },
        {
          type: "table",
          headers: ["상태 코드", "상황"],
          rows: [
            ["400", "잘못된 JSON·필수 필드 누락"],
            ["404", "comment/reply id 없음"],
            ["409", "(선택) 동시 수정 충돌"],
            ["500", "서버 오류"],
          ],
        },
        { type: "subheading", text: "인증·서명 (선택)" },
        {
          type: "paragraph",
          text: "`team={{ reviewers: [{ publicKey }], requireReviewerKey }}`를 사용하는 경우, create/update payload에 auth가 붙을 수 있습니다.",
        },
        { type: "codeSnippet", snippet: "authPayload", language: "json" },
        {
          type: "table",
          headers: ["action", "시점"],
          rows: [
            ["feedback:create", "피드백 생성"],
            ["feedback:update", "피드백 수정·상태 변경"],
            ["reply:create", "답변 생성 (v2)"],
          ],
        },
        {
          type: "paragraph",
          text: "팀 키 기능을 쓰지 않으면 auth 검증은 생략해도 됩니다.",
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
          text: "백엔드 API가 준비되면 프론트는 아래처럼 연결합니다.",
        },
        { type: "codeSnippet", snippet: "frontendIntegration", language: "tsx" },
        { type: "subheading", text: "호출 흐름 요약" },
        { type: "codeSnippet", snippet: "callFlow", language: "text" },
      ],
    },
    {
      id: "ba-db-checklist",
      title: "DB 설계 · 체크리스트",
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
            "키워드·상태·타입 필터 API",
            "replies 배열 embed / PATCH 덮어쓰기 (v1 방식)",
            "실시간 push / WebSocket",
            "position 필드 개별 업데이트",
          ],
        },
        { type: "subheading", text: "구현 완료 전 체크리스트" },
        {
          type: "list",
          items: [
            "GET /comments — pathname 필터, CommentSummary[] 반환 (replies[] 없음)",
            "GET /comments/{id}/replies — Reply[] 반환, created_at ASC",
            "POST /comments — id/created_at 서버 생성, reply_count: 0",
            "POST /comments/{id}/replies — reply 단건 INSERT",
            "PATCH /comments/{id} — partial merge, replies 필드 미수신",
            "position camelCase 키 유지 (scrollY, reportId 등)",
            "나머지 필드 snake_case 유지 (report_id, created_at, comment_id 등)",
            "(선택) DELETE /comments/{id}, replies CASCADE",
            "(선택) GET /comments listAll + cursor 페이지네이션",
            "(선택) projectId / environment 스코프 격리",
          ],
        },
      ],
    },
  ],
}
