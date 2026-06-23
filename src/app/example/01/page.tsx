import { Main } from "@/widgets/layout/Main";
import { Example01View } from "@/views/example/01/Example01View";
import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION_KO } from "@/lib/site";

export const metadata = createPageMetadata({
    title: "Example",
    description: `${SITE_DESCRIPTION_KO} Install-free interactive demo for DOM feedback markers.`,
    path: "/example/01",
    keywords: ["fivepixels", "example", "QA demo", "DOM feedback", "React"],
});

const mainClassName = {
    container: "min-h-screen bg-white text-[#050505]",
    inner: "mx-0 max-w-none px-0",
};

export default function Example01Page() {
    return (
        <Main
            id="example-01"
            className={mainClassName}
        >
            <Example01View />
        </Main>
    );
}
