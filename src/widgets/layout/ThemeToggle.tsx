"use client";

import { Moon, Sun } from "lucide-react";

const THEME_STORAGE_KEY = "fivepixels-theme:v1";

export function ThemeToggle() {
    const toggleTheme = () => {
        const root = document.documentElement;
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

        root.dataset.theme = nextTheme;

        try {
            localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        } catch {
            // Theme switching still works when storage is unavailable.
        }
    };

    return (
        <button
            type="button"
            className="relative ml-[0.8rem] inline-flex h-[3.6rem] w-[3.6rem] shrink-0 items-center justify-center rounded-full border border-[var(--adaptive-border)] text-[var(--adaptive-text-secondary)] transition-colors hover:bg-[var(--adaptive-greyOpacity100)] hover:text-[var(--adaptive-text-primary)]"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
            title="Toggle color theme"
        >
            <Moon
                aria-hidden
                className="theme-toggle__moon"
                size={17}
            />
            <Sun
                aria-hidden
                className="theme-toggle__sun"
                size={17}
            />
        </button>
    );
}
