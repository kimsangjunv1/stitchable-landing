"use client";

import { Text } from "@/shared/ui/Text";
import {
  parseRollingStat,
  type RollingStatParseResult,
} from "@/widgets/home/lib/parse-rolling-stat";

type LandingRollingStatProps = {
  value: string;
  textSize?: 22 | 24 | 30 | 32 | 36 | 38;
  className?: string;
  containerClassName?: string;
};

function isFallback(
  parsed: RollingStatParseResult,
): parsed is { fallback: string } {
  return "fallback" in parsed;
}

export function LandingRollingStat({
  value,
  textSize = 30,
  className = "font-semibold tracking-tight",
  containerClassName = "",
}: LandingRollingStatProps) {
  const parsed = parseRollingStat(value);

  if (isFallback(parsed)) {
    return <p className={className}>{parsed.fallback}</p>;
  }

  return (
    <Text.Rolling
      value={parsed.value}
      guide={{
        front: parsed.front ?? "",
        back: parsed.back ?? "",
      }}
      textSize={textSize}
      ariaLabel={value}
      className={{
        container: containerClassName,
        text: className,
        guide: {
          front: className,
          back: className,
        },
      }}
    />
  );
}
