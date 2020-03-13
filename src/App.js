import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Species from "./species";
import Admin from "./admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/species">
          <Species />
        </Route>
        <Route path="/">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
