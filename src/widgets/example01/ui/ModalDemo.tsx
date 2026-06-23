"use client";

import { useCallback, useEffect, useState } from "react";

export function ModalDemo() {
    const [open, setOpen] = useState(false);

    const closeModal = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeModal, open]);

    return (
        <div className="flex flex-col gap-[2.4rem]">
            <section
                className="flex flex-col gap-[1.6rem] rounded-sm border border-black/10 bg-[#f7f7f7] p-[2.4rem]"
                data-report-id="example-modal-trigger-area"
                data-report-type="group"
            >
                <p className="text-[1.5rem] leading-[1.6] text-black/65">
                    모달이 열린 뒤에도 Report 모드로 내부 버튼·입력창에 피드백을 남길 수 있는지 확인해 보세요.
                </p>
                <button
                    className="w-max bg-[#111] px-[1.6rem] py-[1.2rem] text-[1.4rem] text-white"
                    data-report-id="example-open-modal"
                    onClick={() => setOpen(true)}
                    type="button"
                >
                    Open Feedback Modal
                </button>
            </section>

            {open ? (
                <div
                    className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 p-[1.6rem]"
                    onClick={closeModal}
                    role="presentation"
                >
                    <div
                        className="w-full max-w-[48rem] overflow-hidden border border-black/10 bg-white shadow-[0_24px_48px_rgba(0,0,0,0.2)]"
                        data-report-id="example-modal-dialog"
                        data-report-type="group"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="example-modal-title"
                    >
                        <div className="flex items-center justify-between bg-[#2a2a2a] px-[2rem] py-[1.4rem] text-white">
                            <div>
                                <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.1rem] text-white/60">SUGGESTED</p>
                                <h2
                                    className="text-[2rem] font-semibold"
                                    id="example-modal-title"
                                >
                                    Leave your message
                                </h2>
                            </div>
                            <button
                                className="border border-white/30 px-[1rem] py-[0.6rem] text-[1.2rem]"
                                data-report-id="example-modal-close"
                                onClick={closeModal}
                                type="button"
                            >
                                Close
                            </button>
                        </div>

                        <div className="flex flex-col gap-[1.6rem] p-[2rem]">
                            <label
                                className="flex flex-col gap-[0.8rem] text-[1.4rem]"
                                data-report-id="example-modal-message-field"
                            >
                                <span className="font-medium">Message</span>
                                <textarea
                                    className="min-h-[12rem] resize-y border border-black/15 p-[1.2rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem] outline-none focus:border-black"
                                    data-report-id="example-modal-textarea"
                                    placeholder="Describe what you found..."
                                />
                            </label>

                            <div className="flex flex-wrap gap-[0.8rem]">
                                <span
                                    className="border border-[#f04452] px-[0.8rem] py-[0.4rem] text-[1.2rem] text-[#f04452]"
                                    data-report-id="example-modal-tag-bug"
                                >
                                    BUG
                                </span>
                                <span
                                    className="border border-[#111] px-[0.8rem] py-[0.4rem] text-[1.2rem]"
                                    data-report-id="example-modal-tag-important"
                                >
                                    IMPORTANT
                                </span>
                            </div>

                            <div className="flex gap-[1.2rem]">
                                <button
                                    className="bg-[#F9572E] px-[1.4rem] py-[1rem] text-[1.3rem] text-white"
                                    data-report-id="example-modal-submit"
                                    type="button"
                                >
                                    Submit feedback
                                </button>
                                <button
                                    className="border border-black px-[1.4rem] py-[1rem] text-[1.3rem]"
                                    data-report-id="example-modal-cancel"
                                    onClick={closeModal}
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
