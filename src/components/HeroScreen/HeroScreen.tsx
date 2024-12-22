import React from "react";
import "./style.scss";

export interface IHeroScreen {
  children: any;
}

const HeroScreen: React.FC<IHeroScreen> = ({ children }) => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container">{children}</div>
    </section>
  );
};

export default HeroScreen;
