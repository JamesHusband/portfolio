import { List } from "@components";
import { ProjectLinks } from "./ProjectLinks";

type ProjectContentProps = {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    external?: string;
  };
  featured?: boolean;
  position: "left" | "right";
  className?: string;
};

export function ProjectContent({
  title,
  description,
  technologies,
  links,
  featured = false,
  position,
  className = "",
}: ProjectContentProps) {
  const isLeft = position === "left";

  return (
    <div
      className={`col-span-12 md:col-span-6 relative z-20 md:absolute ${
        !isLeft ? "md:col-start-7 md:text-right" : "md:text-left"
      } ${className}`}
    >
      <div className="mb-4">
        {featured && (
          <p className="text-emerald-400 text-sm mb-2">Featured Project</p>
        )}
        <h3 className="text-2xl text-slate-light font-semibold">{title}</h3>
      </div>
      <div className="bg-[#112240] p-6 rounded-md mb-4">
        <p className="text-slate-300">{description}</p>
      </div>
      <List
        items={technologies}
        variant="chip"
        layout="flow"
        size="sm"
        align={!isLeft ? "right" : "left"}
        className="mb-6"
      />
      <ProjectLinks links={links} position={position} />
    </div>
  );
}
