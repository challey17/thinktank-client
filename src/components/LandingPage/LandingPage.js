import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>ThinkTank</h1>
      <p>
        Create and study flaschcards to retain what you know or solidify new
        concepts. Make sure you know what you've learned.
      </p>
      <p>||demo user||</p>
      <p>login : demo </p>
      <p>password: demodemo1234</p>
      <Link to="/login" className="landing-button">
        {" "}
        login
      </Link>
      <Link to="/signup" className="landing-button">
        {" "}
        sign-up
      </Link>
    </div>
  );
}
