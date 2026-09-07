"use client";

import * as Layer from "@/widgets/fivepixels/ui";
import { FivepixelsPageProvider } from "@/widgets/fivepixels/model/FivepixelsContext";
import { useMessages } from "@/app/providers/LocaleProvider";

export default function Panel() {
    const { panelTitles } = useMessages().fivepixels;

    return (
        <FivepixelsPageProvider>
            <main className="relative min-h-screen overflow-hidden bg-[var(--fp-bg)] font-[family-name:var(--font-inter)] text-[18px] text-[var(--fp-text-emphasis)] flex flex-col pt-[10.5rem]">
                <Layer.IntroSection />
                <Layer.HeroImageSection />
                <Layer.TitleSection value={panelTitles[0]} />
                <Layer.PainSection />
                <Layer.TitleSection value={panelTitles[1]} span={true} align="center" />
                <Layer.HowItWorksSection />
                <Layer.TitleSection value={panelTitles[2]} span={true} align="center" />
                <Layer.UiEditSection />
                <Layer.TitleSection value={panelTitles[3]} />
                <Layer.FeatureSection />
                <Layer.TitleSection value={panelTitles[4]} span={false} />
                <Layer.DeveloperReliefSection />
                <Layer.TitleSection value={panelTitles[5]} />
                <Layer.CompareSection />
                <Layer.TitleSection value={panelTitles[6]} />
                <Layer.AudienceSection />
                <Layer.TitleSection value={panelTitles[8]} />
                <Layer.FAQSection />
                <Layer.OpenSourceSection />
                <Layer.Modal />
            </main>
        </FivepixelsPageProvider>
    );
}
