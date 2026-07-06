"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useMessages } from "@/app/providers/LocaleProvider";
import { cn } from "@/shared/lib/utils";
import { LocaleSwitcher } from "@/widgets/layout/LocaleSwitcher";
import { MegaMenuBar, MegaMenuFloatingPanel, getMegaMenuSlideDirection } from "@/widgets/layout/MegaMenu";
import type { MegaMenuSlideDirection } from "@/widgets/layout/MegaMenu";
import type { MegaMenuConfig } from "@/widgets/layout/megaMenuNav";

function getActiveMegaMenuId(pathname: string) {
    if (pathname.startsWith("/fivepixels/guide")) return "guide";
    if (pathname.startsWith("/example")) return "examples";
    if (pathname.startsWith("/fivepixels")) return "main";
    return undefined;
}

function FivepixelsSiteHeader({ pathname, megaMenus }: { pathname: string; megaMenus: MegaMenuConfig[] }) {
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const [slideDirection, setSlideDirection] = useState<MegaMenuSlideDirection>(1);
    const previousMenuIdRef = useRef<string | null>(null);
    const { header } = useMessages().layout;
    const activeMegaMenuId = getActiveMegaMenuId(pathname);
    const openMenu = megaMenus.find((menu) => menu.id === openMenuId) ?? null;
    const closeMenu = useCallback(() => {
        previousMenuIdRef.current = null;
        setOpenMenuId(null);
    }, []);

    const handleOpenChange = useCallback((menuId: string | null) => {
        if (menuId) {
            setSlideDirection(getMegaMenuSlideDirection(previousMenuIdRef.current, menuId));
            previousMenuIdRef.current = menuId;
        } else {
            previousMenuIdRef.current = null;
        }

        setOpenMenuId(menuId);
    }, []);

    useEffect(() => {
        if (!openMenuId) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeMenu();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeMenu, openMenuId]);

    return (
        <div
            className="fixed top-0 z-[100] w-full"
            onMouseLeave={closeMenu}
        >
            <header className="border-b border-[#ededed] bg-white pt-[3.2rem] font-[family-name:var(--font-mona-rebrand)] text-[#050505]">
                <div className="mx-auto flex w-full max-w-[var(--size-pc)] items-center justify-between border-x border-x-[#ededed] px-[2.4rem]">
                    <section className="flex items-center gap-[2.4rem]">
                        <Link
                            className="flex shrink-0 gap-[2.4rem] leading-none"
                            href="/"
                            aria-label={header.homeAriaLabel}
                        >
                            <Image
                                src="/rebranding/agit-logo.svg"
                                alt="agit"
                                width={56}
                                height={24}
                                priority
                            />
                            <div className="h-[7.2rem] w-[0.1rem] bg-[#ededed]" />
                            <Image
                                src="/rebranding/logo.svg"
                                alt="agit"
                                width={158}
                                height={24}
                                priority
                            />
                        </Link>

                        <div className="h-[7.2rem] w-[0.1rem] bg-[#ededed]" />
                    </section>

                    <nav
                        className="flex items-center leading-none"
                        aria-label={header.navAriaLabel}
                    >
                        <MegaMenuBar
                            activeMenuId={activeMegaMenuId}
                            menus={megaMenus}
                            onOpenChange={handleOpenChange}
                            openMenuId={openMenuId}
                        />
                    </nav>

                    <div className="flex items-center gap-[1.2rem]">
                        <LocaleSwitcher />
                    </div>
                </div>
            </header>

            {openMenu ? (
                <div className="pointer-events-none absolute top-[9.2rem] inset-x-0 px-[1.2rem] pt-[1.2rem] tablet:px-[2.4rem]">
                    <div className="pointer-events-auto mx-auto w-full max-w-[var(--size-pc)]">
                        <MegaMenuFloatingPanel
                            direction={slideDirection}
                            menu={openMenu}
                            onNavigate={closeMenu}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

function HomeHeader({ pathname }: { pathname: string }) {
    const { header } = useMessages().layout;

    return (
        <header className="fixed top-0 z-[100] w-full border-b border-[#ededed] bg-white/96 pt-[3.2rem] font-[family-name:var(--font-mona-rebrand)] text-[#050505] backdrop-blur">
            <div className="mx-auto flex w-full max-w-[var(--size-pc)] items-center justify-between gap-[2.4rem] border-x border-x-[#ededed] px-[2.4rem]">
                <section className="flex items-center gap-[2.4rem]">
                    <Link
                        className="flex shrink-0 gap-[2.4rem] leading-none"
                        href="/"
                        aria-label={header.homeAriaLabel}
                    >
                        <Image
                            src="/rebranding/agit-logo.svg"
                            alt="agit"
                            width={56}
                            height={24}
                            priority
                        />
                        <div className="h-[7.2rem] w-[0.1rem] bg-[#ededed]" />
                        <Image
                            src="/rebranding/logo.svg"
                            alt="agit"
                            width={158}
                            height={24}
                            priority
                        />
                    </Link>

                    <div className="h-[7.2rem] w-[0.1rem] bg-[#ededed]" />
                </section>

                <nav
                    className="flex gap-[1.8rem] text-[1.3rem] leading-none"
                    aria-label={header.navAriaLabel}
                >
                    {header.homeNav.map((item) => (
                        <Link
                            className={cn("font-[family-name:var(--font-mona-rebrand)] text-black/50 hover:text-black", pathname === item.href && "font-bold text-[#050505]")}
                            href={item.href}
                            key={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-[1.2rem]">
                    <Link
                        className="hidden h-[3.4rem] items-center border border-[#f6572e] bg-[#f6572e] px-[1.2rem] text-[1.2rem] font-semibold text-white tablet:inline-flex"
                        href="/fivepixels/guide"
                    >
                        {header.installGuide}
                    </Link>
                    <LocaleSwitcher />
                </div>
            </div>
        </header>
    );
}

export function Header() {
    const pathname = usePathname();
    const megaMenus = useMessages().layout.megaMenus;

    if (pathname.startsWith("/example/01")) {
        return null;
    }

    if (pathname === "/") {
        return <HomeHeader pathname={pathname} />;
    }

    return (
        <FivepixelsSiteHeader
            key={pathname}
            pathname={pathname}
            megaMenus={megaMenus}
        />
    );
}
