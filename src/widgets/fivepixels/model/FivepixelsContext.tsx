"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useConfirmModalStore } from "./useConfirmModalStore";
import { useSearch } from "./useSearch";

type FivepixelsContextValue = ReturnType<typeof useConfirmModalStore> & ReturnType<typeof useSearch>;

const FivepixelsContext = createContext<FivepixelsContextValue | null>(null);

export function FivepixelsPageProvider({ children }: Readonly<{ children: ReactNode }>) {
    const confirmModalStore = useConfirmModalStore();
    const searchStore = useSearch();

    return <FivepixelsContext.Provider value={{ ...confirmModalStore, ...searchStore }}>{children}</FivepixelsContext.Provider>;
}

export function useFivepixelsProvider() {
    const context = useContext(FivepixelsContext);

    if (!context) {
        throw new Error("useFivepixelsProvider must be used within FivepixelsPageProvider");
    }

    return context;
}
