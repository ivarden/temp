import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import Booking from "./Booking";

class Login extends Component {
  state = {
    user: "",
    email: "",
    password: "",
    response: null,
  };

  sendHttpRequest = (method, url, data) => {
    return axios({
      url: url,
      data: data,
      method: method,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
    })
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  };

  handleRequest = (data) => {
    this.sendHttpRequest("POST", "/login", data).then((response) => {
      this.setState({ response: response }, () => {
        console.log(this.state.response);
      });
    });
    this.setState({ email: "", password: "" });
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
            <label htmlFor="password">Password</label>
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
