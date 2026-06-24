"use client";

import { useModalLabStore } from "@/widgets/example/01/model/useModalLabStore";

const reviewItems = [
    { id: "rev-01", title: "Modal z-index overlap", author: "Lee", status: "Awaiting QA" },
    { id: "rev-02", title: "Sidebar active state", author: "Kim", status: "Needs copy" },
    { id: "rev-03", title: "Kanban card hover", author: "Park", status: "Ready to ship" },
    { id: "rev-04", title: "Notification bell badge", author: "Choi", status: "Blocked" },
] as const;

export function ReviewsContent() {
    const open = useModalLabStore((state) => state.open);

    return (
        <div className="flex flex-col gap-[2.4rem]">
            <header
                className="flex flex-col gap-[0.8rem]"
                data-report-id="example-reviews-header"
                data-report-type="group"
            >
                <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-black/45">REVIEWS</p>
                <h1
                    className="text-[2.8rem] font-semibold"
                    data-report-id="example-reviews-title"
                >
                    Pending reviews
                </h1>
                <p
                    className="max-w-[64rem] text-[1.5rem] leading-[1.6] text-black/65"
                    data-report-id="example-reviews-description"
                >
                    리뷰 승인 흐름과 함께 opacity·zustand 모달 케이스를 섞어 두었습니다.
                </p>
            </header>

            <section
                className="grid gap-[1.2rem] border border-black/8 bg-white p-[2rem] mobile:grid-cols-1 tablet:grid-cols-2"
                data-report-id="example-reviews-modal-triggers"
                data-report-type="group"
            >
                <button
                    className="border border-black/15 px-[1.4rem] py-[1.2rem] text-left text-[1.3rem] hover:bg-black/[0.03]"
                    data-report-id="example-reviews-open-opacity"
                    onClick={() => open("reviews-opacity")}
                    type="button"
                >
                    Open opacity approval modal
                </button>
                <button
                    className="border border-black/15 px-[1.4rem] py-[1.2rem] text-left text-[1.3rem] hover:bg-black/[0.03]"
                    data-report-id="example-reviews-open-zustand"
                    onClick={() => open("reviews-zustand")}
                    type="button"
                >
                    Open zustand sign-off modal
                </button>
            </section>

            <ul
                className="flex flex-col gap-[1.2rem]"
                data-report-id="example-reviews-list"
                data-report-type="group"
            >
                {reviewItems.map((item) => (
                    <li
                        className="flex flex-wrap items-center justify-between gap-[1.2rem] border border-black/8 bg-white p-[2rem]"
                        data-report-id={`example-review-card-${item.id}`}
                        key={item.id}
                    >
                        <div>
                            <p
                                className="text-[1.6rem] font-semibold"
                                data-report-id={`example-review-title-${item.id}`}
                            >
                                {item.title}
                            </p>
                            <p
                                className="mt-[0.4rem] text-[1.3rem] text-black/55"
                                data-report-id={`example-review-meta-${item.id}`}
                            >
                                {item.author} · {item.status}
                            </p>
                        </div>
                        <div className="flex gap-[0.8rem]">
                            <button
                                className="border border-black/15 px-[1.2rem] py-[0.8rem] text-[1.3rem] hover:bg-black/[0.03]"
                                data-report-id={`example-review-request-${item.id}`}
                                onClick={() => open("reviews-opacity")}
                                type="button"
                            >
                                Request changes
                            </button>
                            <button
                                className="bg-[#1e293b] px-[1.2rem] py-[0.8rem] text-[1.3rem] text-white"
                                data-report-id={`example-review-approve-${item.id}`}
                                onClick={() => open("reviews-zustand")}
                                type="button"
                            >
                                Approve
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
