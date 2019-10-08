import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Email Address"
          required=""
          autofocus=""
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required=""
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
