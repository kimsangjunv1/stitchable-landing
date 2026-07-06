"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useMemo, type ReactNode } from "react";
import { useLocale, useMessages } from "@/app/providers/LocaleProvider";

const FivePixels = dynamic(() => import("@fivepixels-js/react").then((mod) => mod.FivePixels), { ssr: false });

type FivePixelsProviderProps = {
    children: ReactNode;
};

export function FivePixelsProvider({ children }: FivePixelsProviderProps) {
    const pathname = usePathname();
    const { locale } = useLocale();
    const fivePixels = useMessages().example.fivePixels;
    const isListPage = pathname.endsWith("/list");

    const fields = useMemo(
        () => [
            { key: "message", type: "textarea" as const, label: fivePixels.messageLabel, required: true },
            { key: "isBug", type: "checkbox" as const, label: fivePixels.bugLabel },
            { key: "isImportant", type: "checkbox" as const, label: fivePixels.importantLabel },
        ],
        [fivePixels.bugLabel, fivePixels.importantLabel, fivePixels.messageLabel],
    );

    const ui = useMemo(
        () => ({
            locale,
            appearance: "system" as const,
            showFeedbackList: true,
            visibleShortcutKeys: true,
        }),
        [isListPage, locale],
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
                fields={fields}
            />
            {children}
        </>
    );
}
