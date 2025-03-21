"use client";

import Link from "next/link";
import { NumberPrefix } from "@UI";

type NavLinkProps = {
  index?: number;
  value: string;
};

export function NavLink({ index, value }: NavLinkProps) {
  return (
    <Link
      href={`#${value.toLowerCase()}`}
      className="font-mono text-slate hover:text-yellow transition-colors duration-300 flex items-center gap-[5px]"
    >
      {index !== undefined && <NumberPrefix number={index + 1} size="sm" />}
      {value}
    </Link>
  );
}
