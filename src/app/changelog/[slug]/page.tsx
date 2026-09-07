import { ArrowLeft, Copy } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { changelogEntries, changelogTypeLabels, formatContentDate } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { ContentSections } from "@/widgets/content/ContentSections";
import { ChangelogTypeBadge } from "@/widgets/content/ChangelogTypeBadge";
import type { Metadata } from "next";

type ChangelogDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return changelogEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ChangelogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const entry = changelogEntries.find((item) => item.slug === slug);

    if (!entry) return {};

    return createPageMetadata({
        title: entry.title,
        description: entry.summary,
        path: `/changelog/${entry.slug}`,
    });
}

export default async function ChangelogDetailPage({ params }: ChangelogDetailPageProps) {
    const { slug } = await params;
    const entry = changelogEntries.find((item) => item.slug === slug);

    if (!entry) notFound();

    return (
        <main className="min-h-screen bg-[var(--adaptive-background)] pt-[calc(var(--site-banner-height)+7.2rem)] text-[var(--adaptive-text-primary)]">
            <div className="mx-auto w-full max-w-[115.2rem] px-[1.6rem] py-[5.6rem] tablet:px-[6.4rem] tablet:py-[8rem] pc:px-[9.6rem]">
                <Link
                    className="inline-flex items-center gap-[0.7rem] text-[1.3rem] text-[var(--adaptive-text-muted)] hover:text-[var(--adaptive-text-primary)]"
                    href="/changelog"
                >
                    <ArrowLeft size={15} />
                    Changelog
                </Link>

                <div className="mt-[5.6rem] grid gap-[5.6rem] lg:grid-cols-12 lg:gap-[6.4rem]">
                    <article className="lg:col-span-8">
                        <div className="flex flex-wrap items-center gap-[1rem]">
                            <time className="text-[1.25rem] text-[var(--adaptive-text-muted)]" dateTime={entry.date}>
                                {formatContentDate(entry.date)}
                            </time>
                            <ChangelogTypeBadge type={entry.changeType} />
                        </div>
                        <h1 className="mt-[2.4rem] text-[4rem] font-semibold leading-[1.08] tracking-[-0.055em] tablet:text-[5.6rem]">{entry.title}</h1>
                        <p className="mt-[2.4rem] border-b border-[var(--adaptive-border)] pb-[4rem] text-[2rem] leading-[1.65] text-[var(--adaptive-text-secondary)]">{entry.summary}</p>
                        <div className="pt-[4rem]">
                            <ContentSections sections={entry.sections} />
                        </div>
                    </article>

                    <aside className="self-start border-t border-[var(--adaptive-border)] lg:sticky lg:top-[12rem] lg:col-span-4">
                        <dl>
                            <div className="border-b border-[var(--adaptive-border)] py-[1.8rem]">
                                <dt className="text-[1.1rem] uppercase tracking-[0.12em] text-[var(--adaptive-text-muted)]">Change type</dt>
                                <dd className="mt-[0.8rem] text-[1.45rem]">{changelogTypeLabels[entry.changeType]}</dd>
                            </div>
                            <div className="border-b border-[var(--adaptive-border)] py-[1.8rem]">
                                <dt className="text-[1.1rem] uppercase tracking-[0.12em] text-[var(--adaptive-text-muted)]">Products</dt>
                                <dd className="mt-[0.8rem] flex flex-wrap gap-[0.6rem] text-[1.45rem]">{entry.products.join(", ")}</dd>
                            </div>
                            <div className="border-b border-[var(--adaptive-border)] py-[1.8rem]">
                                <dt className="text-[1.1rem] uppercase tracking-[0.12em] text-[var(--adaptive-text-muted)]">Product stage</dt>
                                <dd className="mt-[0.8rem] text-[1.45rem]">{entry.stage}</dd>
                            </div>
                            <div className="border-b border-[var(--adaptive-border)] py-[1.8rem]">
                                <dt className="text-[1.1rem] uppercase tracking-[0.12em] text-[var(--adaptive-text-muted)]">Self-hosted</dt>
                                <dd className="mt-[0.8rem] text-[1.45rem]">{entry.selfHosted ? "Affected" : "Not affected"}</dd>
                            </div>
                        </dl>
                        <Link
                            className="mt-[1.8rem] inline-flex items-center gap-[0.7rem] text-[1.25rem] text-[var(--adaptive-text-muted)] hover:text-[var(--adaptive-text-primary)]"
                            href="/changelog.md"
                        >
                            <Copy size={14} />
                            View as Markdown
                        </Link>
                    </aside>
                </div>
            </div>
        </main>
    );
}
