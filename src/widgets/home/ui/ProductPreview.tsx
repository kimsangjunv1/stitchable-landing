"use client";

import { useCallback, useRef, useState, type RefObject } from "react";
import { Bell, Search } from "lucide-react";
import { useMessages } from "@/app/providers/LocaleProvider";
import type { LandingMessages } from "@/i18n";
import { cn } from "@/shared/lib/utils";
import { SafariWindowChrome } from "./SafariWindowChrome";
import { ChevronDownIcon, formatStatCount, LogoIcon, SelectIcon, SendIcon, SettingsIcon } from "./stitchable-mock/icons";
import { FEEDBACK_STATUS_COLOR, MARKER_ITEM, STITCHABLE_LIGHT_STYLE } from "./stitchable-mock/tokens";

type DemoStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

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

function getCenterPos(container: HTMLElement, target: HTMLElement): MarkerPos {
    const c = container.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    return {
        left: ((t.left + t.width / 2 - c.left) / c.width) * 100,
        top: ((t.top + t.height / 2 - c.top) / c.height) * 100,
    };
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
    const targetRef = useRef<HTMLButtonElement>(null);

    const [step, setStep] = useState<DemoStep>(1);
    const [panelMode, setPanelMode] = useState<PanelMode>("idle");
    const [feedback, setFeedback] = useState<MockFeedback | null>(null);
    const [markerPos, setMarkerPos] = useState<MarkerPos | null>(null);
    const [showCreateComposer, setShowCreateComposer] = useState(false);
    const [showThreadCard, setShowThreadCard] = useState(false);
    const [showHoverCard, setShowHoverCard] = useState(false);
    const [draftMessage, setDraftMessage] = useState("");
    const [composerMode, setComposerMode] = useState<"create" | "reply" | null>(null);
    const [demoAdded, setDemoAdded] = useState(false);

    const captureMarkerPos = useCallback(() => {
        const canvas = canvasRef.current;
        const target = targetRef.current;
        if (!canvas || !target) return;
        setMarkerPos(getCenterPos(canvas, target));
    }, []);

    const resetDemo = useCallback(() => {
        setStep(1);
        setPanelMode("idle");
        setFeedback(null);
        setMarkerPos(null);
        setShowCreateComposer(false);
        setShowThreadCard(false);
        setShowHoverCard(false);
        setDraftMessage("");
        setComposerMode(null);
        setDemoAdded(false);
    }, []);

    const handleAddFeedback = () => {
        if (step !== 1) return;
        setPanelMode("report");
        setStep(2);
    };

    const handleStopFeedback = () => {
        if (panelMode !== "report") return;
        setPanelMode("idle");
        setShowCreateComposer(false);
        setDraftMessage("");
        setComposerMode(null);
        setStep(1);
    };

    const handleSelectTarget = () => {
        if (step !== 2 || panelMode !== "report") return;
        captureMarkerPos();
        setShowCreateComposer(true);
        setComposerMode("create");
        setDraftMessage("");
        setStep(3);
    };

    const handleSendCreate = () => {
        if (step !== 3 || !draftMessage.trim()) return;
        setFeedback({
            message: draftMessage.trim(),
            author_name: preview.designer,
            status: "open",
            replies: [],
        });
        setDemoAdded(true);
        setShowCreateComposer(false);
        setDraftMessage("");
        setComposerMode(null);
        setPanelMode("view");
        setStep(4);
    };

    const handleMarkerEnter = () => {
        if (step < 4 || !feedback) return;
        setShowHoverCard(true);
        if (step === 4) setStep(5);
    };

    const handleMarkerLeave = () => {
        setShowHoverCard(false);
    };

    const handleMarkerClick = () => {
        if (step < 4 || !feedback) return;
        setShowHoverCard(false);
        setShowThreadCard(true);
        setComposerMode("reply");
        setDraftMessage("");
        setStep(6);
    };

    const handleSendReply = () => {
        if (step !== 6 || !draftMessage.trim() || !feedback) return;
        setFeedback({
            ...feedback,
            replies: [
                {
                    id: "r_1",
                    message: draftMessage.trim(),
                    status: "suggested",
                    author_name: preview.developer,
                },
            ],
        });
        setDraftMessage("");
        setComposerMode(null);
        setStep(7);
    };

    const handleResolve = () => {
        if (step !== 7 || !feedback) return;
        setFeedback({
            ...feedback,
            status: "resolved",
            replies: [
                ...feedback.replies,
                {
                    id: "r_2",
                    message: messages.resolution.issueResolvedMessage,
                    status: "resolved",
                    author_name: preview.designer,
                },
            ],
        });
        setStep(8);
    };

    const stats = {
        found: demoAdded ? 3 : 2,
        groups: 7,
        items: demoAdded ? 49 : 48,
    };

    const replyCount = feedback?.replies.length ?? 0;
    const showMarker = feedback !== null && markerPos !== null;
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
                    url="app.stitchable.dev/dashboard"
                    tabTitle="Dashboard"
                    className="h-full min-h-0 flex-1"
                >
                    <div
                        ref={canvasRef}
                        className="relative h-full min-h-[380px] overflow-hidden bg-[#f6f6f7]"
                    >
                        <DemoHostApp
                            targetRef={targetRef}
                            highlightTarget={step === 2 && panelMode === "report"}
                            reportMode={panelMode === "report"}
                            preview={preview}
                            onSelectTarget={handleSelectTarget}
                        />

                        {showMarker && markerPos ? (
                            <button
                                type="button"
                                className="absolute z-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                style={{ left: `${markerPos.left}%`, top: `${markerPos.top}%` }}
                                onMouseEnter={handleMarkerEnter}
                                onMouseLeave={handleMarkerLeave}
                                onClick={handleMarkerClick}
                                aria-label={preview.progress[4]}
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

                        {showHoverCard && feedback && markerPos ? (
                            <div
                                className="pointer-events-none absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
                                style={markerCardStyle(markerPos, 8)}
                            >
                                <div className="flex w-[260px] flex-col gap-[10px] bg-[var(--adaptive-blackOpacity800)] p-[16px] backdrop-blur-[10px]">
                                    <StatusBadge
                                        status={getDisplayStatus(feedback, messages)}
                                        messages={messages}
                                    />
                                    <p className="line-clamp-2 text-[16px] leading-[1.5] text-[var(--adaptive-black50)]">{feedback.message}</p>
                                    <div className="flex items-center gap-[6px]">
                                        <p className="text-[12px] text-[var(--adaptive-black500)]">{feedback.author_name}</p>
                                        <span className="rounded-full bg-[var(--adaptive-black800)] px-[6px] py-[2px] text-[10px] text-[var(--adaptive-black400)]">{messages.author.creatorLabel}</span>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {showCreateComposer && composerMode === "create" ? (
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
                                    onChange={setDraftMessage}
                                    onSend={handleSendCreate}
                                />
                            </div>
                        ) : null}

                        {showThreadCard && feedback && markerPos ? (
                            <div
                                className="absolute z-50 overflow-hidden rounded-[24px] border-[2px] border-[var(--adaptive-black300)] backdrop-blur-[10px]"
                                style={markerCardStyle(markerPos, -4)}
                            >
                                <section className="flex flex-col gap-[12px] bg-[var(--adaptive-blackOpacity800)] p-[16px] backdrop-blur-[20px]">
                                    <StatusBadge
                                        status={getDisplayStatus(feedback, messages)}
                                        messages={messages}
                                    />
                                    <p className="text-[16px] font-semibold leading-[1.5] text-[var(--adaptive-black50)]">{feedback.message}</p>
                                    <p className="text-[12px] text-[var(--adaptive-black500)]">{feedback.author_name}</p>
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

                                {feedback.replies.length > 0 ? (
                                    <section className="max-h-[200px] overflow-auto bg-[var(--adaptive-blackOpacity900)] backdrop-blur-[10px]">
                                        {[...feedback.replies].reverse().map((reply) => {
                                            const isLatest = feedback.replies[feedback.replies.length - 1]?.id === reply.id;
                                            const showResolveBtn = isLatest && reply.status === "suggested" && feedback.status !== "resolved" && step === 7;

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
                            highlightAdd={step === 1}
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

function DemoHostApp({
    targetRef,
    highlightTarget,
    reportMode,
    preview,
    onSelectTarget,
}: {
    targetRef: RefObject<HTMLButtonElement | null>;
    highlightTarget: boolean;
    reportMode: boolean;
    preview: LandingMessages["landing"]["preview"];
    onSelectTarget: () => void;
}) {
    return (
        <div className={cn("relative flex h-full transition-colors", reportMode && "cursor-crosshair")}>
            <div className="hidden w-[24%] shrink-0 border-r border-[#e2e2e3] bg-[#eeedef] p-3 sm:block">
                <div className="mb-4 flex items-center gap-2">
                    <div className="size-5 rounded-md bg-[#646cff]" />
                    <span className="truncate text-[11px] font-semibold text-[#3c3c43]">{preview.appName}</span>
                </div>
                <div className="space-y-1.5">
                    {["Dashboard", "Reports", "Settings"].map((item, i) => (
                        <div
                            key={item}
                            className={cn("rounded-md px-2 py-1.5 text-[11px] font-medium", i === 0 ? "bg-[#646cff]/12 text-[#646cff]" : "text-[#6a6a71]")}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col gap-4 p-4 pb-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:hidden">
                        <div className="size-5 rounded-md bg-[#646cff]" />
                        <span className="text-[12px] font-semibold text-[#3c3c43]">{preview.appName}</span>
                    </div>
                    <div className="ml-auto flex items-center gap-2.5 text-[#8e8e93]">
                        <Search className="size-3.5" />
                        <Bell className="size-3.5" />
                        <div className="size-5 rounded-full bg-[#d1d1d6]" />
                    </div>
                </div>

                <div className="rounded-xl border border-[#e2e2e3] bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-[#8e8e93]">{preview.revenueLabel}</p>
                            <p className="mt-1 text-xl font-semibold tracking-tight text-[#1c1c1e] sm:text-2xl">{preview.revenueValue}</p>
                            <p className="mt-0.5 text-[11px] font-medium text-[#34c759]">{preview.revenueChange}</p>
                        </div>
                        <button
                            ref={targetRef}
                            type="button"
                            onClick={onSelectTarget}
                            disabled={!reportMode}
                            className={cn(
                                "shrink-0 rounded-lg bg-[#646cff] px-3 py-1.5 text-[11px] font-medium text-white transition-all",
                                reportMode && "cursor-crosshair hover:bg-[#535bf2]",
                                !reportMode && "opacity-90",
                                highlightTarget && "ring-2 ring-[#646cff] ring-offset-2 ring-offset-white",
                            )}
                        >
                            {preview.exportReport}
                        </button>
                    </div>
                    <div className="flex h-12 items-end gap-1 rounded-lg bg-[#f6f6f7] px-2 pb-2">
                        {[35, 55, 42, 68, 50, 78, 62, 85, 70].map((h, i) => (
                            <span
                                key={i}
                                className="flex-1 rounded-sm bg-[#646cff]/25"
                                style={{ height: `${h}%` }}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {preview.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-lg border border-[#e2e2e3] bg-white p-2.5 sm:p-3"
                        >
                            <p className="text-[9px] font-medium uppercase tracking-wider text-[#8e8e93] sm:text-[10px]">{stat.label}</p>
                            <p className="mt-1 text-sm font-semibold text-[#1c1c1e] sm:text-base">{stat.value}</p>
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
