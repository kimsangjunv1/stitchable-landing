import { Fragment, type ReactNode } from "react";

const INLINE_PATTERN = /(`[^`]+`|\*\*[^*]+\*\*)/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(INLINE_PATTERN).map((part, index) => {
    if (!part) return null;

    const key = `${keyPrefix}-${index}`;

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <span key={key} className="vp-inline-tag">
          {part.slice(1, -1)}
        </span>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={key}
          className="font-semibold text-[var(--vp-color-text)]"
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
