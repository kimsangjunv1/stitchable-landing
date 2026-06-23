"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useConfirmModalStore } from "./useConfirmModalStore";
import { useSearch } from "./useSearch";

type Example01ContextValue = ReturnType<typeof useConfirmModalStore> & ReturnType<typeof useSearch>;

const Example01Context = createContext<Example01ContextValue | null>(null);

export function Example01PageProvider({ children }: Readonly<{ children: ReactNode }>) {
    const confirmModalStore = useConfirmModalStore();
    const searchStore = useSearch();

    return <Example01Context.Provider value={{ ...confirmModalStore, ...searchStore }}>{children}</Example01Context.Provider>;
}

export function useExample01Provider() {
    const context = useContext(Example01Context);

    if (!context) {
        throw new Error("useExample01Provider must be used within Example01PageProvider");
    }

    return context;
}
