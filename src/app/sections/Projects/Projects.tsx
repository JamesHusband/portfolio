import { ProjectCard } from "@ui";
import projects from "../../../data/projects.json";

export function Projects() {
  return (
    <section className="max-w-[900px] mx-auto py-24">
      {projects.projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          position={index % 2 === 1 ? "left" : "right"}
        />
      ))}
    </section>
  );
}
