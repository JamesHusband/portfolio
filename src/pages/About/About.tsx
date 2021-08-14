import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import Page from "../../components/Page";
export default function About() {
  return (
    <Page heading="About" subHeading="lorem ipsum dolor el ta met">
      <Row>
        <Col lg={4}>
          <Image src="https://via.placeholder.com/489x489" fluid />
        </Col>
        <Col lg={8}>
          <h3>Full Stack Web Developer</h3>
          <p>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
          </p>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </Col>
      </Row>
    </Page>
  );
}
