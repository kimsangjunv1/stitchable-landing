import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const libraries = [
    {
        title: "fivepixels.",
        href: "/fivepixels",
        description: (
            <>
                fivepixels is a blazing-fast qa corporate tool
                <br />
                that powers next-generation web applications.
            </>
        ),
    },
    {
        title: "stacque",
        href: "#stacque",
        description: (
            <>
                fivepixels is a blazing-fast qa corporate tool
                <br />
                that powers next-generation web applications.
            </>
        ),
    },
];

export function LibraryShowcase() {
    return (
        <main className="mx-auto w-[min(1536px,calc(100%-48px))] pb-24 font-[family-name:var(--font-mona-rebrand)] text-[#050505] max-[720px]:w-[calc(100%-32px)]">
            <h1 className="mb-[36px] pt-[20px] text-[48px] font-semibold leading-[0.96] tracking-[-2.8px] [font-variation-settings:'wdth'_125] max-[720px]:mb-8 max-[720px]:text-[40px]">
                Two
                <br />
                Library
                <br />
                available
            </h1>

            <div className="grid max-w-[1260px] grid-cols-[726px_1fr] gap-x-[30px] max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(280px,.7fr)] max-[720px]:grid-cols-1">
                <div className="overflow-hidden">
                    <section className="relative h-[303px] overflow-hidden bg-[#ff502f]">
                        <Image
                            className="absolute top-[57px] left-[124px] h-auto w-[228px] brightness-0 invert max-[720px]:left-8"
                            src="/rebranding/fivepixels.png"
                            alt="fivepixels"
                            width={1558}
                            height={284}
                            priority
                        />
                        <Image
                            className="absolute top-[25px] left-[6px] h-auto w-[716px] max-[720px]:top-[70px] max-[720px]:left-[-18px] max-[720px]:w-[min(620px,calc(100%+36px))]"
                            src="/rebranding/dashboard.png"
                            alt="Radar dashboard"
                            width={745}
                            height={713}
                            priority
                        />
                    </section>

                    <section
                        className="relative h-[402px] overflow-hidden bg-[#292929]"
                        id="stacque"
                    >
                        <strong className="absolute top-[52px] left-[124px] text-[43px] leading-none tracking-[-2.6px] text-white [font-variation-settings:'wdth'_125] max-[720px]:left-8 max-[720px]:text-[34px]">
                            trackitlessability
                        </strong>
                        <div className="absolute top-[132px] left-0 h-[300px] w-[312px] overflow-hidden rounded-tr-[38px] bg-white text-[#171717]">
                            <div className="flex gap-7 px-3 pt-8 text-[16px] text-[#8d8d8d]">
                                <span>item</span>
                                <span>sell</span>
                                <span className="size-5 rounded-full bg-[#333]" />
                            </div>
                            <div className="mt-8 border-t border-[#ececec] px-3 pt-5 text-[17px] leading-[1.55]">
                                <p>Personalization from other</p>
                                <p>yum yum chop everything you want</p>
                            </div>
                        </div>
                        <div className="absolute top-[238px] left-[171px] h-[240px] w-[278px] overflow-hidden rounded-t-[24px]">
                            <Image
                                className="absolute top-0 left-[-252px] h-auto w-[540px] max-w-none"
                                src="/rebranding/feedback.png"
                                alt="Suggested feedback"
                                width={540}
                                height={461}
                            />
                        </div>
                    </section>
                </div>

                <div className="grid grid-rows-[303px_402px] max-[720px]:hidden">
                    {libraries.map((library) => (
                        <Link
                            className="relative flex flex-col justify-start pt-[3px]"
                            href={library.href}
                            key={library.title}
                        >
                            <strong className="text-[47px] leading-none tracking-[-2.5px] [font-variation-settings:'wdth'_125]">{library.title}</strong>
                            <p className="mt-[17px] text-[18px] font-semibold leading-[0.98] tracking-[-0.5px]">{library.description}</p>
                            <ArrowUpRight
                                className="absolute top-0 right-0"
                                size={23}
                                strokeWidth={1.8}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
