"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import { MaterialIcon } from "@/widgets/layout/MaterialIcon";

export function FeatureSection() {
    const features = useMessages().fivepixels.features;

    return (
        <section
            className="w-full px-[1.2rem] tablet:px-[2.4rem]"
            id="setup"
        >
            <div className="mx-auto w-full max-w-[var(--size-pc)] border-x border-x-[#ededed] border-b border-b-[#ededed] grid mobile:grid-cols-1 tablet:grid-cols-2 pc:grid-cols-4 gap-[0.1rem] bg-[#ededed]">
                {features.map((feature, index) => (
                    <li
                        className="flex flex-col gap-[1.6rem] justify-between p-[2.4rem] bg-white rounded-[0.8rem]"
                        key={feature.title}
                    >
                        <div className="flex items-center justify-between mb-[1.2rem]">
                            <div className="flex items-center gap-[0.6rem]">
                                <MaterialIcon
                                    name={feature.icon}
                                    size={26}
                                    className="text-primary"
                                />
                                <span className="font-[family-name:var(--font-pretendard)] text-[1.2rem] text-black/40">{String(index + 1).padStart(2, "0")}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.4rem]">
                            <strong className="block font-semibold text-[1.8rem] mb-[0.2rem]">{feature.title}</strong>
                            <p className="text-[1.4rem] leading-[1.5] text-black/60">{feature.description}</p>
                        </div>
                    </li>
                ))}
            </div>
        </section>
    );
}
