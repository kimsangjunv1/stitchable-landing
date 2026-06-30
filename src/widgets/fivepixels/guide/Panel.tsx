"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { GuidePageProvider } from "@/widgets/fivepixels/guide/model/GuideContext";
import * as GuideLayer from "./ui";

export default function Panel() {
    const guide = useMessages().guide;

    return (
        <GuidePageProvider>
            <GuideLayer.Shell guide={guide} />
            <GuideLayer.Modal />
        </GuidePageProvider>
    );
}
