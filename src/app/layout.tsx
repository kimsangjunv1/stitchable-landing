import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { GlobalErrorBoundary } from "@/app/providers/GlobalErrorBoundary";
import { QueryProvider } from "@/app/providers/QueryProvider";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { GlobalErrorListener } from "@/app/providers/GlobalErrorListener";
import { PopupProvider } from "@/app/providers/PopupProvider";
import { LocaleProvider } from "@/app/providers/LocaleProvider";
import { Header } from "@/widgets/layout/Header";
import { Sidebar } from "@/widgets/layout/Sidebar";
import { Footer } from "@/widgets/layout/Footer";
import { Progress } from "@/widgets/layout/Progress";
import { Toast } from "@/widgets/layout/Toast";

import "@/shared/styles/scss/globals.css";
import "@/shared/styles/scss/index.scss";

const MATERIAL_SYMBOLS_FONT_URL = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const suit = localFont({
    src: [
        {
            path: "../../public/fonts/SUIT-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/SUIT-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/SUIT-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/SUIT-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-suit",
    display: "swap",
});
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
                type: "image/svg+xml",
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
            className={`${geistMono.variable} ${spaceGrotesk.variable} ${suit.variable} ${monaSans.variable} ${firaCode.variable}`}
        >
            <head>
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
            <body className="bg-white font-sans text-[#050505] antialiased">
                <GlobalErrorBoundary>
                    <QueryProvider>
                        <AuthProvider>
                            <GlobalErrorListener>
                                <Header />
                                <Sidebar />
                                <PopupProvider>
                                    <LocaleProvider>{children}</LocaleProvider>
                                </PopupProvider>
                                <Footer />
                                <Progress />
                                <Toast />
                            </GlobalErrorListener>
                        </AuthProvider>
                    </QueryProvider>
                </GlobalErrorBoundary>
                {process.env.NODE_ENV === "production" && <Analytics />}
            </body>
        </html>
    );
}
