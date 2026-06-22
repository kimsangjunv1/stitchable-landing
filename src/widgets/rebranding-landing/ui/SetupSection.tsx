import { CircleGauge, Zap } from "lucide-react"

const codeLines = [
  <><b>import</b> {"{ Panel }"} <b>from</b> <span>&apos;fivepixels&apos;</span>;</>,
  null,
  <><b>export default function</b> App() {"{"}</>,
  <>{"  "}return (</>,
  <>{"    "}&lt;&gt;</>,
  <>{"      "}&lt;Report /&gt;</>,
  <>{"      "}&lt;section data-report-id=&quot;hero&quot; data-report-type=&quot;group&quot;&gt;</>,
  <>{"      "}&lt;/&gt;</>,
  <>{"    "})</>,
  <>{"}"}</>,
]

const metricClass =
  "flex items-center gap-[10px] font-semibold [font-variation-settings:'wdth'_125]"

export function SetupSection() {
  return (
    <section
      className="mx-auto min-h-[325px] w-[min(1920px,calc(100%-48px))] max-[720px]:w-[min(calc(100%-32px),520px)] max-[720px]:pt-1"
      id="setup"
    >
      <div className="grid grid-cols-2 max-[720px]:grid-cols-1 max-[720px]:gap-[26px]">
        <div>
          <h2 className="my-[6px] mb-[7px] font-bold [font-variation-settings:'wdth'_110]">
            too easy setup
          </h2>
          <ol className="m-0 list-decimal pl-[18px] leading-[1.5]">
            <li>import “Panel” from ‘fivepixels’</li>
            <li>setup you globally layout file</li>
            <li>and enjoy :D</li>
          </ol>
        </div>

        <pre className="m-0 min-h-[245px] overflow-hidden bg-[#030303] p-[22px] font-[family-name:var(--font-fira-rebrand)] leading-[1.65] text-[#f5f5f5] max-[720px]:min-h-[230px]">
          <code className="block">
            {codeLines.map((line, index) => (
              <span className="block [&_b]:font-medium [&_b]:text-[#ff4829]" key={index}>
                {line ?? "\u00a0"}
              </span>
            ))}
          </code>
        </pre>
      </div>

      <div className="mt-[27px] grid grid-cols-[1.3fr_1fr_1fr_1fr] max-[720px]:grid-cols-2 max-[720px]:gap-x-[10px] max-[720px]:gap-y-5">
        <div className={metricClass}>
          <Zap size={16} fill="currentColor" />
          <strong className="font-semibold">blazing fast profile</strong>
        </div>
        <div className={metricClass}>
          <b className="font-semibold">60</b>
          <strong className="font-semibold">easy to use</strong>
        </div>
        <div className={metricClass}>
          <b className="font-semibold">60</b>
          <strong className="font-semibold">easy 1 way</strong>
        </div>
        <div className={metricClass}>
          <CircleGauge size={16} />
          <strong className="font-semibold">1 second installation</strong>
        </div>
      </div>
    </section>
  )
}
