"use client";

import { RichText } from "@/shared/ui/rich-text";

export function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
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
                                    <RichText text={cell} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
