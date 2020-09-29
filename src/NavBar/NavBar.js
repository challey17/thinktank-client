import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import Context from "../Context";

export default class NavBar extends React.Component {
  static contextType = Context;

  logout = (e) => {
    e.preventDefault();
    TokenService.clearAuthToken();
    this.context.logout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="navbar">
        <Link to={`/home`} className="navlinks">
          ThinkTank
        </Link>
        {this.context.user_id && TokenService.hasAuthToken() ? (
          <a
            href="/logout"
            onClick={(e) => this.logout(e)}
            className="navlinks"
          >
            {" "}
            Logout
          </a>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    );
  }
}
