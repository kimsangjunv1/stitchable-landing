import type { ReactNode } from "react";

const INLINE_PATTERN = /(`[^`]+`|\*\*[^*]+\*\*)/g;

export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(INLINE_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <span key={index} className="vp-inline-tag">
              {part.slice(1, -1)}
            </span>
          );
        }

        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong
              key={index}
              className="font-semibold text-[var(--vp-color-text)]"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }

        return part;
      })}
    </>
  );
}
