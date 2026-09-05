"use client";

import * as Layer from "@/widgets/fivepixels/ui";
import { FivepixelsPageProvider } from "@/widgets/fivepixels/model/FivepixelsContext";
import { useMessages } from "@/app/providers/LocaleProvider";

export default function Panel() {
    const { panelTitles } = useMessages().fivepixels;

    return (
        <FivepixelsPageProvider>
            <main className="relative min-h-screen overflow-hidden bg-[var(--adaptive-background)] font-[family-name:var(--font-pretendard)] text-[18px] text-[var(--adaptive-text-primary)] flex flex-col pt-[10.5rem]">
                <Layer.IntroSection />
                <Layer.HeroImageSection />
                <Layer.TitleSection
                    value={panelTitles[0]}
                    className={{ text: { container: "bg-[var(--adaptive-surface)]" } }}
                />
                <Layer.PainSection />
                <Layer.TitleSection
                    value={panelTitles[1]}
                    span={true}
                    align="center"
                    className={{ text: { container: "bg-black", value: "text-white" } }}
                    mode="dark"
                />
                <Layer.HowItWorksSection />
                <Layer.TitleSection
                    value={panelTitles[2]}
                    span={true}
                    align="center"
                    className={{ container: "bg-black", text: { container: "bg-black", value: "text-white" } }}
                    mode="dark"
                />
                <Layer.UiEditSection />
                <Layer.TitleSection
                    value={panelTitles[3]}
                    className={{ inner: "bg-black", text: { container: "bg-[var(--adaptive-surface)]" } }}
                />
                <Layer.FeatureSection />
                <Layer.TitleSection
                    value={panelTitles[4]}
                    className={{ text: { container: "bg-[var(--adaptive-surface)]" } }}
                    span={false}
                />
                <Layer.DeveloperReliefSection />
                <Layer.TitleSection
                    value={panelTitles[5]}
                    className={{ text: { container: "bg-[var(--adaptive-surface)]" } }}
                />
                <Layer.CompareSection />
                <Layer.TitleSection
                    value={panelTitles[6]}
                    className={{ text: { container: "bg-[var(--adaptive-surface)]" } }}
                />
                <Layer.AudienceSection />
                <Layer.TitleSection
                    value={panelTitles[8]}
                    className={{ text: { container: "bg-[var(--adaptive-surface)]" } }}
                />
                <Layer.FAQSection />
                <Layer.OpenSourceSection />
                <Layer.Modal />
            </main>
        </FivepixelsPageProvider>
    );
}
