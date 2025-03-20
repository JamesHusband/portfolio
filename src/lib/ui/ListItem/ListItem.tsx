type ListItemProps = {
  text: string;
};

export function ListItem({ text }: ListItemProps) {
  return (
    <div className="flex items-center">
      <span className="text-yellow-400 mr-2">▸</span>
      <span className="text-slate-300">{text}</span>
    </div>
  );
}
