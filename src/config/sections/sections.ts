import { Home, About } from "@APP/sections";

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
];
