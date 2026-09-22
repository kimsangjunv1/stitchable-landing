import { changelogEntries } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { ChangelogFeed } from "@/widgets/content/ChangelogFeed";

export const metadata = createPageMetadata({
    title: "Changelog",
    description: "New fivepixels features, improvements, fixes, and documentation updates.",
    path: "/changelog",
});

export default function ChangelogPage() {
    return (
        <main className="min-h-screen bg-[var(--adaptive-background)] pt-[calc(var(--site-banner-height)+7.2rem)] text-[var(--adaptive-text-primary)]">
            <div className="mx-auto flex w-full max-w-[115.2rem] flex-col px-[1.6rem] py-[5.6rem] tablet:px-[6.4rem] tablet:py-[8rem] pc:px-[9.6rem]">
                <header className="pb-[3.2rem]">
                    <h1 className="text-[4.4rem] font-semibold tracking-[-0.055em] tablet:text-[5.6rem]">Changelog</h1>
                    <p className="mt-[1.2rem] text-[1.8rem] text-[var(--adaptive-text-muted)]">New updates and product improvements</p>
                </header>

                <ChangelogFeed entries={changelogEntries} />
            </div>
        </main>
    );
}
