export const DASHBOARD_NAV_ITEMS = [
    { id: "overview", icon: "dashboard", label: "Overview", href: "/example/01" },
    { id: "issues", icon: "bug_report", label: "Issues", href: "/example/01/issues" },
    { id: "reviews", icon: "rate_review", label: "Reviews", href: "/example/01/reviews" },
    { id: "releases", icon: "rocket_launch", label: "Releases", href: "/example/01/releases" },
    { id: "modals", icon: "layers", label: "Modal Lab", href: "/example/01/modals" },
    { id: "settings", icon: "settings", label: "Settings", href: "/example/01/settings" },
] as const;

export type DashboardNavId = (typeof DASHBOARD_NAV_ITEMS)[number]["id"];

export function isDashboardNavActive(pathname: string, href: string) {
    if (href === "/example/01") {
        return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}
