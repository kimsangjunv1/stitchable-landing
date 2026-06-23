import type { ReactNode } from "react";
import { FivePixelsProvider } from "@/widgets/example01";

export default function Example01Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <FivePixelsProvider>
            <div className="min-h-screen bg-white font-[family-name:var(--font-mona-rebrand)] text-[18px] text-[#050505]">{children}</div>
        </FivePixelsProvider>
    );
}
