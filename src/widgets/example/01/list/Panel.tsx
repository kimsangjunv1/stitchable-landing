"use client";

import * as Layer from "@/widgets/example/01/ui";
import { Example01PageProvider } from "@/widgets/example/01/model/Example01Context";

export default function Panel() {
    return (
        <Example01PageProvider>
            <Layer.ExampleShell
                title="List with feedback markers"
                description="테이블 행·상태 뱃지·액션 버튼마다 data-report-id가 붙어 있습니다. View 모드에서 피드백 목록 패널이 함께 열립니다."
            >
                <Layer.ListDemo />
            </Layer.ExampleShell>
            <Layer.Modal />
        </Example01PageProvider>
    );
}
