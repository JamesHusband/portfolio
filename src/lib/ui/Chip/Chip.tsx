type ChipProps = {
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
};

export function Chip({ children, size = "sm", className = "" }: ChipProps) {
  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full text-slate-300 ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
