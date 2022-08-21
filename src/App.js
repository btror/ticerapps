import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./UI/components/NavigationBar";
import Banner from "./UI/components/Banner";
import Footer from "./UI/components/Footer";
import Promotion from "./UI/components/Promotion";
import HomePage from "./UI/pages/Home/HomePage/HomePage";
import AppsPage from "./UI/pages/Apps/AppsPage/AppsPage";
import ContactPage from "./UI/pages/Contact/ContactPage/ContactPage";

function App() {
  return (
    <Router basename="/" hashType="noslash">
      <Container>
        <NavigationBar />
        <Banner />
        <Promotion />

        <Switch>
          <Route path="/apps" component={AppsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;
