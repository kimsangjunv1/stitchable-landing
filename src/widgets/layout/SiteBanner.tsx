"use client";

import { usePathname } from "next/navigation";
import { SITE_BANNER_MESSAGE } from "@/lib/site";

export function SiteBanner() {
    const pathname = usePathname();

    if (pathname.startsWith("/example/01")) {
        return null;
    }

    return (
        <div
            className="fixed top-0 left-0 z-[110] flex h-[var(--site-banner-height)] w-full items-center justify-center bg-black px-[1.2rem] font-[family-name:var(--font-mona-rebrand)] text-[1.4rem] font-medium text-white"
            role="status"
        >
            {SITE_BANNER_MESSAGE}
        </div>
    );
}
