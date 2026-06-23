import { Main } from "@/widgets/layout/Main";
import { ExampleShell, ModalDemo } from "@/widgets/example01";

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
            <ExampleShell
                title="Modal overlay case"
                description="모달이 열린 상태에서도 Report 모드로 내부 요소에 피드백을 남길 수 있는지 확인하는 예제입니다. z-index와 포커스 트랩 환경을 테스트해 보세요."
            >
                <ModalDemo />
            </ExampleShell>
        </Main>
    );
}
