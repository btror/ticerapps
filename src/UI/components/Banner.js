import "./Banner.css";
import SocialMedia from "./SocialMedia";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import GithubIcon from "../../resources/images/githublogowhite.png";
import YoutubeIcon from "../../resources/images/youtubelogo2.png";
import AppStoreIcon from "../../resources/images/appleStore.png";
import GooglePlayIcon from "../../resources/images/googlePlay3.png";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-content">
        <Container>
          <Row>
            <Col className="col-2 banner-content-side">
              <div className="col-content">
                <SocialMedia
                  icon={YoutubeIcon}
                  link="https://www.youtube.com/channel/UCVLgPW_KUAasG7bWNJiqF3w/videos"
                />
                <SocialMedia
                  icon={GithubIcon}
                  link="https://github.com/btror"
                />
              </div>
            </Col>

            <Col className="col-8">
              <div className="col-content">
                <object id="logo" aria-label="promoted app logo" />
                <p>
                  check out our apps on the{" "}
                  <a
                    id="ios-link"
                    href="https://apps.apple.com/us/developer/brandon-rorie/id1603178697"
                  >
                    app store
                  </a>{" "}
                  and{" "}
                  <a
                    id="google-play-link"
                    href="https://play.google.com/store/apps/dev?id=8553325085989558637&hl=en_US&gl=US"
                  >
                    {" "}
                    google play
                  </a>
                </p>
              </div>
            </Col>

            <Col className="col-2 banner-content-side">
              <div className="col-content">
                <SocialMedia
                  icon={AppStoreIcon}
                  link="https://apps.apple.com/us/developer/brandon-rorie/id1603178697"
                />
                <SocialMedia
                  icon={GooglePlayIcon}
                  link="https://play.google.com/store/apps/dev?id=8553325085989558637&hl=en_US&gl=US"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Banner;
