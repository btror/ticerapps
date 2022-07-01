import React from "react";
import "./SocialMedia.css";

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.icon = "";
    this.link = "";
  }

  render() {
    const divStyle = {
      background: `url(${this.props.icon})`,
      backgroundSize: "100%, 100%",
      position: "relative",
      width: "100%",
      height: "100%",
      border: "none",
    };
    return (
      <div className="social-media-content">
        <a href={this.props.link}>
          <div style={divStyle} />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
