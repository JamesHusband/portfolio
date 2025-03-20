import type { Metadata } from "next";
import "./globals.css";
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
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
