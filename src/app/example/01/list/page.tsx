import { Main } from "@/widgets/layout/Main";
import { Example01ListView } from "@/views/example/01/list/Example01ListView";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "List Example",
    description: "fivepixels list demo with data-report-id markers on table rows and action buttons.",
    path: "/example/01/list",
    keywords: ["fivepixels", "feedback list", "QA", "data-report-id"],
});

const mainClassName = {
    container: "min-h-screen bg-white text-[#050505]",
    inner: "mx-0 max-w-none px-0",
};

export default function Example01ListPage() {
    return (
        <Main
            id="example-01-list"
            className={mainClassName}
        >
            <Example01ListView />
        </Main>
    );
}
