"use client";

import * as Layer from "@/widgets/example/01/ui";
import { Example01PageProvider } from "@/widgets/example/01/model/Example01Context";

export default function Panel() {
    return (
        <Example01PageProvider>
            <Layer.ExampleShell
                title="Modal overlay case"
                description="모달이 열린 상태에서도 Report 모드로 내부 요소에 피드백을 남길 수 있는지 확인하는 예제입니다. z-index와 포커스 트랩 환경을 테스트해 보세요."
            >
                <Layer.ModalDemo />
            </Layer.ExampleShell>
            <Layer.Modal />
        </Example01PageProvider>
    );
}
