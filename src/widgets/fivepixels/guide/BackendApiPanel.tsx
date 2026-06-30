"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { GuidePageProvider } from "@/widgets/fivepixels/guide/model/GuideContext";
import { Shell } from "@/widgets/fivepixels/guide/ui/Shell";

export function BackendApiGuidePanel() {
    const guide = useMessages().backendApiGuide;

    return (
        <GuidePageProvider initialSectionId="ba-intro">
            <Shell guide={guide} />
        </GuidePageProvider>
    );
}
