import type { Metadata } from "next";
import "./globals.css";
import { Footer, TopBar } from "@ui";
import { siteMetadata } from "@config";

import { Inter, Space_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${spaceMono.variable} bg-navy pt-nav min-h-screen flex flex-col`}
      >
        <TopBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
