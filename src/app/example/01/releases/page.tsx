import { ReleasesContent } from "@/widgets/example/01/ui/sections/ReleasesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Releases",
    description: "Release notes demo with scrollable modal triggers.",
    path: "/example/01/releases",
});

export default function Example01ReleasesPage() {
    return <ReleasesContent />;
}
