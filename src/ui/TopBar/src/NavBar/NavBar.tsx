"use client";

import { NavLink } from "./NavLink/NavLink";

type NavItem = {
  id: string;
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    id: "home",
    name: "Home",
    href: "/",
  },
  {
    id: "about",
    name: "About",
    href: "/about",
  },
  {
    id: "experience",
    name: "Experience",
    href: "/experience",
  },
  {
    id: "projects",
    name: "Projects",
    href: "/projects",
  },
  {
    id: "contact",
    name: "Contact",
    href: "/contact",
  },
];

export function NavBar() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map(({ id, name, href }: NavItem, index: number) => (
        <NavLink key={id} value={name} index={index} href={href} />
      ))}
    </nav>
  );
}
