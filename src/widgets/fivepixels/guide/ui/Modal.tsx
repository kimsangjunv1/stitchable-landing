"use client";

import { TestModal } from "@/widgets/fivepixels/guide/modal/TestModal";
import { useGuideProvider } from "@/widgets/fivepixels/guide/model/GuideContext";

export function Modal() {
    const { confirmModalTarget, openConfirmModal, closeConfirmModal } = useGuideProvider();

    return (
        <>
            <button
                className="sr-only"
                type="button"
                onClick={() => openConfirmModal("test")}
            >
                Open test modal
            </button>
            {confirmModalTarget === "test" && <TestModal onClose={closeConfirmModal} />}
        </>
    );
}
