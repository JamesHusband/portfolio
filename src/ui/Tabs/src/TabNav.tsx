"use client";

import { useRef, useEffect, useState } from "react";
import { TabNavItem } from "./TabNavItem";

type Tab = {
  id: string;
  label: string;
};

type TabNavProps = {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (index: number) => void;
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export function TabNav({
  tabs,
  activeTab,
  onTabChange,
  orientation = "vertical",
  className = "",
}: TabNavProps) {
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorSize, setIndicatorSize] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeTabElement = tabsRef.current[activeTab];
    if (!activeTabElement) return;

    if (orientation === "vertical") {
      setIndicatorOffset(activeTabElement.offsetTop);
      setIndicatorSize(activeTabElement.offsetHeight);
    } else {
      setIndicatorOffset(activeTabElement.offsetLeft);
      setIndicatorSize(activeTabElement.offsetWidth);
    }
  }, [activeTab, orientation]);

  const orientations = {
    vertical: "relative flex flex-col w-[140px] border-l border-slate/20",
    horizontal: "relative flex border-b border-slate/20",
  };

  const indicatorStyles = {
    vertical:
      "absolute left-0 w-[2px] bg-yellow transition-transform duration-150 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
    horizontal:
      "absolute bottom-0 h-[2px] bg-yellow transition-transform duration-150 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
  };

  return (
    <div
      className={`${orientations[orientation]} ${className}`}
      role="tablist"
      aria-label="Tabs"
    >
      {tabs.map((tab, index) => (
        <TabNavItem
          key={tab.id}
          id={tab.id}
          ref={(el: HTMLButtonElement | null) => {
            tabsRef.current[index] = el;
          }}
          isSelected={activeTab === index}
          onClick={() => onTabChange(index)}
          orientation={orientation}
        >
          {tab.label}
        </TabNavItem>
      ))}
      <div
        className={indicatorStyles[orientation]}
        style={{
          transform:
            orientation === "vertical"
              ? `translateY(${indicatorOffset}px)`
              : `translateX(${indicatorOffset}px)`,
          [orientation === "vertical"
            ? "height"
            : "width"]: `${indicatorSize}px`,
        }}
      />
    </div>
  );
}
