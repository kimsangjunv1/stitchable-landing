import { cookies } from "next/headers"
import { createPageMetadata } from "@/lib/seo"
import { Main } from "@/widgets/layout/Main"
import { GuideView } from "@/views/guide/GuideView"

export const metadata = createPageMetadata({
  title: "Documentation",
  description:
    "Install Stitchable, add the Report component to your React app, and configure persistence, team workflows, and GitHub integrations.",
  path: "/guide",
})

export default async function GuidePage() {
  await cookies()

  return (
    <Main
      id="guide"
      className={{
        container: "min-h-screen vp-section-light",
        inner: "",
      }}
    >
      <GuideView />
    </Main>
  )
}
