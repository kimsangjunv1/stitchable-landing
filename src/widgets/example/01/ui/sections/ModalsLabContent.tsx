"use client";

import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { type ModalLabId, useModalLabStore } from "@/widgets/example/01/model/useModalLabStore";

const labCases: Array<{
    id: ModalLabId;
    title: string;
    description: string;
    technique: string;
}> = [
    {
        id: "zustand",
        title: "Zustand boolean",
        description: "전역 스토어 open 상태로 마운트/언마운트",
        technique: "conditional render",
    },
    {
        id: "opacity",
        title: "Opacity",
        description: "DOM 유지 + opacity/pointer-events 토글",
        technique: "opacity-0",
    },
    {
        id: "display-none",
        title: "Display none",
        description: "열릴 때만 DOM에 존재",
        technique: "hidden / unmount",
    },
    {
        id: "visibility-hidden",
        title: "Visibility hidden",
        description: "invisible 클래스로 시각만 숨김",
        technique: "visibility",
    },
    {
        id: "transform-offscreen",
        title: "Transform off-screen",
        description: "translate로 화면 밖 이동",
        technique: "transform",
    },
    {
        id: "scroll-vertical",
        title: "Vertical scroll",
        description: "모달 본문 세로 스크롤",
        technique: "overflow-y-auto",
    },
    {
        id: "scroll-horizontal",
        title: "Horizontal scroll",
        description: "넓은 테이블 가로 스크롤",
        technique: "overflow-x-auto",
    },
    {
        id: "nested-scroll",
        title: "Nested scroll overlay",
        description: "오버레이 자체가 스크롤되는 케이스",
        technique: "overlay scroll",
    },
    {
        id: "nested-stack",
        title: "Nested modal stack",
        description: "모달 위 모달 2단",
        technique: "z-index stack",
    },
    {
        id: "inline-positioned",
        title: "Inline positioned",
        description: "fixed 없이 부모 컨테이너 안 배치",
        technique: "absolute in scroll",
    },
];

export function ModalsLabContent() {
    const open = useModalLabStore((state) => state.open);
    const [inlineOpen, setInlineOpen] = useState(false);

    return (
        <div className="flex flex-col gap-[2.4rem]">
            <header
                className="flex flex-col gap-[0.8rem]"
                data-report-id="example-modals-header"
                data-report-type="group"
            >
                <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-black/45">MODAL LAB</p>
                <h1
                    className="text-[2.8rem] font-semibold"
                    data-report-id="example-modals-title"
                >
                    Modal edge cases
                </h1>
                <p
                    className="max-w-[72rem] text-[1.5rem] leading-[1.6] text-black/65"
                    data-report-id="example-modals-description"
                >
                    Report 도구가 잘 못 잡을 것 같은 DOM 패턴을 한곳에 모았습니다. 페이지 이동 후에도 zustand·opacity
                    모달 상태를 유지해 보세요.
                </p>
            </header>

            <div
                className="grid gap-[1.2rem] mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3"
                data-report-id="example-modals-grid"
                data-report-type="group"
            >
                {labCases.map((item) => (
                    <article
                        className="flex flex-col gap-[1.2rem] border border-black/8 bg-white p-[2rem]"
                        data-report-id={`example-modals-card-${item.id}`}
                        key={item.id}
                    >
                        <div>
                            <p
                                className="font-[family-name:var(--font-fira-rebrand)] text-[1.1rem] text-black/45"
                                data-report-id={`example-modals-technique-${item.id}`}
                            >
                                {item.technique}
                            </p>
                            <h2
                                className="mt-[0.4rem] text-[1.6rem] font-semibold"
                                data-report-id={`example-modals-card-title-${item.id}`}
                            >
                                {item.title}
                            </h2>
                            <p
                                className="mt-[0.6rem] text-[1.3rem] leading-[1.5] text-black/60"
                                data-report-id={`example-modals-card-desc-${item.id}`}
                            >
                                {item.description}
                            </p>
                        </div>
                        <button
                            className="mt-auto w-max border border-black px-[1.2rem] py-[0.8rem] text-[1.3rem] hover:bg-black hover:text-white"
                            data-report-id={`example-modals-open-${item.id}`}
                            onClick={() => {
                                if (item.id === "inline-positioned") {
                                    setInlineOpen(true);
                                    return;
                                }

                                open(item.id);
                            }}
                            type="button"
                        >
                            Open modal
                        </button>
                    </article>
                ))}
            </div>

            <section
                className={cn("relative min-h-[28rem] overflow-hidden border border-black/8 bg-[#eef2f7] p-[2rem]", inlineOpen && "overflow-y-auto")}
                data-report-id="example-modals-inline-host"
                data-report-type="group"
            >
                <h3
                    className="text-[1.6rem] font-semibold"
                    data-report-id="example-modals-inline-title"
                >
                    Inline modal host (scroll container)
                </h3>
                <p
                    className="mt-[0.8rem] max-w-[56rem] text-[1.4rem] text-black/60"
                    data-report-id="example-modals-inline-desc"
                >
                    fixed 포털 없이 이 스크롤 영역 안에서 absolute로 띄운 모달입니다. 배경 스크롤과 겹치는 케이스를
                    재현합니다.
                </p>

                <div className="mt-[2rem] flex flex-col gap-[1rem]">
                    {Array.from({ length: 8 }, (_, index) => (
                        <p
                            className="text-[1.3rem] text-black/55"
                            key={`filler-${index}`}
                        >
                            Scroll filler block {index + 1}
                        </p>
                    ))}
                </div>

                {inlineOpen ? (
                    <div
                        className="absolute inset-0 z-[10] flex items-center justify-center bg-black/45 p-[2rem]"
                        data-report-id="example-modal-lab-overlay-inline-positioned"
                        onClick={() => setInlineOpen(false)}
                        role="presentation"
                    >
                        <div
                            className="w-full max-w-[40rem] border border-black/10 bg-white p-[2rem] shadow-lg"
                            data-report-id="example-modal-lab-dialog-inline-positioned"
                            data-report-type="group"
                            onClick={(event) => event.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                        >
                            <h4 className="text-[1.8rem] font-semibold">Inline positioned modal</h4>
                            <p className="mt-[1rem] text-[1.4rem] text-black/65">
                                viewport fixed가 아니라 부모 스크롤 컨테이너 기준으로 배치됩니다.
                            </p>
                            <button
                                className="mt-[1.6rem] border border-black px-[1.2rem] py-[0.8rem] text-[1.3rem]"
                                data-report-id="example-modal-lab-close-inline-positioned"
                                onClick={() => setInlineOpen(false)}
                                type="button"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ) : null}
            </section>
        </div>
    );
}
