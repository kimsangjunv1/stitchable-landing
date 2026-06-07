import type { LandingMessages } from "./types"
import { guideKo } from "./guide/ko"

export const ko: LandingMessages = {
  guide: guideKo,
  localeOption: {
    en: "English",
    ko: "한국어",
  },
  panel: {
    stopFeedback: "피드백 중지",
    addFeedback: "피드백 추가",
    statsFound: "발견",
    statsGroup: "그룹",
    statsItem: "아이템",
    tabPageDetails: "페이지 상세",
    tabFeedbackList: "피드백 목록",
  },
  author: {
    placeholder: "작성자",
    creatorLabel: "생성자",
  },
  composer: {
    placeholder: "메시지를 입력하세요",
    sendAriaLabel: "전송",
  },
  thread: {
    resolved: "해결",
    select: "선택",
  },
  status: {
    feedback: {
      currently_wait: "대기 중",
      suggested: "제안됨",
      resolved: "해결됨",
    },
  },
  statusText: {
    selectedItem: "선택된 아이템",
  },
  resolution: {
    issueResolvedMessage: "이슈가 해결되었습니다.",
  },
  landing: {
    header: {
      beta: "베타",
      navFeatures: "기능",
      navHowItWorks: "사용 방법",
      navDocs: "문서",
      navPricing: "요금",
      github: "GitHub",
      getStarted: "시작하기",
    },
    hero: {
      titleLine1: "UI 위에 바로 남기는",
      titleLine2: "DOM 기반 피드백 레이어",
      description:
        "실제 `DOM` 요소에 피드백을 남기고, UI가 바뀌어도 `마커`를 복원하며, `스크린샷` 없이 이슈를 검토하세요.",
      license: "`MIT license` 하에 무료 오픈 소스",
      getStarted: "시작하기",
      readDocs: "문서 읽기",
      copyPrompt: "프롬프트 복사",
      codeCopy: "복사",
      codeCopied: "복사됨",
      copyPromptText:
        "Stitchable을 React/Next.js 앱에 통합해 주세요. npm i stitchable로 설치하고 <Report /> 컴포넌트를 추가하세요.",
    },
    terminal: {
      lines: [
        "$ npm i stitchable",
        "✔ Dependencies installed in 1.2s",
        "",
        "$ npx stitchable init",
        "? Select framework › Next.js",
        "? Project directory › ./my-app",
        "✔ Stitchable configured",
        "",
        "→ Next: import { Report } from 'stitchable'",
      ],
    },
    gettingStarted: {
      eyebrow: "시작하기",
      title: "Stitchable 설치",
      description:
        "한 번 설치하고, 새 터미널 세션을 연 뒤 `npm i stitchable`을 실행하세요.",
      ciNote: "CI에서는",
      ciLink: "GitHub Actions",
      npmLabel: "npm / pnpm / bun",
      npmCmd: "npm i stitchable",
      yarnLabel: "yarn",
      yarnCmd: "yarn add stitchable",
    },
    capabilities: {
      items: [
        {
          title: "실제 DOM에 피드백",
          description:
            "`data-report-id`와 `data-report-type`으로 요소에 직접 피드백을 남깁니다.",
          tags: ["DOM", "마커", "선택"],
        },
        {
          title: "일관된 개발 흐름",
          description: "하나의 설정 파일과 일관된 피드백 워크플로우.",
          tags: ["<Report />", "localStorage", "API", "GitHub"],
        },
        {
          title: "모든 React 스택 지원",
          description: "Next.js, Vite, CRA 등 React 기반 프레임워크를 지원합니다.",
          tags: ["Next.js", "Vite", "Remix", "+ 더 많이"],
        },
      ],
    },
    trust: {
      title: "검증된 피드백 워크플로우",
      description:
        "스크린샷 QA를 대체하는 오픈 소스 피드백 레이어로, 실제 화면 위에서 바로 협업합니다.",
      stats: [
        { value: "0", label: "가입 필요" },
        { value: "100%", label: "Shadow Root 격리" },
        { value: "∞", label: "localhost 지원" },
      ],
      performance: {
        title: "빠른 QA, 적은 컨텍스트 스위칭",
        description:
          "스크린샷 대신 `DOM 마커`로 피드백하고, UI 변경 후에도 `위치를 복원`하며, `GitHub Issue`로 바로 승격할 수 있습니다.",
      },
    },
    benefits: {
      shipping: {
        title: "배포에 집중, 도구 유지보수는 최소화",
        items: [
          "스크린샷·주석 도구 유지보수 시간 절약",
          "디자이너·개발자·QA 간 컨텍스트 공유 개선",
          "사람과 AI 워크플로우 모두에 표준화된 피드백",
        ],
      },
      security: {
        title: "호스트 앱과 격리된 UI",
        description:
          "Shadow Root로 패널·오버레이·마커가 호스트 스타일과 완전히 분리됩니다.",
        items: [
          "CSS import 불필요 — Shadow DOM 격리",
          "localStorage 우선, 서버 API 선택 연동",
          "환경·버전·라우트별 피드백 분리",
        ],
      },
    },
    showcase: {
      title: "하나의 도구로 필요한 모든 것",
      subtitle:
        "Stitchable은 피드백 수집부터 검토·해결까지 전체 QA 워크플로우를 하나의 레이어로 통합합니다.",
      tabs: [
        {
          id: "install",
          label: "install",
          title: "5분 안에 통합",
          description: "npm install 한 번으로 React 앱에 피드백 레이어를 추가합니다.",
          bullets: [
            "Shadow Root UI — CSS import 불필요",
            "localhost·스테이징·프로덕션 모두 지원",
            "data-report-id로 요소 식별",
            "키보드 단축키 내장",
          ],
          poweredBy: "Powered by React Shadow DOM",
          output: [
            "$ npm i stitchable",
            "added 1 package in 0.8s",
            "",
            "import { Report } from 'stitchable'",
            "",
            "<Report projectId=\"my-app\" />",
            "✔ Feedback layer ready",
          ],
        },
        {
          id: "feedback",
          label: "feedback",
          title: "DOM 요소에 직접 피드백",
          description: "클릭 한 번으로 요소를 선택하고 마커를 남깁니다.",
          bullets: [
            "스크린샷 없이 요소 단위 피드백",
            "답변·검수·해결 워크플로우",
            "denied / checkout / confirm 상태",
            "환경·버전 컨텍스트 자동 기록",
          ],
          poweredBy: "Powered by DOM Anchoring",
          output: [
            "[feedback] Export button overlaps value",
            "  element: button[data-report-id='export-btn']",
            "  env: stage · route: /dashboard",
            "  status: currently_wait",
            "",
            "✔ Marker placed on DOM element",
          ],
        },
        {
          id: "restore",
          label: "restore",
          title: "UI 변경 후에도 마커 복원",
          description: "같은 DOM 요소를 다시 찾아 마커 위치를 복원합니다.",
          bullets: [
            "data-report-id 기반 요소 추적",
            "UI 리팩터링 후에도 마커 유지",
            "라우트·환경별 분리",
            "import / export 지원",
          ],
          poweredBy: "Powered by Position Restoration",
          output: [
            "$ stitchable restore --env stage",
            "Scanning 42 feedback items...",
            "✔ Restored 38 markers",
            "⚠ 4 items need re-anchoring",
          ],
        },
        {
          id: "github",
          label: "github",
          title: "GitHub Issue로 승격",
          description: "중요한 피드백을 GitHub Issue로 바로 올립니다.",
          bullets: [
            "github.onCreate 핸들러 연동",
            "피드백 → Issue 자동 매핑",
            "팀 트리아지 워크플로우",
            "상태 동기화 준비",
          ],
          poweredBy: "Powered by GitHub API",
          output: [
            "$ stitchable promote --id fb-128",
            "Creating GitHub Issue...",
            "✔ Issue #42 created",
            "  https://github.com/org/repo/issues/42",
          ],
        },
        {
          id: "export",
          label: "export",
          title: "리포트보내기",
          description: "피드백 목록을 JSON으로보내 공유합니다.",
          bullets: [
            "JSON export / import",
            "환경·버전 필터",
            "팀 공유용 리포트",
            "AI 요약 준비",
          ],
          poweredBy: "Powered by JSON Export",
          output: [
            "$ stitchable export --env stage",
            "Exporting 12 feedback items...",
            "✔ Saved to feedback-report.json",
            "  12 items · 3 resolved · 2 pending",
          ],
        },
      ],
    },
    bento: {
      eyebrow: "UI 모드",
      title: "idle · report · view — 한 패널에서 전환",
      description:
        "우측 패널에서 모드를 선택하거나 단축키로 바로 진입합니다. 커스텀 필드·팀·환경 설정도 같은 레이어에서 처리합니다.",
      modes: [
        {
          id: "idle",
          label: "idle",
          shortcut: "기본",
          description: "Report / View / 요소 미리보기 선택",
        },
        {
          id: "report",
          label: "report",
          shortcut: "⌘⇧M",
          description: "화면 요소를 클릭해 피드백 작성",
        },
        {
          id: "view",
          label: "view",
          shortcut: "⌘⇧L",
          description: "마커·목록 조회, 답변·검수, Git Issue 승격",
        },
      ],
      shortcuts: [
        { action: "피드백 남기기", mac: "⌘⇧M", win: "Ctrl+Shift+M" },
        { action: "요소 미리보기", mac: "⌘⇧E", win: "Ctrl+Shift+E" },
        { action: "피드백 보기", mac: "⌘⇧L", win: "Ctrl+Shift+L" },
        { action: "검색 포커스", mac: "⌘⇧S", win: "Ctrl+Shift+S" },
        { action: "저장 / 전송", mac: "⌘↩", win: "Ctrl+Enter" },
      ],
      config: [
        {
          title: "커스텀 필드",
          description: "textarea·checkbox를 태그 pill로 표시",
          tags: ["fields", "tags"],
        },
        {
          title: "팀 & Reviewer",
          description: "team.user·reviewers로 답변·검수 흐름 설정",
          tags: ["team", "reviewers"],
        },
        {
          title: "환경 분리",
          description: "devOnly·routeKey·project.env로 scope 분리",
          tags: ["devOnly", "routeKey", "env"],
        },
      ],
    },
    architecture: {
      eyebrow: "UI Architecture",
      title: "Shadow Root — 호스트 CSS와 완전 분리",
      description:
        "Report UI는 `#stitchable-root` Shadow Root에 마운트됩니다. Tailwind 스타일이 번들에 포함되어 별도 CSS import가 필요 없습니다.",
      bullets: [
        "호스트 앱 CSS reset·global style과 스타일 간섭 없음",
        "appearance light / dark / system 지원",
        "피드백 대상 탐색은 메인 document 기준 querySelector",
      ],
      diagram: {
        host: "document.body",
        root: "#stitchable-root",
        shadow: "#shadow-root (open)",
        ui: "Report UI — 패널 · 오버레이 · 마커",
      },
      codeLines: [
        "import { Report } from 'stitchable'",
        "",
        "export default function App() {",
        "  return (",
        "    <>",
        "      <Report project={{ id: 'my-app' }} />",
        "      <main>",
        "        <button data-report-id='cta'>시작</button>",
        "      </main>",
        "    </>",
        "  )",
        "}",
      ],
    },
    workflow: {
      eyebrow: "Feedback Workflow",
      title: "작성 → 답변 → 검수 → GitHub Issue",
      description:
        "view 모드 마커를 기준으로 답변·검수(denied / confirm / checkout) 흐름이 이어지고, 필요 시 GitHub Issue로 승격합니다.",
      steps: [
        {
          id: "write",
          label: "01 · report",
          title: "요소 선택 후 피드백 작성",
          description: "메시지·작성자·checkbox 태그를 선택해 등록합니다.",
          status: "open",
        },
        {
          id: "reply",
          label: "02 · reply",
          title: "답변 & 마커 배지",
          description: "replies가 쌓이면 마커에 +N 배지, hover 시 최근 답변 미리보기.",
          status: "suggested",
        },
        {
          id: "review",
          label: "03 · review",
          title: "denied / confirm / checkout",
          description: "검수 거절·재확인·해결 확인으로 타임라인 상태가 전환됩니다.",
          status: "found_error",
        },
        {
          id: "github",
          label: "04 · promote",
          title: "GitHub Issue 승격",
          description: "github.onCreate로 Issue 생성, status가 git_issued로 변경됩니다.",
          status: "git_issued",
        },
      ],
    },
    persistence: {
      eyebrow: "Persistence",
      title: "localStorage 기본, 서버 API 선택",
      description:
        "handler를 생략하면 브라우저 저장. onList/onCreate/onUpdate를 넘기면 API 연동. Import/Export는 localStorage 모드에서만 활성화됩니다.",
      local: {
        title: "localStorage (기본)",
        description: "설정 없이 바로 시작. 패널 설정 메뉴에서 Import/Export/Command 지원.",
        bullets: [
          "키: stitchable:reports:v1:{projectId}",
          "project.id·env로 scope 분리",
          "JSON Import / Export / Replace",
        ],
        codeLines: [
          "<Report project={{ id: 'my-app' }} />",
          "",
          "// handler 생략 → localStorage",
          "✔ Zero-config persistence",
        ],
      },
      server: {
        title: "Server API",
        description: "onList·onCreate·onUpdate를 함께 넘겨 서버를 primary storage로 사용.",
        bullets: [
          "onDelete로 UI 삭제 지원",
          "onEvent / onReply로 analytics·Slack",
          "github.onCreate는 persistence와 별개",
        ],
        codeLines: [
          "<Report",
          "  onList={({ pathname }) => fetch(...)}",
          "  onCreate={(payload) => fetch(...)}",
          "  onUpdate={(id, payload) => fetch(...)}",
          "/>",
        ],
      },
    },
    fullstack: {
      title: "풀스택? 문제없습니다.",
      description:
        "Stitchable은 SPA부터 Next.js 풀스택 앱까지 모든 React 기반 웹앱의 기반이 될 수 있습니다.",
      items: [
        {
          title: "Meta Frameworks",
          description: "Next.js App Router, Pages Router, Remix 등 React 메타 프레임워크 지원",
          tags: ["Next.js", "Remix", "Vite"],
        },
        {
          title: "Platform Agnostic",
          description: "Vercel, Netlify, Cloudflare, 자체 호스팅 모두 지원",
          tags: ["Vercel", "Netlify", "Cloudflare"],
        },
        {
          title: "Any Environment",
          description: "localhost, 스테이징, 프로덕션 환경별 피드백 분리",
          tags: ["local", "stage", "production"],
        },
      ],
    },
    cta: {
      title: "Stitchable로 팀의 QA 생산성을 한 단계 올리세요",
      button: "시작하기",
    },
    openSource: {
      title: "무료 오픈 소스",
      description: "`MIT license` 하에 무료 오픈 소스입니다.",
    },
    footer: {
      companyTitle: "COMPANY",
      companyLinks: [
        { label: "문서", href: "/guide" },
        { label: "기능", href: "#features" },
        { label: "GitHub", href: "#" },
      ],
      socialTitle: "SOCIAL",
      copyright: "© 2026 Stitchable contributors.",
    },
    preview: {
      title: "피드백 워크플로우",
      subtitle: "피드백 추가 → 요소 선택 → 답변 → 해결",
      exportReport: "리포트보내기",
      progress: [
        "패널 대기",
        "피드백 추가",
        "요소 선택",
        "피드백 전송",
        "마커 미리보기",
        "답변 작성",
        "이슈 해결",
      ],
      feedbackMessage: "모바일에서 Export 버튼이 금액과 겹쳐 보여요",
      replyMessage: "flex-wrap 수정을 내일 stage 배포에 포함할게요",
      designer: "김디자인",
      developer: "이개발",
      envLabel: "stage",
    },
  },
}
