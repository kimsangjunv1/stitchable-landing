"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import { RichText } from "@/shared/ui/rich-text";
import { Text } from "@/shared/ui/Text";
import { landingRevealColors } from "@/widgets/home/lib/reveal-theme";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
    const t = useMessages().landing.hero;

    return (
        <article className="vp-hero-surface border-b border-[var(--vp-color-stroke)] grid grid-cols-1 lg:grid-cols-2">
            <section className="flex w-full flex-col items-center gap-6 text-center p-[54px] lg:items-start lg:text-left">
                <div className="space-y-4">
                    <Text.Reveal
                        as="h1"
                        align="center"
                        className="text-balance text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-left lg:text-[3.25rem]"
                        {...landingRevealColors}
                    >
                        {`${t.titleLine1}\n${t.titleLine2}`}
                    </Text.Reveal>

                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--vp-color-text-muted)] sm:text-lg lg:mx-0">
                        <RichText text={t.description} />
                    </p>

                    <p className="text-sm text-[var(--vp-color-text-dim)]">
                        <RichText text={t.license} />
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                    <a
                        href="#quickstart"
                        className="vp-btn-brand inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm transition-colors"
                    >
                        {t.getStarted}
                        <ArrowRight className="size-4" />
                    </a>
                    <a
                        href="/guide"
                        className="vp-btn-alt inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors"
                    >
                        {t.readDocs}
                    </a>
                </div>
            </section>

            <ProductPreview embedded />
        </article>
    );
}
