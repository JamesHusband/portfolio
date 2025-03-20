import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@components";
import { siteMetadata } from "@CONFIG";

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
        className={`${inter.className} ${spaceMono.variable} bg-navy text-slate min-h-screen pt-nav`}
      >
        <TopBar />
        {children}

        <footer className="w-full text-center py-8 text-text font-mono text-sm">
          <div>Designed & Built by James Charles</div>
        </footer>
      </body>
    </html>
  );
}
