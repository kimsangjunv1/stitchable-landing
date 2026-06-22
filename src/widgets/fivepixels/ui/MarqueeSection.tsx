import Marquee from "@/widgets/layout/Marquee";

export function MarqueeSection() {
    return (
        <section
            className="w-full overflow-hidden"
            aria-label="Product benefits"
        >
            {/* <div className="flex w-max translate-x-[calc((100vw-min(1920px,calc(100vw-48px)))/2)] gap-[54px] whitespace-nowrap max-[720px]:translate-x-4"> */}
            <div className="max-w-[var(--size-pc)] mx-auto flex whitespace-nowrap gap-[5.2rem]">
                <Marquee
                    content={"Easy to use + Performance + Silk UI + "}
                    duration={20}
                    className={{
                        container: "w-full",
                        marquee: "font-semibold [font-variation-settings:'wdth'_125] text-[7.2rem]",
                    }}
                />
                {/* {["Easy to use + Performance + Silk UI", "Easy to use + Performance + Silk UI"].map((label, index) => (
                    <span
                        className="font-semibold text-[5.2rem] leading-none tracking-[-2px] [font-variation-settings:'wdth'_125] max-[720px]:text-[29px]"
                        key={`${label}-${index}`}
                    >
                        {label}
                    </span>
                ))} */}
            </div>
        </section>
    );
}
