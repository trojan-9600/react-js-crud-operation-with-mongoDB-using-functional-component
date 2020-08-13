import React from "react";
import "./Home.css";
import View from "./component/View";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./component/InputForm";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Link to="/inputform">
          <button className="create">Create</button>
        </Link>
        <Link to="/view">
          <button className="view">View</button>
        </Link>
        <div>
          <Switch>
            <Route component={View} exact path="/view">
              <View />
            </Route>
            <Route component={InputForm} path="/inputform">
              <InputForm show="true" />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
