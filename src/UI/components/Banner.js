import "../components/Banner.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-container">
        <Container>
          <Row>
            <Col id="social-media" className="col-3">
              <a href="https://github.com/btror">
                <div id="github" />
              </a>
              <a href="https://www.linkedin.com/in/brandon-rorie1999/">
                <div id="linkedin" />
              </a>
              <a href="https://www.instagram.com/b.ticer.r/">
                <div id="instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCVLgPW_KUAasG7bWNJiqF3w/videos">
                <div id="youtube" />
              </a>
            </Col>

            <Col className="col-6">
              <center>
                <object id="logo" aria-label="promoted app logo" />
                <p>
                  check out our apps on the{" "}
                  <a
                    id="bannerLink1"
                    href="https://apps.apple.com/us/developer/brandon-rorie/id1603178697"
                  >
                    app store
                  </a>{" "}
                  and{" "}
                  <a
                    id="bannerLink2"
                    href="https://play.google.com/store/apps/dev?id=8553325085989558637&hl=en_US&gl=US"
                  >
                    {" "}
                    google play
                  </a>
                </p>
              </center>
            </Col>

            <Col id="social-media2" className="col-3">
              <a href="https://apps.apple.com/us/developer/brandon-rorie/id1603178697">
                <div id="app-store" />
              </a>
              <a href="https://play.google.com/store/apps/dev?id=8553325085989558637&hl=en_US&gl=US">
                <div id="google-play" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Banner;
