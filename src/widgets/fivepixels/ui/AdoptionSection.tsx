"use client";

import { useMessages } from "@/app/providers/LocaleProvider";

export function AdoptionSection() {
    const adoption = useMessages().fivepixels.adoption;

    return (
        <section
            className="w-full bg-[#ededed] px-[1.2rem] tablet:px-[2.4rem] min-h-fit h-[50svh]"
            id="adoption"
        >
            <div className="mx-auto w-full max-w-[var(--size-pc)] h-full grid grid-cols-2">
                <div className="bg-white flex flex-col">
                    <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.3rem] text-black/45 p-[1.6rem]">{adoption.whyEyebrow}</span>
                    <div className="grid grid-rows-4 h-full">
                        {adoption.reasons.map((item) => (
                            <article
                                className="bg-[#f6f6f6] p-[1.8rem] flex-1 flex flex-col items-start justify-center"
                                key={item.label}
                            >
                                <strong className="block text-[2rem] font-semibold leading-[1.15]">{item.label}</strong>
                                <p className="mt-[0.8rem] text-[1.5rem] leading-[1.55] text-black/60">{item.detail}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="bg-[#4b4b4b] text-white">
                    <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.3rem] text-white/55">{adoption.rolloutEyebrow}</span>
                    <div className="mt-[1.6rem] grid gap-[1px] bg-white/10">
                        {adoption.rolloutSteps.map((step) => (
                            <article
                                className="grid gap-[1rem] bg-[#565656] p-[1.8rem] tablet:grid-cols-[8rem_minmax(0,1fr)]"
                                key={step.day}
                            >
                                <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-white/48">{step.day}</span>
                                <div>
                                    <strong className="block text-[2rem] font-semibold leading-[1.15]">{step.title}</strong>
                                    <p className="mt-[0.8rem] text-[1.5rem] leading-[1.55] text-white/62">{step.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-[2rem] rounded-[2rem] border border-white/10 bg-[#111017] px-[1.8rem] py-[1.6rem]">
                        <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-white/42">{adoption.clientNoteEyebrow}</span>
                        <p className="mt-[0.8rem] text-[1.5rem] leading-[1.55] text-white/68">
                            {adoption.clientNote}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
