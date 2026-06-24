import { SettingsContent } from "@/widgets/example/01/ui/sections/SettingsContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Settings",
    description: "Workspace settings demo for form and toggle feedback testing.",
    path: "/example/01/settings",
});

export default function Example01SettingsPage() {
    return <SettingsContent />;
}
