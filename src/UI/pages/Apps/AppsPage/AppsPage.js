import "../AppsPage/AppsPage.css";
import AppsPageApp from "../AppsPageApp/AppsPageApp";
import AppsPageFilter from "../AppsPageFilter/AppsPageFilter";
import { getAppLabels } from "../../../labels/CustomLabels";

import React from "react";

class AppsPage extends React.Component {
  constructor(props) {
    super(props);
    this.appList = getAppLabels();
  }

  showAllApps() {
    let updatedAppList = this.appList;
    for (const item of updatedAppList) {
      item.isVisible = true;
    }
    return updatedAppList;
  }

  showOnlyIOSApps() {
    let updatedAppList = this.appList;
    for (const item of updatedAppList) {
      if (item.appPlatform !== "App Store") {
        item.isVisible = false;
      } else {
        item.isVisible = true;
      }
    }
    return updatedAppList;
  }

  showOnlyAndroidApps() {
    let updatedAppList = this.appList;
    for (const item of updatedAppList) {
      if (item.appPlatform !== "Google Play") {
        item.isVisible = false;
      } else {
        item.isVisible = true;
      }
    }
    return updatedAppList;
  }

  showOnlyDesktopApps() {
    let updatedAppList = this.appList;
    for (const item of updatedAppList) {
      if (item.appPlatform !== "Desktop") {
        item.isVisible = false;
      } else {
        item.isVisible = true;
      }
    }
    return updatedAppList;
  }

  handleCallback = (childData) => {
    let updatedAppList = [];
    if (childData === "all") {
      updatedAppList = this.showAllApps();
    } else if (childData === "ios") {
      updatedAppList = this.showOnlyIOSApps();
    } else if (childData === "android") {
      updatedAppList = this.showOnlyAndroidApps();
    } else if (childData === "desktop") {
      updatedAppList = this.showOnlyDesktopApps();
    }
    this.setState({ appList: updatedAppList });
  };

  render() {
    return (
      <div className="apps-content">
        <AppsPageFilter parentCallback={this.handleCallback} />
        {this.appList.map((item) => {
          return (
            <div key={item.id}>
              <AppsPageApp
                appName={item.appName}
                appPricing={item.appPricing}
                appDescription={item.appDescription}
                appSteps={item.appSteps}
                appLink={item.appLink}
                appPlatform={item.appPlatform}
                appImage={item.appImage}
                bottomApp={item.bottomApp}
                isVisible={item.isVisible}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AppsPage;
