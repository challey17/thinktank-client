import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h2>ThinkTank</h2>
      <p>This is a blurb about the app that will be short and sweet.</p>
      <Link to="/login" className="button login-button">
        {" "}
        login
      </Link>
      <Link to="/signup" className="button signup-button">
        {" "}
        sign-up
      </Link>
    </div>
  );
}
