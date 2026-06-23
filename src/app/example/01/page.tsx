import { Main } from "@/widgets/layout/Main";
import { ExampleShell, MainDemo } from "@/widgets/example01";

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
            <ExampleShell
                title="A Tool for Perfect QA"
                description="fivepixels를 설치하지 않고도 이 페이지에서 바로 DOM 피드백을 체험해 볼 수 있습니다. 버튼, 섹션, 카드 어디든 클릭해 마커를 남겨 보세요."
            >
                <MainDemo />
            </ExampleShell>
        </Main>
    );
}
