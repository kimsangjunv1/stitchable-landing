import type { LayoutMessages } from "@/i18n/landing/types";

export const layoutKo: LayoutMessages = {
    banner: "이 라이브러리는 현재 개발 중입니다.",
    header: {
        installGuide: "설치 가이드",
        homeAriaLabel: "agit 라이브러리 홈",
        navAriaLabel: "주요 내비게이션",
    },
    footer: {
        home: {
            brand: "fivepixels",
            description:
                "스테이징 화면 위에서 피드백을 모으고, 팀이 같은 맥락으로 끝까지 따라갈 수 있게 돕는 React 리뷰 레이어입니다.",
            product: "제품",
            explore: "탐색",
            builtBy: "제작",
            links: {
                forDevelopers: "개발자용",
                compare: "비교",
                resources: "리소스",
                overview: "개요",
                guide: "가이드",
                demo: "데모",
            },
            builtByCopy:
                "Mona Sans와 `#F6572E` 브랜드 시스템을 기반으로, 더 가벼운 QA 협업을 위해 설계·개발되었습니다.",
            copyright: "© 2026 fivepixels. 스테이징 팀을 위한 미니멀 리뷰 서피스.",
            tagline: "화면 위에서 바로 남기는 피드백",
        },
        site: {
            codi: "CODI",
            handle: "@kimsangjunv1",
            developedBy: "Developed and Designed by",
            author: "kimsangjun",
            currentLibrary: "current available library",
            libraries: "agit.\nfivepixels.",
            githubAria: "GitHub",
            linkedInAria: "LinkedIn",
            logoAlt: "fivepixels",
        },
    },
    megaMenus: [
        {
            id: "main",
            label: "MAIN",
            href: "/",
            groups: [
                {
                    eyebrow: "EXPLORE",
                    title: "제품 소개",
                    links: [
                        { label: "소개", description: "fivepixels가 해결하는 검수 Pain", href: "/#intro", icon: "home" },
                        { label: "Pain 포인트", description: "캡처·메신저·도입 부담", href: "/#pain", icon: "sentiment_dissatisfied" },
                        { label: "3단계 흐름", description: "스테이징 → 클릭 → 해결", href: "/#how-it-works", icon: "checklist" },
                    ],
                },
                {
                    eyebrow: "FEATURES",
                    title: "핵심 기능",
                    links: [
                        { label: "UI Edit", description: "화면에서 before / after 합의", href: "/#ui-edit", icon: "edit" },
                        { label: "기능 목록", description: "피드백·시안·도입 기능", href: "/#setup", icon: "grid_view" },
                        { label: "개발자 안심", description: "반나절 도입·코드 스니펫", href: "/#developers", icon: "code" },
                    ],
                },
                {
                    eyebrow: "COMPARE",
                    title: "비교 · 도입",
                    links: [
                        { label: "지금 방식 vs", description: "캡처·슬랙 대비", href: "/#compare", icon: "compare_arrows" },
                        { label: "대상 팀", description: "스타트업·프리랜서·소규모 팀", href: "/#audience", icon: "groups" },
                        { label: "도입 가이드", description: "Day 0부터 확장까지", href: "/#adoption", icon: "rocket_launch" },
                    ],
                },
                {
                    eyebrow: "MORE",
                    title: "더 보기",
                    links: [
                        { label: "FAQ", description: "도입 전 자주 묻는 질문", href: "/#faq", icon: "help" },
                        { label: "Open Source", description: "MIT · 무료 오픈소스", href: "/#open-source", icon: "code_blocks" },
                    ],
                    viewAll: { label: "전체 페이지 보기", description: "fivepixels 랜딩으로", href: "/", icon: "arrow_forward" },
                },
            ],
        },
        {
            id: "guide",
            label: "GUIDE",
            href: "/guide",
            groups: [
                {
                    eyebrow: "QUICK START",
                    title: "빠른 시작",
                    links: [
                        { label: "Install", description: "npm install", href: "/guide#install", icon: "download" },
                        { label: "Mount", description: "<FivePixels /> 마운트", href: "/guide#quick-start", icon: "widgets" },
                        { label: "Mark elements", description: "data-report-id 붙이기", href: "/guide#mark-elements", icon: "ads_click" },
                        { label: "First feedback", description: "첫 피드백 남기기", href: "/guide#first-feedback", icon: "chat" },
                    ],
                },
                {
                    eyebrow: "OVERVIEW",
                    title: "개요",
                    links: [
                        { label: "Getting started", description: "전체 흐름 이해", href: "/guide#getting-started", icon: "flag" },
                        { label: "UI modes", description: "남기기 / 보기 모드", href: "/guide#ui-modes", icon: "toggle_on" },
                        { label: "Full example", description: "완성 예제 코드", href: "/guide#full-example", icon: "integration_instructions" },
                    ],
                },
                {
                    eyebrow: "CONFIG",
                    title: "설정",
                    links: [
                        { label: "Configuration", description: "project · visibility · handler", href: "/guide#config", icon: "tune" },
                        { label: "Keyboard shortcuts", description: "단축키", href: "/guide#keyboard-shortcuts", icon: "keyboard" },
                        { label: "Persistence", description: "localStorage · 팀 저장", href: "/guide#persistence-choice", icon: "sd_storage" },
                    ],
                },
                {
                    eyebrow: "DEEP DIVE",
                    title: "아키텍처 · 협업",
                    links: [
                        { label: "UI architecture", description: "Shadow DOM 구조", href: "/guide#ui-architecture", icon: "account_tree" },
                        { label: "GitHub 연동", description: "Issue로 넘기기", href: "/guide#github", icon: "merge" },
                        { label: "Backend API", description: "서버 persistence", href: "/guide/backend-api", icon: "dns" },
                    ],
                    viewAll: { label: "가이드 전체 보기", description: "문서 홈으로", href: "/guide", icon: "arrow_forward" },
                },
            ],
        },
        {
            id: "examples",
            label: "EXAMPLES",
            href: "/example/01",
            groups: [
                {
                    eyebrow: "DASHBOARD",
                    title: "라이브 데모",
                    links: [
                        { label: "Overview", description: "대시보드 · 칸반 · 활동", href: "/example/01", icon: "dashboard" },
                        { label: "Issues", description: "이슈 목록 · 모달", href: "/example/01/issues", icon: "bug_report" },
                        { label: "Reviews", description: "검수 피드백 흐름", href: "/example/01/reviews", icon: "rate_review" },
                    ],
                },
                {
                    eyebrow: "LABS",
                    title: "실험 페이지",
                    links: [
                        { label: "Releases", description: "릴리즈 노트 UI", href: "/example/01/releases", icon: "rocket_launch" },
                        { label: "Modal Lab", description: "모달 엣지 케이스", href: "/example/01/modals", icon: "layers" },
                        { label: "Settings", description: "설정 · 웹훅", href: "/example/01/settings", icon: "settings" },
                    ],
                    viewAll: { label: "데모 열기", description: "fivepixels가 붙은 앱", href: "/example/01", icon: "arrow_forward" },
                },
            ],
        },
    ],
};
