"use client";

import { NavLink } from "@UI";
import { sections } from "@CONFIG";

export function NavBar() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {sections.map(({ id, name }, index) => (
        <NavLink key={id} value={name} index={index} />
      ))}
    </nav>
  );
}
