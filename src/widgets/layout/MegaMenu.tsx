"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
import { revealEase } from "@/shared/lib/motion";
import { MaterialIcon } from "@/widgets/layout/MaterialIcon";
import type { MegaMenuConfig, MegaMenuLink } from "@/widgets/layout/megaMenuNav";

const MEGA_MENU_PILL_LAYOUT_ID = "mega-menu-trigger-pill";
const MEGA_MENU_ORDER = ["main", "guides", "docs", "examples"] as const;
const MEGA_MENU_SLIDE_OFFSET = 56;

export type MegaMenuSlideDirection = 1 | -1;

export function getMegaMenuSlideDirection(fromId: string | null, toId: string): MegaMenuSlideDirection {
    if (!fromId || fromId === toId) return 1;

    const fromIndex = MEGA_MENU_ORDER.indexOf(fromId as (typeof MEGA_MENU_ORDER)[number]);
    const toIndex = MEGA_MENU_ORDER.indexOf(toId as (typeof MEGA_MENU_ORDER)[number]);

    if (fromIndex === -1 || toIndex === -1) return 1;
    return toIndex > fromIndex ? 1 : -1;
}

type MegaMenuBarProps = {
    menus: readonly MegaMenuConfig[];
    activeMenuId?: string;
    onOpenChange: (menuId: string | null) => void;
    openMenuId: string | null;
};

export function MegaMenuBar({ menus, activeMenuId, onOpenChange, openMenuId }: MegaMenuBarProps) {
    const [isTouchMode, setIsTouchMode] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    const handleOpen = useCallback(
        (menuId: string) => {
            if (isTouchMode) return;
            onOpenChange(menuId);
        },
        [isTouchMode, onOpenChange],
    );

    const handleToggle = useCallback(
        (menuId: string) => {
            onOpenChange(openMenuId === menuId ? null : menuId);
        },
        [onOpenChange, openMenuId],
    );

    useEffect(() => {
        const media = window.matchMedia("(hover: none), (max-width: 1023px)");

        const syncTouchMode = () => setIsTouchMode(media.matches);
        syncTouchMode();
        media.addEventListener("change", syncTouchMode);

        return () => media.removeEventListener("change", syncTouchMode);
    }, []);

    return (
        <div className="flex items-center gap-[0.8rem]">
            {menus.map((menu) => {
                const isOpen = openMenuId === menu.id;
                const isActive = activeMenuId === menu.id;
                const isHighlighted = isOpen || isActive;

                return (
                    <div
                        key={menu.id}
                        className="relative"
                        onMouseEnter={isTouchMode ? undefined : () => handleOpen(menu.id)}
                    >
                        {isHighlighted ? (
                            <motion.span
                                className="absolute inset-0 rounded-[0.8rem]"
                                // className="absolute inset-0 rounded-[0.8rem] bg-[#F6572E10]"
                                layoutId={prefersReducedMotion ? undefined : MEGA_MENU_PILL_LAYOUT_ID}
                                transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 28 }}
                                // transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                            />
                        ) : null}

                        <button
                            type="button"
                            className={cn(
                                "relative z-[1] inline-flex items-center gap-[0.4rem] rounded-[0.8rem] px-[1.6rem] py-[0.8rem] font-[family-name:var(--font-pretendard)] text-[1.8rem] leading-none transition-colors tablet:text-[1.8rem]",
                                isHighlighted ? " text-[#000000]" : "text-[#969696] hover:text-black",
                            )}
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                            onClick={() => handleToggle(menu.id)}
                        >
                            {menu.label}
                            <MaterialIcon
                                className={cn("transition-transform duration-200", isOpen ? "rotate-180" : "")}
                                name="expand_more"
                                size={20}
                            />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

function getPanelGridClass(groupCount: number) {
    if (groupCount >= 4) return "tablet:grid-cols-2 pc:grid-cols-4";
    if (groupCount === 3) return "tablet:grid-cols-3";
    return "tablet:grid-cols-2";
}

function MegaMenuLinkRow({ link, onNavigate }: { link: MegaMenuLink; onNavigate: () => void }) {
    return (
        <Link
            className="group flex items-start gap-[1.2rem] rounded-[0.8rem] px-[0.6rem] py-[0.8rem] transition-colors hover:bg-[#ededed]"
            href={link.href}
            onClick={onNavigate}
        >
            <span className="flex h-[3.6rem] w-[3.6rem] shrink-0 items-center justify-center rounded-[0.8rem] border border-[#ededed] text-[#050505] transition-colors group-hover:border-[#ededed]">
                <MaterialIcon
                    name={link.icon}
                    size={20}
                />
            </span>
            <span className="min-w-0 pt-[0.2rem]">
                <strong className="block text-[1.45rem] font-semibold leading-[1.2] text-[#050505] group-hover:text-[#c74420]">{link.label}</strong>
                <span className="mt-[0.25rem] block text-[1.25rem] leading-[1.4] text-black/48">{link.description}</span>
            </span>
        </Link>
    );
}

function MegaMenuPanelContent({ menu, onNavigate }: { menu: MegaMenuConfig; onNavigate: () => void }) {
    return (
        <div className={cn("grid mobile:grid-cols-1", getPanelGridClass(menu.groups.length))}>
            {menu.groups.map((group, groupIndex) => (
                <section
                    className={cn("flex min-h-[22rem] flex-col p-[2rem] tablet:min-h-[24rem] tablet:p-[2.4rem]", groupIndex < menu.groups.length - 1 && "tablet:border-r tablet:border-r-[#ededed]")}
                    key={group.title}
                >
                    <div className="mb-[1.4rem]">
                        <span className="font-[family-name:var(--font-pretendard)] text-[1.1rem] text-[#f6572e]">{group.eyebrow}</span>
                        <h3 className="mt-[0.5rem] text-[1.7rem] font-semibold leading-[1.1]">{group.title}</h3>
                    </div>

                    <ul className="flex flex-1 flex-col gap-[0.2rem]">
                        {group.links.map((link) => (
                            <li key={link.href}>
                                <MegaMenuLinkRow
                                    link={link}
                                    onNavigate={onNavigate}
                                />
                            </li>
                        ))}
                    </ul>

                    {group.viewAll ? (
                        <Link
                            className="mt-[1rem] inline-flex items-center gap-[0.5rem] rounded-[0.6rem] px-[0.6rem] py-[0.6rem] font-[family-name:var(--font-pretendard)] text-[1.2rem] font-semibold text-[#f6572e] transition-colors hover:bg-[#fff0eb] hover:text-[#c74420]"
                            href={group.viewAll.href}
                            onClick={onNavigate}
                        >
                            <MaterialIcon
                                name={group.viewAll.icon}
                                size={16}
                            />
                            {group.viewAll.label}
                        </Link>
                    ) : null}
                </section>
            ))}
        </div>
    );
}

const panelSlideVariants = {
    enter: (direction: MegaMenuSlideDirection) => ({
        x: direction * MEGA_MENU_SLIDE_OFFSET,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: MegaMenuSlideDirection) => ({
        x: direction * -MEGA_MENU_SLIDE_OFFSET,
        opacity: 0,
    }),
};

export function MegaMenuFloatingPanel({ menu, direction, onNavigate }: { menu: MegaMenuConfig; direction: MegaMenuSlideDirection; onNavigate: () => void }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            className="overflow-hidden border border-[#ededed] bg-white"
            // layout={"size"}
            layout={!prefersReducedMotion}
            transition={{ layout: { duration: 0.28, ease: revealEase } }}
        >
            <div className="grid overflow-hidden">
                <AnimatePresence
                    custom={direction}
                    initial={false}
                    mode="sync"
                >
                    <motion.div
                        key={menu.id}
                        animate="center"
                        className="col-start-1 row-start-1 w-full min-w-0"
                        custom={direction}
                        exit="exit"
                        initial="enter"
                        transition={{ duration: 0.28, ease: revealEase }}
                        variants={
                            prefersReducedMotion
                                ? {
                                      enter: { opacity: 0 },
                                      center: { opacity: 1 },
                                      exit: { opacity: 0 },
                                  }
                                : panelSlideVariants
                        }
                    >
                        <MegaMenuPanelContent
                            menu={menu}
                            onNavigate={onNavigate}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
