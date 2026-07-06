"use client";

import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { MaterialIcon } from "@/widgets/layout/MaterialIcon";
import { WeightWaveText } from "@/widgets/fivepixels/ui/WeightWaveText";

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

export function IntroSection() {
    const intro = useMessages().fivepixels.intro;

    return (
        <section
            className="mx-auto w-full h-[calc(50svh-(8.0rem/2))] max-w-[var(--size-pc)] border-x border-x-[#ededed] border-b border-b-[#ededed]"
            id="intro"
        >
            <section className="flex items-end gap-[2.4rem] h-full">
                <section className="flex-1 p-[5.2rem]">
                    <WeightWaveText
                        as="h1"
                        className="text-[7.8rem] leading-[1.3] font-semibold"
                        lines={intro.headline}
                    />
                </section>

                <div className="bg-[#ededed] h-full w-[0.1rem]" />

                <section className="flex-1 p-[5.2rem]">
                    <section className="flex items-center gap-[0.8rem]">
                        <img
                            src="/sparkle.svg"
                            alt="/"
                            className="w-[1.4rem]"
                        />
                        <p className="text-[1.4rem]">{intro.announcement}</p>
                    </section>

                    <p className="max-w-[48rem] leading-[1.5] text-black/72">
                        {intro.bodyLine1}
                        <br />
                        <strong className={`${expandedText} inline-flex items-center text-[#ff4b2e]`}>
                            {intro.bodyHighlight} <MaterialIcon name="bolt" />
                        </strong>{" "}
                        {intro.bodyLine2}
                    </p>

                    <div className="flex flex-col gap-[2.4rem]">
                        <a
                            className="flex w-max items-center p-[1.2rem_1.6rem] border border-[#ededed] gap-[1.6rem] font-[family-name:var(--font-fira-rebrand)]  rounded-[1.6rem]"
                            href="#setup"
                        >
                            npm i @fivepixels-js/react <div className="h-full w-[0.1rem] bg-black" />
                            <div className="h-[1.8rem] w-[0.1rem] bg-[#ededed]" />
                            <LinkIcon
                                size={15}
                                strokeWidth={2.4}
                            />
                        </a>

                        <section className="flex gap-[0.8rem]">
                            <a
                                className="flex w-max items-center gap-[1.6rem] bg-[#111] px-[1.6rem] py-[1.2rem] text-white rounded-[1.6rem]"
                                href="#setup"
                            >
                                {intro.demoCta} <ArrowRight size={17} />
                            </a>

                            <a
                                className="flex w-max items-center gap-[1.6rem] border border-[#ededed] px-[1.6rem] py-[1.2rem] text-black rounded-[1.6rem]"
                                href="/fivepixels/guide"
                            >
                                {intro.guideCta} <ArrowRight size={17} />
                            </a>
                        </section>
                    </div>
                </section>
            </section>
        </section>
    );
}
