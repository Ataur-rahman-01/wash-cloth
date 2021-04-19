import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home-page/Home/Home";
import Whowe from "./components/Whowe/Whoweare/Whowe";
import Business from "./components/Business-info/Business/Business";
import Safe from "./components/Safety/Safe/Safe";
import Testimonialdata from "./components/Testimonial/Testimonialdata/Testimonialdata";
import Footer from "./components/Footer/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
          <Whowe />
          <Business />
          <Safe />
          <Testimonialdata />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
