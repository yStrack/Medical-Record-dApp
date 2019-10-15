import React, { Component } from "react";
import api from "../../services/api";
import "./Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.failLogin = false;
  }

  handleSubmit = async e => {
    e.preventDefault();
    api
      .post("/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        const { token } = response.data;
        localStorage.setItem("user", token);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        this.failLogin = true;
        this.props.history.push("/login");
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="wrapper">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please login</h2>
          {this.failLogin && (
            <p className="fail">*Incorrect email or password</p>
          )}
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required=""
            autoFocus=""
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
