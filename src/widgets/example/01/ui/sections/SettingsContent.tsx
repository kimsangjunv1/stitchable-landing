"use client";

import { useMessages } from "@/app/providers/LocaleProvider";

const toggleIds = ["notifications", "markers", "shortcuts"] as const;

export function SettingsContent() {
    const settings = useMessages().example.settings;

    return (
        <div className="flex flex-col gap-[2.4rem]">
            <header
                className="flex flex-col gap-[0.8rem]"
                data-report-id="example-settings-header"
                data-report-type="group"
            >
                <p className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem] text-black/45">{settings.eyebrow}</p>
                <h1
                    className="text-[2.8rem] font-semibold"
                    data-report-id="example-settings-title"
                >
                    {settings.title}
                </h1>
                <p
                    className="max-w-[64rem] text-[1.5rem] leading-[1.6] text-black/65"
                    data-report-id="example-settings-description"
                >
                    {settings.description}
                </p>
            </header>

            <div
                className="flex flex-col gap-[1.6rem] border border-black/8 bg-white p-[2rem]"
                data-report-id="example-settings-panel"
                data-report-type="group"
            >
                {settings.toggles.map((setting, index) => {
                    const id = toggleIds[index];

                    return (
                        <label
                            className="flex items-start justify-between gap-[1.6rem] border-b border-black/6 pb-[1.6rem] last:border-0 last:pb-0"
                            data-report-id={`example-settings-row-${id}`}
                            key={id}
                        >
                            <span>
                                <span
                                    className="block text-[1.5rem] font-medium"
                                    data-report-id={`example-settings-label-${id}`}
                                >
                                    {setting.label}
                                </span>
                                <span
                                    className="mt-[0.4rem] block text-[1.3rem] text-black/55"
                                    data-report-id={`example-settings-desc-${id}`}
                                >
                                    {setting.description}
                                </span>
                            </span>
                            <input
                                className="mt-[0.4rem] h-[1.8rem] w-[1.8rem] accent-[#1e293b]"
                                data-report-id={`example-settings-toggle-${id}`}
                                defaultChecked={id !== "shortcuts"}
                                type="checkbox"
                            />
                        </label>
                    );
                })}

                <label
                    className="flex flex-col gap-[0.8rem] text-[1.4rem]"
                    data-report-id="example-settings-webhook"
                >
                    <span className="font-medium">{settings.webhookLabel}</span>
                    <input
                        className="border border-black/15 px-[1.2rem] py-[1rem] text-[1.4rem] outline-none focus:border-black"
                        data-report-id="example-settings-webhook-input"
                        placeholder={settings.webhookPlaceholder}
                        type="url"
                    />
                </label>

                <button
                    className="w-max bg-[#1e293b] px-[1.4rem] py-[1rem] text-[1.3rem] text-white"
                    data-report-id="example-settings-save"
                    type="button"
                >
                    {settings.save}
                </button>
            </div>
        </div>
    );
}
