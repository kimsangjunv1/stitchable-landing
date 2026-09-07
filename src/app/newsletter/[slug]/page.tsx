import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatContentDate, newsletterPosts } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { ContentSections } from "@/widgets/content/ContentSections";
import type { Metadata } from "next";

type NewsletterDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return newsletterPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsletterDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = newsletterPosts.find((item) => item.slug === slug);

    if (!post) return {};

    return createPageMetadata({
        title: post.title,
        description: post.excerpt,
        path: `/newsletter/${post.slug}`,
    });
}

export default async function NewsletterDetailPage({ params }: NewsletterDetailPageProps) {
    const { slug } = await params;
    const post = newsletterPosts.find((item) => item.slug === slug);

    if (!post) notFound();

    return (
        <main className="min-h-screen bg-[var(--adaptive-background)] pt-[calc(var(--site-banner-height)+7.2rem)] text-[var(--adaptive-text-primary)]">
            <article className="mx-auto w-full max-w-[84rem] px-[1.6rem] py-[5.6rem] tablet:px-[6.4rem] tablet:py-[8rem]">
                <Link
                    className="inline-flex items-center gap-[0.7rem] text-[1.3rem] text-[var(--adaptive-text-muted)] hover:text-[var(--adaptive-text-primary)]"
                    href="/newsletter"
                >
                    <ArrowLeft size={15} />
                    Newsletter
                </Link>

                <header className="mt-[5.6rem] border-b border-[var(--adaptive-border)] pb-[4.8rem]">
                    <span className="text-[1.1rem] font-semibold uppercase tracking-[0.16em] text-[var(--adaptive-accent-coral)]">Issue {post.issue}</span>
                    <h1 className="mt-[1.8rem] text-[4.4rem] font-semibold leading-[1.06] tracking-[-0.055em] tablet:text-[6.4rem]">{post.title}</h1>
                    <p className="mt-[2rem] text-[1.9rem] leading-[1.7] text-[var(--adaptive-text-secondary)]">{post.excerpt}</p>
                    <div className="mt-[2.4rem] flex flex-wrap gap-[1rem] text-[1.2rem] text-[var(--adaptive-text-muted)]">
                        <span>{post.category}</span>
                        <span aria-hidden>·</span>
                        <time dateTime={post.date}>{formatContentDate(post.date)}</time>
                        <span aria-hidden>·</span>
                        <span>{post.readingTime}</span>
                    </div>
                </header>

                <div className="pt-[4.8rem]">
                    <ContentSections sections={post.sections} />
                </div>
            </article>
        </main>
    );
}
