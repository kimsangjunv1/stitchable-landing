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
    adoptionPath: {
      eyebrow: "점진적 확장",
      title: "로컬만 쓰다가 팀·서버·연동까지",
      description:
        "handler 없이 시작하고, 필요할 때 필드·팀·API·GitHub·Slack을 단계적으로 붙일 수 있습니다.",
      steps: [
        {
          label: "localStorage",
          description: "`<Report />` 하나로 바로 시작합니다.",
        },
        {
          label: "팀·필드",
          description: "custom fields·team.user·reviewers를 추가합니다.",
        },
        {
          label: "서버 API",
          description: "onList/onCreate/onUpdate로 내 DB에 저장합니다.",
        },
        {
          label: "GitHub·Slack",
          description: "github.onCreate·onEvent·onReply로 연동합니다.",
        },
      ],
    },
    devOnlyCallout: {
      title: "production 빌드에서는 UI를 숨깁니다",
      description:
        "`visibility.devOnly`로 스테이징·내부 QA 전용 도구로 쓸 수 있습니다. 앱 코드 레벨에서 production 렌더를 막습니다.",
      codeLine: '<Report visibility={{ devOnly: true }} />',
    },
    techTrust: {
      eyebrow: "Developer Experience",
      title: "타입·subpath·번들 예산까지 명확하게",
      description:
        "의존성 0 + QA 풀스택 UI 트레이드오프를 감안해도, 계약과 번들은 예측 가능합니다.",
      panels: [
        {
          title: "subpath export",
          description:
            "`stitchable/report`는 Report·타입만 export합니다. motion 등은 필요할 때만 가져옵니다.",
          codeLines: [
            "import { Report } from 'stitchable/report'",
            "import type { ReportFeedback } from 'stitchable/report'",
            "",
            "// motion은 필요 시에만",
            "import { motion } from 'stitchable'",
          ],
        },
        {
          title: "TypeScript contracts",
          description:
            "ReportFeedback, CreateReportFeedbackPayload, ReportEvent 등 스키마가 타입으로 정의되어 있습니다.",
          codeLines: [
            "import type {",
            "  ReportFeedback,",
            "  CreateReportFeedbackPayload,",
            "  ReportEvent,",
            "} from 'stitchable/report'",
          ],
        },
      ],
      stats: [
        { value: "자체 motion", label: "Framer Motion 미의존" },
        { value: "size:bundle", label: "CI 번들 예산 측정" },
        { value: "peer only", label: "react / react-dom" },
      ],
    },
    qualityAssurance: {
      eyebrow: "품질·신뢰",
      title: "테스트·CI·문서·데이터 계약",
      description:
        "Vitest, typecheck, build, bundle size, example build가 CI에서 돌아가고 문서·스키마가 정리되어 있습니다.",
      items: [
        {
          title: "Vitest & CI",
          description: "typecheck, build, bundle size를 자동 검증합니다.",
        },
        {
          title: "Bundle budget",
          description: "`npm run size:bundle`로 minify+gzip 크기를 관리합니다.",
        },
        {
          title: "Docs",
          description: "README, getting-started, data model, example app 가이드.",
        },
        {
          title: "Data contract",
          description: "replies, status, field_values, GitHub integrations 스키마.",
        },
      ],
    },
    saasComparison: {
      eyebrow: "포지셔닝",
      title: "SaaS QA 위젯과는 다른 레이어",
      description:
        "Marker.io류는 올인원 SaaS, stitchable은 React 앱에 내장하는 오픈소스 QA 레이어에 가깝습니다.",
      positioning: {
        headers: ["구분", "SaaS QA", "stitchable"],
        rows: [
          ["형태", "SaaS + 외부 위젯", "npm 라이브러리 (앱 내장)"],
          ["비용", "월 $39~$99+ (시트/프로젝트 제한)", "MIT, 구독료 없음"],
          ["데이터", "SaaS 대시보드·클라우드", "localStorage 또는 내 서버/DB"],
          ["피드백", "스크린샷 + 주석", "DOM 요소 클릭 + 마커"],
          ["타깃", "에이전시·클라이언트 UAT", "내부 QA·스테이징·개발팀"],
        ],
      },
      advantages: {
        title: "SaaS 대비 stitchable이 유리한 10가지",
        items: [
          {
            title: "비용·벤더 락인 없음",
            description: "MIT + 런타임 dependency 0. 시트·프로젝트·기간 제한이 없습니다.",
          },
          {
            title: "데이터·프라이버시 소유",
            description: "기본 localStorage, 서버 연동 시에도 내 API·내 DB에만 저장합니다.",
          },
          {
            title: "요소 단위 피드백",
            description: "`data-report-id`로 DOM에 앵커. 레이아웃이 바뀌어도 같은 요소를 추적합니다.",
          },
          {
            title: "앱에 녹아든 QA",
            description: "외부 위젯이 아닌 `<Report />` + Shadow Root 내장 패널입니다.",
          },
          {
            title: "production 비노출",
            description: "`visibility.devOnly`로 production 빌드에서 UI를 숨깁니다.",
          },
          {
            title: "검수 워크플로우 내장",
            description: "suggested → denied / confirm / checkout 타임라인이 view 모드에 있습니다.",
          },
          {
            title: "연동 자유도",
            description: "persistence handler·github.onCreate·onEvent/onReply를 내 방식으로 연결합니다.",
          },
          {
            title: "가벼운 의존성",
            description: "Framer, Radix, MUI 없이 react/react-dom peer만 사용합니다.",
          },
          {
            title: "한국어·커스터마이즈",
            description: "`ui.locale: ko | en`, `ui.messages`로 문구를 오버라이드합니다.",
          },
          {
            title: "오픈소스 확장",
            description: "폼 필드, 검수 정책, 패널 UI를 소스 수정·포크로 바꿀 수 있습니다.",
          },
        ],
      },
      honestLimits: {
        title: "솔직히 SaaS가 더 나은 경우",
        headers: ["SaaS가 유리한 점", "stitchable 현재"],
        rows: [
          ["비개발자·클라이언트가 계정 없이 리포트", "data-report-id 마크업 + React 연동 필요"],
          ["자동 스크린샷·주석", "DOM 마커 중심 (스크린샷 없음)"],
          ["콘솔/네트워크 로그, 세션 리플레이", "미포함"],
          ["Jira/Linear/Asana 네이티브 2-way sync", "handler/GitHub 콜백으로 직접 구현"],
          ["WordPress/노코드 사이트", "React 전용"],
          ["브라우저 확장으로 아무 사이트나 QA", "앱에 `<Report />` 삽입 필요"],
        ],
      },
      selectionGuide: {
        saasTitle: "클라이언트 UAT·스크린샷 QA가 목적이라면",
        saasDescription: "비개발자 리포터와 시각적 캡처가 중요할 때 SaaS가 맞습니다.",
        saasTools: "Marker.io · BugHerd · Usersnap · Jam.dev",
        stitchableTitle: "사내 스테이징·DOM QA·데이터 소유가 목적이라면",
        stitchableDescription:
          "개발팀이 DOM 단위로 QA·검수하고, 구독 없이 내 인프라로 운영하고 싶을 때 stitchable이 맞습니다.",
        cta: "시작하기",
      },
      tools: [
        {
          name: "vs Marker.io",
          competitorStrength:
            "Marker.io 강점: 스크린샷·주석, 콘솔/네트워크 로그, 세션 리플레이, Jira/Linear 연동.",
          stitchableWins: [
            "월 구독 없이 스테이징 QA만 돌리고 싶을 때",
            "피드백을 내 DB에만 두고 싶을 때",
            "DOM id로 컴포넌트/버튼을 추적하고 싶을 때",
          ],
        },
        {
          name: "vs BugHerd",
          competitorStrength:
            "BugHerd 강점: 에이전시·클라이언트용 핀/칸반, 비기술자 리포팅.",
          stitchableWins: [
            "개발팀 내부 QA가 목적일 때",
            "Kanban 대신 denied/confirm 검수가 필요할 때",
            "GitHub Issue 승격 + 내 API가 맞을 때",
          ],
        },
        {
          name: "vs Usersnap",
          competitorStrength:
            "Usersnap 강점: NPS·마이크로서베이·스크린 녹화, 엔드유저 피드백.",
          stitchableWins: [
            "스테이징 버그 픽스·UAT가 목적일 때",
            "요소 단위 이슈 추적이 목적일 때",
          ],
        },
        {
          name: "vs Jam.dev",
          competitorStrength:
            "Jam 강점: 원클릭 버그 리포트, 자동 콘솔/네트워크/세션 컨텍스트.",
          stitchableWins: [
            "그 UI 요소가 계속 문제인지 추적할 때",
            "Jam 클라우드 없이 자체 호스팅이 필요할 때",
            "React 앱 안에 QA 패널을 통합하고 싶을 때",
          ],
        },
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
            "요소가 사라지면 좌표 fallback으로 위치를 복원합니다",
            "UI 리팩터링 후에도 마커를 유지합니다",
            "라우트·환경·버전별로 분리합니다",
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
            "formatFeedbackAsGitHubIssueBody로 Issue 본문을 포맷합니다",
            "피드백 → Issue 자동 매핑을 지원합니다",
            "팀 트리아지 워크플로우에 맞춰 사용할 수 있습니다",
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
          description:
            "devOnly·routeKey·project.env·version으로 scope를 분리합니다",
          tags: ["devOnly", "routeKey", "env", "version"],
        },
        {
          title: "다국어 UI",
          description:
            "ui.locale ko/en, 브라우저 자동 감지, ui.messages로 문구를 커스터마이즈합니다",
          tags: ["locale", "messages", "i18n"],
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
      progress: [
        "패널 대기",
        "피드백 추가",
        "요소 선택",
        "피드백 전송",
        "마커 미리보기",
        "답변 작성",
        "이슈 해결",
      ],
      hints: [
        "피드백 추가 버튼을 누르세요",
        "번들 크기(~55KB) 영역을 클릭하세요",
        "메시지를 입력하고 전송하세요",
        "마커에 마우스를 올려보세요",
        "마커를 클릭해 스레드를 여세요",
        "답변을 작성하고 전송하세요",
        "해결 버튼을 눌러 이슈를 종료하세요",
      ],
      retryLabel: "다시 체험하기",
      feedbackMessage: "모바일에서 ~55KB 수치가 차트와 너무 붙어 보입니다",
      replyMessage: "모바일 레이아웃 간격을 내일 stage 배포에 반영하겠습니다",
      designer: "김디자인",
      developer: "이개발",
      envLabel: "stage",
    },
  },
}
