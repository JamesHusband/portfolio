import { NumberPrefix } from "@UI";

type SectionHeadProps = {
  name: string;
  index: number;
  isContact?: boolean;
};

export function SectionHead({ name, index, isContact }: SectionHeadProps) {
  if (isContact) {
    return (
      <div className="text-center mb-10">
        <p className="font-mono text-yellow text-lg">
          <NumberPrefix number={index + 1} size="lg" /> What&apos;s Next?
        </p>
        <h2 className="text-[clamp(40px,5vw,60px)] font-bold text-slate-light mt-4">
          {name}
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-2 mb-10">
      <div className="flex items-baseline gap-2">
        <NumberPrefix number={index + 1} size="lg" />
        <h2 className="text-[clamp(26px,5vw,32px)] font-semibold text-slate-light whitespace-nowrap">
          {name}
        </h2>
      </div>
      <div className="w-full h-px bg-slate/20 relative top-[-10px]" />
    </div>
  );
}
