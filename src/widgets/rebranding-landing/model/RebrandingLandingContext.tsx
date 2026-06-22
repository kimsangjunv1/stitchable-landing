"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useConfirmModalStore } from "./useConfirmModalStore"
import { useSearch } from "./useSearch"

type RebrandingLandingContextValue =
  ReturnType<typeof useConfirmModalStore> & ReturnType<typeof useSearch>

const RebrandingLandingContext =
  createContext<RebrandingLandingContextValue | null>(null)

export function RebrandingLandingPageProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const confirmModalStore = useConfirmModalStore()
  const searchStore = useSearch()

  return (
    <RebrandingLandingContext.Provider
      value={{ ...confirmModalStore, ...searchStore }}
    >
      {children}
    </RebrandingLandingContext.Provider>
  )
}

export function useRebrandingLandingProvider() {
  const context = useContext(RebrandingLandingContext)

  if (!context) {
    throw new Error(
      "useRebrandingLandingProvider must be used within RebrandingLandingPageProvider",
    )
  }

  return context
}
