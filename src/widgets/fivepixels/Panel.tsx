"use client";

import * as Layer from "@/widgets/fivepixels/ui";
import { FivepixelsPageProvider } from "@/widgets/fivepixels/model/FivepixelsContext";
import { useMessages } from "@/app/providers/LocaleProvider";

export default function Panel() {
    const { panelTitles } = useMessages().fivepixels;

    return (
        <FivepixelsPageProvider>
            <main className="relative min-h-screen overflow-hidden bg-white font-[family-name:var(--font-pretendard)] text-[18px] text-[#050505] flex flex-col pt-[9.2rem]">
                <Layer.IntroSection />
                <Layer.HeroImageSection />
                <Layer.TitleSection
                    value={panelTitles[0]}
                    className={{ text: { container: "bg-white" } }}
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
                    className={{ inner: "bg-black", text: { container: "bg-white" } }}
                />
                <Layer.FeatureSection />
                <Layer.TitleSection
                    value={panelTitles[4]}
                    className={{ text: { container: "bg-white" } }}
                    span={false}
                />
                <Layer.DeveloperReliefSection />
                <Layer.TitleSection
                    value={panelTitles[5]}
                    className={{ text: { container: "bg-white" } }}
                />
                <Layer.CompareSection />
                <Layer.TitleSection
                    value={panelTitles[6]}
                    className={{ text: { container: "bg-white" } }}
                />
                <Layer.AudienceSection />
                <Layer.TitleSection
                    value={panelTitles[8]}
                    className={{ text: { container: "bg-white" } }}
                />
                <Layer.FAQSection />
                <Layer.OpenSourceSection />
                <Layer.Modal />
            </main>
        </FivepixelsPageProvider>
    );
}
