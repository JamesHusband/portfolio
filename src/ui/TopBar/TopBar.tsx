"use client";

import { NavBar } from "./src/NavBar/NavBar";
import { Button } from "@UI";
import { Logo } from "./src/Logo/Logo";

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-slate/10">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-between items-center">
        <Logo value="JC" />

        <div className="hidden md:flex items-center gap-8">
          <NavBar />
          <Button
            href="/resume.pdf"
            value="Resume"
            target="_blank"
            className="hidden md:block"
          />
        </div>
      </div>
    </header>
  );
}
