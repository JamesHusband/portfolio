import { Home } from "@APP/sections";

export type Section = {
  id: string;
  name: string;
  component: React.ComponentType;
};

export const sections: Section[] = [
  {
    id: "home",
    name: "Home",
    component: Home,
  },
];
