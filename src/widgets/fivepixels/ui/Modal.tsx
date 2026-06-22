"use client";

import { TestModal } from "@/widgets/fivepixels/modal/TestModal";
import { useFivepixelsProvider } from "@/widgets/fivepixels/model/FivepixelsContext";

export function Modal() {
    const { confirmModalTarget, openConfirmModal, closeConfirmModal } = useFivepixelsProvider();

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
