"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { useGuideSectionObserver } from "@/widgets/fivepixels/guide/model/useGuideSectionObserver";
import { Document } from "./Document";
import { Sidebar } from "./Sidebar";

export function Shell() {
    const guide = useMessages().guide;
    const sectionIds = guide.sections.map((s) => s.id);

    useGuideSectionObserver(sectionIds);

    return (
        <div className="min-h-screen">
            <div className="flex gap-10 px-6 sm:px-10">
                <Sidebar
                    groups={guide.navGroups}
                    sections={guide.sections}
                    onThisPage={guide.onThisPage}
                />
                <Document
                    title={guide.title}
                    description={guide.description}
                    sections={guide.sections}
                />
            </div>
        </div>
    );
}
