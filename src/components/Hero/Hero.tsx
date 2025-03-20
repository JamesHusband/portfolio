import { TerminalText } from "../TerminalText/TerminalText";

type HeroProps = {
  greeting: string;
  heading: string;
  subheading: string;
  description: string;
};

export function Hero({
  greeting,
  heading,
  subheading,
  description,
}: HeroProps) {
  return (
    <div className="flex flex-col gap-8">
      <TerminalText value={greeting} />
      <h1 className="text-[clamp(40px,8vw,80px)] font-bold text-slate-light leading-none">
        {heading}
      </h1>
      <h2 className="text-[clamp(40px,8vw,60px)] font-bold text-slate leading-none">
        {subheading}
      </h2>
      <p className="text-slate max-w-[540px]">{description}</p>
    </div>
  );
}
