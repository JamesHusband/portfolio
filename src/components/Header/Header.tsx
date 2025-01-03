import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../Navbar";
import { Image } from "react-bootstrap";

export default function MenuHeader() {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <Image
            src="https://i.ibb.co/cg88d96/IMG-0197.jpg"
            fluid
            roundedCircle
          />

          <h1 className="text-light">
            <a href="index.html">James Husband</a>
          </h1>
        </div>

        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="#" className="facebook">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>

        <Navbar />
      </div>
    </header>
  );
}
