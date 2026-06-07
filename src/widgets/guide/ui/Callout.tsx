import { Info } from "lucide-react"

export function Callout({ text }: { text: string }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-[#c8d9f0] bg-[#edf3fc] px-4 py-3 text-sm leading-relaxed text-[#34506b]">
      <Info className="mt-0.5 size-4 shrink-0 text-[#3182f6]" aria-hidden />
      <p>{text}</p>
    </div>
  )
}
