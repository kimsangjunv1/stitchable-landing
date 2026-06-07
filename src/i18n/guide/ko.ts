import type { GuideMessages } from "./types"

export const guideKo: GuideMessages = {
  title: "시작하기",
  description:
    "Stitchable은 스테이징·QA·내부 도구 화면 위에 DOM 요소 단위 피드백을 남기는 React 라이브러리입니다.\nUI가 바뀌어도 마커를 복원하고, `스크린샷` 없이도 이슈를 검토할 수 있습니다.",
  navHome: "홈",
  codeCopy: "복사",
  codeCopied: "복사되었습니다",
  onThisPage: "이 페이지에서",
  navGroups: [
    { label: "소개", sectionIds: ["getting-started", "ui-modes"] },
    { label: "설치", sectionIds: ["install", "quick-start", "full-example"] },
    { label: "아키텍처", sectionIds: ["ui-architecture", "styling"] },
    { label: "설정", sectionIds: ["config", "keyboard-shortcuts"] },
    { label: "데이터·워크플로우", sectionIds: ["persistence", "github", "feedback-workflow", "data-contract", "migration"] },
  ],
  sections: [
    {
      id: "getting-started",
      title: "시작하기",
      blocks: [
        {
          type: "paragraph",
          text: "Stitchable은 실제 DOM 요소에 피드백을 남기고, UI 변경 후에도 마커를 복원하며, 필요하면 GitHub Issue로 승격할 수 있게 해 줍니다.",
        },
        {
          type: "list",
          items: [
            "data-report-id — 화면이 바뀌어도 querySelector로 같은 요소를 찾아 마커 위치를 복원합니다.",
            "Shadow Root UI — 호스트 앱 CSS와 분리된 패널·오버레이·마커입니다. 별도 CSS import가 필요 없습니다.",
            "localStorage 또는 서버 — handler를 생략하면 브라우저에 저장하고, onList/onCreate/onUpdate로 API와 연동할 수 있습니다.",
          ],
        },
      ],
    },
    {
      id: "ui-modes",
      title: "UI 모드",
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
      id: "install",
      title: "Install",
      blocks: [
        { type: "code", snippet: "install", language: "bash" },
        {
          type: "callout",
          variant: "info",
          text: "Next.js 등 SSR 환경에서는 <Report />를\n클라이언트에서만 렌더링하세요 (\"use client\" + dynamic import).",
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
            "project.id를 생략하면 기본값 \"my-app\"입니다. stage/production·멀티 앱에서는 project={{ id }}를 명시하는 것을 권장합니다.",
            "피드백을 받을 화면에 <Report />를 1회만 렌더링하세요.",
            "대상 요소에 data-report-id가 필요합니다. data-report-type을 생략하면 item, 섹션은 group입니다.",
            "CSS import가 필요 없습니다 — Shadow Root 안에서 Tailwind와 함께 자동으로 마운트됩니다.",
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
      blocks: [
        {
          type: "paragraph",
          text: "Report UI는 open Shadow Root(#stitchable-root)에 렌더링되어\n호스트 앱 스타일과 격리됩니다.",
        },
        { type: "code", snippet: "shadowDiagram", language: "text" },
        {
          type: "list",
          items: [
            "피드백 대상 탐색은 메인 document의 querySelector / elementFromPoint를 사용합니다.",
            "호스트 페이지 Shadow DOM 내부 요소는 기본 피드백 대상이 아닙니다.",
            "appearance light | dark | system은 Shadow Root 내부 data-stitchable-theme으로 반영됩니다.",
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
      id: "persistence",
      title: "Persistence",
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
        { type: "subheading", text: "서버 persistence" },
        {
          type: "list",
          items: [
            "onList, onCreate, onUpdate를 함께 넘기면 서버 저장소를 primary로 사용합니다.",
            "UI 삭제가 필요하면 onDelete도 구현하세요.",
            "답변은 onUpdate({ replies, status? })로 저장됩니다.",
            "마커 +N 배지·hover 미리보기는 onList 응답 replies[]에서 파생됩니다.",
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
      blocks: [
        {
          type: "paragraph",
          text: "view 모드(⌘⇧L)에서 마커(item 빨간 점 · group 보라 점)를 기준으로\n아래 흐름이 동작합니다.",
        },
        {
          type: "ordered",
          items: [
            "작성 — 요소 선택, 메시지, 작성자, checkbox 태그.",
            "마커 배지 — replies.length ≥ 1이면 +N을 표시합니다.",
            "hover — 상태 배지, 메시지, 작성자, 태그·최근 답변을 미리볼 수 있습니다.",
            "클릭 — 원본 이슈와 답변 입력 UI(태그 없음)를 엽니다.",
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
      blocks: [
        {
          type: "list",
          items: [
            "ReportField 기본 타입: textarea, checkbox.",
            "field_values: Record<string, string | boolean>.",
            "replies는 시간순 append, 최신 답변은 마지막 항목입니다.",
            "피드백 status: open → git_issued → resolved → archived.",
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
            "flat projectId/environment/appVersion 대신 project={{ id, env, version }}를 사용합니다.",
            "flat prop 대신 project, ui, visibility 객체를 사용합니다.",
            "workspace 개념은 project.id로 교체합니다.",
            "storageAdapter는 제거되었습니다 — onList/onCreate/onUpdate/onDelete를 사용합니다.",
            "analytics·알림은 onEvent/onReply를 사용합니다.",
            "localStorage 키: stitchable:reports:v1:{projectId} 또는 :{environment} 접미사.",
          ],
        },
      ],
    },
  ],
}
