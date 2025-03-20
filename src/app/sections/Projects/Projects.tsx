import { Project } from "../../../components/Project/Project";

const projects = [
  {
    title: "Fantakuchen",
    description: "A website for showcasing my open source video game projects.",
    image: {
      src: "/fantakuchen.webp",
      alt: "Fantakuchen",
    },
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    links: {
      github: "https://github.com/yourusername/fantakuchen",
      external: "https://fantakuchen.com",
    },
    featured: true,
  },
  {
    title: "Fantakuchen",
    description: "A website for showcasing my open source video game projects.",
    image: {
      src: "/fantakuchen.webp",
      alt: "Fantakuchen",
    },
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    links: {
      github: "https://github.com/yourusername/fantakuchen",
      external: "https://fantakuchen.com",
    },
  },
];

export function Projects() {
  return (
    <section className="max-w-[900px] mx-auto py-24">
      {projects.map((project, index) => (
        <Project
          key={index}
          {...project}
          position={index % 2 === 1 ? "left" : "right"}
        />
      ))}
    </section>
  );
}
