"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMessages } from "@/app/providers/LocaleProvider";

export function Footer() {
    const pathname = usePathname();
    const { footer } = useMessages().layout;
    const isHome = pathname === "/";

    if (pathname.startsWith("/example/01")) {
        return null;
    }

    if (isHome) {
        const { home } = footer;

        return (
            <section className="border-t border-[var(--adaptive-border)] bg-[var(--adaptive-background)] text-[var(--adaptive-text-primary)]">
                <footer className="mx-auto w-full max-w-[112rem] border-x border-[var(--adaptive-border)] font-[family-name:var(--font-pretendard)]">
                    <div className="grid tablet:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.8fr))]">
                        <div className="border-b border-[var(--adaptive-border)] px-[2rem] py-[2.4rem] tablet:border-b-0 tablet:border-r">
                            <strong className="text-[2.4rem] font-semibold text-[var(--adaptive-text-primary)]">{home.brand}</strong>
                            <p className="mt-[1rem] max-w-[30rem] text-[1.4rem] leading-[1.65] text-[var(--adaptive-text-secondary)]">
                                {home.description}
                            </p>
                        </div>

                        <div className="border-b border-[var(--adaptive-border)] px-[2rem] py-[2.4rem] tablet:border-b-0 tablet:border-r">
                            <small className="text-[1.15rem] font-semibold uppercase tracking-[0.16em] text-[var(--adaptive-text-muted)]">{home.product}</small>
                            <div className="mt-[1.2rem] flex flex-col gap-[0.7rem] text-[1.35rem] text-[var(--adaptive-text-secondary)]">
                                <Link href="/#developers">{home.links.forDevelopers}</Link>
                                <Link href="/#compare">{home.links.compare}</Link>
                                <Link href="/#faq">{home.links.resources}</Link>
                            </div>
                        </div>

                        <div className="border-b border-[var(--adaptive-border)] px-[2rem] py-[2.4rem] tablet:border-b-0 tablet:border-r">
                            <small className="text-[1.15rem] font-semibold uppercase tracking-[0.16em] text-[var(--adaptive-text-muted)]">{home.explore}</small>
                            <div className="mt-[1.2rem] flex flex-col gap-[0.7rem] text-[1.35rem] text-[var(--adaptive-text-secondary)]">
                                <Link href="/">{home.links.overview}</Link>
                                <Link href="/guides/quickstart">{home.links.guide}</Link>
                                <Link href="/docs/setup">{home.links.docs}</Link>
                                <Link href="/example/01">{home.links.demo}</Link>
                            </div>
                        </div>

                        <div className="px-[2rem] py-[2.4rem]">
                            <small className="text-[1.15rem] font-semibold uppercase tracking-[0.16em] text-[var(--adaptive-text-muted)]">{home.builtBy}</small>
                            <p className="mt-[1.2rem] text-[1.35rem] leading-[1.6] text-[var(--adaptive-text-secondary)]">
                                {home.builtByCopy}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[0.8rem] border-t border-[var(--adaptive-border)] px-[2rem] py-[1.4rem] text-[1.2rem] text-[var(--adaptive-text-muted)] tablet:flex-row tablet:items-center tablet:justify-between">
                        <span>{home.copyright}</span>
                        <span>{home.tagline}</span>
                    </div>
                </footer>
            </section>
        );
    }

    const { site } = footer;
    const [libraryLine1, libraryLine2] = site.libraries.split("\n");

    return (
        <section className="min-h-[375px] flex flex-col gap-[15.2rem] border-t border-t-[var(--adaptive-border)] bg-[var(--adaptive-background)] text-[var(--adaptive-text-primary)]">
            <footer className="mx-auto grid w-[min(1920px,calc(100%-48px))] grid-cols-[1.15fr_1fr_.85fr] pt-[89px] max-[720px]:w-[min(calc(100%-32px),520px)] max-[720px]:grid-cols-2 max-[720px]:gap-x-5 max-[720px]:gap-y-[55px] max-[720px]:py-[55px] max-[720px]:pb-20">
                <div className="flex flex-col items-start leading-none">
                    <strong>{site.codi}</strong>
                    <span>{site.handle}</span>
                    <p className="mt-[34px] leading-[1.3]">
                        {site.developedBy}
                        <br />
                        {site.author}
                    </p>
                </div>

                <div>
                    <small className="my-[7px] mb-[14px] block text-[18px]">{site.currentLibrary}</small>
                    <strong className="block text-[26px] leading-[1.45]">
                        {libraryLine1}
                        <br />
                        {libraryLine2}
                    </strong>
                </div>

                <div>
                    <small className="my-[7px] mb-[14px] block text-[18px]">{site.currentLibrary}</small>
                    <div className="flex gap-2 text-[#bcbcbc]">
                        <span
                            className="grid h-[27px] w-[27px] place-items-center rounded-full bg-[#bcbcbc] font-extrabold text-black"
                            aria-label={site.githubAria}
                        >
                            GH
                        </span>
                        <span
                            className="grid h-[27px] w-[27px] place-items-center rounded-full bg-[#bcbcbc] font-extrabold text-black"
                            aria-label={site.linkedInAria}
                        >
                            in
                        </span>
                    </div>
                </div>
            </footer>

            <Image
                className="theme-adaptive-logo h-auto w-[min(1920px,calc(100%-48px))] mx-auto"
                src="/rebranding/logo-single-black.svg"
                alt={site.logoAlt}
                width={1558}
                height={284}
            />
        </section>
    );
}
