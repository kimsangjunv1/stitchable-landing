import { cookies } from "next/headers";
import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";
import { Main } from "@/widgets/layout/Main";
import { FivepixelsGuideView } from "@/views/fivepixels/guide/FivepixelsGuideView";

export const metadata = createPageMetadata({
    title: "Documentation",
    description: `${SITE_DESCRIPTION} Install, configure persistence, team workflows, and GitHub integrations.`,
    path: "/guide",
    keywords: ["fivepixels", "documentation", "React", "QA", "data-report-id", "GitHub Issue"],
});

export default async function GuidePage() {
    await cookies();

    return (
        <Main
            id="fivepixels-guide"
            className={{
                container: "fivepixels-guide min-h-screen bg-white text-[#050505]",
                inner: "",
            }}
        >
            <FivepixelsGuideView />
        </Main>
    );
}
