import { ModalsLabContent } from "@/widgets/example/01/ui/sections/ModalsLabContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Modal Lab",
    description: "Hard-test modal edge cases for DOM feedback markers.",
    path: "/example/01/modals",
    noIndex: true,
});

export default function Example01ModalsPage() {
    return <ModalsLabContent />;
}
