import { ListItem } from "./ListItem";

type ListProps = {
  items: string[];
  variant: "caret" | "bullet" | "chip";
  layout?: "grid" | "stack" | "flow";
  size?: "sm" | "md";
  align?: "left" | "right";
  className?: string;
};

export function List({
  items,
  variant,
  layout = "grid",
  size = "sm",
  align = "left",
  className = "",
}: ListProps) {
  const layouts = {
    grid: "grid grid-cols-1 sm:grid-cols-2 gap-2",
    stack: "flex flex-col gap-2.5",
    flow: "flex flex-wrap gap-3",
  };

  return (
    <ul
      className={`${layouts[layout]} ${
        align === "right" ? "justify-end" : ""
      } ${className}`}
    >
      {items.map((item, index) => (
        <ListItem key={index} text={item} variant={variant} size={size} />
      ))}
    </ul>
  );
}
