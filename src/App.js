import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home-page/Home/Home";
import Whowe from "./components/Whowe/Whoweare/Whowe";
import Business from "./components/Business-info/Business/Business";
import Safe from "./components/Safety/Safe/Safe";
import Testimonialdata from "./components/Testimonial/Testimonialdata/Testimonialdata";
import Footer from "./components/Footer/Footer/Footer";
import Login from "./components/Login/Login/Login";
import Services from "./components/Services/Services/Services";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          <Whowe />
          <Business />
          <Safe />
          <Testimonialdata />
          <Footer />
        </Route>
      </Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
    </Router>
  );
}

export default App;
