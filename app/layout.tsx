import type { Metadata } from "next";
import { Manrope, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Ya-Chi Chuang | Portfolio",
  description: "Frontend Developer & UX Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoSansTC.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}