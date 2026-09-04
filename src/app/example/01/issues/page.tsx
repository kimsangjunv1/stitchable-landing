import { IssuesContent } from "@/widgets/example/01/ui/sections/IssuesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Issues",
    description: "Issue tracker demo with modal edge cases for DOM feedback testing.",
    path: "/example/01/issues",
    noIndex: true,
});

export default function Example01IssuesPage() {
    return <IssuesContent />;
}
