"use client";

import { useState } from "react";
import { TabNav } from "./src/TabNav";
import { TabContent } from "./src/TabContent";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export function Tabs({
  tabs,
  orientation = "vertical",
  className = "",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const orientations = {
    vertical: "flex gap-12",
    horizontal: "flex flex-col gap-8",
  };

  return (
    <div className={`${orientations[orientation]} ${className}`}>
      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        orientation={orientation}
      />

      <div className="flex-1">
        {tabs.map((tab, index) => (
          <TabContent key={tab.id} id={tab.id} isSelected={activeTab === index}>
            {tab.content}
          </TabContent>
        ))}
      </div>
    </div>
  );
}
