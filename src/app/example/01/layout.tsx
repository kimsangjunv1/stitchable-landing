import type { ReactNode } from "react";
import { FivePixelsProvider } from "@/widgets/example/01/FivePixelsProvider";
import { Example01PageProvider } from "@/widgets/example/01/model/Example01Context";
import { DashboardShell } from "@/widgets/example/01/ui/DashboardShell";
import { Modal } from "@/widgets/example/01/ui/Modal";

export default function Example01Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <FivePixelsProvider>
            <Example01PageProvider>
                <div className="h-dvh overflow-hidden bg-[var(--adaptive-background)] font-[family-name:var(--font-inter)] text-[18px] text-[var(--adaptive-text-primary)]">
                    <DashboardShell>{children}</DashboardShell>
                    <Modal />
                </div>
            </Example01PageProvider>
        </FivePixelsProvider>
    );
}
