import { TabNavItem } from "../TabNavItem/TabNavItem";

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
  const orientations = {
    vertical: "relative flex flex-col w-[140px] border-l border-slate/20",
    horizontal: "relative flex border-b border-slate/20",
  };

  const indicatorStyles = {
    vertical:
      "absolute left-0 w-[2px] h-[42px] bg-yellow transition-transform duration-150 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
    horizontal:
      "absolute bottom-0 h-[2px] bg-yellow transition-transform duration-150 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
  };

  const indicatorTransform = {
    vertical: `translateY(${activeTab * 42}px)`,
    horizontal: `translateX(${activeTab * 100}%)`,
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
          isSelected={activeTab === index}
          onClick={() => onTabChange(index)}
          orientation={orientation}
        >
          {tab.label}
        </TabNavItem>
      ))}
      <div
        className={indicatorStyles[orientation]}
        style={{ transform: indicatorTransform[orientation] }}
      />
    </div>
  );
}
