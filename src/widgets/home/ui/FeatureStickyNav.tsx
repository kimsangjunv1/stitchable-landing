"use client";

import { useCallback, useMemo, type MouseEvent } from "react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { useLenis } from "@/app/providers/LenisProvider";
import { useFeatureSectionObserver } from "@/features/home/model/useFeatureSectionObserver";
import { cn } from "@/shared/lib/utils";

type NavItem = {
  id: string;
  label: string;
};

const STATIC_NAV: NavItem[] = [
  { id: "quickstart", label: "install" },
  { id: "feature-feedback", label: "feedback" },
  { id: "feature-restore", label: "restore" },
  { id: "feature-bento", label: "modes" },
  { id: "feature-architecture", label: "shadow" },
  { id: "how-it-works", label: "workflow" },
  { id: "feature-github", label: "github" },
  { id: "feature-persistence", label: "storage" },
  { id: "fullstack", label: "stack" },
];

export function FeatureStickyNav() {
  const { bento } = useMessages().landing;
  const { scrollTo } = useLenis();

  const navItems = useMemo(() => {
    const modeLabel = bento.modes[1]?.label ?? "modes";
    return STATIC_NAV.map((item) =>
      item.id === "feature-bento" ? { ...item, label: modeLabel } : item,
    );
  }, [bento.modes]);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeId = useFeatureSectionObserver(sectionIds);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault();
      scrollTo(`#${id}`);
      history.replaceState(null, "", `#${id}`);
    },
    [scrollTo],
  );

  return (
    <nav className="vp-feature-sticky-nav" aria-label="Feature sections">
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
