"use client";

import type { GuideCollectionMessages, GuidePageMessages } from "@/i18n/guide/types";
import { useGuideSectionObserver } from "@/widgets/fivepixels/guide/model/useGuideSectionObserver";
import { Document } from "./Document";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";

export function Shell({ collection, page }: { collection: GuideCollectionMessages; page: GuidePageMessages }) {
    const sectionIds = page.sections.map((section) => section.id);

    useGuideSectionObserver(sectionIds);

    return (
        <div className="min-h-screen font-[family-name:var(--font-mona-rebrand)] text-[1.8rem] text-[#050505]">
            <div className="mx-auto flex w-full max-w-[var(--size-pc)] pt-[calc(7.2rem+3.2rem)] border-x border-x-[#ededed]">
                <Sidebar collection={collection} page={page} />
                <div className="w-[0.1rem] bg-[#ededed]" />
                <div className="min-w-0 flex-1">
                    <MobileNav collection={collection} page={page} />
                    <Document
                        hero={page.hero}
                        sections={page.sections}
                    />
                </div>
            </div>
        </div>
    );
}
