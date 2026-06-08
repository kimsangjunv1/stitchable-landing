/** Preview mock targets — same contract as stitchable `data-report-id` / `data-report-type`. */
export const PREVIEW_MOCK_REPORT_IDS = {
  activeSessions: "preview-active-sessions",
  sessionChart: "preview-session-chart",
  errorRate: "preview-error-rate",
  deployRow: "preview-deploy-row",
  apiLatency: "preview-api-latency",
} as const;

export type ReportTargetType = "group" | "item";

export type ReportAnchor = {
  reportId: string;
  reportType: ReportTargetType;
  elementXRatio: number;
  elementYRatio: number;
};

export type MarkerPos = { left: number; top: number };

function escapeAttribute(value: string) {
  return value.split("\\").join("\\\\").split('"').join('\\"');
}

export function resolveReportType(element: HTMLElement): ReportTargetType {
  return element.dataset.reportType === "group" ? "group" : "item";
}

export function getFeedbackTargetSelector(reportId: string, reportType: ReportTargetType) {
  const escapedId = escapeAttribute(reportId);

  if (reportType === "group") {
    return `[data-report-id="${escapedId}"][data-report-type="group"]`;
  }

  return `[data-report-id="${escapedId}"]:not([data-report-type="group"])`;
}

export function findTargetElement(baseElement: HTMLElement | null) {
  if (!baseElement) return null;

  let groupFallback: HTMLElement | null = null;
  let node: HTMLElement | null = baseElement;

  while (node) {
    const reportId = node.dataset.reportId?.trim();

    if (reportId) {
      if (resolveReportType(node) === "item") return node;
      if (!groupFallback) groupFallback = node;
    }

    node = node.parentElement;
  }

  return groupFallback;
}

export function clampRatio(value: number) {
  if (Number.isNaN(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

export function createReportAnchorFromClick(
  target: HTMLElement,
  clientX: number,
  clientY: number,
): ReportAnchor {
  const rect = target.getBoundingClientRect();
  const reportId = target.dataset.reportId?.trim();

  if (!reportId) {
    throw new Error("Target element is missing data-report-id");
  }

  return {
    reportId,
    reportType: resolveReportType(target),
    elementXRatio: clampRatio((clientX - rect.left) / Math.max(rect.width, 1)),
    elementYRatio: clampRatio((clientY - rect.top) / Math.max(rect.height, 1)),
  };
}

/** Resolve marker center as % of canvas — re-queries DOM via data-report-id on every call. */
export function getMarkerAnchorInContainer(
  container: HTMLElement,
  anchor: ReportAnchor,
): MarkerPos | null {
  const selector = getFeedbackTargetSelector(anchor.reportId, anchor.reportType);
  const target = container.querySelector<HTMLElement>(selector);

  if (!target) return null;

  const containerRect = container.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const centerX =
    targetRect.left + targetRect.width * anchor.elementXRatio - containerRect.left;
  const centerY =
    targetRect.top + targetRect.height * anchor.elementYRatio - containerRect.top;

  return {
    left: (centerX / containerRect.width) * 100,
    top: (centerY / containerRect.height) * 100,
  };
}
