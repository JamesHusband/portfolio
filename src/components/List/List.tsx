import { ListItem } from "@UI";

type ListProps = {
  items: string[];
  variant?: "caret" | "bullet";
  layout?: "grid" | "stack";
  className?: string;
};

export function List({
  items,
  variant = "caret",
  layout = "grid",
  className = "",
}: ListProps) {
  const layouts = {
    grid: "grid grid-cols-1 sm:grid-cols-2 gap-2",
    stack: "flex flex-col gap-2.5",
  };

  return (
    <ul className={`${layouts[layout]} ${className}`}>
      {items.map((item, index) => (
        <ListItem key={index} text={item} variant={variant} />
      ))}
    </ul>
  );
}
