"use client";

import { useEffect, useState } from "react";

const SITE_HEADER_HEIGHT = 72;
const STICKY_NAV_HEIGHT = 46;

export function useFeatureSectionObserver(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const anchorLine = SITE_HEADER_HEIGHT + STICKY_NAV_HEIGHT + 1;

    const update = () => {
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top } = element.getBoundingClientRect();
        if (top <= anchorLine) {
          current = id;
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return activeId;
}
