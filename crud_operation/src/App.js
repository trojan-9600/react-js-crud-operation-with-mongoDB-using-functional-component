import React from "react";
import "./Home.css";
import View from "./component/View";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./component/InputForm";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
