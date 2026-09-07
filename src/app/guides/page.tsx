import type { Metadata } from "next";
import { docsEn, guidesEn } from "@/i18n/guide/en";
import { createPageMetadata } from "@/lib/seo";
import { Main } from "@/widgets/layout/Main";
import { GuideHome } from "@/widgets/fivepixels/guide/ui/GuideHome";

export const metadata: Metadata = createPageMetadata({
    title: "Fivepixels guides",
    description: guidesEn.description,
    path: "/guides",
    keywords: ["fivepixels", "adoption guide", "developer docs", "React review"],
});

export default function GuidesPage() {
    return (
        <Main id="fivepixels-guides" className={{ container: "min-h-screen bg-[var(--adaptive-background)] text-[var(--adaptive-text-primary)]", inner: "" }}>
            <GuideHome guides={guidesEn} docs={docsEn} />
        </Main>
    );
}
