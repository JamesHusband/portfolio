type TabNavItemProps = {
  id: string;
  isSelected: boolean;
  onClick: () => void;
  orientation?: "vertical" | "horizontal";
  className?: string;
  children: React.ReactNode;
};

export function TabNavItem({
  id,
  isSelected,
  onClick,
  orientation = "vertical",
  className = "",
  children,
}: TabNavItemProps) {
  const buttonStyles = {
    vertical:
      "px-5 py-2.5 font-mono text-sm text-slate cursor-pointer transition-all text-left hover:text-yellow hover:bg-navy-light",
    horizontal:
      "px-4 py-2 font-mono text-sm text-slate cursor-pointer transition-all hover:text-yellow hover:bg-navy-light",
  };

  return (
    <button
      className={`${buttonStyles[orientation]} ${
        isSelected ? "text-yellow bg-navy-light" : ""
      } ${className}`}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
