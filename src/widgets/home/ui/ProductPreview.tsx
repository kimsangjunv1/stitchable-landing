"use client";

import { useCallback, useRef, useState, type MouseEvent, type RefObject } from "react";
import { ChevronDown } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import type { LandingMessages } from "@/i18n";
import { cn } from "@/shared/lib/utils";
import { SafariWindowChrome } from "./SafariWindowChrome";
import {
  ChevronDownIcon,
  formatStatCount,
  LogoIcon,
  SelectIcon,
  SendIcon,
  SettingsIcon,
} from "./stitchable-mock/icons";
import {
  createReportAnchorFromClick,
  findTargetElement,
  getMarkerAnchorInContainer,
  PREVIEW_MOCK_REPORT_IDS,
  type MarkerPos,
  type ReportAnchor,
} from "./stitchable-mock/reportTarget";
import { useSyncReportMarker } from "./stitchable-mock/useSyncReportMarker";
import { useSyncReportMarkers } from "./stitchable-mock/useSyncReportMarkers";
import { FEEDBACK_STATUS_COLOR, MARKER_ITEM, STITCHABLE_LIGHT_STYLE } from "./stitchable-mock/tokens";

type DemoStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type PanelMode = "idle" | "report" | "view";

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

type FeedbackEntry = MockFeedback & {
    id: string;
    anchor: ReportAnchor;
};

let feedbackIdCounter = 0;

function createFeedbackId() {
    feedbackIdCounter += 1;
    return `fb_${feedbackIdCounter}`;
}

function getDisplayStatus(feedback: MockFeedback, messages: LandingMessages): "currently_wait" | "suggested" | "resolved" {
    if (feedback.status === "resolved") return "resolved";
    if (feedback.replies.length === 0) return "currently_wait";
    return feedback.replies[feedback.replies.length - 1].status;
}

function statusIcon(status: string): string {
    return status === "resolved" ? "✓" : "◷";
}

function StatusBadge({ status, messages }: { status: "currently_wait" | "suggested" | "resolved"; messages: LandingMessages }) {
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
            <span
                style={{ color }}
                className="text-[12px]"
            >
                {messages.status.feedback[status]}
            </span>
        </div>
    );
}

function markerCardStyle(marker: MarkerPos, offsetTop = 8): { left: string; top: string; width: number; transform: string } {
    return {
        left: `${marker.left}%`,
        top: `${Math.min(Math.max(marker.top + offsetTop, 22), 68)}%`,
        width: 260,
        transform: "translateX(-50%)",
    };
}

export function ProductPreview({ embedded = false }: { embedded?: boolean }) {
    const messages = useMessages();
    const preview = messages.landing.preview;

    const canvasRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [step, setStep] = useState<DemoStep>(1);
    const [panelMode, setPanelMode] = useState<PanelMode>("idle");
    const [feedbackEntries, setFeedbackEntries] = useState<FeedbackEntry[]>([]);
    const [entryMarkerPositions, setEntryMarkerPositions] = useState<Record<string, MarkerPos | null>>({});
    const [draftAnchor, setDraftAnchor] = useState<ReportAnchor | null>(null);
    const [draftMarkerPos, setDraftMarkerPos] = useState<MarkerPos | null>(null);
    const [showCreateComposer, setShowCreateComposer] = useState(false);
    const [showThreadCard, setShowThreadCard] = useState(false);
    const [hoveredEntryId, setHoveredEntryId] = useState<string | null>(null);
    const [activeEntryId, setActiveEntryId] = useState<string | null>(null);
    const [draftMessage, setDraftMessage] = useState("");
    const [composerMode, setComposerMode] = useState<"create" | "reply" | null>(null);

    useSyncReportMarker(canvasRef, scrollContainerRef, draftAnchor, setDraftMarkerPos);
    useSyncReportMarkers(
        canvasRef,
        scrollContainerRef,
        feedbackEntries.map((entry) => ({ id: entry.id, anchor: entry.anchor })),
        setEntryMarkerPositions,
    );

    const resetDemo = useCallback(() => {
        setStep(1);
        setPanelMode("idle");
        setFeedbackEntries([]);
        setEntryMarkerPositions({});
        setDraftAnchor(null);
        setDraftMarkerPos(null);
        setShowCreateComposer(false);
        setShowThreadCard(false);
        setHoveredEntryId(null);
        setActiveEntryId(null);
        setDraftMessage("");
        setComposerMode(null);
    }, []);

    const handleAddFeedback = () => {
        const canStartReport = step === 1 || (step >= 4 && step <= 5 && feedbackEntries.length > 0);
        if (!canStartReport) return;
        setPanelMode("report");
        setShowCreateComposer(false);
        setDraftAnchor(null);
        setDraftMarkerPos(null);
        setHoveredEntryId(null);
        setDraftMessage("");
        setComposerMode(null);
        setStep(2);
    };

    const handleStopFeedback = () => {
        if (panelMode !== "report") return;
        setPanelMode(feedbackEntries.length > 0 ? "view" : "idle");
        setShowCreateComposer(false);
        setDraftAnchor(null);
        setDraftMarkerPos(null);
        setDraftMessage("");
        setComposerMode(null);
        setStep(feedbackEntries.length > 0 ? 4 : 1);
    };

    const handleMockPageClick = (event: MouseEvent<HTMLDivElement>) => {
        if (step !== 2 || panelMode !== "report") return;

        const target = findTargetElement(event.target as HTMLElement);
        if (!target || !scrollContainerRef.current?.contains(target)) return;

        const anchor = createReportAnchorFromClick(target, event.clientX, event.clientY);
        const canvas = canvasRef.current;
        if (!canvas) return;

        setDraftAnchor(anchor);
        setDraftMarkerPos(getMarkerAnchorInContainer(canvas, anchor));
        setShowCreateComposer(true);
        setComposerMode("create");
        setDraftMessage("");
        setStep(3);
    };

    const handleSendCreate = () => {
        if (step !== 3 || !draftMessage.trim() || !draftAnchor) return;

        setFeedbackEntries((entries) => [
            ...entries,
            {
                id: createFeedbackId(),
                anchor: draftAnchor,
                message: draftMessage.trim(),
                author_name: preview.designer,
                status: "open",
                replies: [],
            },
        ]);
        setDraftAnchor(null);
        setDraftMarkerPos(null);
        setShowCreateComposer(false);
        setDraftMessage("");
        setComposerMode(null);
        setPanelMode("view");
        setStep(4);
    };

    const handleMarkerEnter = (entryId: string) => {
        if (step < 4) return;
        setHoveredEntryId(entryId);
        if (step === 4) setStep(5);
    };

    const handleMarkerLeave = () => {
        setHoveredEntryId(null);
    };

    const handleMarkerClick = (entryId: string) => {
        if (step < 4) return;
        setHoveredEntryId(null);
        setActiveEntryId(entryId);
        setShowThreadCard(true);
        setComposerMode("reply");
        setDraftMessage("");
        setStep(6);
    };

    const handleSendReply = () => {
        if (step !== 6 || !draftMessage.trim() || !activeEntryId) return;

        setFeedbackEntries((entries) =>
            entries.map((entry) =>
                entry.id === activeEntryId
                    ? {
                          ...entry,
                          replies: [
                              {
                                  id: "r_1",
                                  message: draftMessage.trim(),
                                  status: "suggested",
                                  author_name: preview.developer,
                              },
                          ],
                      }
                    : entry,
            ),
        );
        setDraftMessage("");
        setComposerMode(null);
        setStep(7);
    };

    const handleResolve = () => {
        if (step !== 7 || !activeEntryId) return;

        setFeedbackEntries((entries) =>
            entries.map((entry) =>
                entry.id === activeEntryId
                    ? {
                          ...entry,
                          status: "resolved",
                          replies: [
                              ...entry.replies,
                              {
                                  id: "r_2",
                                  message: messages.resolution.issueResolvedMessage,
                                  status: "resolved",
                                  author_name: preview.designer,
                              },
                          ],
                      }
                    : entry,
            ),
        );
        setStep(8);
    };

    const addedCount = feedbackEntries.length;
    const stats = {
        found: 2 + addedCount,
        groups: 7,
        items: 48 + addedCount,
    };

    const hoveredEntry = hoveredEntryId ? feedbackEntries.find((entry) => entry.id === hoveredEntryId) : null;
    const hoveredMarkerPos = hoveredEntryId ? entryMarkerPositions[hoveredEntryId] : null;
    const activeEntry = activeEntryId ? feedbackEntries.find((entry) => entry.id === activeEntryId) : null;
    const activeMarkerPos = activeEntryId ? entryMarkerPositions[activeEntryId] : null;
    const isComplete = step === 8;
    const activeHint = isComplete ? null : preview.hints[step - 1];

    return (
        <div className="flex h-full min-h-0 w-full flex-col">
            {!embedded ? (
                <div className="px-1">
                    <p className="text-sm font-semibold text-foreground">{preview.title}</p>
                    <p className="text-xs text-muted-foreground">{preview.subtitle}</p>
                </div>
            ) : null}

            <div
                data-stitchable-mock=""
                className={cn(
                    "relative flex w-full h-full flex-col overflow-hidden rounded-[24px] shadow-[0_22px_70px_-12px_rgba(0,0,0,0.28)]",
                    embedded ? "min-h-[520px]" : "aspect-[10/13] min-h-[480px]",
                )}
                style={STITCHABLE_LIGHT_STYLE}
            >
                <SafariWindowChrome
                    url="ops.novadesk.io/sprint"
                    tabTitle="Sprint"
                    className="h-full min-h-0 flex-1"
                >
                    <div
                        ref={canvasRef}
                        className="relative h-full min-h-[380px] overflow-hidden bg-white"
                    >
                        <PreviewMockPage
                            scrollContainerRef={scrollContainerRef}
                            highlightTargets={step === 2 && panelMode === "report"}
                            reportMode={panelMode === "report"}
                            mockPage={preview.mockPage}
                            onPageClick={handleMockPageClick}
                        />

                        {feedbackEntries.map((entry) => {
                            const markerPos = entryMarkerPositions[entry.id];
                            if (!markerPos) return null;

                            return (
                                <button
                                    key={entry.id}
                                    type="button"
                                    className="absolute z-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                    style={{ left: `${markerPos.left}%`, top: `${markerPos.top}%` }}
                                    onMouseEnter={() => handleMarkerEnter(entry.id)}
                                    onMouseLeave={handleMarkerLeave}
                                    onClick={() => handleMarkerClick(entry.id)}
                                    aria-label={preview.progress[4]}
                                >
                                    <span
                                        className="relative flex h-4 w-4 items-center justify-center rounded-full border border-white/60"
                                        style={{ backgroundColor: MARKER_ITEM }}
                                    />
                                    {entry.replies.length > 0 ? (
                                        <span className="absolute -right-[6px] -top-[6px] flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[var(--adaptive-black900)] px-[3px] text-[10px] font-semibold leading-none text-[var(--adaptive-black50)] ring-1 ring-white/80">
                                            +{entry.replies.length}
                                        </span>
                                    ) : null}
                                </button>
                            );
                        })}

                        {!showThreadCard && hoveredEntry && hoveredMarkerPos ? (
                            <div
                                className="pointer-events-none absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
                                style={markerCardStyle(hoveredMarkerPos, 8)}
                            >
                                <div className="flex w-[260px] flex-col gap-[10px] bg-[var(--adaptive-blackOpacity800)] p-[16px] backdrop-blur-[10px]">
                                    <StatusBadge
                                        status={getDisplayStatus(hoveredEntry, messages)}
                                        messages={messages}
                                    />
                                    <p className="line-clamp-2 text-[16px] leading-[1.5] text-[var(--adaptive-black50)]">{hoveredEntry.message}</p>
                                    <div className="flex items-center gap-[6px]">
                                        <p className="text-[12px] text-[var(--adaptive-black500)]">{hoveredEntry.author_name}</p>
                                        <span className="rounded-full bg-[var(--adaptive-black800)] px-[6px] py-[2px] text-[10px] text-[var(--adaptive-black400)]">{messages.author.creatorLabel}</span>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {showCreateComposer && composerMode === "create" ? (
                            <div
                                className="absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
                                style={
                                    draftMarkerPos
                                        ? markerCardStyle(draftMarkerPos, 10)
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
                                    onChange={setDraftMessage}
                                    onSend={handleSendCreate}
                                />
                            </div>
                        ) : null}

                        {showThreadCard && activeEntry && activeMarkerPos ? (
                            <div
                                className="absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
                                style={markerCardStyle(activeMarkerPos, -4)}
                            >
                                <section className="flex flex-col gap-[12px] bg-[var(--adaptive-blackOpacity800)] p-[16px] backdrop-blur-[20px]">
                                    <StatusBadge
                                        status={getDisplayStatus(activeEntry, messages)}
                                        messages={messages}
                                    />
                                    <p className="text-[16px] font-semibold leading-[1.5] text-[var(--adaptive-black50)]">{activeEntry.message}</p>
                                    <p className="text-[12px] text-[var(--adaptive-black500)]">{activeEntry.author_name}</p>
                                </section>

                                {composerMode === "reply" && step === 6 ? (
                                    <MockComposer
                                        message={draftMessage}
                                        author={preview.developer}
                                        messages={messages}
                                        onChange={setDraftMessage}
                                        onSend={handleSendReply}
                                    />
                                ) : null}

                                {activeEntry.replies.length > 0 ? (
                                    <section className="max-h-[200px] overflow-auto bg-[var(--adaptive-blackOpacity900)] backdrop-blur-[10px]">
                                        {[...activeEntry.replies].reverse().map((reply) => {
                                            const isLatest = activeEntry.replies[activeEntry.replies.length - 1]?.id === reply.id;
                                            const showResolveBtn = isLatest && reply.status === "suggested" && activeEntry.status !== "resolved" && step === 7;

                                            return (
                                                <article
                                                    key={reply.id}
                                                    className="flex flex-col gap-[8px] border-t border-[var(--adaptive-black800)] p-[16px]"
                                                >
                                                    <StatusBadge
                                                        status={reply.status}
                                                        messages={messages}
                                                    />
                                                    <p className="text-[14px] leading-[1.5] text-[var(--adaptive-black50)]">{reply.message}</p>
                                                    <p className="text-[12px] text-[var(--adaptive-black500)]">{reply.author_name}</p>
                                                    {showResolveBtn ? (
                                                        <div className="mt-[10px]">
                                                            <div className="flex items-center gap-[8px] rounded-full border border-[var(--adaptive-black800)] bg-[var(--adaptive-black900)] px-[8px] py-[4px]">
                                                                <button
                                                                    type="button"
                                                                    onClick={handleResolve}
                                                                    className="flex-1 rounded-full bg-[var(--adaptive-blue500)] text-[12px] font-semibold text-[var(--adaptive-black50)] transition-colors"
                                                                >
                                                                    {messages.thread.resolved}
                                                                </button>
                                                                <div className="h-full w-px bg-[var(--adaptive-black700)]" />
                                                                <span className="shrink-0 text-[12px] font-semibold text-[var(--adaptive-black700)]">{messages.thread.select}</span>
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
                            highlightAdd={step === 1 || (step >= 4 && step <= 5)}
                            messages={messages}
                            envLabel={preview.envLabel}
                            onAddFeedback={handleAddFeedback}
                            onStopFeedback={handleStopFeedback}
                        />

                        {activeHint ? (
                            <StepHint
                                step={step}
                                hint={activeHint}
                            />
                        ) : isComplete ? (
                            <div className="absolute bottom-4 left-1/2 z-[60] -translate-x-1/2">
                                <button
                                    type="button"
                                    onClick={resetDemo}
                                    className="rounded-full border border-[var(--adaptive-black300)] bg-[var(--adaptive-whiteOpacity800)] px-4 py-2 text-[12px] font-semibold text-[var(--adaptive-black800)] shadow-lg backdrop-blur-md transition-colors hover:bg-white"
                                >
                                    {preview.retryLabel}
                                </button>
                            </div>
                        ) : null}
                    </div>
                </SafariWindowChrome>

                <ProcessStepTabs
                    current={Math.min(step, 7)}
                    labels={preview.progress}
                />
            </div>
        </div>
    );
}

function StepHint({ step, hint }: { step: number; hint: string }) {
    return (
        <div
            className="pointer-events-none absolute bottom-4 left-1/2 z-[60] max-w-[90%] -translate-x-1/2"
            role="status"
            aria-live="polite"
        >
            <div className="flex items-center gap-2 rounded-full border border-[var(--adaptive-black300)] bg-[var(--adaptive-whiteOpacity800)] px-4 py-2 shadow-lg backdrop-blur-md">
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--adaptive-blue500)] px-1.5 text-[11px] font-bold text-white">{step}</span>
                <p className="text-[12px] font-medium text-[var(--adaptive-black800)]">{hint}</p>
            </div>
        </div>
    );
}

function ProcessStepTabs({ current, labels }: { current: number; labels: string[] }) {
    return (
        <nav
            className="shrink-0 border-t border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg)]"
            aria-label="Preview workflow steps"
        >
            <div className="flex overflow-x-auto">
                {labels.map((label, i) => {
                    const stepNum = i + 1;
                    const isActive = stepNum === current;

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

const PREVIEW_BRAND = "#00a88f";

function PreviewMiniChart({
  axisStart,
  axisEnd,
}: {
  axisStart: string;
  axisEnd: string;
}) {
  const gradientId = "preview-bundle-chart-gradient";

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative min-h-[72px] flex-1">
        <svg
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={PREVIEW_BRAND} stopOpacity="0.35" />
              <stop
                offset="100%"
                stopColor={PREVIEW_BRAND}
                stopOpacity="0.02"
              />
            </linearGradient>
          </defs>
          <path
            d="M 0 185 C 60 182, 120 175, 180 155 C 240 120, 300 70, 400 25 L 400 200 L 0 200 Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M 0 185 C 60 182, 120 175, 180 155 C 240 120, 300 70, 400 25"
            fill="none"
            stroke={PREVIEW_BRAND}
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[9px] text-[#737373]">
        <span>{axisStart}</span>
        <span>{axisEnd}</span>
      </div>
    </div>
  );
}

function selectableCellClass(reportMode: boolean, highlightTargets: boolean) {
  return cn(
    "text-left transition-colors",
    reportMode && "cursor-crosshair hover:bg-[#00a88f]/[0.04]",
    highlightTargets && "ring-1 ring-inset ring-[#00a88f]/30",
  );
}

function PreviewMockPage({
  scrollContainerRef,
  highlightTargets,
  reportMode,
  mockPage,
  onPageClick,
}: {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  highlightTargets: boolean;
  reportMode: boolean;
  mockPage: LandingMessages["landing"]["preview"]["mockPage"];
  onPageClick: (event: MouseEvent<HTMLDivElement>) => void;
}) {
  const ids = PREVIEW_MOCK_REPORT_IDS;

  return (
    <div
      ref={scrollContainerRef}
      onClick={onPageClick}
      className={cn(
        "h-full overflow-y-auto pb-24 text-[#0a0a0a]",
        reportMode && "cursor-crosshair",
      )}
    >
      <div className="border-b border-black/10 px-4 py-4">
        <h2 className="text-left text-[15px] font-semibold leading-snug tracking-tight sm:text-base">
          {mockPage.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 border-b border-black/10">
        <div
          data-report-id={ids.activeSessions}
          data-report-type="item"
          className={cn(
            "flex min-h-[108px] flex-col justify-between border-r border-black/10 p-4",
            selectableCellClass(reportMode, highlightTargets),
          )}
        >
          <p className="text-[10px] text-[#737373]">{mockPage.mainStat.label}</p>
          <p className="text-2xl font-semibold tracking-tight sm:text-[28px]">
            {mockPage.mainStat.value}
          </p>
        </div>

        <div className="flex min-h-[108px] flex-col p-4">
          <div
            data-report-id={ids.sessionChart}
            data-report-type="item"
            className={cn(
              "mb-2 inline-flex w-fit items-center gap-1.5 border border-black/10 px-2 py-1 text-[10px]",
              selectableCellClass(reportMode, highlightTargets),
            )}
          >
            <span className="font-medium">{mockPage.chart.label}</span>
            <ChevronDown className="size-3 text-[#737373]" aria-hidden />
          </div>
          <PreviewMiniChart
            axisStart={mockPage.chart.axisStart}
            axisEnd={mockPage.chart.axisEnd}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-black/10">
        {mockPage.stats.map((stat, index) => {
          const isErrorStat = index === 1;
          const cellClass = cn(
            "p-3 sm:p-4",
            index < 2 && "border-r border-black/10",
          );

          if (isErrorStat) {
            return (
              <div
                key={stat.label}
                data-report-id={ids.errorRate}
                data-report-type="item"
                className={cn(cellClass, selectableCellClass(reportMode, highlightTargets))}
              >
                <p className="text-sm font-semibold tracking-tight sm:text-base">{stat.value}</p>
                <p className="mt-1 text-[9px] text-[#737373] sm:text-[10px]">{stat.label}</p>
              </div>
            );
          }

          return (
            <div key={stat.label} className={cellClass}>
              <p className="text-sm font-semibold tracking-tight sm:text-base">{stat.value}</p>
              <p className="mt-1 text-[9px] text-[#737373] sm:text-[10px]">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="border-b border-black/10 px-4 py-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#00a88f]">
          {mockPage.section.eyebrow}
        </span>
        <h3 className="mt-2 text-left text-sm font-semibold tracking-tight sm:text-[15px]">
          {mockPage.section.title}
        </h3>
        <p className="mt-1.5 text-left text-[10px] leading-relaxed text-[#525252] sm:text-[11px]">
          {mockPage.section.description}
        </p>
      </div>

      <div className="grid grid-cols-2 border-b border-black/10">
        {mockPage.panels.map((panel, index) => {
          const isApiPanel = index === 0;
          const cellClass = cn("p-4 text-left", index === 0 && "border-r border-black/10");

          if (isApiPanel) {
            return (
              <div
                key={panel.title}
                data-report-id={ids.apiLatency}
                data-report-type="item"
                className={cn(cellClass, selectableCellClass(reportMode, highlightTargets))}
              >
                <h4 className="text-[11px] font-semibold sm:text-xs">{panel.title}</h4>
                <p className="mt-1.5 text-[10px] leading-relaxed text-[#525252] sm:text-[11px]">
                  {panel.description}
                </p>
              </div>
            );
          }

          return (
            <div key={panel.title} className={cellClass}>
              <h4 className="text-[11px] font-semibold sm:text-xs">{panel.title}</h4>
              <p className="mt-1.5 text-[10px] leading-relaxed text-[#525252] sm:text-[11px]">
                {panel.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="border-b border-black/10">
        <div className="border-b border-black/10 px-4 py-3">
          <h4 className="text-left text-[11px] font-semibold sm:text-xs">{mockPage.table.title}</h4>
        </div>
        <div className="grid grid-cols-4 border-b border-black/10 bg-[#fafafa] text-[9px] font-medium uppercase tracking-wide text-[#737373]">
          {mockPage.table.headers.map((header, index) => (
            <div
              key={header}
              className={cn("px-3 py-2 sm:px-4", index < 3 && "border-r border-black/10")}
            >
              {header}
            </div>
          ))}
        </div>
        {mockPage.table.rows.map((row) => {
          if (row.selectable) {
            return (
              <div
                key={row.cells.join("-")}
                data-report-id={ids.deployRow}
                data-report-type="item"
                className={cn(
                  "grid grid-cols-4 border-b border-black/10 text-[10px] sm:text-[11px]",
                  selectableCellClass(reportMode, highlightTargets),
                )}
              >
                {row.cells.map((cell, index) => (
                  <span
                    key={cell}
                    className={cn(
                      "px-3 py-2.5 sm:px-4",
                      index < 3 && "border-r border-black/10",
                      index === 2 && "font-medium text-[#00a88f]",
                    )}
                  >
                    {cell}
                  </span>
                ))}
              </div>
            );
          }

          return (
            <div
              key={row.cells.join("-")}
              className="grid grid-cols-4 border-b border-black/10 text-[10px] sm:text-[11px]"
            >
              {row.cells.map((cell, index) => (
                <span
                  key={cell}
                  className={cn("px-3 py-2.5 sm:px-4", index < 3 && "border-r border-black/10")}
                >
                  {cell}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <div className="px-4 py-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#00a88f]">
          {mockPage.release.eyebrow}
        </span>
        <h3 className="mt-2 text-left text-sm font-semibold tracking-tight sm:text-[15px]">
          {mockPage.release.title}
        </h3>
        <div className="mt-3 border border-black/10">
          {mockPage.release.items.map((item, index) => (
            <div
              key={item.version}
              className={cn(
                "grid grid-cols-[72px_1fr] text-[10px] sm:text-[11px]",
                index < mockPage.release.items.length - 1 && "border-b border-black/10",
              )}
            >
              <span className="border-r border-black/10 px-3 py-2.5 font-medium sm:px-4">
                {item.version}
              </span>
              <span className="px-3 py-2.5 text-[#525252] sm:px-4">{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ControlPanel({
    mode,
    stats,
    highlightAdd,
    messages,
    envLabel,
    onAddFeedback,
    onStopFeedback,
}: {
    mode: PanelMode;
    stats: { found: number; groups: number; items: number };
    highlightAdd: boolean;
    messages: LandingMessages;
    envLabel: string;
    onAddFeedback: () => void;
    onStopFeedback: () => void;
}) {
    if (mode === "report") {
        return (
            <div className="absolute right-4 top-4 z-50 min-w-[220px] rounded-[24px] border border-[var(--adaptive-black200)] bg-[var(--adaptive-whiteOpacity800)] p-[4px] backdrop-blur-[50px]">
                <section className="flex items-center justify-between gap-[16px] px-[12px] py-[8px]">
                    <section className="flex shrink-0 items-center gap-[4px]">
                        <LogoIcon className="w-[16px]" />
                        <p className="text-[14px] text-[var(--adaptive-black900)]">Stitchable°</p>
                    </section>
                    <button
                        type="button"
                        onClick={onStopFeedback}
                        className="shrink-0 text-[14px] font-bold text-[var(--adaptive-blue500)]"
                    >
                        {messages.panel.stopFeedback}
                    </button>
                </section>
            </div>
        );
    }

    return (
        <div className="absolute left-3 right-3 top-3 z-50 mx-auto max-w-[320px] rounded-[24px] border border-[var(--adaptive-black200)] bg-[var(--adaptive-whiteOpacity800)] backdrop-blur-[50px] sm:left-auto sm:right-3 sm:mx-0">
            <div className="flex flex-col gap-[8px] p-[8px_0_8px_12px]">
                <section className="flex items-center justify-between gap-[8px] pr-[8px]">
                    <section className="flex min-w-0 items-center gap-[4px]">
                        <LogoIcon className="w-[16px] shrink-0" />
                        <p className="shrink-0 text-[14px] font-[700] text-[var(--adaptive-black900)] select-none">Stitchable°</p>
                        <span className="inline-flex items-center gap-[4px] rounded-full border border-[var(--adaptive-black300)] bg-[var(--adaptive-black50)] px-[4px] py-[2px]">
                            <span className="text-[12px] text-[var(--adaptive-black500)]">{envLabel}</span>
                            <span
                                className="inline-flex h-[4px] w-[4px] rounded-full bg-[var(--adaptive-green500)]"
                                aria-hidden
                            />
                        </span>
                    </section>

                    <section className="flex shrink-0 items-center">
                        <button
                            type="button"
                            onClick={onAddFeedback}
                            className={cn(
                                "flex items-center gap-[4px] rounded-l-[8px] bg-[var(--adaptive-black900)] p-[0_8px] transition-shadow",
                                highlightAdd && "ring-2 ring-[var(--adaptive-blue500)] ring-offset-2",
                            )}
                        >
                            <SelectIcon className="w-[16px]" />
                            <p className="text-[12px] text-[var(--adaptive-black50)]">{messages.panel.addFeedback}</p>
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
                            <p className="text-[12px] text-[var(--adaptive-black500)]">{s.label}</p>
                            <p className="font-[Menlo] text-[14px] font-semibold tabular-nums text-[var(--adaptive-black900)]">{formatStatCount(s.value)}</p>
                        </section>
                    ))}
                </section>
            </div>

            <section className="flex items-stretch border-t border-[var(--adaptive-black200)]">
                <button
                    type="button"
                    className="flex min-w-0 flex-1 items-center justify-center gap-[4px] bg-[var(--adaptive-black100)] px-[8px] py-[4px]"
                >
                    <p className="truncate text-[11px] font-[500] text-[var(--adaptive-black800)]">{messages.panel.tabPageDetails}</p>
                    <ChevronDownIcon className="h-3.5 w-3.5 shrink-0 rotate-180 text-[var(--adaptive-black800)]" />
                </button>
                <div className="h-full w-px bg-[var(--adaptive-black200)]" />
                <button
                    type="button"
                    className="flex min-w-0 flex-1 items-center justify-center gap-[4px] px-[8px] py-[4px] text-[var(--adaptive-black600)]"
                >
                    <p className="truncate text-[11px] font-[500]">{messages.panel.tabFeedbackList}</p>
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

function MockComposer({ message, author, messages, onChange, onSend }: { message: string; author: string; messages: LandingMessages; onChange: (value: string) => void; onSend: () => void }) {
    return (
        <div className="flex w-full flex-col bg-[var(--adaptive-blackOpacity900)] backdrop-blur-[10px]">
            <textarea
                value={message}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                        onSend();
                    }
                }}
                placeholder={messages.composer.placeholder}
                rows={3}
                className="min-h-[72px] w-full resize-none bg-transparent px-[16px] pt-[16px] text-[14px] leading-[1.4] text-[var(--adaptive-black50)] outline-none placeholder:text-[var(--adaptive-black500)]"
            />
            <div className="flex items-center justify-between gap-[8px] px-[12px] pb-[12px]">
                <span className="rounded-full border border-[var(--adaptive-black600)] px-[12px] py-[4px] text-[12px] font-semibold text-[var(--adaptive-black500)]">{author}</span>
                <button
                    type="button"
                    onClick={onSend}
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
