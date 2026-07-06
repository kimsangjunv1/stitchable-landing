import type { HomeMessages } from "@/i18n/landing/types";

export const homeKo: HomeMessages = {
    productTabs: ["AI", "GitHub Copilot", "Desktop App", "GitHub Spark", "GitHub Models"],
    hero: {
        eyebrow: "GitHub Copilot App",
        titleLine1: "이슈부터",
        titleLine2: "머지까지, 한 앱에서",
        body: "무거운 QA 플랫폼이 필요 없습니다. 검수 중인 화면에 바로 피드백을 남기고, 팀과 맞춘 뒤 필요할 때만 이슈로 넘기세요.",
        demoCta: "2분 데모 체험",
        guideCta: "5분 설치 가이드",
        bullets: [
            "또 다른 스크린샷 대신, 클릭한 정확한 위치에 피드백을 남깁니다.",
            "클라이언트와 팀원이 같은 화면·맥락으로 검수합니다.",
            "팀이 필요할 때만 이슈나 PR 워크플로로 에스컬레이션합니다.",
        ],
        mockTask: "빈 상태 아이콘에 다크 모드 스타일 적용",
        overlay: "React 위에 가볍게 얹고, 검수가 필요한 화면에만 확장하도록 설계되었습니다.",
        chips: ["에이전트에 위임", "중앙 인박스", "캔버스 구성", "검토 및 머지"],
        dashboardAlt: "대시보드 미리보기",
        feedbackAlt: "피드백 미리보기",
    },
    reviewSection: {
        eyebrow: "모든 업무 영역에서 검수 실행",
        titleLine1: "여러 세션을",
        titleLine2: "모든 업무 영역에서 실행",
        description: "큰 데모 서피스와 짧은 보조 셀로, 제품 상세가 늘어나도 페이지가 읽기 쉽게 유지됩니다.",
        subEyebrow: "병렬 워크플로, 한눈에",
        heading: "복잡한 검수 흐름도 단순하게.",
        body: "각 섹션은 하나의 명확한 메시지에 집중하고, 장식 대신 선과 셀로 구조를 만듭니다.",
        featureNotes: ["병렬 워크플로, 한눈에", "세션별 격리된 공간", "내장 검증 루프", "자동화된 워크플로"],
        sessionsLabel: "세션",
        sessionItems: ["hero-status-badge", "header-cta", "pricing-card", "open-source-note"],
    },
    agentsSection: {
        eyebrow: "자체 도구로 에이전트 확장",
        titleLine1: "자체 도구로",
        titleLine2: "에이전트 확장",
        description: "정사각형 셀과 얇은 구분선으로 정보가 더 타이트하고 의도적으로 느껴지도록 레이아웃을 조정했습니다.",
        cards: [
            {
                eyebrow: "팀이 전환하는 이유",
                title: "어느 버튼인지 다시 설명할 필요가 없습니다.",
                description: "고정 마커가 정확한 위치를 보존해, 다음 검수가 맥락을 잃지 않고 시작됩니다.",
            },
            {
                eyebrow: "이해관계자용",
                title: "별도 QA 앱을 배우지 않고 검수를 시작할 수 있습니다.",
                description: "스테이징 URL을 공유하고, 이미 보고 있는 제품 화면 위에 바로 피드백을 남깁니다.",
            },
            {
                eyebrow: "개발자용",
                title: "기존 워크플로를 대체하지 않고 검수 마찰을 줄입니다.",
                description: "핵심은 작게 시작하고, 검수 밀도가 높은 곳에만 확장하는 것입니다.",
            },
        ],
    },
    developersSection: {
        eyebrow: "개발자용",
        titleLine1: "개발자를 위해,",
        titleLine2: "작게 시작하고 가볍게 유지",
        description: "Mona Sans 간격과 정사각형 그리드로, 설정 비용과 기술적 근거가 한눈에 읽힙니다.",
        facts: [
            { title: "반나절 설치", body: "패키지를 설치하고 앱 루트에 한 번 마운트한 뒤, 스테이징 페이지 하나에서 시작합니다." },
            { title: "점진적 롤아웃", body: "먼저 검수가 필요한 화면만 `data-report-id`로 태깅합니다." },
            { title: "Shadow DOM", body: "피드백 UI가 호스트 스타일과 분리되어 CSS 충돌 없이 붙습니다." },
            { title: "localStorage 체험", body: "공유 handler를 연결하기 전에도 로컬 흐름 전체를 체험할 수 있습니다." },
            { title: "devOnly 가시성", body: "프로덕션에서는 숨기고 스테이징·내부 환경에서만 사용합니다." },
        ],
        quickStartLabel: "빠른 시작",
        quickStartTime: "5분",
        codeSnippet: `npm install @fivepixels-js/react react react-dom

<FivePixels
  project={{ id: "my-app" }}
  visibility={{ devOnly: true }}
/>

<button data-report-id="hero-cta">
  시작하기
</button>`,
        rollout: [
            { day: "DAY 0", title: "설치하고 한 번 마운트" },
            { day: "DAY 1", title: "검수 많은 1페이지부터" },
            { day: "DAY 2+", title: "handler와 팀 규칙 연결" },
        ],
    },
    compareSection: {
        eyebrow: "플랜",
        titleLine1: "지금 방식과 비교해도,",
        titleLine2: "설명이 짧아집니다",
        description: "추상적인 제품 언어 대신, 무엇이 바뀌는지 바로 스캔할 수 있게 비교합니다.",
        currentFlow: "지금 방식",
        fivepixels: "fivepixels",
        rows: [
            ["캡처 + 화살표", "정확한 UI 위 고정 마커"],
            ["슬랙·메일 왕복", "한 리뷰 목록에서 상태와 답변"],
            ['"저기 버튼이요"', "클릭한 요소에 코멘트"],
            ["무거운 도입 검토부터", "스테이징에 얇은 리뷰 레이어"],
            ["클라이언트 재확인 반복", "미해결만 필터해 빠르게 재검수"],
        ],
    },
    feedbackSection: {
        eyebrow: "피드백 공유",
        title: "함께 만들어 주세요",
        body: "버그를 발견했든 기능 아이디어가 있든, 의견을 들려주세요. 반영할 수 있도록 검토하겠습니다.",
        demoCta: "데모에서 피드백 보내기",
        guideCta: "설치 가이드 보기",
    },
    resourcesSection: {
        title: "관련 리소스",
        items: [
            { title: "문서 탐색", body: "가이드, 빠른 시작, 앱 전체 레퍼런스.", href: "/fivepixels/guide" },
            { title: "저장소 확인", body: "README를 살펴보고, 이슈를 등록하거나 토론에 참여하세요.", href: "/fivepixels" },
            { title: "최신 소식 받기", body: "새 기능과 수정 사항을 배포와 함께 확인하세요.", href: "/example/01" },
        ],
    },
};
