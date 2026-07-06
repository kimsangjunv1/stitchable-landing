"use client";

import type { GuideTableCell } from "@/i18n/guide/types";
import { RichText } from "@/shared/ui/rich-text";

function TableCell({ cell }: { cell: GuideTableCell }) {
    if (typeof cell === "string") {
        return <RichText text={cell} />;
    }

    return (
        <div className="flex flex-wrap items-center gap-x-[1.2rem] gap-y-[0.4rem]">
            {cell.links.map((link) => (
                <a
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className="inline-flex items-center gap-[0.4rem] font-semibold text-[#3182f6] whitespace-nowrap transition-colors hover:text-[#1b64da]"
                >
                    {link.label}
                    <span aria-hidden>→</span>
                </a>
            ))}
        </div>
    );
}

export function DocTable({ headers, rows }: { headers: string[]; rows: GuideTableCell[][] }) {
    return (
        <div className="overflow-x-auto border border-black/10">
            <table className="w-full min-w-[48rem] border-collapse text-left text-[1.4rem]">
                <thead>
                    <tr className="border-b border-black/10 bg-[#ededed]">
                        {headers.map((h) => (
                            <th
                                key={h}
                                className="px-[1.6rem] py-[1.2rem] font-semibold text-[#050505]"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr
                            key={i}
                            className="border-b border-black/10 last:border-0"
                        >
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className="px-[1.6rem] py-[1.2rem] align-top text-black/70"
                                >
                                    <TableCell cell={cell} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
