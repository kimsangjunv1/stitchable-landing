import Image from "next/image";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { MaterialIcon } from "@/widgets/layout/MaterialIcon";

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

export function FunctionSection() {
    return (
        <section className="mx-auto max-w-[var(--size-pc)] w-full border-x border-x-[#ededed]">
            <div className="flex h-[50%] w-full flex-col tablet:flex-row border-y border-y-[#ededed]">
                {/* <div className="absolute top-0 left-0 z-[3] h-[17px] w-full bg-[repeating-linear-gradient(90deg,transparent_0_15px,rgba(255,255,255,.55)_15px_16px)] opacity-80" /> */}

                <div className="relative h-full flex flex-col justify-between items-center flex-1 overflow-hidden">
                    <section className="flex flex-col items-start w-full mobile:py-[3.2rem] tablet:py-[3.2rem] mobile:px-[1.2rem] tablet:px-[2.4rem]">
                        <h2 className={`${expandedText} flex items-center mobile:text-[1.8rem] tablet:text-[2.4rem]`}>오늘 확인할 이슈</h2>
                        <h2 className={`${expandedText} flex items-center mobile:text-[2.4rem] tablet:text-[4.2rem]`}>화면 위에서 남기기</h2>
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

                <div className="h-auto w-[0.1rem] bg-[#ededed]" />

                <div className="relative h-full flex flex-col justify-between items-center flex-1 overflow-hidden">
                    <section className="flex flex-col items-start w-full mobile:py-[3.2rem] tablet:py-[3.2rem] mobile:px-[1.2rem] tablet:px-[2.4rem]">
                        <h2 className={`${expandedText} flex items-center mobile:text-[1.8rem] tablet:text-[2.4rem]`}>남은 이슈만 보기</h2>
                        <h2 className={`${expandedText} flex items-center mobile:text-[2.4rem] tablet:text-[4.2rem]`}>클릭한 곳에 고정</h2>
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
