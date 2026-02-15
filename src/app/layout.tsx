import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyCallButton } from "@/components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seattlesparklecleaning.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "House Cleaning Services in Seattle, WA | Seattle Sparkle Cleaning",
    template: "%s | Seattle Sparkle Cleaning",
  },
  description:
    "Professional house cleaning services in Seattle, WA. Residential cleaning, deep cleaning, move-out cleaning. Licensed, insured, eco-friendly. Get a free quote today.",
  keywords: [
    "house cleaning Seattle",
    "Seattle cleaning services",
    "residential cleaning Seattle WA",
    "deep cleaning Seattle",
    "move out cleaning Seattle",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Seattle Sparkle Cleaning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
