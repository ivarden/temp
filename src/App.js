import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="App-header">
            <div className="container">
              <p>Header</p>
            </div>
          </nav>

          <section className="App-login">
            <div className="container">
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {/* <Route path="/forget" component={Forget} /> */}
              </Switch>
            </div>
          </section>

          <footer className="App-footer">
            <div className="container">
              <p>Footer</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
