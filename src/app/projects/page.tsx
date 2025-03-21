"use client";

import { ProjectCard } from "@ui";
import { SectionHead } from "@ui";
import { PageTransition } from "../../lib/utils/PageTransition";
import projects from "../../data/projects.json";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main>
        <section className="max-w-[900px] mx-auto py-24">
          <SectionHead name="Projects" index={3} />
          {projects.projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              position={index % 2 === 1 ? "left" : "right"}
            />
          ))}
        </section>
      </main>
    </PageTransition>
  );
}
