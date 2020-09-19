import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>ThinkTank</h1>
      <Link to={`/home`} className=" button navlinks">
        Home
      </Link>
      <Link to={`/`} className=" button navlinks">
        {" "}
        Logout
      </Link>
    </div>
  );
}
