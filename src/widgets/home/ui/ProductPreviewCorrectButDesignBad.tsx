"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { StitchableLogo } from "./StitchableLogo";
import { Send, ChevronDown, MousePointer2 } from "lucide-react";

const MARKER_ITEM = "#f04452";

const STATUS_COLOR: Record<string, string> = {
  currently_wait: "#fe9800",
  suggested: "#fe9800",
  resolved: "#15c47e",
};

const LABELS = {
  addFeedback: "피드백 추가",
  stopFeedback: "피드백 중지",
  statsFound: "발견",
  statsGroup: "그룹",
  statsItem: "아이템",
  tabPageDetails: "페이지 상세",
  tabFeedbackList: "피드백 목록",
  placeholder: "메시지를 입력하세요",
  send: "전송",
  resolved: "해결",
  select: "선택",
  currentlyWait: "대기 중",
  suggested: "제안됨",
  resolvedStatus: "해결됨",
  issueResolved: "이슈가 해결되었습니다.",
  authorPlaceholder: "작성자",
  selectedItem: "선택된 아이템",
} as const;

const FEEDBACK_MESSAGE = "모바일에서 Export 버튼이 금액과 겹쳐 보여요";
const REPLY_MESSAGE = "flex-wrap 수정을 내일 stage 배포에 포함할게요";

const PROGRESS_STEPS = [
  { id: 1, label: "패널 대기" },
  { id: 2, label: "피드백 추가" },
  { id: 3, label: "요소 선택" },
  { id: 4, label: "피드백 전송" },
  { id: 5, label: "마커 미리보기" },
  { id: 6, label: "답변 작성" },
  { id: 7, label: "이슈 해결" },
] as const;

/** Auto-play timeline (ms) */
const TIMING = {
  idle: 1800,
  addFeedback: 900,
  reportMode: 1000,
  selectTarget: 1400,
  composeType: 55,
  composeHold: 700,
  viewTransition: 600,
  hoverMarker: 2200,
  openThread: 800,
  replyType: 45,
  replyHold: 600,
  showResolve: 900,
  resolve: 800,
  complete: 2200,
} as const;

type AutoStep =
  | "idle"
  | "add-feedback"
  | "report-mode"
  | "select-target"
  | "compose-create"
  | "view-mode"
  | "hover-marker"
  | "open-thread"
  | "compose-reply"
  | "show-resolve"
  | "resolve"
  | "complete";

type PanelMode = "idle" | "report" | "view";

type MarkerPos = { left: number; top: number };

type MockReply = {
  id: string;
  message: string;
  status: "suggested" | "resolved";
  author_name: string;
};

type MockFeedback = {
  message: string;
  author_name: string;
  status: "open" | "resolved";
  replies: MockReply[];
};

type CursorPos = { x: number; y: number };

const DESIGNER = "김디자인";
const DEVELOPER = "이개발";

function stepToProgress(step: AutoStep): number {
  switch (step) {
    case "idle":
      return 1;
    case "add-feedback":
    case "report-mode":
      return 2;
    case "select-target":
      return 3;
    case "compose-create":
      return 4;
    case "view-mode":
    case "hover-marker":
      return 5;
    case "open-thread":
    case "compose-reply":
      return 6;
    case "show-resolve":
    case "resolve":
    case "complete":
      return 7;
    default:
      return 1;
  }
}

function statusLabel(status: string): string {
  if (status === "currently_wait") return LABELS.currentlyWait;
  if (status === "suggested") return LABELS.suggested;
  if (status === "resolved") return LABELS.resolvedStatus;
  return status;
}

function statusIcon(status: string): string {
  return status === "resolved" ? "✓" : "◷";
}

function getDisplayStatus(feedback: MockFeedback): string {
  if (feedback.status === "resolved") return "resolved";
  if (feedback.replies.length === 0) return "currently_wait";
  return feedback.replies[feedback.replies.length - 1].status;
}

function getCenterPos(container: HTMLElement, target: HTMLElement): MarkerPos {
  const c = container.getBoundingClientRect();
  const t = target.getBoundingClientRect();
  return {
    left: ((t.left + t.width / 2 - c.left) / c.width) * 100,
    top: ((t.top + t.height / 2 - c.top) / c.height) * 100,
  };
}

function StatusBadge({ status }: { status: string }) {
  const color = STATUS_COLOR[status] ?? STATUS_COLOR.suggested;
  return (
    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase">
      <span
        className="inline-flex size-3.5 items-center justify-center rounded-full text-[8px]"
        style={{ backgroundColor: color, color: "#212121" }}
        aria-hidden
      >
        {statusIcon(status)}
      </span>
      <span style={{ color }}>{statusLabel(status)}</span>
    </div>
  );
}

export function ProductPreviewCorrectButDesignBad() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLButtonElement>(null);
  const addBtnRef = useRef<HTMLButtonElement>(null);
  const markerRef = useRef<HTMLButtonElement>(null);
  const resolveBtnRef = useRef<HTMLButtonElement>(null);

  const [autoStep, setAutoStep] = useState<AutoStep>("idle");
  const [panelMode, setPanelMode] = useState<PanelMode>("idle");
  const [feedback, setFeedback] = useState<MockFeedback | null>(null);
  const [markerPos, setMarkerPos] = useState<MarkerPos | null>(null);
  const [showCreateComposer, setShowCreateComposer] = useState(false);
  const [showThreadCard, setShowThreadCard] = useState(false);
  const [showHoverCard, setShowHoverCard] = useState(false);
  const [draftMessage, setDraftMessage] = useState("");
  const [cursor, setCursor] = useState<CursorPos | null>(null);
  const [cursorClick, setCursorClick] = useState(false);
  const [highlightTarget, setHighlightTarget] = useState(false);
  const [resolveHighlight, setResolveHighlight] = useState(false);

  const progress = stepToProgress(autoStep);

  const moveCursorTo = useCallback((el: HTMLElement | null, click = false) => {
    const canvas = canvasRef.current;
    if (!canvas || !el) {
      setCursor(null);
      return;
    }
    const c = canvas.getBoundingClientRect();
    const t = el.getBoundingClientRect();
    setCursor({
      x: t.left + t.width / 2 - c.left,
      y: t.top + t.height / 2 - c.top,
    });
    if (click) {
      setCursorClick(true);
      setTimeout(() => setCursorClick(false), 350);
    }
  }, []);

  const captureMarkerPos = useCallback(() => {
    const canvas = canvasRef.current;
    const target = targetRef.current;
    if (!canvas || !target) return;
    setMarkerPos(getCenterPos(canvas, target));
  }, []);

  // Auto-play state machine
  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(() => resolve(), ms);
        return () => clearTimeout(id);
      });

    const typeText = async (text: string, charMs: number) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setDraftMessage(text.slice(0, i));
        await wait(charMs);
      }
    };

    const run = async () => {
      while (!cancelled) {
        // 1. Idle — skeleton + panel
        setAutoStep("idle");
        setPanelMode("idle");
        setFeedback(null);
        setMarkerPos(null);
        setShowCreateComposer(false);
        setShowThreadCard(false);
        setShowHoverCard(false);
        setDraftMessage("");
        setCursor(null);
        setHighlightTarget(false);
        setResolveHighlight(false);
        await wait(TIMING.idle);
        if (cancelled) return;

        // 2. Click 피드백 추가
        setAutoStep("add-feedback");
        moveCursorTo(addBtnRef.current, true);
        await wait(TIMING.addFeedback);
        if (cancelled) return;

        setAutoStep("report-mode");
        setPanelMode("report");
        setCursor(null);
        await wait(TIMING.reportMode);
        if (cancelled) return;

        // 3. Click target element
        setAutoStep("select-target");
        setHighlightTarget(true);
        moveCursorTo(targetRef.current);
        await wait(600);
        if (cancelled) return;
        moveCursorTo(targetRef.current, true);
        await wait(TIMING.selectTarget);
        if (cancelled) return;

        captureMarkerPos();
        setHighlightTarget(false);
        setShowCreateComposer(true);
        setCursor(null);

        // 4. Compose & send feedback
        setAutoStep("compose-create");
        setDraftMessage("");
        await typeText(FEEDBACK_MESSAGE, TIMING.composeType);
        if (cancelled) return;
        await wait(TIMING.composeHold);
        if (cancelled) return;

        setFeedback({
          message: FEEDBACK_MESSAGE,
          author_name: DESIGNER,
          status: "open",
          replies: [],
        });
        setShowCreateComposer(false);
        setDraftMessage("");
        setPanelMode("view");
        setAutoStep("view-mode");
        await wait(TIMING.viewTransition);
        if (cancelled) return;

        // 5. Hover marker → tooltip
        setAutoStep("hover-marker");
        await wait(200);
        if (cancelled) return;
        moveCursorTo(markerRef.current);
        await wait(400);
        if (cancelled) return;
        setShowHoverCard(true);
        await wait(TIMING.hoverMarker);
        if (cancelled) return;
        setShowHoverCard(false);

        // 6. Click marker → reply
        setAutoStep("open-thread");
        moveCursorTo(markerRef.current, true);
        await wait(TIMING.openThread);
        if (cancelled) return;

        setShowThreadCard(true);
        setAutoStep("compose-reply");
        setDraftMessage("");
        await typeText(REPLY_MESSAGE, TIMING.replyType);
        if (cancelled) return;
        await wait(TIMING.replyHold);
        if (cancelled) return;

        setFeedback((prev) =>
          prev
            ? {
                ...prev,
                replies: [
                  {
                    id: "r_1",
                    message: REPLY_MESSAGE,
                    status: "suggested",
                    author_name: DEVELOPER,
                  },
                ],
              }
            : prev,
        );
        setDraftMessage("");
        setAutoStep("show-resolve");
        setCursor(null);
        await wait(TIMING.showResolve);
        if (cancelled) return;

        // 7. Resolve
        setAutoStep("resolve");
        setResolveHighlight(true);
        await wait(150);
        if (cancelled) return;
        moveCursorTo(resolveBtnRef.current, true);
        await wait(TIMING.resolve);
        if (cancelled) return;

        setFeedback((prev) =>
          prev
            ? {
                ...prev,
                status: "resolved",
                replies: [
                  ...prev.replies,
                  {
                    id: "r_2",
                    message: LABELS.issueResolved,
                    status: "resolved",
                    author_name: DESIGNER,
                  },
                ],
              }
            : prev,
        );
        setResolveHighlight(false);
        setAutoStep("complete");
        setCursor(null);
        await wait(TIMING.complete);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [captureMarkerPos, moveCursorTo]);

  const stats = {
    found: feedback ? 1 : 0,
    groups: 0,
    items: feedback ? 1 : 0,
  };

  const latestReply = feedback?.replies[feedback.replies.length - 1];
  const replyCount = feedback?.replies.length ?? 0;
  const showMarker = feedback !== null && markerPos !== null;

  const cardLeft = markerPos
    ? Math.min(Math.max(markerPos.left + 14, 8), 52)
    : 50;
  const cardTop = markerPos ? Math.min(Math.max(markerPos.top - 8, 6), 40) : 20;

  return (
    <div className="space-y-3">
      <div className="px-1">
        <p className="text-sm font-semibold text-foreground">
          피드백 워크플로우
        </p>
        <p className="text-xs text-muted-foreground">
          ReportControlPanel → 피드백 추가 → 요소 클릭 → 답변 → 해결
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/60 px-4 py-2">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="mx-auto h-5 w-40 rounded-md bg-muted-foreground/15" />
        </div>

        <div
          ref={canvasRef}
          className="relative h-[calc(100%-32px)] overflow-hidden"
        >
          <SkeletonApp
            targetRef={targetRef}
            highlightTarget={highlightTarget}
            reportMode={panelMode === "report"}
          />

          {showMarker && markerPos ? (
            <button
              ref={markerRef}
              type="button"
              aria-hidden
              tabIndex={-1}
              className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${markerPos.left}%`, top: `${markerPos.top}%` }}
            >
              <span
                className="relative flex size-4 items-center justify-center rounded-full border border-white/70 shadow-sm"
                style={{ backgroundColor: MARKER_ITEM }}
              />
              {replyCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#212121] px-0.5 text-[9px] font-semibold text-[#fafafa] ring-1 ring-white/80">
                  +{replyCount}
                </span>
              ) : null}
            </button>
          ) : null}

          {showHoverCard && feedback ? (
            <div
              className="pointer-events-none absolute z-50 w-52 rounded-3xl border-2 border-border/60 bg-popover/95 p-3 shadow-2xl backdrop-blur-sm"
              style={{
                left: `${Math.min(markerPos!.left + 12, 58)}%`,
                top: `${Math.min(markerPos!.top + 10, 55)}%`,
              }}
            >
              <StatusBadge status={getDisplayStatus(feedback)} />
              <p className="mt-2 line-clamp-2 text-xs leading-snug text-popover-foreground">
                {feedback.message}
              </p>
              <p className="mt-1.5 text-[10px] text-muted-foreground">
                {feedback.author_name}
              </p>
            </div>
          ) : null}

          {showCreateComposer ? (
            <div
              className="absolute z-50 w-52 overflow-hidden rounded-3xl border-2 border-border/60 bg-popover/98 shadow-2xl backdrop-blur-sm"
              style={{
                left: markerPos
                  ? `${Math.min(markerPos.left + 8, 55)}%`
                  : "40%",
                top: markerPos ? `${Math.min(markerPos.top + 12, 50)}%` : "30%",
              }}
            >
              <div className="border-b border-border/60 px-3 py-2">
                <p className="text-[10px] text-muted-foreground">
                  {LABELS.selectedItem}
                </p>
              </div>
              <Composer
                message={draftMessage}
                author={DESIGNER}
                onSubmit={() => undefined}
              />
            </div>
          ) : null}

          {showThreadCard && feedback ? (
            <div
              className="absolute z-50 w-56 overflow-hidden rounded-3xl border-2 border-border/60 bg-popover/98 shadow-2xl backdrop-blur-sm sm:w-60"
              style={{ left: `${cardLeft}%`, top: `${cardTop}%` }}
            >
              <section className="border-b border-border/60 p-3">
                <StatusBadge status={getDisplayStatus(feedback)} />
                <p className="mt-2 text-sm font-semibold leading-snug text-popover-foreground">
                  {feedback.message}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  {feedback.author_name}
                </p>
              </section>

              {autoStep === "compose-reply" ? (
                <Composer
                  message={draftMessage}
                  author={DEVELOPER}
                  onSubmit={() => undefined}
                />
              ) : null}

              {feedback.replies.length > 0 ? (
                <section className="max-h-32 overflow-auto bg-secondary/20">
                  {[...feedback.replies].reverse().map((reply) => {
                    const isLatest =
                      feedback.replies[feedback.replies.length - 1]?.id ===
                      reply.id;
                    const showResolveBtn =
                      isLatest &&
                      reply.status === "suggested" &&
                      feedback.status !== "resolved";

                    return (
                      <article
                        key={reply.id}
                        className="border-t border-border/60 p-3"
                      >
                        <StatusBadge status={reply.status} />
                        <p className="mt-1.5 text-xs leading-snug text-popover-foreground">
                          {reply.message}
                        </p>
                        <p className="mt-1 text-[10px] text-muted-foreground">
                          {reply.author_name}
                        </p>
                        {showResolveBtn ? (
                          <div className="mt-2 flex gap-1.5">
                            <div className="flex flex-1 items-center gap-1 rounded-full border border-border bg-background/40 px-1 py-0.5">
                              <button
                                ref={resolveBtnRef}
                                type="button"
                                tabIndex={-1}
                                className={`flex-1 rounded-full px-2 py-1 text-[10px] font-semibold transition-colors ${
                                  resolveHighlight
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {LABELS.resolved}
                              </button>
                              <div className="h-3 w-px bg-border" />
                              <span className="shrink-0 px-1 text-[10px] text-muted-foreground/50">
                                {LABELS.select}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </section>
              ) : autoStep === "open-thread" ? (
                <Composer
                  message=""
                  author={DEVELOPER}
                  onSubmit={() => undefined}
                />
              ) : null}
            </div>
          ) : null}

          <ControlPanel
            mode={panelMode}
            stats={stats}
            addBtnRef={addBtnRef}
            highlightAdd={autoStep === "add-feedback"}
          />

          {cursor ? (
            <VirtualCursor x={cursor.x} y={cursor.y} clicking={cursorClick} />
          ) : null}

          {panelMode === "report" ? (
            <p className="pointer-events-none absolute bottom-3 left-1/2 z-30 -translate-x-1/2 text-[10px] font-medium text-foreground/80">
              {LABELS.selectedItem}
            </p>
          ) : null}
        </div>
      </div>

      <ProgressBar current={progress} step={autoStep} />
    </div>
  );
}

function ProgressBar({ current, step }: { current: number; step: AutoStep }) {
  const pct = ((current - 1) / (PROGRESS_STEPS.length - 1)) * 100;

  return (
    <div className="px-1">
      <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-500 ease-out"
          style={{
            width: `${Math.max(pct, step === "complete" ? 100 : pct)}%`,
          }}
        />
      </div>
      <div className="mt-2.5 grid grid-cols-7 gap-1">
        {PROGRESS_STEPS.map((s) => (
          <div key={s.id} className="text-center">
            <span
              className={`block text-[9px] font-medium leading-tight transition-colors sm:text-[10px] ${
                s.id <= current ? "text-primary" : "text-muted-foreground/50"
              }`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkeletonApp({
  targetRef,
  highlightTarget,
  reportMode,
}: {
  targetRef: RefObject<HTMLButtonElement | null>;
  highlightTarget: boolean;
  reportMode: boolean;
}) {
  return (
    <div
      className={`h-full px-5 py-5 transition-colors ${reportMode ? "cursor-crosshair bg-primary/[0.02]" : ""}`}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="size-8 rounded-lg bg-muted-foreground/15" />
        <div className="space-y-1.5">
          <div className="h-2.5 w-24 rounded bg-muted-foreground/15" />
          <div className="h-2 w-16 rounded bg-muted-foreground/10" />
        </div>
      </div>

      <div className="mb-4 h-28 rounded-xl bg-muted-foreground/8" />

      <div className="mb-4 flex items-end justify-between gap-4 rounded-xl border border-border/40 bg-muted-foreground/5 p-4">
        <div className="space-y-2">
          <div className="h-2 w-20 rounded bg-muted-foreground/12" />
          <div className="h-6 w-28 rounded bg-muted-foreground/18" />
          <div className="h-2 w-24 rounded bg-muted-foreground/10" />
        </div>
        <button
          ref={targetRef}
          type="button"
          tabIndex={-1}
          aria-hidden
          className={`shrink-0 rounded-lg bg-muted-foreground/25 px-4 py-2 text-[10px] font-medium text-foreground/70 transition-all ${
            highlightTarget
              ? "ring-2 ring-primary ring-offset-2 ring-offset-card"
              : ""
          }`}
        >
          Export report
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="space-y-2 rounded-lg bg-muted-foreground/6 p-3"
          >
            <div className="h-2 w-12 rounded bg-muted-foreground/12" />
            <div className="h-4 w-16 rounded bg-muted-foreground/15" />
            <div className="h-8 rounded bg-muted-foreground/8" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ControlPanel({
  mode,
  stats,
  addBtnRef,
  highlightAdd,
}: {
  mode: PanelMode;
  stats: { found: number; groups: number; items: number };
  addBtnRef: RefObject<HTMLButtonElement | null>;
  highlightAdd: boolean;
}) {
  if (mode === "report") {
    return (
      <div className="absolute right-4 top-4 z-50 min-w-[200px] rounded-3xl border border-border/50 bg-popover/90 px-3 py-2 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <StitchableLogo className="size-4 text-foreground" />
            <span className="text-xs font-bold text-foreground">
              Stitchable°
            </span>
          </div>
          <span className="text-xs font-bold text-primary">
            {LABELS.stopFeedback}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-3 top-3 z-50 w-[min(240px,55%)] overflow-hidden rounded-3xl border border-border/50 bg-popover/85 shadow-[0_0_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="p-2.5 pl-3">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1">
            <StitchableLogo className="size-3.5 shrink-0 text-foreground" />
            <span className="truncate text-xs font-bold text-foreground">
              Stitchable°
            </span>
            <span className="inline-flex items-center gap-0.5 rounded-full border border-border px-1 py-px text-[9px] text-muted-foreground">
              stage
              <span className="size-1 rounded-full bg-emerald-400" />
            </span>
          </div>
          <div className="flex shrink-0">
            <button
              ref={addBtnRef}
              type="button"
              tabIndex={-1}
              aria-hidden
              className={`flex items-center gap-1 rounded-l-lg bg-[#212121] px-2 py-1 transition-all ${
                highlightAdd
                  ? "ring-2 ring-primary ring-offset-1 ring-offset-popover"
                  : ""
              }`}
            >
              <span className="size-3 rounded-sm border border-white/40" />
              <span className="text-[10px] text-[#fafafa]">
                {LABELS.addFeedback}
              </span>
            </button>
            <span className="flex items-center rounded-r-lg border-l border-[#424242] bg-[#212121] px-1.5 py-1">
              <ChevronDown className="size-3 text-[#fafafa]" />
            </span>
          </div>
        </div>

        <div className="mb-2 grid grid-cols-3 gap-2">
          {[
            { label: LABELS.statsFound, value: stats.found },
            { label: LABELS.statsGroup, value: stats.groups },
            { label: LABELS.statsItem, value: stats.items },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-[9px] text-muted-foreground">{s.label}</p>
              <p className="text-xs font-semibold text-foreground">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex border-t border-border/60">
        <span className="flex flex-1 items-center justify-center gap-1 py-1.5 text-[10px] text-foreground/80">
          {LABELS.tabPageDetails}
          <ChevronDown className="size-3" />
        </span>
        <div className="w-px bg-border/60" />
        <span className="flex flex-1 items-center justify-center gap-1 py-1.5 text-[10px] text-muted-foreground">
          {LABELS.tabFeedbackList}
          <ChevronDown className="size-3" />
        </span>
      </div>
    </div>
  );
}

function Composer({
  message,
  author,
  onSubmit,
}: {
  message: string;
  author: string;
  onSubmit: () => void;
}) {
  return (
    <div className="border-t border-border/60 bg-secondary/20">
      <textarea
        readOnly
        value={message}
        placeholder={LABELS.placeholder}
        rows={2}
        className="w-full resize-none bg-transparent px-3 pt-3 text-xs leading-relaxed text-popover-foreground outline-none placeholder:text-muted-foreground"
      />
      <div className="flex items-center justify-between gap-2 px-2.5 pb-2.5">
        <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] text-muted-foreground">
          {author}
        </span>
        <button
          type="button"
          tabIndex={-1}
          onClick={onSubmit}
          disabled={!message.trim()}
          className="inline-flex size-6 items-center justify-center rounded-full bg-[#3182f6] text-white disabled:opacity-40"
          aria-label={LABELS.send}
        >
          <Send className="size-3" />
        </button>
      </div>
    </div>
  );
}

function VirtualCursor({
  x,
  y,
  clicking,
}: {
  x: number;
  y: number;
  clicking: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute z-[60] transition-all duration-500 ease-out"
      style={{ left: x, top: y, transform: "translate(-3px, -3px)" }}
    >
      <MousePointer2
        className={`size-5 fill-primary text-primary drop-shadow-md ${clicking ? "scale-90" : ""}`}
      />
      {clicking ? (
        <span className="absolute left-2 top-2 size-4 animate-ping rounded-full bg-primary/40" />
      ) : null}
    </div>
  );
}
