import React, { Component } from "react";
import ValidationError from "./ValidationError";
import AuthApiService from "../../services/auth-api-service";

class SignupForm extends Component {
  state = {
    name: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
    repeatPassword: {
      value: "",
      touched: false,
    },
  };

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, touched: true },
    });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({
      repeatPassword: {
        value: repeatPassword,
        touched: true,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, password } = this.state;

    AuthApiService.postUser(name.value, password.value).then(() => {
      this.props.history.push("/login");
    });
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  }

  render() {
    const nameError = this.validateName();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <div className="registration-page">
        <form className="registration" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Username </label>
            <input
              type="text"
              className="registration__control"
              name="name"
              id="name"
              onChange={(e) => this.updateName(e.target.value)}
            />
            {this.state.name.touched && <ValidationError message={nameError} />}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="registration__control"
              name="password"
              id="password"
              onChange={(e) => this.updatePassword(e.target.value)}
            />
            <div className="registration__hint">
              6 to 72 characters, must include a number
            </div>
            {this.state.password.touched && (
              <ValidationError message={passwordError} />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input
              type="password"
              className="registration__control"
              name="repeatPassword"
              id="repeatPassword"
              onChange={(e) => this.updateRepeatPassword(e.target.value)}
            />
            {this.state.repeatPassword.touched && (
              <ValidationError message={repeatPasswordError} />
            )}
          </div>

          <div className="registration__button__group">
            <button
              type="submit"
              className="registration__button"
              disabled={
                this.validateName() ||
                this.validatePassword() ||
                this.validateRepeatPassword()
              }
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignupForm;
