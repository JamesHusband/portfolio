import { Hero } from "@ui";

const heroContent = {
  greeting: "Hello World, my name is...",
  heading: "James Charles",
  subheading: "I write code & develop apps.",
  description:
    "Drawn to shiny code and complex systems. I love building tools and simplifying the messy into the manageable.",
};

export function Home() {
  return (
    <section
      role="region"
      className="min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center px-8"
    >
      <Hero {...heroContent} />
    </section>
  );
}
