"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export function CopyButton({
  text,
  label,
  copiedLabel,
  className,
}: {
  text: string;
  label: string;
  copiedLabel: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : label}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[var(--vp-color-stroke)] px-2.5 py-1 text-[11px] font-medium transition-colors",
        copied
          ? "border-[var(--vp-color-brand)] text-[var(--vp-color-brand)]"
          : "text-[var(--vp-color-text-dim)] hover:border-[var(--vp-color-brand)] hover:text-[var(--vp-color-brand)]",
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="size-3.5" aria-hidden />
          {copiedLabel}
        </>
      ) : (
        <>
          <Copy className="size-3.5" aria-hidden />
          {label}
        </>
      )}
    </button>
  );
}

export function TerminalLine({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "muted" | "command" | "brand";
}) {
  return (
    <div
      className={cn(
        "font-mono text-[13px] leading-relaxed",
        variant === "success" && "text-[var(--vp-color-brand)]",
        variant === "muted" && "text-[var(--vp-color-text-dim)]",
        variant === "command" && "text-[var(--vp-color-text-muted)]",
        variant === "brand" && "text-[var(--vp-color-brand)]",
        variant === "default" && "text-[#e8e6ed]",
      )}
    >
      {children}
    </div>
  );
}

export function TagPill({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs",
        dark ? "vp-tag-dark" : "vp-tag",
      )}
    >
      {children}
    </span>
  );
}
