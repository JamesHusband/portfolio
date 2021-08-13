import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

export default function Navbar() {
  return (
    <div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <a href="#hero" className="nav-link">
              <FontAwesomeIcon icon="home" /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              <FontAwesomeIcon icon="user" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link">
              <FontAwesomeIcon icon="book" /> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link">
              <FontAwesomeIcon icon="newspaper" /> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              <FontAwesomeIcon icon="rss" /> <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              <FontAwesomeIcon icon="envelope" /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
