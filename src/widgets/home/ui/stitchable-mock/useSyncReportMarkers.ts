import { useEffect, type RefObject } from "react";
import {
  getMarkerAnchorInContainer,
  type MarkerPos,
  type ReportAnchor,
} from "./reportTarget";

export type AnchoredMarker = {
  id: string;
  anchor: ReportAnchor;
};

/** Sync multiple report markers on scroll/resize — one position map keyed by entry id. */
export function useSyncReportMarkers(
  canvasRef: RefObject<HTMLElement | null>,
  scrollContainerRef: RefObject<HTMLElement | null>,
  markers: AnchoredMarker[],
  onPositions: (positions: Record<string, MarkerPos | null>) => void,
) {
  const markersKey = markers
    .map(
      (m) =>
        `${m.id}:${m.anchor.reportId}:${m.anchor.reportType}:${m.anchor.elementXRatio}:${m.anchor.elementYRatio}`,
    )
    .join("|");

  useEffect(() => {
    const sync = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const next: Record<string, MarkerPos | null> = {};
      for (const { id, anchor } of markers) {
        next[id] = getMarkerAnchorInContainer(canvas, anchor);
      }
      onPositions(next);
    };

    if (markers.length === 0) {
      onPositions({});
      return;
    }

    sync();

    const scrollEl = scrollContainerRef.current;
    scrollEl?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      scrollEl?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [markersKey, markers, canvasRef, scrollContainerRef, onPositions]);
}
