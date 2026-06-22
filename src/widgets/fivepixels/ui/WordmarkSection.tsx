import Image from "next/image";

export function WordmarkSection() {
    return (
        <section
            className="flex justify-center overflow-hidden"
            aria-label="fivepixels"
        >
            <Image
                className="h-auto w-[min(1920px,calc(100%-48px))]"
                src="/rebranding/logo.svg"
                alt="fivepixels"
                width={1558}
                height={284}
            />
        </section>
    );
}
