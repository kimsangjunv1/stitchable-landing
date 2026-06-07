"use client"

import { createContext, useContext, type ReactNode } from "react"

type PopupContextValue = {
  open: (content: ReactNode) => void
  close: () => void
}

const PopupContext = createContext<PopupContextValue>({
  open: () => {},
  close: () => {},
})

export function PopupProvider({ children }: { children: ReactNode }) {
  return <PopupContext.Provider value={{ open: () => {}, close: () => {} }}>{children}</PopupContext.Provider>
}

export function usePopup() {
  return useContext(PopupContext)
}
