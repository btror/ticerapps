import "../components/Promotion.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Promotion() {
  return (
    <div className="promotion-content">
      <Container>
        <Row className="promotion-title">
          <Col>
            <h1 className="animate-charcter">App Store Bundle!</h1>
          </Col>
        </Row>
        <Row className="promotion-app">
          <Col id="left-content">
            <header></header>
            <p id="app-name">Apportionment Methods</p>
            <p id="app-pricing">UP TO 33% OFF</p>
          </Col>

          <Col id="middle-content" xs={3}>
            <a href="https://apps.apple.com/us/app/apportionment-methods/id1603306969">
              <img alt="" />
            </a>
          </Col>

          <Col id="right-content">
            <header />
            <p id="app-pricing">Available for $1.99</p>
            <p id="app-link">
              <u>
                <a href="https://apps.apple.com/us/app/apportionment-methods/id1603306969">
                  view here
                </a>
              </u>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Promotion;
