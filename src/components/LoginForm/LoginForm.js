import React, { Component } from "react";
import TokenService from "../../services/token-service";
import Context from "../../Context";

class LoginForm extends Component {
  static contextType = Context;
  state = {
    name: "",
    password: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    const { name, password } = this.state;
    TokenService.saveAuthToken(TokenService.makeBasicAuthToken(name, password));
    // make a post fetch call
    // TokenService.saveAuthToken(res.authToken)
    // make a get fetch call with the authTOken
    this.context.login(1);
    this.props.history.push("/home");
  }
  render() {
    return (
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

        <div className="login__button">
          <button type="submit" className="login__button">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
