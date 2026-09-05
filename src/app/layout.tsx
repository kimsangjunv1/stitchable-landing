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

const MATERIAL_SYMBOLS_FONT_URL = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block";

const monaSans = localFont({
    src: "../../public/fonts/rebranding/MonaSans.woff2",
    variable: "--font-mona-rebrand",
    display: "swap",
});
const firaCode = localFont({
    src: "../../public/fonts/rebranding/FiraCode.woff2",
    variable: "--font-fira-rebrand",
    display: "swap",
});

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
            className={`${monaSans.variable} ${firaCode.variable}`}
        >
            <head>
                <JsonLd />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href={MATERIAL_SYMBOLS_FONT_URL}
                />
            </head>
            <body className="bg-white font-[family-name:var(--font-mona-rebrand)] text-[#050505] antialiased">
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
