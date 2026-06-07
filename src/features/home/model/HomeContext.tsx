"use client"

import { createContext, useContext, type ReactNode } from "react"

type HomeContextValue = Record<string, never>

const HomeContext = createContext<HomeContextValue | null>(null)

export function HomePageProvider({ children }: { children: ReactNode }) {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>
}

export function useHomeProvider() {
  const context = useContext(HomeContext)
  if (!context) {
    throw new Error("useHomeProvider must be used within HomePageProvider")
  }
  return context
}
