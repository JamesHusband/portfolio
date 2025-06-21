"use client";

import { Hero } from "@ui";
import { PageTransition } from "../lib/utils/PageTransition";

const heroContent = {
  greeting: "Hello World, my name is...",
  heading: "James Charles",
  subheading: "I write code & develop apps.",
  description:
    "Drawn to shiny code and complex systems. I love building tools and simplifying the messy into the manageable.",
};

const HomePage = () => {
  return (
    <PageTransition>
      <section
        role="region"
        className="min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center px-8"
      >
        <Hero {...heroContent} />
      </section>
    </PageTransition>
  );
}

export default HomePage;