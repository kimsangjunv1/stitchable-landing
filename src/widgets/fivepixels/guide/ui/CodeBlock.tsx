"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { GUIDE_SNIPPETS, type GuideSnippetKey } from "@/i18n/guide/snippets";
import { cn } from "@/shared/lib/utils";

export function CodeBlock({
    snippet,
    code: codeProp,
    language = "tsx",
}: {
    snippet?: GuideSnippetKey;
    code?: string;
    language?: string;
}) {
    const guide = useMessages().guide;
    const code = codeProp ?? (snippet ? GUIDE_SNIPPETS[snippet] : "");
    const [copied, setCopied] = useState(false);
    const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        };
    }, []);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
            resetTimerRef.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }, [code]);

    return (
        <div className="group relative overflow-hidden bg-[#050505]">
            <div className="flex items-center justify-between border-b border-white/10 px-[1.6rem] py-[1rem]">
                <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.1rem] uppercase tracking-wide text-white/50">{language}</span>
                <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={copied ? guide.codeCopied : guide.codeCopy}
                    className={cn(
                        "inline-flex items-center gap-[0.6rem] font-[family-name:var(--font-fira-rebrand)] text-[1.1rem] transition-colors",
                        copied ? "text-[#ff4b2e]" : "text-white/50 hover:text-white",
                    )}
                >
                    {copied ? (
                        <>
                            <Check
                                className="size-[1.4rem]"
                                aria-hidden
                            />
                            {guide.codeCopied}
                        </>
                    ) : (
                        <>
                            <Copy
                                className="size-[1.4rem]"
                                aria-hidden
                            />
                            {guide.codeCopy}
                        </>
                    )}
                </button>
            </div>
            <pre className="overflow-x-auto p-[1.6rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem] leading-[1.8] text-[#f5f5f5] tablet:p-[2.4rem]">
                <code>{code}</code>
            </pre>
        </div>
    );
}
