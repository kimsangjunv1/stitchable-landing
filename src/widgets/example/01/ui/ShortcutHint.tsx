export function ShortcutHint() {
    return (
        <p
            className="rounded-sm border border-[#2563eb]/30 bg-[#2563eb]/8 px-[1.6rem] py-[1.2rem] text-[1.4rem] leading-[1.5] text-black/70"
            data-report-id="example-shortcut-hint"
        >
            <span data-report-id="example-shortcut-hint-report">
                우측 패널에서 <strong className="text-black">Report</strong> 모드(⌘⇧M)로 요소를 클릭해 피드백을 남겨 보세요.
            </span>{" "}
            <span data-report-id="example-shortcut-hint-view">
                <strong className="text-black">View</strong> 모드(⌘⇧L)로 저장된 마커를 확인할 수 있습니다.
            </span>
        </p>
    );
}
