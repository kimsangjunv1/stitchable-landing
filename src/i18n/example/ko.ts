import type { ExampleMessages } from "@/i18n/landing/types";

export const exampleKo: ExampleMessages = {
    nav: [
        { id: "overview", icon: "dashboard", label: "개요", href: "/example/01" },
        { id: "issues", icon: "bug_report", label: "이슈", href: "/example/01/issues" },
        { id: "reviews", icon: "rate_review", label: "리뷰", href: "/example/01/reviews" },
        { id: "releases", icon: "rocket_launch", label: "릴리즈", href: "/example/01/releases" },
        { id: "modals", icon: "layers", label: "모달 랩", href: "/example/01/modals" },
        { id: "settings", icon: "settings", label: "설정", href: "/example/01/settings" },
    ],
    shell: {
        backLink: "라이브러리로 돌아가기",
        brand: "Pulse Board",
        workspace: "fivepixels-demo",
        createIssue: "이슈 생성",
        sidebarNote: "사이드바 메뉴는 실제 라우트로 이동합니다. Create issue는 전역 모달을 엽니다.",
        searchPlaceholder: "이슈, 태그, 담당자 검색...",
        filter: "필터",
        profile: "Sangjun",
        navAriaLabel: "대시보드 내비게이션",
    },
    shortcutHint: {
        report: "우측 패널에서 Report 모드(⌘⇧M)로 요소를 클릭해 피드백을 남겨 보세요.",
        view: "View 모드(⌘⇧L)로 저장된 마커를 확인할 수 있습니다.",
    },
    overview: {
        stats: [
            { label: "열린 이슈", delta: "오늘 +3" },
            { label: "스테이징된 피드백", delta: "검토 대기 5건" },
            { label: "이번 주 해결", delta: "지난주 대비 +12%" },
        ],
        kanban: [
            {
                column: "할 일",
                cards: [
                    { title: "모바일 히어로 간격", tag: "BUG" },
                    { title: "온보딩 문구 업데이트", tag: "COPY" },
                    { title: "다크 모드 토글 대비", tag: "A11Y" },
                ],
            },
            {
                column: "검토 중",
                cards: [
                    { title: "모달 z-index 겹침", tag: "BUG" },
                    { title: "테이블 행 호버 상태", tag: "UI" },
                ],
            },
            {
                column: "완료",
                cards: [
                    { title: "단축키 안내 문구", tag: "COPY" },
                    { title: "필터 버튼 정렬", tag: "UI" },
                ],
            },
        ],
        activityTitle: "최근 활동",
        activities: [
            "Kim이 Sidebar nav item에 피드백을 남김 · 2분 전",
            "Lee가 Kanban card #card-06을 해결함 · 18분 전",
            "Park이 Search input에 BUG 태그를 추가함 · 1시간 전",
            "Choi가 Modal overlay case를 검토 중으로 이동함 · 3시간 전",
            "Jung이 Dashboard scroll area에 댓글을 남김 · 5시간 전",
            "Han이 New issue form 모달을 열음 · 어제",
        ],
    },
    issues: {
        eyebrow: "ISSUES",
        title: "이슈 트래커",
        description:
            "테이블·필터·액션 버튼과 함께 Issues 전용 모달 케이스(display:none, 가로 스크롤)를 테스트할 수 있습니다.",
        openDetail: "display:none 이슈 상세 열기",
        openModal: "가로 스크롤 이슈 모달 열기",
    },
    reviews: {
        eyebrow: "REVIEWS",
        title: "대기 중인 리뷰",
        description: "리뷰 승인 흐름과 함께 opacity·zustand 모달 케이스를 섞어 두었습니다.",
        items: [
            { title: "모달 z-index 겹침", author: "Lee", status: "QA 대기" },
            { title: "사이드바 활성 상태", author: "Kim", status: "문구 수정 필요" },
            { title: "칸반 카드 호버", author: "Park", status: "배포 준비 완료" },
            { title: "알림 벨 배지", author: "Choi", status: "차단됨" },
        ],
        requestChanges: "수정 요청",
        approve: "승인",
        openModal: "opacity 승인 모달 열기",
    },
    releases: {
        eyebrow: "RELEASES",
        title: "릴리즈 노트",
        description: "릴리즈 상세 보기를 눌러 세로 스크롤 모달을 열고 Report 마커를 테스트해 보세요.",
        items: [
            { version: "v2.4.0", summary: "칸반 드래그 미리보기 및 마커 지속성 수정" },
            { version: "v2.3.2", summary: "중첩 스크롤 컨테이너 내 모달 레이어링 개선" },
            { version: "v2.3.0", summary: "대시보드 활동 피드 및 빠른 작업 롤아웃" },
            { version: "v2.2.1", summary: "사이드바 라우팅 및 모달 랩 통합" },
        ],
        viewChangelog: "변경 로그 보기",
    },
    settings: {
        eyebrow: "SETTINGS",
        title: "워크스페이스 설정",
        description: "토글·입력·저장 버튼 등 폼 요소에 Report 마커를 남겨 보세요.",
        toggles: [
            {
                label: "이메일 알림",
                description: "이슈가 나에게 할당되면 업데이트를 받습니다.",
            },
            {
                label: "마커 유지",
                description: "데모 내 라우트 변경 후에도 피드백 마커를 유지합니다.",
            },
            {
                label: "키보드 단축키",
                description: "Report 모드 빠른 작업을 활성화합니다.",
            },
        ],
        webhookLabel: "웹훅 URL",
        webhookPlaceholder: "https://hooks.example.com/qa",
        save: "변경 사항 저장",
    },
    modalsLab: {
        eyebrow: "MODAL LAB",
        title: "모달 엣지 케이스",
        description:
            "Report 도구가 잘 못 잡을 것 같은 DOM 패턴을 한곳에 모았습니다. 페이지 이동 후에도 zustand·opacity 모달 상태를 유지해 보세요.",
        cases: [
            {
                title: "Zustand boolean",
                description: "전역 스토어 open 상태로 마운트/언마운트",
                technique: "conditional render",
            },
            {
                title: "Opacity",
                description: "DOM 유지 + opacity/pointer-events 토글",
                technique: "opacity-0",
            },
            {
                title: "Display none",
                description: "열릴 때만 DOM에 존재",
                technique: "hidden / unmount",
            },
            {
                title: "Visibility hidden",
                description: "invisible 클래스로 시각만 숨김",
                technique: "visibility",
            },
            {
                title: "Transform off-screen",
                description: "translate로 화면 밖 이동",
                technique: "transform",
            },
            {
                title: "Vertical scroll",
                description: "모달 본문 세로 스크롤",
                technique: "overflow-y-auto",
            },
            {
                title: "Horizontal scroll",
                description: "넓은 테이블 가로 스크롤",
                technique: "overflow-x-auto",
            },
            {
                title: "Nested scroll overlay",
                description: "오버레이 자체가 스크롤되는 케이스",
                technique: "overlay scroll",
            },
            {
                title: "Nested modal stack",
                description: "모달 위 모달 2단",
                technique: "z-index stack",
            },
            {
                title: "Inline positioned",
                description: "fixed 없이 부모 컨테이너 안 배치",
                technique: "absolute in scroll",
            },
        ],
        openModal: "모달 열기",
        hostTitle: "인라인 모달 호스트 (스크롤 컨테이너)",
        hostDescription:
            "fixed 포털 없이 이 스크롤 영역 안에서 absolute로 띄운 모달입니다. 배경 스크롤과 겹치는 케이스를 재현합니다.",
        close: "닫기",
        fillerTitle: "인라인 배치 모달",
        fillerDescription: "viewport fixed가 아니라 부모 스크롤 컨테이너 기준으로 배치됩니다.",
    },
    listDemo: {
        eyebrow: "FEEDBACK LIST",
        title: "오늘의 이슈",
        filter: "필터",
        headers: ["이슈", "상태", "태그", "담당자", "작업"],
        rows: [
            {
                issue: "히어로 CTA 정렬",
                status: "STAGED",
                tag: "IMPORTANT",
                author: "Kim",
                action: "검토",
            },
            {
                issue: "모달 z-index 겹침",
                status: "OPEN",
                tag: "BUG",
                author: "Lee",
                action: "검토",
            },
            {
                issue: "테이블 행 호버 상태",
                status: "STAGED",
                tag: "BUG",
                author: "Park",
                action: "검토",
            },
            {
                issue: "단축키 안내 문구",
                status: "RESOLVED",
                tag: "IMPORTANT",
                author: "Choi",
                action: "검토",
            },
            {
                issue: "모바일 내비 간격",
                status: "OPEN",
                tag: "IMPORTANT",
                author: "Jung",
                action: "검토",
            },
        ],
    },
    createIssue: {
        eyebrow: "NEW ISSUE",
        title: "이슈 신고",
        close: "닫기",
        formTitle: "제목",
        formDescription: "설명",
        titlePlaceholder: "예: 태블릿에서 사이드바 겹침",
        descriptionPlaceholder: "발견한 내용을 설명해 주세요...",
        tags: ["BUG", "COPY", "IMPORTANT"],
        submit: "이슈 생성",
        cancel: "취소",
    },
    fivePixels: {
        messageLabel: "메시지",
        bugLabel: "bug",
        importantLabel: "IMPORTANT",
    },
};
