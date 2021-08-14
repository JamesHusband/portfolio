import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="flex-column">
      <Nav.Item>
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon="home" /> <span>Home</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" className="nav-link">
          <FontAwesomeIcon icon="user" /> <span>About</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/resume" className="nav-link">
          <FontAwesomeIcon icon="book" /> <span>Resume</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/portfolio" className="nav-link">
          <FontAwesomeIcon icon="newspaper" /> <span>Portfolio</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/blog" className="nav-link">
          <FontAwesomeIcon icon="rss" /> <span>Blog</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact" className="nav-link">
          <FontAwesomeIcon icon="envelope" /> <span>Contact</span>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
