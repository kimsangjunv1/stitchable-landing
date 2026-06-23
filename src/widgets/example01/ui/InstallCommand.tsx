"use client";

import { Link as LinkIcon } from "lucide-react";
import { useCallback, useState } from "react";

const COMMAND = "npm i @fivepixels-js/react";

export function InstallCommand() {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        await navigator.clipboard.writeText(COMMAND);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
    }, []);

    return (
        <button
            className="flex w-max max-w-full items-center gap-[1.6rem] border border-black p-[1.2rem_1.6rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem] transition-colors hover:bg-black/[0.03]"
            onClick={handleCopy}
            type="button"
        >
            <span className="truncate">{COMMAND}</span>
            <span className="h-[1.6rem] w-[0.1rem] shrink-0 bg-black" />
            <span className="flex shrink-0 items-center gap-[0.6rem] text-[1.2rem] text-black/60">
                <LinkIcon
                    size={14}
                    strokeWidth={2.4}
                />
                {copied ? "Copied" : "Copy"}
            </span>
        </button>
    );
}
