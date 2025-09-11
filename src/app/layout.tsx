import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timelock",
  description: "Timelock – unlocking leverage without liquidations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
      >
        <header className="fixed top-0 inset-x-0 z-50">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-4 flex items-center justify-between rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-4 py-2">
              <Link href="/" className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-white font-bold">T</span>
                <span className="text-white font-semibold tracking-wide">Timelock</span>
              </Link>
              <div className="hidden md:flex items-center gap-6 text-sm">
                <a href="#ecosystem" className="text-white/80 hover:text-white">Ecosystem</a>
                <a href="#how-it-works" className="text-white/80 hover:text-white">How It Works</a>
                <a href="#traders" className="text-white/80 hover:text-white">Traders</a>
                <a href="#lp" className="text-white/80 hover:text-white">Liquidity</a>
                <a href="#example" className="text-white/80 hover:text-white">Example</a>
                <a href="#ecosystem-security" className="text-white/80 hover:text-white">Security</a>
              </div>
              <div className="flex items-center gap-3">
                <a href="#signin" className="hidden sm:inline-flex h-9 items-center rounded-full border border-white/25 px-4 text-white/90 hover:bg-white/10">Sign in</a>
                <a href="#cta" className="inline-flex h-9 items-center rounded-full bg-orange-500 px-4 text-white font-semibold hover:bg-orange-400">Get Started</a>
              </div>
            </div>
          </nav>
        </header>
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
