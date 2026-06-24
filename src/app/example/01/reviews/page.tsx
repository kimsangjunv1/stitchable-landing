import { ReviewsContent } from "@/widgets/example/01/ui/sections/ReviewsContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Reviews",
    description: "Review queue demo with opacity and zustand modal cases.",
    path: "/example/01/reviews",
});

export default function Example01ReviewsPage() {
    return <ReviewsContent />;
}
