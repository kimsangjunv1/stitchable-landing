"use client";

import { ProductPreview } from "./ProductPreview";

export function TerminalPreview() {
  return (
    <section className="bg-[#ededed] relative overflow-hidden border-t border-[var(--vp-color-stroke)]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[var(--vp-color-electric)] blur-[120px]" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-[var(--vp-color-shine)] blur-[100px]" />
        <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-[var(--vp-color-brand)] blur-[80px]" />
      </div>

      <div className="relative flex min-h-[40rem] items-start justify-center">
        <ProductPreview embedded />
        {/* <div className="">
        </div> */}
      </div>
    </section>
  );
}
