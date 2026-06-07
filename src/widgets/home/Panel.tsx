"use client";

import { HomePageProvider } from "@/features/home/model/HomeContext";
import * as HomeLayer from "./ui";

export default function Panel() {
  return (
    <HomePageProvider>
      <div className="marketing-layout bg-[var(--vp-color-white)]">
        <HomeLayer.SiteHeader />
        <main className="bg-[#ededed]">
          <HomeLayer.Hero />
          <HomeLayer.TerminalPreview />
          <HomeLayer.BentoSections />
          <HomeLayer.DarkShowcase />
          <HomeLayer.CtaBanner />
        </main>
        <HomeLayer.SiteFooter />
      </div>
    </HomePageProvider>
  );
}
