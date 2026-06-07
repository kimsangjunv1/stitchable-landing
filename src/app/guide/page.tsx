import { cookies } from "next/headers"
import { Main } from "@/widgets/layout/Main"
import { GuideView } from "@/views/guide/GuideView"

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
