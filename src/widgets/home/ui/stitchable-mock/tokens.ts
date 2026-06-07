import type { CSSProperties } from "react"

/** Stitchable light theme adaptive tokens (from reportStylesheet) */
export const STITCHABLE_LIGHT_STYLE: CSSProperties = {
  ["--adaptive-black50" as string]: "#fafafa",
  ["--adaptive-black100" as string]: "#f5f5f5",
  ["--adaptive-black200" as string]: "#eee",
  ["--adaptive-black300" as string]: "#e0e0e0",
  ["--adaptive-black400" as string]: "#bdbdbd",
  ["--adaptive-black500" as string]: "#999",
  ["--adaptive-black600" as string]: "#757575",
  ["--adaptive-black700" as string]: "#616161",
  ["--adaptive-black800" as string]: "#424242",
  ["--adaptive-black900" as string]: "#212121",
  ["--adaptive-blackOpacity500" as string]: "rgba(0,0,0,0.46)",
  ["--adaptive-blackOpacity800" as string]: "rgba(0,0,0,0.8)",
  ["--adaptive-blackOpacity900" as string]: "rgba(0,0,0,0.91)",
  ["--adaptive-whiteOpacity800" as string]: "hsla(0,0%,100%,0.8)",
  ["--adaptive-blue500" as string]: "#3182f6",
  ["--adaptive-green500" as string]: "#03b26c",
  ["--adaptive-orange500" as string]: "#fe9800",
  ["--adaptive-red400" as string]: "#f66570",
  ["--ui-font" as string]:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontFamily: "var(--ui-font)",
  fontSize: "14px",
  fontWeight: 600,
}

export const MARKER_ITEM = "#f04452"

export const FEEDBACK_STATUS_COLOR: Record<string, string> = {
  currently_wait: "var(--adaptive-orange500)",
  suggested: "var(--adaptive-orange500)",
  resolved: "var(--adaptive-green500)",
}
