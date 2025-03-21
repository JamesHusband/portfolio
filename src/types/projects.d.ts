declare module "@data/projects.json" {
  interface Project {
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
  }

  const projects: {
    projects: Project[];
  };
  export default projects;
}
