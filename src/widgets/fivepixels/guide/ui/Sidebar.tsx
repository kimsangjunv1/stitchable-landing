"use client";

import Link from "next/link";
import type { GuideCollectionMessages, GuidePageMessages } from "@/i18n/guide/types";
import { useGuideProvider } from "@/widgets/fivepixels/guide/model/GuideContext";
import { cn } from "@/shared/lib/utils";

export function Sidebar({ collection, page }: { collection: GuideCollectionMessages; page: GuidePageMessages }) {
    const { activeSectionId } = useGuideProvider();

    return (
        <aside className="hidden w-[24rem] shrink-0 lg:block">
            <nav className="sticky top-[calc(var(--site-banner-height)+12rem)] max-h-[calc(100vh-14rem-var(--site-banner-height))] overflow-y-auto px-[2rem] pb-[3.2rem]">
                <p className="mb-[1.6rem] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] uppercase tracking-wider text-[#969696]">{collection.onThisPage}</p>
                <div className="flex flex-col gap-[2.4rem]">
                    {collection.navGroups.map((group, groupIndex) => (
                        <div key={group.label}>
                            <p className={cn("mb-[0.8rem] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] uppercase tracking-wider", groupIndex === 0 ? "text-[#ff4b2e]" : "text-[#969696]")}>{group.label}</p>
                            <ul className="flex flex-col gap-[0.2rem] border-l border-black/10 pl-[1.2rem]">
                                {group.items.map((item) => {
                                    const active = page.slug === item.slug;
                                    return (
                                        <li key={item.slug}>
                                            <Link className={cn("relative block py-[0.45rem] text-[1.4rem] leading-snug transition-colors", active ? "font-semibold text-[#050505] before:absolute before:-left-[1.3rem] before:top-[0.65rem] before:h-[1.2rem] before:w-[0.2rem] before:bg-[#ff4b2e]" : "text-[#969696] hover:text-[#050505]")} href={`${collection.basePath}/${item.slug}`}>
                                                {item.label}
                                            </Link>
                                            {active ? (
                                                <ul className="mb-[0.6rem] ml-[0.8rem] mt-[0.2rem] flex flex-col gap-[0.1rem] border-l border-black/[0.06] pl-[1rem]">
                                                    {page.sections.map((section) => (
                                                        <li key={section.id}>
                                                            <a className={cn("block py-[0.35rem] text-[1.25rem] leading-snug transition-colors", activeSectionId === section.id ? "text-[#f6572e]" : "text-black/40 hover:text-black/70")} href={`#${section.id}`}>
                                                                {section.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : null}
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
