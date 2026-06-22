import { Main } from "@/widgets/layout/Main";
import { FivepixelsView } from "@/views/fivepixels/FivepixelsView";

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
