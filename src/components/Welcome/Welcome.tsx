import React from "react";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <>
      <h1>James Husband</h1>
      <p>
        I'm a{" "}
        <Typewriter
          options={{
            strings: [
              "Full Stack",
              "TypeScript",
              "React",
              "Back End",
              "WordPress",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        Developer
      </p>
    </>
  );
}
