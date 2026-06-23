import { Main } from "@/widgets/layout/Main";
import { ExampleShell, ListDemo } from "@/widgets/example01";

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
            <ExampleShell
                title="List with feedback markers"
                description="테이블 행·상태 뱃지·액션 버튼마다 data-report-id가 붙어 있습니다. View 모드에서 피드백 목록 패널이 함께 열립니다."
            >
                <ListDemo />
            </ExampleShell>
        </Main>
    );
}
