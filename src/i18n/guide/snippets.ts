export const GUIDE_SNIPPETS = {
  install: "npm install stitchable react react-dom",
  quickStart: `import { Report } from "stitchable";

export default function App() {
  return (
    <>
      <Report />

      <main>
        <section data-report-id="hero" data-report-type="group">
          <button data-report-id="hero-cta">Get Started</button>
        </section>
      </main>
    </>
  );
}`,
  configBasic: `import { Report } from "stitchable";

export default function App() {
  return (
    <Report
      project={{
        id: "multimachine-ceo",
        env: "stage",
        version: "1.2.3",
      }}
      ui={{ appearance: "system" }}
    />
  );
}`,
  configAdvanced: `<Report
  project={{ id: "my-app" }}
  ui={{
    appearance: "system",
    showFeedbackList: false,
    visibleShortcutKeys: true,
    locale: "ko",
  }}
  visibility={{ devOnly: true }}
  team={{
    user: { id: "user-1", name: "Reviewer A" },
    reviewers: [
      { id: "1", name: "Reviewer A" },
      { id: "2", name: "Reviewer B" },
    ],
  }}
  fields={[
    { key: "message", type: "textarea", label: "Message", required: true },
    { key: "isBug", type: "checkbox", label: "bug" },
    { key: "isImportant", type: "checkbox", label: "IMPORTANT" },
  ]}
/>`,
  localStorage: `<Report project={{ id: "my-app" }} />`,
  shortcuts: `<Report
  project={{ id: "my-app" }}
  ui={{ visibleShortcutKeys: true }}
  visibility={{ devOnly: true }}
/>`,
  shadowDiagram: `document.body
  └── #stitchable-root
        └── #shadow-root (open)
              ├── <style>  ← purged Tailwind CSS
              └── Report UI (panel, overlay, markers)`,
} as const

export type GuideSnippetKey = keyof typeof GUIDE_SNIPPETS
