"use client";

import { create } from "zustand";

interface AppState {
  // Add state properties here
}

export const useStore = create<AppState>((set) => ({
  // Add state and actions
}));
