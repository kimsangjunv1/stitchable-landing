"use client";

import { HomePageProvider } from "@/features/home/model/HomeContext";
import { LenisProvider } from "@/app/providers/LenisProvider";
import * as HomeLayer from "./ui";
import { StitchableReport } from "./ui/StitchableReport";

export default function Panel() {
  return (
    <HomePageProvider>
      <LenisProvider>
        <div className="marketing-layout">
          <StitchableReport />
          <HomeLayer.SiteHeader />
          <main>
            <HomeLayer.Hero />
            <HomeLayer.FoundationIntro />
            <HomeLayer.FeatureStickyNav />
            <HomeLayer.FeatureSections />
            <HomeLayer.OpenSourceNotice />
            <HomeLayer.CtaBanner />
          </main>
          <HomeLayer.SiteFooter />
        </div>
      </LenisProvider>
    </HomePageProvider>
  );
}
