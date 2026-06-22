"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";

const navigation = [
    {
        label: "GUIDE",
        href: "/fivepixels/guide",
    },
    {
        label: "SETTINGS",
        href: "/fivepixels#settings",
    },
    {
        label: "EXAMPLES",
        href: "/fivepixels#examples",
    },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white font-[family-name:var(--font-mona-rebrand)] text-[#050505]">
            <div className="mx-auto flex h-[126px] w-[min(1536px,calc(100%-48px))] items-start gap-[165px] pt-5 max-[720px]:h-[118px] max-[720px]:w-[calc(100%-32px)] max-[720px]:gap-8">
                <Link
                    className="flex shrink-0 flex-col leading-none"
                    href="/"
                    aria-label="agit library home"
                >
                    <Image
                        className="h-6 w-14"
                        src="/rebranding/agit-logo.svg"
                        alt="agit"
                        width={56}
                        height={24}
                        priority
                    />
                    <strong className="-mt-0.5 text-[41px] leading-[0.82] tracking-[-2.8px] [font-variation-settings:'wdth'_125]">library</strong>
                </Link>

                <nav
                    className="flex gap-[30px] pt-[15px] text-[24px] leading-none [font-variation-settings:'wdth'_110] max-[720px]:flex-wrap max-[720px]:gap-x-4 max-[720px]:gap-y-3 max-[720px]:pt-1 max-[720px]:text-[16px]"
                    aria-label="Primary navigation"
                >
                    {navigation.map((item) => (
                        <Link
                            className={cn("text-[#969696]", pathname === item.href && "font-bold text-[#050505]")}
                            href={item.href}
                            key={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
