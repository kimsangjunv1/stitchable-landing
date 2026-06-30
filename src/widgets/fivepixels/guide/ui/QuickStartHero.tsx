"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import type { GuideHero } from "@/i18n/guide/types";
import { GUIDE_SNIPPETS } from "@/i18n/guide/snippets";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { cn } from "@/shared/lib/utils";

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

export function QuickStartHero({ hero }: { hero: GuideHero }) {
    const guide = useMessages().guide;
    const installCode = hero.installCommand ?? GUIDE_SNIPPETS.install;
    const ctaHref = hero.ctaHref ?? "#install";
    const showInstall = hero.installCommand !== "";
    const [copied, setCopied] = useState(false);
    const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        };
    }, []);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(installCode);
            setCopied(true);
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
            resetTimerRef.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }, [installCode]);

    return (
        <header className="flex flex-col gap-[2.4rem] pb-[4.8rem]">
            <span className={cn("text-[1.4rem] text-[#ff4b2e]", "font-[family-name:var(--font-fira-rebrand)]")}>{hero.eyebrow}</span>

            <h1 className={`${expandedText} text-[4.2rem] leading-[1.05] mobile:text-[3.2rem]`}>{hero.title}</h1>

            <p className="max-w-[56rem] text-[1.8rem] leading-[1.5] text-black/70">
                <RichText text={hero.description} />
            </p>

            <div className="flex flex-wrap items-center gap-[1.6rem]">
                {showInstall && (
                    <div className="flex items-center border border-[#111] p-[1.2rem_1.6rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem]">
                        <code className="whitespace-nowrap">{installCode}</code>
                        <div className="mx-[1.6rem] h-[1.6rem] w-[0.1rem] bg-black" />
                        <button
                            type="button"
                            onClick={handleCopy}
                            aria-label={copied ? guide.codeCopied : guide.codeCopy}
                            className="text-black/60 transition-colors hover:text-black"
                        >
                            {copied ? (
                                <Check
                                    size={15}
                                    strokeWidth={2.4}
                                />
                            ) : (
                                <Copy
                                    size={15}
                                    strokeWidth={2.4}
                                />
                            )}
                        </button>
                    </div>
                )}

                <a
                    href={ctaHref}
                    className="flex w-max items-center gap-[1.6rem] bg-[#111] px-[1.6rem] py-[1.2rem] text-[1.4rem] text-white font-[family-name:var(--font-fira-rebrand)]"
                >
                    {hero.cta}
                    <ArrowRight size={17} />
                </a>
            </div>
        </header>
    );
}
