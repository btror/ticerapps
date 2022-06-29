import "../ContactPage/ContactPage.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function ContactPage() {
  return (
    <div className="contact-content">
      <Container>
        <Row>
          <Col>
            <header>Contact</header>
            <p>
              Please feel free to contact us for any inquiries. You can reach us
              at btrorapps@gmail.com.
            </p>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
