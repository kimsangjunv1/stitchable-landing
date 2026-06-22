import { Main } from "@/widgets/layout/Main"
import { RebrandingLandingView } from "@/views/rebranding-landing/RebrandingLandingView"

const mainClassName = {
  container: "min-h-screen bg-white text-[#050505]",
  inner: "mx-0 max-w-none px-0",
}

export default function RebrandingLandingPage() {
  return (
    <Main
      id="rebranding-landing"
      className={mainClassName}
    >
      <RebrandingLandingView />
    </Main>
  )
}
