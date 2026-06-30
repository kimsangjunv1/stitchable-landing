import type { GuideMessages } from "./types"

export const guideKo: GuideMessages = {
  title: "가이드",
  description:
    "fivepixels을 설치하고, UI에 붙이고, 첫 피드백을 남기는 방법을 단계별로 안내합니다.",
  hero: {
    eyebrow: "QUICK START",
    title: "3분 안에 QA 도구 붙이기",
    description:
      "npm 설치 → `<FivePixels />` 마운트 → `data-report-id` 마킹. 세 단계면 스테이징 화면에서 바로 피드백을 남길 수 있습니다.",
    cta: "시작하기",
  },
  navHome: "홈",
  codeCopy: "복사",
  codeCopied: "복사되었습니다",
  onThisPage: "이 페이지에서",
  referenceDivider: "더 알아보기",
  navGroups: [
    { label: "Quick Start", sectionIds: ["install", "quick-start", "mark-elements", "first-feedback"] },
    { label: "개요", sectionIds: ["getting-started", "ui-modes"] },
    { label: "설정", sectionIds: ["full-example", "config", "keyboard-shortcuts"] },
    { label: "아키텍처", sectionIds: ["ui-architecture", "styling"] },
    { label: "저장 · 협업", sectionIds: ["persistence-choice", "persistence-local", "persistence-team", "persistence-backend", "github", "feedback-workflow", "data-contract", "migration"] },
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
          text: "React 18+ 프로젝트에 패키지를 설치합니다.",
        },
        { type: "code", snippet: "install", language: "bash" },
        {
          type: "callout",
          variant: "info",
          text: "Next.js 등 SSR 환경에서는 `<FivePixels />`를\n클라이언트에서만 렌더링하세요 (\"use client\" + dynamic import).",
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
          text: "피드백을 받을 화면에 `<FivePixels />`를 **한 번만** 렌더링하세요. CSS import는 필요 없습니다.",
        },
        { type: "code", snippet: "quickStart", language: "tsx" },
        {
          type: "list",
          items: [
            "`project.id`를 생략하면 기본값 \"my-app\"입니다. stage/production·멀티 앱에서는 `project={{ id }}`를 명시하는 것을 권장합니다.",
            "Shadow Root 안에서 UI가 자동으로 마운트됩니다 — 별도 스타일시트 import가 필요 없습니다.",
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
          text: "피드백 대상 요소에 `data-report-id`를 붙이세요. 화면이 바뀌어도 같은 id로 마커 위치를 복원합니다.",
        },
        { type: "code", snippet: "markElements", language: "tsx" },
        {
          type: "list",
          items: [
            "`data-report-type`을 생략하면 `item`(버튼·링크 등 개별 요소)입니다.",
            "섹션·카드 단위로 묶으려면 `data-report-type=\"group\"`을 사용하세요.",
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
          text: "설치가 끝났다면 바로 피드백을 남겨 보세요. 패널에서 **피드백 추가**를 누르거나 단축키를 사용합니다.",
        },
        {
          type: "table",
          headers: ["동작", "Mac", "Windows / Linux"],
          rows: [
            ["피드백 남기기", "⌘⇧M", "Ctrl+Shift+M"],
            ["피드백 보기", "⌘⇧L", "Ctrl+Shift+L"],
            ["요소 미리보기", "⌘⇧E", "Ctrl+Shift+E"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "report 모드에서 화면 요소를 클릭하면 피드백 작성 UI가 열립니다.\nview 모드(⌘⇧L)에서는 마커·목록을 조회할 수 있습니다.",
        },
      ],
    },
    {
      id: "getting-started",
      title: "fivepixels란?",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "fivepixels은 실제 DOM 요소에 피드백을 남기고, UI 변경 후에도 마커를 복원하며, 필요하면 GitHub Issue로 승격할 수 있게 해 줍니다.",
        },
        {
          type: "list",
          items: [
            "data-report-id — 화면이 바뀌어도 querySelector로 같은 요소를 찾아 마커 위치를 복원합니다.",
            "Shadow Root UI — 호스트 앱 CSS와 분리된 패널·오버레이·마커입니다.",
            "localStorage 또는 서버 — handler를 생략하면 브라우저에 저장하고, onList/onCreate/onUpdate로 API와 연동할 수 있습니다.",
          ],
        },
      ],
    },
    {
      id: "ui-modes",
      title: "UI 모드",
      variant: "reference",
      blocks: [
        {
          type: "table",
          headers: ["모드", "진입", "하는 일"],
          rows: [
            ["idle", "기본", "패널에서 Report / View / 요소 미리보기를 선택합니다"],
            ["report", "피드백 추가 · ⌘⇧M", "화면 요소를 클릭해 피드백을 작성합니다"],
            ["view", "피드백 보기 · ⌘⇧L", "마커·목록 조회, 답변·검수, Git Issue 승격을 할 수 있습니다"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "답변·검수(denied / confirm / checkout) 상세는\n아래 Feedback Workflow를 참고하세요.",
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
          text: "project, ui, visibility, team, fields, persistence handler, side effect, GitHub를 한 번에 연결하는 예시입니다. localStorage만 쓸 때는 handler를 생략하면 됩니다.",
        },
        {
          type: "callout",
          variant: "info",
          text: "visibility.devOnly는 production 빌드에서 UI를 숨깁니다.\n스테이징 전용 QA에 적합합니다.",
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
          text: "FivePixels UI는 open Shadow Root(#fivepixels-root)에 렌더링되어\n호스트 앱 스타일과 격리됩니다.",
        },
        { type: "code", snippet: "shadowDiagram", language: "text" },
        {
          type: "list",
          items: [
            "피드백 대상 탐색은 메인 document의 querySelector / elementFromPoint를 사용합니다.",
            "호스트 페이지 Shadow DOM 내부 요소는 기본 피드백 대상이 아닙니다.",
            "appearance light | dark | system은 Shadow Root 내부 data-fivepixels-theme으로 반영됩니다.",
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
          text: "기본 UI는 Tailwind utility class로 구성됩니다.\nnpm 패키지 사용자는 CSS 파일을 import하지 않아도 됩니다.",
        },
        {
          type: "table",
          headers: ["목적", "경로"],
          rows: [
            ["피드백 작성·타임라인 UI", "src/components/panel/feedback/*.tsx"],
            ["컴포넌트 레이아웃/색상", "src/components/**/*.tsx className"],
            ["Tailwind theme", "src/styles/tailwind.css"],
            ["Shadow Root CSS 번들", "src/styles/reportStylesheet.ts (빌드 생성)"],
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
          headers: ["이름", "설명"],
          rows: [
            ["project", "{ id?, env?, version? } — id를 생략하면 my-app입니다"],
            ["ui", "{ appearance?, showFeedbackList?, visibleShortcutKeys?, locale?, messages? }"],
            ["visibility", "{ enabled?, devOnly?, routeKey? }"],
            ["team", "{ user?, reviewers? } — 작성자 기본값·reviewer 목록"],
            ["fields", "피드백 작성 폼 필드 (textarea, checkbox 태그)"],
            ["onList / onCreate / onUpdate / onDelete", "서버 persistence handler"],
            ["onEvent / onReply", "저장 후 side effect (analytics, Slack)"],
            ["github", "GitHub Issue 승격 — enabled, modes, onCreate"],
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
          headers: ["동작", "Mac", "Windows / Linux"],
          rows: [
            ["피드백 남기기 / 선택 중단", "⌘⇧M", "Ctrl+Shift+M"],
            ["선택 가능한 요소 미리보기", "⌘⇧E", "Ctrl+Shift+E"],
            ["피드백 보기 / 목록 닫기", "⌘⇧L", "Ctrl+Shift+L"],
            ["검색 포커스 (목록 열림)", "⌘⇧S", "Ctrl+Shift+S"],
            ["목록 항목 이동", "↑ / ↓", "↑ / ↓"],
            ["드래프트 취소 / 편집 닫기 / 모드 종료", "Esc", "Esc"],
            ["드래프트 저장 / 수정 저장", "⌘↩", "Ctrl+Enter"],
          ],
        },
        { type: "code", snippet: "shortcuts", language: "tsx" },
      ],
    },
    {
      id: "persistence-choice",
      title: "어떤 저장 방식을 쓸까?",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "fivepixels는 handler를 넘기지 않으면 localStorage를 쓰고, onList/onCreate/onUpdate를 연결하면 서버 저장소를 씁니다. 아래 표로 시작 지점을 고르세요.",
        },
        {
          type: "table",
          headers: ["상황", "추천 경로", "섹션"],
          rows: [
            ["혼자 빠르게 써보기", "localStorage", "localStorage로 시작하기"],
            ["팀이 스테이징에서 같이 봄", "서버 또는 호스팅", "팀에서 쓰기"],
            ["우리 서버에 직접 저장", "자체 백엔드", "백엔드 직접 구축"],
          ],
        },
      ],
    },
    {
      id: "persistence-local",
      title: "localStorage로 시작하기",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "handler props를 넘기지 않으면 브라우저 localStorage를 사용합니다.\n키는 project.id와 project.env로 분리됩니다.",
        },
        { type: "code", snippet: "localStorage", language: "tsx" },
        { type: "subheading", text: "Data transfer (localStorage 전용)" },
        {
          type: "table",
          headers: ["기능", "설명"],
          rows: [
            ["Import", "JSON 파일·드래그앤드롭으로 일괄 가져올 수 있습니다"],
            ["Export", "현재 scope 피드백을 JSON으로 보낼 수 있습니다"],
            ["Command", "JSON paste로 replace·merge를 할 수 있습니다 (충돌 시 확인)"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "localStorage는 브라우저·기기마다 데이터가 다릅니다.\n팀 공유·스테이징 전달에는 서버 저장이 필요합니다.",
        },
      ],
    },
    {
      id: "persistence-team",
      title: "팀에서 쓰기",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "QA·PM·디자이너가 **같은 스테이징 화면**에서 피드백을 주고받으려면 공통 저장소가 필요합니다. localStorage만으로는 브라우저마다 데이터가 갈라집니다.",
        },
        {
          type: "list",
          items: [
            "프로젝트·환경(stage/production)별 데이터 분리",
            "여러 사람이 같은 피드백 목록·마커를 봄",
            "답변·검수 워크플로우를 팀 단위로 공유",
          ],
        },
        { type: "subheading", text: "선택지" },
        {
          type: "list",
          items: [
            "**fivepixels 호스팅** (준비 중) — API key 한 줄로 연동, 백엔드 구현 불필요",
            "**자체 백엔드** — v2 handler(onList, onListReplies, onCreate, onCreateReply, onUpdate)로 우리 서버에 저장",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "서버 연동 시 필수 handler는 **반드시 함께** 구현해야 합니다. v2는 replies lazy load를 위해 onListReplies·onCreateReply가 추가됩니다.",
        },
        {
          type: "link",
          href: "/fivepixels/guide/backend-api",
          label: "백엔드 직접 구축 가이드 보기",
        },
      ],
    },
    {
      id: "persistence-backend",
      title: "백엔드 직접 구축",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "프론트는 handler를 통해 백엔드와 통신합니다. REST 경로는 팀 컨벤션에 맞게 바꿔도 되지만, **요청/응답 JSON 형태**는 data contract를 따라야 합니다.",
        },
        {
          type: "table",
          headers: ["우선순위", "handler", "권장 REST", "용도"],
          rows: [
            ["필수", "onList", "GET /comments?pathname={pathname}", "현재 페이지 피드백 요약 목록"],
            ["필수", "onListReplies", "GET /comments/{id}/replies", "스레드 — 마커 클릭 시"],
            ["필수", "onCreate", "POST /comments", "피드백 생성"],
            ["필수", "onCreateReply", "POST /comments/{id}/replies", "답변 단건 생성"],
            ["필수", "onUpdate", "PATCH /comments/{id}", "본문·상태·연동 정보 수정"],
            ["선택", "onDelete", "DELETE /comments/{id}", "피드백 삭제"],
            ["선택", "onListAll", "GET /comments?cursor=&limit=100", "전체 페이지 요약 목록"],
          ],
        },
        { type: "code", snippet: "serverHandlers", language: "tsx" },
        {
          type: "list",
          items: [
            "목록(onList)은 reply_count·latest_reply 요약만 반환합니다 — replies[] 없음.",
            "마커 클릭 시 onListReplies(commentId)로 스레드를 lazy load합니다.",
            "답변은 onCreateReply 단건 POST로 저장합니다.",
            "UI 삭제가 필요하면 onDelete도 구현하세요.",
          ],
        },
        {
          type: "link",
          href: "/fivepixels/guide/backend-api",
          label: "Backend API 가이드 — REST 상세·DB 스키마·체크리스트",
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
          text: "피드백을 로컬에 쌓았다가 필요할 때 GitHub Issue로 승격할 수 있습니다.\nGitHub API는 앱 서버에서 처리하는 것을 권장합니다 (github.onCreate).",
        },
        {
          type: "table",
          headers: ["필드", "설명"],
          rows: [
            ["enabled", "false면 Git Issue 버튼을 숨깁니다"],
            ["modes", "\"on-create\" (작성 시) 및/또는 \"from-list\" (목록)"],
            ["onCreate", "{ issueNumber, issueUrl }를 반환하는 서버 콜백"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "전송 후 피드백 status가 git_issued로 바뀌고,\n이슈 링크가 포함된 시스템 reply가 추가됩니다.",
        },
      ],
    },
    {
      id: "feedback-workflow",
      title: "Feedback Workflow (view 모드)",
      variant: "reference",
      blocks: [
        {
          type: "paragraph",
          text: "view 모드(⌘⇧L)에서 마커(item 빨간 점 · group 보라 점)를 기준으로\n아래 흐름이 동작합니다.",
        },
        {
          type: "ordered",
          items: [
            "작성 — 요소 선택, 메시지, 작성자, checkbox 태그.",
            "마커 배지 — reply_count ≥ 1이면 +N을 표시합니다.",
            "hover — 상태 배지, 메시지, 작성자, 태그·최근 답변을 미리볼 수 있습니다.",
            "클릭 — onListReplies로 스레드를 불러온 뒤 답변 입력 UI(태그 없음)를 엽니다.",
            "첫 답변 — suggested 항목을 추가하고, denied / confirm / select를 표시합니다.",
            "denied — composer를 연 뒤 found_error 답변을 추가합니다.",
            "checkout — 최근 found_error에만 표시되고, suggested 재답변을 할 수 있습니다.",
            "confirm — resolved 답변을 추가하고, 피드백 status를 resolved로 바꿉니다.",
          ],
        },
        {
          type: "table",
          headers: ["값", "UI 라벨", "의미"],
          rows: [
            ["suggested", "SUGGESTED", "수정·제안 답변"],
            ["found_error", "FOUND ERROR", "검수 거절(재확인 요청)"],
            ["resolved", "RESOLVED", "검수 완료(이슈 해결)"],
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
            "ReportField 기본 타입: textarea, checkbox.",
            "field_values: Record<string, string | boolean>.",
            "Reply는 replies 테이블에 시간순 저장, 최신 답변은 마지막 항목입니다.",
            "피드백 status: open → git_issued → resolved → archived.",
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
            "flat projectId/environment/appVersion 대신 project={{ id, env, version }}를 사용합니다.",
            "flat prop 대신 project, ui, visibility 객체를 사용합니다.",
            "workspace 개념은 project.id로 교체합니다.",
            "storageAdapter는 제거되었습니다 — onList/onCreate/onUpdate/onDelete를 사용합니다.",
            "analytics·알림은 onEvent/onReply를 사용합니다.",
            "localStorage 키: fivepixels:reports:v1:{projectId} 또는 :{environment} 접미사.",
          ],
        },
      ],
    },
  ],
}
