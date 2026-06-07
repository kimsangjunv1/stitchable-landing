import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

type SafariWindowChromeProps = {
  children: ReactNode;
  url?: string;
  tabTitle?: string;
  className?: string;
};

function TrafficLights() {
  return (
    <div className="safari-traffic-lights" aria-hidden>
      <span className="safari-traffic-light safari-traffic-light--close" />
      <span className="safari-traffic-light safari-traffic-light--minimize" />
      <span className="safari-traffic-light safari-traffic-light--maximize" />
    </div>
  );
}

function SafariToolbarIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-[28px] shrink-0 items-center justify-center rounded-md text-[#6e6e73]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SafariWindowChrome({
  children,
  url = "app.stitchable.dev/dashboard",
  tabTitle = "Dashboard",
  className,
}: SafariWindowChromeProps) {
  return (
    <div
      className={cn(
        "safari-window flex min-h-0 w-full flex-col overflow-hidden",
        className,
      )}
    >
      <div className="safari-tab-bar shrink-0">
        <TrafficLights />
        <div className="safari-tab-bar__tabs">
          <div className="safari-tab safari-tab--active">
            <SafariFavicon />
            <span className="safari-tab__title">{tabTitle}</span>
          </div>
          <div className="safari-tab safari-tab--inactive">
            <span className="safari-tab__title">Settings</span>
          </div>
        </div>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          className="safari-tab-bar__new-tab"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M7 2.5v9M2.5 7h9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="safari-toolbar shrink-0">
        <div className="safari-toolbar__nav">
          <SafariToolbarIcon>
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden>
              <path
                d="M7.5 1.5 2 7l5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SafariToolbarIcon>
          <SafariToolbarIcon className="text-[#c7c7cc]">
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden>
              <path
                d="m2.5 1.5 5.5 5.5-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SafariToolbarIcon>
        </div>

        <div className="safari-url-bar">
          <span className="safari-url-bar__lock" aria-hidden>
            <svg width="8" height="11" viewBox="0 0 8 11" fill="none">
              <rect
                x="1"
                y="4.5"
                width="6"
                height="5.5"
                rx="1"
                fill="currentColor"
              />
              <path
                d="M2.5 4.5V3a1.75 1.75 0 0 1 3.5 0v1.5"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </span>
          <span className="safari-url-bar__text">{url}</span>
          <button type="button" tabIndex={-1} aria-hidden className="safari-url-bar__refresh">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M10 6A4 4 0 1 1 8.2 2.5M8.2 1v2h2"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="safari-toolbar__actions">
          <SafariToolbarIcon>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden>
              <path
                d="M7 11.5V2M7 2 4.5 4.5M7 2l2.5 2.5M2 13.5h10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SafariToolbarIcon>
          <SafariToolbarIcon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 10.5 8 2l5 8.5H3Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path d="M6.2 8.2h3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </SafariToolbarIcon>
        </div>
      </div>

      <div className="safari-window__content min-h-0 flex-1 overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}

function SafariFavicon() {
  return (
    <span className="safari-tab__favicon" aria-hidden>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <rect width="10" height="10" rx="2" fill="#646cff" />
        <path d="M3 5h4M5 3v4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}
