import { cookies } from "next/headers";
import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION_KO } from "@/lib/site";
import { Main } from "@/widgets/layout/Main";
import { BackendApiGuideView } from "@/views/fivepixels/guide/BackendApiGuideView";

export const metadata = createPageMetadata({
    title: "Backend API",
    description: `${SITE_DESCRIPTION_KO} Self-host REST API reference for onList, onCreate, and onUpdate handlers.`,
    path: "/fivepixels/guide/backend-api",
    keywords: ["fivepixels", "backend API", "REST", "persistence", "self-host", "onList", "onCreate"],
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
