"use client";

import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { type ModalLabId, useModalLabStore } from "@/widgets/example/01/model/useModalLabStore";

function LabModalFrame({
    id,
    title,
    description,
    onClose,
    children,
    className,
    overlayClassName,
    alwaysMounted = false,
    open,
}: {
    id: ModalLabId;
    title: string;
    description: string;
    onClose: () => void;
    children: ReactNode;
    className?: string;
    overlayClassName?: string;
    alwaysMounted?: boolean;
    open: boolean;
}) {
    if (!alwaysMounted && !open) {
        return null;
    }

    return (
        <div
            className={cn(
                "fixed inset-0 z-[92] flex items-center justify-center bg-black/55 p-[1.6rem]",
                !open && alwaysMounted && "pointer-events-none opacity-0",
                overlayClassName,
            )}
            data-report-id={`example-modal-lab-overlay-${id}`}
            onClick={open ? onClose : undefined}
            role="presentation"
            aria-hidden={!open}
        >
            <div
                className={cn(
                    "w-full max-w-[52rem] overflow-hidden border border-black/10 bg-white shadow-[0_24px_48px_rgba(0,0,0,0.2)]",
                    className,
                )}
                data-report-id={`example-modal-lab-dialog-${id}`}
                data-report-type="group"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal={open}
                aria-labelledby={`example-modal-lab-title-${id}`}
            >
                <div className="flex items-start justify-between gap-[1.2rem] border-b border-black/8 bg-[#1e293b] px-[2rem] py-[1.4rem] text-white">
                    <div>
                        <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.1rem] text-white/60">{id}</p>
                        <h2
                            className="text-[2rem] font-semibold"
                            id={`example-modal-lab-title-${id}`}
                        >
                            {title}
                        </h2>
                        <p className="mt-[0.6rem] text-[1.3rem] text-white/70">{description}</p>
                    </div>
                    <button
                        className="shrink-0 border border-white/30 px-[1rem] py-[0.6rem] text-[1.2rem]"
                        data-report-id={`example-modal-lab-close-${id}`}
                        onClick={onClose}
                        type="button"
                    >
                        Close
                    </button>
                </div>
                <div
                    className="p-[2rem]"
                    data-report-id={`example-modal-lab-body-${id}`}
                    data-report-type="group"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

const wideColumns = Array.from({ length: 12 }, (_, index) => `Column ${index + 1}`);

const longParagraphs = Array.from({ length: 18 }, (_, index) => ({
    id: `paragraph-${index + 1}`,
    text: `Scroll test paragraph ${index + 1}. Nested containers, sticky headers, and modal overlays are common sources of marker drift.`,
}));

export function ModalLabModals() {
    const { isOpen, close } = useModalLabStore();

    return (
        <>
            {isOpen("zustand") || isOpen("reviews-zustand") ? (
                <LabModalFrame
                    description="Zustand boolean으로 마운트/언마운트되는 모달입니다."
                    id={isOpen("reviews-zustand") ? "reviews-zustand" : "zustand"}
                    onClose={() => close(isOpen("reviews-zustand") ? "reviews-zustand" : "zustand")}
                    open
                    title="Zustand boolean modal"
                >
                    <p className="text-[1.4rem] leading-[1.6] text-black/70">
                        전역 스토어의 open 상태가 true일 때만 DOM에 렌더됩니다. Report 모드에서 열린 뒤 내부 요소를
                        선택해 보세요.
                    </p>
                </LabModalFrame>
            ) : null}

            <LabModalFrame
                alwaysMounted
                description="opacity와 pointer-events로만 숨깁니다. DOM에는 항상 남아 있습니다."
                id="opacity"
                onClose={() => close("opacity")}
                open={isOpen("opacity")}
                title="Opacity modal"
            >
                <p className="text-[1.4rem] leading-[1.6] text-black/70">
                    닫혀 있어도 요소가 DOM에 남아 있어 마커·히트 테스트에 유용합니다.
                </p>
            </LabModalFrame>

            <LabModalFrame
                alwaysMounted
                description="Reviews 페이지에서 트리거하는 opacity 케이스입니다."
                id="reviews-opacity"
                onClose={() => close("reviews-opacity")}
                open={isOpen("reviews-opacity")}
                title="Reviews opacity modal"
            >
                <p className="text-[1.4rem] leading-[1.6] text-black/70">
                    리뷰 승인 흐름을 가정한 opacity 기반 모달입니다.
                </p>
            </LabModalFrame>

            {isOpen("display-none") ? (
                <LabModalFrame
                    description="display: none (Tailwind hidden) 토글로 완전히 제거됩니다."
                    id="display-none"
                    onClose={() => close("display-none")}
                    open
                    title="Display none modal"
                >
                    <p className="text-[1.4rem] leading-[1.6] text-black/70">
                        열릴 때만 DOM에 존재합니다. 레이아웃·접근성 트리 차이를 확인하세요.
                    </p>
                </LabModalFrame>
            ) : null}

            {isOpen("issues-display-none") ? (
                <LabModalFrame
                    description="Issues 테이블 Review 버튼에서 여는 display:none 케이스입니다."
                    id="issues-display-none"
                    onClose={() => close("issues-display-none")}
                    open
                    title="Issues display none modal"
                >
                    <p className="text-[1.4rem] leading-[1.6] text-black/70">
                        이슈 상세를 가정한 display:none 기반 모달입니다.
                    </p>
                </LabModalFrame>
            ) : null}

            <div
                className={cn("fixed inset-0 z-[92] flex items-center justify-center bg-black/55 p-[1.6rem]", !isOpen("visibility-hidden") && "invisible")}
                data-report-id="example-modal-lab-overlay-visibility-hidden"
                onClick={() => close("visibility-hidden")}
                role="presentation"
                aria-hidden={!isOpen("visibility-hidden")}
            >
                <div
                    className="w-full max-w-[48rem] border border-black/10 bg-white p-[2rem] shadow-[0_24px_48px_rgba(0,0,0,0.2)]"
                    data-report-id="example-modal-lab-dialog-visibility-hidden"
                    data-report-type="group"
                    onClick={(event) => event.stopPropagation()}
                    role="dialog"
                    aria-modal={isOpen("visibility-hidden")}
                >
                    <h2 className="text-[2rem] font-semibold">Visibility hidden modal</h2>
                    <p className="mt-[1rem] text-[1.4rem] text-black/70">공간은 차지하지만 보이지 않을 수 있습니다.</p>
                </div>
            </div>

            <div
                className={cn(
                    "fixed inset-0 z-[92] flex items-center justify-center bg-black/55 p-[1.6rem] transition-transform",
                    isOpen("transform-offscreen") ? "translate-y-0" : "pointer-events-none translate-y-[120%]",
                )}
                data-report-id="example-modal-lab-overlay-transform-offscreen"
                onClick={() => close("transform-offscreen")}
                role="presentation"
            >
                <div
                    className="w-full max-w-[48rem] border border-black/10 bg-white p-[2rem]"
                    data-report-id="example-modal-lab-dialog-transform-offscreen"
                    data-report-type="group"
                    onClick={(event) => event.stopPropagation()}
                    role="dialog"
                    aria-modal={isOpen("transform-offscreen")}
                >
                    <h2 className="text-[2rem] font-semibold">Transform off-screen modal</h2>
                    <p className="mt-[1rem] text-[1.4rem] text-black/70">translate로 화면 밖으로 밀어낸 뒤 다시 복원합니다.</p>
                </div>
            </div>

            {isOpen("scroll-vertical") ? (
                <LabModalFrame
                    className="max-h-[min(80dvh,64rem)]"
                    description="모달 본문만 세로 스크롤됩니다."
                    id="scroll-vertical"
                    onClose={() => close("scroll-vertical")}
                    open
                    title="Vertical scroll modal"
                >
                    <div className="max-h-[42rem] overflow-y-auto pr-[0.8rem]">
                        <div className="flex flex-col gap-[1.2rem]">
                            {longParagraphs.map((paragraph) => (
                                <p
                                    className="text-[1.4rem] leading-[1.6] text-black/70"
                                    data-report-id={`example-modal-lab-scroll-y-${paragraph.id}`}
                                    key={paragraph.id}
                                >
                                    {paragraph.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </LabModalFrame>
            ) : null}

            {isOpen("scroll-horizontal") || isOpen("issues-scroll-x") ? (
                <LabModalFrame
                    className="max-w-[min(92vw,72rem)]"
                    description="모달 내부 테이블이 가로로 스크롤됩니다."
                    id={isOpen("issues-scroll-x") ? "issues-scroll-x" : "scroll-horizontal"}
                    onClose={() => close(isOpen("issues-scroll-x") ? "issues-scroll-x" : "scroll-horizontal")}
                    open
                    title="Horizontal scroll modal"
                >
                    <div className="overflow-x-auto">
                        <table className="min-w-[96rem] border-collapse text-left text-[1.4rem]">
                            <thead>
                                <tr className="bg-[#f4f4f4]">
                                    {wideColumns.map((column) => (
                                        <th
                                            className="px-[1.6rem] py-[1rem]"
                                            key={column}
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 6 }, (_, rowIndex) => (
                                    <tr
                                        className="border-t border-black/8"
                                        key={`row-${rowIndex}`}
                                    >
                                        {wideColumns.map((column) => (
                                            <td
                                                className="px-[1.6rem] py-[1.2rem]"
                                                data-report-id={`example-modal-lab-scroll-x-cell-${rowIndex}-${column}`}
                                                key={`${rowIndex}-${column}`}
                                            >
                                                Row {rowIndex + 1} · {column}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </LabModalFrame>
            ) : null}

            {isOpen("nested-scroll") ? (
                <div
                    className="fixed inset-0 z-[92] overflow-y-auto bg-black/55 p-[4rem]"
                    data-report-id="example-modal-lab-overlay-nested-scroll"
                    onClick={() => close("nested-scroll")}
                    role="presentation"
                >
                    <div
                        className="mx-auto min-h-[140vh] w-full max-w-[52rem] border border-black/10 bg-white p-[2rem]"
                        data-report-id="example-modal-lab-dialog-nested-scroll"
                        data-report-type="group"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <h2 className="text-[2rem] font-semibold">Nested scroll modal</h2>
                        <p className="mt-[1rem] text-[1.4rem] text-black/70">
                            오버레이 자체가 스크롤됩니다. 페이지 스크롤과 겹치는 케이스를 재현합니다.
                        </p>
                        <div className="mt-[2rem] flex flex-col gap-[1.2rem]">
                            {longParagraphs.map((paragraph) => (
                                <p
                                    className="text-[1.4rem] text-black/65"
                                    key={paragraph.id}
                                >
                                    {paragraph.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}

            {isOpen("nested-stack") ? (
                <>
                    <LabModalFrame
                        description="첫 번째 레이어"
                        id="nested-stack"
                        onClose={() => {
                            close("nested-stack-2");
                            close("nested-stack");
                        }}
                        open
                        title="Nested modal (layer 1)"
                    >
                        <p className="text-[1.4rem] text-black/70">아래 버튼으로 두 번째 모달을 열 수 있습니다.</p>
                        <button
                            className="mt-[1.6rem] bg-[#1e293b] px-[1.4rem] py-[1rem] text-[1.3rem] text-white"
                            data-report-id="example-modal-lab-open-nested-stack-2"
                            onClick={() => useModalLabStore.getState().open("nested-stack-2")}
                            type="button"
                        >
                            Open layer 2
                        </button>
                    </LabModalFrame>
                    {isOpen("nested-stack-2") ? (
                        <div
                            className="fixed inset-0 z-[96] flex items-center justify-center bg-black/65 p-[1.6rem]"
                            data-report-id="example-modal-lab-overlay-nested-stack-2"
                            role="presentation"
                        >
                            <div
                                className="w-full max-w-[40rem] border border-black/10 bg-white p-[2rem]"
                                data-report-id="example-modal-lab-dialog-nested-stack-2"
                                data-report-type="group"
                                role="dialog"
                                aria-modal="true"
                            >
                                <h3 className="text-[1.8rem] font-semibold">Nested modal (layer 2)</h3>
                                <button
                                    className="mt-[1.6rem] border border-black px-[1.2rem] py-[0.8rem] text-[1.3rem]"
                                    data-report-id="example-modal-lab-close-nested-stack-2"
                                    onClick={() => close("nested-stack-2")}
                                    type="button"
                                >
                                    Close layer 2
                                </button>
                            </div>
                        </div>
                    ) : null}
                </>
            ) : null}
        </>
    );
}
