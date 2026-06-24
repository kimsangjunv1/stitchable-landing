"use client";

import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith("/example/01")) {
        return null;
    }

    return (
        <section className="min-h-[375px] bg-black text-white">
            <footer className="mx-auto grid w-[min(1920px,calc(100%-48px))] grid-cols-[1.15fr_1fr_.85fr] pt-[89px] max-[720px]:w-[min(calc(100%-32px),520px)] max-[720px]:grid-cols-2 max-[720px]:gap-x-5 max-[720px]:gap-y-[55px] max-[720px]:py-[55px] max-[720px]:pb-20">
                <div className="flex flex-col items-start leading-none">
                    <strong>CODI</strong>
                    <span>@kimsangjunv1</span>
                    <p className="mt-[34px] leading-[1.3]">
                        Developed and Designed by
                        <br />
                        kimsangjun
                    </p>
                </div>

                <div>
                    <small className="my-[7px] mb-[14px] block text-[18px]">current available library</small>
                    <strong className="block text-[26px] leading-[1.45] [font-variation-settings:'wdth'_110]">
                        agit.
                        <br />
                        fivepixels.
                    </strong>
                </div>

                <div>
                    <small className="my-[7px] mb-[14px] block text-[18px]">current available library</small>
                    <div className="flex gap-2 text-[#bcbcbc]">
                        <span
                            className="grid h-[27px] w-[27px] place-items-center rounded-full bg-[#bcbcbc] font-[Arial,sans-serif] font-extrabold text-black"
                            aria-label="GitHub"
                        >
                            GH
                        </span>
                        <span
                            className="grid h-[27px] w-[27px] place-items-center rounded-full bg-[#bcbcbc] font-[Arial,sans-serif] font-extrabold text-black"
                            aria-label="LinkedIn"
                        >
                            in
                        </span>
                    </div>
                </div>
            </footer>
        </section>
    );
}
