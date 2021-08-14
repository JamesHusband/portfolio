import Welcome from "../../components/Welcome";
import React from "react";
import HeroScreen from "../../components/HeroScreen";
import "./style.scss";
export default function Homepage() {
  return (
    <HeroScreen>
      <Welcome />
    </HeroScreen>
  );
}
