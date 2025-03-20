type ListItemProps = {
  text: string;
  variant?: "caret" | "bullet";
  className?: string;
};

export function ListItem({
  text,
  variant = "caret",
  className = "",
}: ListItemProps) {
  const baseStyles = "relative text-slate";
  const variants = {
    caret:
      "flex items-center before:content-['▸'] before:text-yellow-400 before:mr-2",
    bullet:
      "pl-7 text-base leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-yellow",
  };

  return (
    <li className={`${baseStyles} ${variants[variant]} ${className}`}>
      {text}
    </li>
  );
}
