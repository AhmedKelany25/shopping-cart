import { Fragment } from "react";
import Nav from "./nav/nav";
import Shopping from "./shopping/shopping"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Payment from "./payment/payment";

function App() {
  return (
    <Router>
    <Nav/>
    <Switch>
    <Route exact path="/"component={Shopping} />
    <Route exact path="/payment"component={Payment} />

    </Switch>

    </Router>
  );
}

export default App;
