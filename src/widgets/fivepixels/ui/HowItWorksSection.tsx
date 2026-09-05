"use client";

import { useMessages } from "@/app/providers/LocaleProvider";

export function HowItWorksSection() {
    const { steps } = useMessages().fivepixels.howItWorks;

    return (
        <section
            className="w-full px-[1.2rem] tablet:px-[2.4rem] bg-black border-b border-b-[#333333]"
            id="how-it-works"
        >
            <div className="mx-auto grid w-full max-w-[var(--size-pc)] gap-[1px] border-x border-x-[#333333] tablet:grid-cols-3">
                {steps.map((step) => (
                    <article
                        className="flex min-h-[20rem] flex-col justify-between p-[2.4rem] tablet:min-h-[24rem] tablet:p-[3.2rem]"
                        key={step.number}
                    >
                        <span className="font-[family-name:var(--font-pretendard)] text-[1.4rem] text-white/45">{step.number}</span>
                        <div>
                            <h3 className="text-[2.6rem] font-semibold leading-[1.02] tablet:text-[2.8rem] text-white">{step.title}</h3>
                            <p className="mt-[1.2rem] max-w-[28rem] text-[1.6rem] leading-[1.55] text-white/60">{step.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
