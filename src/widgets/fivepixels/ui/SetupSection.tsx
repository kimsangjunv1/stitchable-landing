import { MaterialIcon } from "@/widgets/layout/MaterialIcon";

const codeLines = [
    <>
        <b>import</b> {"{ Report }"} <b>from</b> <span>&quot;stitchable&quot;</span>;
    </>,
    null,
    <>&lt;Report project={'{ { id: "my-app" } }'} /&gt;</>,
    null,
    <>&lt;section data-report-id=&quot;hero&quot; data-report-type=&quot;group&quot;&gt;</>,
    <>{"  "}&lt;button data-report-id=&quot;hero-cta&quot;&gt;Get Started&lt;/button&gt;</>,
    <>&lt;/section&gt;</>,
];

const features = [
    {
        icon: "ads_click",
        title: "Point at any element",
        description: "Leave feedback directly on the UI.",
    },
    {
        icon: "location_searching",
        title: "Markers that stay",
        description: "Restore feedback after the UI changes.",
    },
    {
        icon: "forum",
        title: "Review together",
        description: "Reply, verify, and resolve in one flow.",
    },
    {
        icon: "sync_alt",
        title: "Use your workflow",
        description: "Local, server, or GitHub Issue.",
    },
] as const;

export function SetupSection() {
    return (
        <section
            className="w-full bg-[#ededed] px-[1.2rem] tablet:px-[2.4rem]"
            id="setup"
        >
            <div className="mx-auto flex w-full max-w-[var(--size-pc)] flex-col gap-[6.4rem]">
                <div className="grid mobile:grid-cols-1 tablet:grid-cols-2">
                    <div className="flex flex-col justify-between gap-[4.8rem] bg-[#4b4b4b] p-[3.2rem] text-white tablet:min-h-[36rem] tablet:p-[4.8rem]">
                        <div>
                            <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.4rem]">01 / SETUP</span>
                            <h2 className="mt-[1.6rem] max-w-[48rem] text-[4.2rem] font-semibold leading-[1] [font-variation-settings:'wdth'_115]">
                                Add QA to your UI.
                                <br />
                                Three lines, done.
                            </h2>
                        </div>

                        <a
                            className="flex w-max items-center gap-[1.2rem] border border-white px-[1.6rem] py-[1.2rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem]"
                            href="/fivepixels/guide"
                        >
                            View Documentation
                            <MaterialIcon
                                name="arrow_forward"
                                size={18}
                            />
                        </a>
                    </div>

                    <pre className="m-0 flex min-h-[36rem] items-center overflow-x-auto bg-[#050505] p-[3.2rem] font-[family-name:var(--font-fira-rebrand)] text-[1.4rem] leading-[1.8] text-[#f5f5f5] tablet:p-[4.8rem]">
                        <code className="block">
                            {codeLines.map((line, index) => (
                                <span
                                    className="block whitespace-nowrap [&_b]:font-medium [&_b]:text-[#ff4b2e] [&_span]:text-[#ffb19f]"
                                    key={index}
                                >
                                    {line ?? "\u00a0"}
                                </span>
                            ))}
                        </code>
                    </pre>
                </div>

                <div>
                    <div className="mb-[2.4rem] flex items-end justify-between gap-[2.4rem]">
                        <h3 className="text-[3.2rem] font-semibold leading-none [font-variation-settings:'wdth'_115]">What you get</h3>
                        <span className="hidden font-[family-name:var(--font-fira-rebrand)] text-[1.3rem] tablet:block">FEEDBACK / REVIEW / RESOLVE</span>
                    </div>

                    <ul className="grid mobile:grid-cols-1 tablet:grid-cols-4">
                        {features.map((feature, index) => (
                            <li
                                className="flex min-h-[17rem] flex-col justify-between p-[2.4rem]"
                                key={feature.title}
                            >
                                <div className="flex items-center justify-between">
                                    <MaterialIcon
                                        name={feature.icon}
                                        size={24}
                                    />
                                    <span className="font-[family-name:var(--font-fira-rebrand)] text-[1.2rem]">0{index + 1}</span>
                                </div>
                                <div>
                                    <strong className="block font-semibold">{feature.title}</strong>
                                    <p className="mt-[0.4rem] text-[1.5rem] leading-[1.4] text-black/60">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
