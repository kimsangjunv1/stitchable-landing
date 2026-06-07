"use client"

import { GuidePageProvider } from "@/features/guide/model/GuideContext"
import * as GuideLayer from "./ui"

export default function Panel() {
  return (
    <GuidePageProvider>
      <GuideLayer.Shell />
    </GuidePageProvider>
  )
}
