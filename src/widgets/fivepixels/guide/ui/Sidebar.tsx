"use client";

import type { GuideNavGroup, GuideSection } from "@/i18n/guide/types";
import { useGuideProvider } from "@/widgets/fivepixels/guide/model/GuideContext";
import { cn } from "@/shared/lib/utils";

export function Sidebar({ groups, sections, onThisPage }: { groups: GuideNavGroup[]; sections: GuideSection[]; onThisPage: string }) {
    const { activeSectionId } = useGuideProvider();
    const sectionMap = new Map(sections.map((s) => [s.id, s]));

    return (
        <aside className="hidden w-[20rem] shrink-0 lg:block">
            <nav className="sticky top-[calc(var(--site-banner-height)+12rem)] max-h-[calc(100vh-14rem-var(--site-banner-height))] overflow-y-auto pb-[3.2rem]">
                <p className="mb-[1.6rem] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] uppercase tracking-wider text-[#969696]">{onThisPage}</p>
                <div className="flex flex-col gap-[2.4rem]">
                    {groups.map((group, groupIndex) => (
                        <div key={group.label}>
                            <p
                                className={cn(
                                    "mb-[0.8rem] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] uppercase tracking-wider",
                                    groupIndex === 0 ? "text-[#ff4b2e]" : "text-[#969696]",
                                )}
                            >
                                {group.label}
                            </p>
                            <ul className="flex flex-col gap-[0.2rem] border-l border-black/10 pl-[1.2rem]">
                                {group.sectionIds.map((id) => {
                                    const section = sectionMap.get(id);
                                    if (!section) return null;
                                    const active = activeSectionId === id;
                                    return (
                                        <li key={id}>
                                            <a
                                                href={`#${id}`}
                                                className={cn(
                                                    "relative block py-[0.4rem] text-[1.4rem] leading-snug transition-colors",
                                                    active
                                                        ? "font-semibold text-[#050505] before:absolute before:-left-[1.3rem] before:top-[0.6rem] before:h-[1.2rem] before:w-[0.2rem] before:bg-[#ff4b2e]"
                                                        : "text-[#969696] hover:text-[#050505]",
                                                )}
                                            >
                                                {section.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </nav>
        </aside>
    );
}
