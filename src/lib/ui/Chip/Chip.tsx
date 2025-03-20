type ChipProps = {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md";
  className?: string;
};

export function Chip({
  children,
  variant = "default",
  size = "sm",
  className = "",
}: ChipProps) {
  const variants = {
    default: "text-slate-300",
    outline: "text-slate-300 border border-slate-300",
  };

  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
