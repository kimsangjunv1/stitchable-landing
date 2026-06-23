import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MaterialIcon } from "@/widgets/layout/MaterialIcon";
import { InstallCommand } from "@/widgets/example/01/ui/InstallCommand";

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

const features = [
    { icon: "ads_click", title: "Point at any element", description: "Leave feedback directly on the UI." },
    { icon: "location_searching", title: "Markers that stay", description: "Restore feedback after the UI changes." },
    { icon: "forum", title: "Review together", description: "Reply, verify, and resolve in one flow." },
    { icon: "sync_alt", title: "Use your workflow", description: "Local, server, or GitHub Issue." },
] as const;

export function MainDemo() {
    return (
        <div className="flex flex-col gap-[8rem]">
            <section
                className="flex flex-col gap-[2.4rem]"
                data-report-id="example-hero"
                data-report-type="group"
            >
                <InstallCommand />

                <div className="flex flex-wrap gap-[1.2rem]">
                    <Link
                        className="flex w-max items-center gap-[1.2rem] bg-[#111] px-[1.6rem] py-[1.2rem] text-[1.4rem] text-white"
                        data-report-id="example-cta-start"
                        href="/example/01/list"
                    >
                        Try List Example <ArrowRight size={16} />
                    </Link>
                    <Link
                        className="flex w-max items-center gap-[1.2rem] border border-[#111] px-[1.6rem] py-[1.2rem] text-[1.4rem]"
                        data-report-id="example-cta-modal"
                        href="/example/01/modal"
                    >
                        Try Modal Example <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="grid mobile:grid-cols-1 tablet:grid-cols-2">
                <div
                    className="relative flex min-h-[32rem] flex-col justify-between overflow-hidden bg-[#F9572E] p-[2.4rem] tablet:p-[3.2rem]"
                    data-report-id="example-showcase-left"
                    data-report-type="group"
                >
                    <div>
                        <h2 className={`${expandedText} text-[2.4rem] text-white tablet:text-[3.2rem]`}>check today&apos;s issue</h2>
                        <p className={`${expandedText} mt-[0.4rem] text-[3.2rem] text-white tablet:text-[4.2rem]`}>support screen panel ui</p>
                    </div>
                    <Image
                        className="mt-[2.4rem] self-end tablet:max-w-[85%]"
                        src="/rebranding/dashboard.png"
                        alt="Dashboard preview"
                        width={745}
                        height={713}
                    />
                </div>

                <div
                    className="relative flex min-h-[32rem] flex-col justify-between overflow-hidden bg-[#d94824] p-[2.4rem] tablet:p-[3.2rem]"
                    data-report-id="example-showcase-right"
                    data-report-type="group"
                >
                    <div>
                        <h2 className={`${expandedText} text-[2.4rem] text-white tablet:text-[3.2rem]`}>remain issue</h2>
                        <p className={`${expandedText} mt-[0.4rem] text-[3.2rem] text-white tablet:text-[4.2rem]`}>click everywhere</p>
                    </div>
                    <Image
                        className="mt-[2.4rem] self-end tablet:max-w-[85%]"
                        src="/rebranding/feedback.png"
                        alt="Feedback preview"
                        width={745}
                        height={713}
                    />
                </div>
            </section>

            <section className="bg-[#ededed] p-[2.4rem] tablet:p-[4.8rem]">
                <h3 className={`${expandedText} mb-[2.4rem] text-[3.2rem]`}>What you get</h3>
                <ul className="grid mobile:grid-cols-1 tablet:grid-cols-4">
                    {features.map((feature, index) => (
                        <li
                            className="flex min-h-[15rem] flex-col justify-between p-[2rem]"
                            data-report-id={`example-feature-${index + 1}`}
                            key={feature.title}
                        >
                            <div className="flex items-center justify-between">
                                <MaterialIcon
                                    name={feature.icon}
                                    size={24}
                                />
                                <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem]">0{index + 1}</span>
                            </div>
                            <div>
                                <strong className="block font-semibold">{feature.title}</strong>
                                <p className="mt-[0.4rem] text-[1.5rem] leading-[1.4] text-black/60">{feature.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
