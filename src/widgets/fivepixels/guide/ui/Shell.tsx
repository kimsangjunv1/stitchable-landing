"use client";

import type { GuideMessages } from "@/i18n/guide/types";
import { useGuideSectionObserver } from "@/widgets/fivepixels/guide/model/useGuideSectionObserver";
import { Document } from "./Document";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";

export function Shell({ guide }: { guide: GuideMessages }) {
    const sectionIds = guide.sections.map((s) => s.id);

    useGuideSectionObserver(sectionIds);

    return (
        <div className="min-h-screen font-[family-name:var(--font-mona-rebrand)] text-[1.8rem] text-[#050505]">
            <div className="mx-auto flex w-full max-w-[var(--size-pc)] gap-[4.8rem] px-[1.2rem] tablet:gap-[6.4rem] tablet:px-[2.4rem]">
                <Sidebar
                    groups={guide.navGroups}
                    sections={guide.sections}
                    onThisPage={guide.onThisPage}
                />
                <div className="min-w-0 flex-1">
                    <MobileNav sections={guide.sections} />
                    <Document
                        hero={guide.hero}
                        referenceDivider={guide.referenceDivider}
                        sections={guide.sections}
                    />
                </div>
            </div>
        </div>
    );
}
