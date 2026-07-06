"use client";

import { useMessages } from "@/app/providers/LocaleProvider";

export function ShortcutHint() {
    const { report, view } = useMessages().example.shortcutHint;

    return (
        <p
            className="rounded-sm border border-[#2563eb]/30 bg-[#2563eb]/8 px-[1.6rem] py-[1.2rem] text-[1.4rem] leading-[1.5] text-black/70"
            data-report-id="example-shortcut-hint"
        >
            <span data-report-id="example-shortcut-hint-report">{report}</span>{" "}
            <span data-report-id="example-shortcut-hint-view">{view}</span>
        </p>
    );
}
