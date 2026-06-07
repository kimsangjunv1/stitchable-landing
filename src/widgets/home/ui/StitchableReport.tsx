"use client";

import dynamic from "next/dynamic";
import { useLocale } from "@/app/providers/LocaleProvider";

const Report = dynamic(
  () => import("stitchable").then((mod) => mod.Report),
  { ssr: false },
);

export function StitchableReport() {
  const { locale } = useLocale();

  return (
    <Report
      project={{ id: "stitchable-landing", env: "stage", version: "0.1.0" }}
      ui={{
        locale,
        appearance: "dark",
        visibleShortcutKeys: true,
        showFeedbackList: true,
      }}
      visibility={{ devOnly: true, routeKey: "/" }}
      team={{
        user: { id: "demo-user", name: "Demo User" },
        reviewers: [
          { id: "1", name: "Designer" },
          { id: "2", name: "Developer" },
        ],
      }}
      fields={[
        { key: "message", type: "textarea", label: "Message", required: true },
        { key: "isBug", type: "checkbox", label: "bug" },
      ]}
    />
  );
}
