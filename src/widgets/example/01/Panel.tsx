"use client";

import * as Layer from "@/widgets/example/01/ui";
import { Example01PageProvider } from "@/widgets/example/01/model/Example01Context";

export default function Panel() {
    return (
        <Example01PageProvider>
            <Layer.ExampleShell
                title="A Tool for Perfect QA"
                description="fivepixels를 설치하지 않고도 이 페이지에서 바로 DOM 피드백을 체험해 볼 수 있습니다. 버튼, 섹션, 카드 어디든 클릭해 마커를 남겨 보세요."
            >
                <Layer.MainDemo />
            </Layer.ExampleShell>
            <Layer.Modal />
        </Example01PageProvider>
    );
}
