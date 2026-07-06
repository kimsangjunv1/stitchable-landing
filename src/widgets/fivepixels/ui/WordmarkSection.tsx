import Image from "next/image";

export function WordmarkSection() {
    return (
        <section
            className="flex justify-center overflow-hidden"
            aria-label="fivepixels"
        >
            <div className="mx-auto max-w-[var(--size-pc)] w-full border-x border-x-[#ededed]">
                <Image
                    className="h-auto w-[min(1920px,calc(100%-48px))]"
                    src="/rebranding/logo.svg"
                    alt="fivepixels"
                    width={1558}
                    height={284}
                />
            </div>
        </section>
    );
}
