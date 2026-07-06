"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useMessages } from "@/app/providers/LocaleProvider";

function Frame({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`mx-auto w-full max-w-[112rem] border-x border-[#e9e7e2] ${className}`}>
            {children}
        </div>
    );
}

function SectionTitle({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: ReactNode;
    description: string;
}) {
    return (
        <div className="mx-auto max-w-[62rem] px-[2rem] py-[7.2rem] text-center">
            <p className="text-[1.1rem] font-semibold uppercase tracking-[0.2em] text-black/35">{eyebrow}</p>
            <h2 className="mt-[1.2rem] text-[4rem] font-semibold leading-[1.02] text-[#111] tablet:text-[5.2rem]">
                {title}
            </h2>
            <p className="mt-[1.4rem] text-[1.5rem] leading-[1.7] text-black/55 tablet:text-[1.6rem]">{description}</p>
        </div>
    );
}

export function LibraryShowcase() {
    const home = useMessages().home;
    const { hero, reviewSection, agentsSection, developersSection, compareSection, feedbackSection, resourcesSection } = home;

    return (
        <main className="bg-white font-[family-name:var(--font-mona-rebrand)] text-[#111]">
            <section className="border-b border-[#e9e7e2]">
                <Frame className="pt-[10.8rem]">
                    <div className="border-b border-[#e9e7e2] px-[2rem] py-[1rem] text-[1.15rem] text-black/38 tablet:px-[2.4rem]">
                        <div className="flex flex-wrap gap-[1.6rem]">
                            {home.productTabs.map((tab) => (
                                <span
                                    className={tab === "Desktop App" ? "font-semibold text-black" : ""}
                                    key={tab}
                                >
                                    {tab}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid border-b border-[#e9e7e2] tablet:grid-cols-[minmax(0,1fr)_28rem]">
                        <div className="border-b border-[#e9e7e2] px-[2rem] py-[3.2rem] tablet:border-b-0 tablet:border-r tablet:px-[4rem] tablet:py-[4.8rem]">
                            <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-black/35">{hero.eyebrow}</p>
                            <h1 className="mt-[1.2rem] max-w-[7.6ch] text-[5rem] font-semibold leading-[0.96] text-black tablet:text-[6.2rem]">
                                {hero.titleLine1}
                                <br />
                                {hero.titleLine2}
                            </h1>
                        </div>

                        <div className="px-[2rem] py-[2.8rem] tablet:px-[2.4rem] tablet:py-[3.2rem]">
                            <div className="flex gap-[0.8rem] text-[#b8c3b7]">
                                <span className="grid h-[2.4rem] w-[2.4rem] place-items-center border border-[#e9e7e2] text-[1.1rem]">●</span>
                                <span className="grid h-[2.4rem] w-[2.4rem] place-items-center border border-[#e9e7e2] text-[1.1rem]">◫</span>
                                <span className="grid h-[2.4rem] w-[2.4rem] place-items-center border border-[#e9e7e2] text-[1.1rem]">△</span>
                            </div>

                            <p className="mt-[1.8rem] text-[1.45rem] leading-[1.7] text-black/58">{hero.body}</p>

                            <div className="mt-[2rem] flex flex-col gap-[0.8rem]">
                                <Link
                                    className="inline-flex h-[4.2rem] items-center justify-center bg-[#f6572e] px-[1.6rem] text-[1.35rem] font-semibold text-white"
                                    href="/example/01"
                                >
                                    {hero.demoCta}
                                </Link>
                                <Link
                                    className="inline-flex h-[4.2rem] items-center justify-center border border-[#e9e7e2] px-[1.6rem] text-[1.35rem] font-semibold text-black"
                                    href="/fivepixels/guide"
                                >
                                    {hero.guideCta}
                                </Link>
                            </div>

                            <ul className="mt-[1.8rem] space-y-[0.8rem] text-[1.3rem] leading-[1.6] text-black/52">
                                {hero.bullets.map((item) => (
                                    <li
                                        className="flex items-start gap-[0.7rem]"
                                        key={item}
                                    >
                                        <Check
                                            className="mt-[0.1rem] shrink-0 text-[#f6572e]"
                                            size={15}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-[#e9e7e2] bg-[linear-gradient(90deg,#d9ccff_0%,#d9dfff_45%,#dbf8d8_100%)] p-[1.6rem]">
                        <div className="border border-white/70 bg-white/78 backdrop-blur-sm">
                            <div className="flex items-center justify-between border-b border-[#ebe7de] px-[1.4rem] py-[1rem] text-[1.15rem] text-black/38">
                                <span>{hero.mockTask}</span>
                                <span>●</span>
                            </div>

                            <div className="relative min-h-[32rem] overflow-hidden bg-[#dfe3ff] tablet:min-h-[36rem]">
                                <Image
                                    className="absolute inset-0 h-full w-full object-cover opacity-50 blur-[1px]"
                                    src="/rebranding/dashboard.png"
                                    alt={hero.dashboardAlt}
                                    width={745}
                                    height={713}
                                />
                                <div className="absolute inset-x-[7%] top-[42%] border border-[#e5e7eb] bg-white px-[1.6rem] py-[1.2rem] shadow-[0_8px_24px_rgba(17,17,17,0.08)]">
                                    <p className="text-[1.35rem] leading-[1.55] text-black/65">{hero.overlay}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-[0.8rem] px-[1rem] py-[1.4rem] text-[1.15rem] text-black/50">
                            {hero.chips.map((chip) => (
                                <span
                                    className="border border-[#e9e7e2] bg-white px-[1.1rem] py-[0.6rem]"
                                    key={chip}
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                </Frame>
            </section>

            <section className="border-b border-[#e9e7e2]">
                <Frame>
                    <SectionTitle
                        eyebrow={reviewSection.eyebrow}
                        title={
                            <>
                                {reviewSection.titleLine1}
                                <br />
                                {reviewSection.titleLine2}
                            </>
                        }
                        description={reviewSection.description}
                    />

                    <div className="grid border-t border-[#e9e7e2] tablet:grid-cols-[minmax(0,0.9fr)_minmax(0,0.55fr)_minmax(0,0.55fr)]">
                        <div className="border-b border-[#e9e7e2] px-[2rem] py-[3.2rem] tablet:border-b-0 tablet:border-r tablet:px-[3.2rem]">
                            <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-black/35">{reviewSection.subEyebrow}</p>
                            <h3 className="mt-[1rem] text-[3.4rem] font-semibold leading-[1.05]">{reviewSection.heading}</h3>
                            <p className="mt-[1.2rem] max-w-[35rem] text-[1.5rem] leading-[1.7] text-black/56">{reviewSection.body}</p>

                            <div className="mt-[2.4rem] border-t border-[#e9e7e2]">
                                {reviewSection.featureNotes.map((note, index) => (
                                    <div
                                        className="flex items-center justify-between border-b border-[#e9e7e2] py-[1.3rem] text-[1.35rem]"
                                        key={note}
                                    >
                                        <span>{note}</span>
                                        <span className="text-black/30">0{index + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-b border-[#e9e7e2] px-[2rem] py-[2rem] tablet:border-b-0 tablet:border-r">
                            <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-black/35">{reviewSection.sessionsLabel}</p>
                            <div className="mt-[1.4rem] space-y-[0.8rem] text-[1.25rem]">
                                {reviewSection.sessionItems.map((item, index) => (
                                    <div
                                        className={`border px-[1rem] py-[0.9rem] ${index === 1 ? "border-[#ffd9cf] bg-[#fff4f0] text-[#bc4b2c]" : "border-[#e9e7e2]"}`}
                                        key={item}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="px-[2rem] py-[2rem]">
                            <div className="overflow-hidden border border-[#e9e7e2] bg-[#111]">
                                <Image
                                    className="h-full w-full object-cover"
                                    src="/rebranding/feedback.png"
                                    alt={hero.feedbackAlt}
                                    width={540}
                                    height={461}
                                />
                            </div>
                        </div>
                    </div>
                </Frame>
            </section>

            <section className="border-b border-[#e9e7e2]">
                <Frame>
                    <SectionTitle
                        eyebrow={agentsSection.eyebrow}
                        title={
                            <>
                                {agentsSection.titleLine1}
                                <br />
                                {agentsSection.titleLine2}
                            </>
                        }
                        description={agentsSection.description}
                    />

                    <div className="grid border-t border-[#e9e7e2] tablet:grid-cols-3">
                        {agentsSection.cards.map((card, index) => (
                            <article
                                className={`px-[2rem] py-[3rem] ${index < 2 ? "border-b border-[#e9e7e2] tablet:border-b-0 tablet:border-r" : ""}`}
                                key={card.title}
                            >
                                <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-black/35">{card.eyebrow}</p>
                                <h3 className="mt-[1.2rem] text-[3rem] font-semibold leading-[1.06]">{card.title}</h3>
                                <p className="mt-[1rem] text-[1.5rem] leading-[1.7] text-black/56">{card.description}</p>
                                <span className="mt-[2.6rem] inline-flex h-[3rem] w-[3rem] items-center justify-center border border-[#e9e7e2] text-black/35">
                                    <ChevronRight size={15} />
                                </span>
                            </article>
                        ))}
                    </div>
                </Frame>
            </section>

            <section
                className="border-b border-[#e9e7e2]"
                id="developers"
            >
                <Frame>
                    <div className="grid tablet:grid-cols-[minmax(0,1fr)_32rem]">
                        <div className="border-b border-[#e9e7e2] px-[2rem] py-[3.2rem] tablet:border-b-0 tablet:border-r tablet:px-[3.2rem]">
                            <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-black/35">{developersSection.eyebrow}</p>
                            <h2 className="mt-[1.2rem] text-[4.2rem] font-semibold leading-[1.02]">
                                {developersSection.titleLine1}
                                <br />
                                {developersSection.titleLine2}
                            </h2>
                            <p className="mt-[1.4rem] max-w-[44rem] text-[1.5rem] leading-[1.7] text-black/56">{developersSection.description}</p>

                            <div className="mt-[2.8rem] border-t border-[#e9e7e2]">
                                {developersSection.facts.map((fact, index) => (
                                    <div
                                        className="grid border-b border-[#e9e7e2] py-[1.3rem] tablet:grid-cols-[7rem_minmax(0,1fr)]"
                                        key={fact.title}
                                    >
                                        <span className="text-[1.15rem] text-black/30">0{index + 1}</span>
                                        <div>
                                            <strong className="block text-[1.8rem] font-semibold text-black">{fact.title}</strong>
                                            <p className="mt-[0.35rem] text-[1.45rem] leading-[1.65] text-black/56">{fact.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="px-[2rem] py-[2rem] tablet:px-[2.4rem] tablet:py-[3.2rem]">
                            <div className="border border-[#1f2937] bg-[#111827] p-[1.6rem] text-white">
                                <div className="flex items-center justify-between text-[1.05rem] uppercase tracking-[0.18em] text-white/42">
                                    <span>{developersSection.quickStartLabel}</span>
                                    <span>{developersSection.quickStartTime}</span>
                                </div>
                                <pre className="mt-[1.4rem] overflow-x-auto text-[1.25rem] leading-[1.8] text-white/90">
                                    <code>{developersSection.codeSnippet}</code>
                                </pre>
                            </div>

                            <div className="mt-[1.6rem] border border-[#e9e7e2]">
                                {developersSection.rollout.map((step, index) => (
                                    <div
                                        className={`px-[1.4rem] py-[1.2rem] ${index < developersSection.rollout.length - 1 ? "border-b border-[#e9e7e2]" : ""}`}
                                        key={step.day}
                                    >
                                        <p className="text-[1.05rem] font-semibold uppercase tracking-[0.18em] text-[#f6572e]">{step.day}</p>
                                        <p className="mt-[0.45rem] text-[1.4rem] text-black/62">{step.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Frame>
            </section>

            <section
                className="border-b border-[#e9e7e2]"
                id="compare"
            >
                <Frame>
                    <SectionTitle
                        eyebrow={compareSection.eyebrow}
                        title={
                            <>
                                {compareSection.titleLine1}
                                <br />
                                {compareSection.titleLine2}
                            </>
                        }
                        description={compareSection.description}
                    />

                    <div className="border-t border-[#e9e7e2]">
                        <div className="grid bg-[#faf9f6] text-[1.1rem] font-semibold uppercase tracking-[0.18em] tablet:grid-cols-2">
                            <div className="border-b border-[#e9e7e2] px-[1.6rem] py-[1.2rem] text-black/35 tablet:border-b-0 tablet:border-r">{compareSection.currentFlow}</div>
                            <div className="px-[1.6rem] py-[1.2rem] text-[#f6572e]">{compareSection.fivepixels}</div>
                        </div>

                        {compareSection.rows.map(([left, right], index) => (
                            <div
                                className="grid tablet:grid-cols-2"
                                key={left}
                            >
                                <div className={`border-t border-[#e9e7e2] px-[1.6rem] py-[1.4rem] text-[1.45rem] text-black/55 tablet:border-r ${index === 0 ? "tablet:border-t" : ""}`}>
                                    {left}
                                </div>
                                <div className="border-t border-[#e9e7e2] px-[1.6rem] py-[1.4rem] text-[1.45rem] font-medium text-black">
                                    {right}
                                </div>
                            </div>
                        ))}
                    </div>
                </Frame>
            </section>

            <section className="border-b border-[#e9e7e2]">
                <Frame>
                    <div className="px-[2rem] py-[7.2rem] text-center">
                        <p className="text-[1.1rem] font-semibold uppercase tracking-[0.2em] text-black/35">{feedbackSection.eyebrow}</p>
                        <h2 className="mt-[1rem] text-[4.6rem] font-semibold leading-none">{feedbackSection.title}</h2>
                        <p className="mx-auto mt-[1.6rem] max-w-[56rem] text-[1.55rem] leading-[1.7] text-black/55">{feedbackSection.body}</p>

                        <div className="mt-[2.4rem] flex flex-wrap justify-center gap-[1rem]">
                            <Link
                                className="inline-flex h-[4.4rem] items-center justify-center bg-[#f6572e] px-[1.8rem] text-[1.4rem] font-semibold text-white"
                                href="/example/01"
                            >
                                {feedbackSection.demoCta}
                            </Link>
                            <Link
                                className="inline-flex h-[4.4rem] items-center justify-center border border-[#e9e7e2] px-[1.8rem] text-[1.4rem] font-semibold text-black"
                                href="/fivepixels/guide"
                            >
                                {feedbackSection.guideCta}
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[12rem] border-t border-[#e9e7e2] bg-[linear-gradient(90deg,transparent_0_18%,#c7ffd1_18%_26%,transparent_26%_49%,#dff6ff_49%_56%,transparent_56%_77%,#d8ffd8_77%_88%,transparent_88%_100%)]" />
                </Frame>
            </section>

            <section
                className="border-b border-[#e9e7e2]"
                id="faq"
            >
                <Frame>
                    <div className="px-[2rem] py-[6.8rem] text-center">
                        <h2 className="text-[4.8rem] font-semibold leading-none">{resourcesSection.title}</h2>
                    </div>

                    <div className="grid border-t border-[#e9e7e2] tablet:grid-cols-3">
                        {resourcesSection.items.map((resource, index) => (
                            <Link
                                className={`px-[2rem] py-[4rem] ${index < 2 ? "border-b border-[#e9e7e2] tablet:border-b-0 tablet:border-r" : ""}`}
                                href={resource.href}
                                key={resource.title}
                            >
                                <span className="inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center bg-[#e8fbef] text-[#4dbb74]">□</span>
                                <h3 className="mt-[2rem] text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em]">{resource.title}</h3>
                                <p className="mt-[1rem] max-w-[28rem] text-[1.5rem] leading-[1.65] text-black/56">{resource.body}</p>
                                <span className="mt-[2.4rem] inline-flex h-[3rem] w-[3rem] items-center justify-center border border-[#d9dde2] text-[#5b89ff]">
                                    <ArrowRight size={14} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </Frame>
            </section>
        </main>
    );
}
