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
      eyebrow: "QA·스테이징·내부 도구를 위한 DOM 기반 피드백 레이어",
      title: "UI 위에 바로 남기는 피드백.",
      description:
        "Stitchable은 실제 DOM 요소에 피드백을 남기고, UI가 바뀌어도 마커를 복원하며, 스크린샷 없이 이슈를 검토할 수 있게 해줍니다.",
      getStarted: "시작하기",
      installCmd: "npm i stitchable",
      codeCopy: "복사",
      codeCopied: "복사됨",
      badges: ["가입 불필요", "localhost 지원", "Shadow Root UI", "GitHub Issue 연동"],
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
    workflow: {
      steps: [
        { label: "설치", desc: "<Report /> 추가" },
        { label: "UI 클릭", desc: "원하는 요소 선택" },
        { label: "피드백 남기기", desc: "스크린샷 대신 마커" },
        { label: "검토", desc: "답변 및 분류" },
        { label: "해결", desc: "또는 GitHub로 승격" },
      ],
    },
    features: {
      eyebrow: "실제 화면을 위해 설계됨",
      title: "스크린샷 QA를 대체하는 모든 것",
      subtitle:
        "Stitchable은 피드백을 해당 요소에 직접 붙여, 전달 과정에서 맥락이 사라지지 않게 합니다.",
      items: [
        {
          title: "DOM 요소 피드백",
          desc: "data-report-id와 data-report-type으로 요소에 피드백을 남깁니다.",
        },
        {
          title: "위치 복원",
          desc: "UI가 변경되어도 같은 DOM 요소를 찾아 마커를 복원합니다.",
        },
        {
          title: "Shadow Root UI",
          desc: "패널·오버레이·마커가 호스트 앱 스타일과 격리됩니다. CSS import 불필요.",
        },
        {
          title: "로컬 우선",
          desc: "handler를 넘기지 않으면 localStorage에 피드백을 저장합니다.",
        },
        {
          title: "서버 영속성",
          desc: "onList, onCreate, onUpdate, onDelete로 자체 API를 연결합니다.",
        },
        {
          title: "피드백 워크플로우",
          desc: "답변, 검수 상태, denied/checkout/confirm, resolved 상태를 지원합니다.",
        },
        {
          title: "GitHub Issue 승격",
          desc: "github.onCreate로 중요한 피드백을 GitHub Issue로 승격합니다.",
        },
        {
          title: "키보드 단축키",
          desc: "빠른 QA를 위한 키보드 중심 조작을 제공합니다.",
        },
        {
          title: "환경·버전 컨텍스트",
          desc: "project id, environment, route, app version별로 피드백을 분리합니다.",
        },
      ],
    },
    pricing: {
      eyebrow: "요금",
      title: "무료로 시작. 클라우드도 준비됐습니다.",
      description:
        "라이브러리만으로도 충분히 사용할 수 있습니다. 팀 공유 영속성과 협업이 필요할 때 업그레이드하세요.",
      freeTitle: "Free",
      freeSubtitle: "오픈 소스",
      freePrice: "₩0",
      freePriceSuffix: "/ 영구",
      freeCta: "라이브러리 설치",
      proTitle: "Pro",
      proSubtitle: "팀용",
      proBadge: "클라우드 준비",
      proPrice: "준비 중",
      proCta: "대기 목록 참여",
      freeFeatures: [
        "DOM 요소 피드백",
        "Shadow Root UI",
        "localStorage 영속성",
        "가져오기 /보내기",
        "키보드 단축키",
        "피드백 목록",
        "답변 / 검수 워크플로우",
        "GitHub Issue URL / handler 준비",
      ],
      proFeatures: [
        "서버 영속성",
        "팀 워크플로우",
        "GitHub Issue 동기화",
        "실시간 협업",
        "AI 요약",
        "분석",
      ],
    },
    footer: {
      tagline: "QA·스테이징·내부 도구를 위한 DOM 기반 피드백 레이어",
      docs: "문서",
      features: "기능",
      github: "GitHub",
    },
  },
}
