/** Public site URL used for canonical links, Open Graph, and sitemap. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://library.codi-agit.com";

export const SITE_NAME = "fivepixels";

export const SITE_DESCRIPTION =
    "A DOM-aware feedback layer for QA, staging, and internal tools. Leave feedback on real DOM elements, restore markers after UI changes, and review issues without screenshots.";

export const SITE_DESCRIPTION_KO =
    "스테이징·QA·내부 도구 화면에서 DOM 요소 단위 피드백을 남기는 React 라이브러리. UI 변경 후에도 마커를 복원하고 GitHub Issue로 승격할 수 있습니다.";

/** Public search indexing is enabled by default; set to "false" to block crawlers. */
export const ALLOW_SEARCH_INDEXING = process.env.NEXT_PUBLIC_ALLOW_SEARCH_INDEXING !== "false";

export const PUBLIC_ROUTES = [
    "/",
    "/fivepixels",
    "/fivepixels/guide",
    "/example/01",
    "/example/01/list",
    "/example/01/modal",
] as const;

export const GITHUB_URL = "https://github.com/kimsangjunv1/fivepixels";
