"use client"

import { HomePageProvider } from "@/features/home/model/HomeContext"
import * as HomeLayer from "./ui"

export default function Panel() {
  return (
    <HomePageProvider>
      <HomeLayer.SiteHeader />
      <main>
        <HomeLayer.Hero />
        <HomeLayer.WorkflowStrip />
        <HomeLayer.FeatureGrid />
        <HomeLayer.CodeExamples />
        <HomeLayer.Pricing />
      </main>
      <HomeLayer.SiteFooter />
    </HomePageProvider>
  )
}
