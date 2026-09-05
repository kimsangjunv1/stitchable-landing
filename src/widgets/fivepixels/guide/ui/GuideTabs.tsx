"use client";

import { useState } from "react";
import type { GuideBlock } from "@/i18n/guide/types";
import { cn } from "@/shared/lib/utils";

export function GuideTabs({ tabs, renderBlocks }: { tabs: { label: string; blocks: GuideBlock[] }[]; renderBlocks: (blocks: GuideBlock[]) => React.ReactNode }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTab = tabs[activeIndex];

    return (
        <div className="overflow-hidden border border-black/10 bg-white">
            <div className="flex border-b border-black/10" role="tablist">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        type="button"
                        role="tab"
                        aria-selected={activeIndex === index}
                        className={cn(
                            "flex-1 px-[1.6rem] py-[1.2rem] text-[1.4rem] font-semibold transition-colors",
                            activeIndex === index ? "bg-[#111] text-white" : "text-black/55 hover:bg-black/[0.03] hover:text-black",
                        )}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="flex flex-col gap-[2.4rem] p-[1.6rem] tablet:p-[2.4rem]" role="tabpanel">
                {activeTab ? renderBlocks(activeTab.blocks) : null}
            </div>
        </div>
    );
}
