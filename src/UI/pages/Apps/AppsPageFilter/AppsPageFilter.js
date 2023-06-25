import React from "react";
import "./AppsPageFilter.css";

class AppsPageFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      ios: false,
      android: false,
      desktop: false,
    };
    this.all_btn_class = "rounded-pill filter-button-pressed";
    this.ios_btn_class = "rounded-pill filter-button";
    this.android_btn_class = "rounded-pill filter-button";
    this.desktop_btn_class = "rounded-pill filter-button";
  }

  selectAll = (event) => {
    this.setState({
      all: !this.state.all,
      ios: false,
      android: false,
      desktop: false,
    });
    this.all_btn_class = "rounded-pill filter-button-pressed";
    this.ios_btn_class = "rounded-pill filter-button";
    this.android_btn_class = "rounded-pill filter-button";
    this.desktop_btn_class = "rounded-pill filter-button";
    this.props.parentCallback("all");
    event.preventDefault();
  };

  selectIOS = (event) => {
    this.setState({
      ios: !this.state.ios,
      all: false,
      android: false,
      desktop: false,
    });
    this.all_btn_class = "rounded-pill filter-button";
    this.ios_btn_class = "rounded-pill filter-button-pressed";
    this.android_btn_class = "rounded-pill filter-button";
    this.desktop_btn_class = "rounded-pill filter-button";
    this.props.parentCallback("ios");
    event.preventDefault();
  };

  selectAndroid = (event) => {
    this.setState({
      android: !this.state.android,
      all: false,
      ios: false,
      desktop: false,
    });
    this.all_btn_class = "rounded-pill filter-button";
    this.ios_btn_class = "rounded-pill filter-button";
    this.android_btn_class = "rounded-pill filter-button-pressed";
    this.desktop_btn_class = "rounded-pill filter-button";
    this.props.parentCallback("android");
    event.preventDefault();
  };

  selectDesktop = (event) => {
    this.setState({
      desktop: !this.state.desktop,
      all: false,
      android: false,
      ios: false,
    });
    this.all_btn_class = "rounded-pill filter-button";
    this.ios_btn_class = "rounded-pill filter-button";
    this.android_btn_class = "rounded-pill filter-button";
    this.desktop_btn_class = "rounded-pill filter-button-pressed";
    this.props.parentCallback("desktop");
    event.preventDefault();
  };

  render() {
    return (
      <div className="filter-content">
        <button className={this.all_btn_class} onClick={this.selectAll}>
          All
        </button>

        <button className={this.ios_btn_class} onClick={this.selectIOS}>
          IOS
        </button>

        <button className={this.android_btn_class} onClick={this.selectAndroid}>
          Android
        </button>

        <button className={this.desktop_btn_class} onClick={this.selectDesktop}>
          Desktop
        </button>
      </div>
    );
  }
}

export default AppsPageFilter;
