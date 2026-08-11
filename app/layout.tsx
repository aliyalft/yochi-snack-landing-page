import type { Metadata } from "next"
import { Fraunces, Poppins } from "next/font/google"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yochisnack.shop"),

  title: {
    default: "Yochi Snack | Cemilan Sehat dari Sayuran",
    template: "%s | Yochi Snack",
  },

  description:
    "Yochi Snack menghadirkan stik bayam dan stik wortel yang renyah, gurih, dan dibuat dari bahan berkualitas. Cocok untuk camilan keluarga dan berbagai momen sehari-hari.",

  keywords: [
    "Yochi Snack",
    "cemilan sehat",
    "camilan sehat",
    "stik bayam",
    "stik wortel",
    "snack sayuran",
    "camilan sayuran",
    "cemilan anak",
    "snack sehat anak",
    "camilan keluarga",
    "snack homemade",
    "cemilan homemade",
    "snack Tangerang Selatan",
    "cemilan Pamulang",
    "Yochi Snack Pamulang",
  ],

  authors: [
    {
      name: "Yochi Snack",
    },
  ],

  creator: "Yochi Snack",
  publisher: "Yochi Snack",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/images/iconyochi.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/iconyochi.png",
    apple: "/images/iconyochi.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Yochi Snack | Cemilan Sehat dari Sayuran",
    description:
      "Nikmati stik bayam dan stik wortel Yochi Snack yang renyah, gurih, dan dibuat dari bahan berkualitas.",
    url: "https://yochisnack.shop",
    siteName: "Yochi Snack",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yochi Snack | Cemilan Sehat dari Sayuran",
    description:
      "Stik bayam dan stik wortel renyah untuk camilan keluarga.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}