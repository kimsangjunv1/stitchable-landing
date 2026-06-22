import { cookies } from "next/headers";
import { createPageMetadata } from "@/lib/seo";
import { Main } from "@/widgets/layout/Main";
import { FivepixelsGuideView } from "@/views/fivepixels/guide/FivepixelsGuideView";

export const metadata = createPageMetadata({
    title: "Documentation",
    description: "Install fivepixels and configure persistence, team workflows, and GitHub integrations.",
    path: "/fivepixels/guide",
});

export default async function FivepixelsGuidePage() {
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
