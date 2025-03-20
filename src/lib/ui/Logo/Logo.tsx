"use client";

import Link from "next/link";

type LogoProps = {
  value: string;
};

export function Logo({ value }: LogoProps) {
  return (
    <Link href="/" className="font-mono text-yellow text-xl">
      {value}
    </Link>
  );
}
