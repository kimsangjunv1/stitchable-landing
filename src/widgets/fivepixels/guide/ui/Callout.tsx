import { Info } from "lucide-react";
import { RichText } from "@/shared/ui/rich-text";

export function Callout({ text }: { text: string }) {
    return (
        <div className="flex gap-[1.2rem] border border-black/10 bg-white px-[1.6rem] py-[1.2rem] text-[1.5rem] leading-[1.5] text-black/70">
            <Info
                className="mt-[0.2rem] size-[1.6rem] shrink-0 text-[#ff4b2e]"
                aria-hidden
            />
            <p>
                <RichText text={text} />
            </p>
        </div>
    );
}
