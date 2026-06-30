import { Fragment, type ReactNode } from "react";

const INLINE_PATTERN = /(`[^`]+`|\*\*[^*]+\*\*)/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
    return text.split(INLINE_PATTERN).map((part, index) => {
        if (!part) return null;

        const key = `${keyPrefix}-${index}`;

        if (part.startsWith("`") && part.endsWith("`")) {
            return (
                <span
                    key={key}
                    className="font-mono text-[1.4rem] text-[#d9391f] bg-[#ff4b2e20] p-[0.1rem_0.2rem] rounded-[0.4rem]"
                >
                    {part.slice(1, -1)}
                </span>
            );
        }

        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong
                    key={key}
                    className="font-semibold text-[#050505]"
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }

        return <Fragment key={key}>{part}</Fragment>;
    });
}

export function RichText({ text }: { text: string }): ReactNode {
    const lines = text.split("\n");

    return (
        <>
            {lines.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                    {lineIndex > 0 && <br />}
                    {renderInline(line, String(lineIndex))}
                </Fragment>
            ))}
        </>
    );
}
