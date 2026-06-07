import { StitchableLogo } from "./StitchableLogo"
import { GithubIcon } from "./GithubIcon"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <StitchableLogo className="size-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">Stitchable</span>
          <span className="text-xs text-muted-foreground">
            A DOM-aware feedback layer for QA, staging &amp; internal tools.
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#docs" className="transition-colors hover:text-foreground">
            Docs
          </a>
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a
            href="#docs"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
