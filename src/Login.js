import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    user: "",
    // city: [],
    email: "",
    // emailError: false,
    password: "",
  };

  handleRequest = (user) => {
    fetch("https://api.saluderia.com/login", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(user),
    })
      //   .then((response) => response.json())
      .then((data) => console.log(data));
    //   .then((data) => this.setState({ user: data }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleRequest({
      email: this.state.email,
      password: this.state.password,
    });
  };

  onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-container">
        <h1>Log in to your account</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.onChangeHandle}
              ></input>
            </div>
          </div>

          <div>
            <label htmlFor="email">Password</label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.onChangeHandle}
              ></input>
            </div>
          </div>

          <div>
            <button type="submit" className="btnLogin">
              LOGIN
            </button>
          </div>

          <div className="forgotPassword">
            <Link to="forget-password">forgot password?</Link>
            <span> | </span>
            <Link to="register">create an account</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
