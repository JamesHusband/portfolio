import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="flex-column">
      <Nav.Item className="under-construction">
        <FontAwesomeIcon icon="tools" /> <span>Under Construction</span>
      </Nav.Item>
    </Nav>
  );
}
