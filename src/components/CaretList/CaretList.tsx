import { ListItem } from "@UI";

type CaretListProps = {
  items: string[];
};

export function CaretList({ items }: CaretListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </div>
  );
}
