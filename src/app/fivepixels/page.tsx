import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";
import { Main } from "@/widgets/layout/Main";
import { FivepixelsView } from "@/views/fivepixels/FivepixelsView";

export const metadata = createPageMetadata({
    title: "Overview",
    description: SITE_DESCRIPTION,
    path: "/fivepixels",
    keywords: ["fivepixels", "@fivepixels-js/react", "QA tool", "DOM markers", "React library"],
});

const mainClassName = {
    container: "min-h-screen bg-white text-[#050505]",
    inner: "mx-0 max-w-none px-0",
};

export default function FivepixelsPage() {
    return (
        <Main
            id="fivepixels"
            className={mainClassName}
        >
            <FivepixelsView />
        </Main>
    );
}
