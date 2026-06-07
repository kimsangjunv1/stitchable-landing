"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { MousePointer2 } from "lucide-react";
import { useLocale, useMessages } from "@/app/providers/LocaleProvider";
import type { LandingMessages } from "@/i18n";
import { cn } from "@/shared/lib/utils";
import {
  ChevronDownIcon,
  formatStatCount,
  LogoIcon,
  SelectIcon,
  SendIcon,
  SettingsIcon,
} from "./stitchable-mock/icons";
import {
  FEEDBACK_STATUS_COLOR,
  MARKER_ITEM,
  STITCHABLE_LIGHT_STYLE,
} from "./stitchable-mock/tokens";

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
type CursorPos = { x: number; y: number };

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

function getCenterPos(container: HTMLElement, target: HTMLElement): MarkerPos {
  const c = container.getBoundingClientRect();
  const t = target.getBoundingClientRect();
  return {
    left: ((t.left + t.width / 2 - c.left) / c.width) * 100,
    top: ((t.top + t.height / 2 - c.top) / c.height) * 100,
  };
}

function getDisplayStatus(
  feedback: MockFeedback,
  messages: LandingMessages,
): "currently_wait" | "suggested" | "resolved" {
  if (feedback.status === "resolved") return "resolved";
  if (feedback.replies.length === 0) return "currently_wait";
  return feedback.replies[feedback.replies.length - 1].status;
}

function statusIcon(status: string): string {
  return status === "resolved" ? "✓" : "◷";
}

function StatusBadge({
  status,
  messages,
}: {
  status: "currently_wait" | "suggested" | "resolved";
  messages: LandingMessages;
}) {
  const color = FEEDBACK_STATUS_COLOR[status];
  return (
    <div className="flex items-center gap-[6px] text-[12px] font-bold uppercase">
      <span
        className="inline-flex h-[14px] w-[14px] items-center justify-center rounded-full"
        style={{ backgroundColor: color, color: "var(--adaptive-black900)" }}
        aria-hidden
      >
        {statusIcon(status)}
      </span>
      <span style={{ color }} className="text-[12px]">
        {messages.status.feedback[status]}
      </span>
    </div>
  );
}

export function ProductPreview({ embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const messages = useMessages();

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
  const [demoAdded, setDemoAdded] = useState(false);

  const progress = stepToProgress(autoStep);
  const preview = messages.landing.preview;

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

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    const typeText = async (text: string, charMs: number) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setDraftMessage(text.slice(0, i));
        await wait(charMs);
      }
    };

    const run = async () => {
      while (!cancelled) {
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
        setDemoAdded(false);
        await wait(TIMING.idle);
        if (cancelled) return;

        setAutoStep("add-feedback");
        moveCursorTo(addBtnRef.current, true);
        await wait(TIMING.addFeedback);
        if (cancelled) return;

        setAutoStep("report-mode");
        setPanelMode("report");
        setCursor(null);
        await wait(TIMING.reportMode);
        if (cancelled) return;

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

        setAutoStep("compose-create");
        setDraftMessage("");
        await typeText(preview.feedbackMessage, TIMING.composeType);
        if (cancelled) return;
        await wait(TIMING.composeHold);
        if (cancelled) return;

        setFeedback({
          message: preview.feedbackMessage,
          author_name: preview.designer,
          status: "open",
          replies: [],
        });
        setDemoAdded(true);
        setShowCreateComposer(false);
        setDraftMessage("");
        setPanelMode("view");
        setAutoStep("view-mode");
        await wait(TIMING.viewTransition);
        if (cancelled) return;

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

        setAutoStep("open-thread");
        moveCursorTo(markerRef.current, true);
        await wait(TIMING.openThread);
        if (cancelled) return;

        setShowThreadCard(true);
        setAutoStep("compose-reply");
        setDraftMessage("");
        await typeText(preview.replyMessage, TIMING.replyType);
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
                    message: preview.replyMessage,
                    status: "suggested",
                    author_name: preview.developer,
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
                    message: messages.resolution.issueResolvedMessage,
                    status: "resolved",
                    author_name: preview.designer,
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
  }, [
    captureMarkerPos,
    locale,
    messages.resolution.issueResolvedMessage,
    moveCursorTo,
    preview,
  ]);

  const stats = {
    found: demoAdded ? 3 : 2,
    groups: 7,
    items: demoAdded ? 49 : 48,
  };

  const replyCount = feedback?.replies.length ?? 0;
  const showMarker = feedback !== null && markerPos !== null;

  const cardLeft = markerPos?.left ?? 50;
  const cardTop = markerPos
    ? Math.min(Math.max(markerPos.top - 10, 4), 36)
    : 20;

  const markerCardStyle = (
    marker: MarkerPos,
    offsetTop = 8,
  ): { left: string; top: string; width: number; transform: string } => ({
    left: `${marker.left}%`,
    top: `${Math.min(Math.max(marker.top + offsetTop, 8), 72)}%`,
    width: 260,
    transform: "translateX(-50%)",
  });

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      {!embedded ? (
        <div className="px-1">
          <p className="text-sm font-semibold text-foreground">
            {preview.title}
          </p>
          <p className="text-xs text-muted-foreground">{preview.subtitle}</p>
        </div>
      ) : null}

      <div
        data-stitchable-mock=""
        className={`relative flex min-h-0 w-full flex-col overflow-hidden bg-white ${
          embedded ? "h-full flex-1" : "aspect-video h-full"
        }`}
        style={STITCHABLE_LIGHT_STYLE}
      >
        <div className="flex items-center gap-2 border-b border-[#e2e2e3] bg-[#f6f6f7] px-4 py-2">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-[#d1d1d6]" />
            <span className="size-2 rounded-full bg-[#d1d1d6]" />
            <span className="size-2 rounded-full bg-[#d1d1d6]" />
          </div>
          <div className="mx-auto flex h-5 w-44 items-center gap-1.5 rounded-md border border-[#e2e2e3] bg-white px-2">
            <span className="size-1.5 rounded-full bg-[#03b26c]" />
            <span className="h-2 flex-1 rounded bg-[#ebebeb]" />
          </div>
        </div>

        <div
          ref={canvasRef}
          className="relative min-h-0 flex-1 overflow-hidden bg-white"
        >
          <SkeletonApp
            targetRef={targetRef}
            highlightTarget={highlightTarget}
            reportMode={panelMode === "report"}
            exportLabel={preview.exportReport}
            selectedItemLabel={messages.statusText.selectedItem}
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
                className="relative flex h-4 w-4 items-center justify-center rounded-full border border-white/60"
                style={{ backgroundColor: MARKER_ITEM }}
              />
              {replyCount > 0 ? (
                <span className="absolute -right-[6px] -top-[6px] flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[var(--adaptive-black900)] px-[3px] text-[10px] font-semibold leading-none text-[var(--adaptive-black50)] ring-1 ring-white/80">
                  +{replyCount}
                </span>
              ) : null}
            </button>
          ) : null}

          {showHoverCard && feedback ? (
            <div
              className="pointer-events-none absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
              style={markerCardStyle(markerPos!, 8)}
            >
              <div className="flex w-[260px] flex-col gap-[10px] bg-[var(--adaptive-blackOpacity800)] p-[16px] backdrop-blur-[10px]">
                <StatusBadge
                  status={getDisplayStatus(feedback, messages)}
                  messages={messages}
                />
                <p className="line-clamp-2 text-[16px] leading-[1.5] text-[var(--adaptive-black50)]">
                  {feedback.message}
                </p>
                <div className="flex items-center gap-[6px]">
                  <p className="text-[12px] text-[var(--adaptive-black500)]">
                    {feedback.author_name}
                  </p>
                  <span className="rounded-full bg-[var(--adaptive-black800)] px-[6px] py-[2px] text-[10px] text-[var(--adaptive-black400)]">
                    {messages.author.creatorLabel}
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          {showCreateComposer ? (
            <div
              className="absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
              style={
                markerPos
                  ? markerCardStyle(markerPos, 10)
                  : {
                      left: "50%",
                      top: "28%",
                      width: 260,
                      transform: "translateX(-50%)",
                    }
              }
            >
              <MockComposer
                message={draftMessage}
                author={preview.designer}
                messages={messages}
              />
            </div>
          ) : null}

          {showThreadCard && feedback ? (
            <div
              className="absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
              style={
                markerPos
                  ? markerCardStyle(markerPos, -4)
                  : {
                      left: `${cardLeft}%`,
                      top: `${cardTop}%`,
                      width: 260,
                      transform: "translateX(-50%)",
                    }
              }
            >
              <section className="flex flex-col gap-[12px] bg-[var(--adaptive-blackOpacity800)] p-[16px] backdrop-blur-[20px]">
                <StatusBadge
                  status={getDisplayStatus(feedback, messages)}
                  messages={messages}
                />
                <p className="text-[16px] font-semibold leading-[1.5] text-[var(--adaptive-black50)]">
                  {feedback.message}
                </p>
                <p className="text-[12px] text-[var(--adaptive-black500)]">
                  {feedback.author_name}
                </p>
              </section>

              {autoStep === "compose-reply" || autoStep === "open-thread" ? (
                <MockComposer
                  message={draftMessage}
                  author={preview.developer}
                  messages={messages}
                />
              ) : null}

              {feedback.replies.length > 0 ? (
                <section className="max-h-[200px] overflow-auto bg-[var(--adaptive-blackOpacity900)] backdrop-blur-[10px]">
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
                        className="flex flex-col gap-[8px] border-t border-[var(--adaptive-black800)] p-[16px]"
                      >
                        <StatusBadge
                          status={reply.status}
                          messages={messages}
                        />
                        <p className="text-[14px] leading-[1.5] text-[var(--adaptive-black50)]">
                          {reply.message}
                        </p>
                        <p className="text-[12px] text-[var(--adaptive-black500)]">
                          {reply.author_name}
                        </p>
                        {showResolveBtn ? (
                          <div className="mt-[10px]">
                            <div className="flex items-center gap-[8px] rounded-full border border-[var(--adaptive-black800)] bg-[var(--adaptive-black900)] px-[8px] py-[4px]">
                              <button
                                ref={resolveBtnRef}
                                type="button"
                                tabIndex={-1}
                                className={`flex-1 rounded-full text-[12px] font-semibold transition-colors ${
                                  resolveHighlight
                                    ? "bg-[var(--adaptive-blue500)] text-[var(--adaptive-black50)]"
                                    : "text-[var(--adaptive-black500)]"
                                }`}
                              >
                                {messages.thread.resolved}
                              </button>
                              <div className="h-full w-px bg-[var(--adaptive-black700)]" />
                              <span className="shrink-0 text-[12px] font-semibold text-[var(--adaptive-black700)]">
                                {messages.thread.select}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </section>
              ) : null}
            </div>
          ) : null}

          <ControlPanel
            mode={panelMode}
            stats={stats}
            addBtnRef={addBtnRef}
            highlightAdd={autoStep === "add-feedback"}
            messages={messages}
            envLabel={preview.envLabel}
          />

          {cursor ? (
            <VirtualCursor x={cursor.x} y={cursor.y} clicking={cursorClick} />
          ) : null}
        </div>

        <ProcessStepTabs current={progress} labels={preview.progress} />
      </div>
    </div>
  );
}

function ProcessStepTabs({
  current,
  labels,
}: {
  current: number;
  labels: string[];
}) {
  return (
    <nav
      className="shrink-0 border-t border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg)]"
      aria-label="Preview workflow steps"
    >
      <div className="flex overflow-x-auto">
        {labels.map((label, i) => {
          const step = i + 1;
          const isActive = step === current;

          return (
            <span
              key={label}
              className={cn("vp-feature-tab shrink-0", isActive && "is-active")}
              aria-current={isActive ? "step" : undefined}
            >
              {label.toLowerCase()}
            </span>
          );
        })}
      </div>
    </nav>
  );
}

function SkeletonApp({
  targetRef,
  highlightTarget,
  reportMode,
  exportLabel,
  selectedItemLabel,
}: {
  targetRef: RefObject<HTMLButtonElement | null>;
  highlightTarget: boolean;
  reportMode: boolean;
  exportLabel: string;
  selectedItemLabel: string;
}) {
  return (
    <div
      className={`relative flex h-full transition-colors ${reportMode ? "cursor-crosshair" : ""}`}
    >
      <div className="hidden w-[24%] shrink-0 border-r border-[#e2e2e3] bg-[#f6f6f7] p-3 sm:block">
        <div className="space-y-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded ${i === 0 ? "w-full bg-[#646cff]/20" : "w-[80%] bg-[#e2e2e3]"}`}
            />
          ))}
        </div>
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col gap-4 p-4 pr-[36%]">
        <div className="space-y-2">
          <div className="h-3 w-[42%] rounded bg-[#e2e2e3]" />
          <div className="h-2 w-[58%] rounded bg-[#ebebeb]" />
        </div>

        <div className="rounded-lg border border-[#e2e2e3] bg-[#f6f6f7] p-4">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-2 w-20 rounded bg-[#e2e2e3]" />
              <div className="h-2 w-28 rounded bg-[#ebebeb]" />
            </div>
            <button
              ref={targetRef}
              type="button"
              tabIndex={-1}
              aria-hidden
              className={`shrink-0 rounded-lg bg-[#646cff] px-3 py-1.5 text-[11px] font-[500] text-white transition-all ${
                highlightTarget
                  ? "ring-2 ring-[#646cff] ring-offset-2 ring-offset-[#f6f6f7]"
                  : ""
              }`}
            >
              {exportLabel}
            </button>
          </div>
          <div className="h-14 rounded-md bg-[#ebebeb]/70" />
        </div>

        <div className="min-h-0 flex-1 rounded-lg bg-[#f9f9f9]" />

        {reportMode ? (
          <p className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 text-center text-[11px] font-medium text-[#6a6a71]">
            {selectedItemLabel}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function ControlPanel({
  mode,
  stats,
  addBtnRef,
  highlightAdd,
  messages,
  envLabel,
}: {
  mode: PanelMode;
  stats: { found: number; groups: number; items: number };
  addBtnRef: RefObject<HTMLButtonElement | null>;
  highlightAdd: boolean;
  messages: LandingMessages;
  envLabel: string;
}) {
  if (mode === "report") {
    return (
      <div className="absolute right-4 top-4 z-50 min-w-[220px] rounded-[24px] border border-[var(--adaptive-black200)] bg-[var(--adaptive-whiteOpacity800)] p-[4px] backdrop-blur-[50px]">
        <section className="flex items-center justify-between gap-[16px] px-[12px] py-[8px]">
          <section className="flex shrink-0 items-center gap-[4px]">
            <LogoIcon className="w-[16px]" />
            <p className="text-[14px] text-[var(--adaptive-black900)]">
              Stitchable°
            </p>
          </section>
          <p className="shrink-0 text-[14px] font-bold text-[var(--adaptive-blue500)]">
            {messages.panel.stopFeedback}
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="absolute right-3 top-3 z-50 w-[min(340px,82%)] min-w-[300px] rounded-[24px] border border-[var(--adaptive-black200)] bg-[var(--adaptive-whiteOpacity800)] backdrop-blur-[50px]">
      <div className="flex flex-col gap-[8px] p-[8px_0_8px_12px]">
        <section className="flex items-center justify-between gap-[8px] pr-[8px]">
          <section className="flex min-w-0 items-center gap-[4px]">
            <LogoIcon className="w-[16px] shrink-0" />
            <p className="shrink-0 text-[14px] font-[700] text-[var(--adaptive-black900)] select-none">
              Stitchable°
            </p>
            <span className="inline-flex items-center gap-[4px] rounded-full border border-[var(--adaptive-black300)] bg-[var(--adaptive-black50)] px-[4px] py-[2px]">
              <span className="text-[12px] text-[var(--adaptive-black500)]">
                {envLabel}
              </span>
              <span
                className="inline-flex h-[4px] w-[4px] rounded-full bg-[var(--adaptive-green500)]"
                aria-hidden
              />
            </span>
          </section>

          <section className="flex shrink-0 items-center">
            <button
              ref={addBtnRef}
              type="button"
              tabIndex={-1}
              aria-hidden
              className={`flex items-center gap-[4px] rounded-l-[8px] bg-[var(--adaptive-black900)] p-[0_8px] transition-shadow ${
                highlightAdd
                  ? "ring-2 ring-[var(--adaptive-blue500)] ring-offset-2"
                  : ""
              }`}
            >
              <SelectIcon className="w-[16px]" />
              <p className="text-[12px] text-[var(--adaptive-black50)]">
                {messages.panel.addFeedback}
              </p>
            </button>
            <span className="flex h-[24px] items-center rounded-r-[8px] border-l border-[var(--adaptive-black700)] bg-[var(--adaptive-black900)] p-[2px_8px] text-[var(--adaptive-black50)]">
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </section>
        </section>

        <section className="flex gap-[12px] pr-[8px]">
          {[
            { label: messages.panel.statsFound, value: stats.found },
            { label: messages.panel.statsGroup, value: stats.groups },
            { label: messages.panel.statsItem, value: stats.items },
          ].map((s) => (
            <section
              key={s.label}
              className="flex flex-1 flex-col items-start gap-[4px]"
            >
              <p className="text-[12px] text-[var(--adaptive-black500)]">
                {s.label}
              </p>
              <p className="font-[Menlo] text-[14px] font-semibold tabular-nums text-[var(--adaptive-black900)]">
                {formatStatCount(s.value)}
              </p>
            </section>
          ))}
        </section>
      </div>

      <section className="flex items-stretch border-t border-[var(--adaptive-black200)]">
        <button
          type="button"
          tabIndex={-1}
          className="flex min-w-0 flex-1 items-center justify-center gap-[4px] bg-[var(--adaptive-black100)] px-[8px] py-[4px]"
        >
          <p className="truncate text-[11px] font-[500] text-[var(--adaptive-black800)]">
            {messages.panel.tabPageDetails}
          </p>
          <ChevronDownIcon className="h-3.5 w-3.5 shrink-0 rotate-180 text-[var(--adaptive-black800)]" />
        </button>
        <div className="h-full w-px bg-[var(--adaptive-black200)]" />
        <button
          type="button"
          tabIndex={-1}
          className="flex min-w-0 flex-1 items-center justify-center gap-[4px] px-[8px] py-[4px] text-[var(--adaptive-black600)]"
        >
          <p className="truncate text-[11px] font-[500]">
            {messages.panel.tabFeedbackList}
          </p>
          <ChevronDownIcon className="h-3.5 w-3.5 shrink-0" />
        </button>
        <div className="h-full w-px bg-[var(--adaptive-black200)]" />
        <span className="flex shrink-0 items-center px-[8px] text-[var(--adaptive-black800)]">
          <SettingsIcon className="w-[16px]" />
        </span>
      </section>
    </div>
  );
}

function MockComposer({
  message,
  author,
  messages,
}: {
  message: string;
  author: string;
  messages: LandingMessages;
}) {
  return (
    <div className="flex w-full flex-col bg-[var(--adaptive-blackOpacity900)] backdrop-blur-[10px]">
      <textarea
        readOnly
        value={message}
        placeholder={messages.composer.placeholder}
        rows={3}
        className="min-h-[72px] w-full resize-none bg-transparent px-[16px] pt-[16px] text-[14px] leading-[1.4] text-[var(--adaptive-black50)] outline-none placeholder:text-[var(--adaptive-black500)]"
      />
      <div className="flex items-center justify-between gap-[8px] px-[12px] pb-[12px]">
        <span className="rounded-full border border-[var(--adaptive-black600)] px-[12px] py-[4px] text-[12px] font-semibold text-[var(--adaptive-black500)]">
          {author}
        </span>
        <button
          type="button"
          tabIndex={-1}
          disabled={!message.trim()}
          className="inline-flex h-[24px] shrink-0 items-center justify-center rounded-full bg-[var(--adaptive-blue500)] px-[12px] disabled:opacity-50"
          aria-label={messages.composer.sendAriaLabel}
        >
          <SendIcon className="w-[16px]" />
        </button>
      </div>
      <div className="h-px w-full bg-[var(--adaptive-black800)]" />
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
        className={`size-5 fill-[var(--adaptive-blue500)] text-[var(--adaptive-blue500)] ${clicking ? "scale-90" : ""}`}
      />
      {clicking ? (
        <span className="absolute left-2 top-2 size-4 animate-ping rounded-full bg-[var(--adaptive-blue500)]/40" />
      ) : null}
    </div>
  );
}
