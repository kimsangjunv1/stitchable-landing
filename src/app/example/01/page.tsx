import { OverviewContent } from "@/widgets/example/01/ui/sections/OverviewContent";
import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata = createPageMetadata({
    title: "Example Dashboard",
    description: `${SITE_DESCRIPTION} Install-free interactive demo for DOM feedback markers.`,
    path: "/example/01",
    keywords: ["fivepixels", "example", "QA demo", "DOM feedback", "React"],
    noIndex: true,
});

export default function Example01Page() {
    return <OverviewContent />;
}
