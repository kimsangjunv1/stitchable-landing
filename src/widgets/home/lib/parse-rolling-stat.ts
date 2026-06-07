export type ParsedRollingStat = {
  value: number;
  front?: string;
  back?: string;
};

export type RollingStatParseResult =
  | ParsedRollingStat
  | { fallback: string };

export function parseRollingStat(raw: string): RollingStatParseResult {
  const match = raw.match(/^([^0-9]*)([0-9]+)(.*)$/);

  if (!match) {
    return { fallback: raw };
  }

  const [, front, numeric, back] = match;

  return {
    value: Number.parseInt(numeric, 10),
    front: front || undefined,
    back: back || undefined,
  };
}
