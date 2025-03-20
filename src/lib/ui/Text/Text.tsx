type TextProps = {
  children: React.ReactNode;
  variant?: "body" | "lead";
  className?: string;
};

export function Text({
  children,
  variant = "body",
  className = "",
}: TextProps) {
  const baseStyles = "text-slate leading-relaxed";
  const variants = {
    body: "text-base",
    lead: "text-lg",
  };

  return (
    <p className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
}
