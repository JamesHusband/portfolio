import { Home, About, Experience } from "@APP/sections";

export type Section = {
  id: string;
  name: string;
  component: React.ComponentType<{ index: number }>;
};

export const sections: Section[] = [
  {
    id: "home",
    name: "Home",
    component: Home,
  },
  {
    id: "about",
    name: "About",
    component: About,
  },
  {
    id: "experience",
    name: "Experience",
    component: Experience,
  },
];
