import { useCallback, useEffect, type RefObject } from "react";
import {
  getMarkerAnchorInContainer,
  type MarkerPos,
  type ReportAnchor,
} from "./reportTarget";

/** Mirrors stitchable view-mode marker sync — re-query data-report-id on scroll/resize. */
export function useSyncReportMarker(
  canvasRef: RefObject<HTMLElement | null>,
  scrollContainerRef: RefObject<HTMLElement | null>,
  anchor: ReportAnchor | null,
  onPosition: (position: MarkerPos | null) => void,
) {
  const sync = useCallback(() => {
    if (!anchor) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    onPosition(getMarkerAnchorInContainer(canvas, anchor));
  }, [anchor, canvasRef, onPosition]);

  useEffect(() => {
    if (!anchor) return;

    sync();

    const scrollEl = scrollContainerRef.current;
    scrollEl?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      scrollEl?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [anchor, scrollContainerRef, sync]);
}
