import type { ReactNode } from "react";
import { ExampleNav } from "@/widgets/example01/ui/ExampleNav";
import { ShortcutHint } from "@/widgets/example01/ui/ShortcutHint";

type ExampleShellProps = {
    title: string;
    description: string;
    children: ReactNode;
};

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

export function ExampleShell({ title, description, children }: ExampleShellProps) {
    return (
        <div className="mx-auto flex w-full max-w-[var(--size-pc)] flex-col gap-[4.8rem] px-[1.2rem] pb-[8rem] pt-[calc(var(--header-height)+2.4rem)] tablet:px-[2.4rem]">
            <header className="flex flex-col gap-[2.4rem]">
                <div className="flex items-center gap-[1.2rem]">
                    <span className="inline-flex items-center justify-center bg-[#F9572E] px-[0.8rem] py-[0.4rem] font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-white">
                        fp.
                    </span>
                    <span className={`${expandedText} text-[2rem]`}>fivepixels example</span>
                </div>

                <ExampleNav />
                <ShortcutHint />

                <div>
                    <h1 className={`${expandedText} text-[4.2rem] leading-[1.05] tablet:text-[5.2rem]`}>{title}</h1>
                    <p className="mt-[1.6rem] max-w-[64rem] text-[1.6rem] leading-[1.6] text-black/65">{description}</p>
                </div>
            </header>

            {children}
        </div>
    );
}
