"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            syncTouch: true,
        });

        let frame = 0;

        const raf = (time: number) => {
            lenis.raf(time);
            frame = window.requestAnimationFrame(raf);
        };

        frame = window.requestAnimationFrame(raf);

        return () => {
            window.cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
