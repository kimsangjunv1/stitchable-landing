"use client";

import Link from "next/link";
import type { GuideCollectionMessages, GuidePageMessages } from "@/i18n/guide/types";
import { cn } from "@/shared/lib/utils";

export function MobileNav({ collection, page }: { collection: GuideCollectionMessages; page: GuidePageMessages }) {
    const items = collection.navGroups.flatMap((group) => group.items);

    return (
        <nav className="sticky top-[calc(var(--site-banner-height)+6.4rem)] z-10 flex gap-[0.8rem] overflow-x-auto border-b border-black/10 bg-white px-[1.2rem] py-[1.2rem] lg:hidden" aria-label={collection.title}>
            {items.map((item) => (
                <Link key={item.slug} href={`${collection.basePath}/${item.slug}`} className={cn("shrink-0 border px-[1.2rem] py-[0.8rem] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] whitespace-nowrap transition-colors", page.slug === item.slug ? "border-[#111] bg-[#111] text-white" : "border-black/20 text-black/60 hover:border-black/40 hover:text-black")}>
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}
