"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";

const links = [
    { label: "Main", href: "/example/01" },
    { label: "List", href: "/example/01/list" },
    { label: "Modal", href: "/example/01/modal" },
] as const;

export function ExampleNav() {
    const pathname = usePathname();

    return (
        <nav
            className="flex flex-wrap gap-[1.2rem] border-b border-black/10 pb-[1.6rem]"
            aria-label="Example navigation"
        >
            {links.map((link) => {
                const isActive = link.href === "/example/01" ? pathname === link.href : pathname.startsWith(link.href);

                return (
                    <Link
                        className={cn(
                            "font-[family-name:var(--font-fira-rebrand)] px-[1.4rem] py-[0.8rem] text-[1.3rem] transition-colors",
                            isActive ? "bg-[#050505] text-white" : "border border-black/15 text-black/60 hover:border-black hover:text-black",
                        )}
                        href={link.href}
                        key={link.href}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}
