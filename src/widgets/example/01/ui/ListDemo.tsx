const rows = [
    { id: "issue-01", title: "Hero CTA alignment", status: "STAGED", tag: "IMPORTANT", author: "Kim" },
    { id: "issue-02", title: "Modal z-index overlap", status: "OPEN", tag: "BUG", author: "Lee" },
    { id: "issue-03", title: "Table row hover state", status: "STAGED", tag: "BUG", author: "Park" },
    { id: "issue-04", title: "Shortcut hint copy", status: "RESOLVED", tag: "IMPORTANT", author: "Choi" },
    { id: "issue-05", title: "Mobile nav spacing", status: "OPEN", tag: "IMPORTANT", author: "Jung" },
] as const;

const statusStyles: Record<string, string> = {
    STAGED: "bg-[#3d3d3d] text-white",
    OPEN: "bg-[#F9572E] text-white",
    RESOLVED: "bg-[#111] text-white",
};

const tagStyles: Record<string, string> = {
    BUG: "border border-[#f04452] text-[#f04452]",
    IMPORTANT: "border border-[#111] text-[#111]",
};

export function ListDemo() {
    return (
        <div
            className="overflow-hidden border border-black/10"
            data-report-id="example-list-panel"
            data-report-type="group"
        >
            <div className="flex items-center justify-between bg-[#2a2a2a] px-[2rem] py-[1.4rem] text-white">
                <div>
                    <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-white/60">FEEDBACK LIST</p>
                    <h2 className="text-[2rem] font-semibold">Today&apos;s issues</h2>
                </div>
                <button
                    className="border border-white/30 px-[1.2rem] py-[0.8rem] text-[1.3rem]"
                    data-report-id="example-list-filter"
                    type="button"
                >
                    Filter
                </button>
            </div>

            <div className="overflow-x-auto bg-white">
                <table className="w-full min-w-[64rem] border-collapse text-left text-[1.4rem]">
                    <thead className="bg-[#f4f4f4] text-[1.2rem] uppercase tracking-[0.04em] text-black/55">
                        <tr>
                            <th className="px-[2rem] py-[1.2rem] font-medium">Issue</th>
                            <th className="px-[2rem] py-[1.2rem] font-medium">Status</th>
                            <th className="px-[2rem] py-[1.2rem] font-medium">Tag</th>
                            <th className="px-[2rem] py-[1.2rem] font-medium">Author</th>
                            <th className="px-[2rem] py-[1.2rem] font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr
                                className="border-t border-black/8 transition-colors hover:bg-[#fafafa]"
                                data-report-id={`example-list-row-${row.id}`}
                                key={row.id}
                            >
                                <td className="px-[2rem] py-[1.6rem] font-medium">{row.title}</td>
                                <td className="px-[2rem] py-[1.6rem]">
                                    <span className={`inline-block px-[0.8rem] py-[0.3rem] text-[1.1rem] ${statusStyles[row.status]}`}>{row.status}</span>
                                </td>
                                <td className="px-[2rem] py-[1.6rem]">
                                    <span className={`inline-block px-[0.8rem] py-[0.3rem] text-[1.1rem] ${tagStyles[row.tag]}`}>{row.tag}</span>
                                </td>
                                <td
                                    className="px-[2rem] py-[1.6rem] text-black/65"
                                    data-report-id={`example-list-author-${row.id}`}
                                >
                                    {row.author}
                                </td>
                                <td className="px-[2rem] py-[1.6rem]">
                                    <button
                                        className="border border-black px-[1rem] py-[0.6rem] text-[1.2rem] hover:bg-black hover:text-white"
                                        data-report-id={`example-list-action-${row.id}`}
                                        type="button"
                                    >
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
