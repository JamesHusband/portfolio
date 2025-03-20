import {
  ChipList,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
} from "@UI";

type ProjectProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
  links: {
    github?: string;
    external?: string;
  };
  featured?: boolean;
  className?: string;
  position?: "left" | "right";
};

export function Project({
  title,
  description,
  image,
  technologies,
  links,
  featured = false,
  className = "",
  position = "left",
}: ProjectProps) {
  const isLeft = position === "left";

  return (
    <div className={`mb-24 ${className}`}>
      <div className="relative grid grid-cols-12 gap-4 items-center">
        <div
          className={`col-span-12 md:col-span-7 relative z-10 ${
            !isLeft ? "" : "md:col-start-6"
          }`}
        >
          <ProjectImage src={image.src} alt={image.alt} />
        </div>
        <div
          className={`col-span-12 md:col-span-6 relative z-20 md:absolute ${
            !isLeft ? "md:col-start-7 md:text-right" : "md:text-left"
          }`}
        >
          <ProjectTitle title={title} featured={featured} className="mb-4" />
          <ProjectDescription className="mb-4">
            {description}
          </ProjectDescription>
          <ChipList
            items={technologies}
            variant="default"
            size="sm"
            align={!isLeft ? "right" : "left"}
            className="mb-6"
          />
          <ProjectLinks
            github={links.github}
            external={links.external}
            align={!isLeft ? "right" : "left"}
          />
        </div>
      </div>
    </div>
  );
}
