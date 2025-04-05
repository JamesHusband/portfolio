"use client";

import { Command } from "lucide-react";

export function Toolbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-8 bg-[#1e1e1e] border-t border-[#333] flex items-center px-4">
      <div className="flex items-center gap-2 text-xs text-[#888]">
        <button className="flex items-center gap-1 hover:text-white transition-colors">
          <Command className="w-3 h-3" />
          <span>Command Palette</span>
        </button>
      </div>
    </div>
  );
}
