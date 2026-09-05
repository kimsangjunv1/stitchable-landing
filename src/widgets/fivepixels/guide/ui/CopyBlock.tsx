"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";

export function CopyBlock({ label, text }: { label: string; text: string }) {
    const { codeCopied } = useMessages().guides;
    const [copied, setCopied] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    }, []);

    const copy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }, [text]);

    return (
        <div className="border border-black/10 bg-white">
            <div className="flex items-center justify-between border-b border-black/10 px-[1.6rem] py-[1.2rem]">
                <strong className="text-[1.4rem]">{label}</strong>
                <button type="button" onClick={copy} className="inline-flex items-center gap-[0.6rem] text-[1.3rem] text-black/55 hover:text-black">
                    {copied ? <Check className="size-[1.5rem]" aria-hidden /> : <Copy className="size-[1.5rem]" aria-hidden />}
                    {copied ? codeCopied : label}
                </button>
            </div>
            <pre className="whitespace-pre-wrap p-[1.6rem] font-[family-name:var(--font-pretendard)] text-[1.5rem] leading-[1.7] text-black/70">{text}</pre>
        </div>
    );
}
