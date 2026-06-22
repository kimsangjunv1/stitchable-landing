import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function OpenSourceSection() {
    return (
        // <section className="mx-auto grid min-h-[355px] w-[min(1920px,calc(100%-48px))] grid-cols-2 items-center max-[720px]:w-[min(calc(100%-32px),520px)] max-[720px]:grid-cols-1 max-[720px]:gap-[26px] max-[720px]:py-[70px]">
        <section className="">
            <div className="mx-auto max-w-[var(--size-pc)] w-full grid grid-cols-2 px-[1.2rem]">
                <section className="flex flex-col gap-[1.6rem]">
                    <h2 className="text-[2.4rem] font-bold">Free &amp; Open Source</h2>

                    <p className="mb-[13px] leading-[1.45]">
                        fivepixels is free and open source, made possible by a full-time
                        <br />
                        team and passionate open-source contributors.
                    </p>
                    <a
                        className="flex w-max items-center gap-[1.6rem] py-[1.2rem] px-[1.6rem] text-white bg-[#111] px-2 font-[family-name:var(--font-fira-rebrand)]"
                        href="#contribute"
                    >
                        contribute <ArrowRight size={16} />
                    </a>
                </section>

                <section className="flex items-end justify-end max-[720px]:justify-start">
                    <div className="flex flex-col items-end pb-[5px] pr-[11px] leading-[.95]">
                        <strong>BROUGHT BY CODI</strong>
                        <span>@kimsangjunv1</span>
                    </div>
                    <Image
                        className="h-[200px] w-[200px] object-cover"
                        src="/rebranding/post-profile.png"
                        alt="Codi profile"
                        width={512}
                        height={512}
                    />
                </section>
            </div>
        </section>
    );
}
