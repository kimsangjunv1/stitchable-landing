import { Main } from "@/widgets/layout/Main";
import { Example01ModalView } from "@/views/example/01/modal/Example01ModalView";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Modal Example",
    description: "fivepixels modal overlay demo — leave feedback on elements inside an open dialog.",
    path: "/example/01/modal",
    keywords: ["fivepixels", "modal", "QA", "z-index", "focus trap"],
});

const mainClassName = {
    container: "min-h-screen bg-white text-[#050505]",
    inner: "mx-0 max-w-none px-0",
};

export default function Example01ModalPage() {
    return (
        <Main
            id="example-01-modal"
            className={mainClassName}
        >
            <Example01ModalView />
        </Main>
    );
}
