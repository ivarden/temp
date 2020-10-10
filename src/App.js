import React, { Component } from "react";
import "./App.css";

import Login from "./Login";

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <div className="container">
            <p>Header</p>
          </div>
        </nav>

        <section className="App-login">
          <div className="container">
            <Login />
          </div>
        </section>

        <footer className="App-footer">
          <div className="container">
            <p>Footer</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
