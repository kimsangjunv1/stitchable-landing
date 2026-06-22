import Image from "next/image";
import { ArrowRight, Link as LinkIcon } from "lucide-react";

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

export function IntroSection() {
    return (
        <section className="mx-auto max-w-[var(--size-pc)] w-full">
            <div className="flex h-[50svh] flex-col justify-center px-[1.2rem]">
                <h1 className={`${expandedText} text-[5.2rem]`}>A Tool for Perfect QA</h1>

                <p className="my-[10px] mb-[2.4rem] leading-[1.5]">
                    fivepixels is a <strong className={`${expandedText} text-[#ff4b2e]`}>blazing-fast ⚡</strong> qa corporate tool
                    <br />
                    that powers next-generation web applications.
                </p>

                <a
                    className="flex w-max items-center gap-[21px] bg-[#efefef] px-[10px] py-[7px] font-[family-name:var(--font-fira-rebrand)]"
                    href="#setup"
                >
                    npm i stitchable{" "}
                    <LinkIcon
                        size={15}
                        strokeWidth={2.4}
                    />
                </a>

                <div className="mt-[21px] flex">
                    <a
                        className="flex h-9 items-center gap-[1.6rem] border border-[#050505] bg-[#050505] p-[1.6rem_1.2rem] font-[family-name:var(--font-fira-rebrand)] text-white"
                        href="#setup"
                    >
                        Get Started <ArrowRight size={17} />
                    </a>
                    <a
                        className="flex h-9 items-center gap-[1.6rem] border border-[#050505] bg-white p-[1.6rem_1.2rem] font-[family-name:var(--font-fira-rebrand)]"
                        href="/fivepixels/guide"
                    >
                        View Documentation <ArrowRight size={17} />
                    </a>
                </div>
            </div>

            <div className="flex h-[100svh] w-full flex-col tablet:h-[50svh] tablet:flex-row">
                {/* <div className="absolute top-0 left-0 z-[3] h-[17px] w-full bg-[repeating-linear-gradient(90deg,transparent_0_15px,rgba(255,255,255,.55)_15px_16px)] opacity-80" /> */}

                <div className="relative h-full flex-1 overflow-hidden bg-[#F9572E]">
                    <h2 className={`${expandedText} flex h-[50%] items-center justify-center text-center text-[clamp(2.8rem,2.2vw,4.2rem)] text-white`}>support screen panel ui</h2>

                    <Image
                        className="absolute bottom-[-20%] left-1/2 h-auto w-[85%] max-w-none -translate-x-1/2 tablet:bottom-[-30%] tablet:w-[78%]"
                        src="/rebranding/dashboard.png"
                        alt="Radar dashboard"
                        width={745}
                        height={713}
                    />
                </div>

                <div className="relative h-full flex-1 overflow-hidden bg-[#DE451F]">
                    <Image
                        className="absolute bottom-[-10%] left-[-18%] h-auto w-[95%] max-w-none tablet:bottom-[-16%] tablet:left-[-12%] tablet:w-[64%]"
                        src="/rebranding/feedback.png"
                        alt="Suggested feedback panel"
                        width={640}
                        height={461}
                        priority
                    />
                    <h2 className={`${expandedText} absolute right-[2.4rem] bottom-[2.4rem] text-[clamp(2.8rem,2.2vw,4.2rem)] text-white`}>
                        just click
                        <br />
                        everywhere
                    </h2>
                </div>
            </div>
        </section>
    );
}
