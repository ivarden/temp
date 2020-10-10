import React, { Component } from "react";

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
      .then((data) => console.log(data))
    //   .then((data) => this.setState({ user: data }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleRequest({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  render() {
    return (
      <>
        <h1>Log in to your account</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <div>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
            </div>
          </div>

          <div>
            <label htmlFor="email">Password</label>
            <div>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
            </div>
          </div>

          <div>
            <button type="submit" className="btnLogin">
              LOGIN
            </button>
          </div>

          <div className="forgotPassword">
            <a href="">forgot password?</a>
            <span> | </span>
            <a href="">create an account</a>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
