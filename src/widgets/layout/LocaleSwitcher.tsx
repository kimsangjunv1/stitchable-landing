"use client";

import { useLocale } from "@/app/providers/LocaleProvider";
import type { Locale } from "@/i18n";
import { cn } from "@/shared/lib/utils";

const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "ko", label: "KO" },
];

export function LocaleSwitcher() {
    const { locale, setLocale } = useLocale();

    return (
        <div
            className="ml-auto flex shrink-0 items-center border border-black/15 p-[0.2rem]"
            role="group"
            aria-label="Language"
        >
            {options.map((option) => {
                const active = locale === option.value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => setLocale(option.value)}
                        aria-pressed={active}
                        className={cn(
                            "min-w-[4.4rem] px-[1.2rem] py-[0.6rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem] leading-none transition-colors",
                            active ? "bg-[#050505] font-semibold text-white" : "text-[#969696] hover:text-[#050505]",
                        )}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
