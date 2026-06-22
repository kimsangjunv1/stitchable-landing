"use client"

import * as Layer from "@/widgets/rebranding-landing/ui"
import { RebrandingLandingPageProvider } from "@/widgets/rebranding-landing/model/RebrandingLandingContext"

export default function Panel() {
  return (
    <RebrandingLandingPageProvider>
      <main className="min-h-screen overflow-hidden bg-white font-[family-name:var(--font-mona-rebrand)] text-[18px] text-[#050505]">
        <Layer.IntroSection />
        <Layer.MarqueeSection />
        <Layer.SetupSection />
        <Layer.OpenSourceSection />
        <Layer.WordmarkSection />
        <Layer.FooterSection />
        <Layer.Modal />
      </main>
    </RebrandingLandingPageProvider>
  )
}
