"use client"

import { TestModal } from "@/widgets/rebranding-landing/modal/TestModal"
import { useRebrandingLandingProvider } from "@/widgets/rebranding-landing/model/RebrandingLandingContext"

export function Modal() {
  const {
    confirmModalTarget,
    openConfirmModal,
    closeConfirmModal,
  } = useRebrandingLandingProvider()

  return (
    <>
      <button
        className="sr-only"
        type="button"
        onClick={() => openConfirmModal("test")}
      >
        Open test modal
      </button>
      {confirmModalTarget === "test" && (
        <TestModal onClose={closeConfirmModal} />
      )}
    </>
  )
}
