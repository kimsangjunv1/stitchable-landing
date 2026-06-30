"use client";

import type { GuideSection } from "@/i18n/guide/types";
import { useGuideProvider } from "@/widgets/fivepixels/guide/model/GuideContext";
import { cn } from "@/shared/lib/utils";

export function MobileNav({ sections }: { sections: GuideSection[] }) {
    const { activeSectionId } = useGuideProvider();
    const quickStartSections = sections.filter((s) => s.variant === "quick-start");

    return (
        <nav
            className="sticky top-[calc(var(--site-banner-height)+6.4rem)] z-10 -mx-[1.2rem] mb-[2.4rem] flex gap-[0.8rem] overflow-x-auto border-b border-black/10 bg-white px-[1.2rem] py-[1.2rem] tablet:-mx-[2.4rem] tablet:px-[2.4rem] lg:hidden"
            aria-label="Quick start steps"
        >
            {quickStartSections.map((section) => {
                const active = activeSectionId === section.id;
                return (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={cn(
                            "shrink-0 border px-[1.2rem] py-[0.8rem] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] whitespace-nowrap transition-colors",
                            active ? "border-[#111] bg-[#111] text-white" : "border-black/20 text-black/60 hover:border-black/40 hover:text-black",
                        )}
                    >
                        {section.stepLabel ?? section.title}
                    </a>
                );
            })}
        </nav>
    );
}
