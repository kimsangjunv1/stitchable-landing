"use client";

import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { useMessages } from "@/app/providers/LocaleProvider";

export function SiteFooter() {
  const t = useMessages().landing.footer;
  const header = useMessages().landing.header;

  const columns = [
    {
      title: "Learn",
      links: [
        { label: t.companyLinks[0]?.label ?? "Docs", href: "/guide" },
        { label: header.navFeatures, href: "#features" },
        { label: header.navHowItWorks, href: "#how-it-works" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: header.getStarted, href: "#quickstart" },
        { label: header.navDocs, href: "/guide" },
      ],
    },
    {
      title: "Resources",
      links: t.companyLinks.map((link) => ({
        label: link.label,
        href: link.href,
      })),
    },
    {
      title: t.socialTitle,
      links: [{ label: "GitHub", href: "#" }],
    },
  ];

  return (
    <footer className="border-t border-[var(--vp-color-stroke)] bg-[var(--vp-color-bg)]">
      <div className="px-5 py-12 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--vp-color-text-dim)]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-[var(--vp-color-text-muted)] transition-colors hover:text-[var(--vp-color-brand)]"
                    >
                      {link.label === "GitHub" ? (
                        <GithubIcon className="size-4" />
                      ) : null}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[var(--vp-color-stroke)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--vp-color-text-dim)]">
            {t.copyright}
          </p>
          <a
            href="#quickstart"
            className="vp-learn-more text-xs"
          >
            {header.getStarted}
            <ArrowRight className="size-3" />
          </a>
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none mt-10 select-none overflow-hidden font-heading text-[clamp(4rem,18vw,16rem)] font-semibold leading-[0.9] tracking-tight text-[var(--vp-color-text)]"
        >
          stitchable.
        </p>
      </div>
    </footer>
  );
}
