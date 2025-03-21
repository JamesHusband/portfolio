type NumberPrefixProps = {
  number: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function NumberPrefix({
  number,
  size = "md",
  className = "",
}: NumberPrefixProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const formattedNumber = String(number).padStart(2, "0");

  return (
    <span className={`font-mono text-yellow ${sizes[size]} ${className}`}>
      {formattedNumber}.
    </span>
  );
}
