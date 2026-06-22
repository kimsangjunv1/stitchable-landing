export function MarqueeSection() {
    return (
        <section
            className="w-full overflow-hidden py-[18px] pb-5"
            aria-label="Product benefits"
        >
            <div className="flex w-max translate-x-[calc((100vw-min(1920px,calc(100vw-48px)))/2)] gap-[54px] whitespace-nowrap max-[720px]:translate-x-4">
                {["Easy to use + Performance + Silk UI", "Easy to use + Performance + Silk UI"].map((label, index) => (
                    <span
                        className="font-semibold text-[36px] leading-none tracking-[-2px] [font-variation-settings:'wdth'_125] max-[720px]:text-[29px]"
                        key={`${label}-${index}`}
                    >
                        {label}
                    </span>
                ))}
            </div>
        </section>
    );
}
