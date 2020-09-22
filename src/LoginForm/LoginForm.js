import React from "react";

export default function LoginForm() {
  return (
    <form className="login">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input type="text" className="login__control" name="name" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="login__control"
          name="password"
          id="password"
        />
      </div>

      <div className="login__button">
        <button type="submit" className="login__button">
          Login
        </button>
      </div>
    </form>
  );
}
