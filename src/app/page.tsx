import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";
import { Main } from "@/widgets/layout/Main";
import { FivepixelsView } from "@/views/fivepixels/FivepixelsView";

export const metadata = createPageMetadata({
    description: SITE_DESCRIPTION,
    path: "/",
    keywords: [
        "fivepixels",
        "@fivepixels-js/react",
        "QA tool",
        "DOM feedback",
        "DOM markers",
        "React library",
        "staging review",
        "open source",
    ],
});

const mainClassName = {
    container: "min-h-screen bg-[var(--adaptive-background)] text-[var(--adaptive-text-primary)]",
    inner: "mx-0 max-w-none px-0",
};

export default function Page() {
    return (
        <Main
            id="fivepixels"
            className={mainClassName}
        >
            <FivepixelsView />
        </Main>
    );
}
