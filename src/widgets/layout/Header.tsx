"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";

const navigation = [
    {
        label: "MAIN",
        href: "/fivepixels",
    },
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
        href: "/example/01",
    },
];

export function Header() {
    const pathname = usePathname();

    if (pathname.startsWith("/example/01")) {
        return null;
    }

    return (
        <header className="fixed top-0 left-0 bg-white font-[family-name:var(--font-mona-rebrand)] text-[#050505] z-[100] w-full">
            {/* <div className="mx-auto flex w-[min(1536px,calc(100%-48px))] items-start gap-[165px] pt-5 max-[720px]:h-[118px] max-[720px]:w-[calc(100%-32px)] max-[720px]:gap-8"> */}
            <div className="w-[var(--size-pc)] mx-auto flex items-end gap-[165px] max-w-[var(--size-pc)] w-full p-[1.2rem]">
                <Link
                    className="flex shrink-0 flex-col gap-[0.4rem] leading-none"
                    href="/"
                    aria-label="agit library home"
                >
                    <Image
                        src={`/rebranding/agit-logo.svg`}
                        alt="agit"
                        width={56}
                        height={24}
                        priority
                    />
                    <Image
                        src="/rebranding/logo.svg"
                        alt="agit"
                        width={256}
                        height={54}
                        priority
                    />
                    {/* <strong className="-mt-0.5 text-[41px] leading-[0.82] tracking-[-2.8px] [font-variation-settings:'wdth'_125]">library</strong> */}
                </Link>

                <nav
                    className="flex gap-[30px] text-[2.4rem] leading-none"
                    aria-label="Primary navigation"
                >
                    {navigation.map((item) => (
                        <Link
                            className={cn(
                                "text-[#969696] hover:text-black font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]",
                                pathname === item.href && "font-bold text-[#050505] ",
                            )}
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
