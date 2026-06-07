import { Info } from "lucide-react"
import { RichText } from "@/shared/ui/rich-text"

export function Callout({ text }: { text: string }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg-soft)] px-4 py-3 text-sm leading-relaxed text-[var(--vp-color-text-muted)]">
      <Info className="mt-0.5 size-4 shrink-0 text-[var(--vp-color-brand)]" aria-hidden />
      <p>
        <RichText text={text} />
      </p>
    </div>
  )
}
