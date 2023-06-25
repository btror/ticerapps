import React from "react";
import "./AppsPageApp.css";
import { Button, Col, Row, Container } from "react-bootstrap";

class AppsPageApp extends React.Component {
  constructor(props) {
    super(props);
    this.appName = "";
    this.appPricing = "";
    this.appDescription = "";
    this.appSteps = "";
    this.appImage = "";
    this.appLink = "";
    this.appPlatform = "";
    this.bottomApp = false;
    this.isVisible = true;
  }

  render() {
    return (
      <div>
        {this.props.isVisible ? (
          <Container>
            <Row>
              <Col>
                <header className="app-title">{this.props.appName}</header>
                <p className="pricing-information">{this.props.appPricing}</p>

                <header className="description-header">Description</header>
                <p className="description">{this.props.appDescription}</p>

                <details>
                  <summary>read more</summary>
                  <p className="read-more">{this.props.appSteps}</p>
                </details>

                <div className="app-graphic-section">
                  <a href={this.props.appLink}>
                    <img src={this.props.appImage} alt="" />
                  </a>
                </div>

                <div className="app-graphic-section">
                  <Button
                    variant="outline-dark"
                    id="storeButton"
                    href={this.props.appLink}
                    target="_blank"
                  >
                    {this.props.appPlatform}
                  </Button>
                </div>
              </Col>
            </Row>
            <br />
          </Container>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default AppsPageApp;
