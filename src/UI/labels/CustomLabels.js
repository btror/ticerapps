import AdamsMethodLogo from "../../resources/images/adamfixicon.jpg";
import ApportionmentCalculatorDesktopLogo from "../../resources/images/apportionmentDesktop.png";
import ApportionmentCalculatorFreeLogo from "../../resources/images/apportionmentIcon.png";
import ApporitonmentCalculatorProLogo from "../../resources/images/apportionmentProIcon.jpg";
import ApportionmentMethodsLogo from "../../resources/images/allversion.jpg";
import LengthUnitConverterLogo from "../../resources/images/lengthIcon.png";
import HamiltonsMethodLogo from "../../resources/images/hamiltonmethodicon.jpg";
import JeffersonsMethodLogo from "../../resources/images/jeffersonicon.jpg";
import WebstersMethodLogo from "../../resources/images/webstericon.png";

export function getAppLabels() {
  return [
    {
      id: 1,
      appName: "Adam's method",
      appPricing: "Available on the App Store. Price is $0.99.",
      appDescription: "Use Adam's method to apportion seats to categories.",
      appSteps:
        "This app uses Adam's method of apportionment to apportion a user-specified amount of seats to categories (called states) based on each category's value (the population size).",
      appLink: "https://apps.apple.com/us/app/adams-method/id1603302822",
      appPlatform: "App Store",
      appImage: AdamsMethodLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 2,
      appName: "Apportionment calculator",
      appPricing:
        "Available for mac and PC. This version is completely free and doesn't contain ads.",
      appDescription:
        "Calculate quotas, fair-shares, and divisors of user-inputted divisions using Hamilton's, Jefferson's, Webster's and Adam's methods.",
      appSteps:
        "Select an apportionment method and enter the amount of items you want to apportion. After that, hit the add button to add states and enter their populations. Finally, press calculate and the results will be displayed. If the method isn't Hamilton, you can access a slider that changes the modified divisor to any value that is acceptable.",
      appLink: "https://github.com/btror/apportionmentCalculatorPy",
      appPlatform: "Desktop",
      appImage: ApportionmentCalculatorDesktopLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 3,
      appName: "Apportionment calculator free",
      appPricing: "Available on the Google Play Store. Contains ads.",
      appDescription:
        "A simple mobile application that allows users to calculate the quotas, fair-shares, and divisors of user-inputted divisions using Hamilton's, Jefferson's, Webster's and Adam's methods.",
      appSteps:
        "Select an apportionment method and enter the amount of items you want to apportion. After that, hit the add button to add states and enter their populations. Finally, press calculate and the results will be displayed.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.brandon.apportionmentcalculator&hl=en_US&gl=US",
      appPlatform: "Google Play",
      appImage: ApportionmentCalculatorFreeLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 4,
      appName: "Apportionment calculator pro",
      appPricing: "Available on the Google Play Store. Price is $0.99.",
      appDescription:
        "Calculate quotas, fair-shares, and divisors of user-inputted divisions using Hamilton's, Jefferson's, Webster's, Adam's methods, Huntington Hill's, and Lowndes' methods. This version allows users to change themes and is ad free.",
      appSteps:
        "Calculate quotas, fair-shares, and divisors of user-inputted divisions using Hamilton's, Jefferson's, Webster's, Adam's methods, Huntington Hill's, and Lowndes' methods. This version allows users to change themes and is ad free.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.brandon.apportionmentcalculatorpro&hl=en_US&gl=US",
      appPlatform: "Google Play",
      appImage: ApporitonmentCalculatorProLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 5,
      appName: "Apportionment methods",
      appPricing: "Available on the App Store. Price is $1.99.",
      appDescription:
        "Use Hamilton's, Jefferson's, Adam's, and Webster's methods to apportion seats.",
      appSteps:
        "This app uses Hamilton's, Jefferson's, Adam's, and Webster's methods of apportionment to apportion a user-specified amount of seats to categories (called states) based on each category's value (the population size).",
      appLink:
        "https://apps.apple.com/us/app/apportionment-methods/id1603306969",
      appPlatform: "App Store",
      appImage: ApportionmentMethodsLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 6,
      appName: "Length unit converter",
      appPricing: "Available on the Google Play Store. Contains ads.",
      appDescription:
        "A simple mobile application that allows users to convert a unit of length to a different imperial or metric unit.",
      appSteps:
        "Select a unit to convert from and then enter an amount in the text box beside it. Then, select a unit to convert to. Finally, press the convert button and the results will be listed at the bottom. Each result is saved to a list and is displayed on the page until removed.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.brandon.lengthconverter&hl=en_US&gl=US",
      appPlatform: "Google Play",
      appImage: LengthUnitConverterLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 7,
      appName: "Hamilton's method",
      appPricing: "Available on the App Store. Contains ads.",
      appDescription: "Use Hamilton's method to apportion seats to categories.",
      appSteps:
        "This app uses Hamilton's method of apportionment to apportion a user-specified amount of seats to categories (called states) based on each category's value (the population size).",
      appLink: "https://apps.apple.com/us/app/hamiltons-method/id1603178695",
      appPlatform: "App Store",
      appImage: HamiltonsMethodLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 8,
      appName: "Jefferson's method",
      appPricing: "Available on the App Store. Price is $0.99.",
      appDescription:
        "Use Jefferson's method to apportion seats to categories.",
      appSteps:
        "This app uses Jefferson's method of apportionment to apportion a user-specified amount of seats to categories (called states) based on each category's value (the population size).",
      appLink: "https://apps.apple.com/us/app/jeffersons-method/id1603292202",
      appPlatform: "App Store",
      appImage: JeffersonsMethodLogo,
      bottomApp: false,
      isVisible: true,
    },
    {
      id: 9,
      appName: "Webster's method",
      appPricing: "Available on the App Store. Price is $0.99.",
      appDescription: "Use Webster's method to apportion seats to categories.",
      appSteps:
        "This app uses Webster's method of apportionment to apportion a user-specified amount of seats to categories (called states) based on each category's value (the population size).",
      appLink: "https://apps.apple.com/us/app/websters-method/id1603298347",
      appPlatform: "App Store",
      appImage: WebstersMethodLogo,
      bottomApp: true,
      isVisible: true,
    },
  ];
}
