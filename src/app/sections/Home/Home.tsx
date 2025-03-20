"use client";

export function Home() {
  return (
    <section
      role="region"
      className="min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center px-8"
    >
      <div className="flex flex-col gap-8 max-w-4xl">
        <p className="font-mono text-yellow">{`>>> Hello World, my name is`}</p>
        <h1 className="text-[clamp(40px,8vw,80px)] font-bold text-slate-light leading-none">
          {"James Charles />"}
        </h1>
        <h2 className="text-[clamp(40px,8vw,60px)] font-bold text-slate leading-none">{`// I write code & develop apps.`}</h2>
        <p className="text-slate max-w-[540px]">
          Drawn to shiny code and complex systems. I love building tools and
          simplifying the messy into the manageable.
        </p>
      </div>
    </section>
  );
}
