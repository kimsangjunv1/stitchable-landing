import { StitchableLogo } from "./StitchableLogo"
import { Button } from "@/shared/ui/button"
import { GithubIcon } from "./GithubIcon"

const NAV = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#" className="flex items-center gap-2.5">
          <StitchableLogo className="size-6 text-primary" />
          <span className="text-sm font-semibold tracking-tight text-foreground">Stitchable</span>
          <span className="hidden rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:inline">
            beta
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
            asChild
          >
            <a href="#docs">
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#quickstart">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
