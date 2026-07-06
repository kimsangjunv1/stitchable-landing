import { ClippedRevealText } from "@/shared/ui/ClippedRevealText";
import { Text } from "@/shared/ui/Text";
import React from "react";
import { cn } from "@/shared/lib/utils";

const titleSectionModeStyles = {
    light: {
        border: "border-[#ededed]",
        divider: "bg-[#ededed]",
    },
    dark: {
        border: "border-[#333333]",
        divider: "bg-[#333333]",
    },
} as const;

export function TitleSection({
    value,
    className = { text: { container: "bg-[#00000010]" } },
    span = false,
    align = "left",
    mode = "light",
    children,
}: {
    value?: string;
    className?: { container?: string; inner?: string; text?: { container?: string; value?: string } };
    span?: boolean;
    align?: "left" | "center" | "right";
    mode?: "light" | "dark";
    children?: React.ReactNode;
}) {
    const modeStyle = titleSectionModeStyles[mode];

    return (
        <section className={cn("w-full border-b px-[1.2rem] tablet:px-[2.4rem]", modeStyle.border, className?.container)}>
            <div
                className={cn("mx-auto grid max-w-[var(--size-pc)] border-x", modeStyle.border, className?.inner)}
                style={{ gridTemplateColumns: `repeat(${span ? 1 : 2}, minmax(0, 1fr))` }}
            >
                <section className={cn(`${className?.text?.container} h-full px-[2rem] py-[3.2rem] tablet:px-[5.2rem] tablet:py-[4.2rem]`)}>
                    {value ? <h2 className={cn("text-[4.2rem] font-semibold leading-[1.3] whitespace-break-spaces [font-variation-settings:'wdth'_125]", className?.text?.value)}>{value}</h2> : null}
                    {children}
                    {/* <Text.Rolling value={100} /> */}
                </section>
                <div className={cn("h-full w-[0.1rem]", modeStyle.divider)} />

                {/* {!span ? (
                    <section
                        className={cn("hidden h-full w-[0.1rem] tablet:block", modeStyle.divider)}
                        style={{ justifySelf: align === "right" ? "start" : "end" }}
                    />
                ) : null} */}
            </div>
        </section>
    );
}
