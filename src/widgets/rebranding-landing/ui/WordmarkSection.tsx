import Image from "next/image"

export function WordmarkSection() {
  return (
    <section
      className="flex justify-center overflow-hidden px-5 pb-[13px]"
      aria-label="fivepixels"
    >
      <Image
        className="h-auto w-[min(1920px,calc(100%-48px))]"
        src="/rebranding/fivepixels.png"
        alt="fivepixels"
        width={1558}
        height={284}
      />
    </section>
  )
}
