import Filter from "../../components/Filter";
import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./ProjectList.scss";

const Project = () => {
  return (
    <Col lg={4} className="project">
      <Image
        src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
        fluid
      />
    </Col>
  );
};

export default function ProjectList() {
  return (
    <div className="ProjectList">
      <Filter />
      <Row>
        <Project />
        <Project />
        <Project />
        <Project />
      </Row>
    </div>
  );
}
