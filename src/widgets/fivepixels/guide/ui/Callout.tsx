import { AlertTriangle, Info } from "lucide-react";
import { RichText } from "@/shared/ui/rich-text";
import { cn } from "@/shared/lib/utils";

export function Callout({ text, variant = "info" }: { text: string; variant?: "info" | "warning" }) {
    const Icon = variant === "warning" ? AlertTriangle : Info;

    return (
        <div
            className={cn(
                "flex gap-[1.2rem] border px-[1.6rem] py-[1.2rem] text-[1.5rem] leading-[1.5] text-[var(--adaptive-text-secondary)]",
                variant === "warning" ? "border-[#f6572e]/30 bg-[var(--adaptive-orange50)]" : "border-[var(--adaptive-border)] bg-[var(--adaptive-surface)]",
            )}
        >
            <Icon
                className="mt-[0.2rem] size-[1.6rem] shrink-0 text-[#ff4b2e]"
                aria-hidden
            />
            <p>
                <RichText text={text} />
            </p>
        </div>
    );
}
