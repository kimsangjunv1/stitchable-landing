"use client";

import { HomePageProvider } from "@/features/home/model/HomeContext";
import * as HomeLayer from "./ui";

export default function Panel() {
  return (
    <HomePageProvider>
      <div className="marketing-layout">
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
    </HomePageProvider>
  );
}
