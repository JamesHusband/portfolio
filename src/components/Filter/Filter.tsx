import React from "react";
import { Col, Row, ListGroup } from "react-bootstrap";
import "./Filter.scss";
export default function Filter() {
  return (
    <Row>
      <Col className="justify-content-center d-flex">
        <ListGroup horizontal className="filter">
          <ListGroup.Item>All</ListGroup.Item>
          <ListGroup.Item>App</ListGroup.Item>
          <ListGroup.Item>Web</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}
