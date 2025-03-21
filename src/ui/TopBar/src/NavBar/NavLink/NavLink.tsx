"use client";

import Link from "next/link";
import { NumberPrefix } from "@UI";

type NavLinkProps = {
  index?: number;
  value: string;
  href: string;
};

export function NavLink({ index, value, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="font-mono text-slate hover:text-yellow transition-colors duration-300 flex items-center gap-[5px]"
    >
      {index !== undefined && <NumberPrefix number={index + 1} size="sm" />}
      {value}
    </Link>
  );
}
