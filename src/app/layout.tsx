import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { JsonLd } from "@/app/JsonLd";
import { GlobalErrorBoundary } from "@/app/providers/GlobalErrorBoundary";
import { GlobalErrorListener } from "@/app/providers/GlobalErrorListener";
import { LenisProvider } from "@/app/providers/LenisProvider";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/widgets/layout/Footer";
import { Header } from "@/widgets/layout/Header";
import { SiteBanner } from "@/widgets/layout/SiteBanner";

import "@/shared/styles/scss/globals.css";
import "@/shared/styles/scss/index.scss";

const pretendard = localFont({
    src: [
        { path: "../../public/fonts/pretendard/woff2/Pretendard-Regular.subset.woff2", weight: "400", style: "normal" },
        { path: "../../public/fonts/pretendard/woff2/Pretendard-Medium.subset.woff2", weight: "500", style: "normal" },
        { path: "../../public/fonts/pretendard/woff2/Pretendard-SemiBold.subset.woff2", weight: "600", style: "normal" },
        { path: "../../public/fonts/pretendard/woff2/Pretendard-Bold.subset.woff2", weight: "700", style: "normal" },
        { path: "../../public/fonts/pretendard/woff2/Pretendard-ExtraBold.subset.woff2", weight: "800", style: "normal" },
    ],
    variable: "--font-pretendard",
    display: "swap",
});

const themeScript = `
    (function () {
        try {
            var storedTheme = localStorage.getItem("fivepixels-theme:v1");
            var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.documentElement.dataset.theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
        } catch (error) {
            document.documentElement.dataset.theme = "light";
        }
    })();
`;

export const metadata: Metadata = {
    ...createPageMetadata(),
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/favicon.ico",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={pretendard.variable}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{ __html: themeScript }}
                    id="fivepixels-theme"
                />
                <JsonLd />
            </head>
            <body className="bg-[var(--fp-bg)] font-[family-name:var(--font-pretendard)] text-[var(--fp-text-emphasis)] antialiased">
                <LenisProvider>
                    <GlobalErrorBoundary>
                        <GlobalErrorListener>
                            <SiteBanner />
                            <Header />
                            {children}
                            <Footer />
                        </GlobalErrorListener>
                    </GlobalErrorBoundary>
                </LenisProvider>
                {process.env.NODE_ENV === "production" && <Analytics />}
            </body>
        </html>
    );
}
