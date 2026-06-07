"use client"

import { useMessages } from "@/app/providers/LocaleProvider"
import { useGuideSectionObserver } from "@/features/guide/model/useGuideSectionObserver"
import { Document } from "./Document"
import { Sidebar } from "./Sidebar"
import { TopBar } from "./TopBar"

export function Shell() {
  const guide = useMessages().guide
  const sectionIds = guide.sections.map((s) => s.id)

  useGuideSectionObserver(sectionIds)

  return (
    <div className="min-h-screen bg-background">
      <TopBar navHome={guide.navHome} />
      <div className="mx-auto flex max-w-6xl gap-10 px-6">
        <Sidebar
          groups={guide.navGroups}
          sections={guide.sections}
          onThisPage={guide.onThisPage}
        />
        <Document
          title={guide.title}
          description={guide.description}
          sections={guide.sections}
        />
      </div>
    </div>
  )
}
