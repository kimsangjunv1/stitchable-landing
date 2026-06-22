import Image from "next/image"
import { ArrowRight, Link as LinkIcon } from "lucide-react"

const expandedText =
  "font-[family-name:var(--font-mona-rebrand)] font-semibold [font-variation-settings:'wdth'_125]"

export function IntroSection() {
  return (
    <section className="mx-auto w-[min(1920px,calc(100%-48px))] pt-[27px] max-[720px]:w-[min(calc(100%-32px),520px)]">
      <header className="flex h-[120px] items-start gap-[38px] max-[720px]:h-[105px] max-[720px]:flex-col max-[720px]:gap-[13px]">
        <div className="flex flex-col items-start">
          <Image
            className="h-6 w-14"
            src="/rebranding/agit-logo.svg"
            alt="agit"
            width={56}
            height={24}
            priority
          />
          <Image
            className="h-auto w-[146px] object-contain max-[720px]:w-[130px]"
            src="/rebranding/fivepixels.png"
            alt="fivepixels"
            width={1558}
            height={284}
            priority
          />
        </div>

        <nav
          className="flex gap-[29px] pt-[13px] [font-variation-settings:'wdth'_110] max-[720px]:gap-5 max-[720px]:pt-0"
          aria-label="Primary navigation"
        >
          <a className="font-bold text-[#050505]" href="#guide">GUIDE</a>
          <a className="text-[#969696]" href="#settings">SETTINGS</a>
          <a className="text-[#969696]" href="#examples">EXAMPLES</a>
        </nav>
      </header>

      <div className="min-h-[270px] max-[720px]:min-h-[285px]">
        <h1
          className={`${expandedText} m-0 text-[clamp(32px,3vw,38px)] leading-none tracking-[-1.7px] max-[720px]:text-[32px]`}
        >
          A Tool for Perfect QA
        </h1>
        <p className="my-[10px] mb-[23px] leading-[1.4]">
          fivepixels is a{" "}
          <strong className={`${expandedText} text-[#ff4b2e]`}>
            blazing-fast ⚡
          </strong>{" "}
          qa corporate tool
          <br />
          that powers next-generation web applications.
        </p>

        <a
          className="flex w-max items-center gap-[21px] bg-[#efefef] px-[10px] py-[7px] font-[family-name:var(--font-fira-rebrand)]"
          href="#setup"
        >
          npm i stitchable <LinkIcon size={15} strokeWidth={2.4} />
        </a>

        <div className="mt-[21px] flex">
          <a
            className="flex h-9 items-center gap-[17px] border border-[#050505] bg-[#050505] px-3 font-[family-name:var(--font-fira-rebrand)] text-white"
            href="#setup"
          >
            Get Started <ArrowRight size={17} />
          </a>
          <a
            className="flex h-9 items-center gap-[17px] border border-[#050505] bg-white px-3 font-[family-name:var(--font-fira-rebrand)]"
            href="#guide"
          >
            View Documentation <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <div className="relative grid h-[267px] grid-cols-2 overflow-hidden bg-[linear-gradient(105deg,#ff542f_0%,#ff4b2e_50%,#e83d17_50%,#e83d17_100%)] max-[720px]:h-[540px] max-[720px]:grid-cols-1 max-[720px]:bg-[linear-gradient(#ff542f_0_50%,#e83d17_50%)]">
        <div className="absolute top-0 left-0 z-[3] h-[17px] w-full bg-[repeating-linear-gradient(90deg,transparent_0_15px,rgba(255,255,255,.55)_15px_16px)] opacity-80" />

        <div className="relative overflow-hidden">
          <h2 className={`${expandedText} absolute top-11 left-[86px] z-[2] m-0 text-[28px] tracking-[-1.4px] text-white max-[720px]:top-[34px] max-[720px]:left-[30px] max-[720px]:text-[24px]`}>
            support screen panel ui
          </h2>
          <Image
            className="absolute top-[88px] left-[83px] h-auto w-[337px] max-[720px]:top-[75px] max-[720px]:left-[25px] max-[720px]:w-[min(330px,85vw)]"
            src="/rebranding/dashboard.png"
            alt="Radar dashboard"
            width={745}
            height={713}
          />
        </div>

        <div className="relative overflow-hidden">
          <Image
            className="absolute top-[39px] left-[-29px] h-auto w-[307px] max-[720px]:top-[25px] max-[720px]:left-[5px] max-[720px]:w-[270px]"
            src="/rebranding/feedback.png"
            alt="Suggested feedback panel"
            width={540}
            height={461}
            priority
          />
          <h2 className={`${expandedText} absolute right-[25px] bottom-[14px] z-[2] m-0 text-right text-[28px] tracking-[-1.4px] text-white max-[720px]:right-5 max-[720px]:bottom-3 max-[720px]:text-[24px]`}>
            just click
            <br />
            everywhere
          </h2>
        </div>
      </div>
    </section>
  )
}
