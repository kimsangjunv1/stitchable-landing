"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { GuidePageProvider } from "@/widgets/fivepixels/guide/model/GuideContext";
import * as GuideLayer from "./ui";

export type GuideKind = "guides" | "docs";

export default function Panel({ kind, slug }: { kind: GuideKind; slug: string }) {
    const collection = useMessages()[kind];
    const page = collection.pages[slug];

    if (!page) return null;

    return (
        <GuidePageProvider initialSectionId={page.sections[0]?.id}>
            <GuideLayer.Shell collection={collection} page={page} />
            <GuideLayer.Modal />
        </GuidePageProvider>
    );
}
