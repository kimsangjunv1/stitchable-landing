"use client";

import { useCallback, useMemo, useState } from "react";
import { StitchableLogo } from "./StitchableLogo";
import {
  MessageSquare,
  Layers,
  Check,
  Search,
  Bell,
  Send,
  RotateCcw,
  ChevronDown,
} from "lucide-react";

// Stitchable tokens (from constants/report.ts, feedbackStatus.ts)
const MARKER_ITEM = "#f04452";

const STATUS_COLOR: Record<string, string> = {
  currently_wait: "#fe9800",
  suggested: "#fe9800",
  found_error: "#f66570",
  resolved: "#15c47e",
};

const LABELS = {
  addFeedback: "피드백 추가",
  viewFeedbacks: "피드백 보기",
  statsFound: "발견",
  statsGroup: "그룹",
  statsItem: "아이템",
  placeholder: "메시지를 입력하세요",
  send: "전송",
  denied: "거절",
  resolved: "해결",
  select: "선택",
  leaveResult: "결과 남기기",
  currentlyWait: "대기 중",
  suggested: "제안됨",
  foundError: "오류 발견",
  resolvedStatus: "해결됨",
  issueResolved: "이슈가 해결되었습니다.",
  authorPlaceholder: "작성자",
  reset: "다시 시작",
} as const;

const STEP_GUIDES: Record<WorkflowStep, string> = {
  1: "Export report 버튼을 클릭해 피드백을 남기고 전송하세요",
  2: "마커를 클릭해 스레드를 열고 첫 답변을 전송하세요",
  3: "거절 버튼을 누른 뒤 검수 사유를 입력해 전송하세요",
  4: "결과 남기기 버튼을 누른 뒤 재답변을 전송하세요",
  5: "해결 버튼을 눌러 이슈를 완료하세요",
  done: "워크플로우가 완료되었습니다. 다시 시작해 보세요.",
};

const STEP_DRAFTS: Record<WorkflowStep, string> = {
  1: "모바일에서 Export 버튼이 금액과 겹쳐 보여요",
  2: "flex-wrap 수정을 내일 stage 배포에 포함할게요",
  3: "아직 iPhone SE에서 버튼이 겹쳐 보입니다",
  4: "수정 배포 완료했습니다. 다시 확인 부탁드려요",
  5: "",
  done: "",
};

type ReplyStatus = "suggested" | "found_error" | "resolved";

type MockReply = {
  id: string;
  message: string;
  status: ReplyStatus;
  author_name: string;
};

type MockFeedback = {
  message: string;
  author_name: string;
  status: "open" | "resolved";
  report_id: string;
  report_type: "item" | "group";
  replies: MockReply[];
};

type WorkflowStep = 1 | 2 | 3 | 4 | 5 | "done";
type PendingComposer = null | "create" | "reply" | "deny" | "checkout";

const DESIGNER = "김디자인";
const DEVELOPER = "이개발";

function statusLabel(status: string): string {
  switch (status) {
    case "currently_wait":
      return LABELS.currentlyWait;
    case "suggested":
      return LABELS.suggested;
    case "found_error":
      return LABELS.foundError;
    case "resolved":
      return LABELS.resolvedStatus;
    default:
      return status;
  }
}

function statusIcon(status: string): string {
  if (status === "resolved") return "✓";
  if (status === "found_error") return "−";
  return "◷";
}

function getDisplayStatus(feedback: MockFeedback, expanded: boolean): string {
  if (feedback.status === "resolved") return "resolved";
  if (feedback.replies.length === 0)
    return expanded ? "currently_wait" : "currently_wait";
  return feedback.replies[feedback.replies.length - 1].status;
}

function canReviewLatestSuggestion(replies: MockReply[]): boolean {
  return replies[replies.length - 1]?.status === "suggested";
}

function canCheckoutReply(replies: MockReply[], replyId: string): boolean {
  const latestFoundError = [...replies]
    .reverse()
    .find((r) => r.status === "found_error");
  return latestFoundError?.id === replyId;
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

export function ProductPreviewDenied() {
  const [step, setStep] = useState<WorkflowStep>(1);
  const [feedback, setFeedback] = useState<MockFeedback | null>(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [pendingComposer, setPendingComposer] = useState<PendingComposer>(null);
  const [draftMessage, setDraftMessage] = useState("");
  const [draftAuthor, setDraftAuthor] = useState(DESIGNER);
  const [markerHover, setMarkerHover] = useState(false);

  const reset = useCallback(() => {
    setStep(1);
    setFeedback(null);
    setCardOpen(false);
    setPendingComposer(null);
    setDraftMessage("");
    setDraftAuthor(DESIGNER);
    setMarkerHover(false);
  }, []);

  const openComposer = useCallback(
    (type: PendingComposer, author: string) => {
      setPendingComposer(type);
      setDraftMessage(STEP_DRAFTS[step]);
      setDraftAuthor(author);
    },
    [step],
  );

  const handleElementClick = () => {
    if (step !== 1 || feedback) return;
    openComposer("create", DESIGNER);
  };

  const handleCreateSubmit = () => {
    if (!draftMessage.trim()) return;
    setFeedback({
      message: draftMessage.trim(),
      author_name: draftAuthor.trim() || DESIGNER,
      status: "open",
      report_id: "hero-cta",
      report_type: "item",
      replies: [],
    });
    setPendingComposer(null);
    setDraftMessage("");
    setStep(2);
  };

  const handleMarkerClick = () => {
    if (!feedback || step < 2) return;
    setCardOpen(true);
    setMarkerHover(false);
    if (step === 2 && feedback.replies.length === 0) {
      openComposer("reply", DEVELOPER);
    }
  };

  const handleReplySubmit = () => {
    if (!feedback || !draftMessage.trim()) return;

    if (pendingComposer === "create") {
      handleCreateSubmit();
      return;
    }

    let replyStatus: ReplyStatus = "suggested";
    if (pendingComposer === "deny") replyStatus = "found_error";

    const newReply: MockReply = {
      id: `r_${feedback.replies.length + 1}`,
      message: draftMessage.trim(),
      status: replyStatus,
      author_name: draftAuthor.trim() || DEVELOPER,
    };

    setFeedback((prev) =>
      prev ? { ...prev, replies: [...prev.replies, newReply] } : prev,
    );
    setPendingComposer(null);
    setDraftMessage("");

    if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) setStep(5);
  };

  const handleDeny = () => {
    if (step !== 3) return;
    openComposer("deny", DESIGNER);
  };

  const handleCheckout = () => {
    if (step !== 4) return;
    openComposer("checkout", DEVELOPER);
  };

  const handleResolve = () => {
    if (!feedback || step !== 5) return;
    const resolvedReply: MockReply = {
      id: `r_${feedback.replies.length + 1}`,
      message: LABELS.issueResolved,
      status: "resolved",
      author_name: feedback.author_name,
    };
    setFeedback({
      ...feedback,
      status: "resolved",
      replies: [...feedback.replies, resolvedReply],
    });
    setPendingComposer(null);
    setStep("done");
  };

  const showComposer =
    pendingComposer !== null &&
    (pendingComposer === "create" ||
      (cardOpen &&
        feedback &&
        (feedback.replies.length === 0 || pendingComposer !== null)));

  const showMarker = feedback !== null;
  const replyCount = feedback?.replies.length ?? 0;
  const latestReply = feedback?.replies[feedback.replies.length - 1];

  const highlightTarget = useMemo(() => {
    if (step === "done") return null;
    if (step === 1) return "cta";
    if (step >= 2 && showMarker) return "marker";
    if (step >= 3 && cardOpen) return "card";
    return null;
  }, [step, showMarker, cardOpen]);

  const stats = {
    found: feedback ? 1 : 0,
    groups: 0,
    items: feedback ? 1 : 0,
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3 px-1">
        <div>
          <p className="text-sm font-semibold text-foreground">
            피드백 워크플로우 체험
          </p>
          <p className="text-xs text-muted-foreground">
            view 모드 · 5단계 인터랙티브 목업
          </p>
        </div>
        <div className="flex items-center gap-2">
          <StepIndicator current={step} />
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="size-3" />
            {LABELS.reset}
          </button>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/60 px-4 py-2">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="mx-auto flex w-full max-w-xs items-center gap-2 rounded-md border border-border bg-background/60 px-2.5 py-0.5">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span className="truncate font-mono text-[10px] text-muted-foreground">
              app.acme.dev/dashboard
            </span>
          </div>
        </div>

        {/* Host app */}
        <div className="relative h-[calc(100%-36px)] select-none overflow-hidden">
          <HostApp
            onCtaClick={handleElementClick}
            highlightCta={highlightTarget === "cta"}
            ctaDisabled={step !== 1 || feedback !== null}
          />

          {/* Marker */}
          {showMarker ? (
            <button
              type="button"
              aria-label={`item · hero-cta · ${replyCount} replies`}
              onClick={handleMarkerClick}
              onMouseEnter={() => setMarkerHover(true)}
              onMouseLeave={() => setMarkerHover(false)}
              className={`absolute right-[18%] top-[38%] z-50 transition-transform ${
                highlightTarget === "marker"
                  ? "scale-125 ring-2 ring-primary ring-offset-2 ring-offset-card"
                  : ""
              }`}
            >
              <span
                className="relative flex size-4 items-center justify-center rounded-full border border-white/70 shadow-sm"
                style={{ backgroundColor: MARKER_ITEM }}
              />
              {replyCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-popover px-0.5 text-[9px] font-semibold text-popover-foreground ring-1 ring-white/80">
                  +{replyCount}
                </span>
              ) : null}
            </button>
          ) : null}

          {/* Hover card */}
          {showMarker && markerHover && !cardOpen ? (
            <div className="absolute right-[6%] top-[48%] z-30 w-52 rounded-2xl border-2 border-border/80 bg-popover/95 p-3 shadow-2xl backdrop-blur-sm">
              <StatusBadge status={getDisplayStatus(feedback!, false)} />
              <p className="mt-2 line-clamp-2 text-xs leading-snug text-popover-foreground">
                {feedback!.message}
              </p>
              <p className="mt-1.5 text-[10px] text-muted-foreground">
                {feedback!.author_name}
              </p>
              {latestReply ? (
                <div className="mt-2 flex min-w-0 items-center gap-1 border-t border-border/60 pt-2 text-[10px] text-muted-foreground">
                  <span className="shrink-0">{latestReply.author_name}</span>
                  <span className="text-border">|</span>
                  <span className="min-w-0 flex-1 truncate">
                    {latestReply.message}
                  </span>
                  {replyCount > 1 ? (
                    <>
                      <span className="text-border">|</span>
                      <span className="shrink-0 tabular-nums">
                        +{replyCount - 1}
                      </span>
                    </>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Expanded thread card */}
          {cardOpen && feedback ? (
            <div
              className={`absolute right-[4%] top-[12%] z-50 w-56 overflow-hidden rounded-2xl border-2 border-border/80 bg-popover/98 shadow-2xl backdrop-blur-sm sm:w-60 ${
                highlightTarget === "card" ? "ring-2 ring-primary" : ""
              }`}
            >
              <section className="border-b border-border/60 p-3">
                <StatusBadge status={getDisplayStatus(feedback, true)} />
                <p className="mt-2 text-sm font-semibold leading-snug text-popover-foreground">
                  {feedback.message}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  {feedback.author_name}
                </p>
              </section>

              {showComposer && pendingComposer ? (
                <Composer
                  message={draftMessage}
                  author={draftAuthor}
                  onMessageChange={setDraftMessage}
                  onAuthorChange={setDraftAuthor}
                  onSubmit={handleReplySubmit}
                  authors={[DESIGNER, DEVELOPER]}
                />
              ) : null}

              {feedback.replies.length > 0 ? (
                <Thread
                  feedback={feedback}
                  step={step}
                  pendingComposer={pendingComposer}
                  onDeny={handleDeny}
                  onCheckout={handleCheckout}
                  onResolve={handleResolve}
                />
              ) : null}
            </div>
          ) : null}

          {/* Create composer (step 1) */}
          {pendingComposer === "create" && !feedback ? (
            <div className="absolute right-[12%] top-[28%] z-50 w-52 overflow-hidden rounded-2xl border-2 border-border/80 bg-popover/98 shadow-2xl backdrop-blur-sm">
              <div className="border-b border-border/60 px-3 py-2">
                <p className="text-[10px] font-medium text-muted-foreground">
                  hero-cta · 아이템
                </p>
              </div>
              <Composer
                message={draftMessage}
                author={draftAuthor}
                onMessageChange={setDraftMessage}
                onAuthorChange={setDraftAuthor}
                onSubmit={handleCreateSubmit}
                authors={[DESIGNER, DEVELOPER]}
              />
            </div>
          ) : null}

          {/* Toolbar */}
          <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2">
            <div className="flex items-center gap-1 rounded-full border border-border bg-popover/95 px-1.5 py-1 shadow-xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-1 rounded-full px-2 py-0.5">
                <StitchableLogo className="size-3.5 text-primary" />
                <span className="text-[10px] font-semibold text-popover-foreground">
                  Stitchable
                </span>
                <span className="rounded-full bg-primary/15 px-1 py-px text-[8px] font-medium uppercase tracking-wide text-primary">
                  view
                </span>
              </div>
              <div className="mx-0.5 h-4 w-px bg-border" />
              <div className="hidden items-center gap-2 px-1.5 text-[10px] text-muted-foreground sm:flex">
                <span className="flex items-center gap-0.5">
                  <MessageSquare className="size-3" /> {stats.found}{" "}
                  {LABELS.statsFound}
                </span>
                <span className="flex items-center gap-0.5">
                  <Layers className="size-3" /> {stats.groups}{" "}
                  {LABELS.statsGroup}
                </span>
                <span className="flex items-center gap-0.5">
                  <Check className="size-3" /> {stats.items} {LABELS.statsItem}
                </span>
              </div>
              <div className="mx-0.5 h-4 w-px bg-border" />
              <span className="flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[10px] text-muted-foreground">
                <MessageSquare className="size-3" /> {LABELS.viewFeedbacks}
              </span>
            </div>
          </div>

          {/* Guide overlay */}
          {step !== "done" ? (
            <div className="pointer-events-none absolute inset-0 z-40 bg-black/55">
              <div className="pointer-events-auto absolute bottom-14 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-xl border border-primary/40 bg-popover/95 px-4 py-3 shadow-xl backdrop-blur">
                <p className="text-center text-xs leading-relaxed text-popover-foreground">
                  <span className="mr-1.5 inline-flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {step}
                  </span>
                  {STEP_GUIDES[step]}
                </p>
              </div>
            </div>
          ) : (
            <div className="pointer-events-none absolute inset-0 z-40 flex items-end justify-center bg-black/30 pb-14">
              <p className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
                {STEP_GUIDES.done}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StepIndicator({ current }: { current: WorkflowStep }) {
  return (
    <div className="flex items-center gap-1">
      {([1, 2, 3, 4, 5] as const).map((n) => (
        <span
          key={n}
          className={`size-1.5 rounded-full transition-colors ${
            current === "done" || n < current
              ? "bg-emerald-400"
              : n === current
                ? "bg-primary"
                : "bg-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

function HostApp({
  onCtaClick,
  highlightCta,
  ctaDisabled,
}: {
  onCtaClick: () => void;
  highlightCta: boolean;
  ctaDisabled: boolean;
}) {
  return (
    <div className="px-4 py-4 sm:px-5 sm:py-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-md bg-foreground/90" />
          <span className="text-xs font-semibold text-foreground">
            Acme Analytics
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Search className="size-3.5" />
          <Bell className="size-3.5" />
          <div className="size-5 rounded-full bg-muted-foreground/25" />
        </div>
      </div>

      <section
        data-report-id="hero"
        className="relative mb-3 rounded-lg border border-dashed border-primary/40 bg-primary/[0.03] p-3 sm:p-4"
      >
        <p className="mb-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Monthly revenue
        </p>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xl font-semibold text-foreground">$48,250</p>
            <p className="text-[10px] text-emerald-400">+12.4% vs last month</p>
          </div>
          <button
            type="button"
            data-report-id="hero-cta"
            disabled={ctaDisabled}
            onClick={onCtaClick}
            className={`relative z-50 rounded-md bg-foreground px-2.5 py-1 text-[10px] font-medium text-background transition-all disabled:cursor-default disabled:opacity-80 ${
              highlightCta
                ? "ring-2 ring-primary ring-offset-2 ring-offset-card"
                : ""
            }`}
          >
            Export report
          </button>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Active users", value: "8,492" },
          { label: "Sessions", value: "21,118" },
          { label: "Bounce rate", value: "32.1%" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border bg-background/40 p-2"
          >
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
              {s.label}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-foreground">
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Composer({
  message,
  author,
  onMessageChange,
  onAuthorChange,
  onSubmit,
  authors,
}: {
  message: string;
  author: string;
  onMessageChange: (v: string) => void;
  onAuthorChange: (v: string) => void;
  onSubmit: () => void;
  authors: string[];
}) {
  return (
    <div className="border-t border-border/60 bg-secondary/30">
      <textarea
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder={LABELS.placeholder}
        rows={2}
        className="w-full resize-none bg-transparent px-3 pt-3 text-xs leading-relaxed text-popover-foreground outline-none placeholder:text-muted-foreground"
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
      <div className="flex items-center justify-between gap-2 px-2.5 pb-2.5">
        <div className="relative">
          <select
            value={author}
            onChange={(e) => onAuthorChange(e.target.value)}
            className="appearance-none rounded-full border border-border bg-background/60 py-0.5 pl-2 pr-6 text-[10px] text-muted-foreground outline-none"
            aria-label={LABELS.authorPlaceholder}
          >
            {authors.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 size-2.5 -translate-y-1/2 text-muted-foreground" />
        </div>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!message.trim()}
          className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-40"
          aria-label={LABELS.send}
        >
          <Send className="size-3" />
        </button>
      </div>
    </div>
  );
}

function Thread({
  feedback,
  step,
  pendingComposer,
  onDeny,
  onCheckout,
  onResolve,
}: {
  feedback: MockFeedback;
  step: WorkflowStep;
  pendingComposer: PendingComposer;
  onDeny: () => void;
  onCheckout: () => void;
  onResolve: () => void;
}) {
  const chronological = [...feedback.replies].reverse();

  return (
    <section className="max-h-36 overflow-auto bg-secondary/20">
      {chronological.map((reply) => {
        const isLatest =
          feedback.replies[feedback.replies.length - 1]?.id === reply.id;
        const showReview =
          isLatest && canReviewLatestSuggestion(feedback.replies);
        const showCheckout = canCheckoutReply(feedback.replies, reply.id);
        const denyActive = pendingComposer === "deny";
        const checkoutActive = pendingComposer === "checkout";

        return (
          <article key={reply.id} className="border-t border-border/60 p-3">
            <div className="flex items-start justify-between gap-2">
              <StatusBadge status={reply.status} />
            </div>
            <p className="mt-1.5 text-xs leading-snug text-popover-foreground">
              {reply.message}
            </p>
            <p className="mt-1 text-[10px] text-muted-foreground">
              {reply.author_name}
            </p>

            {showReview && step >= 3 && feedback.status !== "resolved" ? (
              <div className="mt-2 flex flex-col gap-1.5">
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={onDeny}
                    disabled={step !== 3}
                    className={`flex-1 rounded-full border px-2 py-1 text-[10px] font-semibold ${
                      denyActive
                        ? "border-transparent bg-[#FF2B6A] text-white"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {LABELS.denied}
                  </button>
                  <div className="flex flex-1 items-center gap-1 rounded-full border border-border bg-background/40 px-1 py-0.5">
                    <button
                      type="button"
                      onClick={onResolve}
                      disabled={step !== 5}
                      className="flex-1 rounded-full text-[10px] font-semibold text-muted-foreground"
                    >
                      {LABELS.resolved}
                    </button>
                    <div className="h-3 w-px bg-border" />
                    <span className="shrink-0 px-1 text-[10px] text-muted-foreground/60">
                      {LABELS.select}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}

            {showCheckout && step >= 4 && feedback.status !== "resolved" ? (
              <div className="mt-2 flex gap-1.5">
                <button
                  type="button"
                  disabled
                  className="flex-1 rounded-lg border border-border py-1 text-[10px] font-semibold text-muted-foreground opacity-50"
                >
                  {LABELS.denied}
                </button>
                <button
                  type="button"
                  onClick={onCheckout}
                  disabled={step !== 4}
                  className={`flex-1 rounded-lg border py-1 text-[10px] font-semibold ${
                    checkoutActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background/40 text-muted-foreground"
                  }`}
                >
                  {LABELS.leaveResult}
                </button>
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
