"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useConfirmModalStore } from "./useConfirmModalStore";
import { useSearch } from "./useSearch";

type GuideContextValue = ReturnType<typeof useConfirmModalStore> &
    ReturnType<typeof useSearch> & {
        activeSectionId: string;
        setActiveSectionId: (id: string) => void;
    };

const GuideContext = createContext<GuideContextValue | null>(null);

export function GuidePageProvider({ children, initialSectionId = "getting-started" }: { children: ReactNode; initialSectionId?: string }) {
    const confirmModalStore = useConfirmModalStore();
    const searchStore = useSearch();
    const [activeSectionId, setActiveSectionIdState] = useState(initialSectionId);

    const setActiveSectionId = useCallback((id: string) => {
        setActiveSectionIdState(id);
    }, []);

    const value = useMemo(
        () => ({
            ...confirmModalStore,
            ...searchStore,
            activeSectionId,
            setActiveSectionId,
        }),
        [confirmModalStore, searchStore, activeSectionId, setActiveSectionId],
    );

    return <GuideContext.Provider value={value}>{children}</GuideContext.Provider>;
}

export function useGuideProvider() {
    const ctx = useContext(GuideContext);
    if (!ctx) {
        throw new Error("useGuideProvider must be used within GuidePageProvider");
    }
    return ctx;
}
