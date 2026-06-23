import Image from "next/image";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { MaterialIcon } from "@/widgets/layout/MaterialIcon";

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

export function IntroSection() {
    return (
        <section className="mx-auto max-w-[var(--size-pc)] w-full">
            <div className="flex h-[50svh] flex-col justify-center gap-[2.4rem] px-[1.2rem]">
                <h1 className={`font-[600] text-[5.2rem]`}>A Tool for Perfect QA</h1>

                <p className="leading-[1.5]">
                    fivepixels is a{" "}
                    <strong className={`${expandedText} inline-flex items-center text-[#ff4b2e]`}>
                        blazing-fast <MaterialIcon name="bolt" />
                    </strong>{" "}
                    QA corporate tool
                    <br />
                    that powers next-generation web applications.
                </p>

                <a
                    className="flex w-max items-center p-[1.2rem_1.6rem] border gap-[1.6rem] font-[family-name:var(--font-fira-rebrand)]"
                    href="#setup"
                >
                    npm i @fivepixels-js/react <div className="h-full w-[0.1rem] bg-black" />
                    <LinkIcon
                        size={15}
                        strokeWidth={2.4}
                    />
                </a>

                <div className="mt-[21px] flex">
                    <a
                        className="flex w-max items-center gap-[1.6rem] py-[1.2rem] px-[1.6rem] text-white bg-[#111] px-2"
                        href="#setup"
                    >
                        Get Started <ArrowRight size={17} />
                    </a>

                    <a
                        className="flex w-max items-center gap-[1.6rem] py-[1.2rem] px-[1.6rem] text-black border border-[#111] px-2"
                        href="/fivepixels/guide"
                    >
                        View Documentation <ArrowRight size={17} />
                    </a>
                </div>
            </div>

            <div className="flex h-[100svh] w-full flex-col tablet:h-[50svh] tablet:flex-row">
                {/* <div className="absolute top-0 left-0 z-[3] h-[17px] w-full bg-[repeating-linear-gradient(90deg,transparent_0_15px,rgba(255,255,255,.55)_15px_16px)] opacity-80" /> */}

                <div className="relative h-full flex flex-col justify-between items-center flex-1 overflow-hidden bg-[#F9572E]">
                    <section className="flex flex-col items-start w-full mobile:py-[3.2rem] tablet:py-[3.2rem] mobile:px-[1.2rem] tablet:px-[2.4rem]">
                        <h2 className={`${expandedText} flex items-center mobile:text-[1.8rem] tablet:text-[2.4rem] text-white`}>check today&apos;s issue</h2>
                        <h2 className={`${expandedText} flex items-center mobile:text-[2.4rem] tablet:text-[4.2rem] text-white`}>support screen panel ui</h2>
                    </section>

                    <section className="flex justify-end w-full">
                        <Image
                            className="tablet:max-w-[70%] mobile:px-[1.2rem] tablet:px-0"
                            src="/rebranding/dashboard.png"
                            alt="Radar dashboard"
                            width={745}
                            height={713}
                        />
                    </section>
                </div>

                <div className="relative h-full flex flex-col justify-between items-center flex-1 overflow-hidden bg-[#d94824]">
                    <section className="flex flex-col items-start w-full mobile:py-[3.2rem] tablet:py-[3.2rem] mobile:px-[1.2rem] tablet:px-[2.4rem]">
                        <h2 className={`${expandedText} flex items-center mobile:text-[1.8rem] tablet:text-[2.4rem] text-white`}>remain issue</h2>
                        <h2 className={`${expandedText} flex items-center mobile:text-[2.4rem] tablet:text-[4.2rem] text-white`}>click everywhere</h2>
                    </section>

                    <section className="flex justify-end w-full">
                        <Image
                            className="tablet:max-w-[70%] mobile:pl-[1.2rem] tablet:pl-0"
                            src="/rebranding/feedback.png"
                            alt="Radar dashboard"
                            width={745}
                            height={713}
                        />
                    </section>
                </div>
            </div>
        </section>
    );
}
