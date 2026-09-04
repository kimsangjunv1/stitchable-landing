import { cookies } from "next/headers";
import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";
import { Main } from "@/widgets/layout/Main";
import { BackendApiGuideView } from "@/views/fivepixels/guide/BackendApiGuideView";

export const metadata = createPageMetadata({
    title: "Backend API",
    description: `${SITE_DESCRIPTION} Self-host REST API reference (v2) for comments, cases, replies, and team reviewers.`,
    path: "/guide/backend-api",
    keywords: [
        "fivepixels",
        "backend API",
        "REST",
        "persistence",
        "self-host",
        "onList",
        "onCreate",
        "onListReplies",
        "cases",
    ],
});

export default async function BackendApiGuidePage() {
    await cookies();

    return (
        <Main
            id="fivepixels-backend-api-guide"
            className={{
                container: "fivepixels-guide min-h-screen bg-white text-[#050505]",
                inner: "",
            }}
        >
            <BackendApiGuideView />
        </Main>
    );
}
