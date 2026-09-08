"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import type { FivepixelsMessages } from "@/i18n/landing/types";
import { FivePixelsDemo, type FivePixelsDemoScene } from "@fivepixels-js/react/demo";

type UiEditItem = FivepixelsMessages["uiEdit"]["items"][number];

const DEMO_SCALE: Partial<Record<FivePixelsDemoScene, string>> = {
    "feedback-composer": "scale-[0.73] tablet:scale-100",
    "memo-composer": "scale-[0.73] tablet:scale-100",
    "panel-overview": "scale-[0.62] tablet:scale-[0.82]",
    "network-monitor": "scale-[0.58] tablet:scale-[0.78]",
    "feedback-list": "scale-[0.62] tablet:scale-[0.82]",
    "memo-list": "scale-[0.62] tablet:scale-[0.82]",
    "page-brief": "scale-[0.62] tablet:scale-[0.82]",
    "my-tasks": "scale-[0.62] tablet:scale-[0.82]",
    "project-health": "scale-[0.62] tablet:scale-[0.82]",
    "element-hover-inspect": "scale-[0.42] tablet:scale-[0.58]",
    "element-inspector": "scale-[0.44] tablet:scale-[0.6]",
    "device-preview": "scale-[0.52] tablet:scale-[0.7]",
    "feedback-thread": "scale-[0.44] tablet:scale-[0.6]",
    settings: "scale-[0.55] tablet:scale-[0.72]",
    "settings-customization": "scale-[0.55] tablet:scale-[0.72]",
    "settings-marker": "scale-[0.55] tablet:scale-[0.72]",
    notifications: "scale-[0.7] tablet:scale-[0.9]",
};

export function UiEditSection() {
    const uiEdit = useMessages().fivepixels.uiEdit;

    return (
        <section
            className="w-full bg-[var(--fp-bg)] px-[1.2rem] tablet:px-[2.4rem]"
            id="ui-edit"
        >
            <div className="mx-auto w-full max-w-[var(--size-pc)] overflow-hidden border-x border-[var(--adaptive-border)]">
                {uiEdit.items.map((item, index) => (
                    <ZigzagRow
                        key={item.scene}
                        item={item}
                        index={index}
                        isLast={index === uiEdit.items.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}

function ZigzagRow({ item, index, isLast }: { item: UiEditItem; index: number; isLast: boolean }) {
    const scene = item.scene as FivePixelsDemoScene;
    const imageFirst = index % 2 === 1;
    const scaleClass = DEMO_SCALE[scene] ?? "";

    const text = (
        <article className={`flex min-h-[24rem] flex-col justify-between p-[2.4rem] tablet:min-h-[42rem] tablet:p-[5.2rem] ${imageFirst ? "order-1 tablet:order-2" : ""}`}>
            <div className="max-w-[42rem]">
                <span className="font-[family-name:var(--font-manrope)] text-[1.2rem] text-[var(--fp-text-description)]">{item.label}</span>
                <h3 className="mt-[1.2rem] text-[2.8rem] font-semibold leading-[1.2] text-[var(--fp-text-emphasis)] tablet:text-[3.2rem]">
                    {item.title}
                    {item.titleLine2 ? (
                        <>
                            <br />
                            {item.titleLine2}
                        </>
                    ) : null}
                </h3>
                <p className="mt-[1.6rem] text-[1.6rem] leading-[1.55] text-[var(--fp-text-description)]">{item.description}</p>
            </div>
            <span className="font-[family-name:var(--font-manrope)] text-[1.1rem] text-[var(--fp-text-description)]">{item.eyebrow}</span>
        </article>
    );

    const media = (
        <div
            className={`relative flex min-h-[32rem] items-center justify-center overflow-hidden border-t border-[var(--adaptive-border)] p-[2.4rem] tablet:min-h-[42rem] tablet:border-t-0 tablet:p-[4rem] ${
                imageFirst ? "order-2 tablet:order-1 tablet:border-r" : "tablet:border-l"
            }`}
        >
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
                scene={scene}
                locale="en"
                interaction="showcase"
                className={`absolute left-1/2 top-1/2 z-10 origin-center -translate-x-1/2 -translate-y-1/2 ${scaleClass}`.trim()}
                style={{ maxWidth: "none" }}
                ariaLabel={`${item.eyebrow.toLowerCase()} demo`}
            />
        </div>
    );

    return (
        <div className={`grid tablet:grid-cols-2 ${isLast ? "" : "border-b border-[var(--adaptive-border)]"}`}>
            {imageFirst ? (
                <>
                    {media}
                    {text}
                </>
            ) : (
                <>
                    {text}
                    {media}
                </>
            )}
        </div>
    );
}
