"use client";

import { useModalLabStore } from "@/widgets/example/01/model/useModalLabStore";

const stats = [
    { id: "open", label: "Open issues", value: "24", delta: "+3 today", tone: "text-[#F9572E]" },
    { id: "staged", label: "Staged feedback", value: "11", delta: "5 awaiting review", tone: "text-[#2563eb]" },
    { id: "resolved", label: "Resolved this week", value: "38", delta: "+12% vs last week", tone: "text-[#16a34a]" },
] as const;

const kanbanColumns = [
    {
        id: "todo",
        title: "To Do",
        cards: [
            { id: "card-01", title: "Hero spacing on mobile", tag: "BUG", assignee: "Kim" },
            { id: "card-02", title: "Update onboarding copy", tag: "COPY", assignee: "Lee" },
            { id: "card-03", title: "Dark mode toggle contrast", tag: "A11Y", assignee: "Park" },
        ],
    },
    {
        id: "review",
        title: "In Review",
        cards: [
            { id: "card-04", title: "Modal z-index stacking", tag: "BUG", assignee: "Choi" },
            { id: "card-05", title: "Table row hover state", tag: "UI", assignee: "Jung" },
        ],
    },
    {
        id: "done",
        title: "Done",
        cards: [
            { id: "card-06", title: "Shortcut hint wording", tag: "COPY", assignee: "Han" },
            { id: "card-07", title: "Filter button alignment", tag: "UI", assignee: "Yoon" },
        ],
    },
] as const;

const activities = [
    { id: "act-01", user: "Kim", action: "left feedback on", target: "Sidebar nav item", time: "2m ago" },
    { id: "act-02", user: "Lee", action: "resolved", target: "Kanban card #card-06", time: "18m ago" },
    { id: "act-03", user: "Park", action: "tagged as BUG on", target: "Search input", time: "1h ago" },
    { id: "act-04", user: "Choi", action: "moved to In Review", target: "Modal overlay case", time: "3h ago" },
    { id: "act-05", user: "Jung", action: "commented on", target: "Dashboard scroll area", time: "5h ago" },
    { id: "act-06", user: "Han", action: "opened modal for", target: "New issue form", time: "Yesterday" },
] as const;

const tagStyles: Record<string, string> = {
    BUG: "border border-[#f04452] text-[#f04452]",
    COPY: "border border-[#2563eb] text-[#2563eb]",
    A11Y: "border border-[#7c3aed] text-[#7c3aed]",
    UI: "border border-[#111] text-[#111]",
};

export function OverviewContent() {
    const openModal = useModalLabStore((state) => state.open);

    return (
        <>
            <section
                className="grid mobile:grid-cols-1 tablet:grid-cols-3"
                data-report-id="example-dashboard-stats"
                data-report-type="group"
            >
                {stats.map((stat) => (
                    <article
                        className="flex flex-col gap-[0.8rem] border border-black/8 bg-white p-[2rem]"
                        data-report-id={`example-stat-card-${stat.id}`}
                        key={stat.id}
                    >
                        <p
                            className="text-[1.3rem] text-black/55"
                            data-report-id={`example-stat-label-${stat.id}`}
                        >
                            {stat.label}
                        </p>
                        <p
                            className="text-[3.2rem] font-semibold leading-none"
                            data-report-id={`example-stat-value-${stat.id}`}
                        >
                            {stat.value}
                        </p>
                        <p
                            className={`text-[1.2rem] ${stat.tone}`}
                            data-report-id={`example-stat-delta-${stat.id}`}
                        >
                            {stat.delta}
                        </p>
                    </article>
                ))}
            </section>

            <section
                className="grid mobile:grid-cols-1 gap-[1.6rem] tablet:grid-cols-3"
                data-report-id="example-dashboard-kanban"
                data-report-type="group"
            >
                {kanbanColumns.map((column) => (
                    <div
                        className="flex flex-col gap-[1.2rem] border border-black/8 bg-white p-[1.6rem]"
                        data-report-id={`example-kanban-column-${column.id}`}
                        data-report-type="group"
                        key={column.id}
                    >
                        <div className="flex items-center justify-between">
                            <h3
                                className="text-[1.5rem] font-semibold"
                                data-report-id={`example-kanban-title-${column.id}`}
                            >
                                {column.title}
                            </h3>
                            <span
                                className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-black/45"
                                data-report-id={`example-kanban-count-${column.id}`}
                            >
                                {column.cards.length}
                            </span>
                        </div>

                        <ul className="flex flex-col gap-[0.8rem]">
                            {column.cards.map((card) => (
                                <li key={card.id}>
                                    <button
                                        className="w-full border border-black/8 bg-[#f8fafc] p-[1.2rem] text-left transition-colors hover:border-black/20 hover:bg-white"
                                        data-report-id={`example-kanban-card-${card.id}`}
                                        onClick={() => openModal("zustand")}
                                        type="button"
                                    >
                                        <p
                                            className="text-[1.4rem] font-medium"
                                            data-report-id={`example-kanban-card-title-${card.id}`}
                                        >
                                            {card.title}
                                        </p>
                                        <div className="mt-[1rem] flex items-center justify-between">
                                            <span
                                                className={`inline-block px-[0.6rem] py-[0.2rem] text-[1.1rem] ${tagStyles[card.tag]}`}
                                                data-report-id={`example-kanban-card-tag-${card.id}`}
                                            >
                                                {card.tag}
                                            </span>
                                            <span
                                                className="text-[1.2rem] text-black/55"
                                                data-report-id={`example-kanban-card-assignee-${card.id}`}
                                            >
                                                {card.assignee}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section
                className="border border-black/8 bg-white p-[2rem]"
                data-report-id="example-activity-panel"
                data-report-type="group"
            >
                <h3
                    className="mb-[1.6rem] text-[1.6rem] font-semibold"
                    data-report-id="example-activity-title"
                >
                    Recent activity
                </h3>
                <ul className="flex flex-col gap-[1.2rem]">
                    {activities.map((activity) => (
                        <li
                            className="flex items-start justify-between gap-[1.2rem] border-b border-black/6 pb-[1.2rem] last:border-0 last:pb-0"
                            data-report-id={`example-activity-item-${activity.id}`}
                            key={activity.id}
                        >
                            <p
                                className="text-[1.4rem] leading-[1.5]"
                                data-report-id={`example-activity-text-${activity.id}`}
                            >
                                <strong data-report-id={`example-activity-user-${activity.id}`}>{activity.user}</strong>{" "}
                                {activity.action}{" "}
                                <span
                                    className="text-[#2563eb]"
                                    data-report-id={`example-activity-target-${activity.id}`}
                                >
                                    {activity.target}
                                </span>
                            </p>
                            <time
                                className="shrink-0 text-[1.2rem] text-black/45"
                                data-report-id={`example-activity-time-${activity.id}`}
                            >
                                {activity.time}
                            </time>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
