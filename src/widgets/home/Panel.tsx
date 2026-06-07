"use client";

import { HomePageProvider } from "@/features/home/model/HomeContext";
import { LenisProvider } from "@/app/providers/LenisProvider";
import * as HomeLayer from "./ui";
import { StitchableReport } from "./ui/StitchableReport";
import { SectionTheme } from "./ui/SectionTheme";
import { FeatureArchitecture } from "./ui/features/FeatureArchitecture";
import { FeatureWorkflowStack } from "./ui/features/FeatureWorkflowStack";
import { FeaturePersistenceSplit } from "./ui/features/FeaturePersistenceSplit";
import { FeatureFullstackGrid } from "./ui/features/FeatureFullstackGrid";

export default function Panel() {
  return (
    <HomePageProvider>
      <div className="marketing-layout">
        <StitchableReport />

        <div className="vp-section-light sticky top-0 z-50 w-full">
          <div className="vp-page-shell">
            <HomeLayer.SiteHeader />
          </div>
        </div>

        <SectionTheme theme="light">
          <main>
            <HomeLayer.Hero />
            <HomeLayer.FoundationIntro />
            <HomeLayer.FeatureStickyNav />
            <HomeLayer.FeatureSections />
          </main>
        </SectionTheme>

        <SectionTheme theme="dark">
          <FeatureArchitecture />
          <FeatureWorkflowStack />
        </SectionTheme>

        <SectionTheme theme="light">
          <FeaturePersistenceSplit />
          <FeatureFullstackGrid />
          <HomeLayer.LibraryGoodPoints />
        </SectionTheme>

        <SectionTheme theme="dark">
          <HomeLayer.OpenSourceNotice />
          <HomeLayer.CtaBanner />
          <HomeLayer.SiteFooter />
        </SectionTheme>
      </div>
      {/* <LenisProvider>
      </LenisProvider> */}
    </HomePageProvider>
  );
}
