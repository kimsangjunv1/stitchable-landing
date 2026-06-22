"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { GUIDE_SNIPPETS, type GuideSnippetKey } from "@/i18n/guide/snippets";
import { cn } from "@/shared/lib/utils";

export function CodeBlock({ snippet, language = "tsx" }: { snippet: GuideSnippetKey; language?: string }) {
    const guide = useMessages().guide;
    const code = GUIDE_SNIPPETS[snippet];
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
        <div className="vp-code-block group relative my-4 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--vp-color-stroke)] px-4 py-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--vp-color-text-dim)]">{language}</span>
                <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={copied ? guide.codeCopied : guide.codeCopy}
                    className={cn(
                        "inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-[11px] font-medium transition-colors",
                        copied
                            ? "border-[var(--vp-color-brand)] text-[var(--vp-color-brand)]"
                            : "text-[var(--vp-color-text-dim)] hover:border-[var(--vp-color-stroke)] hover:text-[var(--vp-color-brand)]",
                    )}
                >
                    {copied ? (
                        <>
                            <Check
                                className="size-3.5"
                                aria-hidden
                            />
                            {guide.codeCopied}
                        </>
                    ) : (
                        <>
                            <Copy
                                className="size-3.5"
                                aria-hidden
                            />
                            {guide.codeCopy}
                        </>
                    )}
                </button>
            </div>
            <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
                <code className="font-mono text-[#e8e6ed]">{code}</code>
            </pre>
        </div>
    );
}
