import localFont from "next/font/local"
import type { ReactNode } from "react"

const monaSans = localFont({
  src: "../../../public/fonts/rebranding/MonaSans.woff2",
  variable: "--font-mona-rebrand",
  display: "swap",
})

const firaCode = localFont({
  src: "../../../public/fonts/rebranding/FiraCode.woff2",
  variable: "--font-fira-rebrand",
  display: "swap",
})

export default function RebrandingLandingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className={`${monaSans.variable} ${firaCode.variable}`}>
      {children}
    </div>
  )
}
