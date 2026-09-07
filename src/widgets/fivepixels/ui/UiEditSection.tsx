"use client";

import { motion } from "motion/react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { revealEase } from "@/shared/lib/motion";
import type { FivepixelsMessages } from "@/i18n/landing/types";
import { FivePixelsDemo } from "@fivepixels-js/react/demo";

type SlackMessage = FivepixelsMessages["uiEdit"]["messages"][number];

function AnimatedBubble({
    className,
    delay,
    isActive,
    prefersReducedMotion,
    children,
}: {
    className: string;
    delay: number;
    isActive: boolean;
    prefersReducedMotion: boolean;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            className={className}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={prefersReducedMotion || isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.45, delay, ease: revealEase }}
        >
            {children}
        </motion.div>
    );
}

function SlackAvatar({ bg, label }: { bg: string; label: string }) {
    return (
        <div
            className="flex h-[3.6rem] w-[3.6rem] shrink-0 items-center justify-center rounded-[0.4rem] text-[1.4rem] font-bold text-white"
            style={{ backgroundColor: bg }}
        >
            {label}
        </div>
    );
}

function SlackMessageRow({
    author,
    time,
    avatar,
    body,
    thread,
    delay,
    isActive,
    prefersReducedMotion,
}: {
    author: string;
    time: string;
    avatar: { bg: string; label: string };
    body: string;
    thread?: string;
    delay: number;
    isActive: boolean;
    prefersReducedMotion: boolean;
}) {
    return (
        <AnimatedBubble
            className="flex gap-[0.8rem] px-[2rem] py-[0.4rem] hover:bg-[#f8f8f8]"
            delay={delay}
            isActive={isActive}
            prefersReducedMotion={prefersReducedMotion}
        >
            <SlackAvatar
                bg={avatar.bg}
                label={avatar.label}
            />
            <div className="min-w-0 flex-1 pt-[0.1rem]">
                <div className="flex items-baseline gap-[0.8rem]">
                    <span className="text-[1.5rem] font-[900] leading-none text-[#1d1c1d]">{author}</span>
                    <span className="text-[1.2rem] leading-none text-[#616061]">{time}</span>
                </div>
                <p className="mt-[0.4rem] text-[1.5rem] leading-[1.46667] text-[#1d1c1d]">{body}</p>
                {thread ? (
                    <button
                        type="button"
                        className="mt-[0.6rem] flex items-center gap-[0.6rem] text-[1.3rem] font-medium text-[#1264a3]"
                    >
                        <div className="flex -space-x-[0.4rem]">
                            <div className="h-[1.8rem] w-[1.8rem] rounded-[0.3rem] border border-white bg-[#e8912d]" />
                            <div className="h-[1.8rem] w-[1.8rem] rounded-[0.3rem] border border-white bg-[#4a90d9]" />
                        </div>
                        {thread}
                    </button>
                ) : null}
            </div>
        </AnimatedBubble>
    );
}

function SlackSkeleton({ isInView, prefersReducedMotion, uiEdit }: { isInView: boolean; prefersReducedMotion: boolean; uiEdit: FivepixelsMessages["uiEdit"] }) {
    return (
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[100] flex w-[calc(100%-(1.6rem*4))] h-[calc(100%-(1.6rem*4))] overflow-hidden rounded-[0.8rem] font-['Helvetica_Neue',Helvetica,'Segoe_UI',Arial,sans-serif] shadow-[var(--shadow-popup)] border-[1px] border-[#ffffff90] p-[0.2rem]">
            <section className="flex rounded-[0.8rem] overflow-hidden">
                {/* workspace rail */}
                <div className="flex w-[5.4rem] shrink-0 flex-col items-center gap-[1.2rem] bg-[#350d36] py-[1.2rem]">
                    <div className="flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-[0.8rem] bg-[#611f69] text-[1.5rem] font-bold text-white">S</div>
                    <div className="h-[3.6rem] w-[3.6rem] rounded-[0.8rem] bg-[#e8912d]/90" />
                    <div className="h-[3.6rem] w-[3.6rem] rounded-[0.8rem] bg-[#4a90d9]/90" />
                    <div className="mt-auto h-[3.6rem] w-[3.6rem] rounded-[0.8rem] border border-white/20" />
                </div>

                {/* sidebar (hidden demo) */}
                {null}

                {/* main */}
                <div className="flex min-w-0 flex-1 flex-col bg-white">
                    {/* search */}
                    <div className="bg-[#350d36] px-[1.6rem] py-[1rem]">
                        <div className="mx-auto flex max-w-[72rem] items-center gap-[0.8rem] rounded-[0.6rem] border border-white/10 bg-[#5c2c5d] px-[1.2rem] py-[0.7rem] text-[1.4rem] text-white/55">
                            <svg
                                className="h-[1.6rem] w-[1.6rem] shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {uiEdit.searchPlaceholder}
                        </div>
                    </div>

                    {/* channel header */}
                    <div className="flex items-center justify-between border-b border-[#e8e8e8] px-[2rem] py-[1.1rem]">
                        <div className="flex min-w-0 items-center gap-[0.6rem]">
                            <h2 className="text-[1.8rem] font-[900] text-[#1d1c1d]">{uiEdit.channelName}</h2>
                            <svg
                                className="h-[1.4rem] w-[1.4rem] text-[#616061]"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                            <span className="truncate text-[1.3rem] text-[#616061]">{uiEdit.channelTopic}</span>
                        </div>
                        <div className="flex items-center gap-[0.8rem]">
                            <div className="flex -space-x-[0.5rem]">
                                {["#e8912d", "#4a90d9", "#7b5ea7", "#5bb381"].map((color) => (
                                    <div
                                        key={color}
                                        className="h-[2.4rem] w-[2.4rem] rounded-[0.4rem] border-2 border-white"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                            <span className="text-[1.3rem] text-[#616061]">74</span>
                        </div>
                    </div>

                    {/* messages */}
                    <div className="flex-1 overflow-y-auto py-[1.2rem]">
                        <div className="relative my-[1.6rem] flex items-center px-[2rem]">
                            <div className="h-px flex-1 bg-[#dddddd]" />
                            <span className="mx-[1.2rem] rounded-[2.4rem] border border-[#dddddd] px-[1.2rem] py-[0.3rem] text-[1.3rem] font-medium text-[#1d1c1d]">{uiEdit.today}</span>
                            <div className="h-px flex-1 bg-[#dddddd]" />
                        </div>

                        {uiEdit.messages.map((message, index) => (
                            <div key={message.id}>
                                {"isNew" in message && message.isNew ? (
                                    <div className="relative my-[1.2rem] flex items-center px-[2rem]">
                                        <div className="h-[0.2rem] flex-1 bg-[#e01e5a]" />
                                        <span className="ml-[0.8rem] text-[1.2rem] font-[700] text-[#e01e5a]">{uiEdit.newLabel}</span>
                                    </div>
                                ) : null}
                                <SlackMessageRow
                                    author={message.author}
                                    time={message.time}
                                    avatar={message.avatar}
                                    body={message.body}
                                    thread={"thread" in message ? message.thread : undefined}
                                    delay={0.12 + index * 0.18}
                                    isActive={isInView}
                                    prefersReducedMotion={prefersReducedMotion}
                                />
                            </div>
                        ))}
                    </div>

                    {/* composer */}
                    {false ? (
                        <div className="border-t border-[#e8e8e8] px-[2rem] py-[1.6rem]">
                            <div className="rounded-[0.8rem] border border-[#868686]">
                                <div className="flex items-center gap-[1.2rem] border-b border-[#e8e8e8] px-[1.2rem] py-[0.6rem] text-[1.3rem] font-bold text-[#616061]">
                                    <span>B</span>
                                    <span className="italic font-normal">I</span>
                                    <span className="line-through font-normal">S</span>
                                    <span className="font-normal">🔗</span>
                                    <span className="font-normal">≡</span>
                                    <span className="font-normal">•</span>
                                    <span className="font-normal">&gt;</span>
                                    <span className="font-normal">&lt;/&gt;</span>
                                </div>
                                <div className="px-[1.2rem] py-[0.8rem] text-[1.5rem] text-[#616061]">Message #project-eagle</div>
                                <div className="flex items-center justify-between px-[1rem] py-[0.6rem]">
                                    <div className="flex items-center gap-[0.8rem] text-[#616061]">
                                        <span className="flex h-[2.8rem] w-[2.8rem] items-center justify-center rounded-[0.4rem] text-[1.8rem] hover:bg-[#f8f8f8]">+</span>
                                        <span className="text-[1.4rem]">📹</span>
                                        <span className="text-[1.4rem]">🎤</span>
                                        <span className="text-[1.4rem]">😊</span>
                                        <span className="text-[1.4rem]">@</span>
                                        <span className="text-[1.3rem] font-medium">Aa</span>
                                    </div>
                                    <div className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[0.4rem] text-[#616061] hover:bg-[#f8f8f8]">
                                        <svg
                                            className="h-[1.8rem] w-[1.8rem]"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </section>
        </div>
    );
}

export function UiEditSection() {
    const uiEdit = useMessages().fivepixels.uiEdit;

    return (
        <section
            className="w-full bg-[var(--fp-bg)] px-[1.2rem] tablet:px-[2.4rem]"
            id="ui-edit"
        >
            <div className="mx-auto w-full max-w-[var(--size-pc)] overflow-hidden border-x border-[var(--adaptive-border)]">
                <Message
                    uiEdit={uiEdit}
                />

                <FeedbackMarker
                    uiEdit={uiEdit}
                />
            </div>
        </section>
    );
}

function Message({ uiEdit }: { uiEdit: FivepixelsMessages["uiEdit"] }) {
    return (
        <div className="grid border-b border-[var(--adaptive-border)] tablet:grid-cols-2">
            <article className="flex min-h-[24rem] flex-col justify-between p-[2.4rem] tablet:min-h-[42rem] tablet:p-[5.2rem]">
                <div className="max-w-[42rem]">
                    <span className="font-[family-name:var(--font-manrope)] text-[1.2rem] text-[var(--fp-text-description)]">{uiEdit.beforeLabel}</span>
                    <h3 className="mt-[1.2rem] text-[2.8rem] font-semibold leading-[1.2] text-[var(--fp-text-emphasis)] tablet:text-[3.2rem]">{uiEdit.beforeTitle}</h3>
                    <p className="mt-[1.6rem] text-[1.6rem] leading-[1.55] text-[var(--fp-text-description)]">{uiEdit.beforeDescription}</p>
                </div>
                <span className="font-[family-name:var(--font-manrope)] text-[1.1rem] text-[var(--fp-text-description)]">{uiEdit.beforeEyebrow}</span>
            </article>

            <div className="relative flex min-h-[32rem] items-center justify-center overflow-hidden border-t border-[var(--adaptive-border)] p-[2.4rem] tablet:min-h-[42rem] tablet:border-l tablet:border-t-0">
                <video
                    autoPlay
                    className="absolute inset-0 h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    aria-hidden
                >
                    <source
                        src="/colorflow-animation-2.mp4"
                        type="video/mp4"
                    />
                </video>
                <FivePixelsDemo
                    scene="marker-tooltip"
                    locale="en"
                    interaction="showcase"
                    className="relative z-10"
                    ariaLabel="Marker tooltip demo"
                />
            </div>
        </div>
    );
}

function FeedbackMarker({ uiEdit }: { uiEdit: FivepixelsMessages["uiEdit"] }) {
    return (
        <div className="grid tablet:grid-cols-2">
            <div className="order-2 relative flex min-h-[32rem] items-center justify-center overflow-hidden border-t border-[var(--adaptive-border)] p-[2.4rem] tablet:order-1 tablet:min-h-[42rem] tablet:border-r tablet:border-t-0 tablet:p-[4rem]">
                <video
                    autoPlay
                    className="absolute inset-0 h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    aria-hidden
                >
                    <source
                        src="/colorflow-animation-2.mp4"
                        type="video/mp4"
                    />
                </video>
                <FivePixelsDemo
                    scene="feedback-composer"
                    locale="en"
                    interaction="showcase"
                    className="absolute left-1/2 top-1/2 z-10 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.73] tablet:scale-100"
                    style={{ maxWidth: "none" }}
                    ariaLabel="Feedback composer demo"
                />
            </div>

            <article className="order-1 flex min-h-[24rem] flex-col justify-between p-[2.4rem] tablet:order-2 tablet:min-h-[42rem] tablet:p-[5.2rem]">
                <div className="max-w-[42rem]">
                    <span className="font-[family-name:var(--font-manrope)] text-[1.2rem] text-[var(--fp-text-description)]">{uiEdit.afterLabel}</span>
                    <h3 className="mt-[1.2rem] text-[2.8rem] font-semibold leading-[1.2] text-[var(--fp-text-emphasis)] tablet:text-[3.2rem]">
                        {uiEdit.afterTitleLine1}
                        <br />
                        {uiEdit.afterTitleLine2}
                    </h3>
                    <p className="mt-[1.6rem] text-[1.6rem] leading-[1.55] text-[var(--fp-text-description)]">{uiEdit.afterDescription}</p>
                </div>

                <span className="font-[family-name:var(--font-manrope)] text-[1.1rem] text-[var(--fp-text-description)]">{uiEdit.afterEyebrow}</span>
            </article>
        </div>
    );
}
