"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/shared/lib/utils"

export function CopyButton({
  text,
  label,
  copiedLabel,
  className,
}: {
  text: string
  label: string
  copiedLabel: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
    }
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
      resetTimerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [text])

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : label}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[var(--vp-color-nickel)] px-2.5 py-1 text-[11px] font-medium transition-colors",
        copied
          ? "text-[#3dd68c]"
          : "text-[#98989f] hover:border-[var(--vp-color-grey)] hover:text-white",
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
  )
}

export function TerminalLine({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?: "default" | "success" | "muted" | "command"
}) {
  return (
    <div
      className={cn(
        "font-mono text-[13px] leading-relaxed",
        variant === "success" && "text-[#3dd68c]",
        variant === "muted" && "text-[#98989f]",
        variant === "command" && "text-[#b39aff]",
        variant === "default" && "text-[#e8e6ed]",
      )}
    >
      {children}
    </div>
  )
}

export function TagPill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 font-mono text-xs",
        dark ? "vp-tag-dark" : "vp-tag",
      )}
    >
      {children}
    </span>
  )
}
