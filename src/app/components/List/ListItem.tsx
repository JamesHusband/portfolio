import { Chip } from "@UI";

type ListItemProps = {
  text: string;
  variant: "caret" | "bullet" | "chip";
  size?: "sm" | "md";
  className?: string;
};

export function ListItem({
  text,
  variant,
  size = "sm",
  className = "",
}: ListItemProps) {
  const renderContent = () => {
    if (variant === "chip") {
      return (
        <Chip size={size} className={className}>
          {text}
        </Chip>
      );
    }

    const variants = {
      caret:
        "flex items-center before:content-['▸'] before:text-yellow-400 before:mr-2",
      bullet:
        "pl-7 text-base leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-yellow",
    };

    return (
      <span className={`relative text-slate ${variants[variant]} ${className}`}>
        {text}
      </span>
    );
  };

  return <li>{renderContent()}</li>;
}
