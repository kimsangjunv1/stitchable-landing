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
    resolved: "해결됨",
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
        "실제 `DOM` 요소에 피드백을 남기고, UI가 바뀌어도 `마커`를 복원할 수 있습니다.\n`스크린샷` 없이도 이슈를 검토할 수 있습니다.",
      license: "`MIT license` 하에 무료 오픈 소스입니다.",
      getStarted: "시작하기",
      readDocs: "문서 읽기",
      copyPrompt: "프롬프트 복사",
      codeCopy: "복사",
      codeCopied: "복사되었습니다",
      copyPromptText:
        "Stitchable을 React/Next.js 앱에 통합해 주세요. npm i stitchable로 설치하고 <Report /> 컴포넌트를 추가하면 됩니다.",
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
        "한 번 설치한 뒤 새 터미널 세션을 연 다음\n`npm i stitchable`을 실행하세요.",
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
            "`data-report-id`와 `data-report-type`으로\n요소에 직접 피드백을 남길 수 있습니다.",
          tags: ["DOM", "마커", "선택"],
        },
        {
          title: "일관된 개발 흐름",
          description:
            "하나의 설정 파일로\n피드백 워크플로우를 일관되게 유지합니다.",
          tags: ["<Report />", "localStorage", "API", "GitHub"],
        },
        {
          title: "모든 React 스택 지원",
          description:
            "Next.js, Vite, CRA 등\nReact 기반 프레임워크를 모두 지원합니다.",
          tags: ["Next.js", "Vite", "Remix", "+ 더 많이"],
        },
      ],
    },
    trust: {
      title: "검증된 피드백 워크플로우",
      description:
        "스크린샷 QA를 대체하는 오픈 소스 피드백 레이어입니다.\n실제 화면 위에서 바로 협업할 수 있습니다.",
      stats: [
        { value: "0", label: "가입 불필요" },
        { value: "100%", label: "Shadow Root 격리" },
        { value: "∞", label: "localhost 지원" },
      ],
      performance: {
        title: "빠른 QA, 적은 컨텍스트 스위칭",
        description:
          "스크린샷 대신 `DOM 마커`로 피드백하고, UI 변경 후에도 `위치를 복원`합니다.\n필요하면 `GitHub Issue`로 바로 승격할 수 있습니다.",
      },
    },
    libraryGoodPoints: {
      title: "스테이징 QA를 위한 가볍고 완전한 오픈소스 레이어",
      mainStat: {
        label: "Total bundle (gzip)",
        value: "~55KB",
      },
      chart: {
        label: "Stitchable Bundle",
        axisStart: "v0.1",
        axisEnd: "Today",
      },
      stats: [
        { value: "~10KB+", label: "Stylesheet (gzip)" },
        { value: "~45KB+", label: "JS only (gzip)" },
        { value: "0", label: "Runtime dependencies" },
      ],
    },
    benefits: {
      shipping: {
        title: "배포에 집중하고, 도구 유지보수는 최소화",
        items: [
          "스크린샷·주석 도구 유지보수 시간을 줄일 수 있습니다",
          "디자이너·개발자·QA 간 컨텍스트 공유가 수월해집니다",
          "사람과 AI 워크플로우 모두에 표준화된 피드백을 제공합니다",
        ],
      },
      security: {
        title: "호스트 앱과 격리된 UI",
        description:
          "Shadow Root로 패널·오버레이·마커가\n호스트 스타일과 완전히 분리됩니다.",
        items: [
          "CSS import 불필요 — Shadow DOM으로 격리됩니다",
          "localStorage 우선, 서버 API는 선택적으로 연동합니다",
          "환경·버전·라우트별로 피드백을 분리할 수 있습니다",
        ],
      },
    },
    showcase: {
      title: "하나의 도구로 필요한 모든 것",
      subtitle:
        "Stitchable은 피드백 수집부터 검토·해결까지\n전체 QA 워크플로우를 하나의 레이어로 통합합니다.",
      tabs: [
        {
          id: "install",
          label: "install",
          title: "5분 안에 통합",
          description:
            "npm install 한 번으로\nReact 앱에 피드백 레이어를 추가할 수 있습니다.",
          bullets: [
            "Shadow Root UI — CSS import가 필요 없습니다",
            "localhost·스테이징·프로덕션 모두 지원합니다",
            "data-report-id로 요소를 식별합니다",
            "키보드 단축키가 내장되어 있습니다",
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
          description:
            "클릭 한 번으로 요소를 선택하고\n마커를 남길 수 있습니다.",
          bullets: [
            "스크린샷 없이 요소 단위로 피드백합니다",
            "답변·검수·해결 워크플로우를 지원합니다",
            "denied / checkout / confirm 상태를 다룹니다",
            "환경·버전 컨텍스트를 자동으로 기록합니다",
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
          description:
            "같은 DOM 요소를 다시 찾아\n마커 위치를 복원합니다.",
          bullets: [
            "data-report-id 기반으로 요소를 추적합니다",
            "UI 리팩터링 후에도 마커를 유지합니다",
            "라우트·환경별로 분리합니다",
            "import / export를 지원합니다",
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
          description:
            "중요한 피드백을\nGitHub Issue로 바로 올릴 수 있습니다.",
          bullets: [
            "github.onCreate 핸들러를 연동합니다",
            "피드백 → Issue 자동 매핑을 지원합니다",
            "팀 트리아지 워크플로우에 맞춰 사용할 수 있습니다",
            "상태 동기화도 준비되어 있습니다",
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
          title: "리포트 보내기",
          description:
            "피드백 목록을 JSON으로 보내\n팀과 공유할 수 있습니다.",
          bullets: [
            "JSON export / import를 지원합니다",
            "환경·버전 필터를 사용할 수 있습니다",
            "팀 공유용 리포트를 만들 수 있습니다",
            "AI 요약도 준비 중입니다",
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
        "우측 패널에서 모드를 선택하거나 단축키로 바로 진입합니다.\n커스텀 필드·팀·환경 설정도 같은 레이어에서 처리됩니다.",
      modes: [
        {
          id: "idle",
          label: "idle",
          shortcut: "기본",
          description: "Report / View / 요소 미리보기를 선택합니다",
        },
        {
          id: "report",
          label: "report",
          shortcut: "⌘⇧M",
          description: "화면 요소를 클릭해 피드백을 작성합니다",
        },
        {
          id: "view",
          label: "view",
          shortcut: "⌘⇧L",
          description: "마커·목록 조회, 답변·검수, Git Issue 승격을 합니다",
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
          description: "textarea·checkbox를 태그 pill로 표시합니다",
          tags: ["fields", "tags"],
        },
        {
          title: "팀 & Reviewer",
          description: "team.user·reviewers로 답변·검수 흐름을 설정합니다",
          tags: ["team", "reviewers"],
        },
        {
          title: "환경 분리",
          description: "devOnly·routeKey·project.env로 scope를 분리합니다",
          tags: ["devOnly", "routeKey", "env"],
        },
      ],
    },
    architecture: {
      eyebrow: "UI Architecture",
      title: "Shadow Root — 호스트 CSS와 완전 분리",
      description:
        "Report UI는 `#stitchable-root` Shadow Root에 마운트됩니다.\nTailwind 스타일이 번들에 포함되어 별도 CSS import가 필요 없습니다.",
      bullets: [
        "호스트 앱 CSS reset·global style과 스타일 간섭이 없습니다",
        "appearance light / dark / system을 지원합니다",
        "피드백 대상 탐색은 메인 document 기준 querySelector를 사용합니다",
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
        "view 모드 마커를 기준으로 답변·검수(denied / confirm / checkout) 흐름이 이어집니다.\n필요하면 GitHub Issue로 승격할 수 있습니다.",
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
          description:
            "replies가 쌓이면 마커에 +N 배지가 표시되고,\nhover 시 최근 답변을 미리볼 수 있습니다.",
          status: "suggested",
        },
        {
          id: "review",
          label: "03 · review",
          title: "denied / confirm / checkout",
          description:
            "검수 거절·재확인·해결 확인으로\n타임라인 상태가 전환됩니다.",
          status: "found_error",
        },
        {
          id: "github",
          label: "04 · promote",
          title: "GitHub Issue 승격",
          description:
            "github.onCreate로 Issue를 생성하면\nstatus가 git_issued로 변경됩니다.",
          status: "git_issued",
        },
      ],
    },
    persistence: {
      eyebrow: "Persistence",
      title: "localStorage 기본, 서버 API는 선택",
      description:
        "handler를 생략하면 브라우저에 저장됩니다.\nonList/onCreate/onUpdate를 넘기면 API와 연동할 수 있습니다.\nImport/Export는 localStorage 모드에서만 활성화됩니다.",
      local: {
        title: "localStorage (기본)",
        description:
          "설정 없이 바로 시작할 수 있습니다.\n패널 설정 메뉴에서 Import/Export/Command를 지원합니다.",
        bullets: [
          "키: stitchable:reports:v1:{projectId}",
          "project.id·env로 scope를 분리합니다",
          "JSON Import / Export / Replace를 지원합니다",
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
        description:
          "onList·onCreate·onUpdate를 함께 넘기면\n서버를 primary storage로 사용할 수 있습니다.",
        bullets: [
          "onDelete로 UI 삭제를 지원합니다",
          "onEvent / onReply로 analytics·Slack 연동이 가능합니다",
          "github.onCreate는 persistence와 별개입니다",
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
        "Stitchable은 SPA부터 Next.js 풀스택 앱까지\n모든 React 기반 웹앱의 기반이 될 수 있습니다.",
      items: [
        {
          title: "Meta Frameworks",
          description:
            "Next.js App Router, Pages Router, Remix 등\nReact 메타 프레임워크를 지원합니다",
          tags: ["Next.js", "Remix", "Vite"],
        },
        {
          title: "Platform Agnostic",
          description: "Vercel, Netlify, Cloudflare, 자체 호스팅을 모두 지원합니다",
          tags: ["Vercel", "Netlify", "Cloudflare"],
        },
        {
          title: "Any Environment",
          description:
            "localhost, 스테이징, 프로덕션 환경별로\n피드백을 분리할 수 있습니다",
          tags: ["local", "stage", "production"],
        },
      ],
    },
    cta: {
      title: "Stitchable로 팀의 QA 생산성을\n한 단계 높여 보세요",
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
      exportReport: "리포트 보내기",
      progress: [
        "패널 대기",
        "피드백 추가",
        "요소 선택",
        "피드백 전송",
        "마커 미리보기",
        "답변 작성",
        "이슈 해결",
      ],
      feedbackMessage: "모바일에서 Export 버튼이 금액과 겹쳐 보입니다",
      replyMessage: "flex-wrap 수정을 내일 stage 배포에 포함하겠습니다",
      designer: "김디자인",
      developer: "이개발",
      envLabel: "stage",
    },
  },
}
