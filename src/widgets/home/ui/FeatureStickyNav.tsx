"use client";

import { useCallback, useMemo, type MouseEvent } from "react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { useFeatureSectionObserver } from "@/features/home/model/useFeatureSectionObserver";
import { cn } from "@/shared/lib/utils";

type NavItem = {
  id: string;
  label: string;
};

function buildNavItems(
  showcaseTabs: { id: string; label: string }[],
  capabilityTags: string[][],
): NavItem[] {
  const items: NavItem[] = [
    { id: "quickstart", label: "install" },
    ...showcaseTabs
      .filter((tab) => tab.id !== "install")
      .map((tab) => ({
        id: `feature-${tab.id}`,
        label: tab.label,
      })),
  ];

  const capabilityIds = ["feature-dom", "feature-report", "feature-nextjs"];
  capabilityTags.forEach((tags, index) => {
    const id = capabilityIds[index];
    const label = tags[0]?.toLowerCase() ?? `feature-${index}`;
    if (id) items.push({ id, label });
  });

  return items;
}

export function FeatureStickyNav() {
  const { showcase, capabilities } = useMessages().landing;

  const navItems = useMemo(
    () =>
      buildNavItems(
        showcase.tabs.map((tab) => ({ id: tab.id, label: tab.label })),
        capabilities.items.map((item) => item.tags),
      ),
    [showcase.tabs, capabilities.items],
  );

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeId = useFeatureSectionObserver(sectionIds);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    },
    [],
  );

  return (
    <nav
      className="vp-feature-sticky-nav"
      aria-label="Feature sections"
    >
      <div className="flex overflow-x-auto">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
              className={cn("vp-feature-tab shrink-0", isActive && "is-active")}
              aria-current={isActive ? "true" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
