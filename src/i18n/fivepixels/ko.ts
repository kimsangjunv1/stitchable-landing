import type { FivepixelsMessages } from "@/i18n/landing/types";

export const fivepixelsKo: FivepixelsMessages = {
    panelTitles: [
        "왜 아직도 많은 사람들이\nQA툴을 도입하지 못하는걸까요?",
        "이제 3단계면 충분해요",
        "더 이상 말로 전달할 필요가 없어요",
        "다양한 기능을 지원해요",
        "다양한 방식을 지원해요",
        "개인을 위한",
        "지금 바로 QA가 필요한 대상",
        "도입 부담은 낮게, 팀 습관은 선명하게",
        "도입 전 자주 묻는 질문",
    ],
    intro: {
        headline: ["다 같이,", "화면에서 바로 피드백"],
        announcement: "5월 29일: 솔루션 페이지 3개를 추가했습니다",
        bodyLine1: "검수하는 화면에서 바로 남기세요.",
        bodyHighlight: "가볍게",
        bodyLine2: "시작하고, 클릭한 위치에 고정하고, 필요할 때만 이슈로 넘깁니다.",
        demoCta: "2분 데모 보기",
        guideCta: "5분 가이드",
    },
    pain: {
        eyebrow: "WHY TEAMS MISS THINGS",
        titleLine1: "너무 어려운",
        titleLine2: "학습 곡선",
        bodyLine1: "팀에 도입하기 위해 도입한 QA툴이",
        bodyLine2: "다시 병목을 일으켜 도입을 포기하게됨",
        cards: [
            {
                eyebrow: "01 / CONTEXT",
                title: "피드백이 화면에서 떨어집니다.",
                description: "캡처와 메신저로 옮겨가는 순간, 정확히 어디 이야기였는지 빠르게 흐려집니다.",
            },
            {
                eyebrow: "02 / REVIEW",
                title: '"몇 번째 버튼?"가 반복됩니다.',
                description: "마커가 없으면 검수 라운드마다 다시 찾고 다시 설명하는 일부터 시작됩니다.",
            },
            {
                eyebrow: "03 / SETUP",
                title: "무거운 QA 도입은 늘 미뤄집니다.",
                description: "도입 프로젝트가 커 보이면, 정작 필요한 검수 흐름은 다음 배포로 계속 밀립니다.",
            },
            {
                eyebrow: "04 / HANDOFF",
                title: "클라이언트 피드백이 모호합니다.",
                description: "제품 화면 위 코멘트 한 번이, 설명이 길어진 주석 메시지보다 훨씬 빠르게 통합니다.",
            },
        ],
    },
    howItWorks: {
        steps: [
            {
                number: "01",
                title: "스테이징을 엽니다",
                description: "팀이 이미 공유하던 검수 화면 그대로 시작합니다.",
            },
            {
                number: "02",
                title: "클릭해 남깁니다",
                description: "메신저 스레드 대신, 클릭한 위치에 코멘트를 바로 고정합니다.",
            },
            {
                number: "03",
                title: "확인하고 해결합니다",
                description: "답변, 상태 변경, 재검수를 한 흐름 안에서 이어갑니다.",
            },
        ],
    },
    uiEdit: {
        beforeLabel: "BEFORE",
        beforeTitle: "채팅 루프",
        beforeEyebrow: "CHAT LOOP",
        afterLabel: "AFTER",
        afterTitleLine1: "화면에서 바로",
        afterTitleLine2: "before / after 합의",
        afterEyebrow: "DIRECT MARKER",
        searchPlaceholder: "Stitchable 검색",
        channelName: "# project-eagle",
        channelTopic: "선택 주제",
        today: "오늘",
        newLabel: "새 메시지",
        messages: [
            {
                id: "jessy-1",
                author: "Jessy",
                time: "오후 5:14",
                avatar: { bg: "#e8912d", label: "J" },
                body: "@Mark UiEditSection.tsx message 영역 Slack 디자인이 너무 엉망이에요. 스크린샷 보내드렸어요.",
            },
            {
                id: "mark-1",
                author: "Mark",
                time: "오후 5:18",
                avatar: { bg: "#4a90d9", label: "M" },
                body: "스크린샷 확인했는데, 수정할 부분을 못 찾겠어요.",
                thread: "답글 2개 · 마지막 답글 오늘 오후 5:18",
            },
            {
                id: "jessy-2",
                author: "Jessy",
                time: "오후 5:21",
                avatar: { bg: "#e8912d", label: "J" },
                body: "스크린샷처럼 Slack 스타일 스켈레톤 만들어서 내용만 바꿔주세요.",
                isNew: true,
            },
            {
                id: "mark-2",
                author: "Mark",
                time: "오후 5:23",
                avatar: { bg: "#4a90d9", label: "M" },
                body: "정확히 어느 위치인지 알려주시면 바로 수정할게요.",
            },
        ],
    },
    features: [
        {
            icon: "ads_click",
            title: "한 번 클릭 피드백",
            description: '"몇 번째" 설명 없이 요소에 바로 남김',
        },
        {
            icon: "location_searching",
            title: "위치 고정 표시",
            description: "다시 열어도 같은 위치를 자동 인식",
        },
        {
            icon: "chat",
            title: "화면 위 코멘트",
            description: "별도 앱 이동 없이 검수/논의 진행",
        },
        {
            icon: "forum",
            title: "실시간 답변과 확인",
            description: "답변, 확인, 해결이 한 흐름에 표시",
        },
        {
            icon: "edit",
            title: "UI 직접 조정",
            description: "텍스트, 여백, 색상, 정렬 등 화면에서 바로 수정",
        },
        {
            icon: "compare",
            title: "Before / After",
            description: "변경 전후 상태를 한눈에 확인",
        },
        {
            icon: "hourglass_top",
            title: "합의 시간 단축",
            description: "구두설명 → 시각화로 커뮤니케이션 속도 향상",
        },
        {
            icon: "assignment_turned_in",
            title: "정확한 의사전달",
            description: "모호한 피드백 없이 바로 반영",
        },
        {
            icon: "input",
            title: "스테이징 바로 적용",
            description: "별도 SaaS나 QA앱 도입 없이 현재 화면에 붙임",
        },
        {
            icon: "lightbulb",
            title: "학습 곡선 최소화",
            description: "남기기/보기 두 모드로 누구나 바로 사용",
        },
        {
            icon: "rocket_launch",
            title: "0.5일 도입",
            description: "React 앱에 반나절 만에 장착 가능",
        },
        {
            icon: "person_pin",
            title: "클라이언트 안내문",
            description: "/guides/client로 의뢰인도 빠르게 검수 참여",
        },
        {
            icon: "code",
            title: "Shadow DOM 지원",
            description: "호스트 CSS 영향 없이 독립 스타일 적용",
        },
        {
            icon: "sd_storage",
            title: "localStorage 체험",
            description: "백엔드 없이 브라우저 저장만으로 시연 가능",
        },
        {
            icon: "filter_1",
            title: "점진적 도입",
            description: "필요한 몇 개 요소만 data-report-id 지정, 전체 태깅 불필요",
        },
        {
            icon: "lock_open",
            title: "devOnly 설정",
            description: "`visibility.devOnly` 옵션으로 실제 배포 전 제한 가능",
        },
    ],
    developerRelief: {
        tabAriaLabel: "도입 방식",
        guideLink: "설치 가이드",
        steps: [
            {
                id: "solo",
                tabLabel: "백엔드 없이 혼자 사용하기",
                eyebrow: "FOR SOLO",
                title: "설치 한 번이면 끝",
                description: "API나 서버 없이 개인적으로도 사용 가능합니다",
                code: `// 1) 설치
npm install @fivepixels-js/react react react-dom

// 2) 앱 루트에 한 번
<FivePixels
  project={{ id: "my-app" }}
  visibility={{ devOnly: true }}
/>

// 3) 남기고 싶은 요소에만 (선택)
<button data-report-id="hero-cta">
  시작하기
</button>`,
                highlights: [
                    {
                        title: "사이드 프로젝트 메모",
                        detail: "화면 위치에 바로 코멘트를 남기고, 나중에 같은 자리를 다시 찾을 수 있습니다.",
                    },
                    {
                        title: "스테이징 1페이지만",
                        detail: "검수가 많은 페이지 하나에만 data-report-id를 붙여 가볍게 시작합니다.",
                    },
                    {
                        title: "프로덕션에는 숨기기",
                        detail: "devOnly로 내부·스테이징에서만 켜고, 라이브에는 노출하지 않습니다.",
                    },
                ],
                showGuideLink: true,
            },
            {
                id: "team",
                tabLabel: "백엔드 없이 팀과 협업하기",
                eyebrow: "FOR FE TEAMS",
                title: "서버가 없어도 협업이 가능해요",
                description:
                    "백엔드가 없어도 스테이징에서 피드백을 남기고, JSON import/export 파일로 팀원과 넘길 수 있습니다.",
                note: "* 실시간 동기화가 아니라 파일로 넘기는 협업입니다.\n그래서 백엔드 없이도 QA가 가능합니다.",
                code: `// handler 없이 = localStorage 저장
<FivePixels
  project={{ id: "my-app", env: "stage" }}
/>

// 설정 패널에서
// · 데이터 보내기 (JSON 다운로드)
// · 데이터 가져오기 (파일 / 드래그앤드롭)`,
                highlights: [
                    {
                        title: "FE만 있는 스타트업",
                        detail: "백엔드 인력 없이도 스테이징에서 디자이너·PM과 검수를 시작할 수 있습니다.",
                    },
                    {
                        title: "팀원과 파일 공유",
                        detail: "A가 보내기 → B가 가져오기로 같은 피드백 목록을 이어서 봅니다.",
                    },
                    {
                        title: "클라이언트·외부 검수",
                        detail: "JSON 파일 하나로 외부 검수 결과를 전달할 수 있습니다.",
                    },
                ],
            },
            {
                id: "api",
                tabLabel: "API 연동과 함께 팀과 협업하기",
                eyebrow: "FOR PRODUCT TEAMS",
                title: "우리 인프라에 연결",
                description: "팀이 커지면 handler로 API·GitHub·알림 채널에 연결합니다. serverless만 있어도 시작할 수 있어요.",
                code: `<FivePixels
  project={{ id: "my-app", env: "stage" }}
  onList={fetchFeedbacks}
  onCreate={createFeedback}
  onUpdate={updateFeedback}
  onEvent={(event) => notifyTeam(event)}
  github={{
    enabled: true,
    modes: ["on-create", "from-list"],
    onCreate: createGitHubIssue,
  }}
/>`,
                highlights: [
                    {
                        title: "자체 REST API",
                        detail: "onList / onCreate / onUpdate로 기존 백엔드와 바로 연동합니다.",
                    },
                    {
                        title: "GitHub Issue",
                        detail: "피드백을 Issue로 올리고, 스레드에 링크를 남깁니다.",
                    },
                    {
                        title: "Slack·노션 알림",
                        detail: "onEvent로 생성·답변·해결 이벤트를 팀 채널로 보낼 수 있습니다.",
                    },
                ],
            },
        ],
    },
    compare: {
        beforeHeader: "지금 방식",
        afterHeader: "fivepixels",
        rows: [
            ["캡처 + 화살표", "화면 위 마커로 위치 고정"],
            ["슬랙·메일 왕복", "목록에서 상태와 답변 확인"],
            ['"저기 버튼이요"', "클릭한 요소에 코멘트"],
            ["무거운 도입 검토부터", "스테이징에 가볍게 붙이기"],
            ["클라이언트 재확인 반복", "미해결만 필터해 재검수"],
        ],
    },
    audience: {
        cards: [
            {
                title: "초기 스타트업",
                description: "대표, PM, 디자이너가 직접 검수하고 피드백이 자주 구두로 흩어지는 팀.",
            },
            {
                title: "체계 안 잡힌 팀",
                description: "도구는 있어도 규칙이 없어 같은 이슈를 여러 채널에서 반복 설명하는 팀.",
            },
            {
                title: "프리랜서",
                description: '클라이언트의 "조금만 수정" 요청을 화면 위에서 바로 고정해 받고 싶은 경우.',
            },
            {
                title: "도입 여유 없는 팀",
                description: "새 QA 앱 학습과 온보딩이 배포 자체보다 더 크게 느껴지는 팀.",
            },
        ],
    },
    adoption: {
        whyEyebrow: "WHY IT FEELS LIGHT",
        reasons: [
            {
                label: "별도 QA 앱 불필요",
                detail: "팀이 이미 공유하던 스테이징 URL에서 그대로 검수가 이뤄집니다.",
            },
            {
                label: "MIT, 가벼운 시작",
                detail: "좌석 수나 시트 제한보다, 필요한 만큼 작게 붙여 시작하는 쪽에 가깝습니다.",
            },
            {
                label: "로컬 먼저 체험",
                detail: "전체 persistence를 붙이기 전에도 localStorage 기반 흐름을 먼저 확인할 수 있습니다.",
            },
            {
                label: "클라이언트 안내 가능",
                detail: "짧은 안내문만 있어도 외부 검수자가 바로 남기기 시작할 수 있습니다.",
            },
        ],
        rolloutEyebrow: "1 WEEK ROLLOUT TASTE",
        rolloutSteps: [
            {
                day: "DAY 0",
                title: "설치하고 한 번 마운트",
                description: "앱 루트에 붙이고 visibility.devOnly로 검수 환경에서만 보이게 둡니다.",
            },
            {
                day: "DAY 1",
                title: "검수 많은 1페이지부터",
                description: "전체 앱 태깅 대신 반복 피드백이 많은 화면 하나에만 data-report-id를 붙입니다.",
            },
            {
                day: "DAY 2+",
                title: "handler와 규칙 추가",
                description: "필요할 때만 persistence, triage 규칙, 기존 이슈 흐름 연동을 더합니다.",
            },
        ],
        clientNoteEyebrow: "CLIENT NOTE",
        clientNote:
            "스테이징 링크를 열고, 수정이 필요한 위치를 클릭해 화면 위에 바로 남겨 주세요. 별도 툴 학습은 필요하지 않습니다.",
    },
    faq: [
        {
            question: "코드를 자동으로 바꿔 주나요?",
            answer: "아니요. 정확한 피드백을 남기고 확인한 뒤, 팀이 쓰던 이슈 흐름으로 넘기기 쉽게 도와주는 쪽에 가깝습니다.",
        },
        {
            question: "클라이언트도 바로 쓸 수 있나요?",
            answer: "네. 보고 있던 제품 화면 위에서 바로 남기기 때문에, 스테이징 검수에서 특히 자연스럽게 동작합니다.",
        },
        {
            question: "처음부터 백엔드가 필요한가요?",
            answer: "꼭 그렇진 않습니다. 먼저 localStorage 흐름으로 체험하고, 공유 persistence가 필요해질 때 handler를 연결하면 됩니다.",
        },
        {
            question: "최초 세팅은 어느 정도인가요?",
            answer: "설치하고, 한 번 마운트하고, 검수 많은 영역 하나에만 태그를 붙이는 작은 시작을 기준으로 잡고 있습니다.",
        },
    ],
    openSource: {
        title: "Free & Open Source",
        bodyLine1: "fivepixels는 무료 오픈소스입니다. 별도 QA SaaS를 또 배우기보다,",
        bodyLine2: "지금 쓰는 제품 화면 위에 검수 레이어를 얇게 더하는 쪽을 지향합니다.",
        cta: "contribute",
        broughtBy: "BROUGHT BY CODI",
        handle: "@kimsangjunv1",
        profileAlt: "Codi profile",
    },
};
