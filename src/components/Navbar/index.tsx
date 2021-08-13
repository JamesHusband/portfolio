import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon="home" /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <FontAwesomeIcon icon="user" /> <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/resume" className="nav-link">
            <FontAwesomeIcon icon="book" /> <span>Resume</span>
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link">
            <FontAwesomeIcon icon="newspaper" /> <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="/blog" className="nav-link">
            <FontAwesomeIcon icon="rss" /> <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <FontAwesomeIcon icon="envelope" /> <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
