import "../AboutPage/AboutPage.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function AboutPage() {
  return (
    <div className="about-content">
      <Container>
        <Row>
          <Col>
            <header>Creator</header>
            <p>
              UNC-Charlotte graduate, Brandon, received a BS in Computer Science
              and a minor in mathematics in December, 2021. He is currently
              pursuing a MS in Computer Science.
            </p>
            <p>
              In his free time he works on mobile and web apps. Ticerapps is the
              outgrowth of that.
            </p>
            <br />
            <img alt="" />
            <header>Contact</header>
            <p>Navigate to the contact page for more information.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
