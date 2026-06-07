"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ClipboardCopy } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { StitchableLogo } from "./StitchableLogo";
import { cn } from "@/shared/lib/utils";

export function Hero() {
  const t = useMessages().landing.hero;
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopyPrompt = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(t.copyPromptText);
      setCopied(true);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [t.copyPromptText]);

  return (
    <section className="wrapper flex flex-col items-center gap-6 px-5 pb-6 pt-14 sm:px-0 sm:pt-20 bg-white rounded-[16px]">
      <div className="flex w-full max-w-2xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full border border-[var(--vp-color-stroke)] bg-[var(--vp-color-beige)]">
            <StitchableLogo className="size-6 text-[var(--vp-color-brand)]" />
          </div>

          <h1 className="vp-shine-text text-center text-balance text-4xl leading-tight sm:text-5xl md:text-6xl md:leading-[4.2rem]">
            <span className="inline-block">{t.titleLine1}</span>{" "}
            <span className="inline-block">{t.titleLine2}</span>
          </h1>

          <p className="max-w-md text-center text-lg font-medium leading-7 text-[var(--vp-color-grey)]">
            {t.description}
          </p>

          <p className="text-sm text-[var(--vp-color-grey)]">{t.license}</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#quickstart"
            className="vp-btn-brand inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors"
          >
            {t.getStarted}
            <ArrowRight className="size-4" />
          </a>
          <a
            href="/guide"
            className="vp-btn-alt inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors"
          >
            {t.readDocs}
          </a>
          <button
            type="button"
            onClick={handleCopyPrompt}
            className={cn(
              "vp-btn-alt inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors",
              copied && "border-[#3dd68c] text-[#18794e]",
            )}
          >
            {copied ? (
              <>
                <Check className="size-4" />
                {t.codeCopied}
              </>
            ) : (
              <>
                <ClipboardCopy className="size-4" />
                {t.copyPrompt}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
