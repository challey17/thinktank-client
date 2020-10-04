import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import Context from "../../Context";
import { API_ENDPOINT } from "../../config";

class LoginForm extends Component {
  static contextType = Context;
  state = {
    name: "",
    password: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    const { name, password } = this.state;

    AuthApiService.postLogin(name, password).then((res) => {
      TokenService.saveAuthToken(res.authToken);
      fetch(`${API_ENDPOINT}/users`, {
        headers: {
          Authorization: `Bearer ${res.authToken}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          this.context.login(user.id);
          this.props.history.push("/home");
        });
    });
  }
  render() {
    return (
      <div className="login-page">
        <form className="login" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              className="login__control"
              name="name"
              id="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login__control"
              name="password"
              id="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="login-div">
            <button type="submit" className="login__button">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
