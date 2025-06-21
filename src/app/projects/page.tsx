"use client";

import { ProjectCard } from "@ui";
import { SectionHead } from "@ui";
import { PageTransition } from "../../lib/utils/PageTransition";
import projects from "../../data/projects.json";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <section
        role="region"
        className="min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center px-8"
      >
        <div className="w-full max-w-[900px] py-24">
          <SectionHead name="Projects" index={3} />
          <div className="w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                position={index % 2 === 1 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default ProjectsPage;
