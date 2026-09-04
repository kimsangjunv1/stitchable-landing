"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Bell, Search } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { MaterialIcon } from "@/widgets/layout/MaterialIcon";
import { useMessages } from "@/app/providers/LocaleProvider";
import { CreateIssueModal } from "@/widgets/example/01/dialogs/CreateIssueModal";
import { ModalLabModals } from "@/widgets/example/01/dialogs/ModalLabModals";
import { DASHBOARD_NAV_ITEMS, isDashboardNavActive } from "@/widgets/example/01/model/dashboardNav";

type DashboardShellProps = {
    children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
    const pathname = usePathname();
    const { shell, nav } = useMessages().example;
    const [createIssueOpen, setCreateIssueOpen] = useState(false);

    const openCreateIssue = useCallback(() => setCreateIssueOpen(true), []);
    const closeCreateIssue = useCallback(() => setCreateIssueOpen(false), []);

    useEffect(() => {
        if (!createIssueOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeCreateIssue();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeCreateIssue, createIssueOpen]);

    return (
        <>
            <Link
                className="fixed left-1/2 top-[1.6rem] z-[80] flex -translate-x-1/2 items-center gap-[0.8rem] border border-black/10 bg-white px-[1.6rem] py-[1rem] text-[1.3rem] font-medium shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-colors hover:border-black/25 hover:bg-[#fafafa]"
                data-report-id="example-dashboard-back"
                href="/"
            >
                <ArrowLeft size={16} />
                {shell.backLink}
            </Link>

            <div
                className="flex h-dvh flex-col overflow-hidden bg-[#f4f6f8]"
                data-report-id="example-dashboard-root"
                data-report-type="group"
            >
                <div className="flex min-h-0 flex-1 flex-col tablet:flex-row">
                    <aside
                        className="flex w-full shrink-0 flex-col justify-between overflow-y-auto bg-[#1e293b] p-[2rem] text-white tablet:w-[22rem]"
                        data-report-id="example-dashboard-sidebar"
                        data-report-type="group"
                    >
                        <div className="flex flex-col gap-[2.4rem]">
                            <div
                                className="flex items-center gap-[1rem]"
                                data-report-id="example-sidebar-brand"
                            >
                                <span className="inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center bg-[#3b82f6] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem]">
                                    QA
                                </span>
                                <div>
                                    <p className="text-[1.3rem] font-semibold">{shell.brand}</p>
                                    <p
                                        className="text-[1.1rem] text-white/55"
                                        data-report-id="example-sidebar-workspace"
                                    >
                                        {shell.workspace}
                                    </p>
                                </div>
                            </div>

                            <nav
                                className="flex flex-col gap-[0.4rem]"
                                aria-label={shell.navAriaLabel}
                                data-report-id="example-sidebar-nav"
                                data-report-type="group"
                            >
                                {DASHBOARD_NAV_ITEMS.map((item) => {
                                    const active = isDashboardNavActive(pathname, item.href);
                                    const label = nav.find((entry) => entry.id === item.id)?.label ?? item.id;

                                    return (
                                        <Link
                                            className={cn(
                                                "flex items-center gap-[1rem] px-[1.2rem] py-[1rem] text-[1.4rem] transition-colors",
                                                active ? "bg-white/12 text-white" : "text-white/65 hover:bg-white/8 hover:text-white",
                                            )}
                                            data-report-id={`example-sidebar-nav-${item.id}`}
                                            href={item.href}
                                            key={item.id}
                                        >
                                            <MaterialIcon
                                                name={item.icon}
                                                size={18}
                                            />
                                            {label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <button
                                className="flex items-center justify-center gap-[0.8rem] border border-white/25 bg-white/8 px-[1.2rem] py-[1rem] text-[1.3rem] text-white hover:border-white/40"
                                data-report-id="example-sidebar-open-modal"
                                onClick={openCreateIssue}
                                type="button"
                            >
                                {shell.createIssue}
                            </button>
                        </div>

                        <p
                            className="mt-[2.4rem] border-t border-white/10 pt-[2rem] text-[1.2rem] leading-[1.5] text-white/50"
                            data-report-id="example-sidebar-footer"
                        >
                            {shell.sidebarNote}
                        </p>
                    </aside>

                    <div
                        className="flex min-h-0 min-w-0 flex-1 flex-col"
                        data-report-id="example-dashboard-main"
                        data-report-type="group"
                    >
                        <header
                            className="flex shrink-0 flex-wrap items-center justify-between gap-[1.2rem] border-b border-black/8 bg-white px-[2rem] py-[1.6rem]"
                            data-report-id="example-dashboard-topbar"
                            data-report-type="group"
                        >
                            <div
                                className="flex min-w-[20rem] flex-1 items-center gap-[1rem] border border-black/10 bg-[#f8fafc] px-[1.2rem] py-[0.8rem]"
                                data-report-id="example-topbar-search"
                            >
                                <Search
                                    className="text-black/40"
                                    size={16}
                                />
                                <input
                                    className="w-full bg-transparent text-[1.4rem] outline-none placeholder:text-black/35"
                                    data-report-id="example-topbar-search-input"
                                    placeholder={shell.searchPlaceholder}
                                    type="search"
                                />
                            </div>

                            <div className="flex items-center gap-[0.8rem]">
                                <button
                                    className="relative border border-black/10 p-[0.9rem] hover:bg-black/[0.03]"
                                    data-report-id="example-topbar-notifications"
                                    onClick={openCreateIssue}
                                    type="button"
                                >
                                    <Bell size={16} />
                                    <span
                                        className="absolute right-[0.5rem] top-[0.5rem] h-[0.6rem] w-[0.6rem] bg-[#F9572E]"
                                        data-report-id="example-topbar-notification-dot"
                                    />
                                </button>
                                <button
                                    className="border border-black/10 px-[1.2rem] py-[0.9rem] text-[1.3rem] hover:bg-black/[0.03]"
                                    data-report-id="example-topbar-filter"
                                    type="button"
                                >
                                    {shell.filter}
                                </button>
                                <button
                                    className="flex items-center gap-[0.8rem] border border-black/10 px-[1rem] py-[0.6rem] hover:bg-black/[0.03]"
                                    data-report-id="example-topbar-profile"
                                    type="button"
                                >
                                    <span
                                        className="flex h-[2.4rem] w-[2.4rem] items-center justify-center bg-[#1e293b] text-[1.1rem] text-white"
                                        data-report-id="example-topbar-avatar"
                                    >
                                        SJ
                                    </span>
                                    <span
                                        className="text-[1.3rem]"
                                        data-report-id="example-topbar-username"
                                    >
                                        {shell.profile}
                                    </span>
                                </button>
                            </div>
                        </header>

                        <div
                            className="flex min-h-0 flex-1 flex-col gap-[2.4rem] overflow-y-auto p-[2rem]"
                            data-report-id="example-dashboard-scroll"
                            data-report-type="group"
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            {createIssueOpen ? <CreateIssueModal onClose={closeCreateIssue} /> : null}
            <ModalLabModals />
        </>
    );
}
