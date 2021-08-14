import React from "react";
import "./style.scss";

export interface IHeroScreen {
  children: any;
}

const HeroScreen: React.FC<IHeroScreen> = ({ children }) => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center hero">
      {children}
    </section>
  );
};

export default HeroScreen;
