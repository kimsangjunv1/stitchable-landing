export const GUIDE_SNIPPETS = {
  install: "npm install @fivepixels-js/react react react-dom",
  quickStart: `import { FivePixels } from "@fivepixels-js/react";

export default function App() {
  return (
    <>
      <FivePixels />

      <main>
        <section data-report-id="hero" data-report-type="group">
          <button data-report-id="hero-cta">Get Started</button>
        </section>
      </main>
    </>
  );
}`,
  configBasic: `import { FivePixels } from "@fivepixels-js/react";

export default function App() {
  return (
    <FivePixels
      project={{
        id: "multimachine-ceo",
        env: "stage",
        version: "1.2.3",
      }}
      ui={{ appearance: "system" }}
    />
  );
}`,
  configAdvanced: `<FivePixels
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
  localStorage: `<FivePixels project={{ id: "my-app" }} />`,
  shortcuts: `<FivePixels
  project={{ id: "my-app" }}
  ui={{ visibleShortcutKeys: true }}
  visibility={{ devOnly: true }}
/>`,
  shadowDiagram: `document.body
  └── #fivepixels-root
        └── #shadow-root (open)
              ├── <style>  ← purged Tailwind CSS
              └── FivePixels UI (panel, overlay, markers)`,
} as const

export type GuideSnippetKey = keyof typeof GUIDE_SNIPPETS
