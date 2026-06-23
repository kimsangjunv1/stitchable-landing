import type { Metadata } from "next";
import { ALLOW_SEARCH_INDEXING, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const OG_IMAGE_PATH = "/rebranding/fivepixels.png";

const NO_INDEX_ROBOTS: Metadata["robots"] = {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
    },
};

const INDEX_ROBOTS: Metadata["robots"] = {
    index: true,
    follow: true,
    googleBot: {
        index: true,
        follow: true,
    },
};

export function getRobotsMetadata(): Metadata["robots"] {
    return ALLOW_SEARCH_INDEXING ? INDEX_ROBOTS : NO_INDEX_ROBOTS;
}

type PageMetadataOptions = {
    title?: string;
    description?: string;
    path?: string;
    keywords?: string[];
};

export function createPageMetadata({
    title,
    description = SITE_DESCRIPTION,
    path = "/",
    keywords,
}: PageMetadataOptions = {}): Metadata {
    const canonicalPath = path.startsWith("/") ? path : `/${path}`;
    const defaultTitle = `${SITE_NAME} — Feedback, directly on your UI`;
    const pageTitle = title ? `${title} | ${SITE_NAME}` : defaultTitle;
    const absoluteUrl = new URL(canonicalPath, SITE_URL).toString();

    return {
        title: title
            ? title
            : {
                  default: defaultTitle,
                  template: `%s | ${SITE_NAME}`,
              },
        description,
        keywords,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: canonicalPath,
        },
        robots: getRobotsMetadata(),
        openGraph: {
            type: "website",
            locale: "en_US",
            url: absoluteUrl,
            siteName: SITE_NAME,
            title: pageTitle,
            description,
            images: [
                {
                    url: OG_IMAGE_PATH,
                    width: 1200,
                    height: 630,
                    alt: `${SITE_NAME} — DOM feedback for QA and staging`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description,
            images: [OG_IMAGE_PATH],
        },
    };
}
