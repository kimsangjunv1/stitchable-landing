import { useEffect, useRef, type RefObject } from "react";
import {
  getMarkerAnchorInContainer,
  type MarkerPos,
  type ReportAnchor,
} from "./reportTarget";

export type AnchoredMarker = {
  id: string;
  anchor: ReportAnchor;
};

function positionsEqual(
  a: Record<string, MarkerPos | null>,
  b: Record<string, MarkerPos | null>,
) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    const left = a[key];
    const right = b[key];
    if (!left || !right) return left !== right;
    if (left.left !== right.left || left.top !== right.top) return false;
  }

  return true;
}

/** Sync multiple report markers on scroll/resize — one position map keyed by entry id. */
export function useSyncReportMarkers(
  canvasRef: RefObject<HTMLElement | null>,
  scrollContainerRef: RefObject<HTMLElement | null>,
  markers: AnchoredMarker[],
  onPositions: (positions: Record<string, MarkerPos | null>) => void,
) {
  const markersRef = useRef(markers);
  const onPositionsRef = useRef(onPositions);
  const lastPositionsRef = useRef<Record<string, MarkerPos | null>>({});

  markersRef.current = markers;
  onPositionsRef.current = onPositions;

  const markersKey = markers
    .map(
      (m) =>
        `${m.id}:${m.anchor.reportId}:${m.anchor.reportType}:${m.anchor.elementXRatio}:${m.anchor.elementYRatio}`,
    )
    .join("|");

  useEffect(() => {
    const publish = (next: Record<string, MarkerPos | null>) => {
      if (positionsEqual(lastPositionsRef.current, next)) return;
      lastPositionsRef.current = next;
      onPositionsRef.current(next);
    };

    const sync = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const next: Record<string, MarkerPos | null> = {};
      for (const { id, anchor } of markersRef.current) {
        next[id] = getMarkerAnchorInContainer(canvas, anchor);
      }
      publish(next);
    };

    if (markersRef.current.length === 0) {
      publish({});
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
  }, [markersKey, canvasRef, scrollContainerRef]);
}
