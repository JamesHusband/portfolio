import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import Page from "../../components/Page";
export default function About() {
  return (
    <Page heading="About" subHeading="lorem ipsum dolor el ta met">
      <Row>
        <Col lg={4}>
          <Image src="/images/james.JPG" />
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
            Hey there! I'm a Full Stack Developer with a strong love for
            TypeScript, passionate about crafting clean, scalable web
            applications.
          </p>
        </Col>
      </Row>
    </Page>
  );
}
