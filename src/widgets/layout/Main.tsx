"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
    id?: string;
    className?: {
        container?: string;
        inner?: string;
    };
};

export function Main({ children, id, className }: MainProps) {
    const pathname = usePathname();
    const isFullBleed = pathname === "/" || pathname.startsWith("/guide") || pathname.startsWith("/example/01");

    return (
        <div
            id={id}
            className={cn(isFullBleed ? "min-h-[calc(100dvh-126px)]" : "min-h-[calc(100dvh-10.8rem)] bg-background text-foreground", className?.container)}
        >
            {isFullBleed ? children : <div className={cn("mx-auto max-w-[var(--size-pc,80rem)] px-[2rem]", className?.inner)}>{children}</div>}
        </div>
    );
}
