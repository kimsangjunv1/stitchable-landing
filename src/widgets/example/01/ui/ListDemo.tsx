"use client";

import { useMessages } from "@/app/providers/LocaleProvider";

const rowIds = ["issue-01", "issue-02", "issue-03", "issue-04", "issue-05"] as const;
const headerIds = ["issue", "status", "tag", "author", "action"] as const;

const statusStyles: Record<string, string> = {
    STAGED: "bg-[#3d3d3d] text-white",
    OPEN: "bg-[#F9572E] text-white",
    RESOLVED: "bg-[#111] text-white",
};

const tagStyles: Record<string, string> = {
    BUG: "border border-[#f04452] text-[#f04452]",
    IMPORTANT: "border border-[#111] text-[#111]",
};

export function ListDemo({ onReview }: { onReview?: (rowId: string) => void }) {
    const listDemo = useMessages().example.listDemo;

    return (
        <div
            className="overflow-hidden border border-black/10"
            data-report-id="example-list-panel"
            data-report-type="group"
        >
            <div
                className="flex items-center justify-between bg-[#2a2a2a] px-[2rem] py-[1.4rem] text-white"
                data-report-id="example-list-header"
                data-report-type="group"
            >
                <div>
                    <p
                        className="font-[family-name:var(--font-pretendard)] text-[1.2rem] text-white/60"
                        data-report-id="example-list-eyebrow"
                    >
                        {listDemo.eyebrow}
                    </p>
                    <h2
                        className="text-[2rem] font-semibold"
                        data-report-id="example-list-title"
                    >
                        {listDemo.title}
                    </h2>
                </div>
                <button
                    className="border border-white/30 px-[1.2rem] py-[0.8rem] text-[1.3rem]"
                    data-report-id="example-list-filter"
                    type="button"
                >
                    {listDemo.filter}
                </button>
            </div>

            <div
                className="overflow-x-auto bg-white"
                data-report-id="example-list-table-wrap"
            >
                <table
                    className="w-full min-w-[64rem] border-collapse text-left text-[1.4rem]"
                    data-report-id="example-list-table"
                >
                    <thead
                        className="bg-[#f4f4f4] text-[1.2rem] uppercase tracking-[0.04em] text-black/55"
                        data-report-id="example-list-thead"
                    >
                        <tr data-report-id="example-list-header-row">
                            {listDemo.headers.map((label, index) => {
                                const id = headerIds[index];

                                return (
                                    <th
                                        className="px-[2rem] py-[1.2rem] font-medium"
                                        data-report-id={`example-list-th-${id}`}
                                        key={id}
                                        scope="col"
                                    >
                                        {label}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody data-report-id="example-list-tbody">
                        {listDemo.rows.map((row, index) => {
                            const id = rowIds[index];

                            return (
                                <tr
                                    className="border-t border-black/8 transition-colors hover:bg-[#fafafa]"
                                    data-report-id={`example-list-row-${id}`}
                                    key={id}
                                >
                                    <td
                                        className="px-[2rem] py-[1.6rem] font-medium"
                                        data-report-id={`example-list-title-${id}`}
                                    >
                                        {row.issue}
                                    </td>
                                    <td
                                        className="px-[2rem] py-[1.6rem]"
                                        data-report-id={`example-list-status-cell-${id}`}
                                    >
                                        <span
                                            className={`inline-block px-[0.8rem] py-[0.3rem] text-[1.1rem] ${statusStyles[row.status]}`}
                                            data-report-id={`example-list-status-${id}`}
                                        >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td
                                        className="px-[2rem] py-[1.6rem]"
                                        data-report-id={`example-list-tag-cell-${id}`}
                                    >
                                        <span
                                            className={`inline-block px-[0.8rem] py-[0.3rem] text-[1.1rem] ${tagStyles[row.tag]}`}
                                            data-report-id={`example-list-tag-${id}`}
                                        >
                                            {row.tag}
                                        </span>
                                    </td>
                                    <td
                                        className="px-[2rem] py-[1.6rem] text-black/65"
                                        data-report-id={`example-list-author-${id}`}
                                    >
                                        {row.author}
                                    </td>
                                    <td
                                        className="px-[2rem] py-[1.6rem]"
                                        data-report-id={`example-list-action-cell-${id}`}
                                    >
                                        <button
                                            className="border border-black px-[1rem] py-[0.6rem] text-[1.2rem] hover:bg-black hover:text-white"
                                            data-report-id={`example-list-action-${id}`}
                                            onClick={() => onReview?.(id)}
                                            type="button"
                                        >
                                            {row.action}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
