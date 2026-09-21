import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-luxury",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feel Cafe | Pure & Simple — Islamabad",
  description:
    "Feel Cafe | Pure & Simple. Located at 1st Floor, IHCBA, Constitution Ave, G-5/1, Islamabad. Artisanal espresso, craft dining, and a serene sanctuary in the heart of Pakistan's capital.",
  keywords: [
    "Feel Cafe",
    "Feel Cafe Islamabad",
    "Pure & Simple",
    "IHCBA Constitution Ave",
    "Islamabad Cafe",
    "Artisanal Coffee Islamabad",
  ],
  authors: [{ name: "Feel Cafe" }],
  openGraph: {
    title: "Feel Cafe | Pure & Simple — Islamabad",
    description:
      "Artisanal coffee and calm dining on Constitution Avenue, Islamabad. Experience coffee made with intention.",
    type: "website",
    locale: "en_PK",
  },
};

export const viewport: Viewport = {
  themeColor: "#080706",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geistSans.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080706] text-[#F4EDE4] font-sans selection:bg-[#D4AF37]/25 selection:text-[#FFF]">
        {children}
      </body>
    </html>
  );
}
