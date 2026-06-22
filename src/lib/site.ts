/** Public site URL used for canonical links, Open Graph, and sitemap. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stitchable.dev";

export const SITE_NAME = "Stitchable";

export const SITE_DESCRIPTION =
    "A DOM-aware feedback layer for QA, staging, and internal tools. Leave feedback on real DOM elements, restore markers after UI changes, and review issues without screenshots.";

/**
 * Flip to `true` (NEXT_PUBLIC_ALLOW_SEARCH_INDEXING=true) when the library is
 * ready for public search indexing.
 */
export const ALLOW_SEARCH_INDEXING = process.env.NEXT_PUBLIC_ALLOW_SEARCH_INDEXING === "true";

export const PUBLIC_ROUTES = ["/", "/fivepixels", "/fivepixels/guide"] as const;
