import { FivepixelsGuidePanel } from "@/widgets/fivepixels/guide";
import type { GuideKind } from "@/widgets/fivepixels/guide/Panel";

export function FivepixelsGuideView({ kind, slug }: { kind: GuideKind; slug: string }) {
    return <FivepixelsGuidePanel kind={kind} slug={slug} />;
}
