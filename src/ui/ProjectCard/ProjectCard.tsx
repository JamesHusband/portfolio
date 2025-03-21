"use client";

import { ProjectImage } from "./src/ProjectImage";
import { ProjectContent } from "./src/ProjectContent";

type ProjectCardProps = {
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

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  links,
  featured = false,
  position = "left",
}: ProjectCardProps) {
  return (
    <div className="relative grid grid-cols-12 gap-4 items-center w-full mb-24">
      <ProjectImage src={image.src} alt={image.alt} position={position} />
      <ProjectContent
        title={title}
        description={description}
        technologies={technologies}
        links={links}
        featured={featured}
        position={position}
      />
    </div>
  );
}
