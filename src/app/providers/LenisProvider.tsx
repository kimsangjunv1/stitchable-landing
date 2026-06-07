"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type LenisContextValue = {
  lenis: Lenis | null;
  scrollTo: (
    target: string | number | HTMLElement,
    options?: { offset?: number },
  ) => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Lenis 옵션을 일부 조정하여 스크롤이 더 잘 내려가도록 개선
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => t, // linear easing → 더 직접적으로 반응함
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1.5,
      gestureOrientation: "vertical",
    });

    setLenis(instance);

    let rafId = 0;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number }) => {
      if (!lenis) {
        if (typeof target === "string") {
          document
            .querySelector(target)
            ?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      lenis.scrollTo(target, {
        offset: options?.offset ?? -118,
        duration: 1.1,
      });
    },
    [lenis],
  );

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      scrollTo(href);
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [lenis, scrollTo]);

  return (
    <LenisContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
