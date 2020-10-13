import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  state = {
    user: "",
    name: "",
    email: "",
    password: "",
    city: "",
    citys: ["Vancouver", "Burnaby", "Richmond", "Surrey"],
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
    this.sendHttpRequest("PUT", "/user", data).then((response) => {
      this.setState({ response: response }, () => {
        console.log(this.state.response);
      });
    });
    this.setState({ name: "", email: "", password: "", city: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleRequest({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      recaptcha_response: ""
    });
  };

  onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const citys = this.state.citys.map((city) => (
      <option value={city} key={city}>
        {city}
      </option>
    ));
    return (
      <div className="form-container">
        <h1>Create an account</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <div>
              <input
                type="name"
                name="name"
                id="name"
                value={this.state.name}
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
            <label htmlFor="city">Your city</label>
            <div>
              <select
                type="input"
                name="city"
                id="city"
                value={this.state.city}
                onChange={this.onChangeHandle}
                className="select-input"
              >
                <option value="" defaultChecked>
                  Select your city
                </option>
                {citys}
              </select>
            </div>
          </div>

          <div>
            <button type="submit" className="btnLogin">
              Create my account
            </button>
          </div>

          <div className="forgotPassword">
            <p className="form-buttom-text">
              by creating an account, you agree to{" "}
              <Link to="/">our terms </Link>
              and conditions and <Link to="/">privacy policy</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
