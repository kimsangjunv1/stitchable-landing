"use client";

import * as Layer from "@/widgets/fivepixels/ui";
import { FivepixelsPageProvider } from "@/widgets/fivepixels/model/FivepixelsContext";

export default function Panel() {
    return (
        <FivepixelsPageProvider>
            {/* <main className="min-h-screen overflow-hidden bg-white font-[family-name:var(--font-mona-rebrand)] text-[18px] text-[#050505]"> */}
            <main className="min-h-screen overflow-hidden bg-white font-[family-name:var(--font-mona-rebrand)] text-[18px] text-[#050505] flex flex-col gap-[12.8rem]">
                <Layer.IntroSection />
                <Layer.MarqueeSection />
                <Layer.SetupSection />
                <Layer.OpenSourceSection />
                <Layer.WordmarkSection />
                <Layer.Modal />
            </main>
        </FivepixelsPageProvider>
    );
}
