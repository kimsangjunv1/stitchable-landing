"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useMemo, type ReactNode } from "react";

const FivePixels = dynamic(() => import("@fivepixels-js/react").then((mod) => mod.FivePixels), { ssr: false });

const BASE_FIELDS = [
    { key: "message", type: "textarea" as const, label: "Message", required: true },
    { key: "isBug", type: "checkbox" as const, label: "bug" },
    { key: "isImportant", type: "checkbox" as const, label: "IMPORTANT" },
];

type FivePixelsProviderProps = {
    children: ReactNode;
};

export function FivePixelsProvider({ children }: FivePixelsProviderProps) {
    const pathname = usePathname();
    const isListPage = pathname.endsWith("/list");

    const ui = useMemo(
        () => ({
            locale: "ko" as const,
            appearance: "system" as const,
            showFeedbackList: true,
            visibleShortcutKeys: true,
        }),
        [isListPage],
    );

    return (
        <>
            <FivePixels
                project={{ id: "example-01", env: "demo" }}
                ui={ui}
                visibility={{ devOnly: false }}
                team={{
                    user: { id: "demo-user", name: "Demo User" },
                    reviewers: [
                        { id: "1", name: "Reviewer A" },
                        { id: "2", name: "Reviewer B" },
                    ],
                }}
                fields={BASE_FIELDS}
            />
            {children}
        </>
    );
}
