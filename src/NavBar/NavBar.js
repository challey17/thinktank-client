import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to={`/home`} className="navlinks">
        ThinkTank
      </Link>
      <Link to={`/`} className="navlinks">
        {" "}
        Logout
      </Link>
    </div>
  );
}
