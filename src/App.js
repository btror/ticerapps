import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./UI/components/NavigationBar";
import Banner from "./UI/components/Banner";
import Footer from "./UI/components/Footer";
import Promotion from "./UI/components/Promotion";
import HomePage from "./UI/pages/Home/HomePage/HomePage";
import AboutPage from "./UI/pages/About/AboutPage/AboutPage";
import AppsPage from "./UI/pages/Apps/AppsPage/AppsPage";
import ContactPage from "./UI/pages/Contact/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <Container>
        <NavigationBar />
        <Banner />
        <Promotion />

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/apps">
            <AppsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;
