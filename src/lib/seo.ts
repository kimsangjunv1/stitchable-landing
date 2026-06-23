import type { Metadata } from "next";
import { ALLOW_SEARCH_INDEXING, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

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
};

export function createPageMetadata({ title, description = SITE_DESCRIPTION, path = "/" }: PageMetadataOptions = {}): Metadata {
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
                    url: "/favicon.ico",
                    width: 512,
                    height: 512,
                    alt: SITE_NAME,
                },
            ],
        },
        twitter: {
            card: "summary",
            title: pageTitle,
            description,
            images: ["/favicon.ico"],
        },
    };
}
