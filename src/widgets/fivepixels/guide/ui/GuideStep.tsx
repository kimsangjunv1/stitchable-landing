import type { ReactNode } from "react";

const expandedText = "font-[family-name:var(--font-pretendard)] font-semibold";

export function GuideStep({
    id,
    stepLabel,
    title,
    children,
}: {
    id: string;
    stepLabel: string;
    title: string;
    children: ReactNode;
}) {
    return (
        <section
            id={id}
            className="scroll-mt-[calc(var(--site-banner-height)+12rem)]"
        >
            <div className="border border-[var(--adaptive-border)] bg-[var(--adaptive-surface-muted)] p-[2.4rem] tablet:p-[3.2rem]">
                <span className="font-[family-name:var(--font-pretendard)] text-[1.4rem] text-[var(--adaptive-text-muted)]">{stepLabel}</span>
                <h2 className={`${expandedText} mt-[1.6rem] text-[3.2rem] leading-[1.05] mobile:text-[2.4rem]`}>{title}</h2>
                <div className="mt-[2.4rem] flex flex-col gap-[2.4rem]">{children}</div>
            </div>
        </section>
    );
}
