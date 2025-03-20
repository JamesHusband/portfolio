import { Chip } from "../Chip/Chip";

type ChipListProps = {
  items: string[];
  variant?: "default" | "outline";
  size?: "sm" | "md";
  align?: "left" | "right";
  className?: string;
};

export function ChipList({
  items,
  variant = "default",
  size = "sm",
  align = "left",
  className = "",
}: ChipListProps) {
  return (
    <ul
      className={`flex flex-wrap gap-3 ${
        align === "right" ? "justify-end" : ""
      } ${className}`}
    >
      {items.map((item, index) => (
        <li key={index}>
          <Chip variant={variant} size={size}>
            {item}
          </Chip>
        </li>
      ))}
    </ul>
  );
}
