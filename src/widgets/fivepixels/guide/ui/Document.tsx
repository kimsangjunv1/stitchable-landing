"use client";

import Link from "next/link";
import type { GuideBlock, GuideHero, GuideSection } from "@/i18n/guide/types";
import { BACKEND_API_SNIPPETS } from "@/i18n/guide/backend-api/snippets";
import { RichText } from "@/shared/ui/rich-text";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";
import { DocTable } from "./DocTable";
import { GuideStep } from "./GuideStep";
import { QuickStartHero } from "./QuickStartHero";

const expandedText = "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]";

function BlockRenderer({ block }: { block: GuideBlock }) {
    switch (block.type) {
        case "paragraph":
            return (
                <p className="text-[1.6rem] leading-[1.6] text-black/70">
                    <RichText text={block.text} />
                </p>
            );
        case "list":
            return (
                <ul className="list-disc space-y-[0.8rem] pl-[2rem] text-[1.6rem] leading-[1.6] text-black/70">
                    {block.items.map((item) => (
                        <li key={item}>
                            <RichText text={item} />
                        </li>
                    ))}
                </ul>
            );
        case "ordered":
            return (
                <ol className="list-decimal space-y-[0.8rem] pl-[2rem] text-[1.6rem] leading-[1.6] text-black/70">
                    {block.items.map((item) => (
                        <li key={item}>
                            <RichText text={item} />
                        </li>
                    ))}
                </ol>
            );
        case "code":
            return (
                <CodeBlock
                    snippet={block.snippet}
                    language={block.language}
                />
            );
        case "codeRaw":
            return (
                <CodeBlock
                    code={block.code}
                    language={block.language}
                />
            );
        case "codeSnippet":
            return (
                <CodeBlock
                    code={BACKEND_API_SNIPPETS[block.snippet]}
                    language={block.language}
                />
            );
        case "link":
            return (
                <Link
                    href={block.href}
                    className="inline-flex items-center gap-[0.8rem] font-[family-name:var(--font-mona-rebrand)] text-[1.6rem] font-semibold text-[#3182f6] transition-colors hover:text-[#1b64da]"
                >
                    {block.label}
                    <span aria-hidden>→</span>
                </Link>
            );
        case "callout":
            return <Callout text={block.text} />;
        case "table":
            return (
                <DocTable
                    headers={block.headers}
                    rows={block.rows}
                />
            );
        case "subheading":
            return (
                <h3
                    id={block.id}
                    className={`${expandedText} scroll-mt-[calc(var(--site-banner-height)+12rem)] text-[2rem] text-[#050505]`}
                >
                    {block.text}
                </h3>
            );
        default:
            return null;
    }
}

function ReferenceSection({ section }: { section: GuideSection }) {
    return (
        <section
            id={section.id}
            className="p-[7.2rem_2.4rem] border-b border-b-[#ededed]"
        >
            <h2 className={`${expandedText} text-[3.2rem] leading-[1.05] mobile:text-[2.4rem]`}>{section.title}</h2>
            <div className="mt-[2.4rem] flex flex-col gap-[2.4rem]">
                {section.blocks.map((block, i) => (
                    <BlockRenderer
                        key={`${section.id}-${i}`}
                        block={block}
                    />
                ))}
            </div>
        </section>
    );
}

export function Document({ hero, referenceDivider, sections }: { hero: GuideHero; referenceDivider: string; sections: GuideSection[] }) {
    const quickStartSections = sections.filter((s) => s.variant === "quick-start");
    const referenceSections = sections.filter((s) => s.variant === "reference");

    return (
        <article className="min-w-0 flex-1 pb-[8rem] pt-[2.8rem]">
            <QuickStartHero hero={hero} />

            <div className="flex flex-col gap-[4.8rem]">
                {quickStartSections.map((section) => (
                    <GuideStep
                        key={section.id}
                        id={section.id}
                        stepLabel={section.stepLabel ?? ""}
                        title={section.title}
                    >
                        {section.blocks.map((block, i) => (
                            <BlockRenderer
                                key={`${section.id}-${i}`}
                                block={block}
                            />
                        ))}
                    </GuideStep>
                ))}
            </div>

            {referenceSections.length > 0 && (
                <div className="flex flex-col">
                    {referenceSections.map((section) => (
                        <ReferenceSection
                            key={section.id}
                            section={section}
                        />
                    ))}
                </div>
            )}
        </article>
    );
}
