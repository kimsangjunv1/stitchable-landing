"use client"

import Link from "next/link"
import { StitchableLogo } from "@/widgets/home/ui/StitchableLogo"
import { LocaleSwitcher } from "@/widgets/home/ui/LocaleSwitcher"

export function TopBar({ navHome }: { navHome: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <StitchableLogo className="size-5 text-primary" />
            Stitchable
          </Link>
          <span className="hidden text-sm text-muted-foreground sm:inline">/</span>
          <span className="hidden text-sm font-medium text-foreground sm:inline">Guide</span>
        </div>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {navHome}
          </Link>
        </div>
      </div>
    </header>
  )
}
