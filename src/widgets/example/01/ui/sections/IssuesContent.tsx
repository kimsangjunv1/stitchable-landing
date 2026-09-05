"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { ListDemo } from "@/widgets/example/01/ui/ListDemo";
import { useModalLabStore } from "@/widgets/example/01/model/useModalLabStore";

export function IssuesContent() {
    const issues = useMessages().example.issues;
    const open = useModalLabStore((state) => state.open);

    return (
        <div className="flex flex-col gap-[2.4rem]">
            <header
                className="flex flex-col gap-[0.8rem]"
                data-report-id="example-issues-header"
                data-report-type="group"
            >
                <p className="font-[family-name:var(--font-pretendard)] text-[1.2rem] text-black/45">{issues.eyebrow}</p>
                <h1
                    className="text-[2.8rem] font-semibold"
                    data-report-id="example-issues-title"
                >
                    {issues.title}
                </h1>
                <p
                    className="max-w-[64rem] text-[1.5rem] leading-[1.6] text-black/65"
                    data-report-id="example-issues-description"
                >
                    {issues.description}
                </p>
            </header>

            <section
                className="grid gap-[1.2rem] border border-black/8 bg-white p-[2rem] mobile:grid-cols-1 tablet:grid-cols-2"
                data-report-id="example-issues-modal-triggers"
                data-report-type="group"
            >
                <button
                    className="border border-black/15 px-[1.4rem] py-[1.2rem] text-left text-[1.3rem] hover:bg-black/[0.03]"
                    data-report-id="example-issues-open-display-none"
                    onClick={() => open("issues-display-none")}
                    type="button"
                >
                    {issues.openDetail}
                </button>
                <button
                    className="border border-black/15 px-[1.4rem] py-[1.2rem] text-left text-[1.3rem] hover:bg-black/[0.03]"
                    data-report-id="example-issues-open-scroll-x"
                    onClick={() => open("issues-scroll-x")}
                    type="button"
                >
                    {issues.openModal}
                </button>
            </section>

            <ListDemo onReview={(rowId) => (rowId === "issue-02" ? open("issues-display-none") : open("issues-scroll-x"))} />
        </div>
    );
}
