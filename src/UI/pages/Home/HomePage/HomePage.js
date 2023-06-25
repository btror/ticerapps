import "./HomePage.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div className="home-content">
      <Container>
        <Row>
          <Col>
            <header>Software FOR students BY students</header>
            <p>
              In today’s learning environment, student expectations are
              changing. The rise of online education has introduced the need for
              more and better digital tools. To meet these expectations,
              Ticerapps provides fast, simple, and easily accessible web and
              mobile software solutions to assist students and teachers in the
              classroom or at home.
            </p>
            <header>Who WE are</header>
            <p>
              We are students who create software FOR students. We understand
              what students are looking for as they navigate this new education
              landscape. We know because we are doing the same...
            </p>
            <header></header>
            <p></p>
            <header>Contact</header>
            <p>Navigate to the contact page for more information.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <header></header>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
