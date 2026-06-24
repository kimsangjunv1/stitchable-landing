"use client";

import { useModalLabStore } from "@/widgets/example/01/model/useModalLabStore";

const releaseNotes = [
    { id: "rel-01", version: "v2.4.0", summary: "Kanban drag preview and marker persistence fixes", date: "Jun 12, 2026" },
    { id: "rel-02", version: "v2.3.2", summary: "Improved modal layering inside nested scroll containers", date: "May 28, 2026" },
    { id: "rel-03", version: "v2.3.0", summary: "Dashboard activity feed and quick actions rollout", date: "May 10, 2026" },
    { id: "rel-04", version: "v2.2.1", summary: "Sidebar routing and modal lab consolidation", date: "Apr 22, 2026" },
] as const;

export function ReleasesContent() {
    const open = useModalLabStore((state) => state.open);

    return (
        <div className="flex flex-col gap-[2.4rem]">
            <header
                className="flex flex-col gap-[0.8rem]"
                data-report-id="example-releases-header"
                data-report-type="group"
            >
                <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-black/45">RELEASES</p>
                <h1
                    className="text-[2.8rem] font-semibold"
                    data-report-id="example-releases-title"
                >
                    Release notes
                </h1>
                <p
                    className="max-w-[64rem] text-[1.5rem] leading-[1.6] text-black/65"
                    data-report-id="example-releases-description"
                >
                    릴리즈 상세 보기를 눌러 세로 스크롤 모달을 열고 Report 마커를 테스트해 보세요.
                </p>
            </header>

            <ul
                className="flex flex-col gap-[1.2rem] border border-black/8 bg-white p-[2rem]"
                data-report-id="example-release-notes"
                data-report-type="group"
            >
                {releaseNotes.map((note) => (
                    <li
                        className="flex flex-wrap items-start justify-between gap-[1.6rem] border-b border-black/6 pb-[1.2rem] last:border-0 last:pb-0"
                        data-report-id={`example-release-note-${note.id}`}
                        key={note.id}
                    >
                        <div>
                            <p
                                className="text-[1.4rem] font-semibold"
                                data-report-id={`example-release-version-${note.id}`}
                            >
                                {note.version}
                            </p>
                            <p
                                className="mt-[0.4rem] text-[1.4rem] text-black/60"
                                data-report-id={`example-release-summary-${note.id}`}
                            >
                                {note.summary}
                            </p>
                            <p
                                className="mt-[0.4rem] text-[1.2rem] text-black/45"
                                data-report-id={`example-release-date-${note.id}`}
                            >
                                {note.date}
                            </p>
                        </div>
                        <button
                            className="shrink-0 border border-black/15 px-[1rem] py-[0.6rem] text-[1.2rem] hover:bg-black/[0.03]"
                            data-report-id={`example-release-open-${note.id}`}
                            onClick={() => open("scroll-vertical")}
                            type="button"
                        >
                            View changelog
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
