"use client";

import type { GuideNavGroup, GuideSection } from "@/i18n/guide/types";
import { useGuideProvider } from "@/widgets/fivepixels/guide/model/GuideContext";
import { cn } from "@/shared/lib/utils";

export function Sidebar({ groups, sections, onThisPage }: { groups: GuideNavGroup[]; sections: GuideSection[]; onThisPage: string }) {
    const { activeSectionId } = useGuideProvider();
    const sectionMap = new Map(sections.map((s) => [s.id, s]));

    return (
        <aside className="hidden w-56 shrink-0 lg:block">
            <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 pr-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{onThisPage}</p>
                <div className="space-y-6">
                    {groups.map((group) => (
                        <div key={group.label}>
                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">{group.label}</p>
                            <ul className="space-y-0.5 border-l border-border pl-3">
                                {group.sectionIds.map((id) => {
                                    const section = sectionMap.get(id);
                                    if (!section) return null;
                                    const active = activeSectionId === id;
                                    return (
                                        <li key={id}>
                                            <a
                                                href={`#${id}`}
                                                className={cn(
                                                    "block py-1 text-[13px] leading-snug transition-colors",
                                                    active ? "font-medium text-[#3182f6]" : "text-muted-foreground hover:text-foreground",
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
