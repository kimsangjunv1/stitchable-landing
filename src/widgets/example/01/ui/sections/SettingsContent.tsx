"use client";

const settings = [
    { id: "notifications", label: "Email notifications", description: "Receive updates when issues are assigned to you." },
    { id: "markers", label: "Persist markers", description: "Keep feedback markers after route changes within the demo." },
    { id: "shortcuts", label: "Keyboard shortcuts", description: "Enable quick actions for Report mode." },
] as const;

export function SettingsContent() {
    return (
        <div className="flex flex-col gap-[2.4rem]">
            <header
                className="flex flex-col gap-[0.8rem]"
                data-report-id="example-settings-header"
                data-report-type="group"
            >
                <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-black/45">SETTINGS</p>
                <h1
                    className="text-[2.8rem] font-semibold"
                    data-report-id="example-settings-title"
                >
                    Workspace settings
                </h1>
                <p
                    className="max-w-[64rem] text-[1.5rem] leading-[1.6] text-black/65"
                    data-report-id="example-settings-description"
                >
                    토글·입력·저장 버튼 등 폼 요소에 Report 마커를 남겨 보세요.
                </p>
            </header>

            <div
                className="flex flex-col gap-[1.6rem] border border-black/8 bg-white p-[2rem]"
                data-report-id="example-settings-panel"
                data-report-type="group"
            >
                {settings.map((setting) => (
                    <label
                        className="flex items-start justify-between gap-[1.6rem] border-b border-black/6 pb-[1.6rem] last:border-0 last:pb-0"
                        data-report-id={`example-settings-row-${setting.id}`}
                        key={setting.id}
                    >
                        <span>
                            <span
                                className="block text-[1.5rem] font-medium"
                                data-report-id={`example-settings-label-${setting.id}`}
                            >
                                {setting.label}
                            </span>
                            <span
                                className="mt-[0.4rem] block text-[1.3rem] text-black/55"
                                data-report-id={`example-settings-desc-${setting.id}`}
                            >
                                {setting.description}
                            </span>
                        </span>
                        <input
                            className="mt-[0.4rem] h-[1.8rem] w-[1.8rem] accent-[#1e293b]"
                            data-report-id={`example-settings-toggle-${setting.id}`}
                            defaultChecked={setting.id !== "shortcuts"}
                            type="checkbox"
                        />
                    </label>
                ))}

                <label
                    className="flex flex-col gap-[0.8rem] text-[1.4rem]"
                    data-report-id="example-settings-webhook"
                >
                    <span className="font-medium">Webhook URL</span>
                    <input
                        className="border border-black/15 px-[1.2rem] py-[1rem] text-[1.4rem] outline-none focus:border-black"
                        data-report-id="example-settings-webhook-input"
                        placeholder="https://hooks.example.com/qa"
                        type="url"
                    />
                </label>

                <button
                    className="w-max bg-[#1e293b] px-[1.4rem] py-[1rem] text-[1.3rem] text-white"
                    data-report-id="example-settings-save"
                    type="button"
                >
                    Save changes
                </button>
            </div>
        </div>
    );
}
