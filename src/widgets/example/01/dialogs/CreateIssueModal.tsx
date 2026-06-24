"use client";

type CreateIssueModalProps = {
    onClose: () => void;
};

export function CreateIssueModal({ onClose }: CreateIssueModalProps) {
    return (
        <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 p-[1.6rem]"
            data-report-id="example-dashboard-modal-overlay"
            onClick={onClose}
            role="presentation"
        >
            <div
                className="w-full max-w-[48rem] overflow-hidden border border-black/10 bg-white shadow-[0_24px_48px_rgba(0,0,0,0.2)]"
                data-report-id="example-dashboard-modal-dialog"
                data-report-type="group"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="example-dashboard-modal-title"
            >
                <div
                    className="flex items-center justify-between bg-[#1e293b] px-[2rem] py-[1.4rem] text-white"
                    data-report-id="example-dashboard-modal-header"
                    data-report-type="group"
                >
                    <div>
                        <p
                            className="font-[family-name:var(--font-fira-rebrand)] text-[1.1rem] text-white/60"
                            data-report-id="example-dashboard-modal-eyebrow"
                        >
                            NEW ISSUE
                        </p>
                        <h2
                            className="text-[2rem] font-semibold"
                            data-report-id="example-dashboard-modal-title"
                            id="example-dashboard-modal-title"
                        >
                            Report an issue
                        </h2>
                    </div>
                    <button
                        className="border border-white/30 px-[1rem] py-[0.6rem] text-[1.2rem]"
                        data-report-id="example-dashboard-modal-close"
                        onClick={onClose}
                        type="button"
                    >
                        Close
                    </button>
                </div>

                <div
                    className="flex flex-col gap-[1.6rem] p-[2rem]"
                    data-report-id="example-dashboard-modal-body"
                    data-report-type="group"
                >
                    <label
                        className="flex flex-col gap-[0.8rem] text-[1.4rem]"
                        data-report-id="example-dashboard-modal-title-field"
                    >
                        <span
                            className="font-medium"
                            data-report-id="example-dashboard-modal-title-label"
                        >
                            Title
                        </span>
                        <input
                            className="border border-black/15 px-[1.2rem] py-[1rem] text-[1.4rem] outline-none focus:border-black"
                            data-report-id="example-dashboard-modal-title-input"
                            placeholder="e.g. Sidebar overlap on tablet"
                            type="text"
                        />
                    </label>

                    <label
                        className="flex flex-col gap-[0.8rem] text-[1.4rem]"
                        data-report-id="example-dashboard-modal-message-field"
                    >
                        <span
                            className="font-medium"
                            data-report-id="example-dashboard-modal-message-label"
                        >
                            Description
                        </span>
                        <textarea
                            className="min-h-[10rem] resize-y border border-black/15 p-[1.2rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem] outline-none focus:border-black"
                            data-report-id="example-dashboard-modal-textarea"
                            placeholder="Describe what you found..."
                        />
                    </label>

                    <div
                        className="flex flex-wrap gap-[0.8rem]"
                        data-report-id="example-dashboard-modal-tags"
                        data-report-type="group"
                    >
                        <span
                            className="border border-[#f04452] px-[0.8rem] py-[0.4rem] text-[1.2rem] text-[#f04452]"
                            data-report-id="example-dashboard-modal-tag-bug"
                        >
                            BUG
                        </span>
                        <span
                            className="border border-[#2563eb] px-[0.8rem] py-[0.4rem] text-[1.2rem] text-[#2563eb]"
                            data-report-id="example-dashboard-modal-tag-copy"
                        >
                            COPY
                        </span>
                        <span
                            className="border border-[#111] px-[0.8rem] py-[0.4rem] text-[1.2rem]"
                            data-report-id="example-dashboard-modal-tag-important"
                        >
                            IMPORTANT
                        </span>
                    </div>

                    <div
                        className="flex gap-[1.2rem]"
                        data-report-id="example-dashboard-modal-actions"
                        data-report-type="group"
                    >
                        <button
                            className="bg-[#1e293b] px-[1.4rem] py-[1rem] text-[1.3rem] text-white"
                            data-report-id="example-dashboard-modal-submit"
                            type="button"
                        >
                            Create issue
                        </button>
                        <button
                            className="border border-black px-[1.4rem] py-[1rem] text-[1.3rem]"
                            data-report-id="example-dashboard-modal-cancel"
                            onClick={onClose}
                            type="button"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
