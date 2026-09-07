"use client";

import type { GuideCollectionMessages, GuidePageMessages } from "@/i18n/guide/types";
import { useGuideSectionObserver } from "@/widgets/fivepixels/guide/model/useGuideSectionObserver";
import { Document } from "./Document";
import { MobileNav } from "./MobileNav";
import { OnThisPage } from "./OnThisPage";
import { Sidebar } from "./Sidebar";

export function Shell({ collection, page }: { collection: GuideCollectionMessages; page: GuidePageMessages }) {
    const sectionIds = page.sections.map((section) => section.id);

    useGuideSectionObserver(sectionIds);

    return (
        <div className="min-h-screen bg-[var(--adaptive-background)] font-[family-name:var(--font-inter)] text-[1.8rem] text-[var(--adaptive-text-primary)]">
            <div className="mx-auto flex w-full max-w-[var(--size-pc)] border-x border-[var(--adaptive-border)] pt-[7.2rem]">
                <Sidebar collection={collection} page={page} />
                <div className="min-w-0 flex-1">
                    <MobileNav collection={collection} page={page} />
                    <Document
                        collection={collection}
                        hero={page.hero}
                        sections={page.sections}
                    />
                </div>
                <OnThisPage collection={collection} page={page} />
            </div>
        </div>
    );
}
