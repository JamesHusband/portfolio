type TabContentProps = {
  id: string;
  isSelected: boolean;
  className?: string;
  children: React.ReactNode;
};

export function TabContent({
  id,
  isSelected,
  className = "",
  children,
}: TabContentProps) {
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={!isSelected}
      className={className}
    >
      {children}
    </div>
  );
}
